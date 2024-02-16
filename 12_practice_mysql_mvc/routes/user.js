// TODO: 라우트 설정
const express = require('express');
const router = express.Router();
const controller = require('../controller/Cuser.js')

// get /user
router.get('/',controller.main);
// get /user/signup
router.get('/signup',controller.getSignup);
// get /user/signin
router.get('/signin',controller.getSignin);

router.post('/signup',controller.postSignup);
router.post('/signin',controller.postSignin);
router.post('/profile',controller.postProfile);
router.post('/profile/edit',controller.profileEdit);
router.post('/profile/delete',controller.profileDelete);

module.exports=router;