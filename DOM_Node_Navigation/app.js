/* ==== JavaScript DOM Node Navigation ==== */


// use parentNode property and check parent node:--------
const childNODE = document.querySelector('.demo1');


const parentNODE = childNODE.parentNode;
console.log(parentNODE);  // return childNode parent;

const grandParentNODE = childNODE.parentNode.parentNode;
console.log(grandParentNODE);  // return childNode parent parent;
console.log("------------------ X ------------------");  // return childNode parent parent;


// use childNodes property and check child node:--------
const parentNodeDemo2 = document.getElementById('demo2');

const childNodeDemo2 = parentNodeDemo2.childNodes;
console.log(childNodeDemo2);

// access childNode to childNode;
const childNodeDemo3 = parentNodeDemo2.childNodes[1].childNodes[1];
console.log(childNodeDemo3);
console.log("------------------ X ------------------");  // return childNode parent parent;


// use firstChild node property :--------
const parentNodeDemo3 = document.getElementById('demo3');

const childNodeDemo4 = parentNodeDemo3.firstChild;
console.dir(childNodeDemo4); // return text. because firstChild is text.;
console.log("------------------ X ------------------");


// use lastChild node property:--------
const demo4 = document.getElementById('demo4');

const lastChildElem = demo4.lastChild;
console.log(lastChildElem);  // return text. because lastChild is text;
console.log("------------------ X ------------------");


// use nextSibling node property:--------
const demo5 = document.getElementById('demo5');

const nextSiblingNode = demo5.firstChild.nextSibling;
console.log(nextSiblingNode);
console.log("------------------ X ------------------");


// use previousSibling node property:--------
const demo6 = document.getElementById('demo6');


