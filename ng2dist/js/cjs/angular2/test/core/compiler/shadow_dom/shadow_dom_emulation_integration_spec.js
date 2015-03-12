var parse5Adapter = require('angular2/src/dom/parse5_adapter');
parse5Adapter.Parse5DomAdapter.makeCurrent();
"use strict";
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/test/core/compiler/shadow_dom/shadow_dom_emulation_integration_spec";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_test_95_lib__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_dom_47_dom_95_adapter__,
    $__angular2_47_di__,
    $__angular2_47_change_95_detection__,
    $__angular2_47_src_47_core_47_exception_95_handler__,
    $__angular2_47_src_47_core_47_compiler_47_compiler__,
    $__angular2_47_src_47_core_47_life_95_cycle_47_life_95_cycle__,
    $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__,
    $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__,
    $__angular2_47_src_47_core_47_compiler_47_template_95_loader__,
    $__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__,
    $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__,
    $__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__,
    $__angular2_47_src_47_core_47_compiler_47_style_95_inliner__,
    $__angular2_47_src_47_core_47_compiler_47_css_95_processor__,
    $__angular2_47_src_47_mock_47_template_95_resolver_95_mock__,
    $__angular2_47_src_47_core_47_annotations_47_annotations__,
    $__angular2_47_src_47_core_47_annotations_47_template__,
    $__angular2_47_src_47_core_47_compiler_47_view_95_container__,
    $__angular2_47_src_47_dom_47_browser_95_adapter__,
    $__angular2_47_src_47_reflection_47_reflection__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var $__1 = ($__angular2_47_test_95_lib__ = require("angular2/test_lib"), $__angular2_47_test_95_lib__ && $__angular2_47_test_95_lib__.__esModule && $__angular2_47_test_95_lib__ || {default: $__angular2_47_test_95_lib__}),
    describe = $__1.describe,
    xit = $__1.xit,
    it = $__1.it,
    expect = $__1.expect,
    beforeEach = $__1.beforeEach,
    ddescribe = $__1.ddescribe,
    iit = $__1.iit,
    el = $__1.el;
var $__2 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    StringMapWrapper = $__2.StringMapWrapper,
    List = $__2.List;
var Type = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).Type;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var Injector = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}).Injector;
var $__6 = ($__angular2_47_change_95_detection__ = require("angular2/change_detection"), $__angular2_47_change_95_detection__ && $__angular2_47_change_95_detection__.__esModule && $__angular2_47_change_95_detection__ || {default: $__angular2_47_change_95_detection__}),
    Lexer = $__6.Lexer,
    Parser = $__6.Parser,
    ChangeDetector = $__6.ChangeDetector,
    dynamicChangeDetection = $__6.dynamicChangeDetection;
var ExceptionHandler = ($__angular2_47_src_47_core_47_exception_95_handler__ = require("angular2/src/core/exception_handler"), $__angular2_47_src_47_core_47_exception_95_handler__ && $__angular2_47_src_47_core_47_exception_95_handler__.__esModule && $__angular2_47_src_47_core_47_exception_95_handler__ || {default: $__angular2_47_src_47_core_47_exception_95_handler__}).ExceptionHandler;
var $__8 = ($__angular2_47_src_47_core_47_compiler_47_compiler__ = require("angular2/src/core/compiler/compiler"), $__angular2_47_src_47_core_47_compiler_47_compiler__ && $__angular2_47_src_47_core_47_compiler_47_compiler__.__esModule && $__angular2_47_src_47_core_47_compiler_47_compiler__ || {default: $__angular2_47_src_47_core_47_compiler_47_compiler__}),
    Compiler = $__8.Compiler,
    CompilerCache = $__8.CompilerCache;
var LifeCycle = ($__angular2_47_src_47_core_47_life_95_cycle_47_life_95_cycle__ = require("angular2/src/core/life_cycle/life_cycle"), $__angular2_47_src_47_core_47_life_95_cycle_47_life_95_cycle__ && $__angular2_47_src_47_core_47_life_95_cycle_47_life_95_cycle__.__esModule && $__angular2_47_src_47_core_47_life_95_cycle_47_life_95_cycle__ || {default: $__angular2_47_src_47_core_47_life_95_cycle_47_life_95_cycle__}).LifeCycle;
var DirectiveMetadataReader = ($__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__ = require("angular2/src/core/compiler/directive_metadata_reader"), $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__ && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__.__esModule && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__ || {default: $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__}).DirectiveMetadataReader;
var $__11 = ($__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__ = require("angular2/src/core/compiler/shadow_dom_strategy"), $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__ && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__.__esModule && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__ || {default: $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__}),
    ShadowDomStrategy = $__11.ShadowDomStrategy,
    NativeShadowDomStrategy = $__11.NativeShadowDomStrategy,
    EmulatedScopedShadowDomStrategy = $__11.EmulatedScopedShadowDomStrategy,
    EmulatedUnscopedShadowDomStrategy = $__11.EmulatedUnscopedShadowDomStrategy;
var TemplateLoader = ($__angular2_47_src_47_core_47_compiler_47_template_95_loader__ = require("angular2/src/core/compiler/template_loader"), $__angular2_47_src_47_core_47_compiler_47_template_95_loader__ && $__angular2_47_src_47_core_47_compiler_47_template_95_loader__.__esModule && $__angular2_47_src_47_core_47_compiler_47_template_95_loader__ || {default: $__angular2_47_src_47_core_47_compiler_47_template_95_loader__}).TemplateLoader;
var ComponentUrlMapper = ($__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__ = require("angular2/src/core/compiler/component_url_mapper"), $__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__ && $__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__.__esModule && $__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__ || {default: $__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__}).ComponentUrlMapper;
var UrlResolver = ($__angular2_47_src_47_core_47_compiler_47_url_95_resolver__ = require("angular2/src/core/compiler/url_resolver"), $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__ && $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__.__esModule && $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__ || {default: $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__}).UrlResolver;
var StyleUrlResolver = ($__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__ = require("angular2/src/core/compiler/style_url_resolver"), $__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__ && $__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__.__esModule && $__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__ || {default: $__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__}).StyleUrlResolver;
var StyleInliner = ($__angular2_47_src_47_core_47_compiler_47_style_95_inliner__ = require("angular2/src/core/compiler/style_inliner"), $__angular2_47_src_47_core_47_compiler_47_style_95_inliner__ && $__angular2_47_src_47_core_47_compiler_47_style_95_inliner__.__esModule && $__angular2_47_src_47_core_47_compiler_47_style_95_inliner__ || {default: $__angular2_47_src_47_core_47_compiler_47_style_95_inliner__}).StyleInliner;
var CssProcessor = ($__angular2_47_src_47_core_47_compiler_47_css_95_processor__ = require("angular2/src/core/compiler/css_processor"), $__angular2_47_src_47_core_47_compiler_47_css_95_processor__ && $__angular2_47_src_47_core_47_compiler_47_css_95_processor__.__esModule && $__angular2_47_src_47_core_47_compiler_47_css_95_processor__ || {default: $__angular2_47_src_47_core_47_compiler_47_css_95_processor__}).CssProcessor;
var MockTemplateResolver = ($__angular2_47_src_47_mock_47_template_95_resolver_95_mock__ = require("angular2/src/mock/template_resolver_mock"), $__angular2_47_src_47_mock_47_template_95_resolver_95_mock__ && $__angular2_47_src_47_mock_47_template_95_resolver_95_mock__.__esModule && $__angular2_47_src_47_mock_47_template_95_resolver_95_mock__ || {default: $__angular2_47_src_47_mock_47_template_95_resolver_95_mock__}).MockTemplateResolver;
var $__19 = ($__angular2_47_src_47_core_47_annotations_47_annotations__ = require("angular2/src/core/annotations/annotations"), $__angular2_47_src_47_core_47_annotations_47_annotations__ && $__angular2_47_src_47_core_47_annotations_47_annotations__.__esModule && $__angular2_47_src_47_core_47_annotations_47_annotations__ || {default: $__angular2_47_src_47_core_47_annotations_47_annotations__}),
    Decorator = $__19.Decorator,
    Component = $__19.Component,
    Viewport = $__19.Viewport;
var Template = ($__angular2_47_src_47_core_47_annotations_47_template__ = require("angular2/src/core/annotations/template"), $__angular2_47_src_47_core_47_annotations_47_template__ && $__angular2_47_src_47_core_47_annotations_47_template__.__esModule && $__angular2_47_src_47_core_47_annotations_47_template__ || {default: $__angular2_47_src_47_core_47_annotations_47_template__}).Template;
var ViewContainer = ($__angular2_47_src_47_core_47_compiler_47_view_95_container__ = require("angular2/src/core/compiler/view_container"), $__angular2_47_src_47_core_47_compiler_47_view_95_container__ && $__angular2_47_src_47_core_47_compiler_47_view_95_container__.__esModule && $__angular2_47_src_47_core_47_compiler_47_view_95_container__ || {default: $__angular2_47_src_47_core_47_compiler_47_view_95_container__}).ViewContainer;
var BrowserDomAdapter = ($__angular2_47_src_47_dom_47_browser_95_adapter__ = require("angular2/src/dom/browser_adapter"), $__angular2_47_src_47_dom_47_browser_95_adapter__ && $__angular2_47_src_47_dom_47_browser_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_browser_95_adapter__ || {default: $__angular2_47_src_47_dom_47_browser_95_adapter__}).BrowserDomAdapter;
var reflector = ($__angular2_47_src_47_reflection_47_reflection__ = require("angular2/src/reflection/reflection"), $__angular2_47_src_47_reflection_47_reflection__ && $__angular2_47_src_47_reflection_47_reflection__.__esModule && $__angular2_47_src_47_reflection_47_reflection__ || {default: $__angular2_47_src_47_reflection_47_reflection__}).reflector;
function main() {
  BrowserDomAdapter.makeCurrent();
  describe('integration tests', function() {
    var urlResolver = new UrlResolver();
    var styleUrlResolver = new StyleUrlResolver(urlResolver);
    var styleInliner = new StyleInliner(null, styleUrlResolver, urlResolver);
    StringMapWrapper.forEach({
      "native": new NativeShadowDomStrategy(styleUrlResolver),
      "scoped": new EmulatedScopedShadowDomStrategy(styleInliner, styleUrlResolver, DOM.createElement('div')),
      "unscoped": new EmulatedUnscopedShadowDomStrategy(styleUrlResolver, DOM.createElement('div'))
    }, (function(strategy, name) {
      describe((name + " shadow dom strategy"), (function() {
        var compiler,
            tplResolver;
        beforeEach((function() {
          tplResolver = new MockTemplateResolver();
          compiler = new Compiler(dynamicChangeDetection, new TemplateLoader(null, null), new DirectiveMetadataReader(), new Parser(new Lexer()), new CompilerCache(), strategy, tplResolver, new ComponentUrlMapper(), urlResolver, new CssProcessor(null));
        }));
        function compile(template, directives, assertions) {
          assert.argumentTypes(template, assert.type.any, directives, assert.genericType(List, Type), assertions, assert.type.any);
          tplResolver.setTemplate(MyComp, new Template({
            inline: template,
            directives: directives
          }));
          compiler.compile(MyComp).then(createView).then((function(view) {
            var lc = new LifeCycle(new ExceptionHandler(), view.changeDetector, false);
            assertions(view, lc);
          }));
        }
        Object.defineProperty(compile, "parameters", {get: function() {
            return [[], [assert.genericType(List, Type)], []];
          }});
        it('should support multiple content tags', (function(done) {
          var temp = '<multiple-content-tags>' + '<div>B</div>' + '<div>C</div>' + '<div class="left">A</div>' + '</multiple-content-tags>';
          compile(temp, [MultipleContentTagsComponent], (function(view, lc) {
            expect(view.nodes).toHaveText('(A, BC)');
            done();
          }));
        }));
        it('should redistribute only direct children', (function(done) {
          var temp = '<multiple-content-tags>' + '<div>B<div class="left">A</div></div>' + '<div>C</div>' + '</multiple-content-tags>';
          compile(temp, [MultipleContentTagsComponent], (function(view, lc) {
            expect(view.nodes).toHaveText('(, BAC)');
            done();
          }));
        }));
        it("should redistribute direct child viewcontainers when the light dom changes", (function(done) {
          var temp = '<multiple-content-tags>' + '<div><div template="manual" class="left">A</div></div>' + '<div>B</div>' + '</multiple-content-tags>';
          compile(temp, [MultipleContentTagsComponent, ManualViewportDirective], (function(view, lc) {
            var dir = view.elementInjectors[1].get(ManualViewportDirective);
            expect(view.nodes).toHaveText('(, B)');
            dir.show();
            lc.tick();
            expect(view.nodes).toHaveText('(, AB)');
            dir.hide();
            lc.tick();
            expect(view.nodes).toHaveText('(, B)');
            done();
          }));
        }));
        it("should redistribute when the light dom changes", (function(done) {
          var temp = '<multiple-content-tags>' + '<div template="manual" class="left">A</div>' + '<div>B</div>' + '</multiple-content-tags>';
          compile(temp, [MultipleContentTagsComponent, ManualViewportDirective], (function(view, lc) {
            var dir = view.elementInjectors[1].get(ManualViewportDirective);
            expect(view.nodes).toHaveText('(, B)');
            dir.show();
            lc.tick();
            expect(view.nodes).toHaveText('(A, B)');
            dir.hide();
            lc.tick();
            expect(view.nodes).toHaveText('(, B)');
            done();
          }));
        }));
        it("should support nested components", (function(done) {
          var temp = '<outer-with-indirect-nested>' + '<div>A</div>' + '<div>B</div>' + '</outer-with-indirect-nested>';
          compile(temp, [OuterWithIndirectNestedComponent], (function(view, lc) {
            expect(view.nodes).toHaveText('OUTER(SIMPLE(AB))');
            done();
          }));
        }));
        it("should support nesting with content being direct child of a nested component", (function(done) {
          var temp = '<outer>' + '<div template="manual" class="left">A</div>' + '<div>B</div>' + '<div>C</div>' + '</outer>';
          compile(temp, [OuterComponent, ManualViewportDirective], (function(view, lc) {
            var dir = view.elementInjectors[1].get(ManualViewportDirective);
            expect(view.nodes).toHaveText('OUTER(INNER(INNERINNER(,BC)))');
            dir.show();
            lc.tick();
            expect(view.nodes).toHaveText('OUTER(INNER(INNERINNER(A,BC)))');
            done();
          }));
        }));
      }));
    }));
  });
}
var TestDirectiveMetadataReader = function TestDirectiveMetadataReader(shadowDomStrategy) {
  $traceurRuntime.superConstructor($TestDirectiveMetadataReader).call(this);
  this.shadowDomStrategy = shadowDomStrategy;
};
var $TestDirectiveMetadataReader = TestDirectiveMetadataReader;
($traceurRuntime.createClass)(TestDirectiveMetadataReader, {parseShadowDomStrategy: function(annotation) {
    assert.argumentTypes(annotation, Component);
    return assert.returnType((this.shadowDomStrategy), ShadowDomStrategy);
  }}, {}, DirectiveMetadataReader);
Object.defineProperty(TestDirectiveMetadataReader.prototype.parseShadowDomStrategy, "parameters", {get: function() {
    return [[Component]];
  }});
var ManualViewportDirective = function ManualViewportDirective(viewContainer) {
  assert.argumentTypes(viewContainer, ViewContainer);
  this.viewContainer = viewContainer;
};
($traceurRuntime.createClass)(ManualViewportDirective, {
  show: function() {
    this.viewContainer.create();
  },
  hide: function() {
    this.viewContainer.remove(0);
  }
}, {});
Object.defineProperty(ManualViewportDirective, "annotations", {get: function() {
    return [new Viewport({selector: '[manual]'})];
  }});
Object.defineProperty(ManualViewportDirective, "parameters", {get: function() {
    return [[ViewContainer]];
  }});
var AutoViewportDirective = function AutoViewportDirective(viewContainer) {
  assert.argumentTypes(viewContainer, ViewContainer);
  this.viewContainer = viewContainer;
};
($traceurRuntime.createClass)(AutoViewportDirective, {set auto(newValue) {
    assert.argumentTypes(newValue, assert.type.boolean);
    if (newValue) {
      this.viewContainer.create();
    } else {
      this.viewContainer.remove(0);
    }
  }}, {});
Object.defineProperty(AutoViewportDirective, "annotations", {get: function() {
    return [new Viewport({
      selector: '[auto]',
      bind: {'auto': 'auto'}
    })];
  }});
Object.defineProperty(AutoViewportDirective, "parameters", {get: function() {
    return [[ViewContainer]];
  }});
Object.defineProperty(Object.getOwnPropertyDescriptor(AutoViewportDirective.prototype, "auto").set, "parameters", {get: function() {
    return [[assert.type.boolean]];
  }});
var Simple = function Simple() {};
($traceurRuntime.createClass)(Simple, {}, {});
Object.defineProperty(Simple, "annotations", {get: function() {
    return [new Component({selector: 'simple'}), new Template({inline: 'SIMPLE(<content></content>)'})];
  }});
var MultipleContentTagsComponent = function MultipleContentTagsComponent() {};
($traceurRuntime.createClass)(MultipleContentTagsComponent, {}, {});
Object.defineProperty(MultipleContentTagsComponent, "annotations", {get: function() {
    return [new Component({selector: 'multiple-content-tags'}), new Template({inline: '(<content select=".left"></content>, <content></content>)'})];
  }});
var ConditionalContentComponent = function ConditionalContentComponent() {
  this.cond = false;
};
($traceurRuntime.createClass)(ConditionalContentComponent, {
  showLeft: function() {
    this.cond = true;
  },
  hideLeft: function() {
    this.cond = false;
  }
}, {});
Object.defineProperty(ConditionalContentComponent, "annotations", {get: function() {
    return [new Component({selector: 'conditional-content'}), new Template({
      inline: '<div>(<div template="auto: cond"><content select=".left"></content></div>, <content></content>)</div>',
      directives: [AutoViewportDirective]
    })];
  }});
var OuterWithIndirectNestedComponent = function OuterWithIndirectNestedComponent() {};
($traceurRuntime.createClass)(OuterWithIndirectNestedComponent, {}, {});
Object.defineProperty(OuterWithIndirectNestedComponent, "annotations", {get: function() {
    return [new Component({selector: 'outer-with-indirect-nested'}), new Template({
      inline: 'OUTER(<simple><div><content></content></div></simple>)',
      directives: [Simple]
    })];
  }});
var OuterComponent = function OuterComponent() {};
($traceurRuntime.createClass)(OuterComponent, {}, {});
Object.defineProperty(OuterComponent, "annotations", {get: function() {
    return [new Component({selector: 'outer'}), new Template({
      inline: 'OUTER(<inner><content></content></inner>)',
      directives: [InnerComponent]
    })];
  }});
var InnerComponent = function InnerComponent() {};
($traceurRuntime.createClass)(InnerComponent, {}, {});
Object.defineProperty(InnerComponent, "annotations", {get: function() {
    return [new Component({selector: 'inner'}), new Template({
      inline: 'INNER(<innerinner><content></content></innerinner>)',
      directives: [InnerInnerComponent]
    })];
  }});
var InnerInnerComponent = function InnerInnerComponent() {};
($traceurRuntime.createClass)(InnerInnerComponent, {}, {});
Object.defineProperty(InnerInnerComponent, "annotations", {get: function() {
    return [new Component({selector: 'innerinner'}), new Template({inline: 'INNERINNER(<content select=".left"></content>,<content></content>)'})];
  }});
var MyComp = function MyComp() {};
($traceurRuntime.createClass)(MyComp, {}, {});
Object.defineProperty(MyComp, "annotations", {get: function() {
    return [new Component({selector: 'my-comp'}), new Template({directives: [MultipleContentTagsComponent, ManualViewportDirective, ConditionalContentComponent, OuterWithIndirectNestedComponent, OuterComponent]})];
  }});
function createView(pv) {
  var view = pv.instantiate(null, null, reflector);
  view.hydrate(new Injector([]), null, {});
  return view;
}

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/test/core/compiler/shadow_dom/shadow_dom_emulation_integration_spec.map

//# sourceMappingURL=./shadow_dom_emulation_integration_spec.map
 main();