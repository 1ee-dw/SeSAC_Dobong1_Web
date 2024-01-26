const express = require('express');
const app = express();
const PORT = 8080;

app.set('view engine', 'ejs');
app.set('views','./views');
// body-parser 미들웨어 등록
app.use(express.urlencoded({ extended:true }));
app.use(express.json()); // json 형식으로 데이터를 주고받음

app.get('/',function(req,res){
    res.render('index.ejs');
});

app.get('/getForm',function(req,res){
    console.log(req.query);
    // res.send(`아아아아아아`);
    res.render("result.ejs", {
        title:'GET',
        userInfo: req.query
    });
})

app.post('/postForm',function(req,res){
    // post 요청은 request.body에 담겨져 온다.
    console.log(req.body);
    // res.send(`
    // <ul>
    //     <li>${req.body.id2}</li>
    //     <li>${req.body.pw2}</li>
    // </ul>
    // `);
    res.render('result.ejs', {
        title:'POST',
        userInfo: req.body 
    })
})

app.post('/js-form-check',function(req,res){
    console.log(req.body);
    res.send('validation 응답');
    });

app.listen(PORT, function(){
    console.log(`http://localhost:${PORT}`);
})