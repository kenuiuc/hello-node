const msg = "Hello Ken!\n"
var http = require('http');

http.createServer(function (req, res) {
  console.log(`${new Date().toISOString()} getting request`)
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(msg);
}).listen(8080);
