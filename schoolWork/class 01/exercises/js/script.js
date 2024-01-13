function generateArray() {
  let array = [];
  for (let i = 1; i < 1000; i++) {
    if (i % 3 === 0) {
      array.push(i);
    }
  }
  return array;
}
let result1 = generateArray();
console.log(result1);

function generateArray2() {
  let array = [];
  for (let i = 0; i < 1000; i++) {
    if (i % 4 === 0 && i % 2 === 0) {
      array.push(i);
    }
  }
  return array;
}
let result2 = generateArray2();
console.log(result2);

function generateArray3() {
  let array = [];
  for (let i = 1; i < 1000; i++) {
    if (i % 10 === 1) {
      array.push(i);
    }
  }
  return array;
}

let result3 = generateArray3();
console.log(result3);

// let exampleArray = [1, "James", 5, ]
// function cleanArray(array) {
//     for ()
// }
let test = [
  true,
  false,
  12,
  13,
  44,
  2345,
  "Bob",
  "Jill",
  false,
  undefined,
  1000,
  null,
  "Jack",
  "",
  "",
  99,
  "Greg",
  undefined,
  NaN,
  1,
  22,
];
console.clear();
console.log("");
console.log("The whole array");
console.log(test);

// We only need strings
function cleanArray(inputArray) {
  let newArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    if (typeof inputArray[i] === "string") {
      newArray.push(inputArray[i]);
    }
  }
  return newArray;
}
console.log("");
console.log("Getting all the strings");
let getStringArray = cleanArray(test);
console.log(getStringArray);

// We only need numbers
function cleanArray2(inputArray) {
  let newArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    if (isNaN(inputArray[i])) {
      continue;
    }
    if (typeof inputArray[i] === "number") {
      newArray.push(inputArray[i]);
    }
  }
  return newArray;
}
console.log("");
console.log("Getting all the numbers");
let getNumberArray = cleanArray2(test);
console.log(getNumberArray);

// we don't need undefined, null, NaN, false and ''
function cleanArray3(inputArray) {
  let newArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    {
      // With advice
      if (inputArray[i]) {
        newArray.push(inputArray[i]);
      }
      continue;
      // My complicated answer

      // if (
      //   inputArray[i] ||
      //   typeof inputArray[i] === "number" ||
      //   typeof inputArray[i] === "string"
      // ) {
      //   if (inputArray[i] === "" || isNaN(inputArray[i])) {
      //     if (inputArray[i]) {
      //     } else {
      //       continue;
      //     }
      //   }
    }
  }
  return newArray;
}
console.log("");
console.log("clean falsy values");
let getThirdArray = cleanArray3(test);
console.log(getThirdArray);

// let result = test.filter(Boolean); BONUS
// console.log(result);
