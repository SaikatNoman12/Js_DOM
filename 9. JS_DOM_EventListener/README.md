# JavScript DOM Event Listener

## Why I use event listener

Ans: The addEventListener() method attaches an event handler to the specified element. And because, I can easily remove an event listener by using the removeEventListener() method.

### Two types Event listener syntax:

#### Add Event Listener syntax:-

    element.addEventListener(eventName, functions(){
        //code...
    }, useCapture);

#### Remove Event Listener syntax:-

    element.removeEventListener(eventName, functions(){
        //code...
    });

#### Note: The removeEventListener() method removes event handlers that have been attached with the addEventListener() method

## Event Bubbling or Event Capturing 

There are two ways of event propagation in the HTML DOM, bubbling and capturing.

In bubbling the inner most element's event is handled first and then the outer: the <p> element's click event is handled first, then the <div> element's click event.

In capturing the outer most element's event is handled first and then the inner: the <div> element's click event will be handled first, then the <p> element's click event.

The addEventListener() method you can specify the propagation type by using the "useCapture" parameter. This useCapture parameter value set 'true'.

    // syntax
    element.addEventListener(event, function(), useCapture);
