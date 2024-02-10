let body = document.getElementsByTagName('body')[0];
body.style.backgroundColor = '#121212'
body.style.color = 'rgba(255,255,255,0.75)'; 
body
let nums1 = [1, 2, 3, 4];
let nums2 = [5, 6, 7];
let nums3 = [...nums1, ...nums2];

let colours = ['red', [128, 135, 70], '#F11222'];
let [name, [r, g ,b], hex] = colours;
// console.log(name, [r,g,b], hex);