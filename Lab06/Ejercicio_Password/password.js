function equal_passwords(){
    let password_1 = document.getElementById("pass1").value;
    let password_2 = document.getElementById("pass2").value;
    if(password_1 === password_2){
        document.getElementById("pass_eq").style.color = "green";
        return true;
    }
    else{
        return false;
    }
}

document.getElementById("pass_submit").onclick = equal_passwords;

function character_length(){

}

function password_strength(){
    if(special_character() && capital_letter() && character_length()){
        alert("strong password");
    }
}


