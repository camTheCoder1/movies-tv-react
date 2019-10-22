const express = require('express')

const directorApi = require('../models/director.js')
const movieApi = require('../models/movie.js')

const directorRouter = express.Router()

directorRouter.get('/director/new', (req, res) => {
  res.render('director/createDirectorForm')
})

directorRouter.get('/director/edit/:id', (req, res) => {
  directorApi.getOneDirector(req.params.id)
    .then((singleDirector) => {
      res.render('director/editDirectorForm', {singleDirector})
    })
})

// getAll
directorRouter.get('/director', (req, res) => {
  directorApi.getAllDirectors()
    .then((allDirectors) => {
      //res.json(allDirectors)
      res.render('director/allDirectors', {allDirectors})
    })
})
// getOne
directorRouter.get('/director/:id', (req, res) => {
  directorApi.getOneDirector(req.params.id)
    .then((singleDirector) => {

      movieApi.getAllMoviesByDirectorId(req.params.id)
        .then((directorMovies) => {
          res.render('director/singleDirector', {singleDirector, directorMovies})
        })


    })
})
// update
directorRouter.put('/director/:id', (req, res) => {
  directorApi.updateDirector(req.params.id, req.body)
    .then((updatedDirector) => {
      //res.json(updatedDirector)
      res.redirect(`/director/${req.params.id}`)
    })
})
// create
directorRouter.post('/director', (req, res) => {
  directorApi.createDirector(req.body)
    .then((createdDirector) => {
      res.redirect("/director")
    })
})
// delete
directorRouter.delete('/director/:id', (req, res) => {
  directorApi.deleteDirector(req.params.id)
    .then((deletedDirector) => {
      //res.json(deletedDirector)
      res.redirect("/director")
    })
})

module.exports = {
  directorRouter
}