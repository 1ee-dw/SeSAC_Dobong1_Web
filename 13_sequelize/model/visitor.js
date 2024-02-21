/* exports.getVisitors = function() {
    return [
        {id:1, name:'aa', comment: 'hi'},
        {id:2, name:'bb', comment: 'hello'}
    ];
}  */   // DB 연결 전

const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'sesac',
    password: '5172',
    database:'sesac'
});

// 전체 데이터 조회
// get 요청을 통해 /visitor 로 들어왔을 때
exports.getVisitors=function(callback) {
    conn.query('select * from visitor',function(error,rows) {
        if (error) throw error
        console.log('visitor.js 전체 목록:', rows);
        callback(rows);
    });
};

exports.findVisitor = function(id, callback) {
    conn.query(`select * from visitor where id = ${id};`, function(err, rows) {
        if (err) throw err;

    callback(rows[0]);
    });
}

exports.registVisitor=function(data, callback) {
    conn.query(`insert into visitor values (null,'${data.name}','${data.comment}');`,
    function (error, rows) {
        if (error) throw error;
        console.log('visitor.js regist',rows);

        callback(rows.insertId);
    });
};

exports.deleteVisitor= function(id, callback) {
    // console.log(id);
    conn.query(`delete from visitor where id = ${id};`, function(error, rows) {
        if(error) throw error;
        callback(rows);
    });
};

exports.editVisitor = function(data, callback) {
    conn.query(`update visitor set name='${data.name}', comment='${data.comment}' where id = ${data.id}';`, function(err,rows){
        if (err) throw err;
        console.log('visitor.js patch', rows);
        callback(rows);
    })
}