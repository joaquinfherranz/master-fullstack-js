//import http from "http";
const http = require("http");
const process = require('./address');

function writeResponse(response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hola Mundo!");
    response.end();
    console.log("Se termino... ");
}

function sleepAsynch(seconds, response) {
    setTimeout(() => {
    writeResponse(response);
    }, Math.floor((Math.random() * 1000) + 100) * seconds);
}

let server = http.createServer((request, response) => {

    console.log("Empezo... ");
    sleepAsynch(10, response);
});

server.listen(process.env.PORT); // Abre el servidor

setTimeout(() => {
  console.log('Cerrando Node...');
  server.close(); //Cerramos el servidor despues de 3 segundos
  //process.stdout.write("Cerrando Node...")
}, 3000);

console.log(`en puerto ->${process.env.PORT}`);