const express = require('express');
const dotenv = require('dotenv');
const multer = require('multer');
const aws = require('aws-sdk');
const multerS3 = require('multer-s3');
const app = express();

dotenv.config();

const PORT = process.env.PORT;

// 미들웨어 설정
app.set('view engine', 'ejs');

// aws 설정
aws.config.update({
    accessKeyId: process.env.AWS_S3_ACCESS_KEY,
    secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY_ID,
    region: process.env.AWS_S3_REGION,
});

// s3 관련 multer 설정
const s3 = new aws.S3();
const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: process.env.AWS_S3_BUCKET,
        acl: 'public-read', // 파일 접근 권한
        key: (req, file, cb) => {
            cb(null, Date.now().toString() + '-' + file.originalname);
        },
    }),
});

// GET - index.ejs 렌더링
app.get('/', (req, res) => {
    res.render('index', { imageUrl: '' });
});

// POST - /upload
app.post('/upload', upload.single('image'), (req, res) => {
    console.log(req.file);
    res.render('index', { imageUrl: req.file.location });
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
