require('dotenv').config({ path: '../.env' })
const config = require('../knexfile');

const knex = require('knex');

module.exports = knex;