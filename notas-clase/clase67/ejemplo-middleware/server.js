const express = require('express'),
    favicon = require('serve-favicon'),
    path = require('path'),
    fs = require('fs'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    parseurl = require('parseurl'),
    session = require('express-session')
    const dotenv = require('dotenv');

    //Leer fichero config
    dotenv.config();

const app = express()

const port = process.env.PORT || 3000;
console.log(`Your port is ${port}`);
//https://medium.com/the-node-js-collection/making-your-node-js-work-everywhere-with-environment-variables-2da8cdf6e786
// con modulo externo


// Write Stream (modo append)
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// Middleware
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(morgan('combined', { stream: accessLogStream }))
//app.use(morgan(':remote-addr :remote-user :method :url HTTP/:http-version :status :res[content-length] - :response-time ms'));

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))

app.use((req, res, next) => {
  if (!req.session.views) {
    req.session.views = {}
  }

  // get the url pathname
  const pathname = parseurl(req).pathname;

  // count the views
  req.session.views[pathname] = (req.session.views[pathname] || 0) + 1

  next()
})

// Rutas
app.get('/', (req, res) => {
  res.send('hello, world!')
})

// POST /login gets urlencoded bodies
app.post('/login', urlencodedParser, function (req, res) {
  res.send('welcome, ' + req.body.username)
})

// POST /api/users gets JSON bodies
app.post('/api/users', jsonParser, function (req, res) {
  // create user in req.body
  res.send('Datos del JSON, username:' + req.body.username + ", id:" + req.body.id)
})

app.get('/products/:id', cors(), (req, res, next) => {
  res.json({msg: 'This is CORS-enabled for a Single Route'})
})

// express-session
app.get('/foo', (req, res, next) => {
  res.send(`you viewed this page ${req.session.views['/foo']} times`)
})

app.get('/bar', (req, res, next) => {
  res.send(`you viewed this page ${req.session.views['/bar']} times`)
})



app.listen(port)

//curl -d "username=Joaquin" -X POST http://localhost:3000/login
//curl -d '{"username":"Joaquin", "id":"32"}' -H "Content-Type: application/json" -X POST http://localhost:3000/api/users