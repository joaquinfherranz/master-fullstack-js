  // Importamos módulo HTTP
  var http = require('http');
  const process = require('./address');

  // Código para arrancar el sevidor
  http.createServer((req, res) => {
      // Devolver al DOM la respuesta que debe mostrar
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('Hola! Esta es la primera respuesta desde mi servidor :)');
      // Escuchando en puerto 8080
  }).listen(process.env.PORT, process.env.IP);
  // Mensaje a mostrar cuando arranque el servidor
  console.log(`Server running at http://${process.env.IP}:${process.env.PORT}/`);