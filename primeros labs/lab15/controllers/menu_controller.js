const Animalito = require('../models/animalito');

exports.getList = (request, response, next) => {
    response.render('lista_animalitos',  {
        titulo: "Animalitos",
        listado_de_animalitos: Animalito.fetchAll()
    });
};

exports.getAdd = (request, response, next) => {
    response.render('add_animalito',{
        titulo: "Agregar animalito",
    });
};

exports.postAdd = (request, response, next) => {
    const animalito = new Animalito(request.body.nombre, request.body.pais, "https://cdn.dribbble.com/users/264162/screenshots/6587627/animalicons-1artboard_1.png?compress=1&resize=400x300");
    animalito.save();
    response.status(302).redirect('/animalito/listaanimalito');
};