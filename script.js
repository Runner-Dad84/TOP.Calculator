//global variables
let operator;
let numOne = "";
let numTwo = "";
let total;
let operatorValue;
let displayValue = "";


function addNum (numOne, numTwo){
    total = numOne + numTwo;
};


/*
function operate(numTwo, numTwo, operator) {
    switch (operator) {
        case operator === addNum():
            addNum();
            
        break;
        case operator === subtrNum:
            function subtrNum (numOne, numTwo){
            total = numOne - numTwo;
            return total;
            };
        break;
        case operator === multNum:
            function multNum (numOne, numTwo){
            total = numOne * numTwo;
            return total;
            };
        case operator === divNum:
            function divNum (numOne, numTwo) {
            total = numOne / numTwo;
            return total;
            }
        break;
    };
    
}
*/

// input numbers to display
const numbers = document.querySelectorAll(".number");
const display = document.getElementById("display");
const clear = document.getElementById("clear");
const operators = document.querySelectorAll(".operator");
const equals = document.getElementById("equals");

//numbers 1 and 2//
numbers.forEach(number => {
    number.addEventListener("click", () => {
        if(operatorValue === "+"){
            display.textContent += number.textContent;
            displayValue += number.textContent;
            numTwo = Number(displayValue);
            return(numTwo);
    } else {
        display.textContent += number.textContent;
            displayValue += number.textContent;
            numOne = Number(displayValue);
            return(numOne);
    }
})});
//Operator click//
operators.forEach(oper => {
    oper.addEventListener("click", () => {
        display.textContent += oper.textContent;
        let tempOper = oper.textContent;
        display.textContent = "";
        displayValue = "";
        switch (true) {
            case tempOper === "+":
                operator = addNum();
                operatorValue = "+"
                break;
            case tempOper === "-":
                operator = subtrNum();
                operatorValue = "-"
                break;
            case tempOper === "*":
                operator = multNum();
                operatorValue = "*"
                break;
            case tempOper === "/":
                operator = divNum();
                operatorValue = "/"
                break;
        };
    });
});
//Equals//
equals.addEventListener("click", () => {
       display.textContent += equals.textContent; 
        console.log(total);
        
});

//Clear All
clear.addEventListener("click", () => {
        display.textContent = "";
        displayValue = "";
        numOne = "";
});

