var http = require('http');
// Modulo file sistem
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('./files/index.html', function(err, data) {
    if (err){
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.write('Hubo un error');
    } else {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
    }
    res.end();
  });
}).listen(8080);