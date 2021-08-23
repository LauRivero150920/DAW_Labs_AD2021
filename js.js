// --Uso de la consola
console.log("Hola");
console.info("Estamos ne bloque DAW + BD");
console.warn("Advertencia");
console.error("Error");
console.table()

// --Variables, constantes y alcance
const precio = 99.99;
// var -> Ya no se usa :c
// let tiene alcance solo dentro del ámbito en el que se declara, es decir entre las llaves {}
// var tiene alcance en toda la función donde fue declarada
let tacos = 0;
var pizzas = 0;

// --Estructura de control
// Se utiliza el triple = para comparar
if (1 === 1){
    let gorditas = 3;
    console.log("Verdadero");
}
else{
    console.log("Falso");
}

for(let i = 0; i < 10; i++){
    console.log(i);
}

// --Alerts, prompts y confirms, escribir en el html
window.alert("Esto es un alert de hambre");

const comida = window.prompt("¿Cuál es tu comida favorita?");
console.info("La comida favorita del usuario es: " + comida);

const respuesta = window.confirm("¿Tienes mucha hambre?");
if(respuesta){
    console.warn("Vamos a comer " + comida + " ahora");
}
else{
    console.log("Podemos penar cual es el mejor lugar para comer " + comida);
}

// --Funciones

// --Funciones flecha

// --Arreglos

// --Recorrido de Arreglos

// --Objetos 
