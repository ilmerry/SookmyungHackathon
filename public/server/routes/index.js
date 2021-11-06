var express = require('express');
var router = express.Router();

var language, maxlength, birth, name, mbti, color;

// env로 보호할 예정
var client_id = 'KPC6oEv7Qv7pfNvfVIOn';
var client_secret = 'wWNtGZxuFG';

// localhost:3001 에서 돌아가는것
router.get('/', function(req, res){
    res.send({message: "START"});
})

// front

// -> 2페이지 프런트
// inform = {language,page}
// fetch(`${API_URL = 서버주소}/result`, {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(inform),  
//     => 이렇게 전달{maxlength:값, page:페이지값}
// })


router.get('/result', function(req, res){

    if (req.body.page==2 ) {
        language=req.body.language
    }
    if (req.body.page == 3){
        maxlength=req.body.maxlength
    }
    if (req.body.page == 4){
        birth = req.body.birth
        name = req.body.name
        mbti = req.body.mbti
        color = req.body.color
    }

    result=[] 
    // 값이 들어왔다는 전제하에 (입력이 없었으면 NULL일것)
    
    // 각각 함수들
    function translation(lan, string){
        var source, target
        if (lan=="en"){source="kor", target="en"}
        else{ source="en", target="kor"}
        var api_url = 'https://openapi.naver.com/v1/papago/n2mt';
        var request = require('request');
        var options = {
            url: api_url,
            form: {'source':source, 'target':target, 'text': string},
            headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}
        };
        request.post(options, function (error, response, body) {
            if (!error && response.statusCode == 200) {
            res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
            res.end(body);
            // res.writeHead, end 꼭 필수인지 모르겠음
            return (res.body.message.result.translatedText)
            // body가 들어가는지 모르겟음
            } else {
            res.status(response.statusCode).end();
            console.log('error = ' + response.statusCode);
            }
        });
    }
    function getBirth(birth){ // format:990608 
        var day = birth.slice(-2); // 08
        var month = birth.slice(2,4); // 06 
        var year = birth.slice(0,3); // 99
        result.push(day);
        result.push(month);
        result.push(year);

        month12 = ['January', 'Febraury', 'March', 'April', 'May', 
        'June','July','August','September','October','November','December'];
        result.push(month12[parseInt(month)+1]);
    }
    function getName(name){ // 파파고 api !! 프론트에서 한글로만 성명받는것으로 제한

        // 제한언어 영어이면 한글->영어로 변환
        if (language == "en"){
            var trans = translation("en", name);
            result.push(trans);
        }else{
            result.push(name);
        }

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

    }
    function getMbti(mbti){ // 파일에서 불러오기
        var fs = require('fs');
        fs.readFile(`../MBTI/${mbti}`,'utf8', function(err, contents){
            const personalities = contents.split('\n');
            for(i in personalities){
                result.push(personalities[i]);
            }
        });
    }
    
    function getColor(color){  // #FFFFFF (hex) 들어온다고 가정 
        var colorname;
        var request = require('request');
        request.post(`http://thecolorapi.com/id?${color}`, function (error, response, body) {
            if (!error && response.statusCode == 200) {
            res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
            colorname = req.body.name.value;
            res.end(body);
            } else {
            res.status(response.statusCode).end();
            console.log('error = ' + response.statusCode);
            }
        });
        
        if (language=="kor"){
            var trans=translation("kor", colorname)
            result.push(trans)
        }else{
            result.push(colorname)
        }

    }

    // 변수값들 객체로 넣고 null 인것은 객체에서 제거 후 키들만 뽑기
    attribute={ b:birth, n:name, m:mbti, c:color}
    
    for (propName in attribute){
        if (attribute[propName]==null){
            delete attribute[propName];
        }
    }
    property = Object.keys(attribute) [b,n,c]
    while (property.length>2){
        const random = Math.floor(Math.random()*property.length);
        property.splice(random,1)
    }
    // 속성 2개에 따른 결과 result에 저장
    for (prop in property){
        if (prop=="b"){ getBirth(birth);}
        if (prop=="n"){ getName(name); }
        if (prop=="m"){ getMbti(mbti);}
        if (prop=="c"){ getColor(color);}
    }

    
    // result 조합하는 코드

    // 메일과 인스타 아이디 조합하는 코드



    res.send({nickname: "결과"});
})


module.exports = router;