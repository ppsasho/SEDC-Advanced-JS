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
