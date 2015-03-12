var parse5Adapter = require('angular2/src/dom/parse5_adapter');
parse5Adapter.Parse5DomAdapter.makeCurrent();
"use strict";
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/test/core/compiler/view_pool_spec";
var $__angular2_47_test_95_lib__,
    $__angular2_47_src_47_core_47_compiler_47_view__,
    $__angular2_47_src_47_core_47_compiler_47_view_95_pool__,
    $__angular2_47_src_47_facade_47_lang__;
var $__0 = ($__angular2_47_test_95_lib__ = require("angular2/test_lib"), $__angular2_47_test_95_lib__ && $__angular2_47_test_95_lib__.__esModule && $__angular2_47_test_95_lib__ || {default: $__angular2_47_test_95_lib__}),
    describe = $__0.describe,
    xit = $__0.xit,
    it = $__0.it,
    expect = $__0.expect,
    beforeEach = $__0.beforeEach,
    ddescribe = $__0.ddescribe,
    iit = $__0.iit,
    el = $__0.el,
    proxy = $__0.proxy;
var View = ($__angular2_47_src_47_core_47_compiler_47_view__ = require("angular2/src/core/compiler/view"), $__angular2_47_src_47_core_47_compiler_47_view__ && $__angular2_47_src_47_core_47_compiler_47_view__.__esModule && $__angular2_47_src_47_core_47_compiler_47_view__ || {default: $__angular2_47_src_47_core_47_compiler_47_view__}).View;
var ViewPool = ($__angular2_47_src_47_core_47_compiler_47_view_95_pool__ = require("angular2/src/core/compiler/view_pool"), $__angular2_47_src_47_core_47_compiler_47_view_95_pool__ && $__angular2_47_src_47_core_47_compiler_47_view_95_pool__.__esModule && $__angular2_47_src_47_core_47_compiler_47_view_95_pool__ || {default: $__angular2_47_src_47_core_47_compiler_47_view_95_pool__}).ViewPool;
var IMPLEMENTS = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).IMPLEMENTS;
var FakeView = function FakeView() {};
var $FakeView = FakeView;
($traceurRuntime.createClass)(FakeView, {noSuchMethod: function(i) {
    $traceurRuntime.superGet(this, $FakeView.prototype, "noSuchMethod").call(this, i);
  }}, {});
Object.defineProperty(FakeView, "annotations", {get: function() {
    return [new proxy, new IMPLEMENTS(View)];
  }});
function main() {
  describe('ViewPool', (function() {
    var viewPool,
        capacity = 3;
    beforeEach((function() {
      viewPool = new ViewPool(capacity);
    }));
    it('should return null when there are no views', (function() {
      expect(viewPool.pop()).toBeNull();
      expect(viewPool.length()).toBe(0);
    }));
    it('should support storing and retrieving a view', (function() {
      var view = new FakeView();
      viewPool.push(view);
      expect(viewPool.length()).toBe(1);
      expect(viewPool.pop()).toBe(view);
      expect(viewPool.length()).toBe(0);
    }));
    it('should not store more views that its capacity', (function() {
      for (var i = 0; i < capacity * 2; i++)
        viewPool.push(new FakeView());
      expect(viewPool.length()).toBe(capacity);
      for (var i = 0; i < capacity; i++) {
        expect(viewPool.pop()).not.toBe(null);
      }
      expect(viewPool.pop()).toBeNull();
    }));
  }));
}

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/test/core/compiler/view_pool_spec.map

//# sourceMappingURL=./view_pool_spec.map
 main();