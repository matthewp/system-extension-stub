@page index system-extension-stub

@description Stub a module

@body

# Module stubbing

This SystemJS/StealJS extension provides a convention way to stub any module in your project.
A typical scenario where you might want to use this is in your tests. Consider
this main test script:

```js
var stub = require('stub');

stub('moment', function() {
  var noop = function(){};
  var fun = noop;
  fun.parse = noop;
  fun.format = noop;

  return fun;
});
```
