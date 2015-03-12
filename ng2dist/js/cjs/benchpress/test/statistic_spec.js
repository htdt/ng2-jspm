"use strict";
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var __moduleName = "benchpress/test/statistic_spec";
var $__angular2_47_test_95_lib__,
    $__benchpress_47_src_47_statistic__,
    $__angular2_47_src_47_facade_47_math__;
var $__0 = ($__angular2_47_test_95_lib__ = require("angular2/test_lib"), $__angular2_47_test_95_lib__ && $__angular2_47_test_95_lib__.__esModule && $__angular2_47_test_95_lib__ || {default: $__angular2_47_test_95_lib__}),
    describe = $__0.describe,
    ddescribe = $__0.ddescribe,
    it = $__0.it,
    iit = $__0.iit,
    xit = $__0.xit,
    expect = $__0.expect,
    beforeEach = $__0.beforeEach,
    afterEach = $__0.afterEach;
var Statistic = ($__benchpress_47_src_47_statistic__ = require("benchpress/src/statistic"), $__benchpress_47_src_47_statistic__ && $__benchpress_47_src_47_statistic__.__esModule && $__benchpress_47_src_47_statistic__ || {default: $__benchpress_47_src_47_statistic__}).Statistic;
var NaN = ($__angular2_47_src_47_facade_47_math__ = require("angular2/src/facade/math"), $__angular2_47_src_47_facade_47_math__ && $__angular2_47_src_47_facade_47_math__.__esModule && $__angular2_47_src_47_facade_47_math__ || {default: $__angular2_47_src_47_facade_47_math__}).NaN;
function main() {
  describe('statistic', (function() {
    it('should calculate the mean', (function() {
      expect(Statistic.calculateMean([])).toBeNaN();
      expect(Statistic.calculateMean([1, 2, 3])).toBe(2.0);
    }));
    it('should calculate the standard deviation', (function() {
      expect(Statistic.calculateStandardDeviation([], NaN)).toBeNaN();
      expect(Statistic.calculateStandardDeviation([1], 1)).toBe(0.0);
      expect(Statistic.calculateStandardDeviation([2, 4, 4, 4, 5, 5, 7, 9], 5)).toBe(2.0);
    }));
    it('should calculate the coefficient of variation', (function() {
      expect(Statistic.calculateCoefficientOfVariation([], NaN)).toBeNaN();
      expect(Statistic.calculateCoefficientOfVariation([1], 1)).toBe(0.0);
      expect(Statistic.calculateCoefficientOfVariation([2, 4, 4, 4, 5, 5, 7, 9], 5)).toBe(40.0);
    }));
    it('should calculate the regression slope', (function() {
      expect(Statistic.calculateRegressionSlope([], NaN, [], NaN)).toBeNaN();
      expect(Statistic.calculateRegressionSlope([1], 1, [2], 2)).toBeNaN();
      expect(Statistic.calculateRegressionSlope([1, 2], 1.5, [2, 4], 3)).toBe(2.0);
    }));
  }));
}

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/benchpress/test/statistic_spec.map

//# sourceMappingURL=./statistic_spec.map