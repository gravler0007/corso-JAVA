/*Definizione degli utenti */

let persona1 = {
    username: "flavio",
    password: 123,
    iban: "abc",
    saldo: 2000
}

let persona2 = {
    username: "giuly",
    password: 124,
    iban: "abd",
    saldo: 3000
}

let persona3 = {
    username: "andra",
    password: 125,
    iban: "abe",
    saldo: 5000
}

/*array di utenti */

let persone = [persona1, persona2, persona3];

/*inizio ciclo */

while (true) {

    let scelta = prompt("1) Accesso\n2) Uscita");
    let i = 0;
    let utente_loggato;
    scelta = Number(scelta);

    /*se scelta === 1 inserisco credenziali, se scelta === 2 esco, altrimenti messaggio di errore */
    if (scelta === 1) {
        let username = prompt("1)Inserire username");

        /* ciclo per vedere se l'username esiste */
        for (i; i < persone.length; i++) {
            if (persone[i].username === username)
                break;
        }

        /*condizione di uscita se l'username non esiste */
        if (i === 3) {
            alert("username non corretto");
            break;
        }

        let password = prompt("2)Inserire password");
        password = Number(password);

        /* ciclo per vedere se la password esiste */
        for (i = 0; i < persone.length; i++) {
            if (persone[i].password === password) {
                /* mi salvo la persona che ha loggato in "utente_loggato" */
                utente_loggato = persone[i];
                break;
            }
        }


        /*condizione di uscita se la password è sbagliata */
        if (i === 3) {
            alert("password non corretta");
            break;
        }

        /*messaggio di benvenuto */

        alert(`Ciao ${username}`);

        /*menù di scelta */
        scelta = prompt("1) Deposita\n2) Preleva\n3) Bonifico");
        scelta = Number(scelta);

        /*switch per verificare cosa è stato scelto */
        switch (scelta) {
            case 1:
                let deposito = prompt("Inserire la somma da depositare");
                deposito = Number(deposito);
                /*aggiornamento del saldo dell'utente loggato */
                utente_loggato.saldo += deposito;
                console.log(utente_loggato);
                break;

            case 2:
                let prelievo = prompt("Inserire la somma da prelevare");
                prelievo = Number(prelievo);

                if (prelievo > utente_loggato.saldo) {
                    alert("non è possibile, sei un poveraccio");
                    break;
                } else {
                    /*aggiornamento del saldo dell'utente loggato */
                    utente_loggato.saldo -= prelievo;
                    console.log(utente_loggato);
                    break;
                }


            case 3:

                iban = prompt("Inserire l'iban del destinatario");

                /*ciclo per scorrere l'array di utenti */
                for (i = 0; i < persone.length; i++) {
                    /*se trovo l'iban */
                    if (iban === persone[i].iban) {
                        /*chiedo la somma da inviare */
                        somma = prompt("Inserire la somma da inviare");
                        somma = Number(somma);
                        /*se la somma che voglio inviare è maggiore di quella che dispongo rompo il ciclo e non invio nulla */
                        if (somma > utente_loggato.saldo) {
                            alert("Saldo insufficiente");
                            break;
                        } else {
                            /*altrimenti aggiorno il mio conto e quello della persona a cui ho fatto il bonifico */
                            utente_loggato.saldo -= somma;
                            persone[i].saldo += somma;
                            alert("Bonifico inviato con successo!");
                            console.log(persona1, persona2, persona3);
                            break;
                        }
                    }
                }

                if (i === 3) {
                    alert("iban non trovato");
                    break;
                }

                break;

            default:
                alert("Inserisci un valore valido la prossima volta!");
                break;
        }

    } else if (scelta === 2) {
        alert("ADDIOS");
        break;
    } else {
        alert("Input non valido (furbacchione), riprova!");
    }


}
