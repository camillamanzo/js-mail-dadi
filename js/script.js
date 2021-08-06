/*
*Chiedi all’utente la sua email, 
* controlla che sia nella lista di chi può accedere (che creerete arbitrariamente voi), 
* e stampa un messaggio appropriato sull’esito del controllo.
*/

let mailIscritti = ["pincopallo@ciao.com", "pincopallino@ciao.com", "pincapalla@ciao.com", "pincapallina@ciao.com", "pincopalluccio@ciao.com"]

console.log(mailIscritti)

let mailUtente = prompt("Inserisca la sua mail")



if (mailIscritti.includes (mailUtente)){
    console.log("Lei è iscritto.")
} else {
    console.log("Mi dispiace, lei non è iscritto.")
}



