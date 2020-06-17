const express = require('express'),
  bodyParser = require('body-parser'),
  addRequestId = require('express-request-id')(),
  morgan = require('morgan'),
  rutas = require('./routes/film'),
  config = require('./config'),
  helmet = require('helmet'); 

  
const app = express();

// Logger con Morgan
  // link de morgan
  // https://medium.com/@tobydigz/logging-in-a-node-express-app-with-morgan-and-bunyan-30d9bf2c07a

app.use(addRequestId);

morgan.token('id', function getId(req) {
    return req.id
});

var loggerFormat = ':id [:date[web]] ":method :url" :status :response-time';

app.use(morgan(loggerFormat, {
    skip: function (req, res) {
        return res.statusCode < 400
    },
    stream: process.stderr
}));

app.use(morgan(loggerFormat, {
    skip: function (req, res) {
        return res.statusCode >= 400
    },
    stream: process.stdout
}));

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(helmet());
app.set('view-engine', 'pug');

// Rutas
/*
[GET] / Muestra todas las películas
[GET] /create/:name Crea una pelicula
[GET] /film/:id Muestra los detalles de una película en concreto
[POST] /film/:id/delete Borra una película
[POST] /film/:id/update Actualiza el nombre de una película
*/

// User
app.get('/', rutas.getAll);
app.get('/create/:name', rutas.create);
app.get('/film/:id', rutas.get);
app.post('/film/:id/delete', rutas.destroy);
app.post('/film/:id/update', rutas.update);


app.listen(config.port);