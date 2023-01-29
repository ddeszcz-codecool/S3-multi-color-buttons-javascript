let button = document.getElementById("count");
let numberOfClicks = 0;

button.addEventListener("click", function () {
    numberOfClicks++
    button.innerHTML=numberOfClicks.toString();


});



