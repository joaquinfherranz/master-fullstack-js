//import http from 'http';
const http = require('http');
const process = require('./address'); 

var url = "googleldddd.es";

http.get({ host: url }, resOrigen => {
    http.createServer((req, res) => {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(`La respuesta de ${url} es ${resOrigen.statusCode}` );
        console.log(`La respuesta de ${url} es ${resOrigen.statusCode}` );
    }).listen(process.env.PORT, process.env.IP);
    console.log(`OKK Servidor disponible en http://${process.env.IP}:${process.env.PORT}/`);
}).on('error', e => {
    http.createServer((req, res) => {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(`La respuesta de ${url} genera un error - ${e.message}`  );
    }).listen(process.env.PORT, process.env.IP);
    console.log(`ERR Servidor disponible en http://${process.env.IP}:${process.env.PORT}/`);
    console.log(`Tenemos un error!! - ${e.message}`);
});