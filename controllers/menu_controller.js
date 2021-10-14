const session = require('express-session');
const platillo = require('../models/platillo');
const { fetchAll } = require('../models/platillo');
const Platillo = require('../models/platillo');

exports.getList = (request, response, next) => {
    // console.log(request.get('Cookie'));
    // console.log(request.cookies);
    // console.log(request.cookies.ultimo_platillo);
    //* Fetch all de modelo platillo, recuperar todos los platillos
    Platillo.fetchAll(request.params.platillo_id)
        .then(([rows, fieldData]) => {
            // console.log(rows);
            response.render('lista_menu',  {
                titulo: "Menú",
                isLoggedIn: request.session.isLoggedIn,
                username: request.session.username,
                lista_platillos: rows,
            });
        })
        .catch(err => {
            console.log(err);
            response.status(302).redirect('/error');
        });
};

exports.getAdd = (request, response, next) => {
    if (!request.session.isLoggedIn) {
        return response.redirect('/users/login');
    }
    //Resto del código de la ruta...
    response.render('add_menu',{
        titulo: "Agregar Platillo al Menú",
        isLoggedIn: request.session.isLoggedIn,
        username: request.session.username,
    });
};

exports.postAdd = (request, response, next) => {
    response.setHeader('Set-Cookie', 'ultimo_platillo='+request.body.nombre+ ';HttpOnly');
    const platillo = new Platillo(request.body.nombre, request.body.descripcion, request.body.imagen);
    platillo.save()
        .then(([rows, fieldData]) => {
            response.status(302).redirect('/menu/list');
        })
        .catch(err => {
            console.log(err);
            response.status(302).redirect('/error');
        });
};

exports.postSearch = (request, response, next) => {
    console.log(request.body.query);
    platillo.find(request.body.query)
        .then( ([rows, fieldData]) => {
            response.status(200).json({rows});
        })
        .catch(
            err => {
                console.log(err);
                esponse.status(200).json({error: err});
            }
        );
    
};