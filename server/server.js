const express = require('express');
const app = express();
app.use(express.json())
const cors = require('cors');
const port =3001;
const route = require('./routes/index');

app.use(cors());
app.use('/', route);

// 연결하려는 주소와 라우터 연결하기

app.listen(port, ()=>{
    console.log(`express is running on ${port}`);
})