var parse5Adapter = require('angular2/src/dom/parse5_adapter');
parse5Adapter.Parse5DomAdapter.makeCurrent();
"use strict";
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/test/forms/form_builder_spec";
var $__angular2_47_test_95_lib__,
    $__angular2_47_forms__,
    $__angular2_47_forms__;
var $__0 = ($__angular2_47_test_95_lib__ = require("angular2/test_lib"), $__angular2_47_test_95_lib__ && $__angular2_47_test_95_lib__.__esModule && $__angular2_47_test_95_lib__ || {default: $__angular2_47_test_95_lib__}),
    ddescribe = $__0.ddescribe,
    describe = $__0.describe,
    it = $__0.it,
    iit = $__0.iit,
    xit = $__0.xit,
    expect = $__0.expect,
    beforeEach = $__0.beforeEach,
    afterEach = $__0.afterEach,
    el = $__0.el;
var $__1 = ($__angular2_47_forms__ = require("angular2/forms"), $__angular2_47_forms__ && $__angular2_47_forms__.__esModule && $__angular2_47_forms__ || {default: $__angular2_47_forms__}),
    Control = $__1.Control,
    FormBuilder = $__1.FormBuilder;
var validations = ($__angular2_47_forms__ = require("angular2/forms"), $__angular2_47_forms__ && $__angular2_47_forms__.__esModule && $__angular2_47_forms__ || {default: $__angular2_47_forms__});
function main() {
  describe("Form Builder", (function() {
    var b;
    beforeEach((function() {
      b = new FormBuilder();
    }));
    it("should create controls from a value", (function() {
      var g = b.group({"login": "some value"});
      expect(g.controls["login"].value).toEqual("some value");
    }));
    it("should create controls from an array", (function() {
      var g = b.group({
        "login": ["some value"],
        "password": ["some value", validations.required]
      });
      expect(g.controls["login"].value).toEqual("some value");
      expect(g.controls["password"].value).toEqual("some value");
      expect(g.controls["password"].validator).toEqual(validations.required);
    }));
    it("should use controls", (function() {
      var g = b.group({"login": b.control("some value", validations.required)});
      expect(g.controls["login"].value).toEqual("some value");
      expect(g.controls["login"].validator).toBe(validations.required);
    }));
    it("should create groups with optional controls", (function() {
      var g = b.group({"login": "some value"}, {"optionals": {"login": false}});
      expect(g.contains("login")).toEqual(false);
    }));
    it("should create groups with a custom validator", (function() {
      var g = b.group({"login": "some value"}, {"validator": validations.nullValidator});
      expect(g.validator).toBe(validations.nullValidator);
    }));
    it("should use default validators when no validators are provided", (function() {
      var g = b.group({"login": "some value"});
      expect(g.controls["login"].validator).toBe(validations.nullValidator);
      expect(g.validator).toBe(validations.controlGroupValidator);
    }));
  }));
}

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/test/forms/form_builder_spec.map

//# sourceMappingURL=./form_builder_spec.map
 main();