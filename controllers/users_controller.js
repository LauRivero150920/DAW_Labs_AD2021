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
