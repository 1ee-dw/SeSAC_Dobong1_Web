const express = require(`express`);
const app = express();
const PORT = 8080;

app.set('view engine', 'ejs');
app.set('views','./views');
app.use('/static', express.static(__dirname + '/public'))

app.get(`/`, (request, response) => {
    // response.send(`Hello express! 안녕하세요 익스프레스!`);
    response.render("index.ejs",{
        btns:['apple','banana'],
        isLogin:true,
        userInfo:{
            name:'leedw',
            msg:`오늘은 ${new Date().getDate()}일 입니다`
        }
    });
});

// 라우팅
app.get('/register', (request,response) => {
    response.render('register.ejs');
})

app.get(`/login`, (req,res) => {
    res.render('login');
})

// page not found(404 page). 맨 마지막에 라우팅 해야함
app.get(`*`, (req,res) => {
    res.render(`404`);
})
app.listen(PORT, function () {
    console.log(`http://localhost:${PORT}`);
});
