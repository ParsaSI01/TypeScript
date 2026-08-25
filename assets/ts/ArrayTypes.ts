let programmer: {
    name: string;
    age: number;
    isMale: boolean;
    hobbies: any[];
};

programmer = {
    name: 'John Doe',
    age: 28,
    isMale: true,
    hobbies: ['Learning TS', 'Building An App', 'Learning C++'],
};

let array1: any[];

array1 = ['test', 64, true, null, undefined, NaN];

for (const hobby of programmer.hobbies) {
    console.log(hobby);
}

console.log(programmer);

console.log(array1);