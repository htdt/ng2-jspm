"use strict";
Object.defineProperties(module.exports, {
  MockTemplateResolver: {get: function() {
      return MockTemplateResolver;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/src/mock/template_resolver_mock";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_core_47_annotations_47_template__,
    $__angular2_47_src_47_core_47_compiler_47_template_95_resolver__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var $__1 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    Map = $__1.Map,
    MapWrapper = $__1.MapWrapper,
    ListWrapper = $__1.ListWrapper;
var $__2 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    Type = $__2.Type,
    isPresent = $__2.isPresent;
var Template = ($__angular2_47_src_47_core_47_annotations_47_template__ = require("angular2/src/core/annotations/template"), $__angular2_47_src_47_core_47_annotations_47_template__ && $__angular2_47_src_47_core_47_annotations_47_template__.__esModule && $__angular2_47_src_47_core_47_annotations_47_template__ || {default: $__angular2_47_src_47_core_47_annotations_47_template__}).Template;
var TemplateResolver = ($__angular2_47_src_47_core_47_compiler_47_template_95_resolver__ = require("angular2/src/core/compiler/template_resolver"), $__angular2_47_src_47_core_47_compiler_47_template_95_resolver__ && $__angular2_47_src_47_core_47_compiler_47_template_95_resolver__.__esModule && $__angular2_47_src_47_core_47_compiler_47_template_95_resolver__ || {default: $__angular2_47_src_47_core_47_compiler_47_template_95_resolver__}).TemplateResolver;
var MockTemplateResolver = function MockTemplateResolver() {
  $traceurRuntime.superConstructor($MockTemplateResolver).call(this);
  this._cmpTemplates = MapWrapper.create();
};
var $MockTemplateResolver = MockTemplateResolver;
($traceurRuntime.createClass)(MockTemplateResolver, {
  setTemplate: function(component, template) {
    assert.argumentTypes(component, Type, template, Template);
    MapWrapper.set(this._cmpTemplates, component, template);
  },
  resolve: function(component) {
    assert.argumentTypes(component, Type);
    var override = MapWrapper.get(this._cmpTemplates, component);
    if (isPresent(override)) {
      return assert.returnType((override), Template);
    }
    return assert.returnType(($traceurRuntime.superGet(this, $MockTemplateResolver.prototype, "resolve").call(this, component)), Template);
  }
}, {}, TemplateResolver);
Object.defineProperty(MockTemplateResolver.prototype.setTemplate, "parameters", {get: function() {
    return [[Type], [Template]];
  }});
Object.defineProperty(MockTemplateResolver.prototype.resolve, "parameters", {get: function() {
    return [[Type]];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/mock/template_resolver_mock.map

//# sourceMappingURL=./template_resolver_mock.map