"use strict";
Object.defineProperties(module.exports, {
  MultiMetric: {get: function() {
      return MultiMetric;
    }},
  __esModule: {value: true}
});
var __moduleName = "benchpress/src/metric/multi_metric";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_di__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_facade_47_async__,
    $__benchpress_47_src_47_metric__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var $__1 = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}),
    bind = $__1.bind,
    Injector = $__1.Injector,
    OpaqueToken = $__1.OpaqueToken;
var $__2 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    List = $__2.List,
    ListWrapper = $__2.ListWrapper,
    StringMapWrapper = $__2.StringMapWrapper,
    StringMap = $__2.StringMap;
var $__3 = ($__angular2_47_src_47_facade_47_async__ = require("angular2/src/facade/async"), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}),
    Promise = $__3.Promise,
    PromiseWrapper = $__3.PromiseWrapper;
var Metric = ($__benchpress_47_src_47_metric__ = require("../metric"), $__benchpress_47_src_47_metric__ && $__benchpress_47_src_47_metric__.__esModule && $__benchpress_47_src_47_metric__ || {default: $__benchpress_47_src_47_metric__}).Metric;
var MultiMetric = function MultiMetric(metrics) {
  $traceurRuntime.superConstructor($MultiMetric).call(this);
  this._metrics = metrics;
};
var $MultiMetric = MultiMetric;
($traceurRuntime.createClass)(MultiMetric, {
  beginMeasure: function() {
    return assert.returnType((PromiseWrapper.all(ListWrapper.map(this._metrics, (function(metric) {
      return metric.beginMeasure();
    })))), Promise);
  },
  endMeasure: function(restart) {
    return assert.returnType((PromiseWrapper.all(ListWrapper.map(this._metrics, (function(metric) {
      return metric.endMeasure(restart);
    }))).then((function(values) {
      return mergeStringMaps(values);
    }))), assert.genericType(Promise, StringMap));
  },
  describe: function() {
    return assert.returnType((mergeStringMaps(this._metrics.map((function(metric) {
      return metric.describe();
    })))), StringMap);
  }
}, {createBindings: function(childTokens) {
    return [bind(_CHILDREN).toAsyncFactory((function(injector) {
      return PromiseWrapper.all(ListWrapper.map(childTokens, (function(token) {
        return injector.asyncGet(token);
      })));
    }), [Injector]), bind($MultiMetric).toFactory((function(children) {
      return new $MultiMetric(children);
    }), [_CHILDREN])];
  }}, Metric);
Object.defineProperty(MultiMetric.prototype.endMeasure, "parameters", {get: function() {
    return [[assert.type.boolean]];
  }});
function mergeStringMaps(maps) {
  var result = {};
  ListWrapper.forEach(maps, (function(map) {
    StringMapWrapper.forEach(map, (function(value, prop) {
      result[prop] = value;
    }));
  }));
  return result;
}
var _CHILDREN = new OpaqueToken('MultiMetric.children');

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/benchpress/src/metric/multi_metric.map

//# sourceMappingURL=./multi_metric.map