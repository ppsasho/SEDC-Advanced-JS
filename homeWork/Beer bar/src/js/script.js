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
        cardBox.classList.add('card', 'border-dark', 'text-bg-dark', 'h-100', 'text-center');
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
            moreBeerInfo({name, image_url, description, tagline, first_brewed, abv, ibu, food_pairing} = array[i]);
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

/*<div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="..." class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div> */

let moreBeerInfo = (name, img, desc, tag, brewed, abv, ibu, food) => {
    content.innerHTML = '';
    // console.log(name, img, desc, tag, brewed, abv, ibu, food);
    let cardBox = document.createElement('div');
    cardBox.classList.add('card', 'mb-3');
    cardBox.style.maxWidth = '20rem';

    let cardRow = document.createElement('div');
    cardRow.classList.add('row', 'g-0');

    let imgFrame = document.createElement('div');
    imgFrame.classList.add('col-md-4');

    let imgShow = document.createElement('img');
    imgShow.src = img;
    imgShow.classList.add('img-fluid', 'rounded-start');
    imgFrame.appendChild(imgShow);
    imgFrame.appendChild(cardRow);

    let cardBodyFrame = document.createElement('div'); // Inside cardRow
    cardBodyFrame.classList.add('col-md-8');

    let cardBody = document.createElement('div'); // Inside cardBodyFrame
    cardBody.classList.add('card-body');

    let cardHeader = document.createElement('div'); // Inside cardBody
    cardHeader.style.display ='inline';
    cardHeader.classList.add('card-header', 'card-title');
    cardHeader.innerText = name;

    let cardTag = document.createElement('span'); // Inside cardBody
    cardTag.innerText = tag;

    cardHeader.appendChild(cardTag);

    let cardText = document.createElement('p'); // Inside cardBody
    cardText.innerText = desc;

    let cardBrewed = document.createElement('p'); // Inside cardBody
    cardBrewed.innerText = `Brewed: ${brewed}`;

    let cardAbv = document.createElement('p'); // Inside cardBody
    cardAbv.innerText = `alcohol: ${abv}`;

    let cardIbu = document.createElement('p'); // Inside cardBody
    cardIbu.innerText = `Bitterness: ${ibu}`;

    let cardList = document.createElement('ul'); // Inside cardBody
    cardList.classList.add('list-group', 'list-group-flush');


    for(let i = 0; i < food.length; i++) {
        let pair = document.createElement('li');
        pair.classList.add('list-group-item');
        cardList.appendChild(pair);
    }

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