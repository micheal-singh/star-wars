const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getforceUsers: getforceUsers,
  getJedis: getJedis,
  getSiths: getSiths,
  getNeutrals: getNeutrals,
  getforceUser: getforceUser,
  getAddForceUser: getAddForceUser
}

// All force users
function getforceUsers (db = connection) {
  return db('forceUsers')
  .select()
}

// All jedis
function getJedis (db = connection) {
  return db('forceUsers')
  .select()
  .where({ jedi: true })
}

// All siths
function getSiths (db = connection) {
  return db('forceUsers')
  .select()
  .where({ sith: true })
}

// All neutrals
function getNeutrals (db = connection) {
  return db('forceUsers')
  .select()
  .where({ neutral: true })
}

// single force user
function getforceUser (id, db = connection) {
  return db('forceUsers')
  .select()
  .where('forceUsers.id', id)
  .first()
}

// new force user
function getAddForceUser (data, db = connection) {
  const { name, homeWorld, jedi, sith, neutral} = data
  return db('forceUsers')
  .insert({ name, homeWorld, jedi, sith, neutral })
  .then(([newId]) => {
    return getforceUser(newId)
  })
} 