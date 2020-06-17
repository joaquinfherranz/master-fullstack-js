const mongoose = require('mongoose');
 
const filmSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    genre: String,
    director: String,
    actors: String
});
 
const Film = mongoose.model('Film', filmSchema);
 
module.exports = Film;
