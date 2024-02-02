/*
미들웨어란?
- 요청과 응답 사이에서 다리 역할을 하는 소프트웨어
EX1) request의 body를 서버에서 읽을 수 있도록 도와주는 body_parser
EX2) request의 file에서 보내는 파일 정보를 확인할 수 있도를 도와주는 multer
EX3) static 파일 설정을 돕는 app.use(express.static(...));

미들웨어 1. views 설정 (set(...) 이용)
    view란?
    - 눈에 보이는 화면
    view 설정
    1. html 파일들을 어디에 모아둘 것인지(views 폴더 설정)
    2. html을 보여주기 위해 어떻게 할 것인지(view engine 설정)
        view engine이란?
            서버에서 보낸 변수를 클라이언트가 사용할 수 있도록 돕는 것

미들웨어 2. static 폴더 설정
    stataic 폴더란?
    - 외부에서 접근할 수 있게 설정해놓은 폴더
    - 프론트 js, css, img, 영상 등

미들웨어 3. body-parser 설정 (express 내장 모듈)
    body-parser가 req.body를 서버 측에서 사용할 수 있도록 parsing 해주는 역할
        (req.body는 기본적으로 undefined)

미들웨어 4. multer 설정 (설치 필요, 콘솔 창에 npm install multer)
    request.body input type='file'의 정보는 string
    실제 파일 업로드를 하고, 파일 정보를 확인하기 위해서 사용
*/

const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: false }));
// extended: true - queryString 모듈 사용 / extended: false - qs 모듈 사용(false가 보안적으로 조금 더 좋음)
app.use(express.json());
// 요청한 body에서 json 정보만 가져오도록 선언
app.use("/static", express.static(__dirname + "/public"));
app.use("/uploads", express.static(__dirname + "/uploads"));
// app.use(express.static("/uploads"));

app.set("view engine", "ejs");
app.set("views", "./views");

let tempDB = [
    {
        contentID: 1,
        title: "글 제목 1",
        content: "글 내용 1",
        img: null, // null or path(string)
    },
    {
        contentID: 2,
        title: "글 제목 2",
        content: "글 내용 2",
        img: null,
    },
    {
        contentID: 3,
        title: "글 제목 3",
        content: "글 내용 3",
        img: null,
    },
    {
        contentID: 4,
        title: "글 제목 4",
        content: "글 내용 4",
        img: null,
    },
];

const userID = "1ee_dw";

    const upload = multer({
        storage: multer.diskStorage({
            destination(req, file, done) {
                done(null, "uploads/");
            },
            filename(req, file, done) {
                const ext = path.extname(file.originalname);
                // extname(파일명): 확장자를 추출해주는 함수
                // basename(파일명, 확장자): 확장자를 제외한 파일명만 추출
                // basename(경로명): 확장자를 포함한 파일명 추출
                done(null, path.basename(file.originalname, ext) + Date.now() + ext);
            },
        }),
        limits: { fieldSize: 5 * 1024 * 1024 },
    });

/* 
라우팅이란, 특정 url로 특정 method에 대한 요청을 처리하는 것.
- url: 사용자가 정한 url
- method: get post put patch delete
CRUD(create, read, update, delete)
    1. get: 'R'ead
    - 브라우저의 url에 주소를 입력하는 모든 행위
    - localhost:8080/... 에 대한 화면을 보기 위해선
        /...에 대응하는 get 요청에 대한 응답(response)이 있어야 볼 수 있음
            response.send() response.end() response.write() response.render()...

    2. post: 'C'reate
    - 새로운 정보를 입력 및 추가할 때 사용하는 메소드

    3. put & patch: 'U'pdate
    - 수정 관련 메소드
    - put: 전체 수정 / patch: 일부 수정

    4. delete:'D'elete
    - 삭제 관련 메소드
*/
app.get("/", function(request, response) {
    response.render("index.ejs",{
        user:userID,
        contentData: tempDB,
    })
});
/* 
params vs query
    params
    - 서버에서 url을 표기할 때 /:params
    - 클라이언트에서 요청이 /123 이 들어왔을 때
        request.params 에서 정보 확인 가능 -> {params:'123'}
    - 네이버 블로그 처럼 여러 계정의 여러 글들을 조회할 때 주로 사용

    query
    - 서버에서 url을 표기할 때 /query
    - 클라이언트에서 url을 표기할 때 /query?element1=111&element2=222...
    - request.query에서 정보 확인 가능 -> { element1:111, element2:222 ... }
    - 검색, 필터링 등을 할 때 주로 사용
*/
app.get('/content/:contentID',function(request, response) {
    console.log(request.params);
    const isContent= tempDB.filter(function(object) {
       return object.contentID === Number(request.params.contentID);
    })[0];

    console.log(isContent); // {} or undefined
    if(isContent) {
        response.render('content.ejs',isContent);
    } else response.render('404.ejs');
});

app.post('/blog/post',upload.single('img'),function(request,response) {
    console.log(request.body);
    console.log(request.file);
    tempDB.push({
        contentID: tempDB.length !== 0 ? tempDB[tempDB.length-1].contentID + 1 : 1,
        title: request.body.title,
        content: request.body.content,
        img: request.file ? request.file.path : null,
    });
    console.log(tempDB[tempDB.length-1]);
    response.redirect('/');
});

app.get('/write',function(request,response) {
    response.render('writeContent.ejs');
});

app.delete('/blog/delete',function(request,response) {
    console.log(request.query);
    tempDB = tempDB.filter(function(object) {
        object.contentID !== Number(request.query.contentID);
    })
    console.log(tempDB);

    response.end();
})

app.get('*',function(request, response) {
    response.render('404.ejs')
});

app.listen(port, function() {
  console.log(`http://localhost:${port}`);
});
