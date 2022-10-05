/* ==== JavaScript DOM Nodes ==== */

// use document createTextNode() method:--------- 

const para = document.createElement('p');

const text = document.createTextNode('Hello Sarukh Kahn');
para.appendChild(text);

const parentDiv1 = document.getElementById('demo1');
parentDiv1.appendChild(para);
console.log('------------------ X ------------------');


// use insertBefore(newElem, beforeElem) method:--------
const para2 = document.createElement('p');
const text2 = document.createTextNode('Hello Dipika');
para2.appendChild(text2);

const p3 = document.querySelector('.p4');

const parentDiv2 = document.getElementById('demo2');
parentDiv2.insertBefore(para2, p3);
console.log('------------------ X ------------------');


// use document remove() method. This is do not support all  :--------
const p5 = document.querySelector('.p5');
p5.remove();
console.log('------------------ X ------------------');


// use document removeChild(elem) method:--------
const parentDiv3 = document.getElementById('demo4');
const p8 = document.querySelector('.p8');

parentDiv3.removeChild(p8);
console.log('------------------ X ------------------');


// use document replaceChild(newElem, replaceElem) method:--------
const newElem = document.createElement('p');
const text3 = document.createTextNode('Hello Sonia Khan');
newElem.appendChild(text3);

const p10 = document.querySelector('.p10');

const demo5 = document.getElementById('demo5');
demo5.replaceChild(newElem, p10);
console.log('------------------ X ------------------');