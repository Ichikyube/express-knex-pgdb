// Update with your config settings.
const PGDB_PASSWORD = process.env.PGDB_PASSWORD;
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      port : 5432,
      user : 'almyra',
      password : PGDB_PASSWORD,
      database : 'express-app'
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/db/migrations`
    },
    seeds: {
      directory: `${__dirname}/db/seeds`
    }
};
