// Métodos para hacer acciones sobre la BBDD de firebase
const config = require('../config'),
firebase = require('firebase'),
filmDetails = require('../utils/film_details');

firebase.initializeApp(config.firebase);

var database = firebase.database().ref().child("prueba-pelis-firebase");

// Get all
exports.getAll = ()=>{
  // ejemplo devolviendo una promesa vacía
  //return new Promise((resolve)=>{
  //  resolve([]);
  //});

  // var data = {
  //   "details" : {
  //     "Actors" : "Ralph Fiennes, Michael Gambon, Alan Rickman, Daniel Radcliffe",
  //     "Awards" : "Nominated for 3 Oscars. Another 45 wins & 91 nominations.",
  //     "BoxOffice" : "$381,000,185",
  //     "Country" : "USA, UK",
  //     "DVD" : "11 Nov 2011",
  //     "Director" : "David Yates",
  //     "Genre" : "Adventure, Drama, Fantasy, Mystery",
  //     "Language" : "English",
  //     "Metascore" : "87",
  //     "Plot" : "Harry, Ron, and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.",
  //     "Poster" : "https://m.media-amazon.com/images/M/MV5BMjIyZGU4YzUtNDkzYi00ZDRhLTljYzctYTMxMDQ4M2E0Y2YxXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
  //     "Production" : "Warner Bros. Pictures",
  //     "Rated" : "PG-13",
  //     "Ratings" : [ {
  //       "Source" : "Internet Movie Database",
  //       "Value" : "8.1/10"
  //     }, {
  //       "Source" : "Rotten Tomatoes",
  //       "Value" : "96%"
  //     }, {
  //       "Source" : "Metacritic",
  //       "Value" : "87/100"
  //     } ],
  //     "Released" : "15 Jul 2011",
  //     "Response" : "True",
  //     "Runtime" : "130 min",
  //     "Title" : "Harry Potter and the Deathly Hallows: Part 2",
  //     "Type" : "movie",
  //     "Website" : "http://www.HarryPotter.com/",
  //     "Writer" : "Steve Kloves (screenplay), J.K. Rowling (novel)",
  //     "Year" : "2011",
  //     "imdbID" : "tt1201607",
  //     "imdbRating" : "8.1",
  //     "imdbVotes" : "673,121"
  //   },
  //   "name" : "harry potter"
  // };
  return new Promise((resolve,reject)=>{
    //resolve(data);
    database.once('value', snapshot => {
      resolve(snapshot.val());
    }, reject);
  });
  // código de getAll de firebase
}


// Get
exports.get = (id)=>{
  // código de get de firebase
  return new Promise ((resolve, reject) => {
    database.equalTo(id).once('child_added', snapshot => {
      resolve(snapshot.val());
    }, reject);
  });
}

// Remove

// Create
exports.create = name => {
  return new Promise((resolve, reject)=>{
    // 1 - Encontrar peli en la api de pelis
    
    // 2 - Guardar en BD
    filmDetails(name)
      .then(
        (details=false)=>database.push({name, details},
         err=>{err?reject(err):resolve()
      }))
      .catch(reject)
  });  
}

// Update