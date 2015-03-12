"use strict";
Object.defineProperties(module.exports, {
  RegressionSlopeValidator: {get: function() {
      return RegressionSlopeValidator;
    }},
  __esModule: {value: true}
});
var __moduleName = "benchpress/src/validator/regression_slope_validator";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_di__,
    $__benchpress_47_src_47_validator__,
    $__benchpress_47_src_47_statistic__,
    $__benchpress_47_src_47_measure_95_values__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var $__1 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    List = $__1.List,
    ListWrapper = $__1.ListWrapper,
    StringMap = $__1.StringMap;
var $__2 = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}),
    bind = $__2.bind,
    OpaqueToken = $__2.OpaqueToken;
var Validator = ($__benchpress_47_src_47_validator__ = require("../validator"), $__benchpress_47_src_47_validator__ && $__benchpress_47_src_47_validator__.__esModule && $__benchpress_47_src_47_validator__ || {default: $__benchpress_47_src_47_validator__}).Validator;
var Statistic = ($__benchpress_47_src_47_statistic__ = require("../statistic"), $__benchpress_47_src_47_statistic__ && $__benchpress_47_src_47_statistic__.__esModule && $__benchpress_47_src_47_statistic__ || {default: $__benchpress_47_src_47_statistic__}).Statistic;
var MeasureValues = ($__benchpress_47_src_47_measure_95_values__ = require("../measure_values"), $__benchpress_47_src_47_measure_95_values__ && $__benchpress_47_src_47_measure_95_values__.__esModule && $__benchpress_47_src_47_measure_95_values__ || {default: $__benchpress_47_src_47_measure_95_values__}).MeasureValues;
var RegressionSlopeValidator = function RegressionSlopeValidator(sampleSize, metric) {
  $traceurRuntime.superConstructor($RegressionSlopeValidator).call(this);
  this._sampleSize = sampleSize;
  this._metric = metric;
};
var $RegressionSlopeValidator = RegressionSlopeValidator;
($traceurRuntime.createClass)(RegressionSlopeValidator, {
  describe: function() {
    return assert.returnType(({
      'sampleSize': this._sampleSize,
      'regressionSlopeMetric': this._metric
    }), StringMap);
  },
  validate: function(completeSample) {
    assert.argumentTypes(completeSample, assert.genericType(List, MeasureValues));
    if (completeSample.length >= this._sampleSize) {
      var latestSample = ListWrapper.slice(completeSample, completeSample.length - this._sampleSize, completeSample.length);
      var xValues = [];
      var yValues = [];
      for (var i = 0; i < latestSample.length; i++) {
        ListWrapper.push(xValues, i);
        ListWrapper.push(yValues, latestSample[i].values[this._metric]);
      }
      var regressionSlope = Statistic.calculateRegressionSlope(xValues, Statistic.calculateMean(xValues), yValues, Statistic.calculateMean(yValues));
      return assert.returnType((regressionSlope >= 0 ? latestSample : null), assert.genericType(List, MeasureValues));
    } else {
      return assert.returnType((null), assert.genericType(List, MeasureValues));
    }
  }
}, {
  get SAMPLE_SIZE() {
    return _SAMPLE_SIZE;
  },
  get METRIC() {
    return _METRIC;
  },
  get BINDINGS() {
    return _BINDINGS;
  }
}, Validator);
Object.defineProperty(RegressionSlopeValidator.prototype.validate, "parameters", {get: function() {
    return [[assert.genericType(List, MeasureValues)]];
  }});
var _SAMPLE_SIZE = new OpaqueToken('RegressionSlopeValidator.sampleSize');
var _METRIC = new OpaqueToken('RegressionSlopeValidator.metric');
var _BINDINGS = [bind(RegressionSlopeValidator).toFactory((function(sampleSize, metric) {
  return new RegressionSlopeValidator(sampleSize, metric);
}), [_SAMPLE_SIZE, _METRIC]), bind(_SAMPLE_SIZE).toValue(10), bind(_METRIC).toValue('script')];

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/benchpress/src/validator/regression_slope_validator.map

//# sourceMappingURL=./regression_slope_validator.map