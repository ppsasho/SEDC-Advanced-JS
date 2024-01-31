// 'use strict';
let body = document.getElementsByTagName('body')[0].style.backgroundColor = '#4287f5';

function successfulCallback(data) {
    console.log('Resource found!');
    console.log(data);
}

function failureCallback(error) {
    console.log('Resource not found!', error);
}

function fetchResource(url, successfulCallback, failureCallback) {
    fetch(url
        ).then(response => response.json()
        ).then(data => {
            successfulCallback(data);
        }
        ).catch(error => failureCallback(error))
}

// fetchResource('https://jsonplaceholder.typicode.com/users', 
// users =>{console.log('Users found!', users);
//         fetchResource('https://jsonplaceholder.typicode.com/todos', todos => {
//             // console.log('Todos:', todos);
//             fetchResource('https://jsonplaceholder.typicode.com/posts', posts => {
//                 // console.log('Posts found', posts);
//             })
// })}, failureCallback);


// Promises

// const randomNumberPromise = new Promise((resolved, reject) => {
//     const num = Math.random();
//     if(num >= 0.5) {
//         console.log(num);
//         resolved('Promise is fulfilled!');
//     } else {
//         reject('Promise failed');
//     }

// }) 

// function handleResolved(value) {
//     console.log(value);
// }

// function handleReject(reason) {
//     console.error(reason);
// }

// randomNumberPromise.then(handleResolved, handleReject);


// Handling promises with fetch

function getStarWarsPeople() {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: 'https://swapi.dev/api/people',
            success: (response) => {
                resolve(response);
            },
            error: (err) => {
                reject(err);
            }
        })
    })
}

const getStarWarsPeoplePromise = getStarWarsPeople();
// console.log(getStarWarsPeoplePromise);


// getStarWarsPeople()
// .then(data => {
//     let maleCharacters = data.results.filter(char => char.gender === 'male');
//     console.log(maleCharacters);
//     return maleCharacters;
// })
// .then(maleCharacters => {
//     // debugger;
//     const maleCharNames = maleCharacters.map(char => char.name);
//     console.log(maleCharNames);
//     return maleCharNames;
// })
// .catch(error => console.log('Something happened', error));


// Handling promises with fetch

// fetchCountryInfo = countryCode => {
//     fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`)
//     .then (response => {
//         if(!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         return response.json();
//     })
//     .then(data => {
//         console.log(`Country info: `, data);
//         return data;
//     })
//     .then(data => {
//         let countryName = data[0].name.common;
//         console.log(countryName);
//         return countryName;
//     })
//     .catch(error => {
//         console.log(`Error found!`, error);
//     })
// }

// fetchCountryInfo('MK');


async function fetchCountryInfoAsync (countryCode) {
    let url = `https://restcountries.com/v3.1/alpha/${countryCode}`
    let response = await fetch(url);
    console.log(response);
    if(!response.ok) {
        console.log('HTTP error! Status:', response.status);
    }
    let data = await response.json();
    console.log(data);
    return data;
}

let result = fetchCountryInfoAsync('MK');
result.then(data => {
    let countryName = data[0].name.common;
    console.log(countryName);
    return countryName;
})
.catch(error => {
    console.log('Error!', error);
})
.finally(() => console.log('From finally block!!'));
console.log(result);