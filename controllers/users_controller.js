exports.getLogin = (request, response, next) => {
    response.render('login',  {
        titulo: "Iniciar Sesion",
    })
};

exports.postLogin = (request, response, next) => {
    request.session.username = request.body.username;
    console.log(request.session.username);
    response.status(302).redirect('/menu/list');
};
