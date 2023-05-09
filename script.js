//global variables
let displayValue = "";
let numOne = "";
let numTwo = "";
let operatorValue = "";
let total = "";


// input numbers to display
const numbers = document.querySelectorAll(".number");
const display = document.getElementById("display");
const clear = document.getElementById("clear");
const operators = document.querySelectorAll(".operator");
const equals = document.getElementById("equals");
const negative = document.getElementById("negative");

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

function operate (){
    if (operatorValue === "+"){
        addNum(numOne, numTwo)
    } else if (operatorValue === "-") {
        subtrNum(numOne, numTwo)
    } else if (operatorValue === "*") {
        multNum(numOne, numTwo)
    } else {if (numTwo === 0) {
        return display.textContent = "Error"} else {
        divNum(numOne, numTwo)}
        };
    display.textContent = total; 
}

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
                display.textContent = number.textContent;
                displayValue = number.textContent;
                numTwo = Number(displayValue);
                return(numTwo);
            }
        } 
    )
});

//Operator click
operators.forEach(oper => {
    oper.addEventListener("click", () => {
        if (operatorValue === ""){
        display.textContent = oper.textContent;
        operatorValue = oper.textContent;
        displayValue = oper.textContent;
        } else {
            operate();
            operatorValue = oper.textContent;
            numOne=total;
            displayValue=total;
            numTwo="";
            total="";
        };
    });
});

negative.addEventListener("click", () => {
    display.textContent *= (-1);
    displayValue *= (-1);
if (operatorValue === ""){
    return numOne*= (-1);} else {
        return numTwo*= (-1)
    }
});

//Equals
equals.addEventListener("click", () => {
        operate();
        numOne = total;
        displayValue = numOne;
        numTwo ="";
        total="";
        operatorValue="";
    }
);

//Clear All
clear.addEventListener("click", () => {
        display.textContent = "";
        displayValue = "";
        numOne = "";
        numTwo = "";
        total = "";
        operatorValue = "";
});

