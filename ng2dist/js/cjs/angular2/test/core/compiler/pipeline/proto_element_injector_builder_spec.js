var parse5Adapter = require('angular2/src/dom/parse5_adapter');
parse5Adapter.Parse5DomAdapter.makeCurrent();
"use strict";
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/test/core/compiler/pipeline/proto_element_injector_builder_spec";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_test_95_lib__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_dom_47_dom_95_adapter__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_proto_95_element_95_injector_95_builder__,
    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_pipeline__,
    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__,
    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__,
    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__,
    $__angular2_47_src_47_core_47_compiler_47_view__,
    $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__,
    $__angular2_47_src_47_core_47_annotations_47_annotations__,
    $__angular2_47_src_47_core_47_compiler_47_element_95_injector__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var $__1 = ($__angular2_47_test_95_lib__ = require("angular2/test_lib"), $__angular2_47_test_95_lib__ && $__angular2_47_test_95_lib__.__esModule && $__angular2_47_test_95_lib__ || {default: $__angular2_47_test_95_lib__}),
    describe = $__1.describe,
    beforeEach = $__1.beforeEach,
    it = $__1.it,
    expect = $__1.expect,
    iit = $__1.iit,
    ddescribe = $__1.ddescribe,
    el = $__1.el;
var $__2 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    isPresent = $__2.isPresent,
    isBlank = $__2.isBlank;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var $__4 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    List = $__4.List,
    ListWrapper = $__4.ListWrapper,
    MapWrapper = $__4.MapWrapper;
var ProtoElementInjectorBuilder = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_proto_95_element_95_injector_95_builder__ = require("angular2/src/core/compiler/pipeline/proto_element_injector_builder"), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_proto_95_element_95_injector_95_builder__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_proto_95_element_95_injector_95_builder__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_proto_95_element_95_injector_95_builder__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_proto_95_element_95_injector_95_builder__}).ProtoElementInjectorBuilder;
var CompilePipeline = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_pipeline__ = require("angular2/src/core/compiler/pipeline/compile_pipeline"), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_pipeline__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_pipeline__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_pipeline__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_pipeline__}).CompilePipeline;
var CompileElement = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ = require("angular2/src/core/compiler/pipeline/compile_element"), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__}).CompileElement;
var CompileStep = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__ = require("angular2/src/core/compiler/pipeline/compile_step"), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__}).CompileStep;
var CompileControl = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__ = require("angular2/src/core/compiler/pipeline/compile_control"), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__}).CompileControl;
var ProtoView = ($__angular2_47_src_47_core_47_compiler_47_view__ = require("angular2/src/core/compiler/view"), $__angular2_47_src_47_core_47_compiler_47_view__ && $__angular2_47_src_47_core_47_compiler_47_view__.__esModule && $__angular2_47_src_47_core_47_compiler_47_view__ || {default: $__angular2_47_src_47_core_47_compiler_47_view__}).ProtoView;
var DirectiveMetadataReader = ($__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__ = require("angular2/src/core/compiler/directive_metadata_reader"), $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__ && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__.__esModule && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__ || {default: $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__}).DirectiveMetadataReader;
var $__12 = ($__angular2_47_src_47_core_47_annotations_47_annotations__ = require("angular2/src/core/annotations/annotations"), $__angular2_47_src_47_core_47_annotations_47_annotations__ && $__angular2_47_src_47_core_47_annotations_47_annotations__.__esModule && $__angular2_47_src_47_core_47_annotations_47_annotations__ || {default: $__angular2_47_src_47_core_47_annotations_47_annotations__}),
    Viewport = $__12.Viewport,
    Decorator = $__12.Decorator,
    Component = $__12.Component;
var ProtoElementInjector = ($__angular2_47_src_47_core_47_compiler_47_element_95_injector__ = require("angular2/src/core/compiler/element_injector"), $__angular2_47_src_47_core_47_compiler_47_element_95_injector__ && $__angular2_47_src_47_core_47_compiler_47_element_95_injector__.__esModule && $__angular2_47_src_47_core_47_compiler_47_element_95_injector__ || {default: $__angular2_47_src_47_core_47_compiler_47_element_95_injector__}).ProtoElementInjector;
function main() {
  describe('ProtoElementInjectorBuilder', (function() {
    var protoElementInjectorBuilder,
        protoView;
    var ELEMENT_WITH_VAR;
    var DIRECTIVE_ELEMENT_WITH_VAR;
    beforeEach((function() {
      ELEMENT_WITH_VAR = el('<div var-name></div>');
      DIRECTIVE_ELEMENT_WITH_VAR = el('<div var-name directives></div>');
      protoElementInjectorBuilder = new TestableProtoElementInjectorBuilder();
      protoView = new ProtoView(null, null, null);
    }));
    function createPipeline() {
      var directives = arguments[0] !== (void 0) ? arguments[0] : null;
      if (isBlank(directives)) {
        directives = [];
      }
      var reader = new DirectiveMetadataReader();
      return new CompilePipeline([new MockStep((function(parent, current, control) {
        if (isPresent(DOM.getAttribute(current.element, 'viewroot'))) {
          current.isViewRoot = true;
        }
        if (isPresent(DOM.getAttribute(current.element, 'directives'))) {
          for (var i = 0; i < directives.length; i++) {
            var dirMetadata = reader.read(directives[i]);
            current.addDirective(dirMetadata);
          }
        }
        if (isPresent(DOM.getAttribute(current.element, 'var-name'))) {
          current.variableBindings = MapWrapper.create();
          MapWrapper.set(current.variableBindings, '\$implicit', 'name');
        }
        current.inheritedProtoView = protoView;
      })), protoElementInjectorBuilder]);
    }
    function getCreationArgs(protoElementInjector) {
      return protoElementInjectorBuilder.findArgsFor(protoElementInjector);
    }
    it('should not create a ProtoElementInjector for elements without directives or vars', (function() {
      var results = createPipeline().process(el('<div></div>'));
      expect(results[0].inheritedProtoElementInjector).toBe(null);
    }));
    it('should create a ProtoElementInjector for elements with a variable binding', (function() {
      var results = createPipeline().process(ELEMENT_WITH_VAR);
      expect(results[0].inheritedProtoElementInjector).toBeAnInstanceOf(ProtoElementInjector);
    }));
    it('should create a ProtoElementInjector for elements directives', (function() {
      var directives = [SomeComponentDirective, SomeViewportDirective, SomeDecoratorDirective];
      var results = createPipeline(directives).process(el('<div directives></div>'));
      var creationArgs = getCreationArgs(results[0].inheritedProtoElementInjector);
      var boundDirectives = creationArgs['bindings'].map((function(b) {
        return b.key.token;
      }));
      expect(boundDirectives).toEqual(directives);
    }));
    it('should flag the ProtoElementInjector for exporting the component instance when a' + 'component has a var- declaration', (function() {
      var results = createPipeline([SomeComponentDirective]).process(DIRECTIVE_ELEMENT_WITH_VAR);
      expect(results[0].inheritedProtoElementInjector.exportComponent).toBe(true);
      expect(results[0].inheritedProtoElementInjector.exportElement).toBe(false);
    }));
    it('should flag the ProtoElementInjector for exporting the element when a' + 'non-component element has a var- declaration', (function() {
      var results = createPipeline([SomeComponentDirective]).process(ELEMENT_WITH_VAR);
      expect(results[0].inheritedProtoElementInjector.exportComponent).toBe(false);
      expect(results[0].inheritedProtoElementInjector.exportElement).toBe(true);
    }));
    it('should mark ProtoElementInjector for elements with component directives and use the ' + 'ComponentDirective as first binding', (function() {
      var directives = [SomeDecoratorDirective, SomeComponentDirective];
      var results = createPipeline(directives).process(el('<div directives></div>'));
      var creationArgs = getCreationArgs(results[0].inheritedProtoElementInjector);
      expect(creationArgs['firstBindingIsComponent']).toBe(true);
      var boundDirectives = creationArgs['bindings'].map((function(b) {
        return b.key.token;
      }));
      expect(boundDirectives).toEqual([SomeComponentDirective, SomeDecoratorDirective]);
    }));
    it('should use the next ElementBinder index as index of the ProtoElementInjector', (function() {
      ListWrapper.push(protoView.elementBinders, null);
      ListWrapper.push(protoView.elementBinders, null);
      var directives = [SomeDecoratorDirective];
      var results = createPipeline(directives).process(el('<div directives></div>'));
      var creationArgs = getCreationArgs(results[0].inheritedProtoElementInjector);
      expect(creationArgs['index']).toBe(protoView.elementBinders.length);
    }));
    describe("inheritedProtoElementInjector", (function() {
      it('should inherit the ProtoElementInjector down to children without directives', (function() {
        var directives = [SomeDecoratorDirective];
        var results = createPipeline(directives).process(el('<div directives><span></span></div>'));
        expect(results[1].inheritedProtoElementInjector).toBe(results[0].inheritedProtoElementInjector);
      }));
      it('should use the ProtoElementInjector of the parent element as parent', (function() {
        var element = el('<div directives><span><a directives></a></span></div>');
        var directives = [SomeDecoratorDirective];
        var results = createPipeline(directives).process(element);
        expect(results[2].inheritedProtoElementInjector.parent).toBe(results[0].inheritedProtoElementInjector);
      }));
      it('should use a null parent for viewRoots', (function() {
        var element = el('<div directives><span viewroot directives></span></div>');
        var directives = [SomeDecoratorDirective];
        var results = createPipeline(directives).process(element);
        expect(results[1].inheritedProtoElementInjector.parent).toBe(null);
      }));
      it('should use a null parent if there is an intermediate viewRoot', (function() {
        var element = el('<div directives><span viewroot><a directives></a></span></div>');
        var directives = [SomeDecoratorDirective];
        var results = createPipeline(directives).process(element);
        expect(results[2].inheritedProtoElementInjector.parent).toBe(null);
      }));
    }));
    describe("distanceToParentInjector", (function() {
      it("should be 0 for root elements", (function() {
        var element = el('<div directives></div>');
        var directives = [SomeDecoratorDirective];
        var results = createPipeline(directives).process(element);
        expect(results[0].inheritedProtoElementInjector.distanceToParent).toBe(0);
      }));
      it("should be 1 when a parent element has an injector", (function() {
        var element = el('<div directives><span directives></span></div>');
        var directives = [SomeDecoratorDirective];
        var results = createPipeline(directives).process(element);
        expect(results[1].inheritedProtoElementInjector.distanceToParent).toBe(1);
      }));
      it("should add 1 for every element that does not have an injector", (function() {
        var element = el('<div directives><a><b><span directives></span></b></a></div>');
        var directives = [SomeDecoratorDirective];
        var results = createPipeline(directives).process(element);
        expect(results[3].inheritedProtoElementInjector.distanceToParent).toBe(3);
      }));
    }));
  }));
}
var TestableProtoElementInjectorBuilder = function TestableProtoElementInjectorBuilder() {
  $traceurRuntime.superConstructor($TestableProtoElementInjectorBuilder).call(this);
  this.debugObjects = [];
};
var $TestableProtoElementInjectorBuilder = TestableProtoElementInjectorBuilder;
($traceurRuntime.createClass)(TestableProtoElementInjectorBuilder, {
  findArgsFor: function(protoElementInjector) {
    assert.argumentTypes(protoElementInjector, ProtoElementInjector);
    for (var i = 0; i < this.debugObjects.length; i += 2) {
      if (this.debugObjects[i] === protoElementInjector) {
        return this.debugObjects[i + 1];
      }
    }
    return null;
  },
  internalCreateProtoElementInjector: function(parent, index, bindings, firstBindingIsComponent, distance) {
    var result = new ProtoElementInjector(parent, index, bindings, firstBindingIsComponent, distance);
    ListWrapper.push(this.debugObjects, result);
    ListWrapper.push(this.debugObjects, {
      'parent': parent,
      'index': index,
      'bindings': bindings,
      'firstBindingIsComponent': firstBindingIsComponent
    });
    return result;
  }
}, {}, ProtoElementInjectorBuilder);
Object.defineProperty(TestableProtoElementInjectorBuilder.prototype.findArgsFor, "parameters", {get: function() {
    return [[ProtoElementInjector]];
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
var SomeComponentService = function SomeComponentService() {};
($traceurRuntime.createClass)(SomeComponentService, {}, {});
var SomeViewportDirective = function SomeViewportDirective() {};
($traceurRuntime.createClass)(SomeViewportDirective, {}, {});
Object.defineProperty(SomeViewportDirective, "annotations", {get: function() {
    return [new Viewport()];
  }});
var SomeComponentDirective = function SomeComponentDirective() {};
($traceurRuntime.createClass)(SomeComponentDirective, {}, {});
Object.defineProperty(SomeComponentDirective, "annotations", {get: function() {
    return [new Component({componentServices: [SomeComponentService]})];
  }});
var SomeDecoratorDirective = function SomeDecoratorDirective() {};
($traceurRuntime.createClass)(SomeDecoratorDirective, {}, {});
Object.defineProperty(SomeDecoratorDirective, "annotations", {get: function() {
    return [new Decorator()];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/test/core/compiler/pipeline/proto_element_injector_builder_spec.map

//# sourceMappingURL=./proto_element_injector_builder_spec.map
 main();