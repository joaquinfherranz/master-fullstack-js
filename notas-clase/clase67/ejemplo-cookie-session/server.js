const cookieSession = require('cookie-session'),
    express = require('express'),
    app = express();


// trust first proxy
app.set('trust proxy', 1) 

app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2'],
  maxAge: 10 * 1000 // 10 segundos
}))

// Simple view counter
app.get('/', ({session}, res, next) => {
  // Update views
  session.views = (session.views || 0) + 1

  // Write response
  res.end(`${session.views} views`)
})

app.listen(8080)