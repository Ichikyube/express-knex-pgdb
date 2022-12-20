//const { table } = require('console')
const pgdb = require( 'pg-promise')
var db = pgdb(`postgres://almyra:mysecretpassword@localhost:5432/express-app`)

db.one(`SELECT $1 AS value`, 123).then((data) => console.log(`DATA:`, data.value))
    .catch((error) => console.log(`ERROR:`, error))

exports.up = knex => knex.schema.alterTable('users', (table) => {
    table.string('gender')
})

exports.down = knex => knex.schema.alterTable('user', (table) => {
    table.dropColumn('gender')
})