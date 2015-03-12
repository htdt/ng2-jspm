"use strict";
Object.defineProperties(module.exports, {
  ContextWithVariableBindings: {get: function() {
      return ContextWithVariableBindings;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/src/change_detection/parser/context_with_variable_bindings";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_facade_47_lang__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var MapWrapper = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}).MapWrapper;
var BaseException = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).BaseException;
var ContextWithVariableBindings = function ContextWithVariableBindings(parent, varBindings) {
  assert.argumentTypes(parent, assert.type.any, varBindings, Map);
  this.parent = parent;
  this.varBindings = varBindings;
};
($traceurRuntime.createClass)(ContextWithVariableBindings, {
  hasBinding: function(name) {
    assert.argumentTypes(name, assert.type.string);
    return assert.returnType((MapWrapper.contains(this.varBindings, name)), assert.type.boolean);
  },
  get: function(name) {
    assert.argumentTypes(name, assert.type.string);
    return MapWrapper.get(this.varBindings, name);
  },
  set: function(name, value) {
    assert.argumentTypes(name, assert.type.string, value, assert.type.any);
    if (this.hasBinding(name)) {
      MapWrapper.set(this.varBindings, name, value);
    } else {
      throw new BaseException('VariableBindings do not support setting of new keys post-construction.');
    }
  },
  clearValues: function() {
    MapWrapper.clearValues(this.varBindings);
  }
}, {});
Object.defineProperty(ContextWithVariableBindings, "parameters", {get: function() {
    return [[assert.type.any], [Map]];
  }});
Object.defineProperty(ContextWithVariableBindings.prototype.hasBinding, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
Object.defineProperty(ContextWithVariableBindings.prototype.get, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
Object.defineProperty(ContextWithVariableBindings.prototype.set, "parameters", {get: function() {
    return [[assert.type.string], []];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/change_detection/parser/context_with_variable_bindings.map

//# sourceMappingURL=./context_with_variable_bindings.map