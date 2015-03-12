var parse5Adapter = require('angular2/src/dom/parse5_adapter');
parse5Adapter.Parse5DomAdapter.makeCurrent();
"use strict";
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/test/core/compiler/pipeline/element_binding_marker_spec";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_test_95_lib__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_dom_47_dom_95_adapter__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_element_95_binding_95_marker__,
    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_pipeline__,
    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__,
    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__,
    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__,
    $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__,
    $__angular2_47_src_47_core_47_annotations_47_annotations__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var $__1 = ($__angular2_47_test_95_lib__ = require("angular2/test_lib"), $__angular2_47_test_95_lib__ && $__angular2_47_test_95_lib__.__esModule && $__angular2_47_test_95_lib__ || {default: $__angular2_47_test_95_lib__}),
    describe = $__1.describe,
    beforeEach = $__1.beforeEach,
    it = $__1.it,
    expect = $__1.expect,
    iit = $__1.iit,
    ddescribe = $__1.ddescribe,
    el = $__1.el;
var isPresent = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).isPresent;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var MapWrapper = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}).MapWrapper;
var ElementBindingMarker = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_element_95_binding_95_marker__ = require("angular2/src/core/compiler/pipeline/element_binding_marker"), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_element_95_binding_95_marker__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_element_95_binding_95_marker__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_element_95_binding_95_marker__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_element_95_binding_95_marker__}).ElementBindingMarker;
var CompilePipeline = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_pipeline__ = require("angular2/src/core/compiler/pipeline/compile_pipeline"), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_pipeline__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_pipeline__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_pipeline__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_pipeline__}).CompilePipeline;
var CompileElement = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ = require("angular2/src/core/compiler/pipeline/compile_element"), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__}).CompileElement;
var CompileStep = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__ = require("angular2/src/core/compiler/pipeline/compile_step"), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__}).CompileStep;
var CompileControl = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__ = require("angular2/src/core/compiler/pipeline/compile_control"), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__}).CompileControl;
var DirectiveMetadataReader = ($__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__ = require("angular2/src/core/compiler/directive_metadata_reader"), $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__ && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__.__esModule && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__ || {default: $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__}).DirectiveMetadataReader;
var $__11 = ($__angular2_47_src_47_core_47_annotations_47_annotations__ = require("angular2/src/core/annotations/annotations"), $__angular2_47_src_47_core_47_annotations_47_annotations__ && $__angular2_47_src_47_core_47_annotations_47_annotations__.__esModule && $__angular2_47_src_47_core_47_annotations_47_annotations__ || {default: $__angular2_47_src_47_core_47_annotations_47_annotations__}),
    Viewport = $__11.Viewport,
    Decorator = $__11.Decorator,
    Component = $__11.Component;
function main() {
  describe('ElementBindingMarker', (function() {
    function createPipeline() {
      var $__13 = arguments[0] !== (void 0) ? arguments[0] : {},
          textNodeBindings = $__13.textNodeBindings,
          propertyBindings = $__13.propertyBindings,
          variableBindings = $__13.variableBindings,
          eventBindings = $__13.eventBindings,
          directives = $__13.directives,
          ignoreBindings = $__13.ignoreBindings;
      var reader = new DirectiveMetadataReader();
      return new CompilePipeline([new MockStep((function(parent, current, control) {
        if (isPresent(textNodeBindings)) {
          current.textNodeBindings = textNodeBindings;
        }
        if (isPresent(propertyBindings)) {
          current.propertyBindings = propertyBindings;
        }
        if (isPresent(variableBindings)) {
          current.variableBindings = variableBindings;
        }
        if (isPresent(eventBindings)) {
          current.eventBindings = eventBindings;
        }
        if (isPresent(ignoreBindings)) {
          current.ignoreBindings = ignoreBindings;
        }
        if (isPresent(directives)) {
          for (var i = 0; i < directives.length; i++) {
            current.addDirective(reader.read(directives[i]));
          }
        }
      })), new ElementBindingMarker()]);
    }
    it('should not mark empty elements', (function() {
      var results = createPipeline().process(el('<div></div>'));
      assertBinding(results[0], false);
    }));
    it('should not mark elements when ignoreBindings is true', (function() {
      var textNodeBindings = MapWrapper.create();
      MapWrapper.set(textNodeBindings, 0, 'expr');
      var results = createPipeline({
        textNodeBindings: textNodeBindings,
        ignoreBindings: true
      }).process(el('<div></div>'));
      assertBinding(results[0], false);
    }));
    it('should mark elements with text node bindings', (function() {
      var textNodeBindings = MapWrapper.create();
      MapWrapper.set(textNodeBindings, 0, 'expr');
      var results = createPipeline({textNodeBindings: textNodeBindings}).process(el('<div></div>'));
      assertBinding(results[0], true);
    }));
    it('should mark elements with property bindings', (function() {
      var propertyBindings = MapWrapper.createFromStringMap({'a': 'expr'});
      var results = createPipeline({propertyBindings: propertyBindings}).process(el('<div></div>'));
      assertBinding(results[0], true);
    }));
    it('should mark elements with variable bindings', (function() {
      var variableBindings = MapWrapper.createFromStringMap({'a': 'expr'});
      var results = createPipeline({variableBindings: variableBindings}).process(el('<div></div>'));
      assertBinding(results[0], true);
    }));
    it('should mark elements with event bindings', (function() {
      var eventBindings = MapWrapper.createFromStringMap({'click': 'expr'});
      var results = createPipeline({eventBindings: eventBindings}).process(el('<div></div>'));
      assertBinding(results[0], true);
    }));
    it('should mark elements with decorator directives', (function() {
      var results = createPipeline({directives: [SomeDecoratorDirective]}).process(el('<div></div>'));
      assertBinding(results[0], true);
    }));
    it('should mark elements with template directives', (function() {
      var results = createPipeline({directives: [SomeViewportDirective]}).process(el('<div></div>'));
      assertBinding(results[0], true);
    }));
    it('should mark elements with component directives', (function() {
      var results = createPipeline({directives: [SomeComponentDirective]}).process(el('<div></div>'));
      assertBinding(results[0], true);
    }));
  }));
}
function assertBinding(pipelineElement, shouldBePresent) {
  expect(pipelineElement.hasBindings).toBe(shouldBePresent);
  expect(DOM.hasClass(pipelineElement.element, 'ng-binding')).toBe(shouldBePresent);
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
var SomeViewportDirective = function SomeViewportDirective() {};
($traceurRuntime.createClass)(SomeViewportDirective, {}, {});
Object.defineProperty(SomeViewportDirective, "annotations", {get: function() {
    return [new Viewport()];
  }});
var SomeComponentDirective = function SomeComponentDirective() {};
($traceurRuntime.createClass)(SomeComponentDirective, {}, {});
Object.defineProperty(SomeComponentDirective, "annotations", {get: function() {
    return [new Component()];
  }});
var SomeDecoratorDirective = function SomeDecoratorDirective() {};
($traceurRuntime.createClass)(SomeDecoratorDirective, {}, {});
Object.defineProperty(SomeDecoratorDirective, "annotations", {get: function() {
    return [new Decorator()];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/test/core/compiler/pipeline/element_binding_marker_spec.map

//# sourceMappingURL=./element_binding_marker_spec.map
 main();