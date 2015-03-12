"use strict";
Object.defineProperties(module.exports, {
  CompileElement: {get: function() {
      return CompileElement;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/src/core/compiler/pipeline/compile_element";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_dom_47_dom_95_adapter__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__,
    $__angular2_47_src_47_core_47_annotations_47_annotations__,
    $__angular2_47_src_47_core_47_compiler_47_element_95_binder__,
    $__angular2_47_src_47_core_47_compiler_47_element_95_injector__,
    $__angular2_47_src_47_core_47_compiler_47_view__,
    $__angular2_47_change_95_detection__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var $__1 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    List = $__1.List,
    Map = $__1.Map,
    ListWrapper = $__1.ListWrapper,
    MapWrapper = $__1.MapWrapper;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var $__3 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    int = $__3.int,
    isBlank = $__3.isBlank,
    isPresent = $__3.isPresent,
    Type = $__3.Type,
    StringJoiner = $__3.StringJoiner,
    assertionsEnabled = $__3.assertionsEnabled;
var DirectiveMetadata = ($__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__ = require("../directive_metadata"), $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__ && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__.__esModule && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__ || {default: $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__}).DirectiveMetadata;
var $__5 = ($__angular2_47_src_47_core_47_annotations_47_annotations__ = require("../../annotations/annotations"), $__angular2_47_src_47_core_47_annotations_47_annotations__ && $__angular2_47_src_47_core_47_annotations_47_annotations__.__esModule && $__angular2_47_src_47_core_47_annotations_47_annotations__ || {default: $__angular2_47_src_47_core_47_annotations_47_annotations__}),
    Decorator = $__5.Decorator,
    Component = $__5.Component,
    Viewport = $__5.Viewport;
var ElementBinder = ($__angular2_47_src_47_core_47_compiler_47_element_95_binder__ = require("../element_binder"), $__angular2_47_src_47_core_47_compiler_47_element_95_binder__ && $__angular2_47_src_47_core_47_compiler_47_element_95_binder__.__esModule && $__angular2_47_src_47_core_47_compiler_47_element_95_binder__ || {default: $__angular2_47_src_47_core_47_compiler_47_element_95_binder__}).ElementBinder;
var ProtoElementInjector = ($__angular2_47_src_47_core_47_compiler_47_element_95_injector__ = require("../element_injector"), $__angular2_47_src_47_core_47_compiler_47_element_95_injector__ && $__angular2_47_src_47_core_47_compiler_47_element_95_injector__.__esModule && $__angular2_47_src_47_core_47_compiler_47_element_95_injector__ || {default: $__angular2_47_src_47_core_47_compiler_47_element_95_injector__}).ProtoElementInjector;
var ProtoView = ($__angular2_47_src_47_core_47_compiler_47_view__ = require("../view"), $__angular2_47_src_47_core_47_compiler_47_view__ && $__angular2_47_src_47_core_47_compiler_47_view__.__esModule && $__angular2_47_src_47_core_47_compiler_47_view__ || {default: $__angular2_47_src_47_core_47_compiler_47_view__}).ProtoView;
var AST = ($__angular2_47_change_95_detection__ = require("angular2/change_detection"), $__angular2_47_change_95_detection__ && $__angular2_47_change_95_detection__.__esModule && $__angular2_47_change_95_detection__ || {default: $__angular2_47_change_95_detection__}).AST;
var CompileElement = function CompileElement(element) {
  var compilationUnit = arguments[1] !== (void 0) ? arguments[1] : '';
  this.element = element;
  this._attrs = null;
  this._classList = null;
  this.textNodeBindings = null;
  this.propertyBindings = null;
  this.eventBindings = null;
  this.variableBindings = null;
  this.decoratorDirectives = null;
  this.viewportDirective = null;
  this.componentDirective = null;
  this._allDirectives = null;
  this.isViewRoot = false;
  this.hasBindings = false;
  this.inheritedProtoView = null;
  this.inheritedProtoElementInjector = null;
  this.inheritedElementBinder = null;
  this.distanceToParentInjector = 0;
  this.compileChildren = true;
  this.ignoreBindings = false;
  var tplDesc = assertionsEnabled() ? getElementDescription(element) : null;
  if (compilationUnit !== '') {
    this.elementDescription = compilationUnit;
    if (isPresent(tplDesc))
      this.elementDescription += ": " + tplDesc;
  } else {
    this.elementDescription = tplDesc;
  }
};
($traceurRuntime.createClass)(CompileElement, {
  refreshAttrs: function() {
    this._attrs = null;
  },
  attrs: function() {
    if (isBlank(this._attrs)) {
      this._attrs = DOM.attributeMap(this.element);
    }
    return assert.returnType((this._attrs), assert.genericType(Map, assert.type.string, assert.type.string));
  },
  refreshClassList: function() {
    this._classList = null;
  },
  classList: function() {
    if (isBlank(this._classList)) {
      this._classList = ListWrapper.create();
      var elClassList = DOM.classList(this.element);
      for (var i = 0; i < elClassList.length; i++) {
        ListWrapper.push(this._classList, elClassList[i]);
      }
    }
    return assert.returnType((this._classList), assert.genericType(List, assert.type.string));
  },
  addTextNodeBinding: function(indexInParent, expression) {
    assert.argumentTypes(indexInParent, int, expression, AST);
    if (isBlank(this.textNodeBindings)) {
      this.textNodeBindings = MapWrapper.create();
    }
    MapWrapper.set(this.textNodeBindings, indexInParent, expression);
  },
  addPropertyBinding: function(property, expression) {
    assert.argumentTypes(property, assert.type.string, expression, AST);
    if (isBlank(this.propertyBindings)) {
      this.propertyBindings = MapWrapper.create();
    }
    MapWrapper.set(this.propertyBindings, property, expression);
  },
  addVariableBinding: function(variableName, variableValue) {
    assert.argumentTypes(variableName, assert.type.string, variableValue, assert.type.string);
    if (isBlank(this.variableBindings)) {
      this.variableBindings = MapWrapper.create();
    }
    MapWrapper.set(this.variableBindings, variableValue, variableName);
  },
  addEventBinding: function(eventName, expression) {
    assert.argumentTypes(eventName, assert.type.string, expression, AST);
    if (isBlank(this.eventBindings)) {
      this.eventBindings = MapWrapper.create();
    }
    MapWrapper.set(this.eventBindings, eventName, expression);
  },
  addDirective: function(directive) {
    assert.argumentTypes(directive, DirectiveMetadata);
    var annotation = directive.annotation;
    this._allDirectives = null;
    if (annotation instanceof Decorator) {
      if (isBlank(this.decoratorDirectives)) {
        this.decoratorDirectives = ListWrapper.create();
      }
      ListWrapper.push(this.decoratorDirectives, directive);
      if (!annotation.compileChildren) {
        this.compileChildren = false;
      }
    } else if (annotation instanceof Viewport) {
      this.viewportDirective = directive;
    } else if (annotation instanceof Component) {
      this.componentDirective = directive;
    }
  },
  getAllDirectives: function() {
    if (this._allDirectives === null) {
      var directives = ListWrapper.create();
      if (isPresent(this.componentDirective)) {
        ListWrapper.push(directives, this.componentDirective);
      }
      if (isPresent(this.viewportDirective)) {
        ListWrapper.push(directives, this.viewportDirective);
      }
      if (isPresent(this.decoratorDirectives)) {
        directives = ListWrapper.concat(directives, this.decoratorDirectives);
      }
      this._allDirectives = directives;
    }
    return assert.returnType((this._allDirectives), assert.genericType(List, DirectiveMetadata));
  }
}, {});
Object.defineProperty(CompileElement.prototype.addTextNodeBinding, "parameters", {get: function() {
    return [[int], [AST]];
  }});
Object.defineProperty(CompileElement.prototype.addPropertyBinding, "parameters", {get: function() {
    return [[assert.type.string], [AST]];
  }});
Object.defineProperty(CompileElement.prototype.addVariableBinding, "parameters", {get: function() {
    return [[assert.type.string], [assert.type.string]];
  }});
Object.defineProperty(CompileElement.prototype.addEventBinding, "parameters", {get: function() {
    return [[assert.type.string], [AST]];
  }});
Object.defineProperty(CompileElement.prototype.addDirective, "parameters", {get: function() {
    return [[DirectiveMetadata]];
  }});
function getElementDescription(domElement) {
  var buf = new StringJoiner();
  var atts = DOM.attributeMap(domElement);
  buf.add("<");
  buf.add(DOM.tagName(domElement).toLowerCase());
  addDescriptionAttribute(buf, "id", MapWrapper.get(atts, "id"));
  addDescriptionAttribute(buf, "class", MapWrapper.get(atts, "class"));
  MapWrapper.forEach(atts, (function(attValue, attName) {
    if (attName !== "id" && attName !== "class") {
      addDescriptionAttribute(buf, attName, attValue);
    }
  }));
  buf.add(">");
  return assert.returnType((buf.toString()), assert.type.string);
}
function addDescriptionAttribute(buffer, attName, attValue) {
  assert.argumentTypes(buffer, StringJoiner, attName, assert.type.string, attValue, assert.type.any);
  if (isPresent(attValue)) {
    if (attValue.length === 0) {
      buffer.add(' ' + attName);
    } else {
      buffer.add(' ' + attName + '="' + attValue + '"');
    }
  }
}
Object.defineProperty(addDescriptionAttribute, "parameters", {get: function() {
    return [[StringJoiner], [assert.type.string], []];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/core/compiler/pipeline/compile_element.map

//# sourceMappingURL=./compile_element.map