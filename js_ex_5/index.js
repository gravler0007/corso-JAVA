let check = document.getElementById("myCheckBox");

check.addEventListener("click", function () {
    if (check.checked) {
        console.log("selezionata");
    } else {
        console.log("non selezionata");
    }

    let valore = check.ariaValueMax;
    console.log(valore);
})