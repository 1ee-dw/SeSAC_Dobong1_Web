const express = require('express');
const app = express();
const port = 8080;

app.set('view engine','ejs');
app.set('views','./views');

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/', function(req, res){
    res.render('index.ejs');
});

app.get('/ajax', function(req,res) {
    console.log(req.query);
    // res.send('ajax 응답 완료');
    /* res.send({
        name:req.query.name,
        gender:req.query.gender,
    }) */
    res.send(req.query);
})

app.post('/ajax', function(request, response) {
    console.log(request.body);
    response.send(request.body);
})

app.get('/axios', function(request, response) {
    console.log(request.query);
    response.send(request.query);
})

app.post('/axios', function(request, response) {
    console.log(request.body);
    response.send(request.body);
})

app.get('/fetch', function(request,response) {
    console.log(request.query);
    response.send('fetch 응답 완료');
})

app.post('/fetch',function(request,response) {
    console.log(request.body);
    response.send(request.body);
})

app.get('/open-api',function(request,response) {
    response.render('api.ejs');
})

app.listen(port, function() {
    console.log(`http://localhost:${port}`);
});