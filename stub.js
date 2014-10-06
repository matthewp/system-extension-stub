
function stub(loader) {
  var registry = {};

  var fetch = loader.fetch;
  loader.fetch = function(load) {
    if(registry[load.name]) {
      return '';
    }
    return fetch.call(this, load);
  };

  var instantiate = loader.instantiate;
  loader.instantiate = function(load) {
    if(registry[load.name]) {
      var factory = registry[load.name];
      var deps = load.metadata.deps || [];
     
      return {
        deps: deps,
        execute: function(require) {
          debugger;
          var depValues = [];
          for(var i = 0, len = deps.length; i < len; i++) {
            depValues.push(require(deps[i]));
          }
          var value = factory.apply(null, depValues);
          var module = loader.newModule({
            'default': value,
            __useDefault: true
          });
          return module;
        }
      };
    }

    return instantiate.call(loader, load);
  };

  return function(moduleName, factory) {
    registry[moduleName] = factory;
  };
}

exports = module.exports = stub(System);
exports.attach = stub;
