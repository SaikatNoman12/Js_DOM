/* ==== JavaScript HTMLCollection ==== */


// use document getElementsByClassName() method. And get js HTMLCollection:--------
const htmlCollection = document.getElementsByClassName('demo1');

console.log(htmlCollection); // return a htmlCOllection;

// HTMLCollection list element access in 3 types; 
console.log(htmlCollection[0]);
console.log(htmlCollection['hello2']);
console.log(htmlCollection['hello3']);
console.log('------------- X -------------');



// use document getElementsByTagName() method. And get js HTMLCollection:--------
const per = document.getElementById('demo2');

const htmlCollection2 = per.getElementsByTagName('p');

console.log(htmlCollection2);  // return a htmlCOllection;

// HTMLCollection list element access in 3 types; 
console.log(htmlCollection2[0]);
console.log(htmlCollection2['hello5']);
console.log(htmlCollection2['hello6']);
console.log('------------- X -------------');


