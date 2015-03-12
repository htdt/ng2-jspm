"use strict";
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var __moduleName = "benchpress/test/validator/regression_slope_validator_spec";
var $__angular2_47_test_95_lib__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__,
    $__benchpress_47_common__;
var $__0 = ($__angular2_47_test_95_lib__ = require("angular2/test_lib"), $__angular2_47_test_95_lib__ && $__angular2_47_test_95_lib__.__esModule && $__angular2_47_test_95_lib__ || {default: $__angular2_47_test_95_lib__}),
    describe = $__0.describe,
    ddescribe = $__0.ddescribe,
    it = $__0.it,
    iit = $__0.iit,
    xit = $__0.xit,
    expect = $__0.expect,
    beforeEach = $__0.beforeEach,
    afterEach = $__0.afterEach;
var $__1 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    Date = $__1.Date,
    DateWrapper = $__1.DateWrapper;
var ListWrapper = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}).ListWrapper;
var $__3 = ($__benchpress_47_common__ = require("benchpress/common"), $__benchpress_47_common__ && $__benchpress_47_common__.__esModule && $__benchpress_47_common__ || {default: $__benchpress_47_common__}),
    Validator = $__3.Validator,
    RegressionSlopeValidator = $__3.RegressionSlopeValidator,
    Injector = $__3.Injector,
    bind = $__3.bind,
    MeasureValues = $__3.MeasureValues;
function main() {
  describe('regression slope validator', (function() {
    var validator;
    function createValidator($__4) {
      var $__5 = $__4,
          size = $__5.size,
          metric = $__5.metric;
      validator = new Injector([RegressionSlopeValidator.BINDINGS, bind(RegressionSlopeValidator.METRIC).toValue(metric), bind(RegressionSlopeValidator.SAMPLE_SIZE).toValue(size)]).get(RegressionSlopeValidator);
    }
    it('should return sampleSize and metric as description', (function() {
      createValidator({
        size: 2,
        metric: 'script'
      });
      expect(validator.describe()).toEqual({
        'sampleSize': 2,
        'regressionSlopeMetric': 'script'
      });
    }));
    it('should return null while the completeSample is smaller than the given size', (function() {
      createValidator({
        size: 2,
        metric: 'script'
      });
      expect(validator.validate([])).toBe(null);
      expect(validator.validate([mv(0, 0, {})])).toBe(null);
    }));
    it('should return null while the regression slope is < 0', (function() {
      createValidator({
        size: 2,
        metric: 'script'
      });
      expect(validator.validate([mv(0, 0, {'script': 2}), mv(1, 1, {'script': 1})])).toBe(null);
    }));
    it('should return the last sampleSize runs when the regression slope is ==0', (function() {
      createValidator({
        size: 2,
        metric: 'script'
      });
      var sample = [mv(0, 0, {'script': 1}), mv(1, 1, {'script': 1}), mv(2, 2, {'script': 1})];
      expect(validator.validate(ListWrapper.slice(sample, 0, 2))).toEqual(ListWrapper.slice(sample, 0, 2));
      expect(validator.validate(sample)).toEqual(ListWrapper.slice(sample, 1, 3));
    }));
    it('should return the last sampleSize runs when the regression slope is >0', (function() {
      createValidator({
        size: 2,
        metric: 'script'
      });
      var sample = [mv(0, 0, {'script': 1}), mv(1, 1, {'script': 2}), mv(2, 2, {'script': 3})];
      expect(validator.validate(ListWrapper.slice(sample, 0, 2))).toEqual(ListWrapper.slice(sample, 0, 2));
      expect(validator.validate(sample)).toEqual(ListWrapper.slice(sample, 1, 3));
    }));
  }));
}
function mv(runIndex, time, values) {
  return new MeasureValues(runIndex, DateWrapper.fromMillis(time), values);
}

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/benchpress/test/validator/regression_slope_validator_spec.map

//# sourceMappingURL=./regression_slope_validator_spec.map