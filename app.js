const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const rutasMenu = require('./routes/menu');
const rutasUsers = require('./routes/users');

const path = require('path');

//Middleware
app.set('view engine', 'ejs');  // Le da el valor de 'ejs' al engine para que sepa que debe usar ese
app.set('views', 'views');      // Configuramos la carpeta views para que ejs busque ahí los templates

app.use(express.static(path.join(__dirname, 'public'))); 

app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.use(session({
    //* Password interno que solo el servidor conoce, debe ser un string aleatorio muy largo
    //* Se debe guardar en un archivo de texto que no este versionado
    secret: '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8',
    //* La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió  
    resave: false, 
    //* Asegura que no se guarde una sesión para una petición que no lo necesita
    saveUninitialized: false, 
}));

/*app.get('/index', (request, response, next) => {
    response.sendFile(path.join(__dirname, 'views', 'index.html'));
});*/

app.use('/menu', rutasMenu);
app.use('/users', rutasUsers);

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

app.use('/error', (request, response, next) => {
    response.status(500).send('Internal Server Error');
});

app.listen(3000);