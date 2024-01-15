console.log("YOOOOO");
let body = document.querySelector("body");
body.style.backgroundColor = "#626f85";
body.style.color = "white";
let students = document.getElementById("students");
let astros = document.getElementById("astros");

let myJson = `{
    "trainer": "Trainer Name",
    "assistant": "Assistant Name",
    "students": [
        "Bob",
        "Samantha",
        "Chris",
        "Jill",
        "Greg"
],
    "academy": "Code"
}`;

let myJson2 = {
  trainer: "Trainer Name",
  assistant: "Assistant Name",
  students: ["Bob", "Samantha", "Chris", "Jill", "Greg"],
  academy: "Code",
};

console.log(myJson);
console.log("");
console.log(myJson2);

// Converting JSON to JS object
let parsedJson = JSON.parse(myJson);
console.log(parsedJson);

console.log("");

// Converting object to JSON
let jsonString = JSON.stringify(myJson2);
console.log(jsonString);

console.log("");
console.log("Seeing all data types");
console.log(typeof myJson);
console.log(typeof myJson2);
console.log(typeof parsedJson);
console.log(typeof jsonString);
console.log(parsedJson.students[0]);
// console.log(myJson.students[0]);  Can't access string..yeah

console.log("================================================");

let btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  fetch(
    "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students.json"
  )
    .then(function (response) {
      console.log(response);
      //   .json auto converts the json response to a js object
      return response.json();
    })
    // Logikata so podatocite sto ke gi dobieme
    .then(function (response) {
      console.log("request successful");
      console.log(response);

      let responseBackToJSON = JSON.stringify(response);
      console.log(responseBackToJSON);
      console.table(response);

      students.innerHTML = response.students;
    })
    // Where the error is caught
    .catch(function (response) {
      console.log("The request has failed:" + response.status);
      console.log(response.responseText);
    });
});

btn.addEventListener("click", function () {
  fetch("https://api.open-notify.org/astros.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log("astros call successful!");
      console.log(response);
      astros.innerHTML = "";
      for (let i = 0; i < response.people.length; i++) {
        astros.innerHTML += `<li>${response.people[i].name}</li>`;
      }
    })
    .catch(function (response) {
      console.log("The request has failed: " + response.status);
    });
});
