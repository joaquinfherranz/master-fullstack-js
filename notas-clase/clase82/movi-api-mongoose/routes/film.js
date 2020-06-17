const filmController = require('../controllers/film'); // llamo al modelo de la BD 

exports.getAll = (req, res) => {
  filmController.getAll()
    .then(data => res.render('index.pug',{data}))
    .catch(err => res.status(500).render('error.pug', err))
};

exports.get = (req, res) => {
  const id = req.params.id;
  filmController.get(id)
    .then(data => {
      if (data) {
        res.render('details.pug', {data});
      } else {
        res.status(500).render('error.pug');
      }
    })
    .catch(err => res.status(500).render('error.pug', err));
};

exports.create = (req, res) => {
  const name = req.params.name;
  filmController.create(name)
    .then(data => res.redirect('/'))
    .catch(err=>res.status(500).render('error.pug',err));
};

//link de curl
// https://gist.github.com/subfuzion/08c5d85437d5d4f00e58
// curl -X POST http://localhost:8626/film/33/delete
exports.destroy = (req, res) => {
  const id = req.params.id;
  filmModel.remove(id)
      .then(() => res.redirect('/'))
      .catch(err => res.status(500).render('error.pug', err));
};

// curl -X POST http://localhost:8626/film/43/update
exports.update = (req, res, next) => {
  const id = req.params.id;
  const name = req.body.name;

  filmModel.update(id, name)
      .then(() => res.redirect('/'))
      .catch(err => res.status(500).render('error.pug', err));
};
