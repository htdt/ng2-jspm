"use strict";
Object.defineProperties(module.exports, {
  ViewPool: {get: function() {
      return ViewPool;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/src/core/compiler/view_pool";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_core_47_compiler_47_view__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var $__1 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    ListWrapper = $__1.ListWrapper,
    MapWrapper = $__1.MapWrapper,
    StringMapWrapper = $__1.StringMapWrapper,
    List = $__1.List;
var viewModule = ($__angular2_47_src_47_core_47_compiler_47_view__ = require("./view"), $__angular2_47_src_47_core_47_compiler_47_view__ && $__angular2_47_src_47_core_47_compiler_47_view__.__esModule && $__angular2_47_src_47_core_47_compiler_47_view__ || {default: $__angular2_47_src_47_core_47_compiler_47_view__});
var ViewPool = function ViewPool(capacity) {
  assert.argumentTypes(capacity, assert.type.number);
  this._views = [];
  this._capacity = capacity;
};
($traceurRuntime.createClass)(ViewPool, {
  pop: function() {
    return assert.returnType((ListWrapper.isEmpty(this._views) ? null : ListWrapper.removeLast(this._views)), viewModule.View);
  },
  push: function(view) {
    assert.argumentTypes(view, viewModule.View);
    if (this._views.length < this._capacity) {
      ListWrapper.push(this._views, view);
    }
  },
  length: function() {
    return this._views.length;
  }
}, {});
Object.defineProperty(ViewPool, "parameters", {get: function() {
    return [[assert.type.number]];
  }});
Object.defineProperty(ViewPool.prototype.push, "parameters", {get: function() {
    return [[viewModule.View]];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/core/compiler/view_pool.map

//# sourceMappingURL=./view_pool.map