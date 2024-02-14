const express = requires('express');
const app = express();
const port = 8080;

app.set('view engine','ejs');
app.set('views','/views');

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use('/public', express.static(__dirname + '/static'));
app.use('/views', express.static(__dirname + '/views'));

const route = require('./routes/index.js')

app.use('/',route);
app.get('*',function(req,res) {
    res.render('404.ejs');
})

app.listen(port,function() {
    console.log(`http://localhost:${port}`);
})