//var http = require('http');
var dt = require('./js/fechas').myDateTime;
var msj = require('./js/fechas').mensaje;
var $ = require('jquery');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write("The date and time are currently: " + dt());
//   res.write("Mensaje: " + msj());
//   res.end();
// }).listen(8080);

console.log(msj()+ 'AAABB');

$(function(){
  console.log('Jquery')
})