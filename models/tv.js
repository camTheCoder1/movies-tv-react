const mongoose = require('./connection.js')

const TvSchema = new mongoose.Schema({
 name: String,
 releaseYear: Number,
 picture: String,
 directorId: mongoose.ObjectId
})

const TvCollection = mongoose.model('Tv', TvSchema)

//getAll
const getAllTvShows = () => {
    return TvCollection.find({})
}
// get all tvs By Directory Id
const getAllTvShowsByDirectorId = (directorId) => {
    return TvCollection.find({directorId: directorId})
}
//getOne
const getOneTvShow = (id) => {
    return TvCollection.findById(id)
}
//create
const createTvShow = (tvData) => {
    return TvCollection.create(tvData)
}
//update
const updateTvShow = (id, tvData) => {
    return TvCollection.updateOne({_id: id}, tvData)
}
//delete
const deleteTvShow = (id) => {
    return TvCollection.deleteOne({_id: id})
}

module.exports = {
    getAllTvShows,
    getAllTvShowsByDirectorId,
    getOneTvShow,
    createTvShow,
    updateTvShow,
    deleteTvShow
}