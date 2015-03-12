"use strict";
Object.defineProperties(module.exports, {
  createDefaultSteps: {get: function() {
      return createDefaultSteps;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/src/core/compiler/pipeline/default_steps";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_change_95_detection__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_property_95_binding_95_parser__,
    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_text_95_interpolation_95_parser__,
    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_directive_95_parser__,
    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_view_95_splitter__,
    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_element_95_binding_95_marker__,
    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_proto_95_view_95_builder__,
    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_proto_95_element_95_injector_95_builder__,
    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_element_95_binder_95_builder__,
    $__angular2_47_src_47_core_47_compiler_47_css_95_processor__,
    $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__,
    $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var $__1 = ($__angular2_47_change_95_detection__ = require("angular2/change_detection"), $__angular2_47_change_95_detection__ && $__angular2_47_change_95_detection__.__esModule && $__angular2_47_change_95_detection__ || {default: $__angular2_47_change_95_detection__}),
    ChangeDetection = $__1.ChangeDetection,
    Parser = $__1.Parser;
var $__2 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    List = $__2.List,
    ListWrapper = $__2.ListWrapper;
var isPresent = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).isPresent;
var PropertyBindingParser = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_property_95_binding_95_parser__ = require("./property_binding_parser"), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_property_95_binding_95_parser__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_property_95_binding_95_parser__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_property_95_binding_95_parser__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_property_95_binding_95_parser__}).PropertyBindingParser;
var TextInterpolationParser = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_text_95_interpolation_95_parser__ = require("./text_interpolation_parser"), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_text_95_interpolation_95_parser__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_text_95_interpolation_95_parser__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_text_95_interpolation_95_parser__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_text_95_interpolation_95_parser__}).TextInterpolationParser;
var DirectiveParser = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_directive_95_parser__ = require("./directive_parser"), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_directive_95_parser__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_directive_95_parser__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_directive_95_parser__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_directive_95_parser__}).DirectiveParser;
var ViewSplitter = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_view_95_splitter__ = require("./view_splitter"), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_view_95_splitter__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_view_95_splitter__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_view_95_splitter__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_view_95_splitter__}).ViewSplitter;
var ElementBindingMarker = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_element_95_binding_95_marker__ = require("./element_binding_marker"), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_element_95_binding_95_marker__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_element_95_binding_95_marker__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_element_95_binding_95_marker__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_element_95_binding_95_marker__}).ElementBindingMarker;
var ProtoViewBuilder = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_proto_95_view_95_builder__ = require("./proto_view_builder"), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_proto_95_view_95_builder__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_proto_95_view_95_builder__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_proto_95_view_95_builder__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_proto_95_view_95_builder__}).ProtoViewBuilder;
var ProtoElementInjectorBuilder = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_proto_95_element_95_injector_95_builder__ = require("./proto_element_injector_builder"), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_proto_95_element_95_injector_95_builder__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_proto_95_element_95_injector_95_builder__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_proto_95_element_95_injector_95_builder__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_proto_95_element_95_injector_95_builder__}).ProtoElementInjectorBuilder;
var ElementBinderBuilder = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_element_95_binder_95_builder__ = require("./element_binder_builder"), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_element_95_binder_95_builder__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_element_95_binder_95_builder__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_element_95_binder_95_builder__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_element_95_binder_95_builder__}).ElementBinderBuilder;
var CssProcessor = ($__angular2_47_src_47_core_47_compiler_47_css_95_processor__ = require("angular2/src/core/compiler/css_processor"), $__angular2_47_src_47_core_47_compiler_47_css_95_processor__ && $__angular2_47_src_47_core_47_compiler_47_css_95_processor__.__esModule && $__angular2_47_src_47_core_47_compiler_47_css_95_processor__ || {default: $__angular2_47_src_47_core_47_compiler_47_css_95_processor__}).CssProcessor;
var DirectiveMetadata = ($__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__ = require("angular2/src/core/compiler/directive_metadata"), $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__ && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__.__esModule && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__ || {default: $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__}).DirectiveMetadata;
var $__14 = ($__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__ = require("angular2/src/core/compiler/shadow_dom_strategy"), $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__ && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__.__esModule && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__ || {default: $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__}),
    ShadowDomStrategy = $__14.ShadowDomStrategy,
    EmulatedScopedShadowDomStrategy = $__14.EmulatedScopedShadowDomStrategy;
function createDefaultSteps(changeDetection, parser, compiledComponent, directives, shadowDomStrategy, templateUrl, cssProcessor) {
  assert.argumentTypes(changeDetection, ChangeDetection, parser, Parser, compiledComponent, DirectiveMetadata, directives, assert.genericType(List, DirectiveMetadata), shadowDomStrategy, ShadowDomStrategy, templateUrl, assert.type.string, cssProcessor, CssProcessor);
  var steps = [new ViewSplitter(parser), cssProcessor.getCompileStep(compiledComponent, shadowDomStrategy, templateUrl), new PropertyBindingParser(parser), new DirectiveParser(directives), new TextInterpolationParser(parser), new ElementBindingMarker(), new ProtoViewBuilder(changeDetection, shadowDomStrategy), new ProtoElementInjectorBuilder(), new ElementBinderBuilder(parser)];
  var shadowDomStep = shadowDomStrategy.getTemplateCompileStep(compiledComponent);
  if (isPresent(shadowDomStep)) {
    ListWrapper.push(steps, shadowDomStep);
  }
  return steps;
}
Object.defineProperty(createDefaultSteps, "parameters", {get: function() {
    return [[ChangeDetection], [Parser], [DirectiveMetadata], [assert.genericType(List, DirectiveMetadata)], [ShadowDomStrategy], [assert.type.string], [CssProcessor]];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/core/compiler/pipeline/default_steps.map

//# sourceMappingURL=./default_steps.map