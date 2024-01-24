const numbers = [2, 4, 5, 6, -1, -4, 7, 8, 4, 4];
const users = [{
    id: 1,
    name: 'Tarik',
    age: 40,
    occupation: 'haxr'
},
{
    id: 2,
    name: 'Cindy',
    age: 20,
    occupation: 'HR'
}
];
// Executes a provided function once for each array element
// returns a value for each element in the array and stores it in a new array
// Doesn't change the initial array

console.log('-------------Using map-------------');
const squaredNumbers = numbers.map(num => num ** 2);

console.log(squaredNumbers);

// forEach

// Executes a provided function once for each array element
// Doesn't return a value
// Modifies the array
console.log('-------------Using foreach-------------');
numbers.forEach(num => console.log(`original array: ${num}`));

console.log(" ");

numbers.forEach(num => console.log(`squared result: ${num ** 2}`));

console.log(' ');

users.forEach(user => {
    console.log(`${user.name} - ${user.age} years old, is ${user.occupation}`);
})

console.log('Only selecting object names and using map to put them in a new array:');
const userNames = users.map(user => user.name);
console.log(userNames);

console.log(' ');
console.log('--------------------------------------------------------------------------------------------------------');
console.log('Filter function');

console.log(numbers);
let filteredArray = numbers.filter(num => num > 4);
console.log('all numbers larger than 4: ' + filteredArray);
console.log(' ');
console.log(users);
const olderUsers = users.filter(user => user.age > 20);
console.log(olderUsers);

// Reduce function
console.log('--------------------------------------------------------------------------------------------------------');
console.log('Reduce function');
// Executes a provided reducer function once for each array element and the result of the calculation on the previous element is passed to the next element

const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

const mulResult = numbers.reduce((acc, curr) => acc * curr); // Doesn't need an initial value because js recognizes the operator used and changes the initial value
console.log(`multiplied result: ${mulResult}`);

const averageAge = users.reduce((acc, user) => acc + user.age, 0) /users.length;
console.log(`Avarage age: ${averageAge}`);

const SumOfPositiveNums = numbers.filter(num => num > 0).reduce((acc, curr) => acc + curr);
console.log(`the sum: ${SumOfPositiveNums}`);
console.log('--------------------------------------------------------------------------------------------------------');
console.log('sort function');

let numbersToSort = [4, 5, 10, 50, 1, 20];

numbersToSort.sort((a, b) => a - b);
console.log(numbersToSort);
numbersToSort.sort((a, b) => b - a);
console.log(numbersToSort);

const students = ['Sasho', 'Boris', 'Boris', 'Slavko', 'Sirma', 'Marija'];
students.sort((a, b) => a.localeCompare(b, 'en'));
console.log(students);

if(students.includes(
    'Martin' ||
    'Slavko')) {
    console.log('Student found!');
} else {
    console.log('No student found!');
}

const student = students.find(user => user === 'Slavko');
console.log(student);

