const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const rutasMenu = require('./routes/menu');

//Middleware
app.use(bodyParser.urlencoded({extended: false}));

app.use('/menu', rutasMenu);

app.use((request, response, next) => {
    console.log('Primer Middleware!');
    console.log(request.body);
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.use('/ruta', (request, response, next) => {
    console.log('Segundo middleware! (ruta)');
    response.send('Respuesta de la ruta "/ruta"'); 
});

app.use((request, response, next) => {
    console.log('Segundo middleware!');
    response.status(404).send('Recurso no encontrado');
});

app.listen(3000);