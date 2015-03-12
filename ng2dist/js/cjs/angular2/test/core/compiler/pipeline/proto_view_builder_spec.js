var parse5Adapter = require('angular2/src/dom/parse5_adapter');
parse5Adapter.Parse5DomAdapter.makeCurrent();
"use strict";
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/test/core/compiler/pipeline/proto_view_builder_spec";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_test_95_lib__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_dom_47_dom_95_adapter__,
    $__angular2_47_change_95_detection__,
    $__angular2_47_src_47_core_47_compiler_47_element_95_binder__,
    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_proto_95_view_95_builder__,
    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_pipeline__,
    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__,
    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__,
    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__,
    $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__,
    $__angular2_47_src_47_facade_47_collection__;
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
var dynamicChangeDetection = ($__angular2_47_change_95_detection__ = require("angular2/change_detection"), $__angular2_47_change_95_detection__ && $__angular2_47_change_95_detection__.__esModule && $__angular2_47_change_95_detection__ || {default: $__angular2_47_change_95_detection__}).dynamicChangeDetection;
var ElementBinder = ($__angular2_47_src_47_core_47_compiler_47_element_95_binder__ = require("angular2/src/core/compiler/element_binder"), $__angular2_47_src_47_core_47_compiler_47_element_95_binder__ && $__angular2_47_src_47_core_47_compiler_47_element_95_binder__.__esModule && $__angular2_47_src_47_core_47_compiler_47_element_95_binder__ || {default: $__angular2_47_src_47_core_47_compiler_47_element_95_binder__}).ElementBinder;
var ProtoViewBuilder = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_proto_95_view_95_builder__ = require("angular2/src/core/compiler/pipeline/proto_view_builder"), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_proto_95_view_95_builder__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_proto_95_view_95_builder__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_proto_95_view_95_builder__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_proto_95_view_95_builder__}).ProtoViewBuilder;
var CompilePipeline = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_pipeline__ = require("angular2/src/core/compiler/pipeline/compile_pipeline"), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_pipeline__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_pipeline__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_pipeline__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_pipeline__}).CompilePipeline;
var CompileElement = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ = require("angular2/src/core/compiler/pipeline/compile_element"), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__}).CompileElement;
var CompileStep = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__ = require("angular2/src/core/compiler/pipeline/compile_step"), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__}).CompileStep;
var CompileControl = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__ = require("angular2/src/core/compiler/pipeline/compile_control"), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__}).CompileControl;
var NativeShadowDomStrategy = ($__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__ = require("angular2/src/core/compiler/shadow_dom_strategy"), $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__ && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__.__esModule && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__ || {default: $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__}).NativeShadowDomStrategy;
var MapWrapper = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}).MapWrapper;
function main() {
  describe('ProtoViewBuilder', (function() {
    function createPipeline() {
      var variableBindings = arguments[0] !== (void 0) ? arguments[0] : null;
      return new CompilePipeline([new MockStep((function(parent, current, control) {
        if (isPresent(DOM.getAttribute(current.element, 'viewroot'))) {
          current.isViewRoot = true;
        }
        if (isPresent(DOM.getAttribute(current.element, 'var-binding'))) {
          current.variableBindings = MapWrapper.createFromStringMap(variableBindings);
        }
        current.inheritedElementBinder = new ElementBinder(null, null, null);
      })), new ProtoViewBuilder(dynamicChangeDetection, new NativeShadowDomStrategy(null))]);
    }
    it('should not create a ProtoView when the isViewRoot flag is not set', (function() {
      var results = createPipeline().process(el('<div></div>'));
      expect(results[0].inheritedProtoView).toBe(null);
    }));
    it('should create a ProtoView when the isViewRoot flag is set', (function() {
      var viewRootElement = el('<div viewroot></div>');
      var results = createPipeline().process(viewRootElement);
      expect(results[0].inheritedProtoView.element).toBe(viewRootElement);
    }));
    it('should inherit the ProtoView down to children that have no isViewRoot set', (function() {
      var viewRootElement = el('<div viewroot><span></span></div>');
      var results = createPipeline().process(viewRootElement);
      expect(results[0].inheritedProtoView.element).toBe(viewRootElement);
      expect(results[1].inheritedProtoView.element).toBe(viewRootElement);
    }));
    it('should save ProtoView into the elementBinder of parent element', (function() {
      var element = el('<div viewroot><template><a viewroot></a></template></div>');
      var results = createPipeline().process(element);
      expect(results[1].inheritedElementBinder.nestedProtoView).toBe(results[2].inheritedProtoView);
    }));
    it('should bind variables to the nested ProtoView', (function() {
      var element = el('<div viewroot><template var-binding><a viewroot></a></template></div>');
      var results = createPipeline({
        'var1': 'map1',
        'var2': 'map2'
      }).process(element);
      var npv = results[1].inheritedElementBinder.nestedProtoView;
      expect(npv.variableBindings).toEqual(MapWrapper.createFromStringMap({
        'var1': 'map1',
        'var2': 'map2'
      }));
    }));
    it('should mark variables in the proto view context locals', (function() {
      var element = el('<div viewroot><p var-binding></p></div>');
      var results = createPipeline({
        'var1': 'map1',
        'var2': 'map2'
      }).process(element);
      var protoView = results[0].inheritedProtoView;
      expect(protoView.protoContextLocals).toEqual(MapWrapper.createFromStringMap({
        'map2': null,
        'map1': null
      }));
    }));
    describe('errors', (function() {
      it('should not allow multiple nested ProtoViews for the same parent element', (function() {
        var element = el('<div viewroot><template><a viewroot></a><a viewroot></a></template></div>');
        expect((function() {
          createPipeline().process(element);
        })).toThrowError('Only one nested view per element is allowed');
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

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/test/core/compiler/pipeline/proto_view_builder_spec.map

//# sourceMappingURL=./proto_view_builder_spec.map
 main();