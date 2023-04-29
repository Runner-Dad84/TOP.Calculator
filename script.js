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

function operate(numOne, numTwo, operator) {
    return operator (a, b);
}

// input numbers to display

const numbers = document.querySelectorAll(".number");
const display = document.getElementById("display");

numbers.forEach(number => {
    number.addEventListener("click", () => {
        display.textContent += number.textContent;
    });
});

