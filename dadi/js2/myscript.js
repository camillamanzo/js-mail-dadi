/*
* Generare un numero random da 1 a 6, sia per il giocatore o giocatrice sia per il computer. 
* Stabilire il vincitore o la vincitrice, in base a chi fa il punteggio più alto.
* Prima di partire a scrivere codice poniamoci qualche domanda:
* Che ci sia un array da qualche parte?
* Se dobbiamo confrontare qualcosa che "cosa" ci serve? 
*/

let numeroGiocatore = Math.floor( Math.random() * 6) + 1;
let numeroComputer = Math.floor( Math.random() * 6) + 1;

document.getElementById("numero-giocatore").innerHTML = (numeroGiocatore)
document.getElementById("numero-computer").innerHTML = (numeroComputer)


console.log (numeroComputer);
console.log (numeroGiocatore);

if(numeroGiocatore < numeroComputer){
    console.log ("Ha vinto il computer");
    document.getElementById("vincitore").innerHTML = ("Ha vinto il computer.")
}else if(numeroComputer < numeroGiocatore){
    console.log("Ha vinto il giocatore")
    document.getElementById("vincitore").innerHTML = ("Ha vinto il giocatore.")
}else {
    console.log ("pareggio");
    document.getElementById("vincitore").innerHTML = ("Pareggio")
}