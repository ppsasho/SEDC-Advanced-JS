console.log("======================= Objects =======================");

let body = (document.getElementsByTagName("body")[0].style.backgroundColor =
  "#0d8050");

// Anonymous object
const person = {
  name: "Jake",
  color: "white",
  age: "old",
  friends: {
    firstName: "David",
    lastName: "Dejvidsky",
  },

  speak: function () {
    console.log(`Hello! My name is ${this.name}!`);
  },

  getThis: this,
  printThisAnonymous: () => {
    console.log(this);
  },
  printThis: function () {
    console.log(this);
  },
};

console.log(person.getThis);
person.printThisAnonymous();
person.printThis();

// Accessing an object
console.log(person.name);
console.log(person["name"]);
person.speak();

// Constructor Notation Template (Constructor function)
// ? : => ternary operator

function Person(firstName, lastName) {
  this.firstName = firstName === undefined ? "unnamed" : firstName;
  this.lastName = lastName;
  this.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
  },
    this.getThis = this,
    this.printThisAnonymous = () => {
      console.log(this);
    },
    this.printThis = function () {
      console.log(this);
    };
}

let john = new Person("John", "Matthews");
john.getThis;
john.printThis();
john.printThisAnonymous();

console.log(" ");
console.log("======================= Object methods =======================");

// Create

let person1 = {
  firstName: "Cody",
  lastName: "Smith",
  greet: function () {
    console.log("Hello!");
  }
}

// Using an object as a template for making a new object(without using constructor functions)
let newPerson = Object.create(person1);
console.log(person1);
console.log(newPerson);

let emptyObject = Object.create(null);
console.log(emptyObject);


// assign

let YanAddress = {
  street: "Blvd. mainstreet",
  city: "Valencia"
}

let bobsInfo = Object.assign(person, YanAddress);

console.log(bobsInfo);

// keys

let myKeys = Object.keys(bobsInfo);
console.log(myKeys);

// values

let myValues = Object.values(bobsInfo);
console.log(myValues);

// entries

let myEntries = Object.entries(bobsInfo);
console.log(myEntries);


console.log(" ");
console.log("======================= Changing the object accessibility =======================");

// Freeze

console.log(bobsInfo);
Object.freeze(bobsInfo); // Doesn"t allow changing objects properties or adding new ones
bobsInfo.name = "James";
console.log(bobsInfo);

// seal

let marley = {
  name: "Marley",
  color: "brown"
}

Object.seal(marley);
marley.name = 'not marley';
marley.color = 'white';
marley.happy = true;
console.log(marley);

