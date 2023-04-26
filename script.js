//Functions

function addNum (a, b) {
    return a + b;
}

function subtractNum (a, b) {
    return a - b;
}

function multiplyNum (a, b) {
    return a * b;
}

function divideNum (a, b) {
    return a / b;
}

//input values
let operator;
let numOne;
let numTwo;

function operate(a, b, operator) {
    return operator (a, b);
}