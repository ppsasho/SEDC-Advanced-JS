// let color = prompt("Enter a color");
// let fontSize = prompt("Enter font size");
// let text = prompt("Enter your title");
let color = document.getElementById("color");
let title = document.getElementById("title");
let fontSize = document.getElementById("fontSize");
console.log(color, title, fontSize);

let content = document.getElementById("content");
let titleElement = content.getElementsByTagName("h1")[0];

let btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  titleElement.innerHTML += `<h1 style="color: ${color.value}; font-size: ${fontSize.value};">${title.value}</h1>`;

  color.innerHTML = "";
  title.innerHTML = "";
  fontSize.innerHTML = "";
  color.value = "";
  title.value = "";
  fontSize.value = "";
});
