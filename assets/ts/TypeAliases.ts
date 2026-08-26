type Combinable = number | string;
type ResultType = 'as-number' | 'as-text';

function combine3(
    input1: Combinable,
    input2: Combinable,
    resultType: ResultType
) {
    let result;

    if (typeof input1 == 'number' && typeof input2 == 'number') {
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }

    if (resultType == 'as-number') {
        return +result;
    } else {
        return result.toString();
    }
}

const combinedAges4 = combine3(30, 26, 'as-number');
const combinedAges5 = combine3('30', '26', 'as-text');
const combinedNames3 = combine3('John ', 'Doe', 'as-text');

console.log(combinedAges4);
console.log(combinedAges5);
console.log(combinedNames3);
