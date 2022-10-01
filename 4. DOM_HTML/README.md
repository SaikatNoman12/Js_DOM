# DOM html

## The HTML DOM allows JavaScript to change the content of HTML elements.

## Changing HTML Content:

### property

    element.innerHTML = 'value/tagName';

    element.innerText = 'text';

    element.textContent = 'text';

    element.style.cssProperty = 'value';

#### method 

    element.setAttribute('attr', 'value');

## Adding or Deleting HTML Content:

### method

    document.createElement('tagName');

    document.appendChild('varName');

    document.removeChild('varName');

    document.replaceChild('newElem', 'oldElem');

    document.write('text');