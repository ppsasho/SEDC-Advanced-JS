console.log("================== Functions ==================");
// reusable code
// Two step process

// 1. declare function
// 2. execute function

function testFunction() {
  //   console.log("calling function");
  return "test 123";
}

testFunction(); // Console log doesn't get any new data

let sayHello = testFunction();
console.log(sayHello); //You get a response in console

// ========== Function with parameters, without return ==========

function greet(firstName, lastName) {
  console.log(`Hello ${firstName} ${lastName}!`);
}

greet("Sasho", "Popovski");

// ========== Function without parameters, but with return ==========

function getPi() {
  console.log("Beep boop getting pi:");
  return Math.PI;
}

let pi = getPi();
console.log(pi);

// ========== Function with parameters and return ==========

function mul(num1, num2) {
  return num1 * num2;
}

let multiply = mul(5, 74);
console.log(multiply);

// ========== Functions with more complex parameters ==========

// Example: array of numbers

function getAverage(numArray) {
  let sum = 0;
  for (let i = 0; i < numArray.length; i++) {
    sum += numArray[i];
  }
  return sum / numArray.length;
}

numbers = [4, 6, 2, 6, 7];
let avarageResult = getAverage(numbers);
console.log(avarageResult);

// Example: array of objects

let students = [
  {
    id: 1,
    firstName: "John",
    lastName: "Johnsky",
  },

  {
    id: 2,
    firstName: "Chad",
    lastName: "Chadsky",
  },

  {
    id: 3,
    firstName: "Jeb",
    lastName: "Jebsky",
  },
];

function printStudents(students) {
  for (let student of students) {
    console.log(`#${student.id}. ${student.firstName} ${student.lastName}`);
  }
}

printStudents(students);

// ========== Anonymous functions ==========

let button = document.getElementById("btn");
button.addEventListener("click", function () {
  console.log("u clicked me..");
});

// ========== Return KEYWORD ==========

// use cases:

// 1) Return a value
// 2) End function execution

function sum1(num1, num2) {
  if (!Number.isFinite(num1) || !Number.isFinite(num2)) {
    console.log("invalid!");
  } else {
    console.log("valid!");
    return num1 + num2;
  }
}
let sumNumbers = sum1(20, 30);
console.log(sumNumbers);

//  When to put something in a function:

// The sense of what to put into a function improves with experience and lots of coding

// However, here are some of the cases when you should use a function:

// 1) Code duplication => if you use some code more than once, add it to a function.
// 2) Modularity => breaking down your code into smaller, managable blocks of code.
