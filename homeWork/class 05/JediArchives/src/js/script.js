let personBtn = document.getElementById('person');
let starShipBtn = document.getElementById('star-ship');
let nextBtn = document.getElementById('next');
let prevBtn = document.getElementById('previous');
let table = document.getElementsByTagName('table')[0];

nextBtn.style.visibility = 'hidden';
prevBtn.style.visibility = 'hidden';

let people = [];
let starships = [];
let currentObject = null;
let currentRender = null;

function getDataFromApi(url, key) {
  fetch(url)
    .then((response) => response.json())
    .then((response) => {
      currentObject = response;
      console.log(currentObject);

      switch (key) {
        case 'person':
          renderPerson(createPerson(currentObject));
          currentRender = 'person';
          break;

        case 'starship':
          renderStarShip(createStarShip(currentObject));
          currentRender = 'starship';
          break;

        case 'next':
          if (currentRender === 'person') {
            renderPerson(createPerson(currentObject));
          } else if (currentRender === 'starship') {
            renderStarShip(createStarShip(currentObject));
          }
          break;

        case 'prev':
          if (currentRender === 'person') {
            renderPerson(createPerson(currentObject));
          } else if (currentRender === 'starship') {
            renderStarShip(createStarShip(currentObject));
          }
          break;

        default:
          console.log('Invalid key');
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

let renderPerson = (array) => {
  table.innerHTML = '';
  nextBtn.style.visibility = 'hidden';
  prevBtn.style.visibility = 'hidden';

let attributes = ['Name', 'Height', 'Mass', 'Gender', 'Birth Year', 'Appearances'];
  let tableRow = table.insertRow(0);
  for (let i = 0; i < attributes.length; i++) {
    let attrCell = tableRow.insertCell(i);
    attrCell.innerText = attributes[i];
  }

  for(let i = 0; i < array.length; i++) {
    let tableRow = table.insertRow(i + 1);
    let object = array[i];
    let keys = Object.keys(object);
    
    for (let b = 0; b < keys.length; b++) {
      let key = keys[b];
      value = object[key];
      let tableCells = tableRow.insertCell(b);
      tableCells.innerText += `${value}`;
    }
  }
  if (currentObject.previous) {
    prevBtn.style.visibility = 'visible';
  }
  if(currentObject.next) {
    nextBtn.style.visibility = 'visible';
  }
};

let renderStarShip = (array) => {
  table.innerHTML = '';
  nextBtn.style.visibility = 'hidden';
  prevBtn.style.visibility = 'hidden';

  let attributes = ['Name', 'Model', 'Manufacturer', 'Cost', 'Capacity', 'Class'];
  let tableRow = table.insertRow(0);
  for (let i = 0; i < attributes.length; i++) {
    let attrCell = tableRow.insertCell(i);
    attrCell.innerText = attributes[i];
  }

  for(let i = 0; i < array.length; i++) {
    let tableRow = table.insertRow(i + 1);
    let object = array[i];
    let keys = Object.keys(object);
    
    for (let b = 0; b < keys.length; b++) {
      let key = keys[b];
      value = object[key];
      let tableCells = tableRow.insertCell(b);
      tableCells.innerText += `${value}`;
    }
  }
  if (currentObject.previous) {
    prevBtn.style.visibility = 'visible';
  }
  if(currentObject.next) {
    nextBtn.style.visibility = 'visible';
  }
};

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
  starships = [];
  for(let i = 0; i < object.results.length; i++) {
    let starShip = new StarShip(object.results[i]);
    starships.push(starShip);
  }
  return starships;
};

let createPerson = (object) => {
  people = [];
  for(let i = 0; i < object.results.length; i++) {
    let person = new Person(object.results[i]);
    people.push(person);
  }
  return people;
};

let sendPersonRequest = () => getDataFromApi('https://swapi.dev/api/people/?page=1', 'person');

let sendStarShipRequest = () => getDataFromApi('https://swapi.dev/api/starships/?page=1', 'starship');

let sendNextRequest = () => {
  if (currentObject) {
    console.log("Sending next request...");
    getDataFromApi(currentObject.next, 'next');
  }
}

let sendPrevRequest = () => {
  if (currentObject) {
    console.log("Sending previous request...");
    getDataFromApi(currentObject.previous, 'prev');
  }
}

personBtn.addEventListener('click', sendPersonRequest);

starShipBtn.addEventListener('click', sendStarShipRequest);

nextBtn.addEventListener('click', () => {
  console.clear();
  console.log('Next button clicked');
  sendNextRequest();
})

prevBtn.addEventListener('click', () => {
  console.clear();
  console.log('Previous button clicked');
  sendPrevRequest();
})