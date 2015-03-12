System.register(["angular2/di", "angular2/src/facade/async", "angular2/src/facade/lang", "./measure_values"], function($__export) {
  "use strict";
  var bind,
      Promise,
      PromiseWrapper,
      ABSTRACT,
      BaseException,
      MeasureValues,
      Reporter;
  return {
    setters: [function($__m) {
      bind = $__m.bind;
    }, function($__m) {
      Promise = $__m.Promise;
      PromiseWrapper = $__m.PromiseWrapper;
    }, function($__m) {
      ABSTRACT = $__m.ABSTRACT;
      BaseException = $__m.BaseException;
    }, function($__m) {
      MeasureValues = $__m.MeasureValues;
    }],
    execute: function() {
      Reporter = $__export("Reporter", (function() {
        var Reporter = function Reporter() {};
        return ($traceurRuntime.createClass)(Reporter, {
          reportMeasureValues: function(values) {
            throw new BaseException('NYI');
          },
          reportSample: function(completeSample, validSample) {
            throw new BaseException('NYI');
          }
        }, {bindTo: function(delegateToken) {
            return [bind(Reporter).toFactory((function(delegate) {
              return delegate;
            }), [delegateToken])];
          }});
      }()));
      Object.defineProperty(Reporter, "annotations", {get: function() {
          return [new ABSTRACT()];
        }});
      Object.defineProperty(Reporter.prototype.reportMeasureValues, "parameters", {get: function() {
          return [[MeasureValues]];
        }});
      Object.defineProperty(Reporter.prototype.reportSample, "parameters", {get: function() {
          return [[assert.genericType(List, MeasureValues)], [assert.genericType(List, MeasureValues)]];
        }});
    }
  };
});

//# sourceMappingURL=benchpress/src/reporter.map

//# sourceMappingURL=../../benchpress/src/reporter.js.map