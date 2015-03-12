var parse5Adapter = require('angular2/src/dom/parse5_adapter');
parse5Adapter.Parse5DomAdapter.makeCurrent();
"use strict";
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/test/forms/validators_spec";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_test_95_lib__,
    $__angular2_47_forms__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var $__1 = ($__angular2_47_test_95_lib__ = require("angular2/test_lib"), $__angular2_47_test_95_lib__ && $__angular2_47_test_95_lib__.__esModule && $__angular2_47_test_95_lib__ || {default: $__angular2_47_test_95_lib__}),
    ddescribe = $__1.ddescribe,
    describe = $__1.describe,
    it = $__1.it,
    iit = $__1.iit,
    xit = $__1.xit,
    expect = $__1.expect,
    beforeEach = $__1.beforeEach,
    afterEach = $__1.afterEach,
    el = $__1.el;
var $__2 = ($__angular2_47_forms__ = require("angular2/forms"), $__angular2_47_forms__ && $__angular2_47_forms__.__esModule && $__angular2_47_forms__ || {default: $__angular2_47_forms__}),
    ControlGroup = $__2.ControlGroup,
    Control = $__2.Control,
    required = $__2.required,
    compose = $__2.compose,
    controlGroupValidator = $__2.controlGroupValidator,
    nullValidator = $__2.nullValidator;
function main() {
  function validator(key, error) {
    assert.argumentTypes(key, assert.type.string, error, assert.type.any);
    return function(c) {
      assert.argumentTypes(c, Control);
      var r = {};
      r[key] = error;
      return r;
    };
  }
  Object.defineProperty(validator, "parameters", {get: function() {
      return [[assert.type.string], [assert.type.any]];
    }});
  describe("Validators", (function() {
    describe("required", (function() {
      it("should error on an empty string", (function() {
        expect(required(new Control(""))).toEqual({"required": true});
      }));
      it("should error on null", (function() {
        expect(required(new Control(null))).toEqual({"required": true});
      }));
      it("should not error on a non-empty string", (function() {
        expect(required(new Control("not empty"))).toEqual(null);
      }));
    }));
    describe("compose", (function() {
      it("should collect errors from all the validators", (function() {
        var c = compose([validator("a", true), validator("b", true)]);
        expect(c(new Control(""))).toEqual({
          "a": true,
          "b": true
        });
      }));
      it("should run validators left to right", (function() {
        var c = compose([validator("a", 1), validator("a", 2)]);
        expect(c(new Control(""))).toEqual({"a": 2});
      }));
      it("should return null when no errors", (function() {
        var c = compose([nullValidator, nullValidator]);
        expect(c(new Control(""))).toEqual(null);
      }));
    }));
    describe("controlGroupValidator", (function() {
      it("should collect errors from the child controls", (function() {
        var one = new Control("one", validator("a", true));
        var two = new Control("one", validator("b", true));
        var g = new ControlGroup({
          "one": one,
          "two": two
        });
        expect(controlGroupValidator(g)).toEqual({
          "a": [one],
          "b": [two]
        });
      }));
      it("should not include controls that have no errors", (function() {
        var one = new Control("one", validator("a", true));
        var two = new Control("two");
        var g = new ControlGroup({
          "one": one,
          "two": two
        });
        expect(controlGroupValidator(g)).toEqual({"a": [one]});
      }));
      it("should return null when no errors", (function() {
        var g = new ControlGroup({"one": new Control("one")});
        expect(controlGroupValidator(g)).toEqual(null);
      }));
    }));
  }));
}

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/test/forms/validators_spec.map

//# sourceMappingURL=./validators_spec.map
 main();