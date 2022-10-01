/* ==== HTML DOM ==== */

// use document object property innerHTML:----
const demo1 = document.querySelector('.demo1');
demo1.innerHTML = 'Use innerHTML.';


// use document object property innerText:----
const demo2 = document.querySelector('.demo2');
demo2.innerText = 'Use innerText.';


// use document object property textContent:----
const demo3 = document.querySelector('.demo3');
demo3.textContent = 'Use textContent.';


// use document objet property attribute:----
const demo4 = document.querySelector('.demo4');
demo4.className = 'Use attribute.';


// use document object property style:----
const demo5 = document.querySelector('.demo5');
demo5.style.color = 'red';


// use document object method setAttribute('attr', 'value'):---- 
const demo6 = document.querySelector('.demo6');
demo6.setAttribute('id', 'set-attribute');


// use document object method createElement('element'):----
const elementCreate = document.createElement('p');
elementCreate.innerText = "Use createElement('elementCreate') & appendChild('element').";


// use document object method appendChild('element'):----
const demo7 = document.querySelector('.demo7');
demo7.appendChild(elementCreate);


// use document object method removeChild('element'):----
const demo8 = document.querySelector('.demo8'); // parent.
const deleteData = document.querySelector('.delete-data'); // child. 

demo8.removeChild(deleteData); // delete child data.


// use document object method replaceChild('newElm', 'oldElm'):----
const demo9 = document.querySelector('.demo9'); // parent.

const newElem = document.createElement('p'); // new element.
newElem.innerHTML = "Use replaceChild('newElm', 'oldElm')."; // add new element data.

const oldData = document.querySelector('.old-data'); // get old-data.

demo9.replaceChild(newElem, oldData);  // add newElement & remove newElement.








