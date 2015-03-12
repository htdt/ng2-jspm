"use strict";
Object.defineProperties(module.exports, {
  TemplateResolver: {get: function() {
      return TemplateResolver;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/src/core/compiler/template_resolver";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_src_47_core_47_annotations_47_template__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_reflection_47_reflection__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var Template = ($__angular2_47_src_47_core_47_annotations_47_template__ = require("angular2/src/core/annotations/template"), $__angular2_47_src_47_core_47_annotations_47_template__ && $__angular2_47_src_47_core_47_annotations_47_template__.__esModule && $__angular2_47_src_47_core_47_annotations_47_template__ || {default: $__angular2_47_src_47_core_47_annotations_47_template__}).Template;
var $__2 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    Type = $__2.Type,
    stringify = $__2.stringify,
    isBlank = $__2.isBlank,
    BaseException = $__2.BaseException;
var $__3 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    Map = $__3.Map,
    MapWrapper = $__3.MapWrapper,
    List = $__3.List,
    ListWrapper = $__3.ListWrapper;
var reflector = ($__angular2_47_src_47_reflection_47_reflection__ = require("angular2/src/reflection/reflection"), $__angular2_47_src_47_reflection_47_reflection__ && $__angular2_47_src_47_reflection_47_reflection__.__esModule && $__angular2_47_src_47_reflection_47_reflection__ || {default: $__angular2_47_src_47_reflection_47_reflection__}).reflector;
var TemplateResolver = function TemplateResolver() {
  this._cache = MapWrapper.create();
};
($traceurRuntime.createClass)(TemplateResolver, {
  resolve: function(component) {
    assert.argumentTypes(component, Type);
    var template = MapWrapper.get(this._cache, component);
    if (isBlank(template)) {
      template = this._resolve(component);
      MapWrapper.set(this._cache, component, template);
    }
    return assert.returnType((template), Template);
  },
  _resolve: function(component) {
    assert.argumentTypes(component, Type);
    var annotations = reflector.annotations(component);
    for (var i = 0; i < annotations.length; i++) {
      var annotation = annotations[i];
      if (annotation instanceof Template) {
        return annotation;
      }
    }
    throw new BaseException(("No template found for " + stringify(component)));
  }
}, {});
Object.defineProperty(TemplateResolver.prototype.resolve, "parameters", {get: function() {
    return [[Type]];
  }});
Object.defineProperty(TemplateResolver.prototype._resolve, "parameters", {get: function() {
    return [[Type]];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/core/compiler/template_resolver.map

//# sourceMappingURL=./template_resolver.map