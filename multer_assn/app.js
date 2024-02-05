const express = require('express');
const multer = require('multer');
const upload = multer({
    storage: multer.diskStorage({
        destination(request,file,done) {
            done(null,'uploads/');
        },
        filename(request,file,done) {
            const extension = path.extname(file.originalname);
            done(null,path.basename(file.originalname,extension) + Date.now() + extension);
        }
    }),
    limits: { filesize: 10*1024*1024 },
})
const path = require('path');
const port = 8080;
const app = express();

app.set('view engine', 'ejs');
app.set('views','./views');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/uploads", express.static(__dirname + "/uploads"));

app.get('/',function(req,res) {
    res.render('index.ejs');
});

app.post('/signup',upload.single("profile"),function(req,res) {
    res.render('result.ejs', {
        path: req.file.path,
        userInfo:req.body,
    });
});
app.listen(port,function() {
    console.log(`http://localhost:${port}`);
});