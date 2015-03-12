var parse5Adapter = require('angular2/src/dom/parse5_adapter');
parse5Adapter.Parse5DomAdapter.makeCurrent();
"use strict";
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  IgnoreChildrenStep: {get: function() {
      return IgnoreChildrenStep;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/test/core/compiler/pipeline/pipeline_spec";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_test_95_lib__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_dom_47_dom_95_adapter__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_pipeline__,
    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__,
    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__,
    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var $__1 = ($__angular2_47_test_95_lib__ = require("angular2/test_lib"), $__angular2_47_test_95_lib__ && $__angular2_47_test_95_lib__.__esModule && $__angular2_47_test_95_lib__ || {default: $__angular2_47_test_95_lib__}),
    describe = $__1.describe,
    beforeEach = $__1.beforeEach,
    it = $__1.it,
    expect = $__1.expect,
    iit = $__1.iit,
    ddescribe = $__1.ddescribe,
    el = $__1.el;
var $__2 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    ListWrapper = $__2.ListWrapper,
    List = $__2.List,
    MapWrapper = $__2.MapWrapper;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var $__4 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    isPresent = $__4.isPresent,
    NumberWrapper = $__4.NumberWrapper,
    StringWrapper = $__4.StringWrapper;
var CompilePipeline = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_pipeline__ = require("angular2/src/core/compiler/pipeline/compile_pipeline"), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_pipeline__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_pipeline__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_pipeline__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_pipeline__}).CompilePipeline;
var CompileElement = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ = require("angular2/src/core/compiler/pipeline/compile_element"), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__}).CompileElement;
var CompileStep = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__ = require("angular2/src/core/compiler/pipeline/compile_step"), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__}).CompileStep;
var CompileControl = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__ = require("angular2/src/core/compiler/pipeline/compile_control"), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__}).CompileControl;
function main() {
  describe('compile_pipeline', (function() {
    describe('children compilation', (function() {
      it('should walk the tree in depth first order including template contents', (function() {
        var element = el('<div id="1"><template id="2"><span id="3"></span></template></div>');
        var step0Log = [];
        var results = new CompilePipeline([createLoggerStep(step0Log)]).process(element);
        expect(step0Log).toEqual(['1', '1<2', '2<3']);
        expect(resultIdLog(results)).toEqual(['1', '2', '3']);
      }));
      it('should stop walking the tree when compileChildren is false', (function() {
        var element = el('<div id="1"><template id="2" ignore-children><span id="3"></span></template></div>');
        var step0Log = [];
        var pipeline = new CompilePipeline([new IgnoreChildrenStep(), createLoggerStep(step0Log)]);
        var results = pipeline.process(element);
        expect(step0Log).toEqual(['1', '1<2']);
        expect(resultIdLog(results)).toEqual(['1', '2']);
      }));
    }));
    describe('control.addParent', (function() {
      it('should report the new parent to the following processor and the result', (function() {
        var element = el('<div id="1"><span wrap0="1" id="2"><b id="3"></b></span></div>');
        var step0Log = [];
        var step1Log = [];
        var pipeline = new CompilePipeline([createWrapperStep('wrap0', step0Log), createLoggerStep(step1Log)]);
        var result = pipeline.process(element);
        expect(step0Log).toEqual(['1', '1<2', '2<3']);
        expect(step1Log).toEqual(['1', '1<wrap0#0', 'wrap0#0<2', '2<3']);
        expect(resultIdLog(result)).toEqual(['1', 'wrap0#0', '2', '3']);
      }));
      it('should allow to add a parent by multiple processors to the same element', (function() {
        var element = el('<div id="1"><span wrap0="1" wrap1="1" id="2"><b id="3"></b></span></div>');
        var step0Log = [];
        var step1Log = [];
        var step2Log = [];
        var pipeline = new CompilePipeline([createWrapperStep('wrap0', step0Log), createWrapperStep('wrap1', step1Log), createLoggerStep(step2Log)]);
        var result = pipeline.process(element);
        expect(step0Log).toEqual(['1', '1<2', '2<3']);
        expect(step1Log).toEqual(['1', '1<wrap0#0', 'wrap0#0<2', '2<3']);
        expect(step2Log).toEqual(['1', '1<wrap0#0', 'wrap0#0<wrap1#0', 'wrap1#0<2', '2<3']);
        expect(resultIdLog(result)).toEqual(['1', 'wrap0#0', 'wrap1#0', '2', '3']);
      }));
      it('should allow to add a parent by multiple processors to different elements', (function() {
        var element = el('<div id="1"><span wrap0="1" id="2"><b id="3" wrap1="1"></b></span></div>');
        var step0Log = [];
        var step1Log = [];
        var step2Log = [];
        var pipeline = new CompilePipeline([createWrapperStep('wrap0', step0Log), createWrapperStep('wrap1', step1Log), createLoggerStep(step2Log)]);
        var result = pipeline.process(element);
        expect(step0Log).toEqual(['1', '1<2', '2<3']);
        expect(step1Log).toEqual(['1', '1<wrap0#0', 'wrap0#0<2', '2<3']);
        expect(step2Log).toEqual(['1', '1<wrap0#0', 'wrap0#0<2', '2<wrap1#0', 'wrap1#0<3']);
        expect(resultIdLog(result)).toEqual(['1', 'wrap0#0', '2', 'wrap1#0', '3']);
      }));
      it('should allow to add multiple parents by the same processor', (function() {
        var element = el('<div id="1"><span wrap0="2" id="2"><b id="3"></b></span></div>');
        var step0Log = [];
        var step1Log = [];
        var pipeline = new CompilePipeline([createWrapperStep('wrap0', step0Log), createLoggerStep(step1Log)]);
        var result = pipeline.process(element);
        expect(step0Log).toEqual(['1', '1<2', '2<3']);
        expect(step1Log).toEqual(['1', '1<wrap0#0', 'wrap0#0<wrap0#1', 'wrap0#1<2', '2<3']);
        expect(resultIdLog(result)).toEqual(['1', 'wrap0#0', 'wrap0#1', '2', '3']);
      }));
    }));
    describe('control.addChild', (function() {
      it('should report the new child to all processors and the result', (function() {
        var element = el('<div id="1"><div id="2"></div></div>');
        var resultLog = [];
        var newChild = new CompileElement(el('<div id="3"></div>'));
        var pipeline = new CompilePipeline([new MockStep((function(parent, current, control) {
          if (StringWrapper.equals(DOM.getAttribute(current.element, 'id'), '1')) {
            control.addChild(newChild);
          }
        })), createLoggerStep(resultLog)]);
        var result = pipeline.process(element);
        expect(result[2]).toBe(newChild);
        expect(resultLog).toEqual(['1', '1<2', '1<3']);
        expect(resultIdLog(result)).toEqual(['1', '2', '3']);
      }));
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
var IgnoreChildrenStep = function IgnoreChildrenStep() {
  $traceurRuntime.superConstructor($IgnoreChildrenStep).apply(this, arguments);
};
var $IgnoreChildrenStep = IgnoreChildrenStep;
($traceurRuntime.createClass)(IgnoreChildrenStep, {process: function(parent, current, control) {
    assert.argumentTypes(parent, CompileElement, current, CompileElement, control, CompileControl);
    var attributeMap = DOM.attributeMap(current.element);
    if (MapWrapper.contains(attributeMap, 'ignore-children')) {
      current.compileChildren = false;
    }
  }}, {}, CompileStep);
Object.defineProperty(IgnoreChildrenStep.prototype.process, "parameters", {get: function() {
    return [[CompileElement], [CompileElement], [CompileControl]];
  }});
function logEntry(log, parent, current) {
  var parentId = '';
  if (isPresent(parent)) {
    parentId = DOM.getAttribute(parent.element, 'id') + '<';
  }
  ListWrapper.push(log, parentId + DOM.getAttribute(current.element, 'id'));
}
function createLoggerStep(log) {
  return new MockStep((function(parent, current, control) {
    logEntry(log, parent, current);
  }));
}
function createWrapperStep(wrapperId, log) {
  var nextElementId = 0;
  return new MockStep((function(parent, current, control) {
    var parentCountStr = DOM.getAttribute(current.element, wrapperId);
    if (isPresent(parentCountStr)) {
      var parentCount = NumberWrapper.parseInt(parentCountStr, 10);
      while (parentCount > 0) {
        control.addParent(new CompileElement(el(("<a id=\"" + wrapperId + "#" + nextElementId++ + "\"></a>"))));
        parentCount--;
      }
    }
    logEntry(log, parent, current);
  }));
}
function resultIdLog(result) {
  var idLog = [];
  ListWrapper.forEach(result, (function(current) {
    logEntry(idLog, null, current);
  }));
  return idLog;
}

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/test/core/compiler/pipeline/pipeline_spec.map

//# sourceMappingURL=./pipeline_spec.map
 main();