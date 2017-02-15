var handle = require("./requestHandlers");
var url = require("url");
var lib = require("./lib");

async function route(request, response) {
    var path = url.parse(request.url, true);
    var routes = path.pathname.split("/");
    response.okMsg = okMsg();
    response.errMsg = errMsg();
    if (routes[1] && routes[2] && handle[routes[1]] && handle[routes[1]][routes[2]]) {
        response.writeHead(200, {"Content-Type": "application/json;charset=utf-8"});
        try {
            let data = await handle[routes[1]][routes[2]](request, response, routes);
            response.serverStatus = 1;
            response.okMsg.data = data;
        } catch(e) {
            response.serverStatus = 0;
            response.errMsg.data = e;
        }
        lib.render(response);
    } else {
        response.writeHead(404, {"Content-Type": "text/plain;charset=utf-8"});
        response.write("404 Not found");
        response.end();
    }
}

function okMsg() {
    return {
        status: {
            code: 200,
            msg: 'ok'
        }
    }
}

function errMsg() {
    return {
        status: {
            code: 500,
            msg: 'error'
        }
    }
}

exports.route = route;