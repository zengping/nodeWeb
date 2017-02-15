var sql = require("../mysqlQuery");

async function root(request, response, routes) {
    let cate = await getCate(routes);
    let article = await getArticle(cate, routes);
    return article;
}

async function getCate(routes) {
    let s = 'SELECT * from a_categories where root_id=' + routes[3];
    return await sql.query(s);
}

async function getArticle(cate, routes) {
    let ids = [];
    cate.forEach((o) => {
        ids.push(o.id);
    });
    let idlist = ids.join();
    let start = (routes[4] - 1) * 10
    let s = 'SELECT * from a_articles where category_id in (' + idlist + ') order by id desc limit ' + start + ', 10';
    return await sql.query(s);
}

async function list(request, response, routes) {
    let s = 'SELECT * from a_categories where root_id=' + routes[3];
    return await sql.query(s);
}

exports.root = root;
exports.list = list;