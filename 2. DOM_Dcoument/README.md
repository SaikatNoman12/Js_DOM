# JavaScript DOM Document

## Document object method finding HTML elements:

    //method:
    document.getElementById('idName');

    document.getElementsByClass('className');

    document.getElementsByTagNames('htmlTagName');

## Document object property & method changing HTML elements:

    // property:
    element.innerHTML = 'tagName/text';

    element.textContent = 'text';

    element.innerText = 'text';

    element.attribute = 'value';

    element.style.cssProperty = 'value';

    // method:
    element.setAttribute('attributeName', 'value');

## Document object method adding and deleting elements:
    
    // method:
    document.createElement('htmlElement');

    document.appendChild('element');

    document.removeChild('element');

    document.replaceChild('newElement', 'oldElement');

    document.write('text');

### Note: The write() method writes directly to an open (HTML) document stream.
    

