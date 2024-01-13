let body = document.querySelector("body");
let btn = document.getElementById("btn");
let div = document.querySelector("div");
let min = 0;
let max = 255;

let red = 255;
let green = 255;
let blue = 255;
function randomNumber() {
  red = Math.floor(Math.random() * (max - min) + min);
  green = Math.floor(Math.random() * (max - min) + min);
  blue = Math.floor(Math.random() * (max - min) + min);
}

randomNumber();
body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
body.style.display = "flex";
body.style.alignItems = "center";
console.log(body);
btn.addEventListener("click", function () {
  location.reload();
});

div.innerHTML = `${red} ${green} ${blue}`;
