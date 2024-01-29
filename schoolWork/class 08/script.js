first();
second();

function first() {
    console.log('The first');
}

function second() {
    console.log('The second');
}

console.log('================ Asynchronous executing ================');
// debugger; // Needs to have dev tools open in the browser

// SetTimeout

// setTimeout(() => {
//     console.log('This will execute after 5 secs');
// }, 5000); // The code continues being executed after the timer starts

console.log('================ Debugging ================');
// Console log
// Sources in developer tools
// debugger
console.log('test sources');

// setInterval(() => {
//     console.log('This will execute after every 2 seconds.');
// 
console.clear();

function greet(name) {
    setTimeout(() => {
        console.log(`Hello ${name}`);
    }, 2500);
}
greet('Slave');

// Synchronous vs Asynchronous
console.log(1);
console.log(2);
console.log(3);
// Result
// 1
// 2
// 3
