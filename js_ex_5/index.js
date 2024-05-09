let listaSpesa = document.getElementById("listaSpesa");
let checkboxes = document.querySelectorAll("input[type='checkbox']");


// check.addEventListener("click", function () {
//     if (check.checked) {
//         console.log("selezionata");
//     } else {
//         console.log("non selezionata");
//     }

//     console.log(check.value);

// })

checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("click", function () {

        checkboxes.forEach(function (checkbox) {
            let parent = checkbox.parentElement;
            if (checkbox.checked) {
                //console.log(checkbox);

                parent.style.listStyleType = "\x27✅";               
            } else {
                parent.style.listStyleType = "\x27❌";
            }
        });

     });
});