let prod1_avail = 5;
let prod2_avail = 7;
let prod3_avail = 4;

document.getElementById("prod1_disp").innerHTML = "Disponibles: " + (prod1_avail);
function purchased_product1(){
    let prod1_purch = document.getElementById("prod1_quant").value;
    document.getElementById("prod1_disp").innerHTML = "Disponibles: " + (prod1_avail - prod1_purch);
}

document.getElementById("prod2_disp").innerHTML = "Disponibles: " + (prod2_avail);
function purchased_product2(){
    let prod2_purch = document.getElementById("prod2_quant").value;
    document.getElementById("prod2_disp").innerHTML = "Disponibles: " + (prod2_avail - prod2_purch);
}

document.getElementById("prod3_disp").innerHTML = "Disponibles: " + (prod3_avail);
function purchased_product3(){
    let prod3_purch = document.getElementById("prod3_quant").value;
    document.getElementById("prod3_disp").innerHTML = "Disponibles: " + (prod3_avail - prod3_purch);
}

document.getElementById("prod1_quant").onclick = purchased_product1;
document.getElementById("prod2_quant").onclick = purchased_product2;
document.getElementById("prod3_quant").onclick = purchased_product3;
