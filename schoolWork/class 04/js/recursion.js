function sumToNumber (num) {
    if (num === 0) {
        return 0;
    }
    return num + sumToNumber(num - 1);
};

// const sumResult = sumToNumber();
// console.log(sumResult);

function factorial(n) {
    if (n ===0) {
        return 1;
    }
    return n * factorial(n - 1);
}

let result = factorial(500);
console.log(result);
console.clear(); // Comment to see code results in console.