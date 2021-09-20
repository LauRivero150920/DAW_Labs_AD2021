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

app.use((request, response, next) => {
    console.log('Segundo middleware!');
    response.send('Error 404'); //Manda la respuesta
});

app.listen(3000);