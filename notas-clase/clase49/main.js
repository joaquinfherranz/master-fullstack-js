// los require arriba
// Primero los externos
// Segundo los tuyos
const assert = require('assert');

const config = require('./config');
const url = require('url');
const queryString = require('query-string');


//config.metodo();
//console.log(config.mensaje);

assert.deepEqual([[[1, 2, 3]], 4, 5], [[[1, 2, '3']], 4, 5]);
//assert.deepStrictEqual([[[1, 2, 3]], 4, 5], [[[1, 2, '3']], 4, 5]);

// Leyendo url
//import url from 'url';
const demoURL = "http://localhost:3000/ruta?parametro=dato#detalle";

console.log(`El host: ${url.parse(demoURL).hostname}
El puerto: ${url.parse(demoURL).port}
La ruta: ${url.parse(demoURL).pathname}
El parametro: ${url.parse(demoURL).query}
El hash(#): ${url.parse(demoURL).hash}`);

console.log(queryString.parse(url.parse(demoURL).query));