let personBtn = document.getElementById("person");
let starShipBtn = document.getElementById("star-ship");

function getDataFromApi(url, renderFunction) {
  fetch(url)
    .then((response) => response.json())
    .then((result) => {

      renderFunction(result);
    });
}

let renderPerson = (personObject) => {};

let renderStarShip = (shipObject) => {};

function Person(object) {
  this.name = object.name,
  this.height = object.height,
  this.mass = object.mass,
  this.gender = object.gender,
  this.birthYear = object.birth_year,
  this.appearances = object.films.length;
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
  console.log(starShip);
  return starShip;
};

let createPerson = (object) => {
  let person = new Person(object);
  console.log(person);
  return person;
};

let sendPersonRequest = () => {
  getDataFromApi("https://swapi.dev/api/people/?page=1", createPerson());
};

let sendStarShipRequest = () => {
  createStarShip(getDataFromApi("https://swapi.dev/api/starships/?page=1", ));
};

personBtn.addEventListener("click", () => {
  sendPersonRequest();
});

starShipBtn.addEventListener("click", () => {
  sendStarShipRequest();
});
