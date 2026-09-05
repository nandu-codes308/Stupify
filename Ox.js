const cells = document.querySelectorAll(".cell");
const message = document.getElementById("message");
const reset = document.getElementById("reset");

let board = ["", "", "", "", "", "", "", ""];
let gameOver = false;

const winningLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

cells.forEach((cell, index) => {

    cell.addEventListener("click", function() {

        // Don't allow moves in an occupied cell
        if (board[index] !== "" || gameOver) {
            return;
        }

        // User = X
        board[index] = "X";
        cell.textContent = "X";

        if (checkWinner("X")) {
            message.textContent = "🎉 You win!";
            gameOver = true;
            return;
        }

        if (isDraw()) {
            message.textContent = "It's a draw!";
            gameOver = true;
            return;
        }

        message.textContent = "🤖 AI is thinking...";

        // Small delay so the AI doesn't feel instant
        setTimeout(aiMove, 400);
    });

});

function aiMove() {

    let bestScore = -Infinity;
    let bestMove;

    for (let i = 0; i < 9; i++) {

        if (board[i] === "") {

            board[i] = "O";

            let score = minimax(board, 0, false);

            board[i] = "";

            if (score > bestScore) {
                bestScore = score;
                bestMove = i;
            }
        }
    }

    board[bestMove] = "O";
    cells[bestMove].textContent = "O";

    if (checkWinner("O")) {
        message.textContent = "🤖 AI wins!";
        gameOver = true;
        return;
    }

    if (isDraw()) {
        message.textContent = "It's a draw!";
        gameOver = true;
        return;
    }

    message.textContent = "Your turn!";
}


// The AI's brain 🧠
function minimax(board, depth, isMaximizing) {

    if (checkWinner("O")) {
        return 10 - depth;
    }

    if (checkWinner("X")) {
        return depth - 10;
    }

    if (isDraw()) {
        return 0;
    }

    if (isMaximizing) {

        let bestScore = -Infinity;

        for (let i = 0; i < 9; i++) {

            if (board[i] === "") {

                board[i] = "O";

                let score = minimax(board, depth + 1, false);

                board[i] = "";

                bestScore = Math.max(bestScore, score);
            }
        }

        return bestScore;

    } else {

        let bestScore = Infinity;

        for (let i = 0; i < 9; i++) {

            if (board[i] === "") {

                board[i] = "X";

                let score = minimax(board, depth + 1, true);

                board[i] = "";

                bestScore = Math.min(bestScore, score);
            }
        }

        return bestScore;
    }
}


function checkWinner(player) {

    for (let line of winningLines) {

        const a = line[0];
        const b = line[1];
        const c = line[2];

        if (
            board[a] === player &&
            board[b] === player &&
            board[c] === player
        ) {
            return true;
        }
    }

    return false;
}


function isDraw() {
    return board.every(cell => cell !== "");
}


// Reset button
reset.addEventListener("click", function() {

    board = ["", "", "", "", "", "", "", ""];
    gameOver = false;

    cells.forEach(cell => {
        cell.textContent = "";
    });

    message.textContent = "Your turn!";

});