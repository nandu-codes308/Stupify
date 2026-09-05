// ========================
// RUNAWAY NOTES 😈
// ========================

const notes = document.getElementById("notes");

notes.addEventListener("mousedown", function(event) {

    // Stops the textarea from being clicked
    event.preventDefault();

    // Find the available screen space
    const maxX = window.innerWidth - notes.offsetWidth;
    const maxY = window.innerHeight - notes.offsetHeight;

    // Pick random position
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    // Move the notes box
    notes.style.left = randomX + "px";
    notes.style.top = randomY + "px";

});


// ========================
// 25 MINUTE TIMER ⏱️
// ========================

let time = 25 * 60;
let timerRunning = false;

const timer = document.getElementById("timer");
const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", function() {

    if (timerRunning) {
        return;
    }

    timerRunning = true;

    const countdown = setInterval(function() {

        let minutes = Math.floor(time / 60);
        let seconds = time % 60;

        timer.textContent =
            minutes + ":" + (seconds < 10 ? "0" : "") + seconds;

        time--;

        if (time < 0) {

            clearInterval(countdown);

            timer.textContent = "TIME'S UP!";

            timerRunning = false;

        }

    }, 1000);

});


// ========================
// MUSIC 🎵
// ========================

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", function() {

    if (music.paused) {

        music.play();
        musicBtn.textContent = "🔇 Stop Music";

    } else {

        music.pause();
        musicBtn.textContent = "🎵 Peaceful Music";

    }

});