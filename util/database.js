//? Intentar hacerlo con posgres (PGAdmin)
const mysql = require('mysql2');

const BD = "DEV";

let host = '';
let user = '';
let database = '';
let password = '';


//? Variables de entorno

//* Fase de development (desarrollo)
if(BD ===  "DEV"){
    host = 'localhost';
    user = 'root';
    database = 'comida';
    password = '';
}

//* Fase de producción, no debe estar versionada
else if(BD === "PROD"){
    host = 'localhost';
    user = 'root';
    database = 'comida';
    password = 'fewfednvjerwf243dkmsjvf4_#_#nrehufiwodjskc12342jnfwejdioskmncdj';
}

//? Intentar hacerlo con posgres (PGAdmin)
const pool = mysql.createPool({
    host: host,
    user: user,
    database: database,
    password: password,
});

//* Una función que ejecuta otra función y se queda esperando a que se cumpla lo prometido
//* El código cumple su función normal hasta que se cumpla o no la promesa
module.exports = pool.promise();