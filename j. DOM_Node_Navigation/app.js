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

// access childNode to childNode. use node index number. looks like array;
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

const previousSiblingNode = demo6.lastChild.previousSibling;
console.log(previousSiblingNode);
console.log("------------------ X ------------------");


// use document documentElement property:--------
const htmlAll = document.documentElement;
console.log(htmlAll);
console.log("------------------ X ------------------");


// use document body property:--------
const body = document.body;
console.log(body); // return body element;
console.log("------------------ X ------------------");


// use nodeValue property. Get node data:--------
const demo7 = document.getElementById('demo7');

const nodeValueNode = demo7.childNodes[1].childNodes[0].nodeValue;
console.log(nodeValueNode);
console.log("------------------ X ------------------");


// use nodeName property. Get node name:--------
const demo8 = document.getElementById('demo8');

const nodeNameNode = demo8.childNodes[1].nodeName;
console.log(nodeNameNode);  // return element name 'p';
console.log("------------------ X ------------------");


const nodeNameNode2 = demo8.childNodes[1].nodeElement;
console.log(nodeNameNode2);
console.log("------------------ X ------------------");

