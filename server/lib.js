var sql = require("./mysqlQuery");

module.exports = {
    async getData(request) {
        var postData = "";
        request.addListener("data", function (data) {
            postData += data;
        });

        return await request.addListener("end", function () {
            var query = JSON.parse(postData);
            return query;
        });
    },

    render(res) {
        if (res.serverStatus == 1) {
            res.write(JSON.stringify(res.okMsg));
            res.end();
        } else {
            res.write(JSON.stringify(res.errMsg));
            res.end();
        }
    }
}
