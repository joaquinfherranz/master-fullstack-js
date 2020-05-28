// Código para obtener pelis de http://www.omdbapi.com
const config = require('../config')
fetch = require('node-fetch');

exports.filmDetails = name => {
  const url = `http://www.omdbapi.com/?t=${name}&y=&plot=short&r=json&apikey=${config.apikey}`;
  return new Promise((resolve, reject)=>{
    fetch(url)
      .then(res => res.json())
      .then(json => resolve(json))
      .catch(err => reject(err));
  })
}