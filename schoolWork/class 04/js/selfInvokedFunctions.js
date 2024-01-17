// (function () {
//     console.log('printing fruits...');
//     let fruits = ['apple', 'banana', 'orange'];
//     for (let fruit of fruits) {
//         console.log(`fruit #${fruits.indexOf(fruit) + 1} ${fruit}`);
//     }
// })()


// Self invoked functions declared using arrow function
(() => {
    console.log('printing fruits...');
    let fruits = ['apple', 'banana', 'orange'];
    for (let fruit of fruits) {
        console.log(`fruit #${fruits.indexOf(fruit) + 1} ${fruit}`);
    }
})();

(message => console.log(message))('This message is passed as an arguement to the self invoked function');
console.clear(); // Comment to see code results in console.
