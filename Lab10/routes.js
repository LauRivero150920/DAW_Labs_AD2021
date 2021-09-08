let animalitos = [
    {nombre: "Panda Rojo", pais: "Nepal"},
    {nombre: "Panda Gigante", pais: "China"},
    {nombre: "Koala" , pais: "Australia"},
    {nombre: "Perezoso", pais: "Nicaragua"},
    {nombre: "Oso Grizzly", pais: "Canadá"},
    {nombre: "Oso Polar", pais: "Groenlandia"}
];

const requestHandler = (request, response) => {
    console.log(request.url);

    if(request.url === "/"){
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/html');
        response.write('<head><meta charset="UTF-8"><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></head>');
        response.write('<body style="background-color: #aee7f5; color: black; text-align:center">');
        response.write('<br>');
        response.write('<h1 style="text-align: center; font-size: 80px">Inicio</h1>');
        response.write('<br><br>');
        response.write('<h2 style="text-align: center; font-size: 50px">Selecciona una Ruta</h2>');
        response.write('<br><br>');
        response.write('<a href = "/rutafeliz" style="font-size: 30px">Ruta Feliz :D</a>');
        response.write('<br><br>');
        response.write('<a href = "/rutatriste" style="font-size: 30px">Ruta Triste :c</a>');
        response.write('<br><br>');
        response.write('<a href = "/datoooss" style="font-size: 30px">Ruta para agregar datos :3</a>');
        response.write('<br><br>');
        response.write('</body>');
        response.end();
    }

    else if(request.url === "/rutafeliz"){
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/html');
        response.write('<head><meta charset="UTF-8"><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></head>');
        response.write('<body style="background-color: #aee7f5; color: black; text-align:center">');
        response.write('<br>');
        response.write('<h1>Has elegido el camino de la felicidad :D</h1>');
        response.write('<img src="https://pa1.narvii.com/7678/48edd3aff058303bf849815ce8f8573b997e4ba3r1-498-498_hq.gif" style="width: 50%">');
        response.write('<br><br>');
        response.write('<a href = "/" style="font-size: 30px">Volver al selector de rutas :D</a>');
        response.write('<br><br>');
        response.write('</body>');
        response.end();
    }

    else if(request.url === "/rutatriste"){
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/html');
        response.write('<head><meta charset="UTF-8"><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></head>');
        response.write('<body style="background-color: #aee7f5; color: black; text-align:center">');
        response.write('<br>');
        response.write("<h1>Has elegido el camino de la tristeza</h1>");
        response.write('<img src="https://64.media.tumblr.com/de58d8f86250fedbd4db3574eba8077e/7e1894b2870064a3-ef/s540x810/b10725aaa07f4c493cb5a144db3a2c89a3ed1cf9.gifv" style="width: 60%">');
        response.write('<br><br>');
        response.write('<a href = "/" style="font-size: 30px">Volver al selector de rutas :(</a>');
        response.write('<br><br>');
        response.write('</body>');
        response.end();
    }

    else if(request.url === "/datoooss"){
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/html');
        response.write('<body style="background-color: #aee7f5; color: black; text-align:center">');
        response.write('<head><meta charset="UTF-8"><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></head>');
        response.write('<br>');
        response.write('<h1>Aqui recolectamos datos</h1>');
        response.write('<ul style="list-style-type:none;">');
        for(let animalito of animalitos){
            response.write('<li style="font-size: 30px">' + animalito.nombre + ': ' + animalito.pais + '</li>');
        }
        response.write("</ul>");
        response.write('<a href = "/datoooss/agregar" style="text-align:center; font-size: 25px">Agregar Animalito </a>');
        response.write('<br><br><br>');
        response.write('<a href = "/" style="font-size: 25px; text-align:center">Volver al selector de rutas ʕ•ᴥ•ʔ</a>');
        response.write('</body>');
        response.end();
    }

    else if(request.url === "/datoooss/agregar" && request.method === "GET"){
        response.setHeader('Content-Type', 'text/html');
        response.write('<body style="background-color: #aee7f5; color: black; text-align:center">');
        response.write('<head><meta charset="UTF-8"><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></head>');
        response.write('<br>');
        response.write('<h1 style="text-align:center">Introducir Nuevo Animalito ʕᵔᴥᵔʔ</h1>');
        response.write('<br>');
        response.write('<form action="/datoooss/agregar" method="POST">');
        response.write('<label for="nombre">Nombre de Animalito:  </label>');
        response.write('<input type="text" id="nombre" name="nombre" placeholder="Panda" required style="margin-left:10px">');
        response.write('<br><br>');
        response.write('<label for="pais">País donde se puede encontrar el animalito:  </label>');
        response.write('<input type="text" id="pais" name="pais" placeholder="China" style="margin-left:10px">');
        response.write('<br><br>');
        response.write('<input type="submit" id="enviar" name="enviar" value="Enviar">');
        response.write('</form>');
        response.write('<br>');
        response.write('<a href = "/" style="font-size: 25px">Volver al selector de rutas ʕ•ᴥ•ʔ</a>');
        response.write('</body>');
    }

    else if(request.url === "/datoooss/agregar" && request.method === "POST"){
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
            const pais = datos_completos.split('=')[2].split('&')[0];
            console.log(nombre);
            console.log(pais);

            // Agregar animalitos
            animalitos.push({nombre: nombre, pais:pais});

            // Redirección Hacia menú
            response.statusCode = 302;
            response.setHeader('Location', '/datoooss');
            response.end();
        });
    }

    else{
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html');
        response.write('<head><meta charset="UTF-8"></head>');
        response.write('<img src="https://dinahosting.com/blog/cont/uploads/2021/03/error-404.jpg" style="width: 100%">');
        response.end();
    }
};

module.exports = requestHandler;