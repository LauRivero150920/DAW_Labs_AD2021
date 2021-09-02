// Ejercicio 1
let numbers = [10,12,23,24334,12234,12,234,123];
let suma = 0;
for(let number in numbers){
    suma += numbers[number];
}

let promedio = (suma)/(numbers.length);
console.log("Ejercicio 1) El promedio de los número es: ", promedio);

// Ejercicio 2
let write = "Hola mundo";
const file_system = require('fs');

file_system.writeFileSync("ejercicio2.txt", write);
