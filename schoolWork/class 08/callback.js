console.log('======================== Callback Functions ========================');
// Common use-cases:
// 1) Async Operations

let informUser = input => console.log(`result: ${input}`);
// debugger;
function performAsyncOperation(callback) {
    console.log('Async operation started...');
    setTimeout(() => {
        const result = 'Async operation completed';
        callback(result);
    }, 2500);
    console.log('... Processing ...');
}

// performAsyncOperation(informUser);

let btn = document.getElementById('ClickMeBtn').addEventListener('click', (e) => {
    console.log(e.target.id + 'Button is clicked');
})

console.log('======================== Callback Functions vs Functions as an argument ========================');

function Func(callback) {
    console.log('Fetching smth..');
    setTimeout(() => {
        console.log('Data fetched!');
        callback();
    }, 2000);
}

// Func(console.log('GREAT JOB')); Yeah don't do this
Func(() => console.log('GREAT JOB'));

function functionAsArgument(func1, func2) {
    console.log('Sync execution of funcs..');
    func1();
    func2();
}

functionAsArgument(() => console.log('Hello from me'), () => console.log(
'Hello again!'
));
