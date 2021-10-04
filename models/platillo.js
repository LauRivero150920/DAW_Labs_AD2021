const db = require('../util/database');

const platillos = [
    {nombre: "sopes", descripcion: "tortilla, pollo, queso", imagen: "https://t1.rg.ltmcdn.com/es/images/8/2/6/sopes_de_picadillo_74628_orig.jpg"},
    {nombre: "carne asada", descripcion: "rica carne al carbón", imagen: "https://d37k6lxrz24y4c.cloudfront.net/v2/es-mx/e9dc924f238fa6cc29465942875fe8f0/537b85de-8565-4a2e-91f3-b1e4d7f221bc-600.jpg"},
    {nombre: "hamburguesa", descripcion: "pan con carne y queso yum", imagen: "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2020/08/hamburguesa-2028707.jpg?itok=ujl3qgM9"},
    {nombre: "tacos", descripcion: "tortilla, queso, salsa", imagen: "https://foodandtravel.mx/wp-content/uploads/2017/02/Tacos-tradicionales.jpg"},
    {nombre: "chilaquiles", descripcion: "tortilla con crema bañada en salsa", imagen: "https://www.mexicodesconocido.com.mx/wp-content/uploads/2020/09/Depositphotos_316014688_xl-2015-scaled.jpg"},
    {nombre: "barbacoa", descripcion: "barbacoa hidalguense", imagen:"https://cdn1.matadornetwork.com/blogs/2/2020/04/Plato-de-barbacoa-900x506.jpg"}
];

module.exports = class platillo {
    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(mi_nombre, mi_descripcion, mi_imagen) {
        this.nombre = mi_nombre;
        this.descripcion = mi_descripcion;
        this.imagen = mi_imagen;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute('INSERT INTO platillos (nombre, descripcion, imagen) VALUES (?, ?, ?)',
            [this.nombre, this.descripcion, this.imagen]
        );
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute('SELECT * FROM platillos');
    }
}