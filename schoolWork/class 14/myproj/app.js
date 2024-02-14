// import FileSys from "fs";
const FileSys = require("fs");

// Display all the files inside a directory
// Sync operation
let content = FileSys.readdirSync("./");
console.log(content);

const fileName = "very coooool file.txt";
let text = "Hello from my very cool file!!!";
// fileName.content = text;
// Async operation
FileSys.writeFile(fileName, text, function (err) {
  err
    ? console.log("error while writing to file", err)
    : console.log("File has been written successfully AKA ur good bro");
});

FileSys.readFile(fileName, "utf-8", function (err, data) {
  err
    ? console.log("error while writing to file", err)
    : console.log("Here bro", `\n${data}`);
});
