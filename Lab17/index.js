const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const rutasPaseos = require('./routes/paseos');

const path = require('path');

//Middleware
app.set('view engine', 'ejs');  // Le da el valor de 'ejs' al engine para que sepa que debe usar ese
app.set('views', 'views');      // Configuramos la carpeta views para que ejs busque ahí los templates

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));

app.use('/', rutasPaseos);

app.use((request, response, next) => {
    response.status(404).send('Recurso no encontrado');
});

app.listen(3000);