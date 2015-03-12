System.register(["angular2/di", "angular2/src/facade/async", "angular2/src/facade/lang", "angular2/src/facade/collection"], function($__export) {
  "use strict";
  var bind,
      Promise,
      BaseException,
      ABSTRACT,
      List,
      Map,
      WebDriverAdapter;
  return {
    setters: [function($__m) {
      bind = $__m.bind;
    }, function($__m) {
      Promise = $__m.Promise;
    }, function($__m) {
      BaseException = $__m.BaseException;
      ABSTRACT = $__m.ABSTRACT;
    }, function($__m) {
      List = $__m.List;
      Map = $__m.Map;
    }],
    execute: function() {
      WebDriverAdapter = $__export("WebDriverAdapter", (function() {
        var WebDriverAdapter = function WebDriverAdapter() {};
        return ($traceurRuntime.createClass)(WebDriverAdapter, {
          waitFor: function(callback) {
            throw new BaseException('NYI');
          },
          executeScript: function(script) {
            throw new BaseException('NYI');
          },
          capabilities: function() {
            throw new BaseException('NYI');
          },
          logs: function(type) {
            throw new BaseException('NYI');
          }
        }, {bindTo: function(delegateToken) {
            return [bind(WebDriverAdapter).toFactory((function(delegate) {
              return delegate;
            }), [delegateToken])];
          }});
      }()));
      Object.defineProperty(WebDriverAdapter, "annotations", {get: function() {
          return [new ABSTRACT()];
        }});
      Object.defineProperty(WebDriverAdapter.prototype.waitFor, "parameters", {get: function() {
          return [[Function]];
        }});
      Object.defineProperty(WebDriverAdapter.prototype.executeScript, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
      Object.defineProperty(WebDriverAdapter.prototype.logs, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
    }
  };
});

//# sourceMappingURL=benchpress/src/web_driver_adapter.map

//# sourceMappingURL=../../benchpress/src/web_driver_adapter.js.map