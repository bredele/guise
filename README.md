guise
=====

  data formatting

## Installation

component:

    $ component install bredele/guise

nodejs:

    $ npm install guise


## Usage

  simple filter:

```js
var guise = require('guise');

var hello = guise(function(name) {
	return 'hello ' + name;
});
hello('olivier');
// => hello olivier
```

  multiple arguments:

```js
var hello = guise(function(first, last) {
	return 'hello ' + name + ' ' + last;
});
hello('olivier', 'wietrich');
// => hello olivier wietrich
```  

  chainable filters:

```js
var hello = guise(function(name) {
	return 'hello ' + name;
}, function(str) {
	return str.toUpperCase();
});

hello('olivier');
// => HELLO OLIVIER
```

## License

The MIT License (MIT)

Copyright (c) 2014 Olivier Wietrich <olivier.wietrich@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
