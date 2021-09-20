// fs es el prototipo de js que trabaja con el sistema de archivos. fs -> file system
/*
const file_system = require('fs');

// file_system.writeFileSync("archivo", "texto");
file_system.writeFileSync("comida.txt", "Maruchan");

// Código asíncrono
const arreglo = [300,114,5,232,124,67,234,243];

for(let item of arreglo){
    setTimeout(() =>{ 
        console.log(item);
    },item);
}
*/
// Servidor web
const http = require('http');
const routes = require('./node/routes');

const server = http.createServer(routes);

// Puerto con el que vamos a esuchar las peticiones
server.listen(3000);
