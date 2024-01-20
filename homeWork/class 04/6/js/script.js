let array = [-10, 5, 7894, NaN, 'Hello world', Infinity, false, [Object, Object], 25, -Infinity, ['hi', 28, -93, true], { name: 'Bob', age: 23, }, undefined, 14, null, 159, 0, -11];
// Od nizata e trgnat 'name => Hello ${name}' bidejki kodot nejkese da funkcionira

let filterInput = input => {
    if (
    !isNaN(input) &&
    input > 0 &&
    input !== Infinity) {
        return input;
    }
}

let filteredArray = array.filter(filterInput);
console.log(filteredArray);

let mulArray = array => {
    let sum = 1;
    for (let num of array) {
        sum *= num;
    }
    return sum;
}

let productArray = mulArray(filteredArray);
console.log(productArray);
