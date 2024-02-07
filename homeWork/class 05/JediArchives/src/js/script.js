let personBtn = document.getElementById("person");
let starShipBtn = document.getElementById("star-ship");
let moonBtn = document.getElementById("moon");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("previous");
let table = document.getElementsByTagName("table")[0];
let spinner = document.getElementById("spinner");
let pageDisplay = document.getElementById("page");

pageDisplay.style.visibility = "hidden";
spinner.style.visibility = "hidden";
nextBtn.style.visibility = "hidden";
prevBtn.style.visibility = "hidden";

let planets = [];
let people = [];
let starships = [];
let currentObject = null;
let currentRender = null;
let sortSwitch = null;

function getDataFromApi(url, key) {
  spinner.style.visibility = "visible";
  fetch(url)
    .then((response) => response.json())
    .then((response) => {
      spinner.style.visibility = "hidden";
      currentObject = JSON.parse(JSON.stringify(response));
      console.log(currentObject);

      switch (key) {
        case "person":
          renderPerson(createPerson(currentObject));
          currentRender = "person";
          break;

        case "starship":
          renderStarShip(createStarShip(currentObject));
          currentRender = "starship";
          break;

        case "planets":
          renderPlanet(createPlanet(currentObject));
          currentRender = "planets";
          break;

        case "next":
          if (currentRender === "person") {
            renderPerson(createPerson(currentObject));
          } else if (currentRender === "starship") {
            renderStarShip(createStarShip(currentObject));
          } else if (currentRender === "planets") {
            renderPlanet(createPlanet(currentObject));
          }
          break;

        case "prev":
          if (currentRender === "person") {
            renderPerson(createPerson(currentObject));
          } else if (currentRender === "starship") {
            renderStarShip(createStarShip(currentObject));
          } else if (currentRender === "planets") {
            renderPlanet(createPlanet(currentObject));
          }
          break;

        default:
          console.log("Invalid key");
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

// let drawTable = array => {
//   let tableRow = table.insertRow(0);
//   for (let i = 0; i < attributes.length; i++) {
//     let attrCell = tableRow.insertCell(i);
//     attrCell.innerText = attributes[i];
//     attrCell.id = `header${i}`
//     attrCell.addEventListener('click', ()=> {
//       console.log(`${attrCell.id} clicked`);
//       sortTable(array);
//     })
//   }

//   for (let i = 0; i < array.length; i++) {
//     let tableRow = table.insertRow(i + 1);
//     let object = array[i];
//     let keys = Object.keys(object);

//     for (let b = 0; b < keys.length; b++) {
//       let key = keys[b];
//       value = object[key];
//       let tableCells = tableRow.insertCell(b);
//       tableCells.innerText += `${value}`;
//     }
//   }
//   if (currentObject.previous) {
//     prevBtn.style.visibility = "visible";
//   }
//   if (currentObject.next) {
//     nextBtn.style.visibility = "visible";
//   }
//   page.style.visibility = "visible";
// }

let renderPerson = array => {
  getPageNumber();
  table.innerHTML = "";
  nextBtn.style.visibility = "hidden";
  prevBtn.style.visibility = "hidden";

  let attributes = [
    "Name",
    "Height",
    "Mass",
    "Gender",
    "Birth-Year",
    "Films",
  ];
  
  let tableRow = table.insertRow(0);
  for (let i = 0; i < attributes.length; i++) {
    let attrCell = tableRow.insertCell(i);
    attrCell.innerText = attributes[i];
    attrCell.id = `header${i}`
    attrCell.addEventListener('click', () => {
      sortTable(array, attrCell.innerText.toLowerCase());
    })
  }

  for (let i = 0; i < array.length; i++) {
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
    prevBtn.style.visibility = "visible";
  }
  if (currentObject.next) {
    nextBtn.style.visibility = "visible";
  }
  page.style.visibility = "visible";
};

let renderStarShip = (array) => {
  getPageNumber();
  table.innerHTML = "";
  nextBtn.style.visibility = "hidden";
  prevBtn.style.visibility = "hidden";

  let attributes = [
    "Name",
    "Model",
    "Manufacturer",
    "Cost",
    "Capacity",
    "Class",
  ];
  let tableRow = table.insertRow(0);
  for (let i = 0; i < attributes.length; i++) {
    let attrCell = tableRow.insertCell(i);
    attrCell.innerText = attributes[i];
    attrCell.id = `header${i}`
    attrCell.addEventListener('click', () => {
      sortTable(array, attrCell.innerText.toLowerCase());
    })
  }

  for (let i = 0; i < array.length; i++) {
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
    prevBtn.style.visibility = "visible";
  }
  if (currentObject.next) {
    nextBtn.style.visibility = "visible";
  }
  page.style.visibility = "visible";
};

let renderPlanet = (array) => {
  getPageNumber();
  table.innerHTML = "";
  nextBtn.style.visibility = "hidden";
  prevBtn.style.visibility = "hidden";

  let attributes = [
    "Name",
    "Climate",
    "Diameter",
    "Population",
    "Gravity",
    "Terrain",
  ];

  let tableRow = table.insertRow(0);
  for (let i = 0; i < attributes.length; i++) {
    let attrCell = tableRow.insertCell(i);
    attrCell.innerText = attributes[i];
    attrCell.id = `header${i}`
    attrCell.addEventListener('click', () => {
      sortTable(array, attrCell.innerText.toLowerCase());
    })
  }

  for (let i = 0; i < array.length; i++) {
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
    prevBtn.style.visibility = "visible";
  }
  if (currentObject.next) {
    nextBtn.style.visibility = "visible";
  }
  page.style.visibility = "visible";
};

function Person(object) {
  (this.name = object.name),
    (this.height = object.height),
    (this.mass = object.mass),
    (this.gender = object.gender),
    (this.birthYear = object.birth_year),
    (this.appearances = object.films.length);
}

function StarShip(object) {
  (this.name = object.name),
    (this.model = object.model),
    (this.manufacturer = object.manufacturer),
    (this.cost = object.cost_in_credits),
    (this.capacity = object.passengers),
    (this.class = object.starship_class);
}

function Planet(object) {
  (this.name = object.name),
    (this.climate = object.climate),
    (this.diameter = object.diameter),
    (this.population = object.population),
    (this.gravity = object.gravity),
    (this.terrain = object.terrain);
}

let createStarShip = (object) => {
  starships = [];
  for (let i = 0; i < object.results.length; i++) {
    let starShip = new StarShip(object.results[i]);
    starships.push(starShip);
  }
  return starships;
};

let createPerson = (object) => {
  people = [];
  for (let i = 0; i < object.results.length; i++) {
    let person = new Person(object.results[i]);
    people.push(person);
  }
  return people;
};

let createPlanet = (object) => {
  planets = [];
  for (let i = 0; i < object.results.length; i++) {
    let planet = new Planet(object.results[i]);
    planets.push(planet);
  }
  return planets;
};

let sendPersonRequest = () =>
  getDataFromApi("https://swapi.dev/api/people/?page=1", "person");

let sendStarShipRequest = () =>
  getDataFromApi("https://swapi.dev/api/starships/?page=1", "starship");

let sendPlanetsRequest = () =>
  getDataFromApi("https://swapi.dev/api/planets/", "planets");

let sendNextRequest = () => {
  if (currentObject) {
    console.log("Sending next request...");
    getDataFromApi(currentObject.next, "next");
  }
};

let sendPrevRequest = () => {
  if (currentObject) {
    console.log("Sending previous request...");
    getDataFromApi(currentObject.previous, "prev");
  }
};

let nextPage = () => {
  let pageInfo = currentObject.next;
  let page = pageInfo.indexOf("=");
  let pageNumber = pageInfo[page + 1];
  pageDisplay.innerText = `Page ${--pageNumber}`;
  console.log(`Current page: ${pageNumber}`);
}
let previousPage = () => {
  let pageInfo = currentObject.previous;
  let page = pageInfo.indexOf("=");
  let pageNumber = pageInfo[page + 1];
  pageDisplay.innerText = `Page ${++pageNumber}`;
  console.log(`Current page: ${pageNumber}`);
}

let getPageNumber = () => {
  if(currentObject.next === null) {
    previousPage();
    return;
  }
  if(currentObject.previous === null) {
    nextPage();
    return;
  }
  nextPage();
};

let sortTable = (input, attr) => {
  let array = [...input];
  console.clear();
  console.log(`Attribute clicked: ${attr}`);
  console.log(`Sorted array:`);
  console.log(array);

  if(sortSwitch) {
    array.sort((attr1, attr2) => attr2.name.length - attr1.name.length);
    switch(currentRender) {
      case 'person' :
      renderPerson(array);
        break;
      
      case 'starship' :
      renderStarShip(array);
        break;
  
      case 'planets' :
      renderPlanet(array);
        break;
    }
    sortSwitch = false
    return;
  }
  array.sort((attr1, attr2) => attr1.name.length - attr2.name.length);
  switch(currentRender) {
    case 'person' :
    renderPerson(array);
      break;
    
    case 'starship' :
    renderStarShip(array);
      break;

    case 'planets' :
    renderPlanet(array);
      break;
  }
  sortSwitch = true;
}

personBtn.addEventListener("click", sendPersonRequest);

starShipBtn.addEventListener("click", sendStarShipRequest);

moonBtn.addEventListener("click", sendPlanetsRequest);

nextBtn.addEventListener("click", () => {
  console.clear();
  console.log("Next button clicked");
  sendNextRequest();
});

prevBtn.addEventListener("click", () => {
  console.clear();
  console.log("Previous button clicked");
  sendPrevRequest();
});
