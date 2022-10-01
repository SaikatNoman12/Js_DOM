/* ==== HTML DOM ==== */

// use document object property innerHTML:----
const demo1 =  document.querySelector('.demo1');
demo1.innerHTML = 'Use innerHTML';


// use document object property innerText:----
const demo2 = document.querySelector('.demo2');
demo2.innerText = 'Use innerText';


// use document object property textContent:----
const demo3 = document.querySelector('.demo3');
demo3.textContent = 'Use textContent';


// use document objet property attribute:----
const demo4 = document.querySelector('.demo4');
demo4.className = 'Use attribute'; 


// use document object property style:----
const demo5 = document.querySelector('.demo5');
demo5.style.color = 'red'; 


// use document object method setAttribute('attr', 'value'):---- 
const demo6 = document.querySelector('.demo6');
demo6.setAttribute('id', 'set-attribute');


// use document object method createElement('element'):----
const elementCreate = document.createElement('p');
elementCreate.innerText = "Use createElement('elementCreate') & appendChild('element')";


// use document object method appendChild('element'):----
const demo7 = document.querySelector('.demo7');
demo7.appendChild(elementCreate);




