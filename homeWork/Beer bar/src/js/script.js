let content = document.getElementById('content');
let beers = document.getElementById('beers');
let randomBeer = document.getElementById('random-beer');
let spinner = document.getElementById('spinner');
let pageNav = document.getElementById('pageNav');
let nextBtn = document.getElementById('nextBtn');
let prevBtn = document.getElementById('prevBtn');
let searchBtn = document.getElementById('nameSearchBtn');
let searchField = document.getElementById('nameSearchField');
let sortName = document.getElementById('filterName');
let sortAlc= document.getElementById('filterAlc');
let sortBrewed= document.getElementById('filterBrewed');
let sortIbu= document.getElementById('filterIbu');
let sort5 = document.getElementById('filter5');
let sort10 = document.getElementById('filter10');
let sort20 = document.getElementById('filter20');
let sort25 = document.getElementById('filter25');
let filterNav = document.getElementsByClassName('filterNav')[0];


filterNav.style.visibility = 'hidden';
pageNav.style.visibility = 'hidden';
spinner.style.visibility = 'hidden';
let pageNum = null;
let perPage = 25;
let filter = null;
let currentBeers = null;
let sortSwitch = false;


let getBeerData = async url => {
    spinner.style.visibility = 'visible';
    await fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        displayBeer(createBeer(data));
        currentBeers = data;
        spinner.style.visibility = 'hidden';
    })
}


let displayBeer = array => {
    console.log(array);
    content.innerHTML = '';
    for(let i = 0; i < array.length; i++) {
        const {img, name, tagline} = array[i];

        let cardBox = document.createElement('div');
        cardBox.classList.add('card', 'border-secondary', 'text-bg-dark', 'h-100', 'text-center');
        content.appendChild(cardBox);
        cardBox.style.width = '18rem';
        cardBox.style.padding = '20px';

        if (img) {
            let cardImg = document.createElement('img');
            cardImg.classList.add('card-img-top');
            cardImg.style.height = '10rem';
            cardImg.style.width = '4rem';
            cardImg.style.marginLeft = '2rem'
            cardImg.src = img;
            cardBox.appendChild(cardImg);
        }

        let cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        let cardTitle = document.createElement('h5');
        cardTitle.classList.add('card-title');
        cardTitle.innerText = `${name}`;

        let cardText = document.createElement('p');
        cardText.classList.add('card-text');
        cardText.innerText = `${tagline}`;

        let cardBtn = document.createElement('a');
        cardBtn.classList.add('btn', 'btn-primary');
        cardBtn.addEventListener('click', () => {
            console.log('Card infoBtn clicked');
            moreBeerInfo(array[i]);
        })
        cardBtn.innerText = 'More details';
        let cardFooter = document.createElement('div');
        cardFooter.classList.add('card-footer', 'bg-transparent', 'border-info');

        cardFooter.appendChild(cardBtn);
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(cardFooter);
        cardBox.appendChild(cardBody);
    }

    pageNav.style.visibility = 'visible';
    filterNav.style.visibility = 'visible';
    prevBtn.style.visibility = 'visible';
    nextBtn.style.visibility = 'visible';
    if(pageNum > 12) {
        nextBtn.style.visibility = 'hidden';
    }
    if(pageNum < 2) {
        prevBtn.style.visibility = 'hidden';
    }
}

let moreBeerInfo = (object) => {
    content.innerHTML = '';
    const {name, img, description, tagline, brewed, abv, ibu, foodPairing} = object;
    console.log('Preparing beer info...');

    let cardBox = document.createElement('div');
    cardBox.classList.add('card', 'mb-3', 'text-bg-dark', 'border-warning');
    cardBox.style.width = '80rem';
    cardBox.style.maxHeight = '50rem';

    let cardRow = document.createElement('div');
    cardRow.classList.add('row', 'g-0');

    let imgFrame = document.createElement('div');
    imgFrame.classList.add('col-md-4', 'dark');
    imgFrame.style.padding = '3rem'

    let imgShow = document.createElement('img');
    imgShow.src = img;
    imgShow.style.maxHeight = '30rem';
    imgShow.classList.add('img-fluid', 'rounded-start');
    imgFrame.appendChild(imgShow);
    cardRow.appendChild(imgFrame);

    let cardBodyFrame = document.createElement('div');
    cardBodyFrame.style.padding = '1rem'
    cardBodyFrame.classList.add('col-md-8');

    let cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    
    let cardTitle = document.createElement('h4');
    cardTitle.style.display = 'inline';
    cardTitle.innerText = `${name} `;

    let cardHeader = document.createElement('div');

    cardHeader.style.display ='inline';
    cardHeader.classList.add('card-header');

    let cardTag = document.createElement('span');
    cardTag.style.marginLeft = '1rem';
    cardTag.innerText = ` ${tagline}`;

    cardHeader.appendChild(cardTitle);
    cardHeader.appendChild(cardTag);

    let cardText = document.createElement('p');
    cardText.style.marginTop = '2rem'
    cardText.style.textAlign = 'justify'
    cardText.innerText = description;

    let cardBrewed = document.createElement('p');
    cardBrewed.style.marginTop = '1.5rem'
    cardBrewed.innerText = `Brewed: ${brewed}`;

    let cardAbv = document.createElement('p'); 
    cardAbv.innerText = `alcohol: ${abv}%`;

    let cardIbu = document.createElement('p'); 
    cardIbu.innerText = `Bitterness: ${ibu} IBU`;

    let foodCombo = document.createElement('h5');
    foodCombo.style.marginTop = '2rem'
    foodCombo.style.fontWeight = 'bold'
    foodCombo.innerText = 'Food Pairing';

    let cardList = document.createElement('ul');
    cardList.classList.add('list-group', 'list-group-flush');


    for(let i = 0; i < foodPairing.length; i++) {
        let pair = document.createElement('li');
        pair.classList.add('list-group-item');
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

    pageNav.style.visibility = 'hidden';
    filterNav.style.visibility = 'hidden';
}

function Beer (object) {
    this.name = object.name,
    this.img = object.image_url,
    this.description = object.description,
    this.tagline = object.tagline,
    this.brewed = object.first_brewed,
    this.abv = object.abv,
    this.ibu = object.ibu,
    this.foodPairing = object.food_pairing
}

let createBeer = array => {
    let data = [...array];
    let beers = [];
    for(let i = 0; i < data.length; i++) {
        let beer = new Beer(data[i]);
        beers.push(beer);
    }
    return beers;
}


let getRandomBeer = () => {
    console.clear();
    console.log('Random beer clicked');
    getBeerData('https://api.punkapi.com/v2/beers/random');

    filterNav.style.visibility = 'hidden';
    pageNav.style.visibility = 'hidden';
}

let getBeers = () => {
    console.clear();
    console.log('Beers clicked');
    pageNum = 1;
    getBeerData(`https://api.punkapi.com/v2/beers?page=1&per_page=${perPage}`);
}

let pageFilterBy = filter => {

}

randomBeer.addEventListener('click', getRandomBeer);
beers.addEventListener('click', getBeers)

let sendNext = () => {
    if(pageNum) {
        pageNum += 1;
        console.clear();
        console.log(`Going to page ${pageNum}`);
        getBeerData(`https://api.punkapi.com/v2/beers?page=${pageNum}&per_page=${perPage}`);
    }
}
let sendPrev = () => {
    if(pageNum > 1) {
        pageNum -= 1;
        console.clear();
        console.log(`Going to page ${pageNum}`);
        getBeerData(`https://api.punkapi.com/v2/beers?page=${pageNum}&per_page=${perPage}`);
    }
}

let sortBeerBy = (filter) => {
    if(currentBeers) {
        let beersCopy = [...currentBeers];
        if(sortSwitch) {
            let sortedBeers = beersCopy.sort((beer1, beer2) => {
                if (filter === 'name') {
                    return beer1.name.length - beer2.name.length;
                } else {
                    return beer1[filter] - beer2[filter];
                }
            });
            console.log(sortedBeers);
            displayBeer(createBeer(sortedBeers));
            sortSwitch = false;
            return;
        }
        let sortedBeers = beersCopy.sort((beer1, beer2) => {
            if (filter === 'name') {
                return beer2.name.length - beer1.name.length;
            } else {
                return beer2[filter] - beer1[filter];
            }
        });
        console.log(sortedBeers);
        displayBeer(createBeer(sortedBeers));
        sortSwitch = true;
    }
}

let sortedNames = () => sortBeerBy('name');
let sortedAlc = () => sortBeerBy('abv');
let sortedIbu = () => sortBeerBy('ibu');
let sortedBrewed = () => {
    
}

let setPerPage = num => {
    perPage = num;
    getBeerData(`https://api.punkapi.com/v2/beers?page=${pageNum}&per_page=${perPage}`);
}
let sorted5 = () => setPerPage(5);
let sorted10 = () => setPerPage(10);
let sorted20 = () => setPerPage(20);
let sorted25 = () => setPerPage(25);

let searchName = () => {
    let input = searchField.value;
    if(input) {
        getBeerData(`https://api.punkapi.com/v2/beers?beer_name=${input}&per_page=${perPage}`);
        searchField.value = '';
        return;
    }
    alert('No input!');
}

searchBtn.addEventListener('click', searchName)
nextBtn.addEventListener('click', sendNext)
prevBtn.addEventListener('click', sendPrev)
sortName.addEventListener('click', sortedNames)
sortAlc.addEventListener('click', sortedAlc)
sortBrewed.addEventListener('click', sortedBrewed)
sortIbu.addEventListener('click', sortedIbu)
sort5.addEventListener('click', sorted5)
sort10.addEventListener('click', sorted10)
sort20.addEventListener('click', sorted20)
sort25.addEventListener('click', sorted25)