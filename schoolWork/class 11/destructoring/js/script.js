// => Taking values from an object withour destructuring

let body = document.getElementsByTagName('body')[0].style.backgroundColor = '#27362f'

let object = {
    
"id": 1,
"firstName": "Terry",
"lastName": "Medhurst",
"maidenName": "Smitham",
"age": 50,
"gender": "male",
"email": "atuny0@sohu.com",
"phone": "+63 791 675 8914",
"username": "atuny0",
"password": "9uQFF1Lh",
"birthDate": "2000-12-25",
"image": "https://robohash.org/Terry.png?set=set4",
"bloodGroup": "A-",
"height": 189,
"weight": 75.4,
"eyeColor": "Green",
"hair": {
"color": "Black",
"type": "Strands"
},
"domain": "slashdot.org",
"ip": "117.29.86.254",
"address": {
"address": "1745 T Street Southeast",
"city": "Washington",
"coordinates": {
"lat": 38.867033,
"lng": -76.979235
},
"postalCode": "20020",
"state": "DC"
},
"macAddress": "13:69:BA:56:A3:74",
"university": "Capitol University",
"bank": {
"cardExpire": "06/22",
"cardNumber": "50380955204220685",
}
}

// let coordinates = object.address.coordinates;
// let userName = object.firstName;
// let lastName = object.lastName;
// console.log(lastName);
// console.log(userName);
// console.log(coordinates);

// => Taking id, firstName, lastName (with destructuring)

// const {id, firstName, lastName} = object;
// console.log(id, firstName, lastName);

// => Take firstName lastName and age

const {firstName, lastName, age} = object;
console.log(object);


// We must use the same key-names (property names)

const {firstName: ourCustomFirstName} = object;
console.log(ourCustomFirstName);


// => take coordinates using destructoring

// Without
// let latitude = object.address.coordinates.lat;
// let longitude = object.address.coordinates.lng;
// console.log(latitude, longitude);

// const {lat, lng} = object.address.coordinates;
// console.log(lat, lng);

// Using nested destructuring
// => take address, city, lat & lng
const {city, coordinates: {lat, lng}} = object.address;
console.log(city, lat, lng);


console.log(' ');
console.log('====================== Parameters destructuring ======================');

// Without destructuring
// function getObjectFullName(object) {
//     return `${object.firstName} ${object.lastName}`
// }

// let objectFullName = getObjectFullName(object);
// console.log(objectFullName);

// Using some destructuring
// function getObjectFullName(object) {
//     const {firstName, lastName} = object;
//     return `${firstName} ${lastName}`;
// }

function getObjectFullName({firstName, lastName}) {
    return `${firstName} ${lastName}`;
}
let objectFullName = getObjectFullName(object);
console.log(objectFullName);

console.log(' ');
console.log('====================== Array destructuring ======================');


const testArr = [1 , 2, 40, 554, 3434];

const [itemOne, itemTwo, itemThree, ,itemFive] = testArr;
console.log(itemOne, itemTwo, itemThree, itemFive);

// Takes them by order!!!
const [firstDiv, , thirdDiv] = document.getElementsByClassName('arrayDemo');
console.log(firstDiv, thirdDiv);

const testArrTwo = ['First thing', 'Second thing'];

const [firstString, secondString, thirdString = 'there was no string'] = testArrTwo;
console.log(firstString, secondString, thirdString);

console.clear();
console.log(' ');
console.log('======================= spread operator =======================');

console.log(Math.max(123, 23, 43, 1000));
let nums = [123, 23, 43, 1000]
console.log(Math.max(...nums));

const dogs = ['Max', 'Spark', 'Dug'];
const cats = ['Fluff', 'Zuza'];

const allPets = [...dogs, ...cats, 'something'];
console.log(allPets);

const dogsCopy = [...dogs];
console.log(dogsCopy);


// Spread with objects

// => merge 2 objects into 1 (with spread)

const dog = {
    name: 'Charlie',
    breed: 'Husky'
}

const dogDescription = {
    group: 'Toy',
    color: 'blue',
    origin: 'somewhere'
}

const dogInfo = {...dog, ...dogDescription, isHappy: true};
console.log(dogInfo);

console.log(' ');
console.log('======================= Rest operator =======================');

const people = ['Jamie', 'Cvetan', 'Petko', 'Quincy'];
const [jamie, cvetan, ...restPeople] = people;
console.log(restPeople);

function sum(...nums) {
    return nums.reduce((acc, curr) => acc + curr);
}