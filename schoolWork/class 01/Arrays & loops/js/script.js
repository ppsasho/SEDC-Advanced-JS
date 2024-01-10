console.log(
  "=========================================== Arrays ==========================================="
);

// let array = [true, '', 234, NaN] BAD example

// getting element from array
let array1 = [1, 2, 3, 4, 5, 6];
console.log(array1);
// console.log(array1[2]);
// console.log(array1[array1.length - 1]);

// Array built in methods

// push(item(s))
// array1.push(7, 8, 9);
// console.log(array1);

// pop()
// let lastitem = array1.pop();
// console.log(lastitem);

// shift()
// niceItem = array1.shift();
// console.log(niceItem);
// unshift(item)
// let item = array1.unshift();
// console.log(item);

//splice()
array1.splice(1, 3, 1000000, 1000, 100); // Removes elements with index 1 - 3 and replaces them with the elements after those 2 parameters
console.log(array1);

// =========== Storing complex data types in arrays ===========

let objectsArray = [
  {
    name: "Sasho",
    lastName: "Popovski",
  },
];

// console.log(objectsArray[0].name + " " + objectsArray[0].lastName);

// Ex. Storing functions (not so common)

// function add(num1, num2) {
//   let result = num1 + num2;
//   return result;
// }

// console.log(add(5, 6));

// =========== Loops ===========
console.log(
  "=========================================== Loops ==========================================="
);

// =========== While ===========
let testArray1 = [2, 4, 6, 8, 4, 6];
let counter = 0;

// while (counter < testArray1.length) {
//   console.log(testArray1[counter]);
//   counter++;
// }
// =========== Do while ===========
// do {
//   input = prompt("Enter name");
// } while (input === "" || input === null || input === undefined);

// =========== For ===========

let students = ["Sirma", "Slavko", "Boris", "Sasho", "Vladimir", "Marija"];

for (let i = 0; i < students.length; i++) {
  console.log(`Hi ${students[i]}`);
}

// =========== For of ===========

for (let student of students) {
  console.log(`Student #${students.indexOf(student) + 1}. ${student}`);
}
