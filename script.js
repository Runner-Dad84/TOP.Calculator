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

//display
let displayValue = "";

const numbers = document.querySelectorAll(".number");

numbers.forEach(number => {
    number.addEventListener("click", () => {
    console.log(number.innerHTML)
    });
});


/*
displayValue = display.textContent + "1";
    return displayValue;
*/

