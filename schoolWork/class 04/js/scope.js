function greetNew() {
    return 'Hello you!';
}

let greetArrow = () => 'Hello you!' // You can't find me in the global scope in console! (try typing window.greetArrow() in the console)

// Function scope
let two = 5;
function addFive (number) {
    console.log(two);
    let seven = 7;
    console.log(number + 5);
    return seven;
}

addFive(10);