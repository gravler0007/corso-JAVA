let eta = prompt("Qual'è la tua età?");
eta = Number(eta);

let printAge = (age) => {
    
    if (age >= 18) {
        console.log(`Sei maggiorenne, hai ${age} anni, puoi votare!`);
        document.getElementById("esito").innerText = `Sei maggiorenne, hai ${age} anni, puoi votare!`;
    }
    else {
        console.log(`Sei minorenne, hai ${age} anni , non puoi votare!`);
        document.getElementById("esito").innerText = `Sei minorenne, hai ${age} anni , non puoi votare!`;
    }
        
}

printAge(eta);

document.getElementById("myButton").onclick = function () {
    
    let age = document.getElementById("myAge").value;
    printAge(age);

};

