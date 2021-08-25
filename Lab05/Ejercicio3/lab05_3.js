// Función: contador. Parámetros: Un arreglo de números. 
// Regresa: La cantidad de números negativos en el arreglo, la cantidad de 0's, 
// y la cantidad de valores mayores a 0 en el arreglo.

let numbers1 = [];
let numbers2 = [];
let ceros = 0;
let negative = 0;
let positive = 0;

for(let i = 0; i < 40; i++){
    numbers1[i] = Math.floor(Math.random() * 100);
}

function counter(numbers){
    for(let i = 0; i < length(numbers); i++){
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
    return ceros, positive, negative;
}

console.log("Hay ", counter(numbers1), " ceros");
console.log("Hay ", negative, " numeros negativos");
console.log("Hay ", positive, " numeros positivos");



