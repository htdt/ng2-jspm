"use strict";
Object.defineProperties(module.exports, {
  required: {get: function() {
      return required;
    }},
  nullValidator: {get: function() {
      return nullValidator;
    }},
  compose: {get: function() {
      return compose;
    }},
  controlGroupValidator: {get: function() {
      return controlGroupValidator;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/src/forms/validators";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_forms__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var $__1 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    isBlank = $__1.isBlank,
    isPresent = $__1.isPresent;
var $__2 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    List = $__2.List,
    ListWrapper = $__2.ListWrapper,
    StringMapWrapper = $__2.StringMapWrapper;
var $__3 = ($__angular2_47_forms__ = require("angular2/forms"), $__angular2_47_forms__ && $__angular2_47_forms__.__esModule && $__angular2_47_forms__ || {default: $__angular2_47_forms__}),
    ControlGroup = $__3.ControlGroup,
    Control = $__3.Control;
function required(c) {
  assert.argumentTypes(c, Control);
  return isBlank(c.value) || c.value == "" ? {"required": true} : null;
}
Object.defineProperty(required, "parameters", {get: function() {
    return [[Control]];
  }});
function nullValidator(c) {
  assert.argumentTypes(c, Control);
  return null;
}
Object.defineProperty(nullValidator, "parameters", {get: function() {
    return [[Control]];
  }});
function compose(validators) {
  assert.argumentTypes(validators, assert.genericType(List, Function));
  return assert.returnType((function(c) {
    assert.argumentTypes(c, Control);
    var res = ListWrapper.reduce(validators, (function(res, validator) {
      var errors = validator(c);
      return isPresent(errors) ? StringMapWrapper.merge(res, errors) : res;
    }), {});
    return StringMapWrapper.isEmpty(res) ? null : res;
  }), Function);
}
Object.defineProperty(compose, "parameters", {get: function() {
    return [[assert.genericType(List, Function)]];
  }});
function controlGroupValidator(c) {
  assert.argumentTypes(c, ControlGroup);
  var res = {};
  StringMapWrapper.forEach(c.controls, (function(control, name) {
    if (c.contains(name) && isPresent(control.errors)) {
      StringMapWrapper.forEach(control.errors, (function(value, error) {
        if (!StringMapWrapper.contains(res, error)) {
          res[error] = [];
        }
        ListWrapper.push(res[error], control);
      }));
    }
  }));
  return StringMapWrapper.isEmpty(res) ? null : res;
}
Object.defineProperty(controlGroupValidator, "parameters", {get: function() {
    return [[ControlGroup]];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/forms/validators.map

//# sourceMappingURL=./validators.map