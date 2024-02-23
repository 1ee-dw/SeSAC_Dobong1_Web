const express = require('express');
const app = express();
const port = 8080;
const route = require('./routes/route.js');

app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/',route);

app.listen(port,function() {
    console.log(`http://localhost:${port}`);
})