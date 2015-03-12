var parse5Adapter = require('angular2/src/dom/parse5_adapter');
parse5Adapter.Parse5DomAdapter.makeCurrent();
"use strict";
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/test/core/annotations/annotations_spec";
var $__angular2_47_test_95_lib__,
    $__angular2_47_src_47_core_47_annotations_47_annotations__;
var $__0 = ($__angular2_47_test_95_lib__ = require("angular2/test_lib"), $__angular2_47_test_95_lib__ && $__angular2_47_test_95_lib__.__esModule && $__angular2_47_test_95_lib__ || {default: $__angular2_47_test_95_lib__}),
    ddescribe = $__0.ddescribe,
    describe = $__0.describe,
    it = $__0.it,
    iit = $__0.iit,
    expect = $__0.expect,
    beforeEach = $__0.beforeEach;
var $__1 = ($__angular2_47_src_47_core_47_annotations_47_annotations__ = require("angular2/src/core/annotations/annotations"), $__angular2_47_src_47_core_47_annotations_47_annotations__ && $__angular2_47_src_47_core_47_annotations_47_annotations__.__esModule && $__angular2_47_src_47_core_47_annotations_47_annotations__ || {default: $__angular2_47_src_47_core_47_annotations_47_annotations__}),
    Directive = $__1.Directive,
    onChange = $__1.onChange;
function main() {
  describe("Directive", (function() {
    describe("lifecycle", (function() {
      it("should be false when no lifecycle specified", (function() {
        var d = new Directive();
        expect(d.hasLifecycleHook(onChange)).toBe(false);
      }));
      it("should be false when the lifecycle does not contain the hook", (function() {
        var d = new Directive({lifecycle: []});
        expect(d.hasLifecycleHook(onChange)).toBe(false);
      }));
      it("should be true otherwise", (function() {
        var d = new Directive({lifecycle: [onChange]});
        expect(d.hasLifecycleHook(onChange)).toBe(true);
      }));
    }));
  }));
}

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/test/core/annotations/annotations_spec.map

//# sourceMappingURL=./annotations_spec.map
 main();