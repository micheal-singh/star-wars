const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getforceUsers: getforceUsers,
  getJedis: getJedis
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