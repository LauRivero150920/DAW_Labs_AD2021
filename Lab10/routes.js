const requestHandler = (request, response) => {
    console.log(request.url);

    if(request.url === "/rutafeliz"){
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/html');
        response.write('<head><meta charset="UTF-8"><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></head>');
        response.write("<h1>Esta es la primera ruta y es feliz :3</h1>")
        response.end();
    }

    else if(request.url === "/rutatriste"){
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/html');
        response.write('<head><meta charset="UTF-8"><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></head>');
        response.write("<h1>Esta es la segunda ruta ruta y es triste :c</h1>")
        response.end();
    }

    else if(request.url === "/datoooss"){
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/html');
        response.write('<head><meta charset="UTF-8"></head>');
        response.write("<h1>Aqui recolectamos datos</h1>")
        response.end();
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