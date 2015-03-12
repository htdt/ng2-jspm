"use strict";
Object.defineProperties(module.exports, {
  runCompilerCommonTests: {get: function() {
      return runCompilerCommonTests;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/test/core/compiler/compiler_common_tests";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_test_95_lib__,
    $__angular2_47_src_47_dom_47_dom_95_adapter__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_async__,
    $__angular2_47_src_47_core_47_compiler_47_compiler__,
    $__angular2_47_src_47_core_47_compiler_47_view__,
    $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__,
    $__angular2_47_src_47_core_47_annotations_47_annotations__,
    $__angular2_47_src_47_core_47_annotations_47_template__,
    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__,
    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__,
    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__,
    $__angular2_47_src_47_core_47_compiler_47_template_95_loader__,
    $__angular2_47_src_47_core_47_compiler_47_template_95_resolver__,
    $__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__,
    $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__,
    $__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__,
    $__angular2_47_src_47_core_47_compiler_47_css_95_processor__,
    $__angular2_47_change_95_detection__,
    $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var $__1 = ($__angular2_47_test_95_lib__ = require("angular2/test_lib"), $__angular2_47_test_95_lib__ && $__angular2_47_test_95_lib__.__esModule && $__angular2_47_test_95_lib__ || {default: $__angular2_47_test_95_lib__}),
    describe = $__1.describe,
    beforeEach = $__1.beforeEach,
    it = $__1.it,
    expect = $__1.expect,
    ddescribe = $__1.ddescribe,
    iit = $__1.iit,
    el = $__1.el,
    IS_DARTIUM = $__1.IS_DARTIUM;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var $__3 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    List = $__3.List,
    ListWrapper = $__3.ListWrapper,
    Map = $__3.Map,
    MapWrapper = $__3.MapWrapper,
    StringMapWrapper = $__3.StringMapWrapper;
var $__4 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    Type = $__4.Type,
    isBlank = $__4.isBlank,
    stringify = $__4.stringify,
    isPresent = $__4.isPresent;
var PromiseWrapper = ($__angular2_47_src_47_facade_47_async__ = require("angular2/src/facade/async"), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}).PromiseWrapper;
var $__6 = ($__angular2_47_src_47_core_47_compiler_47_compiler__ = require("angular2/src/core/compiler/compiler"), $__angular2_47_src_47_core_47_compiler_47_compiler__ && $__angular2_47_src_47_core_47_compiler_47_compiler__.__esModule && $__angular2_47_src_47_core_47_compiler_47_compiler__ || {default: $__angular2_47_src_47_core_47_compiler_47_compiler__}),
    Compiler = $__6.Compiler,
    CompilerCache = $__6.CompilerCache;
var ProtoView = ($__angular2_47_src_47_core_47_compiler_47_view__ = require("angular2/src/core/compiler/view"), $__angular2_47_src_47_core_47_compiler_47_view__ && $__angular2_47_src_47_core_47_compiler_47_view__.__esModule && $__angular2_47_src_47_core_47_compiler_47_view__ || {default: $__angular2_47_src_47_core_47_compiler_47_view__}).ProtoView;
var DirectiveMetadataReader = ($__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__ = require("angular2/src/core/compiler/directive_metadata_reader"), $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__ && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__.__esModule && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__ || {default: $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__}).DirectiveMetadataReader;
var Component = ($__angular2_47_src_47_core_47_annotations_47_annotations__ = require("angular2/src/core/annotations/annotations"), $__angular2_47_src_47_core_47_annotations_47_annotations__ && $__angular2_47_src_47_core_47_annotations_47_annotations__.__esModule && $__angular2_47_src_47_core_47_annotations_47_annotations__ || {default: $__angular2_47_src_47_core_47_annotations_47_annotations__}).Component;
var Template = ($__angular2_47_src_47_core_47_annotations_47_template__ = require("angular2/src/core/annotations/template"), $__angular2_47_src_47_core_47_annotations_47_template__ && $__angular2_47_src_47_core_47_annotations_47_template__.__esModule && $__angular2_47_src_47_core_47_annotations_47_template__ || {default: $__angular2_47_src_47_core_47_annotations_47_template__}).Template;
var CompileElement = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ = require("angular2/src/core/compiler/pipeline/compile_element"), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__}).CompileElement;
var CompileStep = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__ = require("angular2/src/core/compiler/pipeline/compile_step"), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__}).CompileStep;
var CompileControl = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__ = require("angular2/src/core/compiler/pipeline/compile_control"), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__}).CompileControl;
var TemplateLoader = ($__angular2_47_src_47_core_47_compiler_47_template_95_loader__ = require("angular2/src/core/compiler/template_loader"), $__angular2_47_src_47_core_47_compiler_47_template_95_loader__ && $__angular2_47_src_47_core_47_compiler_47_template_95_loader__.__esModule && $__angular2_47_src_47_core_47_compiler_47_template_95_loader__ || {default: $__angular2_47_src_47_core_47_compiler_47_template_95_loader__}).TemplateLoader;
var TemplateResolver = ($__angular2_47_src_47_core_47_compiler_47_template_95_resolver__ = require("angular2/src/core/compiler/template_resolver"), $__angular2_47_src_47_core_47_compiler_47_template_95_resolver__ && $__angular2_47_src_47_core_47_compiler_47_template_95_resolver__.__esModule && $__angular2_47_src_47_core_47_compiler_47_template_95_resolver__ || {default: $__angular2_47_src_47_core_47_compiler_47_template_95_resolver__}).TemplateResolver;
var $__16 = ($__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__ = require("angular2/src/core/compiler/component_url_mapper"), $__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__ && $__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__.__esModule && $__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__ || {default: $__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__}),
    ComponentUrlMapper = $__16.ComponentUrlMapper,
    RuntimeComponentUrlMapper = $__16.RuntimeComponentUrlMapper;
var UrlResolver = ($__angular2_47_src_47_core_47_compiler_47_url_95_resolver__ = require("angular2/src/core/compiler/url_resolver"), $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__ && $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__.__esModule && $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__ || {default: $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__}).UrlResolver;
var StyleUrlResolver = ($__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__ = require("angular2/src/core/compiler/style_url_resolver"), $__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__ && $__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__.__esModule && $__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__ || {default: $__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__}).StyleUrlResolver;
var CssProcessor = ($__angular2_47_src_47_core_47_compiler_47_css_95_processor__ = require("angular2/src/core/compiler/css_processor"), $__angular2_47_src_47_core_47_compiler_47_css_95_processor__ && $__angular2_47_src_47_core_47_compiler_47_css_95_processor__.__esModule && $__angular2_47_src_47_core_47_compiler_47_css_95_processor__ || {default: $__angular2_47_src_47_core_47_compiler_47_css_95_processor__}).CssProcessor;
var $__20 = ($__angular2_47_change_95_detection__ = require("angular2/change_detection"), $__angular2_47_change_95_detection__ && $__angular2_47_change_95_detection__.__esModule && $__angular2_47_change_95_detection__ || {default: $__angular2_47_change_95_detection__}),
    Lexer = $__20.Lexer,
    Parser = $__20.Parser,
    dynamicChangeDetection = $__20.dynamicChangeDetection;
var $__21 = ($__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__ = require("angular2/src/core/compiler/shadow_dom_strategy"), $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__ && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__.__esModule && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__ || {default: $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__}),
    ShadowDomStrategy = $__21.ShadowDomStrategy,
    NativeShadowDomStrategy = $__21.NativeShadowDomStrategy;
function runCompilerCommonTests() {
  describe('compiler', function() {
    StringMapWrapper.forEach({
      '(sync TemplateLoader)': true,
      '(async TemplateLoader)': false
    }, (function(sync, name) {
      var reader,
          tplResolver;
      beforeEach((function() {
        reader = new DirectiveMetadataReader();
        tplResolver = new FakeTemplateResolver();
        if (sync) {
          tplResolver.forceSync();
        } else {
          tplResolver.forceAsync();
        }
      }));
      describe(name, (function() {
        function createCompiler(processClosure) {
          var steps = [new MockStep(processClosure)];
          var urlResolver = new FakeUrlResolver();
          var tplLoader = new FakeTemplateLoader(urlResolver);
          return new TestableCompiler(reader, steps, tplLoader, tplResolver, urlResolver, new ComponentUrlMapper());
        }
        it('should run the steps and return the ProtoView of the root element', (function(done) {
          var rootProtoView = new ProtoView(null, null, null);
          var compiler = createCompiler((function(parent, current, control) {
            current.inheritedProtoView = rootProtoView;
          }));
          tplResolver.setTemplate(MainComponent, new Template({inline: '<div></div>'}));
          compiler.compile(MainComponent).then((function(protoView) {
            expect(protoView).toBe(rootProtoView);
            done();
          }));
        }));
        it('should use the inline template', (function(done) {
          var compiler = createCompiler((function(parent, current, control) {
            current.inheritedProtoView = new ProtoView(current.element, null, null);
          }));
          compiler.compile(MainComponent).then((function(protoView) {
            expect(DOM.getInnerHTML(protoView.element)).toEqual('inline component');
            done();
          }));
        }));
        it('should wait for async styles to be resolved', (function(done) {
          var styleResolved = false;
          var completer = PromiseWrapper.completer();
          var compiler = createCompiler((function(parent, current, control) {
            var protoView = new ProtoView(current.element, null, null);
            ListWrapper.push(protoView.stylePromises, completer.promise.then((function(_) {
              styleResolved = true;
            })));
            current.inheritedProtoView = protoView;
          }));
          var pvPromise = compiler.compile(MainComponent);
          expect(pvPromise).toBePromise();
          expect(styleResolved).toEqual(false);
          completer.resolve(null);
          pvPromise.then((function(protoView) {
            expect(styleResolved).toEqual(true);
            done();
          }));
        }));
        it('should load nested components', (function(done) {
          var compiler = createCompiler((function(parent, current, control) {
            if (DOM.hasClass(current.element, 'nested')) {
              current.componentDirective = reader.read(NestedComponent);
              current.inheritedProtoView = parent.inheritedProtoView;
              current.inheritedElementBinder = current.inheritedProtoView.bindElement(null);
            } else {
              current.inheritedProtoView = new ProtoView(current.element, null, null);
            }
          }));
          tplResolver.setTemplate(MainComponent, new Template({inline: '<div class="nested"></div>'}));
          compiler.compile(MainComponent).then((function(protoView) {
            var nestedView = protoView.elementBinders[0].nestedProtoView;
            expect(DOM.getInnerHTML(nestedView.element)).toEqual('nested component');
            done();
          }));
        }));
        it('should cache compiled components', (function(done) {
          var compiler = createCompiler((function(parent, current, control) {
            current.inheritedProtoView = new ProtoView(current.element, null, null);
          }));
          var firstProtoView;
          tplResolver.setTemplate(MainComponent, new Template({inline: '<div></div>'}));
          compiler.compile(MainComponent).then((function(protoView) {
            firstProtoView = protoView;
            return compiler.compile(MainComponent);
          })).then((function(protoView) {
            expect(firstProtoView).toBe(protoView);
            done();
          }));
        }));
        it('should re-use components being compiled', (function(done) {
          var nestedElBinders = [];
          var compiler = createCompiler((function(parent, current, control) {
            current.inheritedProtoView = new ProtoView(current.element, null, null);
            if (DOM.hasClass(current.element, 'nested')) {
              current.inheritedElementBinder = current.inheritedProtoView.bindElement(null);
              current.componentDirective = reader.read(NestedComponent);
              ListWrapper.push(nestedElBinders, current.inheritedElementBinder);
            }
          }));
          tplResolver.setTemplate(MainComponent, new Template({inline: '<div><div class="nested"></div><div class="nested"></div></div>'}));
          compiler.compile(MainComponent).then((function(protoView) {
            expect(nestedElBinders[0].nestedProtoView).toBe(nestedElBinders[1].nestedProtoView);
            done();
          }));
        }));
        it('should allow recursive components', (function(done) {
          var compiler = createCompiler((function(parent, current, control) {
            current.inheritedProtoView = new ProtoView(current.element, null, null);
            current.inheritedElementBinder = current.inheritedProtoView.bindElement(null);
            current.componentDirective = reader.read(RecursiveComponent);
          }));
          compiler.compile(RecursiveComponent).then((function(protoView) {
            expect(protoView.elementBinders[0].nestedProtoView).toBe(protoView);
            done();
          }));
        }));
      }));
    }));
    describe('(mixed async, sync TemplateLoader)', (function() {
      var reader = new DirectiveMetadataReader();
      function createCompiler(processClosure, templateResolver) {
        assert.argumentTypes(processClosure, assert.type.any, templateResolver, TemplateResolver);
        var steps = [new MockStep(processClosure)];
        var urlResolver = new FakeUrlResolver();
        var tplLoader = new FakeTemplateLoader(urlResolver);
        return new TestableCompiler(reader, steps, tplLoader, templateResolver, urlResolver, new ComponentUrlMapper());
      }
      Object.defineProperty(createCompiler, "parameters", {get: function() {
          return [[], [TemplateResolver]];
        }});
      function createNestedComponentSpec(name, resolver) {
        var error = arguments[2] !== (void 0) ? arguments[2] : null;
        assert.argumentTypes(name, assert.type.any, resolver, TemplateResolver, error, assert.type.string);
        it(("should load nested components " + name), (function(done) {
          var compiler = createCompiler((function(parent, current, control) {
            if (DOM.hasClass(current.element, 'parent')) {
              current.componentDirective = reader.read(NestedComponent);
              current.inheritedProtoView = parent.inheritedProtoView;
              current.inheritedElementBinder = current.inheritedProtoView.bindElement(null);
            } else {
              current.inheritedProtoView = new ProtoView(current.element, null, null);
            }
          }), resolver);
          PromiseWrapper.then(compiler.compile(ParentComponent), function(protoView) {
            var nestedView = protoView.elementBinders[0].nestedProtoView;
            expect(error).toBeNull();
            expect(DOM.getInnerHTML(nestedView.element)).toEqual('nested component');
            done();
          }, function(compileError) {
            expect(compileError.message).toEqual(error);
            done();
          });
        }));
      }
      Object.defineProperty(createNestedComponentSpec, "parameters", {get: function() {
          return [[], [TemplateResolver], [assert.type.string]];
        }});
      var templateResolver = new FakeTemplateResolver();
      templateResolver.setSync(ParentComponent);
      templateResolver.setSync(NestedComponent);
      createNestedComponentSpec('(sync -> sync)', templateResolver);
      templateResolver = new FakeTemplateResolver();
      templateResolver.setAsync(ParentComponent);
      templateResolver.setSync(NestedComponent);
      createNestedComponentSpec('(async -> sync)', templateResolver);
      templateResolver = new FakeTemplateResolver();
      templateResolver.setSync(ParentComponent);
      templateResolver.setAsync(NestedComponent);
      createNestedComponentSpec('(sync -> async)', templateResolver);
      templateResolver = new FakeTemplateResolver();
      templateResolver.setAsync(ParentComponent);
      templateResolver.setAsync(NestedComponent);
      createNestedComponentSpec('(async -> async)', templateResolver);
      templateResolver = new FakeTemplateResolver();
      templateResolver.setError(ParentComponent);
      templateResolver.setSync(NestedComponent);
      createNestedComponentSpec('(error -> sync)', templateResolver, 'Failed to load the template for ParentComponent');
      templateResolver = new FakeTemplateResolver();
      templateResolver.setSync(ParentComponent);
      templateResolver.setError(NestedComponent);
      createNestedComponentSpec('(sync -> error)', templateResolver, 'Failed to load the template for NestedComponent -> Failed to compile ParentComponent');
      templateResolver = new FakeTemplateResolver();
      templateResolver.setAsync(ParentComponent);
      templateResolver.setError(NestedComponent);
      createNestedComponentSpec('(async -> error)', templateResolver, 'Failed to load the template for NestedComponent -> Failed to compile ParentComponent');
    }));
    describe('URL resolution', (function() {
      it('should resolve template URLs by combining application, component and template URLs', (function(done) {
        var steps = [new MockStep((function(parent, current, control) {
          current.inheritedProtoView = new ProtoView(current.element, null, null);
        }))];
        var reader = new DirectiveMetadataReader();
        var tplResolver = new FakeTemplateResolver();
        var urlResolver = new FakeUrlResolver();
        var tplLoader = new FakeTemplateLoader(urlResolver);
        var template = new Template({
          inline: '<div></div>',
          url: '/tpl.html'
        });
        var cmpUrlMapper = new RuntimeComponentUrlMapper();
        cmpUrlMapper.setComponentUrl(MainComponent, '/cmp');
        var compiler = new TestableCompiler(reader, steps, tplLoader, tplResolver, urlResolver, cmpUrlMapper);
        tplResolver.forceSync();
        tplResolver.setTemplate(MainComponent, template);
        compiler.compile(MainComponent).then((function(protoView) {
          expect(tplLoader.getTemplateUrl(template)).toEqual('http://www.app.com/cmp/tpl.html');
          done();
        }));
      }));
    }));
  });
}
var ParentComponent = function ParentComponent() {};
($traceurRuntime.createClass)(ParentComponent, {}, {});
Object.defineProperty(ParentComponent, "annotations", {get: function() {
    return [new Component(), new Template({inline: '<div class="parent"></div>'})];
  }});
var MainComponent = function MainComponent() {};
($traceurRuntime.createClass)(MainComponent, {}, {});
Object.defineProperty(MainComponent, "annotations", {get: function() {
    return [new Component(), new Template({inline: 'inline component'})];
  }});
var NestedComponent = function NestedComponent() {};
($traceurRuntime.createClass)(NestedComponent, {}, {});
Object.defineProperty(NestedComponent, "annotations", {get: function() {
    return [new Component(), new Template({inline: 'nested component'})];
  }});
var RecursiveComponent = function RecursiveComponent() {};
($traceurRuntime.createClass)(RecursiveComponent, {}, {});
Object.defineProperty(RecursiveComponent, "annotations", {get: function() {
    return [new Component({selector: 'rec-comp'}), new Template({inline: '<div rec-comp></div>'})];
  }});
var TestableCompiler = function TestableCompiler(reader, steps, loader, templateResolver, urlResolver, cmpUrlMapper) {
  assert.argumentTypes(reader, DirectiveMetadataReader, steps, assert.genericType(List, CompileStep), loader, TemplateLoader, templateResolver, TemplateResolver, urlResolver, UrlResolver, cmpUrlMapper, ComponentUrlMapper);
  $traceurRuntime.superConstructor($TestableCompiler).call(this, dynamicChangeDetection, loader, reader, new Parser(new Lexer()), new CompilerCache(), new NativeShadowDomStrategy(new StyleUrlResolver(urlResolver)), templateResolver, cmpUrlMapper, urlResolver, new CssProcessor(null));
  this.steps = steps;
};
var $TestableCompiler = TestableCompiler;
($traceurRuntime.createClass)(TestableCompiler, {createSteps: function(component, template) {
    assert.argumentTypes(component, Type, template, Template);
    return assert.returnType((this.steps), assert.genericType(List, CompileStep));
  }}, {}, Compiler);
Object.defineProperty(TestableCompiler, "parameters", {get: function() {
    return [[DirectiveMetadataReader], [assert.genericType(List, CompileStep)], [TemplateLoader], [TemplateResolver], [UrlResolver], [ComponentUrlMapper]];
  }});
Object.defineProperty(TestableCompiler.prototype.createSteps, "parameters", {get: function() {
    return [[Type], [Template]];
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
var FakeUrlResolver = function FakeUrlResolver() {
  $traceurRuntime.superConstructor($FakeUrlResolver).call(this);
};
var $FakeUrlResolver = FakeUrlResolver;
($traceurRuntime.createClass)(FakeUrlResolver, {resolve: function(baseUrl, url) {
    assert.argumentTypes(baseUrl, assert.type.string, url, assert.type.string);
    if (baseUrl === null && url == './') {
      return assert.returnType(('http://www.app.com'), assert.type.string);
    }
    ;
    return assert.returnType((baseUrl + url), assert.type.string);
  }}, {}, UrlResolver);
Object.defineProperty(FakeUrlResolver.prototype.resolve, "parameters", {get: function() {
    return [[assert.type.string], [assert.type.string]];
  }});
var FakeTemplateLoader = function FakeTemplateLoader(urlResolver) {
  assert.argumentTypes(urlResolver, UrlResolver);
  $traceurRuntime.superConstructor($FakeTemplateLoader).call(this, null, urlResolver);
};
var $FakeTemplateLoader = FakeTemplateLoader;
($traceurRuntime.createClass)(FakeTemplateLoader, {load: function(template) {
    assert.argumentTypes(template, Template);
    if (isPresent(template.inline)) {
      return DOM.createTemplate(template.inline);
    }
    if (isPresent(template.url)) {
      var tplElement = DOM.createTemplate(template.url);
      return PromiseWrapper.resolve(tplElement);
    }
    return PromiseWrapper.reject('Fail to load');
  }}, {}, TemplateLoader);
Object.defineProperty(FakeTemplateLoader, "parameters", {get: function() {
    return [[UrlResolver]];
  }});
Object.defineProperty(FakeTemplateLoader.prototype.load, "parameters", {get: function() {
    return [[Template]];
  }});
var FakeTemplateResolver = function FakeTemplateResolver() {
  $traceurRuntime.superConstructor($FakeTemplateResolver).call(this);
  this._forceSync = false;
  this._forceAsync = false;
  this._syncCmp = [];
  this._asyncCmp = [];
  this._errorCmp = [];
  this._cmpTemplates = MapWrapper.create();
};
var $FakeTemplateResolver = FakeTemplateResolver;
($traceurRuntime.createClass)(FakeTemplateResolver, {
  resolve: function(component) {
    assert.argumentTypes(component, Type);
    var template = MapWrapper.get(this._cmpTemplates, component);
    if (isBlank(template)) {
      template = $traceurRuntime.superGet(this, $FakeTemplateResolver.prototype, "resolve").call(this, component);
    }
    var html = template.inline;
    if (isBlank(template.inline)) {
      throw 'The tested component must define an inline template';
    }
    if (ListWrapper.contains(this._errorCmp, component)) {
      return assert.returnType((new Template({
        url: null,
        inline: null
      })), Template);
    }
    if (ListWrapper.contains(this._syncCmp, component)) {
      return assert.returnType((template), Template);
    }
    if (ListWrapper.contains(this._asyncCmp, component)) {
      return assert.returnType((new Template({url: html})), Template);
    }
    if (this._forceSync)
      return assert.returnType((template), Template);
    if (this._forceAsync)
      return assert.returnType((new Template({url: html})), Template);
    throw 'No template';
  },
  forceSync: function() {
    this._forceSync = true;
    this._forceAsync = false;
  },
  forceAsync: function() {
    this._forceAsync = true;
    this._forceSync = false;
  },
  setSync: function(component) {
    assert.argumentTypes(component, Type);
    ListWrapper.push(this._syncCmp, component);
  },
  setAsync: function(component) {
    assert.argumentTypes(component, Type);
    ListWrapper.push(this._asyncCmp, component);
  },
  setError: function(component) {
    assert.argumentTypes(component, Type);
    ListWrapper.push(this._errorCmp, component);
  },
  setTemplate: function(component, template) {
    assert.argumentTypes(component, Type, template, Template);
    MapWrapper.set(this._cmpTemplates, component, template);
  }
}, {}, TemplateResolver);
Object.defineProperty(FakeTemplateResolver.prototype.resolve, "parameters", {get: function() {
    return [[Type]];
  }});
Object.defineProperty(FakeTemplateResolver.prototype.setSync, "parameters", {get: function() {
    return [[Type]];
  }});
Object.defineProperty(FakeTemplateResolver.prototype.setAsync, "parameters", {get: function() {
    return [[Type]];
  }});
Object.defineProperty(FakeTemplateResolver.prototype.setError, "parameters", {get: function() {
    return [[Type]];
  }});
Object.defineProperty(FakeTemplateResolver.prototype.setTemplate, "parameters", {get: function() {
    return [[Type], [Template]];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/test/core/compiler/compiler_common_tests.map

//# sourceMappingURL=./compiler_common_tests.map