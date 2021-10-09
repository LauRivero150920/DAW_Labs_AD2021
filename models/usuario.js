const client = require('../util/database');
const bcrypt = require('bcryptjs');

module.exports = class Usuario {
    //* Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nombre, username, password) {
        this.nombre = nombre;
        this.username = username;
        this.password = password;
    }

    //* Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return client.query('INSERT INTO usuarios (nombre, username, password) VALUES ($1, $2, %3)',
            [this.nombre, this.username, bcrypt.hashSync(this.password, 12)]);
    }

    //* Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchOne(username) {
        return client.query('SELECT * FROM usuarios WHERE username = ?', [username]);
    }     
}