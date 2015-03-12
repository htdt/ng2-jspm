"use strict";
Object.defineProperties(module.exports, {
  ProtoElementInjectorBuilder: {get: function() {
      return ProtoElementInjectorBuilder;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/src/core/compiler/pipeline/proto_element_injector_builder";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_core_47_compiler_47_element_95_injector__,
    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__,
    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__,
    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__,
    $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var $__1 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    isPresent = $__1.isPresent,
    isBlank = $__1.isBlank;
var $__2 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    ListWrapper = $__2.ListWrapper,
    MapWrapper = $__2.MapWrapper;
var $__3 = ($__angular2_47_src_47_core_47_compiler_47_element_95_injector__ = require("../element_injector"), $__angular2_47_src_47_core_47_compiler_47_element_95_injector__ && $__angular2_47_src_47_core_47_compiler_47_element_95_injector__.__esModule && $__angular2_47_src_47_core_47_compiler_47_element_95_injector__ || {default: $__angular2_47_src_47_core_47_compiler_47_element_95_injector__}),
    ProtoElementInjector = $__3.ProtoElementInjector,
    ComponentKeyMetaData = $__3.ComponentKeyMetaData,
    DirectiveBinding = $__3.DirectiveBinding;
var CompileStep = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__ = require("./compile_step"), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__}).CompileStep;
var CompileElement = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ = require("./compile_element"), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__}).CompileElement;
var CompileControl = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__ = require("./compile_control"), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__}).CompileControl;
var DirectiveMetadata = ($__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__ = require("../directive_metadata"), $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__ && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__.__esModule && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__ || {default: $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__}).DirectiveMetadata;
var ProtoElementInjectorBuilder = function ProtoElementInjectorBuilder() {
  $traceurRuntime.superConstructor($ProtoElementInjectorBuilder).apply(this, arguments);
};
var $ProtoElementInjectorBuilder = ProtoElementInjectorBuilder;
($traceurRuntime.createClass)(ProtoElementInjectorBuilder, {
  internalCreateProtoElementInjector: function(parent, index, directives, firstBindingIsComponent, distance) {
    return new ProtoElementInjector(parent, index, directives, firstBindingIsComponent, distance);
  },
  process: function(parent, current, control) {
    assert.argumentTypes(parent, CompileElement, current, CompileElement, control, CompileControl);
    var distanceToParentInjector = this._getDistanceToParentInjector(parent, current);
    var parentProtoElementInjector = this._getParentProtoElementInjector(parent, current);
    var injectorBindings = ListWrapper.map(current.getAllDirectives(), this._createBinding);
    if (injectorBindings.length > 0 || isPresent(current.variableBindings)) {
      var protoView = current.inheritedProtoView;
      var hasComponent = isPresent(current.componentDirective);
      current.inheritedProtoElementInjector = this.internalCreateProtoElementInjector(parentProtoElementInjector, protoView.elementBinders.length, injectorBindings, hasComponent, distanceToParentInjector);
      current.distanceToParentInjector = 0;
      if (isPresent(current.variableBindings) && !isPresent(current.viewportDirective)) {
        current.inheritedProtoElementInjector.exportComponent = hasComponent;
        current.inheritedProtoElementInjector.exportElement = !hasComponent;
        var exportImplicitName = MapWrapper.get(current.variableBindings, '\$implicit');
        if (isPresent(exportImplicitName)) {
          current.inheritedProtoElementInjector.exportImplicitName = exportImplicitName;
        }
      }
    } else {
      current.inheritedProtoElementInjector = parentProtoElementInjector;
      current.distanceToParentInjector = distanceToParentInjector;
    }
  },
  _getDistanceToParentInjector: function(parent, current) {
    return isPresent(parent) ? parent.distanceToParentInjector + 1 : 0;
  },
  _getParentProtoElementInjector: function(parent, current) {
    if (isPresent(parent) && !current.isViewRoot) {
      return parent.inheritedProtoElementInjector;
    }
    return null;
  },
  _createBinding: function(d) {
    assert.argumentTypes(d, DirectiveMetadata);
    return assert.returnType((DirectiveBinding.createFromType(d.type, d.annotation)), DirectiveBinding);
  }
}, {}, CompileStep);
Object.defineProperty(ProtoElementInjectorBuilder.prototype.process, "parameters", {get: function() {
    return [[CompileElement], [CompileElement], [CompileControl]];
  }});
Object.defineProperty(ProtoElementInjectorBuilder.prototype._createBinding, "parameters", {get: function() {
    return [[DirectiveMetadata]];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/core/compiler/pipeline/proto_element_injector_builder.map

//# sourceMappingURL=./proto_element_injector_builder.map