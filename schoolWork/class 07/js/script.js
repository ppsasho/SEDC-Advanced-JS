let body = document.getElementsByTagName('body')[0].style.backgroundColor = '#b9bbc9';

const originalArray = [1, 2, 3, 4, 5, 6];
console.log(originalArray);
originalArray.reverse();
console.log(originalArray);

// let newArray = originalArray; Won't make a new copy, but a reference to the original

// To make new copies of an array:
let newArray = originalArray.slice();
let newArray2 = [...originalArray];

console.log(`copy of original array reversed: ` + newArray);
newArray.reverse();

console.log(newArray);
console.log('-------------------------------------------------------');
console.log('Reverse');

// using reverse string

let originalString = 'Hello';

let referenceString = originalString.split('').reverse().join('');

console.log(referenceString);
console.log('-------------------------------------------------------');
console.log('IndexOf');
// indexOf

// Returns the first index at which a given element can be found in the array
// If no element is found, -1 is returned
// Does not modify the original array

let students = [];
const indexOfStudent = students.indexOf('Ile');
console.log(indexOfStudent);
let number = originalArray.indexOf(5);
console.log(number);

// not allowed
// const indexOfUser = users.indexOf(user => user.age === 28);
// console.log(indexOfUser);

// findIndex
// Accepts callback function as an argument
// Returns the infex of the first element in an array that satisfies the function
// if no elements satisfy the function, -1 is returned
// does not modify the original array
let users = {
    name: 'Jane'
}
const indexOfUser = users.findIndex(user => user.name.toLowerCase() === 'jane');
console.log(indexOfUser);