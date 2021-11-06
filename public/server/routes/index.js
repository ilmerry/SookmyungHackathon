var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.send({message: "START"});
})

// 여기에 페이지별로 서버 처리 

module.exports = router;