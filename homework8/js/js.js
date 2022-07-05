const square = Array.from(document.querySelectorAll(".square"));
const playerDisplay = document.querySelector(".display-player");
const resetButton = document.querySelector("#reset");
const announcer = document.querySelector(".announcer");

let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;

const PlayerX_Win = "PlayerX_Win";
const PlayerO_Win = "PlayerO_Win";
const draw = "НИЧЬЯ";

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const isValidAction = (square) => {
    if (square.innerText === "X" || square.innerText === "O") {
        return false;
    }
    return true;
};

const updateBoard = (index) => {
    board[index] = currentPlayer;
}

const changePlayer = () => {
    playerDisplay.classList.remove(`player${currentPlayer}`);
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    playerDisplay.innerText = currentPlayer;
    playerDisplay.classList.add(`player${currentPlayer}`);
}

const announce = (type) => {
    switch (type) {
        case PlayerO_Win:
            announcer.innerHTML = "Игрок <span class = 'playerO'>O</span> победил";
            break;
        case PlayerX_Win:
            announcer.innerHTML = "Игрок <span class = 'playerX'>X</span> победил";
            break;
        case draw:
            announcer.innerText = "НИЧЬЯ";
    }
    announcer.classList.remove("hide");
};

function handleResultValidation() {
    let roundWin = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        const a = board[winCondition[0]];
        const b = board[winCondition[1]];
        const c = board[winCondition[2]];
        if (a === "" || b === "" || c === "") {
            continue;
        }
        if (a === b && b === c) {
            roundWin = true;
            break;
        }
    }

    if (roundWin) {
        announce(currentPlayer === "X" ? PlayerX_Win : PlayerO_Win);
        gameActive = false;
        return;
    }

    if (!board.includes("")) announce(draw);
}

const userAction = (square, index) => {
    if (isValidAction(square) && gameActive) {
        square.innerText = currentPlayer;
        square.classList.add(`player${currentPlayer}`);
        updateBoard(index);
        handleResultValidation();
        changePlayer();
    }
};

square.forEach((square, index) => {
    square.addEventListener("click", () => userAction(square, index));
});

const resetBoard = () => {
    board = ["", "", "", "", "", "", "", "", ""];
    gameActive = true;
    announcer.classList.add("hide");

    if (currentPlayer === "O") {
        changePlayer();
    }

    square.forEach(square => {
        square.innerText = "";
        square.classList.remove("playerX");
        square.classList.remove("playerO");
    });
}

resetButton.addEventListener("click", resetBoard);