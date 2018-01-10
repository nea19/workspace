/*
    目测是最简单的node
    http
*/

var http = require('http');

http.createServer(function(req, res) {
    res.write('<h1>???</h1>');
}).listen(1919);

console.log("端口是1919.");