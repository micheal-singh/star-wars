const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getforceUsers: getforceUsers,
}

// All force users
function getforceUsers (db = connection) {
  return db('forceUsers').select()
}