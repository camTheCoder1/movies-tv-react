const express = require('express')

const tvApi = require('../models/tv.js')

const tvRouter = express.Router()

tvRouter.get('/tv/new', (req, res) => {
  res.render('tv/createTvShowForm')
})


tvRouter.get('/tv/edit/:id', (req, res) => {
  tvApi.getOneTvShow(req.params.id)
    .then((singleTvShow) => {
      res.render('tv/editTvShowForm', singleTvShow)
    })
})

// getAll
tvRouter.get('/tv', (req, res) => {
  tvApi.getAllTvShows()
    .then((allTvShows) => {
      res.render('tv/allTvShows', { allTvShows })
    })
})
// getOne
tvRouter.get('/tv/:id', (req, res) => {
  tvApi.getOneTvShow(req.params.id)
    .then((singleTvShow) => {
      res.render('tv/singleTvShow', singleTvShow)
    })
})
// update
tvRouter.put('/tv/:id', (req, res) => {
  tvApi.updateTvShow(req.params.id, req.body)
    .then((updatedTvShow) => {
      res.redirect(`/tv/${req.params.id}`)
    })
})
// create
tvRouter.post('/tv', (req, res) => {
  tvApi.createTvShow(req.body)
    .then((createdTvShow) => {
      res.redirect("/tv")
    })
})
// delete
tvRouter.delete('/tv/:id', (req, res) => {
  tvApi.deleteTvShow(req.params.id)
    .then((deletedTvShow) => {
      res.redirect("/tv")
    })
})

module.exports = {
  tvRouter
}