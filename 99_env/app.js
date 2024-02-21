const express = require('express');
const app = express();
// .env에서 만들어둔 환경변수를 읽어오기 위한 설정
const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT;

app.get('/', function (req, res) {
    console.log('mysql pw', process.env.MYSQL_PASSWORD);
    console.log('api key', process.env.API_KEY);
    res.send('응답 완료');
});

app.listen(port,function(){
    console.log(`${port} is open`);
});