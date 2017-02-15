var sql = require("../mysqlQuery");

module.exports = {
    async root(request, response) {
        let s = 'SELECT * from a_categories where root_id=0';
        return await sql.query(s);
    },
    async list(request, response, routes) {
        let s = 'SELECT * from a_categories where root_id=' + routes[3];
        return await sql.query(s);
    }
}
