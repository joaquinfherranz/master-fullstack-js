const   dotenv = require('dotenv');

dotenv.config(); // Cargar fichero configuración .env

//https://firebase.google.com/docs/web/setup

module.exports = {
  port: process.env.PORT || 3000,
  apikey: process.env.API_KEY_FILM
}