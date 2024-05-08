/*Scrivi un programma che chieda all'utente di inserire il punteggio di un esame. 
Se il punteggio è maggiore o uguale a 90, stampa "A". 
Se è compreso tra 80 e 89, stampa "B". 
Se è compreso tra 70 e 79, stampa "C". 
Se è compreso tra 60 e 69, stampa "D". 
Altrimenti, stampa "F" */



let punteggio = prompt("Inserire un punteggio!");

age = Number(punteggio);

switch (true) {
    case punteggio >= 90:
        console.log("A");
        break;
    
    case (punteggio >= 80 && punteggio < 90) :
        console.log("B");
        break;
    
    case (punteggio >= 70 && punteggio < 79):
        console.log("C");
        break;
    
    case (punteggio >= 60 && punteggio < 69):
        console.log("D");
        break;
    
    case (punteggio >= 50 && punteggio < 59):
        console.log("E");
        break;
    
    case (punteggio < 50):
        console.log("F");
        break;
    
    default:
        console.log("Valore non valido");
}