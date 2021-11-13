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
    return null
  })
  .catch(e => (console.log(e)))
})

router.get('/jedis/', (req, res) => {
  db.getJedis()
  .then(forceUsers => {
    res.render('jediHome', { forceUsers: forceUsers })
    return null
  })
  .catch(e => (console.log(e)))
})

module.exports = router
