let personBtn = document.getElementById("person");
let starShipBtn = document.getElementById("star-ship");
let content = document.getElementById('content');
// let people = [];
// let starships = [];

function getDataFromApi(url, key) {
  fetch(url)
  .then((response) => response.json())
  .then((response) => {
      switch(key) {

        case 'person':
          renderPerson(createPerson(response));
          break;
        
        case 'starship':
          renderStarShip(createStarShip(response));
          break;
        
        default:
          break;
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

let renderPerson = (object) => {
  console.log(object);
};

let renderStarShip = (object) => {
  console.log(object);
};

function Person(object) {
  this.name = object.name,
  this.height = object.height,
  this.mass = object.mass,
  this.gender = object.gender,
  this.birthYear = object.birth_year,
  this.appearances = object.films;
}

function StarShip(object) {
  this.name = object.name,
  this.model = object.model,
  this.manufacturer = object.manufacturer,
  this.cost = object.cost_in_credits,
  this.capacity = object.passengers,
  this.class = object.starship_class;
}

let createStarShip = (object) => {
  let starShip = new StarShip(object);
  return starShip;
};

let createPerson = (object) => {
  let person = new Person(object);
  return person;
};

let sendPersonRequest = () => getDataFromApi("https://swapi.dev/api/people/?page=1", 'person');


let sendStarShipRequest = () => getDataFromApi("https://swapi.dev/api/starships/?page=1", 'starship');


personBtn.addEventListener("click", () => {
  sendPersonRequest();
  console.log('click works');
});

starShipBtn.addEventListener("click", () => {
  sendStarShipRequest();
  console.log('click works');
});
