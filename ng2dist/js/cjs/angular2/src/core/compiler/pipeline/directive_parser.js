"use strict";
Object.defineProperties(module.exports, {
  DirectiveParser: {get: function() {
      return DirectiveParser;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/src/core/compiler/pipeline/directive_parser";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_dom_47_dom_95_adapter__,
    $__angular2_47_src_47_core_47_compiler_47_selector__,
    $__angular2_47_src_47_core_47_compiler_47_selector__,
    $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__,
    $__angular2_47_src_47_core_47_annotations_47_annotations__,
    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__,
    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__,
    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__,
    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_element_95_binder_95_builder__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var $__1 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    isPresent = $__1.isPresent,
    isBlank = $__1.isBlank,
    BaseException = $__1.BaseException,
    assertionsEnabled = $__1.assertionsEnabled,
    RegExpWrapper = $__1.RegExpWrapper;
var $__2 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    List = $__2.List,
    MapWrapper = $__2.MapWrapper,
    StringMapWrapper = $__2.StringMapWrapper;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var SelectorMatcher = ($__angular2_47_src_47_core_47_compiler_47_selector__ = require("../selector"), $__angular2_47_src_47_core_47_compiler_47_selector__ && $__angular2_47_src_47_core_47_compiler_47_selector__.__esModule && $__angular2_47_src_47_core_47_compiler_47_selector__ || {default: $__angular2_47_src_47_core_47_compiler_47_selector__}).SelectorMatcher;
var CssSelector = ($__angular2_47_src_47_core_47_compiler_47_selector__ = require("../selector"), $__angular2_47_src_47_core_47_compiler_47_selector__ && $__angular2_47_src_47_core_47_compiler_47_selector__.__esModule && $__angular2_47_src_47_core_47_compiler_47_selector__ || {default: $__angular2_47_src_47_core_47_compiler_47_selector__}).CssSelector;
var DirectiveMetadata = ($__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__ = require("../directive_metadata"), $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__ && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__.__esModule && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__ || {default: $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__}).DirectiveMetadata;
var $__7 = ($__angular2_47_src_47_core_47_annotations_47_annotations__ = require("../../annotations/annotations"), $__angular2_47_src_47_core_47_annotations_47_annotations__ && $__angular2_47_src_47_core_47_annotations_47_annotations__.__esModule && $__angular2_47_src_47_core_47_annotations_47_annotations__ || {default: $__angular2_47_src_47_core_47_annotations_47_annotations__}),
    Component = $__7.Component,
    Viewport = $__7.Viewport;
var CompileStep = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__ = require("./compile_step"), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__}).CompileStep;
var CompileElement = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ = require("./compile_element"), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__}).CompileElement;
var CompileControl = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__ = require("./compile_control"), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__}).CompileControl;
var isSpecialProperty = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_element_95_binder_95_builder__ = require("./element_binder_builder"), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_element_95_binder_95_builder__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_element_95_binder_95_builder__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_element_95_binder_95_builder__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_element_95_binder_95_builder__}).isSpecialProperty;
;
var PROPERTY_BINDING_REGEXP = RegExpWrapper.create('^ *([^\\s\\|]+)');
var DirectiveParser = function DirectiveParser(directives) {
  assert.argumentTypes(directives, assert.genericType(List, DirectiveMetadata));
  $traceurRuntime.superConstructor($DirectiveParser).call(this);
  var selector;
  this._selectorMatcher = new SelectorMatcher();
  for (var i = 0; i < directives.length; i++) {
    var directiveMetadata = directives[i];
    selector = CssSelector.parse(directiveMetadata.annotation.selector);
    this._selectorMatcher.addSelectable(selector, directiveMetadata);
  }
};
var $DirectiveParser = DirectiveParser;
($traceurRuntime.createClass)(DirectiveParser, {process: function(parent, current, control) {
    assert.argumentTypes(parent, CompileElement, current, CompileElement, control, CompileControl);
    var attrs = current.attrs();
    var classList = current.classList();
    var cssSelector = new CssSelector();
    cssSelector.setElement(DOM.nodeName(current.element));
    for (var i = 0; i < classList.length; i++) {
      cssSelector.addClassName(classList[i]);
    }
    MapWrapper.forEach(attrs, (function(attrValue, attrName) {
      if (isBlank(current.propertyBindings) || isPresent(current.propertyBindings) && !MapWrapper.contains(current.propertyBindings, attrName)) {
        cssSelector.addAttribute(attrName, attrValue);
      }
    }));
    if (isPresent(current.propertyBindings)) {
      MapWrapper.forEach(current.propertyBindings, (function(expression, prop) {
        cssSelector.addAttribute(prop, expression.source);
      }));
    }
    if (isPresent(current.variableBindings)) {
      MapWrapper.forEach(current.variableBindings, (function(value, name) {
        cssSelector.addAttribute(name, value);
      }));
    }
    var isTemplateElement = DOM.isTemplateElement(current.element);
    var matchedProperties;
    this._selectorMatcher.match(cssSelector, (function(selector, directive) {
      matchedProperties = updateMatchedProperties(matchedProperties, selector, directive);
      checkDirectiveValidity(directive, current, isTemplateElement);
      current.addDirective(directive);
    }));
    checkMissingDirectives(current, matchedProperties, isTemplateElement);
  }}, {}, CompileStep);
Object.defineProperty(DirectiveParser, "parameters", {get: function() {
    return [[assert.genericType(List, DirectiveMetadata)]];
  }});
Object.defineProperty(DirectiveParser.prototype.process, "parameters", {get: function() {
    return [[CompileElement], [CompileElement], [CompileControl]];
  }});
function updateMatchedProperties(matchedProperties, selector, directive) {
  if (assertionsEnabled()) {
    var attrs = selector.attrs;
    if (!isPresent(matchedProperties)) {
      matchedProperties = StringMapWrapper.create();
    }
    if (isPresent(attrs)) {
      for (var idx = 0; idx < attrs.length; idx += 2) {
        StringMapWrapper.set(matchedProperties, attrs[idx], true);
      }
    }
    if (isPresent(directive.annotation) && isPresent(directive.annotation.bind)) {
      var bindMap = directive.annotation.bind;
      StringMapWrapper.forEach(bindMap, (function(value, key) {
        var bindProp = RegExpWrapper.firstMatch(PROPERTY_BINDING_REGEXP, value);
        if (isPresent(bindProp) && isPresent(bindProp[1])) {
          StringMapWrapper.set(matchedProperties, bindProp[1], true);
        }
      }));
    }
  }
  return matchedProperties;
}
function checkDirectiveValidity(directive, current, isTemplateElement) {
  if (directive.annotation instanceof Viewport) {
    if (!isTemplateElement) {
      throw new BaseException("Viewport directives need to be placed on <template> elements or elements " + ("with template attribute - check " + current.elementDescription));
    } else if (isPresent(current.viewportDirective)) {
      throw new BaseException(("Only one viewport directive can be used per element - check " + current.elementDescription));
    }
  } else if (isTemplateElement) {
    throw new BaseException(("Only template directives are allowed on template elements - check " + current.elementDescription));
  } else if ((directive.annotation instanceof Component) && isPresent(current.componentDirective)) {
    throw new BaseException(("Multiple component directives not allowed on the same element - check " + current.elementDescription));
  }
}
function checkMissingDirectives(current, matchedProperties, isTemplateElement) {
  if (assertionsEnabled()) {
    var ppBindings = current.propertyBindings;
    if (isPresent(ppBindings)) {
      MapWrapper.forEach(ppBindings, (function(expression, prop) {
        if (!DOM.hasProperty(current.element, prop) && !isSpecialProperty(prop)) {
          if (!isPresent(matchedProperties) || !isPresent(StringMapWrapper.get(matchedProperties, prop))) {
            throw new BaseException(("Missing directive to handle '" + prop + "' in " + current.elementDescription));
          }
        }
      }));
    }
    if (isTemplateElement && !current.isViewRoot && !isPresent(current.viewportDirective)) {
      throw new BaseException(("Missing directive to handle: " + current.elementDescription));
    }
  }
}

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/core/compiler/pipeline/directive_parser.map

//# sourceMappingURL=./directive_parser.map