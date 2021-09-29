const express = require('express');

const router = express.Router();

router.get('/datos', (request, response, next) => {
    let datos = '<body style="background-color: #aee7f5; color: black; text-align:center">';
    datos += '<head><meta charset="UTF-8"><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></head>';
    datos += '<br>';
    datos += '<h1 style="text-align:center">Introducir Nuevo Animalito ʕᵔᴥᵔʔ</h1>';
    datos += '<br>';
    datos += '<form method="POST">';
    datos += '<label for="nombre">Nombre de Animalito:  </label>';
    datos += '<input type="text" id="nombre" name="nombre" placeholder="Panda" required style="margin-left:10px">';
    datos += '<br><br>';
    datos += '<label for="pais">País donde se puede encontrar el animalito:  </label>';
    datos += '<input type="text" id="pais" name="pais" placeholder="China" style="margin-left:10px">';
    datos += '<br><br>';
    datos += '<input type="submit" id="enviar" name="enviar" value="Enviar">';
    datos += '</form>';
    datos += '<br>';
    datos += '</body>';
    response.send(datos);
});

router.post('/datos', (request, response, next) => {
    let datos = '<body style="background-color: #aee7f5; color: black; text-align:center">';
    datos += '<head><meta charset="UTF-8"><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></head>';
    datos += '<br>';
    datos += '<h1 style="text-align:center; font-size:100px">Animalito introducido con Exito ʕᵔᴥᵔʔ</h1>';
    datos += '</body>';
    response.send(datos);
    let fs = require('fs')
    let logger = fs.createWriteStream('animalitos.txt', {
    });
    logger.write("nombre: " + request.body.nombre + ", País: " +  request.body.pais + "\n"); // append string to your file


});

module.exports = router;