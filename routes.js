const express = require('express')
const db = require('./db')

const router = express.Router()

// home page
router.get('/', (req, res) => {
  db.getforceUsers()
  .then(forceUsers => {
    res.render('home', { forceUsers: forceUsers })
    return null
  })
  .catch(err => {
    console.log(err)
    res.status(500).send('error')
  })
})

// jedi home page
router.get('/jedis/', (req, res) => {
  db.getJedis()
  .then(forceUsers => {
    res.render('forceUsers', { forceUsers: forceUsers })
    return null
  })
  .catch(err => {
    console.log(err)
    res.status(500).send('error')
  })
})

// sith home page
router.get('/siths/', (req, res) => {
  db.getSiths()
  .then(forceUsers => {
    res.render('forceUsers', { forceUsers: forceUsers })
    return null
  })
  .catch(err => {
    console.log(err)
    res.status(500).send('error')
  })
})

// neutral home page
router.get('/neutrals/', (req, res) => {
  db.getNeutrals()
  .then(forceUsers => {
    res.render('forceUsers', { forceUsers: forceUsers })
    return null
  })
  .catch(err => {
    console.log(err)
    res.status(500).send('error')
  })
})

// single force user
router.get('/:id', (req, res) => {
  const id = req.params.id
  db.getforceUser(id)
  .then(forceUsers => {
    res.render('character', forceUsers)
    return null
  })
  .catch(err => {
    console.log(err)
    res.status(500).send('error')
  })
})

// add force user
router.post('/', (req, res) => {
  let { name, homeWorld, jedi, sith, neutral, random} = req.body
  const randomNumber = Math.floor(Math.random() * 4)
  if (random === '1') {
    if (randomNumber === 0) {
      jedi = '1'
    }
    else if (randomNumber === 1) {
      sith = '1'
    }else if (randomNumber === 2) {
      neutral = '1'
    } else if (randomNumber === 3) {
      jedi = '1'
      sith = '1'
    }
  } 
  db.getAddForceUser({name, homeWorld, jedi, sith, neutral})
  .then(forceUsers => {
    res.render('character', forceUsers)
    return null
  })
  .catch(err => {
    console.log(err)
    res.status(500).send(error)
  })
})

// delete force user
router.get('/delete/:id', (req, res) => {
  db.deleteForceUser
})
module.exports = router
