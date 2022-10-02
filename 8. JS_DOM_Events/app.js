/* === JavaScript DOM Events === */


// use document onclick event. It's allowed all event:----
function myClickFunc() {
    document.querySelector('#demo1').innerHTML = 'Why are you Clicked me? (1)';
}


// use this keyword. and this keyword send by function as a parameter.It's allowed all event:----
function myClickFunc2(htmlTag) {
    htmlTag.innerText = 'Why are you Clicked me? (3)';
}


// use onclick in js file. It's allowed all event:----
const demo2 = document.getElementById('demo2');

demo2.onclick = function () {
    demo2.textContent = 'Why are you clicked me? (4)';
}


// use document onchange event:----
function myChangeFunction(input) {
    document.getElementById('demo3').innerHTML = input.value;
    input.value = '';
}


// use document onmouseover event:----
const demo4 = document.getElementById('demo4');
demo4.onmouseover = function () {
    demo4.innerHTML = 'Hey, Why are you  mouse over me? (5)'
}


// use document onload event:----
const body = document.querySelector('#body');
const demo5 = document.querySelector('#demo5');


body.onload = function () {
    demo5.innerHTML = 'Your webpage loading finished! Use onload event.';
}


// use document onunload event 
const body2 = document.getElementById('body');

body2.onunload = function () {
    console.log('onunload event work');
}


// use document onmousedown and onmouseup event:----
const demo7 = document.querySelector('#demo7');

demo7.onmousedown = function () {
    demo7.innerHTML = 'Why are you click me?';
}


demo7.onmouseup = function () {
    demo7.innerHTML = 'Thank you!';
} 