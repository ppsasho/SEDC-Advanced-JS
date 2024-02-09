let content = document.getElementById('content');
let beers = document.getElementById('beers');
let randomBeer = document.getElementById('random-beer');
let spinner = document.getElementById('spinner');

spinner.style.visibility = 'hidden';

async function getBeerData (url) {
    spinner.style.visibility = 'visible';
    await fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        displayBeer(createBeer(data));
        spinner.style.visibility = 'hidden';
    })
}


let displayBeer = array => {
    console.log(array);
    content.innerHTML = '';
    for(let i = 0; i < array.length; i++) {
        let cardBox = document.createElement('div');
        cardBox.classList.add('card', 'border-dark', 'text-bg-dark', 'h-100'); // 'text-bg-secondary'
        // cardBox.style.backgroundColor = '#1f1e1e';
        content.appendChild(cardBox);
        cardBox.style.width = '18rem';
        cardBox.style.padding = '20px';
        let cardImg = document.createElement('img');
        cardImg.classList.add('card-img-top');
        cardImg.style.height = '10rem';
        cardImg.style.width = '4rem';
        cardImg.style.marginLeft = '2rem'
        cardImg.src = array[i].img;
        cardBox.appendChild(cardImg);
        let cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        let cardTitle = document.createElement('h5');
        cardTitle.classList.add('card-title');
        cardTitle.innerText = `${array[i].name}`;
        let cardText = document.createElement('p');
        cardText.classList.add('card-text');
        cardText.innerText = `${array[i].tagline}`;
        let cardBtn = document.createElement('a');
        cardBtn.classList.add('btn', 'btn-primary');
        cardBtn.addEventListener('click', () => {
            console.log('Card infoBtn clicked');
        })
        cardBtn.innerText = 'More details';
        let cardFooter = document.createElement('div');
        cardFooter.classList.add('card-footer', 'bg-transparent', 'border-info')
        cardFooter.appendChild(cardBtn);
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(cardFooter);
        console.log(cardBody);
        cardBox.appendChild(cardBody);
        console.log(cardBox);
    }
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

randomBeer.addEventListener('click', () => {
    console.clear();
    console.log('Random beer clicked');
    getBeerData('https://api.punkapi.com/v2/beers/random');
})

beers.addEventListener('click', () => {
    console.clear();
    console.log('Beers clicked');
    getBeerData('https://api.punkapi.com/v2/beers');
})