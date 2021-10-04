exports.getInicio = (request, response, next) => {
    response.render('inicio',  {
    });
};

exports.getDestinos = (request, response, next) => {
    response.render('destinos',{
    });
};

exports.getContacto = (request, response, next) => {
    response.render('contacto',{
    });
};

exports.getUnity = (request, response, next) => {
    response.render('unity',{
    });
};