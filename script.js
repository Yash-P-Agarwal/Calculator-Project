let display = document.getElementById('display');
let currentOperand = '';
let previousOperand = '';
let operation = undefined;


function appendNumber(number) {
    if (number === '.' && currentOperand.includes('.')) return;
    currentOperand = currentOperand.toString() + number.toString();
    updateDisplay();
}


function updateDisplay() {
    display.innerText = previousOperand + (operation ? ' ' + operation + ' ' : '') + currentOperand;
}


function chooseOperation(op) {
    if (currentOperand === '') return;
    if (previousOperand !== '') {
        calculate();
    }
    operation = op;
    previousOperand = currentOperand;
    currentOperand = '';
    updateDisplay();
}


function calculate() {
    let computation;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operation) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '*':
            computation = prev * current;
            break;
        case '/':
            computation = prev / current;
            break;
        default:
            return;
    }
    currentOperand = computation;
    operation = undefined;
    previousOperand = '';
    updateDisplay();
}


function resetCalc() {
    currentOperand = '';
    previousOperand = '';
    operation = undefined;
    updateDisplay();
}


function deleteLast() {
    currentOperand = currentOperand.toString().slice(0, -1);
    updateDisplay();
}
