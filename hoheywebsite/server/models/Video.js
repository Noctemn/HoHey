const mongoose = require('mongoose')

const FilmSchema = new mongoose.Schema({
  filmName: {
    type: String,
    required: true
  },
  creator: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now()
  }
})

const Film = mongoose.model("FilmData", FilmSchema);
module.exports = Film;

