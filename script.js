//Functions

function addNum (a, b) {
    return a + b;
}

function subtrNum (a, b) {
    return a - b;
}

function multNum (a, b) {
    return a * b;
}

function divNum (a, b) {
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
let displayValue = "";
const numbers = document.querySelectorAll(".number");
const display = document.getElementById("display");
const clear = document.getElementById("clear");
const operators = document.querySelectorAll(".operator");

numbers.forEach(number => {
    number.addEventListener("click", () => {
        display.textContent += number.textContent;
        displayValue += number.textContent;
    });
});

operators.forEach(oper => {
    oper.addEventListener("click", () => {
        display.textContent += oper.textContent;
        let tempOper = oper.textContent;
        switch (true) {
            case tempOper === "+":
                operator = addNum;
                break;
            case tempOper === "-":
                operator = subtrNum;
                break;
            case tempOper === "*":
                operator = multNum;
                break;
            case tempOper === "/":
                operator = divNum;
                break;
        };
        return operator;
    });
});

clear.addEventListener("click", () => {
        display.textContent = "";
        displayValue = 0;
});

