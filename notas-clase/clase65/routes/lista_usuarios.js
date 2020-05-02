var express = require('express');

// Agrupar lista_usuarios en un router

var lista_usuarios = express.Router();
lista_usuarios.get('/:id/profile/:nombre', function (req, res) {
  console.log("Se ha realizado una petición GET para /lista_usuarios");
  console.log("parametro id:"+req.params.id);
  console.log("parametro nombre:"+req.params.nombre);
  res.send('Página de listado de usuarios, datos por parametros de url');
});
lista_usuarios.get('/', function (req, res) {
  console.log("Se ha realizado una petición GET para /lista_usuarios");
  console.log("Id:"+req.query.id);
  console.log("Nombre:"+req.query.nombre);
  res.send('Página de listado de usuarios, datos por query');
});

module.exports = lista_usuarios;