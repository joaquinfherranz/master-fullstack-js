// Métodos para hacer acciones sobre la BBDD de firebase
const config = require('../config'),
GDB = require("goblindb"),
filmDetails = require('../utils/film_details');


//Incializar el objeto BBDD
var database = GDB();
//database.set({}); //vacía la BD

// Get all
exports.getAll = () =>{
   // return new Promise((success) => { success([]); })
    return new Promise ((resolve,reject)=>{
      try{
        var films = database.get();
        resolve(films)
      }catch(err){
        reject(err);
      }
    }); 
}
// Get
exports.get = id => {
    return new Promise ((resolve,reject)=>{
      try{  
      var film = database.get(id)
        resolve(film);
      }catch(err){
        reject(err);
      }
    }); 
}
// Remove
// Create
exports.create = name => {
  return new Promise ((resolve,reject)=>{
    // 1 - Encontrar peli en la api de pelis
    // 2 - Guardar en BBDD
    filmDetails.getFilm(name)
      .then((details=false) => {
        try{
          database.push({name,details})
          resolve();
        }catch(err){
          reject(err);
        }
      })
    .catch(reject);
  }); 
}