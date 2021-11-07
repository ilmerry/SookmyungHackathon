const express = require("express");
const router = express.Router();
const Hangul = require("hangul-js");
const { type } = require("os");
const request = require("request");
const rhs = require('rhs-color');
const fs = require('fs');

var language, maxlength, birth, name, mbti, color;

// env로 보호할 예정
var client_id = "KPC6oEv7Qv7pfNvfVIOn";
var client_secret = "wWNtGZxuFG";

// localhost:3001 에서 돌아가는것
router.get('/', function(req, res){
    res.send({message: "START"});
})

router.post('/language', function(req, res){
    language=req.body.language
    return res.status(200).json({message: "success"});
})

router.post('/maxlength', function(req, res){
    maxlength=req.body.maxlength
    return res.status(200).json({message: "success"});
})


router.post('/result', function(req, res){

    birth = req.body.birth
    name = req.body.name
    mbti = req.body.mbti
    color = req.body.color
    
    let result=[]

    function translation(lan, string) {
        var source, target;
        if (lan == "en") {
          (source = "ko"); (target = "en");
        } else {
          (source = "en"); (target = "ko");
        }
        var api_url = "https://openapi.naver.com/v1/papago/n2mt";
        var options = {
          url: api_url,
          form: { source: source, target: target, text: string },
          headers: {
            "X-Naver-Client-Id": client_id,
            "X-Naver-Client-Secret": client_secret,
          },
        };
        request.post(options, function (error, response, body) {  //response 말고 body 사용할것.
          if (!error && response.statusCode == 200) {
              
              const json = JSON.parse(body);
              const trans = json.message.result.translatedText;
              let nameTrans = trans.replace(/(\s*)/g, ""); // 모든 공백 제거
              nameTrans = nameTrans.replace(',','');
              nameTrans = nameTrans.replace('.','');
              return nameTrans
          } else {
            res.status(response.statusCode).end();
          }
        });
    }

    function getBirth(birth) {  
        const birth_data = birth.split(' ');
        const mmm =parseInt(birth_data[1]);
        let month3 = [
        "Jan","Feb","Mar",  "Apr","May","Jun",
        "Jul","Aug","Sep",  "Oct","Nov","Dec"
        ];
        let season = [
          "Spring", "Summer", "Autum", "Winter"
        ]
        let index;
        switch(mmm){
          case 3: case 4: case 5:
            index=0; break;
          case 6: case 7: case 8:
            index=1; break;
          case 9: case 10: case 11:
            index=2; break;
          case 12: case 1: case 2:
            index=3; break;
        }
        result.push(birth_data[0]); // dd
        result.push(birth_data[1]); // mmm
        result.push(birth_data[2]); // yyyy
        result.push(month3[mmm - 1]);
        result.push(season[index]);
    }
    
    function getName(name) { //파파고 api -> 프론트 한글성명만

        // 제한언어 영어이면 한글->영어로 변환
        if (language == "en") {
          let tName=translation("en", name);
            result.push(tName)
          
        } else {
            if (name!=undefined){result.push(name);}
        }
    }


  function getMbti(language, mbti) {  

    var i=0;
    while (i < mbtijson[language][mbti].length) {
      result.push(mbtijson[language][mbti][i]);
      i++;
    }
  }
  
  function getColor(color) { // color : hex (#없음)
    var colorname = rhs.fromRgb("#"+color);
    colorname = rhs.name(colorname);
    const colors = colorname.split(' ');
  
    if (language == "kor") {
        for (i in colors){
            var trans = translation("kor", colors[i]);
            if (trans!=undefined){result.push(trans);}
        }
    } else {
        for (i in colors){
            if(trans!=undefined){result.push(colors[i]);}
        }
    }
  }


  birth="08 009 1999"
  name="윤다빈"
  mbti="ENFP"
  color="F012FF"
  language="en"
  maxlength=10
  

  attribute = { b: birth, n: name, m: mbti, c: color };
  for (propName in attribute) {
    if (attribute[propName] == null) {
      delete attribute[propName];
    }
  }
  property = Object.keys(attribute);
  while (property.length > 2) {
    const random = Math.floor(Math.random() * property.length);
    property.splice(random, 1);
  }
  // 속성 2개에 따른 결과 result에 저장
    for (prop in property) {
        if (property[prop] == "b") {getBirth(birth);}
        if (property[prop] == "n") { getName(name);}
        if (property[prop] == "m") { getMbti(language, mbti);}
        if (property[prop] == "c") { getColor(color);}
    }

    // !!! 추후 trans + nickComb 병합 예정
    function nickComb(){
        let pick1 = Math.floor(Math.random() * result.length);
        let pick2 = Math.floor(Math.random() * result.length);
        while(pick1==pick2){
            pick2= Math.floor(Math.random() * result.length)
        }
        if (language=="en"){result[pick1][0]=result[pick1][0].toLowerCase()}

        let w1=result[pick1]
        let w2=result[pick2]
        while((w1.length+w2.length)>maxlength){
            if(w1.length>w2.length) { w1=w1.slice(0,-1);}
            else { w2=w2.slice(0,-1)}
        }
        return w1+w2
    }
    let newNick =nickComb()

    let transNick;
    if(language=="en"){
        transNick=translation("ko",newNick);
        if (transNick==undefined){transNick="숙명"}
    }else{
        transNick=translation("en",newNick);
        if (transNick==undefined){transNick="sookmyung"}
    }

    let createNewInstaId = (new_nickname) => {
    // 인스타 아이디 ._ 랜덤첨가
        let pick_ = Math.floor(Math.random() * maxlength);
        let pick_dot = Math.floor(Math.random() * maxlength);
        let new_instaId = [
            new_nickname.slice(0, pick_),
            "_",
            new_nickname.slice(pick_),
        ].join("");
        new_instaId = [
            new_nickname.slice(0, pick_dot),
            ".",
            new_nickname.slice(pick_dot),
        ].join("");
        return new_instaId;
    };

    let instaId;
    if (language=="en"){ instaId = createNewInstaId(newNick);}
    else { instaId = createNewInstaId(transNick); }
  
    let new_email;
    if (language=="en"){ new_email = newNick + "@example.com";}
    else {  new_email = transNick + "@example.com"; }

    let createNewGameNick = (new_nickname) => {
        if (language === "kor") {
            let new_gameNick = Hangul.disassemble(new_nickname);
            let i = 0;
            while (i<new_gameNick.length){
                if (cyworldfont.hasOwnProperty(new_gameNick[i])) {
                    new_gameNick[i] = cyworldfont[new_gameNick[i]];
                    i++;
                }
            }
            new_gameNick = Hangul.aassemble(new_gameNick);
            return new_gameNick;
        };
    }
    let new_gameId;
    if (language=="en"){ new_gameId = newNick;}
    else { new_gameId = createNewGameNick(transNick);}
    console.log(result)
    console.log(newNick, transNick, new_email,instaId, new_gameId)
    return res.send({newNick, transNick,new_email, instaId, new_gameId})
})


  


const mbtijson = {
  "en":{
      "INTJ":[
          "INTJ", "Inspector", "Quiet", "Reflective", "Practical",
          "Action", "Objective", "Rational", "Logical", "Decisive",
          "Plan", "Rigid"
      ],
      "INTP":[
          "INTP"

      ],
      "ENTJ":[
          "ENTJ", "supervisor", "Energizing", "Communicative", "Practical",
          "Objective", "Rational", "Logical", "Decisive", "planned",
          "Rigid"  
      ],
      "ENTP":[
          "ENTP", "Visionary", "Energizing", "Communicative", "Open", "Strategic",
          "Future", "Objective", "Rational", "Logical", "Flexible",
          "Curious", "Informal", "Assertive", "Competitive"
      ],
      "INFJ":[
          "INFJ"
      ],
      "INFP":[
          "INFP"
      ],
      "ENFJ":[
          "ENFJ", "Teacher", "Energizing", "Communicative", "Open",
          "Strategic", "Future", "Empathetic", "Cooperative", "Loyal",
          "Flexible", "Curious", "Informal"
      ],
      "ENFP":[
          "ENFP", "Champion", "Energizing", "Communicative", "Open",
          "Strategic", "Future", "Empathetic", "Cooperative", "Loyal",
          "Flexible", "Curious", "Informal", "Innovation", "Imaginative",
          "Enthusiastic", "Expressive"
      ],
      "ISTJ":[
          "ISTJ", "Inspector", "Quiet", "Reflective", "Practical",
          "Action", "Objective", "Rational", "Logical", "Decisive",
          "Plan", "Rigid"
      ],
      "ISFJ":[
          "ISFJ", "Protector", "Quiet", "Reflective", "Practical",
          "Action", "Empathetic", "Cooperative", "Loyal", "Decisive",
          "Plans", "Rigid"
      ],
      "ESTJ":[
          "ESTJ", "supervisor", "Energizing", "Communicative", "Practical",
          "Objective", "Rational", "Logical", "Decisive", "planned",
          "Rigid"
      ],
      "ESFJ":[
          "ESFJ"
      ],
      "ISTP":[
          "ISTP", "Crafter", "Quiet", "Reflective", "Practical",
          "Action", "Objective", "Rational", "Logical", "Flexible",
          "Curious", "Informal"
      ],
      "ISFP":[
          "ISFP", "Adventurer", "Composer", "Quiet", "Reflective",
          "Practical", "Action", "Empathetic", "Cooperative", "Loyal",
          "Flexible", "Curious", "Informal"
      ],
      "ESTP":[
          "ESTP"
      ],
      "ESFP":[
          "ESFP"
          
      ]
  },
  "kor":{
      "INTJ":[

      ],
      "INTP":[

      ],
      "ENTJ":[
          "대담한", "통솔", "시간엄수", "직관", "용기",
          "진취적인", "결정력", "냉철한", "판단력", "이성적",
          "의지력", "사회성", "성취"
      ],
      "ENTP":[
          "뜨거운", "논쟁", "타협", "자주적", "비판",
          "별난", "이념", "결단력", "선의", "독립적인",
          "자유분방한", "주체"
      ],
      "INFJ":[
          
      ],
      "INFP":[
          
      ],
      "ENFJ":[
          
      ],
      "ENFP":[
          "재기발랄", "활동가", "자유로운", "활발", "매력",
          "인정", "리더", "용기", "상상"
      ],
      "ISTJ":[
          
      ],
      "ISFJ":[
          
      ],
      "ESTJ":[
          "엄격한", "관리자", "논리적인", "체계적인", "효율적인", 
          "성실함", "추진력",  "현실적",  "책임감"
      ],
      "ESFJ":[
          
      ],
      "ISTP":[
          
      ],
      "ISFP":[
          
      ],
      "ESTP":[
          "모험", "사업가", "친근한", "직설적", "기회",
          "열정", "활력", "충만한", "영감", "설득력",
          "타고난", "리더"
      ],
      "ESFP":[
          
      ]
  }
}

const cyworldfont = {
   
    "ㄱ": "7",
    "ㄴ": "L",
    "ㄹ": "z",
    "ㅇ": "o",
    "ㅈ": "z",
    
    
    "ㅏ": "r",
    "ㅡ": "_",
    "ㅣ": "i"
}

module.exports = router;
