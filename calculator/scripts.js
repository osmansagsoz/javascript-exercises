let runningTotal = 0;
let buffer = "0";
let previousOperator;
const screen = document.querySelector('.screen');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        buttonClick(e.target.innerText);
        console.log(e.target.innerText);
    })
})

function buttonClick(value) {
    if(isNaN(parseInt(value))) {
        handleSymbol(value);
    } else {
        handleNumber(value);
    }
    screen.innerText = buffer;
}

function handleNumber(value) {
    if(buffer === "0") {
        buffer = value;
    } else {
        buffer += value;
    }
}

function handleSymbol(value) {
    switch (value) {
        case "C":
            buffer = "0";
            runningTotal = 0;
            break;
        case "←":
            if(buffer.length === 1) {
                buffer = "0";
            } else {
                buffer = buffer.substring(0, buffer.length - 1);
            }
            break;
        case "=":
            if(previousOperator === null) {
                return;
            } 
            fourOperations(parseInt(buffer));
            previousOperator = null;
            buffer = runningTotal.toString();
            runningTotal = 0;
            break;
        case "+":
        case "-":
        case "⨉":
        case "÷":
            handleMath(value);
            break;

    }
}

function handleMath(value) {
    if(buffer === "0") {
        return;
    }
    const intBuffer = parseInt(buffer);
    
    if(runningTotal === 0) {
        runningTotal = intBuffer;
    } else {
        fourOperations(intBuffer);
    }
    previousOperator = value;
    buffer = "0";
    console.log(runningTotal);
}

function fourOperations(value) {
    if(previousOperator === "+") {
        runningTotal += value;
    } else if(previousOperator === "-") {
        runningTotal -= value;
    } else if(previousOperator === "⨉") {
        runningTotal *= value;
    } else {
        runningTotal /= value;
    }
    console.log(runningTotal);
}
