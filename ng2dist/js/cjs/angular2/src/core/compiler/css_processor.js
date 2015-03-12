"use strict";
Object.defineProperties(module.exports, {
  CssProcessor: {get: function() {
      return CssProcessor;
    }},
  CssTransformer: {get: function() {
      return CssTransformer;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/src/core/compiler/css_processor";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_src_47_dom_47_dom_95_adapter__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__,
    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__,
    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__,
    $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__,
    $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var isPresent = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).isPresent;
var List = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}).List;
var CompileStep = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__ = require("./pipeline/compile_step"), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__}).CompileStep;
var CompileElement = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ = require("./pipeline/compile_element"), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__}).CompileElement;
var CompileControl = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__ = require("./pipeline/compile_control"), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__}).CompileControl;
var ShadowDomStrategy = ($__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__ = require("./shadow_dom_strategy"), $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__ && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__.__esModule && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__ || {default: $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__}).ShadowDomStrategy;
var DirectiveMetadata = ($__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__ = require("./directive_metadata"), $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__ && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__.__esModule && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__ || {default: $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__}).DirectiveMetadata;
var CssProcessor = function CssProcessor(transformers) {
  assert.argumentTypes(transformers, assert.genericType(List, CssTransformer));
  this._transformers = transformers;
};
($traceurRuntime.createClass)(CssProcessor, {getCompileStep: function(cmpMetadata, shadowDomStrategy, templateUrl) {
    assert.argumentTypes(cmpMetadata, DirectiveMetadata, shadowDomStrategy, ShadowDomStrategy, templateUrl, assert.type.string);
    var strategyStep = shadowDomStrategy.getStyleCompileStep(cmpMetadata, templateUrl);
    return new _CssProcessorStep(strategyStep, this._transformers);
  }}, {});
Object.defineProperty(CssProcessor, "parameters", {get: function() {
    return [[assert.genericType(List, CssTransformer)]];
  }});
Object.defineProperty(CssProcessor.prototype.getCompileStep, "parameters", {get: function() {
    return [[DirectiveMetadata], [ShadowDomStrategy], [assert.type.string]];
  }});
var CssTransformer = function CssTransformer() {};
($traceurRuntime.createClass)(CssTransformer, {transform: function(styleElement) {}}, {});
var _CssProcessorStep = function _CssProcessorStep(strategyStep, transformers) {
  assert.argumentTypes(strategyStep, CompileStep, transformers, assert.genericType(List, CssTransformer));
  $traceurRuntime.superConstructor($_CssProcessorStep).call(this);
  this._strategyStep = strategyStep;
  this._transformers = transformers;
};
var $_CssProcessorStep = _CssProcessorStep;
($traceurRuntime.createClass)(_CssProcessorStep, {process: function(parent, current, control) {
    assert.argumentTypes(parent, CompileElement, current, CompileElement, control, CompileControl);
    if (DOM.tagName(current.element) == 'STYLE') {
      current.ignoreBindings = true;
      if (isPresent(this._transformers)) {
        var styleEl = current.element;
        for (var i = 0; i < this._transformers.length; i++) {
          this._transformers[i].transform(styleEl);
        }
      }
      if (isPresent(this._strategyStep)) {
        this._strategyStep.process(parent, current, control);
      }
    }
  }}, {}, CompileStep);
Object.defineProperty(_CssProcessorStep, "parameters", {get: function() {
    return [[CompileStep], [assert.genericType(List, CssTransformer)]];
  }});
Object.defineProperty(_CssProcessorStep.prototype.process, "parameters", {get: function() {
    return [[CompileElement], [CompileElement], [CompileControl]];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/core/compiler/css_processor.map

//# sourceMappingURL=./css_processor.map