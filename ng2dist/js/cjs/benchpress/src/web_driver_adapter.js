"use strict";
Object.defineProperties(module.exports, {
  WebDriverAdapter: {get: function() {
      return WebDriverAdapter;
    }},
  __esModule: {value: true}
});
var __moduleName = "benchpress/src/web_driver_adapter";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_di__,
    $__angular2_47_src_47_facade_47_async__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var bind = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}).bind;
var Promise = ($__angular2_47_src_47_facade_47_async__ = require("angular2/src/facade/async"), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}).Promise;
var $__3 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    BaseException = $__3.BaseException,
    ABSTRACT = $__3.ABSTRACT;
var $__4 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    List = $__4.List,
    Map = $__4.Map;
var WebDriverAdapter = function WebDriverAdapter() {};
var $WebDriverAdapter = WebDriverAdapter;
($traceurRuntime.createClass)(WebDriverAdapter, {
  waitFor: function(callback) {
    assert.argumentTypes(callback, Function);
    throw new BaseException('NYI');
  },
  executeScript: function(script) {
    assert.argumentTypes(script, assert.type.string);
    throw new BaseException('NYI');
  },
  capabilities: function() {
    throw new BaseException('NYI');
  },
  logs: function(type) {
    assert.argumentTypes(type, assert.type.string);
    throw new BaseException('NYI');
  }
}, {bindTo: function(delegateToken) {
    return [bind($WebDriverAdapter).toFactory((function(delegate) {
      return delegate;
    }), [delegateToken])];
  }});
Object.defineProperty(WebDriverAdapter, "annotations", {get: function() {
    return [new ABSTRACT()];
  }});
Object.defineProperty(WebDriverAdapter.prototype.waitFor, "parameters", {get: function() {
    return [[Function]];
  }});
Object.defineProperty(WebDriverAdapter.prototype.executeScript, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
Object.defineProperty(WebDriverAdapter.prototype.logs, "parameters", {get: function() {
    return [[assert.type.string]];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/benchpress/src/web_driver_adapter.map

//# sourceMappingURL=./web_driver_adapter.map