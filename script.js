let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "x";

function makeMove(index) {
    if (board[index] === "") {
        board[index] = currentPlayer;
        document.getElementsByClassName("cell")[index].innerText = currentPlayer;
        document.getElementsByClassName("cell")[index].classList.add(currentPlayer);
        if (checkWinner()) {
            setTimeout(() => {
                alert(currentPlayer + " is the winner!");
                resetGame();
            }, 100);
        } else if (!board.includes("")) {
            setTimeout(() => {
                alert("It's a draw!");
                resetGame();
            }, 100);
        } else {
            currentPlayer = currentPlayer === "x" ? "o" : "x";
        }
    }
}

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let combination of winningCombinations) {
        if (board[combination[0]] && board[combination[0]] === board[combination[1]] && board[combination[1]] === board[combination[2]]) {
            return true;
        }
    }
    return false;
}

function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "x";
    let cells = document.getElementsByClassName("cell");
    for (let cell of cells) {
        cell.innerText = "";
        cell.classList.remove("x", "o");
    }
}
