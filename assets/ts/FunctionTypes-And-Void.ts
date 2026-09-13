function add1(n1: number, n2: number):number {
    return n1 + n2;
    // return n1.toString() + n2.toString();
};


function printResult(num:number): void /* | undefined  */{
    console.log("Result is: " + num);
    // return num;      // We Cant Use return While The Type Is void.
}



printResult(add1(5, 12))

// console.log(printResult(add1(5, 12)));       // undefined
