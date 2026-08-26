function combine2(
    input1: number | string,
    input2: number | string,
    resultType: 'as-number' | 'as-text'
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

const combinedAges2 = combine2(30, 26, 'as-number');
const combinedAges3 = combine2('30', '26', 'as-text');
const combinedNames2 = combine2('John ', 'Doe', 'as-text');

console.log(combinedAges2);
console.log(combinedAges3);
console.log(combinedNames2);
