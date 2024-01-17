let body = document.querySelector('body').style.backgroundColor = '#73bdac';

function getStudentName(firstName, lastName) {
    return `The full name is: ${firstName} ${lastName}`
}

let getFullName = getStudentName('Chad', 'Chadsky');
console.log(getFullName);


function getStudentDetails(firstName = 'defaultLastName', lastName = 'exampleLastName', academy = 'default academy') {
    return `The student ${getStudentName(firstName, lastName)} attends the academy ${academy}.`
}

let getStudentAcademy = getStudentDetails('Chad', 'Chadsky','military academy');
console.log(getStudentAcademy);
console.clear(); // Comment to see code results in console.
