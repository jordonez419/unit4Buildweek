const knex = require('knex')
const configs = require('../../knexfile')

module.exports = knex(configs[process.env.NODE_ENV])

// const { clean } = require('knex-cleaner')

// exports.seed = function (knex) {
//   return clean(knex, {
//     mode: 'truncate',
//     ignoreTables: ['knex_migrations', 'knex_migrations_lock'],
//   })
// }

