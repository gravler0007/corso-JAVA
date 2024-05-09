// PUNTATORI
let listaSpesa = document.getElementById("listaSpesa");
let checkboxes = document.querySelectorAll("input[type='checkbox']");
let reset = document.getElementById("reset");
let checkout = document.getElementById("checkout");
let codiceSconto = document.getElementById("codice-sconto");
let prezzoTotale = document.getElementById("prezzoTotale");
let prezzoFinale = document.getElementById("prezzoFinale");
let scontoID = document.getElementById("codiceSconto");
let messaggioID = document.getElementById("messaggio");
let credenzialiID = document.getElementById("utente");

alert("Usa il codice sconto 'GNAM' per uno sconto del 15% sul totale");
const credenziali = prompt("Inserisci il tuo nome e cognome");
credenzialiID.textContent = `Benvenuto ${credenziali}`;

// console.log(checkboxes);

checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("click", function () {
        let messaggio = "Hai selezionato: ";
        let msgPrTotale = "Prezzo totale: ", msgPrzFinale = "Prezzo finale: ", msgSconto ="Codice sconto: ";
        let totale = 4.5;

        checkboxes.forEach(function (checkbox) {
            if (checkbox.checked) {
                messaggio += checkbox.value + ", ";
                totale += Number(checkbox.value);
            } 
        });

        checkout.addEventListener("click", function () {
            
            if (codiceSconto.value === "GNAM") {

                let sconto = totale * 0.15;
                let prezzoScontato = totale - sconto;

                messaggioID.textContent = messaggio.slice(0, -2);
                prezzoTotale.textContent = msgPrTotale + totale;
                scontoID.textContent = msgSconto + "GNAM";
                prezzoFinale.textContent = msgPrzFinale + prezzoScontato;
            } else {
                messaggioID.textContent = messaggio.slice(0, -2);
                prezzoTotale.textContent = msgPrTotale + totale;
                scontoID.textContent = msgSconto + "nessuno sconto";
                prezzoFinale.textContent = msgPrzFinale + totale;
            }

        })

    });
});

reset.addEventListener("click", function () {
    checkboxes.forEach(function (checkbox) {

        checkbox.checked = false;
        prezzoFinale.textContent = " ";
        messaggioID.textContent = " ";
        scontoID.textContent = " ";
        codiceSconto.value = " ";
        prezzoTotale.textContent = " ";
     
    });
});
