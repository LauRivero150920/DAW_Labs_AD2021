const Platillo = require('../models/platillo');

exports.getList = (request, response, next) => {
    response.render('lista_menu',  {
        titulo: "Menu",
        lista_platillos: Platillo.fetchAll()
    });
};

exports.getAdd = (request, response, next) => {
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
};

exports.postAdd = (request, response, next) => {
    // console.log(request.body.nombre);
    response.send("Gracias por contribuir con el menú");
};