let content = document.getElementById("content");
let beers = document.getElementById("beers");
let randomBeer = document.getElementById("random-beer");
let spinner = document.getElementById("spinner");
let pageNav = document.getElementById("pageNav");
let nextBtn = document.getElementById("nextBtn");
let prevBtn = document.getElementById("prevBtn");
let searchBtn = document.getElementById("nameSearchBtn");
let searchField = document.getElementById("nameSearchField");
let sortName = document.getElementById("filterName");
let sortAlc = document.getElementById("filterAlc");
let sortBrewed = document.getElementById("filterBrewed");
let sortIbu = document.getElementById("filterIbu");
let sort5 = document.getElementById("filter5");
let sort10 = document.getElementById("filter10");
let sort20 = document.getElementById("filter20");
let filterNav = document.getElementsByClassName("filterNav")[0];

filterNav.style.visibility = "hidden";
pageNav.style.visibility = "hidden";
spinner.style.visibility = "hidden";

let pageNum = null;
let perPage = 20;
let filter = null;
let currentBeers = null;
let sortSwitch = false;
let sortState = null;

let getBeerData = async url => {
  spinner.style.visibility = "visible";
  const response = await fetch(url).then((r) => r.json());
  spinner.style.visibility = "hidden";
  return response;
};

let sortStateSwitch = () => {
  switch(sortSwitch) {
    case true:
      sortSwitch = false;
      break;
    case false:
      sortSwitch = true;
      break;
    default:
      break;
  }
  switch(sortState) {
    case 'name':
      sortBeerByName();
      break;
    case 'abv':
      sortBeerByAbv();
      break;
    case 'ibu':
      sortBeerByIbu();
      break;
    case 'date':
      sortBeerByDate();
      break;
    default:
      break;
  }
}

let displayBeer = array => {
  console.log(array);
  currentBeers = array;
  content.innerHTML = "";
  content.style.visibility = "visible";
  for (let i = 0; i < array.length; i++) {
    const { img, name, tagline } = array[i];

    let cardBox = document.createElement("div");
    cardBox.classList.add(
      "card",
      "border-secondary",
      "text-bg-dark",
      "h-100",
      "text-center"
    );
    content.appendChild(cardBox);
    cardBox.style.width = "15rem";
    cardBox.style.padding = "20px";

    if (img) {
      let cardImg = document.createElement("img");
      cardImg.classList.add("card-img-top");
      cardImg.style.height = "10rem";
      cardImg.style.width = "4rem";
      cardImg.style.marginLeft = "2rem";
      cardImg.src = img;
      cardBox.appendChild(cardImg);
    }

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    let cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.innerText = `${name}`;

    let cardText = document.createElement("p");
    cardText.classList.add("card-text");
    cardText.innerText = `${tagline}`;

    let cardBtn = document.createElement("a");
    cardBtn.classList.add("btn", "btn-primary");
    cardBtn.addEventListener("click", () => {
      console.log("Card infoBtn clicked");
      moreBeerInfo(array[i]);
    });
    cardBtn.innerText = "More details";
    let cardFooter = document.createElement("div");
    cardFooter.classList.add("card-footer", "bg-transparent", "border-info");

    cardFooter.appendChild(cardBtn);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(cardFooter);
    cardBox.appendChild(cardBody);
  }

  pageNav.style.visibility = "visible";
  filterNav.style.visibility = "visible";
  prevBtn.style.visibility = "visible";
  nextBtn.style.visibility = "visible";
  if (array.length < 2) {
    pageNav.style.visibility = "hidden";
    filterNav.style.visibility = "hidden";
  }
  if (pageNum > 12) {
    nextBtn.style.visibility = "hidden";
  }
  if (pageNum < 2) {
    prevBtn.style.visibility = "hidden";
  }
};

let moreBeerInfo = (object) => {
  content.innerHTML = "";
  content.style.visibility = "visible";
  const { name, img, description, tagline, brewed, abv, ibu, foodPairing } =
    object;
  console.log("Preparing beer info...");

  let cardBox = document.createElement("div");
  cardBox.classList.add("card", "mb-3", "text-bg-dark", "border-warning");
  cardBox.style.width = "80rem";
  cardBox.style.maxHeight = "50rem";

  let cardRow = document.createElement("div");
  cardRow.classList.add("row", "g-0");

  if (img) {
    let imgFrame = document.createElement("div");
    imgFrame.classList.add("col-md-4", "dark");
    imgFrame.style.padding = "3rem";

    let imgShow = document.createElement("img");
    imgShow.src = img;
    imgShow.style.maxHeight = "30rem";
    imgShow.classList.add("img-fluid", "rounded-start");
    imgFrame.appendChild(imgShow);
    cardRow.appendChild(imgFrame);
  }

  let cardBodyFrame = document.createElement("div");
  cardBodyFrame.style.padding = "1rem";
  cardBodyFrame.classList.add("col-md-8");

  let cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  let cardTitle = document.createElement("h4");
  cardTitle.style.display = "inline";
  cardTitle.innerText = `${name} `;

  let cardHeader = document.createElement("div");

  cardHeader.style.display = "inline";
  cardHeader.classList.add("card-header");

  let cardTag = document.createElement("span");
  cardTag.style.marginLeft = "1rem";
  cardTag.innerText = ` ${tagline}`;

  cardHeader.appendChild(cardTitle);
  cardHeader.appendChild(cardTag);

  let cardText = document.createElement("p");
  cardText.style.marginTop = "2rem";
  cardText.style.textAlign = "justify";
  cardText.innerText = description;

  let cardBrewed = document.createElement("p");
  cardBrewed.style.marginTop = "1.5rem";
  cardBrewed.innerText = `Brewed: ${brewed}`;

  let cardAbv = document.createElement("p");
  cardAbv.innerText = `alcohol: ${abv}%`;

  let cardIbu = document.createElement("p");
  cardIbu.innerText = `Bitterness: ${ibu} IBU`;

  let foodCombo = document.createElement("h5");
  foodCombo.style.marginTop = "2rem";
  foodCombo.style.fontWeight = "bold";
  foodCombo.innerText = "Food Pairing";

  let cardList = document.createElement("ul");
  cardList.classList.add("list-group", "list-group-flush");

  for (let i = 0; i < foodPairing.length; i++) {
    let pair = document.createElement("li");
    pair.classList.add("list-group-item");
    pair.innerText = foodPairing[i];
    cardList.appendChild(pair);
  }


  cardBody.appendChild(cardHeader);
  cardBody.appendChild(cardText);
  cardBody.appendChild(cardBrewed);
  cardBody.appendChild(cardAbv);
  cardBody.appendChild(cardIbu);
  cardBody.appendChild(foodCombo);
  cardBody.appendChild(cardList);
  cardBodyFrame.appendChild(cardBody);
  cardRow.appendChild(cardBodyFrame);
  cardBox.appendChild(cardRow);
  content.appendChild(cardBox);

  if(currentBeers && currentBeers.length > 1) {
    let backBtn = document.createElement("a");
    backBtn.classList.add("btn", "btn-danger");
    backBtn.addEventListener("click", () => {
      displayBeer(currentBeers);
    })
    backBtn.innerText = "Go back";
    cardBodyFrame.appendChild(backBtn);
  }

  pageNav.style.visibility = "hidden";
  filterNav.style.visibility = "hidden";
  nextBtn.style.visibility = "hidden";
  prevBtn.style.visibility = "hidden";
};

class Beer {
  constructor(
    name,
    image_url,
    description,
    tagline,
    first_brewed,
    abv,
    ibu,
    food_pairing
  ) {
    (this.name = name),
      (this.img = image_url),
      (this.description = description),
      (this.tagline = tagline),
      (this.brewed = first_brewed),
      (this.abv = abv),
      (this.ibu = ibu),
      (this.foodPairing = food_pairing);
  }
}

let createBeer = array => {
  let data = [...array];
  let beers = [];
  for (let i = 0; i < data.length; i++) {
    const {name, image_url, description, tagline, first_brewed, abv, ibu, food_pairing} = data[i];
    let beer = new Beer(name, image_url, description, tagline, first_brewed, abv, ibu, food_pairing);
    beers.push(beer);
  }
  return beers;
};

let getRandomBeer = async () => {
  console.clear();
  console.log("Random beer clicked");
  let data = await getBeerData("https://api.punkapi.com/v2/beers/random");
  console.log(data);
  const {name, image_url, description, tagline, first_brewed, abv, ibu, food_pairing,} = data[0];
  let beer = new Beer(name,image_url,description,tagline,first_brewed,abv,ibu,food_pairing);
  console.log(beer); 
  moreBeerInfo(beer);
};

let getBeers = async () => {
  console.clear();
  console.log("Beers clicked");
  pageNum = 1;
  let data = await getBeerData(
    `https://api.punkapi.com/v2/beers?page=1&per_page=${perPage}`
  );
  displayBeer(createBeer(data));
};

let sendNext = async () => {
  if (pageNum) {
    ++pageNum;
    console.clear();
    console.log(`Going to page ${pageNum}`);
    let data = await getBeerData(
      `https://api.punkapi.com/v2/beers?page=${pageNum}&per_page=${perPage}`
    );
    currentBeers = createBeer(data);
    if(sortState) {
      console.log(`Sorting new beers by: ${sortState}`);
      sortStateSwitch();
      return;
    }
    displayBeer(currentBeers);
  }
};
let sendPrev = async () => {
  if (pageNum > 1) {
    --pageNum;
    console.clear();
    console.log(`Going to page ${pageNum}`);
    let data = await getBeerData(
      `https://api.punkapi.com/v2/beers?page=${pageNum}&per_page=${perPage}`
    );
    currentBeers = createBeer(data);
    if(sortState) {
      console.log(`Sorting new beers by: ${sortState}`);
      sortStateSwitch();
      return;
    }
    displayBeer(currentBeers);
  }
};


let sortBeerByName = () => {
  if(currentBeers) {
    console.log('Sorting beers by name...');
    let beersCopy = [...currentBeers];
    if (sortSwitch) {
      let sortedBeers = beersCopy.sort((beer1, beer2) => {
        return beer1.name.localeCompare(beer2.name, 'en');
      })
      displayBeer(sortedBeers);
      sortSwitch = false;
      sortState = 'name';
      return;
    }
    let sortedBeers = beersCopy.sort((beer1, beer2) => { 
      return beer2.name.localeCompare(beer1.name, 'en');
    })
    displayBeer(sortedBeers);
    sortSwitch = true;
    sortState = 'name'; 
  }
}

let sortBeerByAbv = () => {
  if(currentBeers) {
    console.log('Sorting beers by abv...');
    let beersCopy = [...currentBeers];
    if (sortSwitch) {
      let sortedBeers = beersCopy.sort((beer1, beer2) => {
        return beer1.abv - beer2.abv;
      })
      displayBeer(sortedBeers);
      sortSwitch = false;
      sortState = 'abv';
      return;
    }
    let sortedBeers = beersCopy.sort((beer1, beer2) => { 
      return beer2.abv - beer1.abv;
    })
    displayBeer(sortedBeers);
    sortSwitch = true;
    sortState = 'abv'; 
  }
}

let sortBeerByIbu = () => {
  if(currentBeers) {
    console.log('Sorting beers by ibu...');
    let beersCopy = [...currentBeers];
    if (sortSwitch) {
      let sortedBeers = beersCopy.sort((beer1, beer2) => {
        return beer1.ibu - beer2.ibu;
      })
      displayBeer(sortedBeers);
      sortSwitch = false;
      sortState = 'ibu';
      return;
    }
    let sortedBeers = beersCopy.sort((beer1, beer2) => { 
      return beer2.ibu - beer1.ibu;
    })
    displayBeer(sortedBeers);
    sortSwitch = true;
    sortState = 'ibu';
  }
}

let sortBeerByDate = () => {
  if(currentBeers) {
    console.log('Sorting beers by date...');
    let beersCopy = [...currentBeers];
    if (sortSwitch) {
      let sortedBeers = beersCopy.sort((beer1, beer2) => {
        let date1 = new Date(
          beer1.brewed.split("/").reverse().join("-")
        );
        let date2 = new Date(
          beer2.brewed.split("/").reverse().join("-")
        );
        return date1 - date2;
      })
      displayBeer(sortedBeers);
      sortSwitch = false;
      sortState = 'date';
      return;
    }
    let sortedBeers = beersCopy.sort((beer1, beer2) => {
      let date1 = new Date(beer1.brewed.split("/").reverse().join("-"));
      let date2 = new Date(beer2.brewed.split("/").reverse().join("-"));
      return date2 - date1;
    })
    displayBeer(sortedBeers);
    sortSwitch = true;
    sortState = 'date';
  }
}

let sortedNames = () => sortBeerByName();
let sortedAlc = () => sortBeerByAbv();
let sortedIbu = () => sortBeerByIbu();
let sortedBrewed = () => sortBeerByDate();


let setPerPage = async num => {
  perPage = num;
  let data = await getBeerData(
    `https://api.punkapi.com/v2/beers?page=${pageNum}&per_page=${perPage}`
  );
  currentBeers = createBeer(data);
  if(sortState) {
    sortStateSwitch();
    return;
  }
  displayBeer(currentBeers);
};
let sorted5 = () => setPerPage(5);
let sorted10 = () => setPerPage(10);
let sorted20 = () => setPerPage(20);

let searchName = async () => {
  let input = searchField.value.trim();
  console.log(input);
  if (input) {
    let data = await getBeerData(
      `https://api.punkapi.com/v2/beers?beer_name=${input}&per_page=${perPage}`
    );
    displayBeer(createBeer(data));
    searchField.value = "";
    return;
  }
  alert("No input!");
};

randomBeer.addEventListener("click", getRandomBeer);
beers.addEventListener("click", getBeers);
searchBtn.addEventListener("click", searchName);
nextBtn.addEventListener("click", sendNext);
prevBtn.addEventListener("click", sendPrev);
sortName.addEventListener("click", sortedNames);
sortAlc.addEventListener("click", sortedAlc);
sortBrewed.addEventListener("click", sortedBrewed);
sortIbu.addEventListener("click", sortedIbu);
sort5.addEventListener("click", sorted5);
sort10.addEventListener("click", sorted10);
sort20.addEventListener("click", sorted20);
