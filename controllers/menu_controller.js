const Platillo = require('../models/platillo');

exports.getList = (request, response, next) => {
    console.log(request.get('Cookie'));
    console.log(request.get('Cookie').split(';')[0].trim().split('=')[1]);
    console.log(request.cookies);
    console.log(request.cookies.ultimo_platillo);
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
    response.setHeader('Set-Cookie', 'ultimo_platillo='+request.body.nombre+';HttpOnly');
    const platillo = new Platillo(request.body.nombre, request.body.descripcion, "https://dam.cocinafacil.com.mx/wp-content/uploads/2020/04/comida-china-tipica.jpg");
    platillo.save();
    response.status(302).redirect('/menu/list');
};