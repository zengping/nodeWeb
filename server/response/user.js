var querystring = require("querystring");
var sql = require("../mysqlQuery");

function start(request, response) {
  console.log("Request handler 'start' was called.");

var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" enctype="multipart/form-data" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="file" name="upload">'+
    '<input type="submit" value="Submit text" />'+
    '</form>'+
    '</body>'+
    '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();

}

function list(request, response) {
    let s = 'SELECT * from a_categories';
    querySQL(s, response);
}

function add(request, response) {
    receiveData(request).then((query) => {
        let s = 'insert into user(name) values("'+query.name+'")';
        querySQL(s, response);
    });
}

function update(request, response, routes) {
    receiveData(request).then((query) => {
        let s = 'update user set name="'+query.name+'" where id='+routes[3];
        querySQL(s, response);
    });
}

function del(request, response, routes) {
    let s = 'delete from user where id='+routes[3];
    querySQL(s, response);
}

function edit(request, response, routes) {
    let s = 'SELECT * from user where id='+routes[3];
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
        res.write(JSON.stringify(data));
        res.end();
    }, (err) => {
        res.write(err);
        res.end();
    });
}

exports.start = start;
exports.list = list;
exports.add = add;
exports.update = update;
exports.del = del;