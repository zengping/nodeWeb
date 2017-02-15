var sql = require("../mysqlQuery");

async function root(request, response) {
    let s = 'SELECT * from a_categories where root_id=0';
    return await sql.query(s);
}

async function list(request, response, routes) {
    let s = 'SELECT * from a_categories where root_id=' + routes[3];
    return await sql.query(s);
}

exports.root = root;
exports.list = list;