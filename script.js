//global variables
let displayValue = "";
let numOne = "";
let numTwo = "";
let operatorValue = "";
let total = "";
let decimalPoint = false;


// input numbers to display
const numbers = document.querySelectorAll(".number");
const display = document.getElementById("display");
const clear = document.getElementById("clear");
const operators = document.querySelectorAll(".operator");
const equals = document.getElementById("equals");
const negative = document.getElementById("negative");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const mult = document.getElementById("mult");
const div = document.getElementById("div");
const decimal = document.getElementById("decimal");

//calculator functions
function addNum (numOne, numTwo){
    total = (Math.round((numOne + numTwo )* 100000)/100000);
    return total;
};
function subtrNum (numOne, numTwo){
    total = (Math.round((numOne - numTwo )* 100000)/100000);
    return total;
};
function multNum (numOne, numTwo){
    total = (Math.round((numOne * numTwo )* 100000)/100000);
    return total;
};
function divNum (numOne, numTwo) {
    total = (Math.round((numOne / numTwo )* 100000)/100000);
    return total; 
};

function operate (){
    numOne=Number(numOne);
    numTwo=Number(numTwo);
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
                numOne = displayValue;
                return(numOne);
        } else if (operatorValue === "-"||operatorValue === "+"||operatorValue === "*"||operatorValue === "/"){
                display.textContent += number.textContent;
                displayValue += number.textContent;
                numTwo = displayValue;
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
        displayValue="";
        display.textContent="";
        } else {
            operate();
            operatorValue = oper.textContent;
            numOne = total;
            display.textContent = "";
            displayValue="";
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

/*
decimal.addEventListener("click", () => {
    if (display.textContent.includes (".")=== false){
        display.textContent +=decimal.textContent;
        decimalPoint = true;
    } else {
        console.log("error");
    }
});
*/

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
        decimalPoint= false;
        plus.style.background = "orange";
        minus.style.background = "orange";
        mult.style.background = "orange";
        div.style.background = "orange";
        equals.style.background = "lightskyblue";
});

function addPress (){
    plus.style.background = "red";
    minus.style.background = "orange";
    mult.style.background = "orange";
    div.style.background = "orange";
    equals.style.background = "lightskyblue";
};

function minusPress (){
    plus.style.background = "orange";
    minus.style.background = "red";
    mult.style.background = "orange";
    div.style.background = "orange";
    equals.style.background = "lightskyblue";
};

function multPress (){
    plus.style.background = "orange";
    minus.style.background = "orange";
    mult.style.background = "red";
    div.style.background = "orange";
    equals.style.background = "lightskyblue";
};

function divPress (){
    plus.style.background = "orange";
    minus.style.background = "orange";
    mult.style.background = "orange";
    div.style.background = "red";
    equals.style.background = "lightskyblue";
};

function equalPress (){
    plus.style.background = "orange";
    minus.style.background = "orange";
    mult.style.background = "orange";
    div.style.background = "orange";
    equals.style.background = "pink";
};