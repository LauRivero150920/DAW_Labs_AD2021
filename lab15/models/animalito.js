let animalitos = [
    {nombre: "Panda Rojo", pais: "Nepal", imagen: "https://resizer.glanacion.com/resizer/CatwBkqjVbsliPoGl--iYDXVXek=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/6FVC5DVW4JGXTHPENH3IVLNFA4.jpg"},
    {nombre: "Panda Gigante", pais: "China", imagen: "https://ichef.bbci.co.uk/news/640/cpsprodpb/169F6/production/_91026629_gettyimages-519508400.jpg"},
    {nombre: "Koala" , pais: "Australia", imagen: "https://previews.123rf.com/images/preechasiri/preechasiri1804/preechasiri180400299/100144638-madre-e-hijo-koala-en-un-%C3%A1rbol-en-el-entorno-natural.jpg"},
    {nombre: "Mapache", pais: "Mexico", imagen: "https://st.depositphotos.com/1223696/1268/i/600/depositphotos_12686603-stock-photo-racoon.jpg"},
    {nombre: "Oso Grizzly", pais: "Canadá", imagen: "https://www.fws.gov/mountain-prairie/es/images/mammals/grizzlyfeature_t.jpg"},
    {nombre: "Oso Polar", pais: "Groenlandia", imagen: "https://storage.googleapis.com/oceanwide_web/media-dynamic/cache/widen_1600/media/default/0001/35/63c03e64c8f380f058e1ada09734ba15879c56f5.jpeg"}
];


module.exports = class platillo {
    constructor(mi_nombre, mi_pais, mi_imagen) {
        this.nombre = mi_nombre;
        this.pais = mi_pais;
        this.imagen = mi_imagen;
    }

    save() {
        animalitos.push(this);
    }

    static fetchAll() {
        return animalitos;
    }
}