// Storing function as a variable
let body = document.getElementsByTagName('body')[0].style.backgroundColor = '#829494'; 

let add = function(num1, num2) {
    return num1 + num2;
}

const sumFunction = add;

const sumResult = sumFunction(50, 200);

console.log(sumResult);

function sub (num1, num2) {
    return num1 - num2;
}

const subtractFunction = sub;

// storing functions in an array and using them

function mul (num1, num2) {
    return num1 * num2;
}

let mulFunction = mul;

function divide (num1, num2) {
    if (num2 === 0) {
        return 'Cannot divide by 0';
    }
    return num1 / num2;
}

let divFunction = divide;

const operators = [add, sub, mul, divide];
console.log(operators[3](10,2));


// Using functions as arguments in other functions

function operation (func, num1, num2) {
    return func(num1, num2);
}

let operationResult = operation(add, 5, 6);
console.log(`operation add result: ${operationResult}`);

console.log(' ');


// Returning a function from another function

const greetingGenerator = (language) => {
    switch(language.toLowerCase()) {
        case 'english':
            return name => console.log(`Hello ${name}!`);
        
        case 'spanish':
            return name => console.log(`Hola ${name}!`);

        case 'french':
            return name => console.log(`Bonjour ${name}!`);

        default:
            console.log('Unsupported language');
            return null;
    }
}

let greetInEnglish = greetingGenerator('english');
let greetInSpanish = greetingGenerator('spanish');
let greetInFrench = greetingGenerator('french');

greetInSpanish('Martin');

console.log(' ');

// A function with properties and a method

const taskHandler = taskName => {
    return `Task ${taskName} completed!`;

}

taskHandler.defaultTask = 'learn coding';
taskHandler.description = 'This is a task handler description';

// Getting property values from the function

console.log(taskHandler.description);

const defaultTaskResult = taskHandler(taskHandler.defaultTask);

console.log(defaultTaskResult);

// Adding method to a function

taskHandler.customTaskResult = (taskName, customAction) => {
    return `The result for the task ${taskName} is ${customAction}.`;
}

let taskHandlerCustomResult = taskHandler.customTaskResult('working', (() => {
    return 'in progress';
})());

console.log(taskHandlerCustomResult);

console.clear();