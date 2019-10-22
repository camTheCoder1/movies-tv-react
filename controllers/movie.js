const express = require('express')

const movieApi = require('../models/movie.js')

const movieRouter = express.Router()

movieRouter.get('/movie/new', (req, res) => {
  res.render('movie/createMovieForm')
})

movieRouter.get('/movie/new/:directorId', (req, res) => {
  res.render('movie/createMovieForm', {directorId: req.params.directorId})
})

movieRouter.get('/movie/edit/:id', (req, res) => {
  movieApi.getOneMovie(req.params.id)
    .then((singleMovie) => {
      res.render('movie/editMovieForm', singleMovie)
    })
})

// getAll
movieRouter.get('/movie', (req, res) => {
  movieApi.getAllMovies()
    .then((allMovies) => {
      //res.json(allMovies)
      res.render('movie/allMovies', { allMovies })
    })
})
// getOne
movieRouter.get('/movie/:id', (req, res) => {
  movieApi.getOneMovie(req.params.id)
    .then((singleMovie) => {
      //res.json(singleMovie)
      res.render('movie/singleMovie', singleMovie)
    })
})
// update
movieRouter.put('/movie/:id', (req, res) => {
  movieApi.updateMovie(req.params.id, req.body)
    .then((updatedMovie) => {
      //res.json(updatedMovie)
      res.redirect(`/movie/${req.params.id}`)
    })
})
// create
movieRouter.post('/movie', (req, res) => {
  movieApi.createMovie(req.body)
    .then((createdMovie) => {
      res.redirect("/movie")
    })
})
// delete
movieRouter.delete('/movie/:id', (req, res) => {
  movieApi.deleteMovie(req.params.id)
    .then((deletedMovie) => {
      //res.json(deletedMovie)
      res.redirect("/movie")
    })
})

module.exports = {
  movieRouter
}