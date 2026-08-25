"use strict";
// ===========================================
// We Can Change Items In Arrays
// ===========================================
let exampleArray = ['John', 32, true];
exampleArray[0] = 'Doe';
exampleArray[1] = '22';
exampleArray[2] = false;
let exampleTuple;
// exampleTuple=[true, "Doe", 32] // We Can't Do This In TS
/*
exampleTuple[0] = 54;
exampleTuple[1] = false;
exampleTuple[2] = 'John';
 */
exampleTuple = ['Jane', 22, false];
exampleTuple[0] = 'John';
exampleTuple[1] = 35;
exampleTuple[2] = true;
let person3 = {
    name: 'Jane Doe',
    age: 36,
    isMale: false,
    role: [1, "Blogger"]
};
// person3.role.push(true);
person3.role.push("admin");
console.log(person3);
