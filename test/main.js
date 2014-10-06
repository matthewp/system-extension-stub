var stub = require('stub');

var noop = function(){};

stub('moment', function() {
  return noop;
});

System.import('moment').then(function(moment) {
  console.assert(moment === noop, "Correctly stubbed");
});
