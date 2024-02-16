// TODO: 컨트롤러 코드
const User = require('../model/User.js');

exports.main = function(req,res) {
    res.render('index.ejs');
}
exports.getSignin = function(req,res) {
    res.render('signin.ejs');
}
exports.getSignup = function(req,res) {
    res.render('signup.ejs');
}

// 회원가입 요청
exports.postSignup = function(req,res) {
    User.postSignup(req.body, function() {
        res.end();
    });
}

exports.postSignin = function(req,res) {
    User.postSignin(req.body,function(result){
        // 로그인 성공 시 true, 실패 시 false.
        result.length > 0 ? res.send(true) : res.send(false);
    });
}

exports.postProfile = function(req,res) {
    User.postProfile(req.body.userid,function(result){
        res.render('profile.ejs', {data : result});
    });
}

exports.profileEdit = function(req,res) {
    console.log('cuser body',req.body);
    User.profileEdit(req.body,function(){
        res.end();
    });
}

exports.profileDelete = function(req,res) {
    User.profileDelete(req.body.id,function() {
        res.end();
    })
}