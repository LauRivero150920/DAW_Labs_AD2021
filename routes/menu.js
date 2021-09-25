const express = require('express');

const router = express.Router();

const platillos = [
    {nombre: "sopes", descripcion: "tortilla, pollo, queso", imagen: "https://t1.rg.ltmcdn.com/es/images/8/2/6/sopes_de_picadillo_74628_orig.jpg"},
    {nombre: "carne asada", descripcion: "rica carne al carbón", imagen: "https://d37k6lxrz24y4c.cloudfront.net/v2/es-mx/e9dc924f238fa6cc29465942875fe8f0/537b85de-8565-4a2e-91f3-b1e4d7f221bc-600.jpg"},
    {nombre: "hamburguesa", descripcion: "pan con carne y queso yum", imagen: "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2020/08/hamburguesa-2028707.jpg?itok=ujl3qgM9"},
    {nombre: "tacos", descripcion: "tortilla, queso, salsa", imagen: "https://foodandtravel.mx/wp-content/uploads/2017/02/Tacos-tradicionales.jpg"},
    {nombre: "chilaquiles", descripcion: "tortilla con crema bañada en salsa", imagen: "https://www.mexicodesconocido.com.mx/wp-content/uploads/2020/09/Depositphotos_316014688_xl-2015-scaled.jpg"},
    {nombre: "barbacoa", descripcion: "barbacoa hidalguense", imagen:"https://cdn1.matadornetwork.com/blogs/2/2020/04/Plato-de-barbacoa-900x506.jpg"}
];
router.get('/list', (request, response, next) => {
    response.render('lista_menu',  {
        titulo: "Menu",
        lista_platillos: platillos
    });
});

router.get('/add', (request, response, next) => {
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

router.post('/add', (request, response, next) => {
    // console.log(request.body.nombre);
    response.send("Gracias por contribuir con el menú");
});

router.get('/ruta', (request, response, next) => {
    response.send('Respuesta de la ruta "/modulo/ruta"'); 
});

module.exports = router;