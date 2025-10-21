function playInstrumentSound(letter){
    switch(letter){
        case "a":
            (new Audio("./sounds/tom-1.mp3")).play();
            break;
        case "s":
            (new Audio("./sounds/tom-2.mp3")).play();
            break;
        case "d":
            (new Audio("./sounds/tom-3.mp3")).play();
            break;
        case "f":
            (new Audio("./sounds/tom-4.mp3")).play();
            break;
        case "j":
            (new Audio("./sounds/kick-bass.mp3")).play();
            break;
        case "k":
            (new Audio("./sounds/snare.mp3")).play();
            break;
        case "l":
            (new Audio("./sounds/crash.mp3")).play();
            break;
    }
}

function playButtonAnimation(letter){
    var classStr = "." + letter;
    document.querySelector(classStr).classList.add("pressed");
    setTimeout(function (cStr) {
        document.querySelector(cStr).classList.remove("pressed");
    }, 100, classStr);
}

function drumButtonCallback(letter){
    playInstrumentSound(letter);
    playButtonAnimation(letter);
}

// Main

var btnList = document.querySelectorAll(".drum");
for (var i = 0; i < btnList.length; i++){
    btnList[i].addEventListener("click", function (){
            drumButtonCallback(this.textContent.toLowerCase());
        });
}

document.addEventListener("keydown", function (event) {
    drumButtonCallback(event.key);
})