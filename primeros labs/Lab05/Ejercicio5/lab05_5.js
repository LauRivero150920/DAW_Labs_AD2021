let number = window.prompt("Ingresa un número de más de un dígito: ");

function Invert(num){
    let splitString = num.split("");
    let reverseNum = splitString.reverse();
    var reverse = reverseNum.join("");
    let reverse_int = parseInt(reverse);
    console.log(reverse);
    alert("El número invertido es " + reverse);
}
Invert(number);
