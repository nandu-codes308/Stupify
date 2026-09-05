const tips = [
    "If you have an assignment due at 11:59pm, best to start it by 11:58!!!",
    "Remember to always take 1hour breaks after each 5min study sesh!!!",
    "Smart harder, not work.",
    "You don't have to do it today. Give it time, even its due in 4 hours.",
    "The Pomegranate method is a great way to learn; you open the fruit, ready to devour it wholly, and then abandon it for the next few days!!!",
    "Live, laugh, load your favourite game instead.",
    "Always try to apply the first law of motion to your study techniques.",
    "Just study bruh, it ain't that hard 🙄🙄🙄",
    "Have faith in God, only he can save you.",
    "Eat, Sleep, Procrastinate.",
    "During exam, act like AI: drink lots of water and copy from actually talented people.",
    "At this point just give up bro 🥀🥀🥀",
    "Eat your notes and absorb all the info.",
    "Learning how to read and write is a good place to start 🤓👆",
    "Have a 5Star, do nothing (not sponsored).",
    "Reject education, embrace the Ooga Booga.",
    "Assert dominance over the tough topics by ignoring them.",
    "Treat your notes like they are drugs. Pile them up and set them on fire like the police does.",
    "Don't worry about failure, you could always change your identity and emigrate to a new country.",
    "Refresh your topics periodically, preferably once in every blue moon.",
    "Open your textbook. Stare at it. Congratulations, you have studied 🥳🎉🎉🎉",
    "Studying is important... procrastination is art."
];

const cookie = document.getElementById("cookie");
const tip = document.getElementById("tip");
const tipButton = document.getElementById("tipButton");

function giveTip() {
    const randomIndex = Math.floor(Math.random() * tips.length);
    tip.textContent = tips[randomIndex];
}

cookie.addEventListener("click", giveTip);

tipButton.addEventListener("click", giveTip);