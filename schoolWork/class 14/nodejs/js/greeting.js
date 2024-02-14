export { words, getRandomWord };
let words = {
  helloVariants: ["Hi", "Hello", "Hey", "What's up?"],
  goodbyeVariants: ["Bye", "Cya", "Goodbye!"],
};

function getRandomWord(wordsArray) {
  return wordsArray[Math.round(Math.random() * wordsArray.length - 1)];
}
