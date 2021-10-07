const db = require('../util/database');

module.exports = class Usuario {
    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nombre_completo, username, password) {
        this.nombre = nombre_completo;
        this.username = username;
        this.password = password;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute('INSERT INTO usuarios (nombre_completo, username, password) VALUES (?, ?, ?)',
            [this.nombre_completo, this.username, this.password]
        );
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchOne(username, password) {
        return db.execute('SELECT * FROM usuarios WHERE username = ? AND password = ?',
            [username, password]);
    }
        
}