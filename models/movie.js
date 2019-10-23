const mongoose = require('./connection.js')

const MovieSchema = new mongoose.Schema({
 name: String,
 releaseYear: Number,
 genre: String,
 picture: String,
 director: String,
 trailer: String
})

const MovieCollection = mongoose.model('Movie', MovieSchema)

//getAll
const getAllMovies = () => {
    return MovieCollection.find({})
}
// get all Movies By Directory Id
const getAllMoviesByDirectorId = (directorId) => {
    return MovieCollection.find({directorId: directorId})
}
//getOne
const getOneMovie = (id) => {
    return MovieCollection.findById(id)
}
//create
const createMovie = (movieData) => {
    return MovieCollection.create(movieData)
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
    getAllMoviesByDirectorId,
    getOneMovie,
    createMovie,
    updateMovie,
    deleteMovie
}