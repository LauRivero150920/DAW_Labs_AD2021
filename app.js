const express = require('express');
const app = express();

const bodyParser = require('body-parser');

//Middleware

/*app.use( (request, response,next) => {
    next(); // Solo avanza al siguiente middleware
});*/
app.use(bodyParser.urlencoded({extended: false}));

app.use((request, response, next) => {
    console.log('Primer Middleware!');
    console.log(request.body);
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.use('/ruta/nombres', (request, response, next) => {
    console.log('Segundo middleware! (ruta)');
    response.send('Respuesta de la ruta "/ruta/nombres"'); 
});

app.use('/ruta/apellidos', (request, response, next) => {
    console.log('Segundo middleware! (ruta)');
    response.send('Respuesta de la ruta "/ruta/apellidos"'); 
});

app.use('/ruta', (request, response, next) => {
    console.log('Segundo middleware! (ruta)');
    response.send('Respuesta de la ruta "/ruta"'); 
});

app.get('/menu/add', (request, response, next) => {
    let respuesta = '<head><meta charset="UTF-8"></head>';
    respuesta += '<h1>Agregar platillo al menú</h1>';
    respuesta += '<form action="/menu/add" method="POST">';
    respuesta += '<label for="nombre">Nombre de platillo: </label>';
    respuesta += '<input type="text" id="nombre" name="nombre" placeholder="tacos" required>';
    respuesta += '<br/>';
    respuesta += '<br/>';
    respuesta += '<label for="descripcion">Descripción del platillo: </label>';
    respuesta += '<input type="text" id="descripcion" name="descripcion" placeholder="Este platillo es delicioso, lleva...">';
    respuesta += '<br/>';
    respuesta += '<br/>';
    respuesta += '<input type="submit" id="enviar" name="enviar" value="Enviar">';
    respuesta += '</form>';
    response.send(respuesta);
});

app.post('/menu/add', (request, response, next) => {
    response.send("Gracias por contribuir con el menú");
});

app.use((request, response, next) => {
    console.log('Segundo middleware!');
    response.send('Error 404'); //Manda la respuesta
});



app.listen(3000);