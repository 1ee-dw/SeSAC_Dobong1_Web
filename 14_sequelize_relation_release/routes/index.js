const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain');

// TODO: 라우터 정의

router.get('/',controller.main);

module.exports = router;