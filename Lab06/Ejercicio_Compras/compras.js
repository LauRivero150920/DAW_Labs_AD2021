let prod1_avail = 5;
let prod2_avail = 7;
let prod3_avail = 4;

let temp1 = 0;
let temp2 = 0;
let temp3 = 0;

let product1_quantity = 0;
let product2_quantity = 0;
let product3_quantity = 0;
let iva = 0;
let subtotal = 0;
let total = 0;
let total_products = 0;

document.getElementById("prod1_disp").innerHTML = "Disponibles: " + (prod1_avail);
function purchased_product1(){
    let prod1_purch = document.getElementById("prod1_quant").value;
    let prod1_sub = prod1_avail - prod1_purch;
    document.getElementById("prod1_disp").innerHTML = "Disponibles: " + (prod1_sub);
    if(prod1_sub === 0){
        document.getElementById("prod1_disp").style.background = "red";
    }
    else{
        document.getElementById("prod1_disp").style.background = "green";
    }
}

document.getElementById("prod2_disp").innerHTML = "Disponibles: " + (prod2_avail);
function purchased_product2(){
    let prod2_purch = document.getElementById("prod2_quant").value;
    let prod2_sub = prod2_avail - prod2_purch;
    document.getElementById("prod2_disp").innerHTML = "Disponibles: " + (prod2_sub);
    if(prod2_sub === 0){
        document.getElementById("prod2_disp").style.background = "red";
    }
    else{
        document.getElementById("prod2_disp").style.background = "green";
    }
}

document.getElementById("prod3_disp").innerHTML = "Disponibles: " + (prod3_avail);
function purchased_product3(){
    let prod3_purch = document.getElementById("prod3_quant").value;
    let prod3_sub = prod3_avail - prod3_purch;
    document.getElementById("prod3_disp").innerHTML = "Disponibles: " + (prod3_sub);
    if(prod3_sub === 0){
        document.getElementById("prod3_disp").style.background = "red";
    }
    else{
        document.getElementById("prod3_disp").style.background = "green";
    }
}

function totals_p1(){   
    let prod1_purch = parseInt(document.getElementById("prod1_quant").value);
    let prod1_dif = prod1_purch - temp1;
    total_products += prod1_dif;
    subtotal += (prod1_dif * 200);
    iva += (prod1_dif *.16 * 200);
    total += (prod1_dif * 200) + (prod1_dif *.16 * 200);

    document.getElementById("shawn").innerHTML = "SM, Handwritten ------- " + prod1_purch + " piezas";

    document.getElementById("quantity").innerHTML = "Cantidad: " + total_products;
    document.getElementById("subtotal").innerHTML = "Subtotal: $" + subtotal;
    document.getElementById("iva").innerHTML = "IVA: $" + iva;
    document.getElementById("total_iva").innerHTML = "TOTAL: $" + total;
    temp1 = prod1_purch;
}

function totals_p2(){
    let prod2_purch = parseInt(document.getElementById("prod2_quant").value);
    let prod2_dif = prod2_purch - temp2;
    total_products += prod2_dif;
    subtotal += (prod2_dif * 250);
    iva += (prod2_dif *.16 * 250);
    total += (prod2_dif * 250) + (prod2_dif *.16 * 250);

    document.getElementById("olivia").innerHTML = "OR, Sour ------- " + prod2_purch + " piezas";

    document.getElementById("quantity").innerHTML = "Cantidad: " + total_products;
    document.getElementById("subtotal").innerHTML = "Subtotal: $" + subtotal;
    document.getElementById("iva").innerHTML = "IVA: $" + iva;
    document.getElementById("total_iva").innerHTML = "TOTAL: $" + total;
    temp2 = prod2_purch;
}

function totals_p3(){
    let prod3_purch = parseInt(document.getElementById("prod3_quant").value);
    let prod3_dif = prod3_purch - temp3;
    total_products += prod3_dif;
    subtotal += (prod3_dif * 150);
    iva += (prod3_dif *.16 * 150);
    total += (prod3_dif * 150) + (prod3_dif *.16 * 150);

    document.getElementById("score").innerHTML = "TS, ATLAS ------- " + prod3_purch + " piezas";

    document.getElementById("quantity").innerHTML = "Cantidad: " + total_products;
    document.getElementById("subtotal").innerHTML = "Subtotal: $" + subtotal;
    document.getElementById("iva").innerHTML = "IVA: $" + iva;
    document.getElementById("total_iva").innerHTML = "TOTAL: $" + total;
    temp3 = prod3_purch;
}

document.getElementById("prod1_quant").onclick = purchased_product1;
document.getElementById("prod2_quant").onclick = purchased_product2;
document.getElementById("prod3_quant").onclick = purchased_product3;

document.getElementById("quantity").innerHTML = "Cantidad: ";
document.getElementById("subtotal").innerHTML = "Subtotal: $";
document.getElementById("iva").innerHTML = "IVA: $";
document.getElementById("total_iva").innerHTML = "TOTAL: $";

document.getElementById("prod1_shop").onclick = totals_p1;
document.getElementById("prod2_shop").onclick = totals_p2;
document.getElementById("prod3_shop").onclick = totals_p3;
