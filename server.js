const express = require('express')
const hbs = require('express-handlebars')

const starRoutes = require('./routes')

const server = express()
module.exports = server

// Middleware

server.engine('hbs', hbs({ extname: 'hbs'}))
server.set('view engine', 'hbs')
// server.use(express.urlencoded({ extended: true }))

// Routes

server.use('/', starRoutes)