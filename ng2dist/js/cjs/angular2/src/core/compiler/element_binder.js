"use strict";
Object.defineProperties(module.exports, {
  ElementBinder: {get: function() {
      return ElementBinder;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/src/core/compiler/element_binder";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_src_47_core_47_compiler_47_element_95_injector__,
    $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_core_47_compiler_47_view__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var ProtoElementInjector = ($__angular2_47_src_47_core_47_compiler_47_element_95_injector__ = require("./element_injector"), $__angular2_47_src_47_core_47_compiler_47_element_95_injector__ && $__angular2_47_src_47_core_47_compiler_47_element_95_injector__.__esModule && $__angular2_47_src_47_core_47_compiler_47_element_95_injector__ || {default: $__angular2_47_src_47_core_47_compiler_47_element_95_injector__}).ProtoElementInjector;
var DirectiveMetadata = ($__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__ = require("./directive_metadata"), $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__ && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__.__esModule && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__ || {default: $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__}).DirectiveMetadata;
var $__3 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    List = $__3.List,
    StringMap = $__3.StringMap;
var ProtoView = ($__angular2_47_src_47_core_47_compiler_47_view__ = require("./view"), $__angular2_47_src_47_core_47_compiler_47_view__ && $__angular2_47_src_47_core_47_compiler_47_view__.__esModule && $__angular2_47_src_47_core_47_compiler_47_view__ || {default: $__angular2_47_src_47_core_47_compiler_47_view__}).ProtoView;
var ElementBinder = function ElementBinder(protoElementInjector, componentDirective, viewportDirective) {
  assert.argumentTypes(protoElementInjector, ProtoElementInjector, componentDirective, DirectiveMetadata, viewportDirective, DirectiveMetadata);
  this.protoElementInjector = protoElementInjector;
  this.componentDirective = componentDirective;
  this.viewportDirective = viewportDirective;
  this.events = null;
  this.textNodeIndices = null;
  this.hasElementPropertyBindings = false;
  this.nestedProtoView = null;
};
($traceurRuntime.createClass)(ElementBinder, {}, {});
Object.defineProperty(ElementBinder, "parameters", {get: function() {
    return [[ProtoElementInjector], [DirectiveMetadata], [DirectiveMetadata]];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/core/compiler/element_binder.map

//# sourceMappingURL=./element_binder.map