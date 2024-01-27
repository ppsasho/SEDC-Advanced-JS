num1 = 5; 
num2 = 10;
function add () { // Impure function
    return num1 + num2;
}

function add(a, b) {
    return a + b;
}

add(5, 10);

let total = 0;
function addTotal(val) {
    total += val;
    return total;
}

console.log(addTotal(10));
console.log(addTotal(10));

let array = [1, 2, 3, 4];
function addToArray(el) {
    array.push(el);
    return array;
}

function addToArray2(el, array) {
    let copyArray = [...array];
    copyArray.push(el);
    return copyArray;
}

// Impure func

function changeHeading () {
    document.getElementById('example').innerHTML = 'A breath of fresh air!';
}

changeHeading();