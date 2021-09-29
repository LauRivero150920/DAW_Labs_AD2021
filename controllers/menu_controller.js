const Platillo = require('../models/platillo');

exports.getList = (request, response, next) => {
    response.render('lista_menu',  {
        titulo: "Menu",
        lista_platillos: Platillo.fetchAll()
    });
};

exports.getAdd = (request, response, next) => {
    
    response.render('add_menu',{
        titulo: "Agregar Platillo al Menú",
    });
};

exports.postAdd = (request, response, next) => {
    // console.log(request.body.nombre);
    const platillo = new Platillo(request.body.nombre, request.body.descripcion, "https://dam.cocinafacil.com.mx/wp-content/uploads/2020/04/comida-china-tipica.jpg");
    platillo.save();
    response.status(302).redirect('/menu/list');
};