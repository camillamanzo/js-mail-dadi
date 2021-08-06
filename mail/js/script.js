/*
*Chiedi all’utente la sua email, 
* controlla che sia nella lista di chi può accedere (che creerete arbitrariamente voi), 
* e stampa un messaggio appropriato sull’esito del controllo.
*/

let mailIscritti = ["pincopallo@ciao.com", "pincopallino@ciao.com", "pincapalla@ciao.com", "pincapallina@ciao.com", "pincopalluccio@ciao.com"];
let mailUtente = prompt("Inserisca la sua mail");
let trovataMail = false;

document.getElementById("mail-utente").innerHTML = (mailUtente);

for (var i = 0; i<mailIscritti.length; i++){
    console.log(i)
    console.log (mailIscritti[i])

    if (mailUtente == mailIscritti[i]){
        console.log("sei iscritto.")
        trovataMail = true;
        
    }else if (mailUtente != mailIscritti[i]){
        console.log("Non sei iscritto.")
    }
}

console.log (trovataMail)
if(trovataMail == true){
    document.getElementById("iscrizione").innerHTML = ("Sei iscritto!")
} else {
    document.getElementById("iscrizione").innerHTML = ("Non sei iscritto..")
}





