"use strict";
Object.defineProperties(module.exports, {
  PropertyBindingParser: {get: function() {
      return PropertyBindingParser;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/src/core/compiler/pipeline/property_binding_parser";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_change_95_detection__,
    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__,
    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__,
    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var $__1 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    isPresent = $__1.isPresent,
    isBlank = $__1.isBlank,
    RegExpWrapper = $__1.RegExpWrapper,
    BaseException = $__1.BaseException;
var MapWrapper = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}).MapWrapper;
var $__3 = ($__angular2_47_change_95_detection__ = require("angular2/change_detection"), $__angular2_47_change_95_detection__ && $__angular2_47_change_95_detection__.__esModule && $__angular2_47_change_95_detection__ || {default: $__angular2_47_change_95_detection__}),
    Parser = $__3.Parser,
    AST = $__3.AST,
    ExpressionWithSource = $__3.ExpressionWithSource;
var CompileStep = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__ = require("./compile_step"), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__}).CompileStep;
var CompileElement = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ = require("./compile_element"), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__}).CompileElement;
var CompileControl = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__ = require("./compile_control"), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__}).CompileControl;
var BIND_NAME_REGEXP = RegExpWrapper.create('^(?:(?:(bind)|(var)|(on))-(.+))|\\[([^\\]]+)\\]|\\(([^\\)]+)\\)|(#)(.+)');
var PropertyBindingParser = function PropertyBindingParser(parser) {
  assert.argumentTypes(parser, Parser);
  $traceurRuntime.superConstructor($PropertyBindingParser).call(this);
  this._parser = parser;
};
var $PropertyBindingParser = PropertyBindingParser;
($traceurRuntime.createClass)(PropertyBindingParser, {
  process: function(parent, current, control) {
    var $__7 = this;
    assert.argumentTypes(parent, CompileElement, current, CompileElement, control, CompileControl);
    if (current.ignoreBindings) {
      return ;
    }
    var attrs = current.attrs();
    var desc = current.elementDescription;
    MapWrapper.forEach(attrs, (function(attrValue, attrName) {
      var bindParts = RegExpWrapper.firstMatch(BIND_NAME_REGEXP, attrName);
      if (isPresent(bindParts)) {
        if (isPresent(bindParts[1])) {
          current.addPropertyBinding(bindParts[4], $__7._parseBinding(attrValue, desc));
        } else if (isPresent(bindParts[2]) || isPresent(bindParts[7])) {
          var identifier = (isPresent(bindParts[4]) && bindParts[4] !== '') ? bindParts[4] : bindParts[8];
          var value = attrValue == '' ? '\$implicit' : attrValue;
          current.addVariableBinding(identifier, value);
        } else if (isPresent(bindParts[3])) {
          current.addEventBinding(bindParts[4], $__7._parseAction(attrValue, desc));
        } else if (isPresent(bindParts[5])) {
          current.addPropertyBinding(bindParts[5], $__7._parseBinding(attrValue, desc));
        } else if (isPresent(bindParts[6])) {
          current.addEventBinding(bindParts[6], $__7._parseBinding(attrValue, desc));
        }
      } else {
        var ast = $__7._parseInterpolation(attrValue, desc);
        if (isPresent(ast)) {
          current.addPropertyBinding(attrName, ast);
        }
      }
    }));
  },
  _parseInterpolation: function(input, location) {
    assert.argumentTypes(input, assert.type.string, location, assert.type.string);
    return assert.returnType((this._parser.parseInterpolation(input, location)), AST);
  },
  _parseBinding: function(input, location) {
    assert.argumentTypes(input, assert.type.string, location, assert.type.string);
    return assert.returnType((this._parser.parseBinding(input, location)), AST);
  },
  _parseAction: function(input, location) {
    assert.argumentTypes(input, assert.type.string, location, assert.type.string);
    return assert.returnType((this._parser.parseAction(input, location)), AST);
  }
}, {}, CompileStep);
Object.defineProperty(PropertyBindingParser, "parameters", {get: function() {
    return [[Parser]];
  }});
Object.defineProperty(PropertyBindingParser.prototype.process, "parameters", {get: function() {
    return [[CompileElement], [CompileElement], [CompileControl]];
  }});
Object.defineProperty(PropertyBindingParser.prototype._parseInterpolation, "parameters", {get: function() {
    return [[assert.type.string], [assert.type.string]];
  }});
Object.defineProperty(PropertyBindingParser.prototype._parseBinding, "parameters", {get: function() {
    return [[assert.type.string], [assert.type.string]];
  }});
Object.defineProperty(PropertyBindingParser.prototype._parseAction, "parameters", {get: function() {
    return [[assert.type.string], [assert.type.string]];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/core/compiler/pipeline/property_binding_parser.map

//# sourceMappingURL=./property_binding_parser.map