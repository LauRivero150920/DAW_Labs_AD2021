const mysql = require('mysql2');

const BD = "DEV";

let host = '';
let user = '';
let database = '';
let password = '';

if(BD ===  "DEV"){
    host = 'localhost';
    user = 'roor';
    database = 'comida';
    password = '';
}
else if(BD === "PROD"){
    host = 'localhost';
    user = 'roor';
    database = 'comida';
    password = 'fewfednvjerwf243dkmsjvf4_#_#nrehufiwodjskc12342jnfwejdioskmncdj';
}

const pool = mysql.createPool({
    host: host,
    user: user,
    database: database,
    password: password
});

module.exports = pool.promise();