
// get specific form
const myForm = document.forms['myForm'];

// form validate function.
function validateForm() {

    // get input value;
    const value = myForm['fName'].value;

    if (value === '') {
        console.log('Please enter your name!');
        return false;
    }
    else {
        console.log(value);
        myForm['fName'].value = '';
    }

    return true;


}


// number validate:---
const main = document.querySelector('.number');

function numberValidate() {
    const value = main.value;

    if (isNaN(value)) {
        console.log('do not support string.');
    }
    else if (value <= 0) {
        console.log('do not support 0.');
    }
    else if (value < 1) {
        console.log('do not support float number.');
    }
    else {
        console.log(value);
    }

    main.value = '';
}