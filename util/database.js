const { Pool, Client } = require('pg')

const pool = new Pool({
    host: '127.0.0.1',
    user: 'postgres',
    database: 'comida',
    password: 'randybtr15',
    port: 5432,
})
pool.query('SELECT NOW()', (err, res) => {
    console.log(err, res)
    pool.end()
})

const client = new Client({
    host: '127.0.0.1',
    user: 'postgres',
    database: 'comida',
    password: 'randybtr15',
    port: 5432,
})

client.connect()

client.query('SELECT NOW()', (err, res) => {
    console.log(err, res)
    client.end()
})