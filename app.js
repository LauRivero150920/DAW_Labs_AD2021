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
const arreglo = [300,114,5,232,124,67,234,243];

for(let item of arreglo){
    setTimeout(() =>{ 
        console.log(item);
    },item);
}

// Servidor web
const http = require('http');

const platillos = [
    {nombre: "sopes", descripcion: "tortilla, frijol, queso, salsa, pollo"},
    {nombre: "chilaquiles", descripcion: "tortillas, salsa, frijol, queso, pollo"},
    {nombre: "tacos", descripcion: "tortilla, carne, salsa"},
    {nombre: "pambazo", descripcion: "bolillo con carne remojado en salsa"}
];

const server = http.createServer((request, response) => {
    console.log(request.url);
    //response.setHeader('Content-Type', 'text/html');
    //response.setHeader('Content-Type', 'text/html');
    // se debe poner para que se despliegue el poderosisimo html
    //response.write("<h1>hola mundo</h1>")

    // Reaccionar de acuerdo a la ruta
    if(request.url === "/hola"){
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/html');
        response.write('<head><meta charset="UTF-8"></head>');
        response.write("<h1>Hola Mundo!</h1>")
        response.end();
    }
    else if(request.url === "/adios"){
        // Redireccionar a youtube a la canción de adios amor xD
    }
    else if(request.url === "/menu"){
        // Mostrar la lista de platillos
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/html');
        response.write('<head><meta charset="UTF-8"></head>');
        response.write("<h1>Menú</h1>");
        response.write("<ul>");
        for(let platillo of platillos){
            response.write("<li>" + platillo.nombre + ": " + platillo.descripcion + "</li>");
        }
        response.write("</ul>");
        response.write('<a href = "menu/add">Agregar platillo </a>');
        response.end();
    }
    else if(request.url === "/menu/add" && request.method === "GET"){
        // Agregar un platillo a la lista
        console.log(request.method);
        response.setHeader('Content-Type', 'text/html');
        response.write('<head><meta charset="UTF-8"></head>');
        response.write('<h1>Agregar platillo al Menú</h1>');
        response.write('<form action="/menu/add" method="POST">');
        response.write('<label for="nombre">Nombre del platillo: </label>');
        response.write('<input type="text" id="nombre" name="nombre" placeholder="tacos" required>');
        response.write('<br/>');
        response.write('<br/>');
        response.write('<label for="descripcion">Descripción del platillo: </label>');
        response.write('<input type="text" id="descripcion" name= "descripcion" placeholder="ingredientes: azucar, flores y muchos colores">');
        response.write('<br/>');
        response.write('<br/>');
        response.write('<input type="submit" id="enviar" name="enviar" value="Enviar"');
        response.write('</form>');
        response.end();
    }
    else if(request.url === "/menu/add" && request.method === "POST"){
        console.log(request.method);
        // Recibir datos del cliente
        const datos = [];
        request.on('data', (dato) =>{
            console.log(dato);
            datos.push(dato);
        });
        console.log(datos);

        // Procesar datos del cliente
        return request.on('end', () =>{
            const datos_completos = Buffer.concat(datos).toString();
            console.log(datos);
            console.log(datos_completos);
            const nombre = datos_completos.split('=')[1].split('&')[0];
            const descripcion = datos_completos.split('=')[2].split('&')[2];
            console.log(nombre);
            console.log(descripcion);

            // Agregar platillos
            platillos.push({nombre: nombre, descripcion:descripcion});

            // Redirección Hacia menú
            response.statusCode = 302;
            response.setHeader('Location', '/menu');
        });
        
    }
    else{
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html');
        response.write('<head><meta charset="UTF-8"></head>');
        response.write("<h1>Error 404</h1>");
        response.end();
}


});

// Puerto con el que vamos a esuchar las peticiones
server.listen(3000);

