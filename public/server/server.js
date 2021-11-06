const express = require('express');
const app = express();
const cors = require('cors');
const port =3001;

app.use(cors());
app.use('/api', (req, res)=> res.json({username:'bryan'}));

app.listen(port, ()=>{
    console.log(`express is running on ${port}`);
})