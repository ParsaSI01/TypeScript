// ===========================================
// ObjectTypes
// ===========================================

/* let person = {
    name: 'John Doe',
    age: 22,
    isMale: true,
};

console.log(person); */

let person: object;

person = {
    name: 'John Doe',
    age: 22,
    isMale: true,
};

console.log(person);

// console.log(person.name); // We Cant Access The Properties Unless We Declare They're Types

let person2: {
    name: string;
    age: number;
    isMale: boolean;
};

person2 = {
    name: 'Jane Doe',
    age: 20,
    isMale: false,
};

// We Can Also Do This

/* let person2: {
    name: string;
    age: number;
    isMale: boolean;
} = {
    name: 'Jane Doe',
    age: 20,
    isMale: false,
};
 */

console.log(person2);
console.log(person2.name);
console.log(person2.age);
console.log(person2.isMale);
