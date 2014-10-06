@page index system-extension-stub

@description An easy interface to stubbing modules

@body

# Usage

This SystemJS/StealJS extension provides a convenient way to stub any module in your project.
A typical scenario might be that you want to stub a module for testing purposes.
Consider the case where you are using a third-party library, `moment` in this case.
To make your tests more predictable you might want to have moment always return the same date.
You can easily achieve this using `system-extension-stub`:

```js
var stub = require('stub');
var moment = require('moment');

stub('moment', function() {
  var date = new Date(2000, 1, 1);
  return function() {
    var inst = moment(date);
    return inst;
  };
});
```
