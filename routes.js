const express = require('express')
const db = require('./db')

const router = express.Router()

// router.get('/', (req, res) => {
//   res.render('home')
// })

router.get('/', (req, res) => {
  db.getforceUsers()
  .then(forceUsers => {
    res.render('home', { forceUsers: forceUsers })
  })
})
module.exports = router
