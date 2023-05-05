//global variables
let operator = "";
let numOne = "";
let numTwo = "";
let total = "";
let operatorValue = "";
let displayValue = "";

//calculator functions
function addNum (numOne, numTwo){
    total = numOne + numTwo;
    return total;
};
function subtrNum (numOne, numTwo){
    total = numOne - numTwo;
    return total;
};
function multNum (numOne, numTwo){
    total = numOne * numTwo;
    return total;
};
function divNum (numOne, numTwo) {
    total = numOne / numTwo;
    return total;
};

// input numbers to display
const numbers = document.querySelectorAll(".number");
const display = document.getElementById("display");
const clear = document.getElementById("clear");
const operators = document.querySelectorAll(".operator");
const equals = document.getElementById("equals");

//numbers 1 and 2//
numbers.forEach(number => {
    number.addEventListener("click", () => {
        if (operatorValue === ""){
            display.textContent += number.textContent;
                displayValue += number.textContent;
                numOne = Number(displayValue);
                return(numOne);
        } else if(
            operatorValue === "-"||operatorValue === "+"||operatorValue === "*"||operatorValue === "/"){
                display.textContent += number.textContent;
                displayValue += number.textContent;
                numTwo = Number(displayValue);
                return(numTwo);
            }
        } 
    )
});

//Operator click
operators.forEach(oper => {
    oper.addEventListener("click", () => {
        display.textContent += oper.textContent;
        operatorValue = oper.textContent;
        display.textContent = "";
        displayValue = "";
    });
});

//Equals
equals.addEventListener("click", () => {
        if (operatorValue === "+"){
            addNum(numOne, numTwo)
        } else if (operatorValue === "-") {
            subtrNum(numOne, numTwo)
        } else if (operatorValue === "*") {
            multNum(numOne, numTwo)
        } else {divNum(numOne, numTwo)}

        display.textContent = total; 
        numOne = total;
        numTwo ="";
    }
);

//Clear All
clear.addEventListener("click", () => {
        display.textContent = "";
        displayValue = "";
        numOne = "";
        numTwo = "";
        total = "";
        operator = "";
        operatorValue = "";
});

