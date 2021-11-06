const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port =3001;

app.use(cors());
app.use('/api', (req, res)=> res.json({username:'SOOKMYUNG'}));

app.listen(port, ()=>{
    console.log(`express is running on ${port}`);
})