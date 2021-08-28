var spec = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;  
let upperFlag = false;
let spec_flag;
let i = 0;

function equal_passwords(){
    let password_1 = document.getElementById("pass1").value;
    let password_2 = document.getElementById("pass2").value;
    if(password_1 === password_2){
        document.getElementById("pass_eq").style.color = "green";
        return true;
    }
    else{
        document.getElementById("pass_eq").style.color = "red";
        return false;
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
    if(spec.test(password_1)){
        spec_flag = true;
        return true;
    }
    spec_flag = false;
    return false;
}

function upper_case(password_1){
    i = password_1.length;
    if(password_1.charAt(i-1) === password_1.charAt(i-1).toUpperCase() && isNaN(password_1.charAt(i-1)) === true && spec_flag === false){
        return true;
    }
    return false;
}

function has_number(password_1){
    let h = password_1.length
    if(isNaN(password_1.charAt(h-1)) === false && password_1 != ""){
        return true;
    }
    else{
        return false;
    }
}

document.getElementById("pass2").onkeyup = equal_passwords;
document.getElementById("pass1").onkeyup = password_strength;
//document.getElementById("pass1").onkeyup = upper_case;
//document.getElementById("pass1").onkeyup = special_character;

function password_strength(){
    let password_1 = document.getElementById("pass1").value;
    if(character_length(password_1)){
        document.getElementById("char_length").style.color = "green";
    }
    else{
        document.getElementById("char_length").style.color = "red";
    }

    if(upper_case(password_1)){
        document.getElementById("upper_case").style.color = "green";
    }
    else{
        document.getElementById("upper_case").style.color = "red";
    }

    if(special_character(password_1)){
        document.getElementById("spec_char").style.color = "green";
    }
    else{
        document.getElementById("spec_char").style.color = "red";
    }

    if(has_number(password_1)){
        document.getElementById("num").style.color = "green";
    }
    else{
        document.getElementById("num").style.color = "red";
    }
}