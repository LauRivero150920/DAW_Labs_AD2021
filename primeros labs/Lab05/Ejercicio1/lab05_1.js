// 1) Entrada: un número pedido con un prompt. Salida: Una tabla con los números 
// del 1 al número dado con sus cuadrados y cubos. 
// Utiliza document.write para producir la salida

const num = window.prompt("Ingres un número");

for(let i = 1; i <= num; i++){
    document.write('<table><tr><th>'+i+'</th><th>'+i*i+'</th><th>'+i*i*i+'</th></tr></table>');
}