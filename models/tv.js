const mongoose = require('./connection.js')

const TvSchema = new mongoose.Schema({
 name: String,
 releaseYear: Number,
 seasons: Number,
 network: String,
 picture: String
 
})

const TvCollection = mongoose.model('Tv', TvSchema)

//getAll
const getAllTvShows = () => {
    return TvCollection.find({})
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
    getOneTvShow,
    createTvShow,
    updateTvShow,
    deleteTvShow
}