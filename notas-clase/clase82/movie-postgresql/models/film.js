// Métodos para hacer acciones sobre la BBDD de firebase
const config = require('../config'),
 {Cliente} = require('pg')
filmDetails = require('../utils/film_details');


const { Client } = require('pg')

const connectionData = {
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: '*******',
  port: 5432,
}
const database = new Client(connectionData)

database.connect()

// Get all
exports.getAll = () =>{
   // return new Promise((success) => { success([]); })
    return new Promise ((resolve,reject)=>{
      database.query('select * from films')
        .then(res=> resolve(res.rows))
        .catch(err=>reject(err))
    }); 
}

// Get
exports.get = id => {
  return new Promise ((resolve,reject)=>{
    database.query('select * from films where id =($1)', [id])
      .then(res => resolve(res.rows))
      .catch(err => reject(err))
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
        database.query('insert into films (name, genre, director, actors) values ($1, $2, $3, $4)',
          [name,details.Genre, details.Director, details.Actors])
          .then(res => resolve(res))
          .catch(err => reject(err))
      })
      .catch(err=>reject(err));
  }); 
}
