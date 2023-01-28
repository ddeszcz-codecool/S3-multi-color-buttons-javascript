let button = document.getElementById("change-color");
let defaultBackgroundColorButton = button.style.backgroundColor;
let redBackgroundColorButton = "red";


button.addEventListener("click", function () {
    if(button.style.backgroundColor===redBackgroundColorButton){
        button.style.backgroundColor = defaultBackgroundColorButton
    }else {
        button.style.backgroundColor = redBackgroundColorButton
    }

});




