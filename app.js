/*console.log("Hola crayola");
console.info("Esta cosa mágica es un info :o");
let x = 5;
console.log(x);

const y = x + 4;
console.log(y);
*/

// fs es el prototipo de js que trabaja con el sistema de archivos. fs -> file system
const file_system = require('fs');

// file_system.writeFileSync("archivo", "texto");
file_system.writeFileSync("comida.txt", "Maruchan");

// Código asíncrono
const arreglo = [3000,114,5,232,1224,67,2344,2434];

for(let item of arreglo){
    setTimeout(() =>{ 
        console.log(item);
    },item);
}

// Servidor web
const http = require('http');

const server = http.createServer((request, response) => {
    console.log(request.url);
    //response.setHeader('Content-Type', 'text/html');
    response.setHeader('Content-Type', 'text/html');
    // se debe poner para que se despliegue el poderosisimo html
    response.write("<h1>hola mundo</h1>")
    response.end();
});

// Puerto con el que vamos a esuchar las peticiones
server.listen(3000);