let text = document.getElementById('searchField');
let content = document.getElementById('content');
let btn = document.querySelector('button');
let body = document.querySelector('body').style.backgroundColor = '#2d3f2a';

let movies = [
    'oppenheimer',
    'barbie',
    'john wick',
    'past lives',
    'mission impossible',
    'spider-man'
];

function searchMovie() {
    let counter = 0;
    if (text.value === '') {
        alert('Please enter a movie name first');
    }
    else {
        let name = text.value;
        name = name.toLowerCase();
        console.log(name);
        
        for(let movie of movies) {
            if (name === movie) {
                counter++;
            }
        }

        if (counter > 0) {
                content.innerHTML = '<h1 style="color: green;">The movie can be rented</h1>'
        } else {
                content.innerHTML = '<h1 style="color: red;">The movie can\'t be rented</h1>'
        }
        text.value = '';
    }
}

btn.addEventListener('click', function() {
    searchMovie();
})