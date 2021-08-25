
let personaje = {Nombre: "Ajax Nightspit", vidas: 3, espada: true, balas: 4};
let enemigo = {Nombre: "Xenagoras", vidas: 3, hacha: true};

function ataque(personaje, enemigo){
    while(personaje.vidas > 0){
        if(enemigo.vidas > 0){
            let ataque_dec = window.confirm(personaje.Nombre + ": Quieres atacar a " + enemigo.Nombre + "?");
            if(ataque_dec){
                let ataque_efectivo = Math.floor(Math.random() * 10) + 1;
                if(ataque_efectivo % 2 === 0 && personaje.balas > 0){ // Ataque logrado
                    enemigo.vidas--;
                    personaje.balas--;
                    alert("Ataque efectivo! Te quedan " + personaje.balas + " balas y " + personaje.vidas + " vidas. Al enemigo le quedan " + enemigo.vidas + " vidas.");
                }
                else if(ataque_efectivo % 2 !== 2 && personaje.balas > 0){ // Ataque fallido
                    personaje.vidas--;
                    personaje.balas--;
                    alert("Ataque Fallido! Te quedan " + personaje.balas + " balas y " + personaje.vidas + " vidas. Al enemigo le quedan " + enemigo.vidas + " vidas.");
                }
                else{
                    alert("Ya no tienes balas :c")
                    break;
                }
            }
        }
        else{
            alert("Mataste al enemigo, Yay?");
        }
    }
    alert("has muerto x_x");
}
ataque(personaje, enemigo);