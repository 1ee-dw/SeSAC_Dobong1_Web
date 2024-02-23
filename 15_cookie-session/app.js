const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 8080;

app.set("views", "./views");
app.set("view engine", "ejs");

// cookie middleware
// ver1. 암호화 되지 않은 쿠키
app.use(cookieParser());

const cookieConfig = {
  /* 
    - maxAge: 쿠키의 수명, 1000이 1초인 밀리초 단위
    - expires: 만료날짜, GMT 시간 설정
    - httpOnly: http통신만 접근 허용 (true, false)
    - path:'/abc', //쿠키가 해당 경로와 그 하위경로에서만 활성화
      (default: '/')
    - secure: https 로 통신하는 경우에만 쿠키 전송 (true, false)
    - signed: 쿠키의 암호화 (true, false)
    */
  maxAge: 60 * 1000,
  httpOnly: true,
};
app.get("/", (req, res) => {
  res.render("cookie");
});

// 쿠키 설정
// res.cookie(쿠키이름, 쿠키값, 옵션)
app.get("/setCookie", (req, res) => {
  res.cookie("myCookie", "cookie~~", cookieConfig);
  res.send("set cookie 완료~~");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});