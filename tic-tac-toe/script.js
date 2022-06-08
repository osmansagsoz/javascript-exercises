const xClass = 'x';
const oClass = 'o';
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
const boxElements = document.querySelectorAll('.box');
const winningMessageElement = document.getElementById('winningMessage');
const messageText = document.querySelector('.message-text');
const restartButton = document.querySelector('.restart');
const board = document.getElementById('board');
let circleTurn;

startGame();

restartButton.addEventListener('click', startGame);

function startGame() {
    circleTurn = false;
    boxElements.forEach(box => {
        box.classList.remove(xClass);
        box.classList.remove(oClass);
        box.removeEventListener('click', handleClick);
        box.addEventListener('click', handleClick, { once : true });
    });
    setBoardHoverClass();
    winningMessageElement.classList.remove('show');
}

function handleClick(e) {
    const box = e.target;
    const currentClass = circleTurn ? oClass : xClass;
    placeMark(box, currentClass);
    if(checkWin(currentClass)) {
        endGame(false);
    } else if(isDraw()) {
        endGame(true);
    } else {
        swapTurns()
        setBoardHoverClass() 
    }
}

function placeMark(box, currentClass) {
    box.classList.add(currentClass);
}

function swapTurns() {
    circleTurn = !circleTurn;
}

function setBoardHoverClass() {
    board.classList.remove(xClass);
    board.classList.remove(oClass);
    if(circleTurn) {
        board.classList.add(oClass);
    } else {
        board.classList.add(xClass);
    }
}

function checkWin(currentClass) {
    return winningCombinations.some(combination => {
        return combination.every(index => {
            return boxElements[index].classList.contains(currentClass)
        })
    })
}

function endGame(draw) {
    if(draw) {
        messageText.innerText = 'Draw!';
    } else {
        messageText.innerText = `${circleTurn ? "O's" : "X's"} Wins!`;
    }
    winningMessageElement.classList.add('show');
}

function isDraw() {
    return [...boxElements].every(box => {
        return box.classList.contains(xClass) || box.classList.contains(oClass)
    })
}

const header = document.querySelector('.header');
const letters = [...header.innerText];
const bigHeader = letters.map(letter => `<span>${letter}</span>`).join('');
header.innerHTML = bigHeader;

const colors = ['#DC180A', '#FFB901', '#53A63C', '#F2BDBD', '#ffffff'];
const randomColor = colors[Math.floor(Math.random() * colors.length)];

const spans = document.querySelectorAll('span');
spans.forEach((span, index) => {
    const colors = ['#DC180A', '#FFB901', '#53A63C', '#F2BDBD', '#ffffff'];
    // const randomColor = colors[Math.floor(Math.random() * colors.length)];
   const randomColor = colors[index % colors.length]
    span.style.setProperty('--random', randomColor);
})