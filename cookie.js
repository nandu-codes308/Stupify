const tips = [
    "Open your textbook. Stare at it. Congratulations, you studied.",
    "If the chapter looks difficult, close the book.",
    "Study for 2 minutes. Take a 30 minute break. Perfect balance.",
    "Highlight everything. Now everything is important.",
    "Put your textbook under your pillow. Knowledge acquired.",
    "Read the same sentence five times. Surely it worked.",
    "Write the date at the top of the page. Very productive.",
    "If you don't understand the topic, simply understand something else."
];

const cookie = document.querySelector(".cookie");
const button = document.querySelector(".cookiebutton");

const message = document.createElement("p");

message.style.color = "azure";
message.style.textAlign = "center";
message.style.fontSize = "20px";
message.style.position = "relative";
message.style.top = "-300px";

cookie.after(message);

function giveTip() {
    const randomIndex = Math.floor(Math.random() * tips.length);
    message.textContent = tips[randomIndex];
}

cookie.addEventListener("click", giveTip);
button.addEventListener("click", giveTip);