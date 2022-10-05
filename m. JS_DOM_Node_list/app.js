/* ==== JavaScript DOM Node list ==== */


// use querySelectorAll() method use tagName. And get NodeList:--------
const demo1 = document.querySelector('#demo1');
const nodeList = demo1.querySelectorAll('p');

console.log(nodeList); // return a NodeList;

/*NodeList node element access in 1 type*/
console.log(nodeList[1]); // return 1st node
console.log('------------ X ------------');


const demo2 = document.getElementById('demo2');

const nodeList2 = demo2.childNodes;

console.log(nodeList2); // return a NodeList;

/*NodeList node element access in 1 type*/
console.log(nodeList2[1]);
console.log('------------ X ------------');





