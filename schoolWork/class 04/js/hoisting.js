divideNumbers(10,2);
divideNumbersAnonymous(10,2);

function divideNumbers (dividend, divisor) {
    let result = dividend / divisor;
    console.log(result);
    return result;
}

let divideNumbersAnonymous = (dividend, divisor) => {
    let result = dividend / divisor;
    console.log(result);
    return result;
}