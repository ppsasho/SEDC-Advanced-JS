let colorBtn = document.getElementById('colorButton');
let logMessageBtn = document.getElementById('loggingMessageButton');

colorBtn.style.border = '3px solid black';
colorBtn.style.borderRadius = '15px';

let greeting = function(name) {
    return `Hello ${name}!`;
};
let greet = greeting('Sirma');
console.log(greet);


let randomNumber = function() {
    return Math.floor(Math.random() * 100);
}

let myRandomNumber = randomNumber();
console.log(myRandomNumber);

let getRandomColor = function () {
    let color = Math.floor(Math.random() * 255);
    console.log(`generated color: ${color}`);
    return color;
}

let getRandomColors = function () {
    console.clear();
    let colors = `${getRandomColor()}, ${getRandomColor()} ,${getRandomColor()}`;
    console.log(`All colors: ${colors}`);
    return colors;
}

let generateColorForButton = function() {
    colorBtn.style.color = 'white';
    colorBtn.style.backgroundColor = `rgb(${getRandomColors()})`;
}

colorBtn.addEventListener('click', generateColorForButton);

let logMessageIntoConsole = function () {
    console.log('A button was clicked!');
}

logMessageBtn.addEventListener('click', logMessageIntoConsole);

console.clear(); // Comment to see code results in console.