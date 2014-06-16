
# bind-methods

  Plugin for view to automatically bind all functions to the view.
  Useful for event handlers and intervals.

## Installation

  Install with [component(1)](http://component.io):

    $ component install ripplejs/bind-methods

## API

Here's a basic view that counts every second.

```js
var ripple = require('ripple');
var bind = require('bind');

View = ripple('<div>{{seconds}}</div>')
  .attr('seconds', { default: 0 })
  .use(bind(['tick']));

View.prototype.tick = function(){
  this.seconds++;
};

var view = new View();
```

Now the method `tick` will always be called in the correct context of the view:

```
setTimeout(view.tick, 1000);
```

So we don't have to `.bind(view)` or create an anonymous function.

### bind([methods...])

`bind` returns a plugin that will bind each of the methods to the view.

## License

  The MIT License (MIT)

  Copyright (c) 2014 <copyright holders>

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.