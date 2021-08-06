/*
*Chiedi all’utente la sua email, 
* controlla che sia nella lista di chi può accedere (che creerete arbitrariamente voi), 
* e stampa un messaggio appropriato sull’esito del controllo.
*/

let mailIscritti = ["pincopallo@ciao.com", "pincopallino@ciao.com", "pincapalla@ciao.com", "pincapallina@ciao.com", "pincopalluccio@ciao.com"]

let mailUtente = prompt("Inserisca la sua mail")

for (var i = 0; i<mailIscritti.length; i++){
    console.log(i)
    console.log (mailIscritti[i])
    if (mailUtente == mailIscritti[i]){
        console.log("sei iscritto.")
    }
}


/*
* Generare un numero random da 1 a 6, sia per il giocatore o giocatrice sia per il computer. 
* Stabilire il vincitore o la vincitrice, in base a chi fa il punteggio più alto.
* Prima di partire a scrivere codice poniamoci qualche domanda:
* Che ci sia un array da qualche parte?
* Se dobbiamo confrontare qualcosa che "cosa" ci serve? 
*/

let numeroGiocatore = Math.floor( Math.random() * 6) + 1;
let numeroComputer = Math.floor( Math.random() * 6) + 1;

console.log (numeroComputer);
console.log (numeroGiocatore);

if(numeroGiocatore < numeroComputer){
    console.log ("Ha vinto il computer");
}else {
    console.log ("Ha vinto il giocatore");
}



