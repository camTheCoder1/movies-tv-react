const mongoose = require('./connection.js')

const MovieSchema = new mongoose.Schema({
  name: String,
  releaseYear: Number,
  genre: String,
  director: String,
  picture: String,
  trailer: String
})

// const TVSchema = new mongoose.Schema({
//   name: String,
//   releaseYear: Number
// })

const MovieCollection = mongoose.model('Movie', MovieSchema)

//getAll
const getAllMovies = () => {
  return MovieCollection.find({})
}

//get all Movies By Director Id
// const getallMoviesByDirectorId = (directorId) => {
//   return MovieCollection.find({directorId: directorId})
// }

//getOne
const getOneMovie = (id) => {
  return MovieCollection.findById(id)
}

//create
const createMovie = (movieData) => {
  return MovieCollection.create(movieData)
}

const createTrailer = (movieData) => {
  return MovieCollection.find({movieData})
}

//update
const updateMovie = (id, movieData) => {
  return MovieCollection.updateOne({_id: id}, movieData)
}

//delete
const deleteMovie = (id) => {
  return MovieCollection.deleteOne({_id: id})
}

module.exports = {
  getAllMovies,
  //getallMoviesByDirectorId,
  getOneMovie,
  createMovie,
  updateMovie,
  deleteMovie
}
