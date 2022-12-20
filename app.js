require('dotenv').config({ path: './.env' })
const express =  require("express")
const app = express()
const port = 3000
const PGDB_PASSWORD = process.env.PGDB_PASSWORD;
const db = {
    user: 'almyra',
    host: 'localhost',
    database: 'express-app',
    password: PGDB_PASSWORD,
    port: 5432,
  }
const cors = require("cors")
const { Client } = require('pg')
const client = new Client(db)
client.connect()
const knex = require('knex')({
    client: 'pg',
    connection: db
});
const knexfile = require('./knexfile')
// knex.one(`SELECT $1 AS value`, 123).then((data) => console.log(`DATA:`, data.value))
//     .catch((error) => console.log(`ERROR:`, error))

const bodyparser = require("body-parser")


var corsOptions = {
    origin: 'http://example.com',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
app.use(cors(corsOptions))
//app.set("db", knex);
app.get('/buku', (req,res) => {
    client.query('SELECT * FROM buku ORDER BY id ', (err, rows) => {
        if (err) {
            return res.status(500).json({
                status: false,
                message: 'Internal Server Error',
            })
        } else {
            return res.status(200).json({
                status: true,
                message: 'List Data Buku',
                data: rows
            })
        }
    })
})
 
app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.listen(port, () => {
    console.log(`This program running on localhost port ${port}`)
})