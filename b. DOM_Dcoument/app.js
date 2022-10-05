/* -------------- javaScript DOM Document -------------- */



/* ======== finding html element ======== */



// use document object method getElementById('isName'). This is return a single html element:---
const demo1 = document.getElementById('demo1');
demo1.innerHTML = 'Demo1';


// use document object method getElementsByClassName(). This is return a array and multiple html element:---
const demo2 = document.getElementsByClassName('demo2')
Array.from(demo2).forEach(function (element) {
    element.style.color = 'red';
});


// use document object method getElementsByTagName('htmlTagName'). This return same html tags in an array:---
const allH4 = document.getElementsByTagName('h4');
for (let element of allH4) {

    element.textContent = 'Test - ' + (1 + Array.from(allH4).indexOf(element));
    element.style.color = 'green';

}



/* ======== Changing Html Element ======== */



// use document innerHTML property:---
const addInnerHtml = document.getElementById('add-text');
addInnerHtml.innerHTML = 'Hello my good friend';


// use document object attribute property:---
const demo3 = document.getElementById('demo3');
demo3.className = 'h3';


// use document style object:---
const h1 = document.getElementsByTagName('h1');
h1[0].style.background = 'green';


// use document method setAttribute('attribute', 'attributeValue'):---
const h6 = document.getElementsByTagName('h6');
h6[0].setAttribute('class', 'addClass');



/* ======== Adding and Deleting elements ======== */



// use document createElement('htmlTagName') method:---
const createNewElement = document.createElement('h1');
createNewElement.innerText = 'Create Element.'


// use document appendChild('createElementVariableName') method:---
const addElement = document.getElementById('add-element');
addElement.appendChild(createNewElement);


// use document method removeChild():---
const parentDiv = document.getElementById('parent-div');

/* -- first type removeChild() document method use -- */
const removeDiv = document.getElementById('remove-child');
parentDiv.removeChild(removeDiv);

/* -- second type removeChild() document method use -- */
const removeDivTwo = document.getElementById('remove-child-tow');
removeDivTwo.parentNode.removeChild(removeDivTwo);


// use document method replaceChild():---
/* -- old element; -- */
const oldElement = document.getElementById('child-addElement');

/* -- create new element; -- */
const newElementTwo = document.createElement('div')

/* -- create element; -- */
const h1Elem = document.createElement('h1');
h1Elem.innerText = 'My new element';

/* -- h1Elm append child; -- */
newElementTwo.appendChild(h1Elem);

/* -- get parent-element; -- */
const getParentElement = document.getElementById('parent-addElement');

/* -- replace new element and remove element; -- */
getParentElement.replaceChild(newElementTwo, oldElement);


// use document method write():---
const writeMethod = document.getElementById('writeMethod');



/* ======== Adding events Handler ======== */



// use document method onclick() handler:---
const btn = document.getElementById('button');

const getShowTextDiv = document.getElementById('button-click-show');

btn.onclick = function () {
    getShowTextDiv.innerText = 'Hay Hay, why are you click my bell btn?';
}


