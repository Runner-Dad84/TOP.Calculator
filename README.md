# TOP.Calculator
The Odin Project Calculator
Final project of the introduction lessions. 

Part 1:
Basic calculator function. 
Create the following functions in js:
    ADD
    SUBSTRACT
    MULTIPLY
    DIVIDE

Process

Enter a number

Pick an operator
Enter a second number
Select "equals"


Options Tree
numOne = "", numTwo= "", operatorValue= "", displayValue= "", total= "" - Cleared
numOne = A, numTwo= "", operatorValue= "", displayValue= 'A', total= "" - Enter first #
numOne = A, numTwo= "", operatorValue= O, displayValue=O, total= "" - Enter operator
numOne = A, numTwo= B, operatorValue= O, displayValue= O'B', total= "" - Enter second #
numOne = total(A), numTwo= "", operatorValue= "", displayValue=total(A) total= "" - Equals


numOne = A, numTwo= "", operatorValue= "", displayValue= 'A', total= "" - Enter first #
numOne = A, numTwo= "", operatorValue= O, displayValue=O, total= "" - Enter operator
numOne = A, numTwo= B, operatorValue= O, displayValue='B', total= "" - Enter second #
numOne = total(A), numTwo= "", operatorValue= "", displayValue=total(A) total= "" Second operator


To do list:

Fix delete button on the second number. Currently it deletes the last number for numTwo and the operator.
Decimal Point button.
    Steps:
    Identify the position of the deicimal point.
    Abstract and copy the numbers to the right of the decimal.
    Divide the number by 10 for each number (e.g 566 is 566/1000)
    Add the fractional number to the whole number.