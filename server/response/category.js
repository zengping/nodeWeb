var querystring = require("querystring");
var sql = require("../mysqlQuery");

function list(request, response) {
    let s = 'SELECT * from a_categories where root_id=0';
    querySQL(s, response);
}

function receiveData(request) {
    var postData = "";
    request.addListener("data", function (data) {
        postData += data;
    });
    
    return new Promise(function(resolve, reject) {
        request.addListener("end", function () {
            var query = JSON.parse(postData);
            resolve(query);
        });
    });
}

function querySQL(s, res) {
    sql.query(s).then((data) => {
        res.okMsg.data = data;
        res.write(JSON.stringify(res.okMsg));
        res.end();
    }, (err) => {
        res.errMsg.data = err;
        res.write(JSON.stringify(res.errMsg));
        res.end();
    });
}

exports.list = list;