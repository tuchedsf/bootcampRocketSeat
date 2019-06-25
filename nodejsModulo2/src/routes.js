const express = require('express')

const routes = express.Router()

const UserController = require('./app/controllers/UserController')

routes.get('/signup', UserController.create)

routes.get('/', (req, res) => {
  return res.render('auth/signup')
})

module.exports = routes
