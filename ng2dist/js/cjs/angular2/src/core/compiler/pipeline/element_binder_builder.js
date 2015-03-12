"use strict";
Object.defineProperties(module.exports, {
  isSpecialProperty: {get: function() {
      return isSpecialProperty;
    }},
  ElementBinderBuilder: {get: function() {
      return ElementBinderBuilder;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/src/core/compiler/pipeline/element_binder_builder";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_dom_47_dom_95_adapter__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_reflection_47_reflection__,
    $__angular2_47_change_95_detection__,
    $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__,
    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__,
    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__,
    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var $__1 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    int = $__1.int,
    isPresent = $__1.isPresent,
    isBlank = $__1.isBlank,
    Type = $__1.Type,
    BaseException = $__1.BaseException,
    StringWrapper = $__1.StringWrapper,
    RegExpWrapper = $__1.RegExpWrapper,
    isString = $__1.isString,
    stringify = $__1.stringify;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var $__3 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    ListWrapper = $__3.ListWrapper,
    List = $__3.List,
    MapWrapper = $__3.MapWrapper,
    StringMapWrapper = $__3.StringMapWrapper;
var reflector = ($__angular2_47_src_47_reflection_47_reflection__ = require("angular2/src/reflection/reflection"), $__angular2_47_src_47_reflection_47_reflection__ && $__angular2_47_src_47_reflection_47_reflection__.__esModule && $__angular2_47_src_47_reflection_47_reflection__ || {default: $__angular2_47_src_47_reflection_47_reflection__}).reflector;
var $__5 = ($__angular2_47_change_95_detection__ = require("angular2/change_detection"), $__angular2_47_change_95_detection__ && $__angular2_47_change_95_detection__.__esModule && $__angular2_47_change_95_detection__ || {default: $__angular2_47_change_95_detection__}),
    Parser = $__5.Parser,
    ProtoChangeDetector = $__5.ProtoChangeDetector;
var DirectiveMetadata = ($__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__ = require("../directive_metadata"), $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__ && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__.__esModule && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__ || {default: $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__}).DirectiveMetadata;
var CompileStep = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__ = require("./compile_step"), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__}).CompileStep;
var CompileElement = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ = require("./compile_element"), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__}).CompileElement;
var CompileControl = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__ = require("./compile_control"), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__}).CompileControl;
var DOT_REGEXP = RegExpWrapper.create('\\.');
var ARIA_PREFIX = 'aria-';
var ariaSettersCache = StringMapWrapper.create();
function ariaSetterFactory(attrName) {
  assert.argumentTypes(attrName, assert.type.string);
  var setterFn = StringMapWrapper.get(ariaSettersCache, attrName);
  if (isBlank(setterFn)) {
    setterFn = function(element, value) {
      if (isPresent(value)) {
        DOM.setAttribute(element, attrName, stringify(value));
      } else {
        DOM.removeAttribute(element, attrName);
      }
    };
    StringMapWrapper.set(ariaSettersCache, attrName, setterFn);
  }
  return setterFn;
}
Object.defineProperty(ariaSetterFactory, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
var CLASS_ATTR = 'class';
var CLASS_PREFIX = 'class.';
var classSettersCache = StringMapWrapper.create();
function classSetterFactory(className) {
  assert.argumentTypes(className, assert.type.string);
  var setterFn = StringMapWrapper.get(classSettersCache, className);
  if (isBlank(setterFn)) {
    setterFn = function(element, value) {
      if (value) {
        DOM.addClass(element, className);
      } else {
        DOM.removeClass(element, className);
      }
    };
    StringMapWrapper.set(classSettersCache, className, setterFn);
  }
  return setterFn;
}
Object.defineProperty(classSetterFactory, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
var STYLE_ATTR = 'style';
var STYLE_PREFIX = 'style.';
var styleSettersCache = StringMapWrapper.create();
function styleSetterFactory(styleName, stylesuffix) {
  assert.argumentTypes(styleName, assert.type.string, stylesuffix, assert.type.string);
  var cacheKey = styleName + stylesuffix;
  var setterFn = StringMapWrapper.get(styleSettersCache, cacheKey);
  if (isBlank(setterFn)) {
    setterFn = function(element, value) {
      var valAsStr;
      if (isPresent(value)) {
        valAsStr = stringify(value);
        DOM.setStyle(element, styleName, valAsStr + stylesuffix);
      } else {
        DOM.removeStyle(element, styleName);
      }
    };
    StringMapWrapper.set(classSettersCache, cacheKey, setterFn);
  }
  return setterFn;
}
Object.defineProperty(styleSetterFactory, "parameters", {get: function() {
    return [[assert.type.string], [assert.type.string]];
  }});
var ROLE_ATTR = 'role';
function roleSetter(element, value) {
  if (isString(value)) {
    DOM.setAttribute(element, ROLE_ATTR, value);
  } else {
    DOM.removeAttribute(element, ROLE_ATTR);
    if (isPresent(value)) {
      throw new BaseException("Invalid role attribute, only string values are allowed, got '" + stringify(value) + "'");
    }
  }
}
function isSpecialProperty(propName) {
  assert.argumentTypes(propName, assert.type.string);
  return StringWrapper.startsWith(propName, ARIA_PREFIX) || StringWrapper.startsWith(propName, CLASS_PREFIX) || StringWrapper.startsWith(propName, STYLE_PREFIX) || StringMapWrapper.contains(DOM.attrToPropMap, propName);
}
Object.defineProperty(isSpecialProperty, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
var ElementBinderBuilder = function ElementBinderBuilder(parser) {
  assert.argumentTypes(parser, Parser);
  $traceurRuntime.superConstructor($ElementBinderBuilder).call(this);
  this._parser = parser;
};
var $ElementBinderBuilder = ElementBinderBuilder;
($traceurRuntime.createClass)(ElementBinderBuilder, {
  process: function(parent, current, control) {
    assert.argumentTypes(parent, CompileElement, current, CompileElement, control, CompileControl);
    var elementBinder = null;
    if (current.hasBindings) {
      var protoView = current.inheritedProtoView;
      var protoInjectorWasBuilt = isBlank(parent) ? true : current.inheritedProtoElementInjector !== parent.inheritedProtoElementInjector;
      var currentProtoElementInjector = protoInjectorWasBuilt ? current.inheritedProtoElementInjector : null;
      elementBinder = protoView.bindElement(currentProtoElementInjector, current.componentDirective, current.viewportDirective);
      if (isPresent(current.textNodeBindings)) {
        this._bindTextNodes(protoView, current);
      }
      if (isPresent(current.propertyBindings)) {
        this._bindElementProperties(protoView, current);
      }
      if (isPresent(current.eventBindings)) {
        this._bindEvents(protoView, current);
      }
      var directives = current.getAllDirectives();
      this._bindDirectiveProperties(directives, current);
      this._bindDirectiveEvents(directives, current);
    } else if (isPresent(parent)) {
      elementBinder = parent.inheritedElementBinder;
    }
    current.inheritedElementBinder = elementBinder;
  },
  _bindTextNodes: function(protoView, compileElement) {
    MapWrapper.forEach(compileElement.textNodeBindings, (function(expression, indexInParent) {
      protoView.bindTextNode(indexInParent, expression);
    }));
  },
  _bindElementProperties: function(protoView, compileElement) {
    var $__10 = this;
    MapWrapper.forEach(compileElement.propertyBindings, (function(expression, property) {
      var setterFn,
          styleParts,
          styleSuffix;
      if (StringWrapper.startsWith(property, ARIA_PREFIX)) {
        setterFn = ariaSetterFactory(property);
      } else if (StringWrapper.equals(property, ROLE_ATTR)) {
        setterFn = roleSetter;
      } else if (StringWrapper.startsWith(property, CLASS_PREFIX)) {
        setterFn = classSetterFactory(StringWrapper.substring(property, CLASS_PREFIX.length));
      } else if (StringWrapper.startsWith(property, STYLE_PREFIX)) {
        styleParts = StringWrapper.split(property, DOT_REGEXP);
        styleSuffix = styleParts.length > 2 ? ListWrapper.get(styleParts, 2) : '';
        setterFn = styleSetterFactory(ListWrapper.get(styleParts, 1), styleSuffix);
      } else {
        property = $__10._resolvePropertyName(property);
        if (StringWrapper.equals(property, 'innerHTML')) {
          setterFn = (function(element, value) {
            return DOM.setInnerHTML(element, value);
          });
        } else if (DOM.hasProperty(compileElement.element, property) || StringWrapper.equals(property, 'innerHtml')) {
          setterFn = reflector.setter(property);
        }
      }
      if (isPresent(setterFn)) {
        protoView.bindElementProperty(expression.ast, property, setterFn);
      }
    }));
  },
  _bindEvents: function(protoView, compileElement) {
    MapWrapper.forEach(compileElement.eventBindings, (function(expression, eventName) {
      protoView.bindEvent(eventName, expression);
    }));
  },
  _bindDirectiveEvents: function(directives, compileElement) {
    var $__10 = this;
    assert.argumentTypes(directives, assert.genericType(List, DirectiveMetadata), compileElement, CompileElement);
    for (var directiveIndex = 0; directiveIndex < directives.length; directiveIndex++) {
      var directive = directives[directiveIndex];
      var annotation = directive.annotation;
      if (isBlank(annotation.events))
        continue;
      var protoView = compileElement.inheritedProtoView;
      StringMapWrapper.forEach(annotation.events, (function(action, eventName) {
        var expression = $__10._parser.parseAction(action, compileElement.elementDescription);
        protoView.bindEvent(eventName, expression, directiveIndex);
      }));
    }
  },
  _bindDirectiveProperties: function(directives, compileElement) {
    var $__10 = this;
    assert.argumentTypes(directives, assert.genericType(List, DirectiveMetadata), compileElement, CompileElement);
    var protoView = compileElement.inheritedProtoView;
    for (var directiveIndex = 0; directiveIndex < directives.length; directiveIndex++) {
      var directive = ListWrapper.get(directives, directiveIndex);
      var annotation = directive.annotation;
      if (isBlank(annotation.bind))
        continue;
      StringMapWrapper.forEach(annotation.bind, (function(bindConfig, dirProp) {
        var pipes = $__10._splitBindConfig(bindConfig);
        var elProp = ListWrapper.removeAt(pipes, 0);
        var bindingAst = isPresent(compileElement.propertyBindings) ? MapWrapper.get(compileElement.propertyBindings, elProp) : null;
        if (isBlank(bindingAst)) {
          var attributeValue = MapWrapper.get(compileElement.attrs(), elProp);
          if (isPresent(attributeValue)) {
            bindingAst = $__10._parser.wrapLiteralPrimitive(attributeValue, compileElement.elementDescription);
          }
        }
        if (isPresent(bindingAst)) {
          var fullExpAstWithBindPipes = $__10._parser.addPipes(bindingAst, pipes);
          protoView.bindDirectiveProperty(directiveIndex, fullExpAstWithBindPipes, dirProp, reflector.setter(dirProp));
        }
      }));
    }
  },
  _splitBindConfig: function(bindConfig) {
    return ListWrapper.map(bindConfig.split('|'), (function(s) {
      return s.trim();
    }));
  },
  _resolvePropertyName: function(attrName) {
    assert.argumentTypes(attrName, assert.type.string);
    var mappedPropName = StringMapWrapper.get(DOM.attrToPropMap, attrName);
    return isPresent(mappedPropName) ? mappedPropName : attrName;
  }
}, {}, CompileStep);
Object.defineProperty(ElementBinderBuilder, "parameters", {get: function() {
    return [[Parser]];
  }});
Object.defineProperty(ElementBinderBuilder.prototype.process, "parameters", {get: function() {
    return [[CompileElement], [CompileElement], [CompileControl]];
  }});
Object.defineProperty(ElementBinderBuilder.prototype._bindDirectiveEvents, "parameters", {get: function() {
    return [[assert.genericType(List, DirectiveMetadata)], [CompileElement]];
  }});
Object.defineProperty(ElementBinderBuilder.prototype._bindDirectiveProperties, "parameters", {get: function() {
    return [[assert.genericType(List, DirectiveMetadata)], [CompileElement]];
  }});
Object.defineProperty(ElementBinderBuilder.prototype._splitBindConfig, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
Object.defineProperty(ElementBinderBuilder.prototype._resolvePropertyName, "parameters", {get: function() {
    return [[assert.type.string]];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/core/compiler/pipeline/element_binder_builder.map

//# sourceMappingURL=./element_binder_builder.map