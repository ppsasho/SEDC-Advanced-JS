let displayMessageBtn = document.getElementById('displayMessage');

let getWeatherInfo = () => {
    return 'The weather is cold!';
}

let testFunction = getWeatherInfo();
console.log(testFunction);

// let multiplyNumbers = (x, y) => {
//     return x * y;
// }

let multiplyNumbers = (x, y) => x * y; //Very fancy function (Only use when code in functions is 1 line long).

let getMulResult = multiplyNumbers(4, 5);
console.log(getMulResult);

let displayMessage = (greet, name, timeOfDay) => `${greet} ${name}, it is ${timeOfDay}.`;

let greetPerson = displayMessage('Hello', 'David', 'evening');
console.log(greetPerson);

let greetUser = userName => `Hello ${userName}!`; // ONLY use no brackets around the parameter only if there is a single parameter

let containerMessage = () => {
    let messageContainer = document.getElementById('content');
    messageContainer.innerText = 'This message has been created via arrow function!';
}

let message = () => containerMessage();

// arrow function in event listener
displayMessageBtn.addEventListener('click', message);
console.clear(); // Comment to see code results in console.
