const express = require('express');
const router = express.Router();
const controller = require('../controller/Cuser.js');

router.get('/',controller.signIn);
router.get('/signupPage',controller.renderSignUp);
router.post('/signup',controller.signUp);

module.exports=router;