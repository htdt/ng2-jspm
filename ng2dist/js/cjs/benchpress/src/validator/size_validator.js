"use strict";
Object.defineProperties(module.exports, {
  SizeValidator: {get: function() {
      return SizeValidator;
    }},
  __esModule: {value: true}
});
var __moduleName = "benchpress/src/validator/size_validator";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_di__,
    $__benchpress_47_src_47_validator__,
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
var MeasureValues = ($__benchpress_47_src_47_measure_95_values__ = require("../measure_values"), $__benchpress_47_src_47_measure_95_values__ && $__benchpress_47_src_47_measure_95_values__.__esModule && $__benchpress_47_src_47_measure_95_values__ || {default: $__benchpress_47_src_47_measure_95_values__}).MeasureValues;
var SizeValidator = function SizeValidator(size) {
  $traceurRuntime.superConstructor($SizeValidator).call(this);
  this._sampleSize = size;
};
var $SizeValidator = SizeValidator;
($traceurRuntime.createClass)(SizeValidator, {
  describe: function() {
    return assert.returnType(({'sampleSize': this._sampleSize}), StringMap);
  },
  validate: function(completeSample) {
    assert.argumentTypes(completeSample, assert.genericType(List, MeasureValues));
    if (completeSample.length >= this._sampleSize) {
      return assert.returnType((ListWrapper.slice(completeSample, completeSample.length - this._sampleSize, completeSample.length)), assert.genericType(List, MeasureValues));
    } else {
      return assert.returnType((null), assert.genericType(List, MeasureValues));
    }
  }
}, {
  get BINDINGS() {
    return _BINDINGS;
  },
  get SAMPLE_SIZE() {
    return _SAMPLE_SIZE;
  }
}, Validator);
Object.defineProperty(SizeValidator.prototype.validate, "parameters", {get: function() {
    return [[assert.genericType(List, MeasureValues)]];
  }});
var _SAMPLE_SIZE = new OpaqueToken('SizeValidator.sampleSize');
var _BINDINGS = [bind(SizeValidator).toFactory((function(size) {
  return new SizeValidator(size);
}), [_SAMPLE_SIZE]), bind(_SAMPLE_SIZE).toValue(10)];

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/benchpress/src/validator/size_validator.map

//# sourceMappingURL=./size_validator.map