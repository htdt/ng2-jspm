"use strict";
Object.defineProperties(module.exports, {
  Validator: {get: function() {
      return Validator;
    }},
  __esModule: {value: true}
});
var __moduleName = "benchpress/src/validator";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_di__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_facade_47_lang__,
    $__benchpress_47_src_47_measure_95_values__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var bind = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}).bind;
var $__2 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    List = $__2.List,
    StringMap = $__2.StringMap;
var $__3 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    ABSTRACT = $__3.ABSTRACT,
    BaseException = $__3.BaseException;
var MeasureValues = ($__benchpress_47_src_47_measure_95_values__ = require("./measure_values"), $__benchpress_47_src_47_measure_95_values__ && $__benchpress_47_src_47_measure_95_values__.__esModule && $__benchpress_47_src_47_measure_95_values__ || {default: $__benchpress_47_src_47_measure_95_values__}).MeasureValues;
var Validator = function Validator() {};
var $Validator = Validator;
($traceurRuntime.createClass)(Validator, {
  validate: function(completeSample) {
    assert.argumentTypes(completeSample, assert.genericType(List, MeasureValues));
    throw new BaseException('NYI');
  },
  describe: function() {
    throw new BaseException('NYI');
  }
}, {bindTo: function(delegateToken) {
    return [bind($Validator).toFactory((function(delegate) {
      return delegate;
    }), [delegateToken])];
  }});
Object.defineProperty(Validator, "annotations", {get: function() {
    return [new ABSTRACT()];
  }});
Object.defineProperty(Validator.prototype.validate, "parameters", {get: function() {
    return [[assert.genericType(List, MeasureValues)]];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/benchpress/src/validator.map

//# sourceMappingURL=./validator.map