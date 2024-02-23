const express = require('express');
const router = express.Router();
const controller = require('../controller/Cuser.js');

router.get('/',controller.signIn);
router.get('/signup',controller.signUp);
// router.get('/main',controller.main);

module.exports=router;