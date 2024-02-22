// Exercise 1

let getData = (dataSrc) => {
    fetch(dataSrc
        ).then((result) => result.json()
        ).then((result) => {
            console.log(result);

            getAvarageStuff(result);
            return result;
        })
}


let getAvarageStuff = students => {
    let copyObject = [...students];

    let resultStudents = copyObject.filter(student => student.averageGrade > 3);
    console.log('Avg grade 3:');
    console.log(resultStudents);

    let femaleNamesWith5 = copyObject.filter(student => student.gender === 'Female' && student.averageGrade === 5);
    console.log('Female avgGrade 5:');
    console.log(femaleNamesWith5);

    let allMaleStudents18 = copyObject.filter(student => student.gender === 'Male' && student.age > 18 && student.city === 'Skopje');
    console.log('Male students over 18:');
    console.log(allMaleStudents18);


    let findFem24Grade = copyObject.filter(student => student.age >= 24 && student.gender === 'Female');
    let femArray = findFem24Grade.map(student => student.averageGrade);
    console.log('Grades of female students over 24');
    console.log(femArray);

    let allMaleStudentsB2 = copyObject.filter(student => 
        student.averageGrade >= 2 &&
        student.firstName.includes('B') &&
        student.gender === 'Male');
    console.log(allMaleStudentsB2);

    let allFemMails = copyObject.filter(student => 
        student.gender === 'Female' &&
        student.age >=20 && student.age <= 30);
    let femArray2 = allFemMails.map(student => student.email).sort((mail1, mail2) => mail1 - mail2);
    console.log(femArray2);

    let studentFullNames = copyObject.filter(student => student.age > 40)
    .map(student => full = `${student.firstName} ${student.lastName}`).sort((first, second) => second - first);
    console.log(studentFullNames);

    let countGmail = copyObject.filter(student => student.email.includes('google'));
    console.log(countGmail.length);

    let avgFem = copyObject.filter(student => 
        student.gender === 'Female' &&
        student.city === 'Skopje'
    ).map(student => student.age);
    let avgFemAge = avgFem.reduce((acc, curr) => acc + curr, 0);
    avgFemAge /= avgFem.length;
    console.log(Math.round(avgFemAge));
}

getData('https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json');