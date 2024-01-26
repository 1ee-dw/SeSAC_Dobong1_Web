const express = require('express');
const app = express();
const PORT = 8080;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', function (req, res) {
    res.render('practice_index.ejs');
})

app.get('/getForm', function (req, res) {
    res.render('practice_result.ejs', {
        title:"GET",
        userInfo: req.query,
        addInfo:false,
    });

})

app.post('/postForm', function (req, res) {
    res.render('practice_result.ejs',{
        title:'POST',
        userInfo: req.body,
        addInfo:true,
    });
})

app.listen(PORT,function () {
    console.log(`http://localhost:${PORT}`);
})