// Función: contador. Parámetros: Un arreglo de números. 
// Regresa: La cantidad de números negativos en el arreglo, la cantidad de 0's, 
// y la cantidad de valores mayores a 0 en el arreglo.

let numbers1 = [];
let ceros = 0;
let negative = 0;
let positive = 0;

let num_numbers_pos = Math.floor(Math.random() * 40);
let num_numbers_neg = 40 - num_numbers_pos;

for(let i = 0; i < num_numbers_pos; i++){
    numbers1[i] = Math.floor(Math.random() * 100);
}

for(let j = num_numbers_pos; j < 40; j++){
    numbers1[j] = Math.floor(Math.random() * -100);
}



function counter(numbers){
    for(let i = 0; i < 40; i++){
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
    console.log(numbers);
    console.log("Hay ", ceros, " ceros");
    console.log("Hay ", negative, " numeros negativos");
    console.log("Hay ", positive, " numeros positivos");
}

counter(numbers1);




