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

// Ejercicio 4
const http = require('http');

const server = http.createServer((request, response) => {
    console.log(request.url);
    response.setHeader('Content-Type', 'text/html');
    response.write('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="stylesheet" href="style.css"></link><title>Lab 01</title></head><body><header><h1>Laura Aylín Rivero López</h1></header><h2 class="title_txt">Información General</h2><P>Mi nombre es <strong id="data">Laura Rivero</strong>, actualmente estoy cursando mi 7mo semestre de ingeniería en sistemas digitales y robótica.<br><br><strong id="data">Matricula:</strong> A01274144<br><br><strong id="data">Correo:</strong> A01274144@itesm.mx</P><span><h2 class="title_txt">Hobbies</h2></span><div id="image_hobbies" style="text-align: center;"><div style="display: inline-block;"><img src="https://thumbs.dreamstime.com/b/libro-de-lectura-lindo-la-panda-del-oso-ballena-dise-o-ejemplo-vector-145847689.jpg" alt="" width="300"></div><div style="display: inline-block;"><img src="https://i.ytimg.com/vi/LTiUtuDpNag/hqdefault.jpg" alt="" width="300"></div><div style="display: inline-block;"><img src="https://idsb.tmgrup.com.tr/ly/uploads/images/2020/08/19/52894.jpg" alt="" width="300"></div></div><br><h2 class="title_txt">Formulario</h2><div id="formulario"><form><label for="name">Nombre:</label><br><input type="text" id="name"><br><br><input type="submit" value="Submit" class="button"> <br><br></form></div><div><h1>AQUI ES LA PRUEBA DE LAS DIFERENTES RAMAS</h1><h1>VAMOS A VER EL MUNDO ARDER Y GENERAR UN CONFLICTO AQUI, MUAJAJAJA</h1><h1>VAMOS A VER EL MUNDO ARDER Y GENERAR UN CONFLICTO AQUI.</h1></div><footer>Visual Studio Code ➜ https://code.visualstudio.com/</footer></body></html>')
    response.end();
});

// Puerto con el que vamos a esuchar las peticiones
server.listen(3000);