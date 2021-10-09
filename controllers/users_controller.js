const Usuario = require('../models/usuario');

exports.getLogin = (request, response, next) => {
    response.render('login',  {
        titulo: "Iniciar Sesion",
        isLoggedIn: request.session.isLoggedIn,
        username: request.session.username,
    })
};

exports.postLogin = (request, response, next) => {
    request.session.username = request.body.username;
    request.session.isLoggedIn = true;
    console.log(request.session.username);
    response.status(302).redirect('/menu/list');
};

exports.getLogout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/menu/list'); //Este código se ejecuta cuando la sesión se elimina.
    });
};

exports.getAdd = (request, response, next) => {
    response.render('add_user',  {
        titulo: "Registrar un nuevo usuario",
        isLoggedIn: request.session.isLoggedIn,
        username: request.session.username,
    })
};

exports.postAdd = (request, response, next) => {
    const usuario = new Usuario(request.body.nombre, request.body.username, request.body.password );
    usuario.save()
        .then(() => {
            response.status(302).redirect('/users/login');
        })
        .catch(err => {
            console.log(err);
            response.status(302).redirect('/error');
        });
};
