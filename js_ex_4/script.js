let box = document.getElementById("box");
let buttonRed = document.getElementById("buttonRed");
let buttonYellow = document.getElementById("buttonYellow");
let buttonGreen = document.getElementById("buttonGreen");


buttonRed.addEventListener("click", (event) => {
    
    console.log("click");
    box.style.backgroundColor = "red";
})

buttonYellow.addEventListener("click", function () {
    console.log("click");
    box.style.backgroundColor = "yellow";
})

buttonGreen.addEventListener("click", function () {
    console.log("click");
    box.style.backgroundColor = "green";
})


/*---------------------button Red------------------------------- */
buttonRed.addEventListener("mouseover", function () {
    console.log("over");
    buttonRed.style.backgroundColor = "rgb(" + 220 + "," + 10 + "," + 10 + ")";
    buttonRed.innerText = "RED";
    buttonRed.style.color = "white";
})

buttonRed.addEventListener("mouseout", function () {
    console.log("out");
    buttonRed.style.backgroundColor = "red";
    buttonRed.innerText = "red";
    buttonRed.style.color = "black";
})

/*------------------------button Yellow---------------------------- */

buttonYellow.addEventListener("mouseover", function () {
    console.log("over");
    buttonYellow.style.backgroundColor = "rgb("+210+","+ 210+","+14 +")";
    buttonYellow.innerText = "YELLOW";
    buttonYellow.style.color = "white";
})

buttonYellow.addEventListener("mouseout", function () {
    console.log("out");
    buttonYellow.style.backgroundColor = "yellow";
    buttonYellow.innerText = "yellow";
    buttonYellow.style.color = "black";
})

/*-----------------------button Green----------------------------- */


buttonGreen.addEventListener("mouseover", function () {
    console.log("over");
    buttonGreen.style.backgroundColor = "rgb(" + 7 + ", " + 115 + ", " + 7 + ")";
    buttonGreen.innerText = "GREEN";
    buttonGreen.style.color = "white";
})

buttonGreen.addEventListener("mouseout", function () {
    console.log("out");
    buttonGreen.style.backgroundColor = "green";
    buttonGreen.innerText = "green";
    buttonGreen.style.color = "black";
})