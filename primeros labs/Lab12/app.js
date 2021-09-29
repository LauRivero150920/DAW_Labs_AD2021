const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const rutasMenu = require('./routes/menu');
const rutasAnimalitos = require('./routes/animalitos');

//Middleware
app.use(bodyParser.urlencoded({extended: false}));

app.use('/menu', rutasMenu);
app.use('/animalitos', rutasAnimalitos);


app.use((request, response, next) => {
    let error = '<head><meta charset="UTF-8"></head>';
    error += '<img src="https://dinahosting.com/blog/cont/uploads/2021/03/error-404.jpg" style="width: 100%">';
    response.status(404).send(error);
});

app.listen(3000);