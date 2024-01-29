const express = require('express');
const app = express();
const port = 8080;

app.set('view engine','ejs');
app.set('views','./views');

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/',function(request,response) {
    response.render('axios_index.ejs')
});

app.get('/axios-get', function(request,response) {
    response.render('axios_get.ejs');
});

app.get('/axios-get-result',function(request,response) {
    response.send(request.query);
})

const userID = 'dleodnjs97';
const userPW = 'qwe123';

app.get('/axios-post', function(request,response) {
    response.render('axios_post.ejs');
})

app.post('/axios-post-result',function(request,response) {
    if (userID != request.body.userID || userPW != request.body.userPW) {
        response.send('입력하신 내용을 다시 확인해주세요.');
    } else { response.send(true) }
})

app.listen(port,function() {
    console.log(`http://localhost:${port}`);
})