const visitor = require('../model/visitor.js');

exports.main = function(req,res) {

    res.render('index.ejs');
}

/*  DB 연결 전 임시 데이터 
exports.getVisitors = function(req,res) {
    res.render('visitor.ejs', { data: visitor.getVisitors() });
} */

// DB 연결 후
exports.getVisitors = (req, res) => {
    visitor.getVisitors(function(result) {
        console.log('Cvisitor.js 전체 목록:', result);
        res.render('visitor.ejs',{data:result});
    })
    // res.render('visitor',{data:visitor.getVisitors()})
}

exports.findVisitor = function(req,res) {
    console.log(req.params);
    console.log(req.params.id);

    visitor.findVisitor(req.params.id,function() {})
}

exports.registVisitor = function(req,res) {
    visitor.registVisitor(req.body, function(result) {
        console.log('Cvisitor.js regist',result);
        res.send({id: result, name: req.body.name, comment: req.body.comment});
    });
}

exports.deleteVisitor = function(req,res) {
    console.log(req.body);
    visitor.deleteVisitor(req.body.id,function() {});
}

exports.editVisitor = function(req,res) {
    visitor.editVisitor(req.body, function(result) {
        res.send(result);
    });
}