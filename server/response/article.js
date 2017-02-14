var querystring = require("querystring");
var sql = require("../mysqlQuery");

function root(request, response, routes) {
    getCate(request, response, routes).then((data) => {
        let ids = [];
        data.forEach((o) => {
            ids.push(o.id);
        });
        let idlist = ids.join();
        let start = (routes[4] - 1) * 10
        let s = 'SELECT * from a_articles where category_id in (' + idlist + ') order by id desc limit ' + start + ', 10';
        querySQL(s, response);
    });
}

function getCate(request, response, routes) {
    let s = 'SELECT * from a_categories where root_id=' + routes[3];
    return new Promise(function(resolve, reject) {
        sql.query(s).then((data) => {
            resolve(data);
        }, (err) => {
            console.log(err);
        });
    });
}

function list(request, response, routes) {
    let s = 'SELECT * from a_categories where root_id=' + routes[3];
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

exports.root = root;
exports.list = list;