// import { helloGreeting, goodbyeGreeting } from "./message.js";
let colours = require("colors");

// helloGreeting("Sasho");
// goodbyeGreeting("Sasho");
// console.log("hello bro".blue);

let displayNum = (num) => {
  num % 2 === 0
    ? console.log(`The number ${num} is even`.green)
    : console.log(`The number is ${num} odd`.red);
};

let randomNum = Math.floor(Math.random() * 100);
console.log(displayNum(randomNum));
