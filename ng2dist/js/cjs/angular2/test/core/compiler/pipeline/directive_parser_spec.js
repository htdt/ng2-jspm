var parse5Adapter = require('angular2/src/dom/parse5_adapter');
parse5Adapter.Parse5DomAdapter.makeCurrent();
"use strict";
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/test/core/compiler/pipeline/directive_parser_spec";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_test_95_lib__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_directive_95_parser__,
    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_pipeline__,
    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__,
    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__,
    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__,
    $__angular2_47_src_47_core_47_annotations_47_annotations__,
    $__angular2_47_src_47_core_47_annotations_47_template__,
    $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__,
    $__angular2_47_change_95_detection__;
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
    assertionsEnabled = $__2.assertionsEnabled;
var $__3 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    ListWrapper = $__3.ListWrapper,
    MapWrapper = $__3.MapWrapper,
    StringMapWrapper = $__3.StringMapWrapper;
var DirectiveParser = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_directive_95_parser__ = require("angular2/src/core/compiler/pipeline/directive_parser"), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_directive_95_parser__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_directive_95_parser__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_directive_95_parser__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_directive_95_parser__}).DirectiveParser;
var CompilePipeline = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_pipeline__ = require("angular2/src/core/compiler/pipeline/compile_pipeline"), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_pipeline__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_pipeline__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_pipeline__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_pipeline__}).CompilePipeline;
var CompileStep = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__ = require("angular2/src/core/compiler/pipeline/compile_step"), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__}).CompileStep;
var CompileElement = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ = require("angular2/src/core/compiler/pipeline/compile_element"), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__}).CompileElement;
var CompileControl = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__ = require("angular2/src/core/compiler/pipeline/compile_control"), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__}).CompileControl;
var $__9 = ($__angular2_47_src_47_core_47_annotations_47_annotations__ = require("angular2/src/core/annotations/annotations"), $__angular2_47_src_47_core_47_annotations_47_annotations__ && $__angular2_47_src_47_core_47_annotations_47_annotations__.__esModule && $__angular2_47_src_47_core_47_annotations_47_annotations__ || {default: $__angular2_47_src_47_core_47_annotations_47_annotations__}),
    Component = $__9.Component,
    Decorator = $__9.Decorator,
    Viewport = $__9.Viewport;
var Template = ($__angular2_47_src_47_core_47_annotations_47_template__ = require("angular2/src/core/annotations/template"), $__angular2_47_src_47_core_47_annotations_47_template__ && $__angular2_47_src_47_core_47_annotations_47_template__.__esModule && $__angular2_47_src_47_core_47_annotations_47_template__ || {default: $__angular2_47_src_47_core_47_annotations_47_template__}).Template;
var DirectiveMetadataReader = ($__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__ = require("angular2/src/core/compiler/directive_metadata_reader"), $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__ && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__.__esModule && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__ || {default: $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__}).DirectiveMetadataReader;
var $__12 = ($__angular2_47_change_95_detection__ = require("angular2/change_detection"), $__angular2_47_change_95_detection__ && $__angular2_47_change_95_detection__.__esModule && $__angular2_47_change_95_detection__ || {default: $__angular2_47_change_95_detection__}),
    Lexer = $__12.Lexer,
    Parser = $__12.Parser;
function main() {
  describe('DirectiveParser', (function() {
    var reader,
        directives;
    beforeEach((function() {
      reader = new DirectiveMetadataReader();
      directives = [SomeDecorator, SomeDecoratorIgnoringChildren, SomeDecoratorWithBinding, SomeViewport, SomeViewport2, SomeComponent, SomeComponent2];
    }));
    function createPipeline() {
      var $__14 = arguments[0] !== (void 0) ? arguments[0] : {},
          propertyBindings = $__14.propertyBindings,
          variableBindings = $__14.variableBindings;
      var parser = new Parser(new Lexer());
      var annotatedDirectives = ListWrapper.create();
      for (var i = 0; i < directives.length; i++) {
        ListWrapper.push(annotatedDirectives, reader.read(directives[i]));
      }
      return new CompilePipeline([new MockStep((function(parent, current, control) {
        if (isPresent(propertyBindings)) {
          StringMapWrapper.forEach(propertyBindings, (function(v, k) {
            current.addPropertyBinding(k, parser.parseBinding(v, null));
          }));
        }
        if (isPresent(variableBindings)) {
          current.variableBindings = MapWrapper.createFromStringMap(variableBindings);
        }
      })), new DirectiveParser(annotatedDirectives)]);
    }
    it('should not add directives if they are not used', (function() {
      var results = createPipeline().process(el('<div></div>'));
      expect(results[0].decoratorDirectives).toBe(null);
      expect(results[0].componentDirective).toBe(null);
      expect(results[0].viewportDirective).toBe(null);
    }));
    describe('component directives', (function() {
      it('should detect them in attributes', (function() {
        var results = createPipeline().process(el('<div some-comp></div>'));
        expect(results[0].componentDirective).toEqual(reader.read(SomeComponent));
      }));
      it('component directives must be first in collected directives', (function() {
        var results = createPipeline().process(el('<div some-comp some-decor></div>'));
        var dirs = results[0].getAllDirectives();
        expect(dirs.length).toEqual(2);
        expect(dirs[0]).toEqual(reader.read(SomeComponent));
        expect(dirs[1]).toEqual(reader.read(SomeDecorator));
      }));
      it('should detect them in property bindings', (function() {
        var pipeline = createPipeline({propertyBindings: {'some-comp': 'someExpr'}});
        var results = pipeline.process(el('<div></div>'));
        expect(results[0].componentDirective).toEqual(reader.read(SomeComponent));
      }));
      it('should detect them in variable bindings', (function() {
        var pipeline = createPipeline({variableBindings: {'some-comp': 'someExpr'}});
        var results = pipeline.process(el('<div></div>'));
        expect(results[0].componentDirective).toEqual(reader.read(SomeComponent));
      }));
      it('should not allow multiple component directives on the same element', (function() {
        expect((function() {
          createPipeline().process(el('<div some-comp some-comp2></div>'));
        })).toThrowError('Multiple component directives not allowed on the same element - check <div some-comp some-comp2>');
      }));
      it('should not allow component directives on <template> elements', (function() {
        expect((function() {
          createPipeline().process(el('<template some-comp></template>'));
        })).toThrowError('Only template directives are allowed on template elements - check <template some-comp>');
      }));
    }));
    describe('viewport directives', (function() {
      it('should detect them in attributes', (function() {
        var results = createPipeline().process(el('<template some-templ></template>'));
        expect(results[0].viewportDirective).toEqual(reader.read(SomeViewport));
      }));
      it('should detect them in property bindings', (function() {
        var pipeline = createPipeline({propertyBindings: {'some-templ': 'someExpr'}});
        var results = pipeline.process(el('<template></template>'));
        expect(results[0].viewportDirective).toEqual(reader.read(SomeViewport));
      }));
      it('should detect them in variable bindings', (function() {
        var pipeline = createPipeline({variableBindings: {'some-templ': 'someExpr'}});
        var results = pipeline.process(el('<template></template>'));
        expect(results[0].viewportDirective).toEqual(reader.read(SomeViewport));
      }));
      it('should not allow multiple viewport directives on the same element', (function() {
        expect((function() {
          createPipeline().process(el('<template some-templ some-templ2></template>'));
        })).toThrowError('Only one viewport directive can be used per element - check <template some-templ some-templ2>');
      }));
      it('should not allow viewport directives on non <template> elements', (function() {
        expect((function() {
          createPipeline().process(el('<div some-templ></div>'));
        })).toThrowError('Viewport directives need to be placed on <template> elements or elements with template attribute - check <div some-templ>');
      }));
    }));
    describe('decorator directives', (function() {
      it('should detect them in attributes', (function() {
        var results = createPipeline().process(el('<div some-decor></div>'));
        expect(results[0].decoratorDirectives).toEqual([reader.read(SomeDecorator)]);
      }));
      it('should detect them in property bindings', (function() {
        var pipeline = createPipeline({propertyBindings: {'some-decor': 'someExpr'}});
        var results = pipeline.process(el('<div></div>'));
        expect(results[0].decoratorDirectives).toEqual([reader.read(SomeDecorator)]);
      }));
      it('should compile children by default', (function() {
        var results = createPipeline().process(el('<div some-decor></div>'));
        expect(results[0].compileChildren).toEqual(true);
      }));
      it('should stop compiling children when specified in the decorator config', (function() {
        var results = createPipeline().process(el('<div some-decor-ignoring-children></div>'));
        expect(results[0].compileChildren).toEqual(false);
      }));
      it('should detect them in variable bindings', (function() {
        var pipeline = createPipeline({variableBindings: {'some-decor': 'someExpr'}});
        var results = pipeline.process(el('<div></div>'));
        expect(results[0].decoratorDirectives).toEqual([reader.read(SomeDecorator)]);
      }));
      it('should not instantiate decorator directive twice', (function() {
        var pipeline = createPipeline({propertyBindings: {'some-decor-with-binding': 'someExpr'}});
        var results = pipeline.process(el('<div some-decor-with-binding="foo"></div>'));
        expect(results[0].decoratorDirectives.length).toEqual(1);
        expect(results[0].decoratorDirectives).toEqual([reader.read(SomeDecoratorWithBinding)]);
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
var SomeDecorator = function SomeDecorator() {};
($traceurRuntime.createClass)(SomeDecorator, {}, {});
Object.defineProperty(SomeDecorator, "annotations", {get: function() {
    return [new Decorator({selector: '[some-decor]'})];
  }});
var SomeDecoratorIgnoringChildren = function SomeDecoratorIgnoringChildren() {};
($traceurRuntime.createClass)(SomeDecoratorIgnoringChildren, {}, {});
Object.defineProperty(SomeDecoratorIgnoringChildren, "annotations", {get: function() {
    return [new Decorator({
      selector: '[some-decor-ignoring-children]',
      compileChildren: false
    })];
  }});
var SomeDecoratorWithBinding = function SomeDecoratorWithBinding() {};
($traceurRuntime.createClass)(SomeDecoratorWithBinding, {}, {});
Object.defineProperty(SomeDecoratorWithBinding, "annotations", {get: function() {
    return [new Decorator({
      selector: '[some-decor-with-binding]',
      bind: {'some-decor-with-binding': 'foo'}
    })];
  }});
var SomeViewport = function SomeViewport() {};
($traceurRuntime.createClass)(SomeViewport, {}, {});
Object.defineProperty(SomeViewport, "annotations", {get: function() {
    return [new Viewport({selector: '[some-templ]'})];
  }});
var SomeViewport2 = function SomeViewport2() {};
($traceurRuntime.createClass)(SomeViewport2, {}, {});
Object.defineProperty(SomeViewport2, "annotations", {get: function() {
    return [new Viewport({selector: '[some-templ2]'})];
  }});
var SomeComponent = function SomeComponent() {};
($traceurRuntime.createClass)(SomeComponent, {}, {});
Object.defineProperty(SomeComponent, "annotations", {get: function() {
    return [new Component({selector: '[some-comp]'})];
  }});
var SomeComponent2 = function SomeComponent2() {};
($traceurRuntime.createClass)(SomeComponent2, {}, {});
Object.defineProperty(SomeComponent2, "annotations", {get: function() {
    return [new Component({selector: '[some-comp2]'})];
  }});
var MyComp = function MyComp() {};
($traceurRuntime.createClass)(MyComp, {}, {});
Object.defineProperty(MyComp, "annotations", {get: function() {
    return [new Component(), new Template({directives: [SomeDecorator, SomeViewport, SomeViewport2, SomeComponent, SomeComponent2]})];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/test/core/compiler/pipeline/directive_parser_spec.map

//# sourceMappingURL=./directive_parser_spec.map
 main();