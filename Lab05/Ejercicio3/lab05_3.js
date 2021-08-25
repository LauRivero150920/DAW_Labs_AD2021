// Función: contador. Parámetros: Un arreglo de números. 
// Regresa: La cantidad de números negativos en el arreglo, la cantidad de 0's, 
// y la cantidad de valores mayores a 0 en el arreglo.

let numbers = [];
let ceros = 0;
let negative = 0;
let positive = 0;

for(let i = 0; i < 100; i++){
    numbers[i] = window.prompt("Ingresa un número");
    if(numbers[i] === 0){
        ceros++;
    }
    else if(numbers[i] < 0){
        negative++;
    }
    else{
        positive++;
    }
}

