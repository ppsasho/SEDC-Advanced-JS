let text = document.querySelector('input');
let btn = document.querySelector('button');
let content = document.querySelector('div');


let vowelCounter = string => {
    if (!string) {
        alert('No input!');
    } else {
        let counter = 0;
        for (let i = 0; i < string.length; i++) {
            if (
                string[i] === 'a' ||
                string[i] === 'e' ||
                string[i] === 'i' ||
                string[i] === 'o' ||
                string[i] === 'u' 
                ) {
                    counter++;
                }
        }
        return counter;
    }
}

let displayVowels = input => content.innerText = `There is ${vowelCounter(input)} vowels in the input.`;

btn.addEventListener('click', () => {
    displayVowels(text.value);
})