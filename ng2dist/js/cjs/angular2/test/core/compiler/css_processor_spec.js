var parse5Adapter = require('angular2/src/dom/parse5_adapter');
parse5Adapter.Parse5DomAdapter.makeCurrent();
"use strict";
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/test/core/compiler/css_processor_spec";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_test_95_lib__,
    $__angular2_47_src_47_core_47_compiler_47_css_95_processor__,
    $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__,
    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_pipeline__,
    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__,
    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__,
    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__,
    $__angular2_47_src_47_dom_47_dom_95_adapter__,
    $__angular2_47_src_47_core_47_annotations_47_annotations__,
    $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__,
    $__angular2_47_src_47_facade_47_collection__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var $__1 = ($__angular2_47_test_95_lib__ = require("angular2/test_lib"), $__angular2_47_test_95_lib__ && $__angular2_47_test_95_lib__.__esModule && $__angular2_47_test_95_lib__ || {default: $__angular2_47_test_95_lib__}),
    describe = $__1.describe,
    it = $__1.it,
    expect = $__1.expect,
    beforeEach = $__1.beforeEach,
    ddescribe = $__1.ddescribe,
    iit = $__1.iit,
    xit = $__1.xit,
    el = $__1.el;
var $__2 = ($__angular2_47_src_47_core_47_compiler_47_css_95_processor__ = require("angular2/src/core/compiler/css_processor"), $__angular2_47_src_47_core_47_compiler_47_css_95_processor__ && $__angular2_47_src_47_core_47_compiler_47_css_95_processor__.__esModule && $__angular2_47_src_47_core_47_compiler_47_css_95_processor__ || {default: $__angular2_47_src_47_core_47_compiler_47_css_95_processor__}),
    CssProcessor = $__2.CssProcessor,
    CssTransformer = $__2.CssTransformer;
var ShadowDomStrategy = ($__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__ = require("angular2/src/core/compiler/shadow_dom_strategy"), $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__ && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__.__esModule && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__ || {default: $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__}).ShadowDomStrategy;
var CompilePipeline = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_pipeline__ = require("angular2/src/core/compiler/pipeline/compile_pipeline"), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_pipeline__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_pipeline__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_pipeline__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_pipeline__}).CompilePipeline;
var CompileElement = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ = require("angular2/src/core/compiler/pipeline/compile_element"), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__}).CompileElement;
var CompileStep = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__ = require("angular2/src/core/compiler/pipeline/compile_step"), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__}).CompileStep;
var CompileControl = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__ = require("angular2/src/core/compiler/pipeline/compile_control"), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__}).CompileControl;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var Component = ($__angular2_47_src_47_core_47_annotations_47_annotations__ = require("angular2/src/core/annotations/annotations"), $__angular2_47_src_47_core_47_annotations_47_annotations__ && $__angular2_47_src_47_core_47_annotations_47_annotations__.__esModule && $__angular2_47_src_47_core_47_annotations_47_annotations__ || {default: $__angular2_47_src_47_core_47_annotations_47_annotations__}).Component;
var DirectiveMetadata = ($__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__ = require("angular2/src/core/compiler/directive_metadata"), $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__ && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__.__esModule && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__ || {default: $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__}).DirectiveMetadata;
var ListWrapper = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}).ListWrapper;
function main() {
  describe('CssProcessor', (function() {
    describe('compile step', (function() {
      function createPipeline(cssProcessor, strategy, templateUrl) {
        assert.argumentTypes(cssProcessor, CssProcessor, strategy, ShadowDomStrategy, templateUrl, assert.type.string);
        var annotation = new Component();
        var meta = new DirectiveMetadata(SomeComponent, annotation);
        return new CompilePipeline([cssProcessor.getCompileStep(meta, strategy, templateUrl)]);
      }
      Object.defineProperty(createPipeline, "parameters", {get: function() {
          return [[CssProcessor], [ShadowDomStrategy], [assert.type.string]];
        }});
      it('it should set ignoreBindings to true for style elements', (function() {
        var strategy = new FakeShadowDomStrategy(null);
        var cssProcessor = new CssProcessor(null);
        var pipeline = createPipeline(cssProcessor, strategy, 'http://base');
        var results = pipeline.process(el('<div><style></style></div>'));
        expect(results[0].ignoreBindings).toBe(false);
        expect(results[1].ignoreBindings).toBe(true);
      }));
      it('should execute the strategy step for style elements', (function() {
        var processedEls = [];
        var compileStep = new MockStep((function(parent, current, control) {
          ListWrapper.push(processedEls, current.element);
        }));
        var strategy = new FakeShadowDomStrategy(compileStep);
        var cssProcessor = new CssProcessor(null);
        var pipeline = createPipeline(cssProcessor, strategy, 'http://base');
        var results = pipeline.process(el('<div><style></style></div>'));
        expect(processedEls.length).toEqual(1);
        expect(processedEls[0]).toBe(results[1].element);
      }));
      it('should apply the given transformers', (function() {
        var strategy = new FakeShadowDomStrategy(null);
        var cssProcessor = new CssProcessor([new FakeCssTransformer('/*transformer1 */'), new FakeCssTransformer('/*transformer2 */')]);
        var pipeline = createPipeline(cssProcessor, strategy, 'http://base');
        var results = pipeline.process(el('<div><style></style></div>'));
        expect(results[1].element).toHaveText('/*transformer1 *//*transformer2 */');
      }));
    }));
  }));
}
var FakeShadowDomStrategy = function FakeShadowDomStrategy(compileStep) {
  assert.argumentTypes(compileStep, CompileStep);
  $traceurRuntime.superConstructor($FakeShadowDomStrategy).call(this);
  this._compileStep = compileStep;
};
var $FakeShadowDomStrategy = FakeShadowDomStrategy;
($traceurRuntime.createClass)(FakeShadowDomStrategy, {getStyleCompileStep: function(cmpMetadata, templateUrl) {
    assert.argumentTypes(cmpMetadata, DirectiveMetadata, templateUrl, assert.type.string);
    return assert.returnType((this._compileStep), CompileStep);
  }}, {}, ShadowDomStrategy);
Object.defineProperty(FakeShadowDomStrategy, "parameters", {get: function() {
    return [[CompileStep]];
  }});
Object.defineProperty(FakeShadowDomStrategy.prototype.getStyleCompileStep, "parameters", {get: function() {
    return [[DirectiveMetadata], [assert.type.string]];
  }});
var MockStep = function MockStep(process) {
  $traceurRuntime.superConstructor($MockStep).call(this);
  this.processClosure = process;
};
var $MockStep = MockStep;
($traceurRuntime.createClass)(MockStep, {process: function(parent, current, control) {
    assert.argumentTypes(parent, CompileElement, current, CompileElement, control, CompileControl);
    this.processClosure(parent, current, control);
  }}, {}, CompileStep);
Object.defineProperty(MockStep.prototype.process, "parameters", {get: function() {
    return [[CompileElement], [CompileElement], [CompileControl]];
  }});
var FakeCssTransformer = function FakeCssTransformer(css) {
  assert.argumentTypes(css, assert.type.string);
  $traceurRuntime.superConstructor($FakeCssTransformer).call(this);
  this._css = css;
};
var $FakeCssTransformer = FakeCssTransformer;
($traceurRuntime.createClass)(FakeCssTransformer, {transform: function(styleEl) {
    var cssText = DOM.getText(styleEl);
    cssText += this._css;
    DOM.setText(styleEl, cssText);
  }}, {}, CssTransformer);
Object.defineProperty(FakeCssTransformer, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
var SomeComponent = function SomeComponent() {};
($traceurRuntime.createClass)(SomeComponent, {}, {});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/test/core/compiler/css_processor_spec.map

//# sourceMappingURL=./css_processor_spec.map
 main();