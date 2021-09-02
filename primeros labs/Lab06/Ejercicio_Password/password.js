var spec = "/^[!@#$%^&*()_+\-=\[\]{};':\\|,.<>\/?]*$/";  
let upperFlag = false;
let spec_flag;

function show_password1() {
    let x = document.getElementById("pass1");
    if (x.type === "password") {
        x.type = "text";
    } 
    else{
        x.type = "password";
    }
}

function show_password2() {
    let x = document.getElementById("pass2");
    if (x.type === "password") {
        x.type = "text";
    } 
    else{
        x.type = "password";
    }
}

function equal_passwords(password_1, password_2){
    if(password_1 === password_2 && password_1 != ""){
        return true;
    }
}

function character_length(password_1){
    if(password_1.length >= 8){
        return true;
    }
    else{
        return false;
    }
}

function special_character(password_1){
    for(let i = 0; i < password_1.length; i++){
        for(let j = 0; j < spec.length; j++){
            if(password_1.charAt(i) === spec.charAt(j)){
                spec_flag = true;
                return true, spec_flag;
            }
        }
    }
    spec_flag = false;
    return spec_flag;
}

function upper_case(password_1){
    for(let i = 0; i < password_1.length; i++){
        if(password_1.charAt(i) >= 'A' && password_1.charAt(i) <= 'Z' && isNaN(password_1.charAt(i)) && password_1.charAt(i) === password_1.charAt(i).toUpperCase()) {
            return true;
        }
    }
}

function has_number(password_1){
    for(let i = 0; i < password_1.length; i++){
        if(isNaN(password_1.charAt(i)) === false){
            return true;
        }
    }
}

document.getElementById("pass_submit").onclick = password_strength;

function password_strength(){
    let total_stength = 0;
    let password_1 = document.getElementById("pass1").value;
    let password_2 = document.getElementById("pass2").value;
    if(character_length(password_1)){
        document.getElementById("char_length").style.color = "green";
        total_stength++;
    }
    else{
        document.getElementById("char_length").style.color = "red";
    }

    if(upper_case(password_1)){
        document.getElementById("upper_case").style.color = "green";
        total_stength++;
    }
    else{
        document.getElementById("upper_case").style.color = "red";
    }

    if(has_number(password_1)){
        document.getElementById("num").style.color = "green";
        total_stength++;
    }
    else{
        document.getElementById("num").style.color = "red";
    }

    if(special_character(password_1)){
        document.getElementById("spec_char").style.color = "green";
        total_stength++;
    }
    else{
        document.getElementById("spec_char").style.color = "red";
    }

    if(equal_passwords(password_1, password_2)){
        document.getElementById("pass_eq").style.color = "green";
    }
    else{
        document.getElementById("pass_eq").style.color = "red";
    }

    console.log(total_stength);
    if(total_stength === 1){
        document.getElementById("strength_bar").innerHTML = "Low";
        document.getElementById("strength_bar").style.width = "7%";
        document.getElementById("strength_bar").style.backgroundColor = "red";
        document.getElementById("strength_bar").style.textAlign = "left";
        document.getElementById("strength_bar").style.color = "white";
        document.getElementById("strength_bar").style.marginLeft = "39.5%";
    }
    else if(1 < total_stength  && total_stength <= 3){
        document.getElementById("strength_bar").innerHTML = "Medium";
        document.getElementById("strength_bar").style.width = "14%";
        document.getElementById("strength_bar").style.backgroundColor = "yellow";
        document.getElementById("strength_bar").style.textAlign = "left";
        document.getElementById("strength_bar").style.color = "black";
        document.getElementById("strength_bar").style.marginLeft = "40%";
    }
    else if(total_stength >= 3){
        document.getElementById("strength_bar").innerHTML = "Secure!";
        document.getElementById("strength_bar").style.width = "20%";
        document.getElementById("strength_bar").style.backgroundColor = "green";
        document.getElementById("strength_bar").style.textAlign = "left";
        document.getElementById("strength_bar").style.color = "white";
        document.getElementById("strength_bar").style.marginLeft = "40%";
        
    }
}
