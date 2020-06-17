const filmModel = require('../models/film'); // llamo al modelo de la BD 

// curl http://localhost:8626/
exports.getAll = (req, res) => {
  filmModel.getAll()
  .then(data => res.render('index.pug',{data}))
  .catch(err => res.status(500).render('error.pug', err))

  //console.log('todas las pelis');
  //res.send('todas las pelis');
}

// curl http://localhost:8626/film/33
//[GET] /film/:id
exports.get = (req, res) => {
  const id = req.params.id;
  filmModel.get(id)
    .then(data => res.render(data?'details.pug':'error.pug',{data}))
    .catch(err => res.status(500).render('error.pug', err))
  //console.log('get la peli ' + req.params.id);
  //res.send('get la peli ' + req.params.id)
}

// curl http://localhost:8626/create/nombre_peli
exports.create = (req, res) => {
  //console.log('crea la peli ' + req.params.name);
  //res.send('crea la peli ' + req.params.name);
  const name = req.params.name;
  filmModel.get(name)
    .then(() => res.rendirect('/'))
    .catch(err=>res.status(500).render('error.pug',err));
  }


//link de curl
// https://gist.github.com/subfuzion/08c5d85437d5d4f00e58
// curl -X POST http://localhost:8626/film/33/delete
exports.destroy = (req, res) => {
  console.log('delete la peli ' + req.params.id);
  res.send('delete la peli ' + req.params.id);
}

// curl -X POST http://localhost:8626/film/43/update
exports.update = (req, res) => {
  console.log('update la peli ' + req.params.id);
  res.send('update la peli' + req.params.id);
}
