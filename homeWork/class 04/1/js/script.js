let numberLength = number => `${number.toString().length} digits`;

let numberParity = number => {
    if (number % 2 === 0) {
        return 'Even';
    } else {
        return 'Odd';
    }
}

let numberType = number => {
    if (number > 0) {
        return 'Positive';
    }
    return 'Negative';
}

let getNumberStats = number => `${numberLength(number)}, ${numberParity(number)}, ${numberType(number)}`;


console.log(numberLength(15));
console.log(numberParity(3));
console.log(numberType(2));
console.log(' ');
console.log(10);
console.log(getNumberStats(10));