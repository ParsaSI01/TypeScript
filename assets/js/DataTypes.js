"use strict";
// ========================================================================================
// DataTypes
// Simple JS Variable Identifiers
// Warning: You Have To Declare The Value Of Const Once You Declare The Identifier
// ========================================================================================
var phoneNumber1;
let phoneNumber2;
const phoneNumber3 = 0;
// =========================================
// We Can Use DataTypes In TypeScript
// Simple DataTypes In TypeScript:
// =========================================
let id;
id = 64;
let fullName;
fullName = 'John Doe';
let male;
male = true;
// ===========================================
// We Can Use DataTypes In Functions
// ===========================================
function sumNumber(n1, n2) {
    return n1 + n2;
}
const number1 = 5;
const number2 = 2.8; // This Code Works Without Assigning number DataType To The Variables
console.log(`Using sumNumber:
    ${sumNumber(number1, number2)}`);
// ===========================================
// We Can Use Strings Too
// ===========================================
function sumString(n1, n2) {
    return n1 + n2;
}
const number3 = '5';
const number4 = '2.8';
console.log(`Using sumString:
    ${sumString(number3, number4)}`);
