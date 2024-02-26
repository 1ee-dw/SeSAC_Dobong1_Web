const mysql = require('mysql2');

const conn = mysql.createConnection({
    host:"localhost",
    user:"sesac",
    password:"5172",
    database:"sesac"
});

exports.signUp = function (data,callback) {
    console.log(data);
    conn.query(`insert into user(pw, name, userid) values ('${data.password}','${data.name}','${data.id}');`,
        function(err, rows) {
            if (err) throw err;
            console.log(rows);
    })
    callback();
}

