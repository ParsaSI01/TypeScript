"use strict";
function add2(n1, n2) {
    return n1 + n2;
}
function printResult2(num) {
    console.log('Result is: ' + num);
}
printResult2(add2(5, 12));
let combinedValues;
combinedValues = add2;
// combinedValues = printResult2;
/*

let combinedValues: (n1: number, n2: number) => void

combinedValues = printResult2;

*/
// combinedValues = 5;
console.log(combinedValues(8, 8));
