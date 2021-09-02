const num1 = Math.floor(Math.random() * 100);
const num2 = Math.floor(Math.random() * 100);
const res_correct = num1 + num2;
let start_time = new Date();
let total_time;

const res_user = window.prompt("¿Cuál es el resultado de " + num1 + "+" + num2 + "?");

if(res_correct === parseInt(res_user)){
    let finish_time = new Date();
    total_time = (finish_time - start_time)/1000;
    alert('CORRECTO! :3 '+ num1 +' + '+ num2 +' es '+ res_correct + ", Te tomó: " + total_time + ' segundos contestar');
}
else{
    let finish_time = new Date();
    total_time = (finish_time - start_time)/1000;
    alert('INCORRECTO! :c '+ num1 +' + '+ num2 +' es '+ res_correct + ", Te tomó: " + total_time + ' segundos contestar');
}