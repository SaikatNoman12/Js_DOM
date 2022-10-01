/* /* === DOM element === */

// use document object method getElementById("idName"):----
const getDemoId = document.getElementById('demo');
getDemoId.innerText = 'Hello my gorgeous friend.';


// use document object method getElementsByClassName("className"):----
const getClass = document.getElementsByClassName('para');
Array.from(getClass).forEach((element) => {
    element.textContent = 'Hello my friend ' + (Array.from(getClass).indexOf(element) + 1);
});


// use document object method getElementsByTagName("tagName"):----
const getElements = document.getElementsByTagName('h2');
for (let getElement of getElements) {
    getElement.innerHTML = 'Hello my beautiful friend ' + (Array.from(getElements).indexOf(getElement) + 1);
}


// use document object method querySelector('.className/#idName'):--
const getQueryClass = document.querySelector('.queryClass');
getQueryClass.style.background = 'green';

const getQueryId = document.querySelector('#queryId');
getQueryId.style.background = 'red';


// use document object property documentElement:----
console.log("-----------------document.documentElement-----------------");
console.log(document.documentElement);


// use document object property head:----
console.log("-----------------document.head-----------------");
console.log(document.head);


// use document object property body:----
console.log("-----------------document.body-----------------");
console.log(document.body);


// use document object property title:----
console.log("-----------------document.title-----------------");
console.log(document.title);



// use document object forms property:----
const getForms = document.forms['myForm'];
const formTextShow = document.querySelector('.formTextShow');
let text = "";

/**show default**/
for (let i = 0; i < getForms.length; i++) {
    text += getForms[i].value + "<br>";
}
formTextShow.innerHTML = text;

/**show dynamically**/
getForms[getForms.length - 1].addEventListener('click', function () {
    text = "";
    for (let i = 0; i < getForms.length; i++) {
        text += getForms[i].value + "<br>";
    }
    formTextShow.innerHTML = text;
});



// use document object property anchor:----
console.log("-----------------document.anchors-----------------");;
const allAnchor = document.anchors;
document.querySelector('#totalAnchor').textContent = "Total anchor: " + allAnchor.length;
console.log(allAnchor);


// use document object property links:---
console.log("-----------------document.links-----------------");
console.log(document.links);


// use document object property embeds. use for embed html tag:----
console.log("-----------------document.embeds-----------------");
console.log(document.embeds);


// use document object images property:----
console.log("-----------------document.images-----------------");
console.log(document.images);


// use document object property scripts:----
console.log("-----------------document.scripts-----------------");
console.log(document.scripts);
