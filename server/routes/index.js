var express = require("express");
var router = express.Router();
const Hangul = require("hangul-js");

var language, maxlength, birth, name, mbti, color;
let result = new Array();

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

router.post('/about', function(req,res){
    birth = req.body.birth
    name = req.body.name
    mbti = req.body.mbti
    color = req.body.color
    return res.status(200).json({message:"success"})

})

router.get('/result', function(req, res){

    // 부수적으로 김수정이면 crystal 뽑아오는것도 하고싶긴한데 나중에 되면 수행하

    // 응답 예시
    // {
    //     "message": {
    //         "@type": "response",
    //         "@service": "naverservice.nmt.proxy",
    //         "@version": "1.0.0",
    //         "result": {
    //             "srcLangType":"ko",
    //             "tarLangType":"en",
    //             "translatedText": "tea"
    //         }
    //     }
    // }
  
  function getMbti(mbti) {
    // 파일에서 불러오기
    var fs = require("fs");
    fs.readFile(`../MBTI/${mbti}`, "utf8", function (err, contents) {
      const personalities = contents.split("\n");
      for (i in personalities) {
        result.push(personalities[i]);
      }
    });
  }

  function getColor(color) {
    // #FFFFFF (hex) 들어온다고 가정
    var colorname;
    var request = require("request");
    request.post(`http://thecolorapi.com/id?${color}`, function (
      error,
      response,
      body
    ) {
      if (!error && response.statusCode == 200) {
        res.writeHead(200, { "Content-Type": "text/json;charset=utf-8" });
        colorname = req.body.name.value;
        res.end(body);
      } else {
        res.status(response.statusCode).end();
        console.log("error = " + response.statusCode);
      }
    });

    if (language == "kor") {
      var trans = translation("kor", colorname);
      result.push(trans);
    } else {
      result.push(colorname);
    }
  }

  // 변수값들 객체로 넣고 null 인것은 객체에서 제거 후 키들만 뽑기
  attribute = { b: birth, n: name, m: mbti, c: color };

  for (propName in attribute) {
    if (attribute[propName] == null) {
      delete attribute[propName];
    }
  }
  property = Object.keys(attribute)[(b, n, c)];
  while (property.length > 2) {
    const random = Math.floor(Math.random() * property.length);
    property.splice(random, 1);
  }
  // 속성 2개에 따른 결과 result에 저장
  for (prop in property) {
    if (prop == "b") {
      getBirth(birth);
    }
    if (prop == "n") {
      getName(name);
    }
    if (prop == "m") {
      getMbti(mbti);
    }
    if (prop == "c") {
      getColor(color);
    }
  }

  // result 조합하는 코드

  let pick1 = Math.floor(Math.random() * result.length);
  let pick2 = Math.floor(Math.random() * result.length);
  let new_nickname = result[pick1] + result[pick2];

  // 메일과 인스타 아이디 조합하는 코드

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
  createNewInstaId(); // 새 인스타 아이디 반환
  let new_email = new_nickname + "example.com";
  let createNewGameNick = (new_nickname) => {
    // 게임 아이디 ㅈ->z ㅣ->i ... ol별의or픔 Lr의꿈 ol수일과심순oH ∑돌쇠∽
    if (language === "kor") {
      // 한국어일 경우만 변환 가능
      let new_gameNick = Hangul.disassemble(new_nickname);
      const fs = require("fs");
      let rawdata = fs.readFileSync("../cyworldfont.json", "utf8");
      let words = JSON.parse(rawdata); // json->js object
      console.log(words);

      for (i in new_gameNick) {
        if (words.hasOwnProperty(new_gameNick[i])) {
          new_gameNick[i] = words[new_gameNick[i]];
        }
      }
    }
    return new_gameNick;
  };
  createNewGameNick(); // 새 게임 아이디 반환

  res.send({ nickname: "결과" });
});

module.exports = router;
