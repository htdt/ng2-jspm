"use strict";
Object.defineProperties(module.exports, {
  Directive: {get: function() {
      return Directive;
    }},
  Component: {get: function() {
      return Component;
    }},
  Decorator: {get: function() {
      return Decorator;
    }},
  Viewport: {get: function() {
      return Viewport;
    }},
  onDestroy: {get: function() {
      return onDestroy;
    }},
  onChange: {get: function() {
      return onChange;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/src/core/annotations/annotations";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var $__1 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    ABSTRACT = $__1.ABSTRACT,
    CONST = $__1.CONST,
    normalizeBlank = $__1.normalizeBlank,
    isPresent = $__1.isPresent;
var $__2 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    ListWrapper = $__2.ListWrapper,
    List = $__2.List;
var Directive = function Directive() {
  var $__4 = arguments[0] !== (void 0) ? arguments[0] : {},
      selector = $__4.selector,
      bind = $__4.bind,
      events = $__4.events,
      lightDomServices = $__4.lightDomServices,
      implementsTypes = $__4.implementsTypes,
      lifecycle = $__4.lifecycle;
  this.selector = selector;
  this.lightDomServices = lightDomServices;
  this.implementsTypes = implementsTypes;
  this.bind = bind;
  this.events = events;
  this.lifecycle = lifecycle;
};
($traceurRuntime.createClass)(Directive, {hasLifecycleHook: function(hook) {
    assert.argumentTypes(hook, assert.type.string);
    return assert.returnType((isPresent(this.lifecycle) ? ListWrapper.contains(this.lifecycle, hook) : false), assert.type.boolean);
  }}, {});
Object.defineProperty(Directive, "annotations", {get: function() {
    return [new ABSTRACT(), new CONST()];
  }});
Object.defineProperty(Directive.prototype.hasLifecycleHook, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
var Component = function Component() {
  var $__4 = arguments[0] !== (void 0) ? arguments[0] : {},
      selector = $__4.selector,
      bind = $__4.bind,
      events = $__4.events,
      lightDomServices = $__4.lightDomServices,
      shadowDomServices = $__4.shadowDomServices,
      componentServices = $__4.componentServices,
      implementsTypes = $__4.implementsTypes,
      lifecycle = $__4.lifecycle;
  $traceurRuntime.superConstructor($Component).call(this, {
    selector: selector,
    bind: bind,
    events: events,
    lightDomServices: lightDomServices,
    implementsTypes: implementsTypes,
    lifecycle: lifecycle
  });
  this.shadowDomServices = shadowDomServices;
  this.componentServices = componentServices;
};
var $Component = Component;
($traceurRuntime.createClass)(Component, {}, {}, Directive);
Object.defineProperty(Component, "annotations", {get: function() {
    return [new CONST()];
  }});
var Decorator = function Decorator() {
  var $__5;
  var $__4 = arguments[0] !== (void 0) ? arguments[0] : {},
      selector = $__4.selector,
      bind = $__4.bind,
      events = $__4.events,
      lightDomServices = $__4.lightDomServices,
      implementsTypes = $__4.implementsTypes,
      lifecycle = $__4.lifecycle,
      compileChildren = ($__5 = $__4.compileChildren) === void 0 ? true : $__5;
  this.compileChildren = compileChildren;
  $traceurRuntime.superConstructor($Decorator).call(this, {
    selector: selector,
    bind: bind,
    events: events,
    lightDomServices: lightDomServices,
    implementsTypes: implementsTypes,
    lifecycle: lifecycle
  });
};
var $Decorator = Decorator;
($traceurRuntime.createClass)(Decorator, {}, {}, Directive);
Object.defineProperty(Decorator, "annotations", {get: function() {
    return [new CONST()];
  }});
var Viewport = function Viewport() {
  var $__4 = arguments[0] !== (void 0) ? arguments[0] : {},
      selector = $__4.selector,
      bind = $__4.bind,
      events = $__4.events,
      lightDomServices = $__4.lightDomServices,
      implementsTypes = $__4.implementsTypes,
      lifecycle = $__4.lifecycle;
  $traceurRuntime.superConstructor($Viewport).call(this, {
    selector: selector,
    bind: bind,
    events: events,
    lightDomServices: lightDomServices,
    implementsTypes: implementsTypes,
    lifecycle: lifecycle
  });
};
var $Viewport = Viewport;
($traceurRuntime.createClass)(Viewport, {}, {}, Directive);
Object.defineProperty(Viewport, "annotations", {get: function() {
    return [new CONST()];
  }});
var onDestroy = "onDestroy";
var onChange = "onChange";

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/core/annotations/annotations.map

//# sourceMappingURL=./annotations.map