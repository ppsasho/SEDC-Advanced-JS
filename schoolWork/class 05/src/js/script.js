let personBtn = document.getElementById("person");
let starShipBtn = document.getElementById("star-ship");
let content = document.getElementById('content');

let people = [];
let starships = [];

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

let renderPerson = (array) => {
  table.innerHTML = ''
  for(let i = 0; i < array.length; i++) {
    if (i === 0) {
      let tableRow = table.insertRow(i);
      let nameCell = tableRow.insertCell(0);
      nameCell.innerText = 'Name';
      let heightCell = tableRow.insertCell(1);
      heightCell.innerText = 'Height';
      let massCell = tableRow.insertCell(2);
      massCell.innerText = 'Mass';
      let genderCell = tableRow.insertCell(3);
      genderCell.innerText = 'Gender';
      let birthCell = tableRow.insertCell(4);
      birthCell.innerText = 'Birth Year';
      let appearanceCell = tableRow.insertCell(5);
      appearanceCell.innerText = 'Appearances';
    } 
      let tableRow = table.insertRow(i + 1);
      let object = array[i];
      let keys = Object.keys(object);
    

    for (let b = 0; b < keys.length; b++) {
      if (i === 0) {
        table.insertRow(i + 1);
        let key = keys[b];
        value = object[key];
        let tableCells = tableRow.insertCell(b);
        tableCells.innerText += `${value}`;
      }
      let key = keys[b];
      value = object[key];
      console.log(value);
      let tableCells = tableRow.insertCell(b);
      tableCells.innerText += `${value}`;
    }
  }
};

let renderStarShip = (array) => {
  for(let i = 0; i < array.length; i++) {

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
  for(let i = 0; i < 10; i++) {
    let starShip = new StarShip(object.results[i]);
    starships.push(starShip);
  }
  console.log(starships);
  return starships;
};

let createPerson = (object) => {
  for(let i = 0; i < 10; i++) {
    let person = new Person(object.results[i]);
    people.push(person);
  }
  console.log(people);
  return people;
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
