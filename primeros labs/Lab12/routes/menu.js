const express = require('express');

const router = express.Router();

router.get('/rutafeliz', (request, response, next) => {
    let respuesta_feliz = '<head><meta charset="UTF-8"><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></head>';
    respuesta_feliz += '<body style="background-color: #aee7f5; color: black; text-align:center">';
    respuesta_feliz += '<br>';
    respuesta_feliz += '<h1>Has elegido el camino de la felicidad :D</h1>';
    respuesta_feliz += '<img src="https://pa1.narvii.com/7678/48edd3aff058303bf849815ce8f8573b997e4ba3r1-498-498_hq.gif" style="width: 50%">';
    respuesta_feliz += '<br><br>';
    respuesta_feliz += '</body>';
    response.send(respuesta_feliz);
});

router.get('/rutatriste', (request, response, next) => {
    let respuesta_triste = '<head><meta charset="UTF-8"><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></head>';
    respuesta_triste += '<body style="background-color: #aee7f5; color: black; text-align:center">';
    respuesta_triste += '<br>';
    respuesta_triste += '<h1>Has elegido el camino de la tristeza</h1>';
    respuesta_triste += '<img src="https://64.media.tumblr.com/de58d8f86250fedbd4db3574eba8077e/7e1894b2870064a3-ef/s540x810/b10725aaa07f4c493cb5a144db3a2c89a3ed1cf9.gifv" style="width: 60%">';
    respuesta_triste += '<br><br>';
    respuesta_triste += '</body>';
    response.send(respuesta_triste);
});

router.get('/preguntas', (request, response, next) => {
    let respuesta_triste = '<head><meta charset="UTF-8"><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></head>';
    respuesta_triste += '<body style="background-color: #aee7f5; color: black; text-align:center">';
    respuesta_triste += '<br>';
    respuesta_triste += '<h1>Preguntas</h1>';
    respuesta_triste += '<h3>Describe el archivo package.json.</h3>';
    respuesta_triste += '<span>archivo de definición o manifiesto para nuestro proyecto, en el cual especificamos referencias al proyecto como: autor, repositorio, versión y sobre todo las dependencias, entre otros.</span>';
    respuesta_triste += '<br><br>';
    respuesta_triste += '</body>';
    response.send(respuesta_triste);
});


module.exports = router;