let text = document.getElementById('text');
let btn = document.querySelector('button');
let content = document.querySelector('div');

let str = 'hello from qinshift academy';

let reverseText = string => {
    if (!string) {
        alert('No input!');
    }
        let newText = '';
        let array = string.split(' ');
    
        for (let el of array) {
            let newWord = '';
    
            for (let i = el.length; i > 0; i--) {
                if (i === 0) {
                    break;
                }
            newWord += el[i - 1];
        }
    
        console.log(`word: ${newWord}`);
        console.log(' ');
        newText += `${newWord} `;
        console.log(`text: ${newText}`);
    }
    return newText;
}

let displayText = input => content.innerText = reverseText(input.value);

let reversedText = reverseText(str);
console.log(reversedText);

btn.addEventListener('click', () => {
    displayText(text);
    text.value = ''
})

