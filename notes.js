const notes = document.querySelector(".mainnotes");

const sound1 = new Audio("Fahhh.mp3");
const sound2 = new Audio("metal sound.mp3");
const sound3 = new Audio("yowai-mo.mp3");
const sound4 = new Audio("run.mp3");
const sound5 = new Audio("nani.mp3");
const sound6 = new Audio("domainexpansion.mp3");

let clickCount = 0;

notes.addEventListener("mousedown", function(event) {

    event.preventDefault();

    clickCount++;

    if (clickCount === 1) {
        sound1.currentTime = 0;
        sound1.play();
    }
    else if (clickCount === 2) {
        sound2.currentTime = 0;
        sound2.play();
    }
    else if (clickCount === 3) {
        sound3.currentTime = 0;
        sound3.play();
    }
    else if (clickCount === 4) {
        sound4.currentTime = 0;
        sound4.play();
    }
    else if (clickCount === 5) {
        sound5.currentTime = 0;
        sound5.play();
    }
    else if (clickCount === 6) {
        sound6.currentTime = 0;
        sound6.play();
    }

    const maxX = window.innerWidth - notes.offsetWidth;
    const maxY = window.innerHeight - notes.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    notes.style.position = "fixed";
    notes.style.left = randomX + "px";
    notes.style.top = randomY + "px";

});