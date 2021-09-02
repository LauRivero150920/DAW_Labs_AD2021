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

// Ejercicio 3
let order = [12,12,45,524,1213,23,2,22,500,912];
let mayor = 0;
let menor = 0;
for(let i = 0; i < order.length; i++){
    if(i === 0){
        mayor = order[i];
        menor = order[i];
    }
    else{
        if(order[i] > mayor){
            mayor = order[i];
        }
        else if(order[i] < menor){
            menor = order[i];
        }
    }
}

console.log("El número mayor es: ", mayor);
console.log("El número menor es: ", menor);