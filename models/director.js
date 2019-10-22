const mongoose = require('./connection.js')

const DirectorSchema = new mongoose.Schema({
 name: String,
 age: Number,
 famous: Boolean,
 verified: Boolean,
})

const DirectorCollection = mongoose.model('Director', DirectorSchema)

//getAll
const getAllDirectors = () => {
    return DirectorCollection.find({})
}
//getOne
const getOneDirector = (id) => {
    return DirectorCollection.findById(id)
}
//create
const createDirector = (DirectorData) => {
    return DirectorCollection.create(DirectorData)
}
//update
const updateDirector = (id, DirectorData) => {
    return DirectorCollection.updateOne({_id: id}, DirectorData)
}
//delete
const deleteDirector = (id) => {
    return DirectorCollection.deleteOne({_id: id})
}

module.exports = {
    getAllDirectors,
    getOneDirector,
    createDirector,
    updateDirector,
    deleteDirector
}