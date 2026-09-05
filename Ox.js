const loseSound = new Audio("lose.mp3");

const boxes = [
    document.querySelector(".box1"),
    document.querySelector(".box2"),
    document.querySelector(".box3"),
    document.querySelector(".box4"),
    document.querySelector(".box5"),
    document.querySelector(".box6"),
    document.querySelector(".box7"),
    document.querySelector(".box8"),
    document.querySelector(".box9")
];

let board = ["", "", "", "", "", "", "", "", ""];

let playerSymbol = "X";
let computerSymbol = "O";

let gameOver = false;
let computerThinking = false;


// WINNING COMBINATIONS
const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


// SHOW X OR O
function showSymbol(box, symbol) {

    box.textContent = symbol;

    box.style.fontSize = "80px";
    box.style.textAlign = "center";
    box.style.lineHeight = "150px";

    // X = RED
    if (symbol === "X") {
        box.style.setProperty("color", "red", "important");
    }

    // O = PURPLE
    else if (symbol === "O") {
        box.style.setProperty("color", "purple", "important");
    }
}


// CHECK WINNER
function checkWinner() {

    for (let pattern of winningPatterns) {

        let a = pattern[0];
        let b = pattern[1];
        let c = pattern[2];

        if (
            board[a] !== "" &&
            board[a] === board[b] &&
            board[b] === board[c]
        ) {

            gameOver = true;

            // PLAYER WON
            if (board[a] === playerSymbol) {

                alert("YOU WON! 🎉 You can access your notes now! 📚");

            }

            // COMPUTER WON
            else {

                loseSound.currentTime = 0;
                loseSound.play();

                alert("YOU ARE WEAK 💀");
            }

            return true;
        }
    }


    // DRAW
    if (!board.includes("")) {

        gameOver = true;

        alert("DRAW 💀 Nobody is useful.");

        return true;
    }

    return false;
}


// COMPUTER MOVE
function computerMove() {

    if (gameOver) {
        return;
    }


    // 1️⃣ COMPUTER TRIES TO WIN
    for (let pattern of winningPatterns) {

        let [a, b, c] = pattern;

        let line = [board[a], board[b], board[c]];

        if (
            line.filter(x => x === computerSymbol).length === 2 &&
            line.includes("")
        ) {

            let index = [a, b, c][line.indexOf("")];

            board[index] = computerSymbol;

            showSymbol(boxes[index], computerSymbol);

            computerThinking = false;

            checkWinner();

            return;
        }
    }


    // 2️⃣ COMPUTER BLOCKS PLAYER
    for (let pattern of winningPatterns) {

        let [a, b, c] = pattern;

        let line = [board[a], board[b], board[c]];

        if (
            line.filter(x => x === playerSymbol).length === 2 &&
            line.includes("")
        ) {

            let index = [a, b, c][line.indexOf("")];

            board[index] = computerSymbol;

            showSymbol(boxes[index], computerSymbol);

            computerThinking = false;

            checkWinner();

            return;
        }
    }


    // 3️⃣ PICK RANDOM EMPTY BOX
    let emptyBoxes = [];

    for (let i = 0; i < board.length; i++) {

        if (board[i] === "") {
            emptyBoxes.push(i);
        }
    }


    if (emptyBoxes.length === 0) {

        computerThinking = false;

        return;
    }


    let randomIndex =
        emptyBoxes[Math.floor(Math.random() * emptyBoxes.length)];


    board[randomIndex] = computerSymbol;

    showSymbol(boxes[randomIndex], computerSymbol);

    computerThinking = false;

    checkWinner();
}


// PLAYER MOVE
boxes.forEach((box, index) => {

    box.addEventListener("click", function () {

        // DON'T ALLOW INVALID CLICKS
        if (
            gameOver ||
            computerThinking ||
            board[index] !== ""
        ) {
            return;
        }


        // PLAYER PLAYS X
        board[index] = playerSymbol;

        showSymbol(box, playerSymbol);


        // CHECK IF PLAYER WON
        if (checkWinner()) {
            return;
        }


        // COMPUTER THINKS FOR 1 SECOND
        computerThinking = true;

        setTimeout(function () {

            computerMove();

        }, 1000);

    });

});