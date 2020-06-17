const express = require('express'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    helmet = require('helmet'),
    addRequestId = require('express-request-id')(),
    config = require('./config'),
    routes = require('./routes/film'),
    app = express();;

//Logger
//@see: https://medium.com/@tobydigz/logging-in-a-node-express-app-with-morgan-and-bunyan-30d9bf2c07a
const loggerFormat = ':id [:date[web]] ":method :url" :status :response-time ms';

app.use(addRequestId);

morgan.token('id', req => req.id);

app.use(morgan(loggerFormat, {
    skip: (req, res) => res.statusCode < 400,
    stream: process.stderr
}));

app.use(morgan(loggerFormat, {
    skip: (req, res) => res.statusCode >= 400,
    stream: process.stdout
}));

// Middlewares
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view-engine', 'pug');

// Routes
app.get('/', routes.getAll);
app.get('/create/:name', routes.create);
app.get('/film/:id', routes.get);
app.post('/film/:id/delete', routes.destroy);
app.post('/film/:id/update', routes.update);

app.listen(config.port, console.log(`App on http://localhost:${config.port}`));