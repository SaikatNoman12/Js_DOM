/* ==== JavaScript DOM Event Listener ==== */


// use document event handler addEventListener('event' function, useCapture) method:----

const demo1 = document.getElementById('demo1');

demo1.addEventListener('click', function () {
    demo1.innerHTML = 'Your are clicked!! (1)';
});


// use different type addEventListener('event', function, useCapture) method:----
const demo2 = document.getElementById('demo2');
function myFunc() {
    demo2.innerHTML = 'Your are clicked me! (2)';
}

demo2.addEventListener('click', myFunc);


// use many event handler in one element. use addEventListener('event', function, useCapture) method:----
const demo3 = document.getElementById('demo3');

demo3.addEventListener('click', function () {
    demo3.innerHTML = 'You Clicked!! (3.1)';
});

demo3.addEventListener('mouseover', function () {
    demo3.innerHTML = 'your mouse is over!! (3.2)';
});

demo3.addEventListener('mouseout', function () {
    demo3.innerHTML = 'your mouse is out!! (3.3)';
});


// use window event handler. use addEventListener('event', function, useCapture) method:----
const demo4 = document.getElementById('demo4');

window.addEventListener('resize', function () {
    demo4.innerHTML = 'Your screen is resize!! (4)';
});


// use parameter in addEventListener('event', function, useCapture) method inner function:----
const demo5 = document.getElementById('demo5');

function myFunc2(text) {
    demo5.innerHTML = text;
}

const innerData = 'You are clicked me!! (5)';

demo5.addEventListener('click', function () {
    myFunc2(innerData);
});



// use Event Bubbling or Event Capturing:----

/*event bubbling*/
const demo6 = document.getElementById('demo6')
const demo7 = document.getElementById('demo7')

demo6.addEventListener('click', function () {
    alert('Click parent div.');
});

demo7.addEventListener('click', function () {
    alert('Click child button.');
});


/*event capturing. use addEventListener('event', function, useCapture) method third parameter useCapture*/
const demo8 = document.getElementById('demo8')
const demo9 = document.getElementById('demo9')

demo8.addEventListener('click', function () {
    alert('Click parent div.');
}, true);

demo9.addEventListener('click', function () {
    alert('Click child button.');
}, true);


//  use removeEventListener():----
const demo10 = document.getElementById('demo10');

function myFunc3() {
    demo10.innerHTML = 'You are clicked!! (10)';
}

demo10.addEventListener('click', myFunc3);

/*remove event listener*/
demo10.removeEventListener('click', myFunc3);
