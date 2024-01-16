let title = document.getElementById('title');
let table = document.getElementById('table');
let btn = document.querySelector('button');

table.style.visibility = 'hidden';

function printStarWarsMan() {
    table.style.visibility = 'visible';
    table.innerHTML = '';
    
    fetch('https://swapi.dev/api/people/1'
    ).then(function (response) {
        return response.json();
    }).then(function (json) {
        console.table(json);

        title.innerText = json.name;

        let tableRow = table.insertRow(0);

        let height = tableRow.insertCell(0);
        height.innerText = `Height: ${json.height}`;

        let weight = tableRow.insertCell(1);
        weight.innerText = `Weight: ${json.mass}`;

        let eyeColor = tableRow.insertCell(2);
        eyeColor.innerText = `Eye color: ${json.eye_color}`;

        let hairColor = tableRow.insertCell(3);
        hairColor.innerText = `Hair color: ${json.hair_color}`;
    }).catch(function (error) {
        console.log('There was an error!!');
        console.log(error);
    })
}

btn.addEventListener('click', function() {
    printStarWarsMan();
})