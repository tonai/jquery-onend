# jQuery-onEnd

A jQuery plugin for detecting when an event stops to occur.

This library help you launching your own event handler after an event has stopped to occur for a while. 
Useful when used in conjunction with the `resize` or `scroll` event for instance.

This library was inspired by the [jquery.unevent.js](https://github.com/yckart/jquery.unevent.js) library with some major differences explained below :
* you can bind multiple event handlers on the same event.
* you can remove a specific event handler with the `.off( events [, selector ], handler )` syntax.
* do not breaks the jQuery `one` method.

You can compare this 2 `CodePen` for illustration :
* [jquery.unevent.js](http://codepen.io/tonai/pen/rVrGVQ)
* [jquery.onEnd.js](http://codepen.io/tonai/pen/waxQRb)

## Installation

You can get it with [Bower](http://bower.io/search/?q=jquery-onend) :
```shell
bower install --save-dev jquery-onend
```

Then include the script in your HTML (after jQuery) :
```html
<script src="/path/to/jquery.onend.js"></script>
```

## Usage

### Bind an event handler

You can bind an event handler with the followind syntax :  
`.onEnd( events [, selector ] [, data ], handler, delay )`

**events**  
Type: `String`  
One or more space-separated event types and optional namespaces, such as "click" or "keydown.myPlugin".

**selector**  
Type: `String`  
A selector string to filter the descendants of the selected elements that trigger the event. If the selector is null or omitted, the event is always triggered when it reaches the selected element.

**data**  
Type: `Anything`  
Data to be passed to the handler in event.data when an event is triggered.

**handler**  
Type: `Function( Event eventObject [, Anything extraParameter ] [, ... ] )`  
A function to execute when the event is triggered. The value false is also allowed as a shorthand for a function that simply does return false.

**delay**  
Type: `Number`  
The delay to wait the event stops to occur for triggering the event handler.

The minimum number of parameter is `3` :
```JavaScript
$(window).onEnd('resize', function(){
  console.log('User has stopped resizing the window for 200ms');
}, 200);
```

### Unbind an event handler

You can unbind an event exactly the same way as unbinded a classic jQuery event handler.

## Release History

See the [CHANGELOG.txt](https://github.com/tonai/jquery-onend/blob/master/CHANGELOG.txt)

