// Métodos para hacer acciones sobre la BBDD de firebase
const config = require('../config'),
    mongoose = require('mongoose'),
    filmDetails = require('../utils/film_details'),
    Film = require('../models/film');

mongoose.connect('mongodb://localhost/films', { 
  useNewUrlParser: true,
  useUnifiedTopology: true
})

var database = mongoose.connection;

database.on('error', console.error.bind(console, 'MongoDB connection error:'));
database.on('open', ()=>console.log('Conectado a BD!!'));

// Get all
exports.getAll = () =>{
   // return new Promise((success) => { success([]); })
    return new Promise ((resolve,reject)=>{
      const films = Film.find()
        .then(films=> resolve(films))
        .catch(err=>reject(err))
    }); 
}

// Get
exports.get = id => {
  return new Promise ((resolve,reject)=>{
    const film = Film.findById(id)
    .then(film=> resolve(film))
    .catch(err=>reject(err))
  }); 
}
// Remove
// Create
exports.create = name => {
  return new Promise ((resolve,reject)=>{
    // 1 - Encontrar peli en la api de pelis
    // 2 - Guardar en BBDD
    filmDetails.getFilm(name)
      .then(details => {
        var film = new Film({
          _id: new mongoose.Types.ObjectId(),
          name: name,
          genre: details.Genre,
          director: details.Director,
          actors: details.Actors
        });
        film.save()
          .then(res=> {
            //console.log('película guardada')
            //console.log(res)
            resolve();
          })
          .catch(err=>reject(err))
      })
      .catch(err=>reject(err));
  }); 
}