var sql = require("../mysqlQuery");

module.exports = {
    async root(request, response, routes) {
        let cate = await this.getCate(routes);
        let article = await this.getArticle(cate, routes);
        return article;
    },
    async getCate(routes) {
        let s = 'SELECT * from a_categories where root_id=' + routes[3];
        return await sql.query(s);
    },
    async getArticle(cate, routes) {
        let ids = [];
        cate.forEach((o) => {
            ids.push(o.id);
        });
        let idlist = ids.join();
        let start = (routes[4] - 1) * 10
        let s = 'SELECT * from a_articles where category_id in (' + idlist + ') order by id desc limit ' + start + ', 10';
        return await sql.query(s);
    },
    async list(request, response, routes) {
        let s = 'SELECT * from a_categories where root_id=' + routes[3];
        return await sql.query(s);
    }
}
