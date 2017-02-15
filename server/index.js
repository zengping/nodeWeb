require("babel-core/register");
require('babel-polyfill');
var server = require("./server");
var router = require("./route");

server.start(router.route);