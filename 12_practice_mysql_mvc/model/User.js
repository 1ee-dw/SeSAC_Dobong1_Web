// TODO: DB(mysql) 연결
const mysql = require('mysql');
const conn = mysql.createConnection({
    host: 'localhost',
    user:'sesac',
    password:'5172',
    database:'sesac'
})
// TODO: 모델 코드
/* mvc 작동 순서
1. view 에서 요청을 받으면
2. 컨트롤러 에서 정보를 받은 후 모델로 전달(body,query,params 등...)
3. 모델에서 DB로 요청
4. 모델로부터 데이터의 삽입/ 삭제/ 조회 등의 결과값을 컨트롤러로 반환
5. 컨트롤러에서 response 객체를 통해 view로 응답.
*/
// 특정 회원 정보 등록
exports.postSignup = function(data, callback) {
    conn.query(`insert into user(userid, name, pw) values ('${data.userid}','${data.name}','${data.password}');`,
    function(err,rows) {
        if(err) throw err;
        callback();
    });
};

exports.postSignin = function(data, callback) {
    conn.query(`select * from user where userid='${data.userid}' and pw='${data.password}' limit 1;`,
    // limit 1 걸어준 이유 : 회원가입 시 id의 중복검사를 하지 않아서 여러개의 데이터가 나올 수 있기 때문.
    function(err,rows) {
        if(err) throw err;
        callback(rows);
    })
}

exports.postProfile = function(id,callback) {
    conn.query(`select * from user where userid='${id}' limit 1;`,
    function(err,rows) {
        if(err) throw err;
        callback(rows[0]);
    })
}

exports.profileEdit = function(data,callback) {
    console.log('model user data',data)
    conn.query(`update user set pw='${data.password}', name='${data.name}' where id='${data.id}';`,
    function(err,rows) {
        if(err) throw err;
        callback();
    });
};

exports.profileDelete = function(id, callback) {
    conn.query(`delete from user where id = '${id}';`,
    function(err, rows) {
        if(err) throw err;
        callback();
    });
}