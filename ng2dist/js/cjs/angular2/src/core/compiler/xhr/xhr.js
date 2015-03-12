"use strict";
Object.defineProperties(module.exports, {
  XHR: {get: function() {
      return XHR;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/src/core/compiler/xhr/xhr";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_src_47_facade_47_async__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var Promise = ($__angular2_47_src_47_facade_47_async__ = require("angular2/src/facade/async"), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}).Promise;
var XHR = function XHR() {};
($traceurRuntime.createClass)(XHR, {get: function(url) {
    assert.argumentTypes(url, assert.type.string);
    return assert.returnType((null), assert.genericType(Promise, assert.type.string));
  }}, {});
Object.defineProperty(XHR.prototype.get, "parameters", {get: function() {
    return [[assert.type.string]];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/core/compiler/xhr/xhr.map

//# sourceMappingURL=./xhr.map