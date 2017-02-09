var handle = require("./requestHandlers");
var url = require("url");

function route(request, response) {
    var path = url.parse(request.url, true);
    var routes = path.pathname.split("/");
    if (routes[1] && routes[2] && handle[routes[1]] && handle[routes[1]][routes[2]]) {
        response.writeHead(200, {"Content-Type": "application/json;charset=utf-8"});
        handle[routes[1]][routes[2]](request, response, routes);
    } else {
        response.writeHead(404, {"Content-Type": "text/plain;charset=utf-8"});
        response.write("404 Not found");
        response.end();
    }
}

exports.route = route;