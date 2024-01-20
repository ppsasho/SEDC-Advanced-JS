// Exercise 3

let array = [3, 2, 5, 7, 8, 12];

let pwrArray = (arr) => {
    resultArray = [];
    for (let el of arr) {
        resultArray.push(el ** 2);
    }
    return resultArray;
}

let getPowerArray = pwrArray(array);
console.log(`Exercise 3: ${getPowerArray}`);

// Exercise 4

let btn = document.getElementById('btn');
let content = document.getElementById('content');
let input = document.getElementById('factorial');

let factorial = n => {
    if (n === 0) {
        return 1;
    }
    console.log(n);
    return n * factorial(n - 1);
}

let displayHTML = () => {
    let num = Number(input.value);
    if (isNaN(num) || num < 0) {
        alert('invalid input!');
        input.value = ''
    } else {
        content.innerText = `Factorial = ${factorial(num)}`;
        input.value = ''
    }
}

btn.addEventListener('click', displayHTML)