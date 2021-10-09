const Usuario = require('../models/usuario');
const bcrypt = require('bcryptjs');

exports.getLogin = (request, response, next) => {
    response.render('login',  {
        titulo: "Iniciar Sesion",
        isLoggedIn: request.session.isLoggedIn,
        username: request.session.username,
    })
};

exports.postLogin = (request, response, next) => {
    Usuario.fetchOne(request.body.username)
    .then(([rows, fieldData]) => {
        bcrypt.compare(request.body.password, rows[0].password)
            .then(doMatch => {
                if (doMatch) {
                    request.session.isLoggedIn = true;
                    request.session.username = request.body.username;
                    return request.session.save(err => {
                        response.redirect('/menu/list');
                    });
                }
                console.log("El usuario y la contraseña no existen");
                response.status(302).redirect('/users/login');
            }).catch(err => {
                console.log("Ocurrió un error en la comparación");
                response.status(302).redirect('/users/login');
            });
    })
    .catch(err => {
        console.log(err);
        console.log("no se eonctró el usuario");
        response.status(302).redirect('/users/login');
    }); 
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
