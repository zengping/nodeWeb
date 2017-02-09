var mysql = require('mysql');

function query(sql) {
    var connection = mysql.createConnection({
        host: '133.130.100.92',
        user: 'root',
        password: 'wenzi_shop_123',
        database:'wenzi_shop'
    });
    connection.connect();
    //查询
    return new Promise(function(resolve, reject) {
        connection.query(sql, function(err, rows, fields) {
            if (err) {
                reject(Error(err));
            } else {
                resolve(rows);
            }
        });
        //关闭连接
        connection.end();
    });
}

exports.query = query;