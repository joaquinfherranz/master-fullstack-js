const express = require('express'),
    bodyParser = require('body-parser'),
    app = express();

//Middelware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'pug');

//Rutas
app.get('/', (req, res) => {
  res.render('index')
});

app.post('/', (req, res) => {
  res.json(req.body);
});

app.get('/hola', (req, res) => {
  res.send('hola!');
});

app.get('/hola/:usuario', (req, res) => {
  res.send('Hola ' + req.params.usuario + '. Hemos abierto una nueva ruta personalizada!');
});

app.get('/consulta/:usuario', (req, res) => {
  var datos = {
    marca: "Seat",
    modelo: "Ibiza",
    edad: 20,
    ITVPasada: true,
    seguroPasado: true
  };

  res.render('consulta', {
    usuario: req.params.usuario,
    datos: datos
  });
});

// Puerto
app.listen(8080, () => {
  console.log('localhost:8080 up & running!');
});