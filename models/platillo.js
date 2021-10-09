const client = require('../util/database');
import { db } from '../util/database'
module.exports = class platillo {
    //* Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(mi_nombre, mi_descripcion, mi_imagen) {
        this.nombre = mi_nombre;
        this.descripcion = mi_descripcion;
        this.imagen = mi_imagen;
    }

    //* Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return client.query('INSERT INTO platillos (nombre, descripcion, imagen) VALUES (?, ?, ?)',
            [this.nombre, this.descripcion, this.imagen]);
    }

    // Este método servirá para devolver los objetos del almacenamiento persistente.
    // Métodos estáticos utilizados para las consultas, no necesitan ser llamados a través de un objeto de la clase
    static fetchAll(id) {
        if(id === undefined){
            return client.query('SELECT * FROM platillos ORDER BY nombre ASC');
        }
        else{
            return client.query('SELECT * FROM platillos WHERE id = ?', [id]);
        }
    }
}