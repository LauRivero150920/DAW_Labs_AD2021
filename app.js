/*console.log("Hola crayola");
console.info("Esta cosa mágica es un info :o");
let x = 5;
console.log(x);

const y = x + 4;
console.log(y);
*/

// fs es el prototipo de js que trabaja con el sistema de archivos. fs -> file system
const file_system = require('fs');

// file_system.writeFileSync("archivo", "texto");
file_system.writeFileSync("comida.txt", "Maruchan");