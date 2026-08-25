function sum(
    n1: number,
    n2: number,
    isVisible: boolean = true,
    completionMessage: string = 'Operation Successfully Completed'
): string {
    if (isVisible) {
        console.log(`${completionMessage} \n
            ${n1 + n2}`);
    }

    return `${completionMessage} \n
            ${n1 + n2}`;
}

const num1: number = 16;
const num2: number = 8;
const showResult: boolean = false;

const result = sum(num1, num2, showResult);

console.log(result);
