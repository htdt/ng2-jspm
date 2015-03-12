var parse5Adapter = require('angular2/src/dom/parse5_adapter');
parse5Adapter.Parse5DomAdapter.makeCurrent();
"use strict";
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/test/core/compiler/pipeline/text_interpolation_parser_spec";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_test_95_lib__,
    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_text_95_interpolation_95_parser__,
    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_pipeline__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_change_95_detection__,
    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__,
    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__,
    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__,
    $__angular2_47_test_47_core_47_compiler_47_pipeline_47_pipeline_95_spec__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var $__1 = ($__angular2_47_test_95_lib__ = require("angular2/test_lib"), $__angular2_47_test_95_lib__ && $__angular2_47_test_95_lib__.__esModule && $__angular2_47_test_95_lib__ || {default: $__angular2_47_test_95_lib__}),
    describe = $__1.describe,
    beforeEach = $__1.beforeEach,
    expect = $__1.expect,
    it = $__1.it,
    iit = $__1.iit,
    ddescribe = $__1.ddescribe,
    el = $__1.el;
var TextInterpolationParser = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_text_95_interpolation_95_parser__ = require("angular2/src/core/compiler/pipeline/text_interpolation_parser"), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_text_95_interpolation_95_parser__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_text_95_interpolation_95_parser__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_text_95_interpolation_95_parser__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_text_95_interpolation_95_parser__}).TextInterpolationParser;
var CompilePipeline = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_pipeline__ = require("angular2/src/core/compiler/pipeline/compile_pipeline"), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_pipeline__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_pipeline__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_pipeline__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_pipeline__}).CompilePipeline;
var MapWrapper = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}).MapWrapper;
var $__5 = ($__angular2_47_change_95_detection__ = require("angular2/change_detection"), $__angular2_47_change_95_detection__ && $__angular2_47_change_95_detection__.__esModule && $__angular2_47_change_95_detection__ || {default: $__angular2_47_change_95_detection__}),
    Lexer = $__5.Lexer,
    Parser = $__5.Parser;
var CompileElement = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ = require("angular2/src/core/compiler/pipeline/compile_element"), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__}).CompileElement;
var CompileStep = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__ = require("angular2/src/core/compiler/pipeline/compile_step"), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__}).CompileStep;
var CompileControl = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__ = require("angular2/src/core/compiler/pipeline/compile_control"), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__}).CompileControl;
var IgnoreChildrenStep = ($__angular2_47_test_47_core_47_compiler_47_pipeline_47_pipeline_95_spec__ = require("./pipeline_spec"), $__angular2_47_test_47_core_47_compiler_47_pipeline_47_pipeline_95_spec__ && $__angular2_47_test_47_core_47_compiler_47_pipeline_47_pipeline_95_spec__.__esModule && $__angular2_47_test_47_core_47_compiler_47_pipeline_47_pipeline_95_spec__ || {default: $__angular2_47_test_47_core_47_compiler_47_pipeline_47_pipeline_95_spec__}).IgnoreChildrenStep;
function main() {
  describe('TextInterpolationParser', (function() {
    function createPipeline() {
      var ignoreBindings = arguments[0] !== (void 0) ? arguments[0] : false;
      return new CompilePipeline([new MockStep((function(parent, current, control) {
        current.ignoreBindings = ignoreBindings;
      })), new IgnoreChildrenStep(), new TextInterpolationParser(new Parser(new Lexer()))]);
    }
    it('should not look for text interpolation when ignoreBindings is true', (function() {
      var results = createPipeline(true).process(el('<div>{{expr1}}<span></span>{{expr2}}</div>'));
      expect(results[0].textNodeBindings).toBe(null);
    }));
    it('should find text interpolation in normal elements', (function() {
      var results = createPipeline().process(el('<div>{{expr1}}<span></span>{{expr2}}</div>'));
      var bindings = results[0].textNodeBindings;
      expect(MapWrapper.get(bindings, 0).source).toEqual("{{expr1}}");
      expect(MapWrapper.get(bindings, 2).source).toEqual("{{expr2}}");
    }));
    it('should find text interpolation in template elements', (function() {
      var results = createPipeline().process(el('<template>{{expr1}}<span></span>{{expr2}}</template>'));
      var bindings = results[0].textNodeBindings;
      expect(MapWrapper.get(bindings, 0).source).toEqual("{{expr1}}");
      expect(MapWrapper.get(bindings, 2).source).toEqual("{{expr2}}");
    }));
    it('should allow multiple expressions', (function() {
      var results = createPipeline().process(el('<div>{{expr1}}{{expr2}}</div>'));
      var bindings = results[0].textNodeBindings;
      expect(MapWrapper.get(bindings, 0).source).toEqual("{{expr1}}{{expr2}}");
    }));
    it('should not interpolate when compileChildren is false', (function() {
      var results = createPipeline().process(el('<div>{{included}}<span ignore-children>{{excluded}}</span></div>'));
      var bindings = results[0].textNodeBindings;
      expect(MapWrapper.get(bindings, 0).source).toEqual("{{included}}");
      expect(results[1].textNodeBindings).toBe(null);
    }));
    it('should allow fixed text before, in between and after expressions', (function() {
      var results = createPipeline().process(el('<div>a{{expr1}}b{{expr2}}c</div>'));
      var bindings = results[0].textNodeBindings;
      expect(MapWrapper.get(bindings, 0).source).toEqual("a{{expr1}}b{{expr2}}c");
    }));
    it('should escape quotes in fixed parts', (function() {
      var results = createPipeline().process(el("<div>'\"a{{expr1}}</div>"));
      expect(MapWrapper.get(results[0].textNodeBindings, 0).source).toEqual("'\"a{{expr1}}");
    }));
  }));
}
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

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/test/core/compiler/pipeline/text_interpolation_parser_spec.map

//# sourceMappingURL=./text_interpolation_parser_spec.map
 main();