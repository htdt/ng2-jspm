"use strict";
Object.defineProperties(module.exports, {
  MultiReporter: {get: function() {
      return MultiReporter;
    }},
  __esModule: {value: true}
});
var __moduleName = "benchpress/src/reporter/multi_reporter";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_di__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_facade_47_async__,
    $__benchpress_47_src_47_measure_95_values__,
    $__benchpress_47_src_47_reporter__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var $__1 = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}),
    bind = $__1.bind,
    Injector = $__1.Injector,
    OpaqueToken = $__1.OpaqueToken;
var $__2 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    List = $__2.List,
    ListWrapper = $__2.ListWrapper;
var $__3 = ($__angular2_47_src_47_facade_47_async__ = require("angular2/src/facade/async"), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}),
    Promise = $__3.Promise,
    PromiseWrapper = $__3.PromiseWrapper;
var MeasureValues = ($__benchpress_47_src_47_measure_95_values__ = require("../measure_values"), $__benchpress_47_src_47_measure_95_values__ && $__benchpress_47_src_47_measure_95_values__.__esModule && $__benchpress_47_src_47_measure_95_values__ || {default: $__benchpress_47_src_47_measure_95_values__}).MeasureValues;
var Reporter = ($__benchpress_47_src_47_reporter__ = require("../reporter"), $__benchpress_47_src_47_reporter__ && $__benchpress_47_src_47_reporter__.__esModule && $__benchpress_47_src_47_reporter__ || {default: $__benchpress_47_src_47_reporter__}).Reporter;
var MultiReporter = function MultiReporter(reporters) {
  $traceurRuntime.superConstructor($MultiReporter).call(this);
  this._reporters = reporters;
};
var $MultiReporter = MultiReporter;
($traceurRuntime.createClass)(MultiReporter, {
  reportMeasureValues: function(values) {
    return assert.returnType((PromiseWrapper.all(ListWrapper.map(this._reporters, (function(reporter) {
      return reporter.reportMeasureValues(values);
    })))), Promise);
  },
  reportSample: function(completeSample, validSample) {
    return assert.returnType((PromiseWrapper.all(ListWrapper.map(this._reporters, (function(reporter) {
      return reporter.reportSample(completeSample, validSample);
    })))), Promise);
  }
}, {createBindings: function(childTokens) {
    return [bind(_CHILDREN).toAsyncFactory((function(injector) {
      return PromiseWrapper.all(ListWrapper.map(childTokens, (function(token) {
        return injector.asyncGet(token);
      })));
    }), [Injector]), bind($MultiReporter).toFactory((function(children) {
      return new $MultiReporter(children);
    }), [_CHILDREN])];
  }}, Reporter);
Object.defineProperty(MultiReporter.prototype.reportMeasureValues, "parameters", {get: function() {
    return [[MeasureValues]];
  }});
Object.defineProperty(MultiReporter.prototype.reportSample, "parameters", {get: function() {
    return [[assert.genericType(List, MeasureValues)], [assert.genericType(List, MeasureValues)]];
  }});
var _CHILDREN = new OpaqueToken('MultiReporter.children');

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/benchpress/src/reporter/multi_reporter.map

//# sourceMappingURL=./multi_reporter.map