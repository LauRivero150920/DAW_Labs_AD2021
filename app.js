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
    secret: 'AD123E3djnadIUFIUFEJSs2kajndjewfnnknfejnf32iu3bf3u2fib', //mi string secreto que debe ser un string aleatorio muy largo, no como éste'
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

app.get('/index', (request, response, next) => {
    response.sendFile(path.join(__dirname, 'views', 'index.html'));
});

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

app.listen(3000);