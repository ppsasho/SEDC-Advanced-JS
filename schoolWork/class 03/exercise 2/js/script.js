let body = document.querySelector("body");
body.style.backgroundColor = "#626f85";
body.style.color = "white";
let callBtn = document.getElementById("callBtn");
let result = document.getElementById("result");
let resultTitle = result.getElementsByTagName("h1")[0];
let resultList = result.getElementsByTagName("ul")[0];

function processResult(response) {} // Maybe

function printAcademy(academy) {
  resultTitle.innerText = `${academy.academy}`;
}

function printStudents(students) {
  resultList.innerHTML = "";
  for (let student of students.students) {
    resultList.innerHTML += `<li>${student}</li>`;
  }
}

callBtn.addEventListener("click", function () {
  fetch(
    "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students.json"
  )
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (response) {
      console.log("Response from good way!");
      console.table(response);
      printAcademy(response);
      printStudents(response);
    })
    .catch(function (error) {
      console.log("There was an error!");
      console.log(error);
    });
});

// Hardcoded event listener function
// callBtn.addEventListener("click", function () {
//   fetch(
//     "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students.json"
//   )
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (response) {
//       console.table(response);
//       console.log("Successful response!!");

//       resultTitle.innerText = `${response.academy} Academy`;
//       resultList.innerHTML = "";
//       for (student of response.students) {
//         resultList.innerHTML += `<li>${student}</li>`;
//       }
//     })
//     .catch(function (error) {
//       console.log(`Error! ${error}`);
//       console.log(error);
//     });
// });
