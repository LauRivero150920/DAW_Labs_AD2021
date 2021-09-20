const express = require('express');
const app = express();

//Middleware

/*app.use( (request, response,next) => {
    next(); // Solo avanza al siguiente middleware
});*/

app.use((request, response, next) => {
    console.log('Primer Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.use('/ruta', (request, response, next) => {
    console.log('Segundo middleware! (ruta)');
    response.send('Respuesta de la ruta "/ruta"'); 
});

app.use((request, response, next) => {
    console.log('Segundo middleware!');
    response.send('¡Hola mundoooooo!'); //Manda la respuesta
});

app.listen(3000);