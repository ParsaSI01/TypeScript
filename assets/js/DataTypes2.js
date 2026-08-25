"use strict";
function sum(n1, n2, isVisible = true, completionMessage = 'Operation Successfully Completed') {
    if (isVisible) {
        console.log(`${completionMessage} \n
            ${n1 + n2}`);
    }
    return `${completionMessage} \n
            ${n1 + n2}`;
}
const num1 = 16;
const num2 = 8;
const showResult = false;
const result = sum(num1, num2, showResult);
console.log(result);
