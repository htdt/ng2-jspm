"use strict";
Object.defineProperties(module.exports, {
  RequiredValidatorDirective: {get: function() {
      return RequiredValidatorDirective;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/src/forms/validator_directives";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_core__,
    $__angular2_47_forms__,
    $__angular2_47_forms__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var Decorator = ($__angular2_47_core__ = require("angular2/core"), $__angular2_47_core__ && $__angular2_47_core__.__esModule && $__angular2_47_core__ || {default: $__angular2_47_core__}).Decorator;
var ControlDirective = ($__angular2_47_forms__ = require("angular2/forms"), $__angular2_47_forms__ && $__angular2_47_forms__.__esModule && $__angular2_47_forms__ || {default: $__angular2_47_forms__}).ControlDirective;
var validators = ($__angular2_47_forms__ = require("angular2/forms"), $__angular2_47_forms__ && $__angular2_47_forms__.__esModule && $__angular2_47_forms__ || {default: $__angular2_47_forms__});
var RequiredValidatorDirective = function RequiredValidatorDirective(c) {
  assert.argumentTypes(c, ControlDirective);
  c.validator = validators.compose([c.validator, validators.required]);
};
($traceurRuntime.createClass)(RequiredValidatorDirective, {}, {});
Object.defineProperty(RequiredValidatorDirective, "annotations", {get: function() {
    return [new Decorator({selector: '[required]'})];
  }});
Object.defineProperty(RequiredValidatorDirective, "parameters", {get: function() {
    return [[ControlDirective]];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/forms/validator_directives.map

//# sourceMappingURL=./validator_directives.map