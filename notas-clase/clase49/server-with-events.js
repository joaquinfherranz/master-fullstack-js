//import http from 'http';
const http = require('http');
const process = require('./address');

const server = http.createServer().listen(process.env.PORT);

server.on('request', (request, response) => {
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.end("¡Hola people!");
});

console.log(`Servidor escuchando por el puerto ${process.env.PORT}`);