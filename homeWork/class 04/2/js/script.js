let text = document.getElementsByTagName('h1')[1];
let btn = document.getElementById('btn');
let color = document.getElementById('color');
let size = document.getElementById('size');

let changeColor = (el, color) => {
    if(!color.value) {
        console.log('Missing color!');
        el.style.color = 'black';
    } 
    el.style.color = color.value;
    color.value = ''
}

let changeSize = (el, size) => {
    if(!size.value) {
        console.log('Missing size!');
        el.style.fontSize = '24px';
    }
    el.style.fontSize = `${size.value}px`;
    size.value = ''
}

btn.addEventListener('click', () => {
    changeColor(text, color),changeSize(text, size);
})
