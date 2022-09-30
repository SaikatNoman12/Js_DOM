# JavaScript DOM Document

## Document object method finding HTML elements:

    document.getElementById('idName');

    document.getElementsByClass('className');

    document.getElementByTagNames('htmlTagName');

## Document object property & method changing HTML elements:

    // property
    element.innerHTML = 'tagName/text';

    element.textContent = 'text';

    element.innerText = 'text';

    element.attribute = 'value';

    // method
    element.setAttribute('attributeName', 'value');

## Document object method adding and deleting elements:
    
    document.createElement('htmlElement');

    document.appendChild('element');

    document.removeChild('element');

    document.replaceChild('newElement', 'oldElement');

    document.write('text');

### Note: The write() method writes directly to an open (HTML) document stream.
    

