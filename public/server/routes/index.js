var express = require('express');
var router = express.Router();

var language, maxlength, birth, name, mbti, color;

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

    // 값이 들어왔다는 전제하에 (입력이 없었으면 NULL일것)

    // NULL 아닌 특성을 최대 택2 하는 코드 

    // 특성에 맞는 키워드 뽑기

    // 결과에 따라 조합하는 코드

    // 메일과 인스타 아이디 조합하는 코드

    res.send({nickname: "dfsfa"});
})


// 여기에 페이지별로 서버 처리  -> 원하는 기능처리 하도록

module.exports = router;