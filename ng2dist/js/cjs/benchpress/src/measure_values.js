"use strict";
Object.defineProperties(module.exports, {
  MeasureValues: {get: function() {
      return MeasureValues;
    }},
  __esModule: {value: true}
});
var __moduleName = "benchpress/src/measure_values";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var $__1 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    Date = $__1.Date,
    DateWrapper = $__1.DateWrapper;
var StringMap = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}).StringMap;
var MeasureValues = function MeasureValues(runIndex, timeStamp, values) {
  assert.argumentTypes(runIndex, assert.type.number, timeStamp, Date, values, StringMap);
  this.timeStamp = timeStamp;
  this.runIndex = runIndex;
  this.values = values;
};
($traceurRuntime.createClass)(MeasureValues, {toJson: function() {
    return {
      'timeStamp': DateWrapper.toJson(this.timeStamp),
      'runIndex': this.runIndex,
      'values': this.values
    };
  }}, {});
Object.defineProperty(MeasureValues, "parameters", {get: function() {
    return [[assert.type.number], [Date], [StringMap]];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/benchpress/src/measure_values.map

//# sourceMappingURL=./measure_values.map