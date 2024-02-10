const me = {
    name: 'Sasho'
};
console.log(me.hasOwnProperty('name'));
let nums = [345, 634, 443, 1245];
console.log(nums);
let greeting = 'Hello you!';
let jacob = {
    name: 'Jacob',
    sayHello: function(){
        console.log(`${this.name} says: ${greeting}`);
    }
}

Person.lastName = 'Pp'

function Person(name) {
    this.name = name;
}

const mee = new Person('Mee');

// __proto__ gives us info about where a certain instance of a varaiable came from (ex: an object created using a constructor function)

console.log(Person);
console.log(Person.prototype);
console.log(mee.__proto__);
console.log(me.__proto__);
console.log(Person.prototype === Person.__proto__);
console.log(Person.prototype === mee.__proto__);

function User(name, email) {
    this.name = name,
    this.email = email,
    this.isOnline = false
    this.login = function() {
        console.log(`${this.name} has successfully logged in`);
    }
}

let kevin = new User('Kevin', 'kevin@examplemail');

let amy = new User('Amy', 'amy@examplemail');

kevin.isAdmin = false;

amy.isAdmin = true;

const vehicle = {
    type: 'Vehicle',
    start: function() {
        console.log(`${this.type} is starting`);
    }
}


// Create bike object
const bike = {
    type: 'Kawasaki',
    model: 'Z H2'
}

// adding vehicle as a prototype to an object
// This way is deprecated
// bike.__proto__ = vehicle;


// Better way
Object.getPrototypeOf(vehicle).stop = function() {
    console.log(`${this.type} is stopping`);
};
Object.getPrototypeOf(vehicle).start = function() {
    console.log(`${this.type} is starting`);
};

Object.defineProperty(bike, 'color', {
    value: 'purple'
});

bike.start();
bike.stop();
console.log(bike.color);


function Pet(name, breed, color, sound) {
    this.name = name,
    this.breed = breed,
    this.color = color,
    this.sound = sound
}

Pet.prototype.speak = function () {
    console.log(`${this.name} says ${this.sound}`);
}

let dog = new Pet('Pollo', 'german shepherd', 'black', 'WOFWOF');

dog.speak();







