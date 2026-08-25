"use strict";
let programmer;
programmer = {
    name: 'John Doe',
    age: 28,
    isMale: true,
    hobbies: ['Learning TS', 'Building An App', 'Learning C++'],
};
let array1;
array1 = ['test', 64, true, null, undefined, NaN];
for (const hobby of programmer.hobbies) {
    console.log(hobby);
}
console.log(programmer);
console.log(array1);