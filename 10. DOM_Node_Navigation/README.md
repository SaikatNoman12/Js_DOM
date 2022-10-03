# JavaScript Node Navigation

## What is node? 

Ans: Everything in an HTML document is a node. All HTML element is a node.

### Navigating Between Nodes:

    parentNode

    childNodes

    childNodes[nodeNumber]

    firstChild

    lastChild

    nextSibling

    previousSibling


### Common Error:

A common error in DOM processing is to expect an element node to contain text.


### DOM Root Nodes:

    document.documentElement    // The full document

    document.body   // The body of the document

### The nodeName Property:

The nodeName property specifies the name of a node.

1. nodeName is read-only

2. nodeName of an element node is the same as the tag name

3. nodeName of an attribute node is the attribute name

4. nodeName of a text node is always #text

5. nodeName of the document node is always #document

### The nodeValue Property

The nodeValue property specifies the value of a node.

1. nodeValue for element nodes is null

2. nodeValue for text nodes is the text itself

3. nodeValue for attribute nodes is the attribute value



