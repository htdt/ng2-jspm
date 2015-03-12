var parse5Adapter = require('angular2/src/dom/parse5_adapter');
parse5Adapter.Parse5DomAdapter.makeCurrent();
"use strict";
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/test/directives/non_bindable_spec";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_test_95_lib__,
    $__angular2_47_src_47_dom_47_dom_95_adapter__,
    $__angular2_47_di__,
    $__angular2_47_change_95_detection__,
    $__angular2_47_src_47_core_47_compiler_47_compiler__,
    $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__,
    $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__,
    $__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__,
    $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__,
    $__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__,
    $__angular2_47_src_47_core_47_compiler_47_css_95_processor__,
    $__angular2_47_src_47_core_47_annotations_47_annotations__,
    $__angular2_47_src_47_core_47_annotations_47_template__,
    $__angular2_47_src_47_core_47_compiler_47_template_95_loader__,
    $__angular2_47_src_47_core_47_dom_47_element__,
    $__angular2_47_src_47_directives_47_non_95_bindable__,
    $__angular2_47_src_47_mock_47_template_95_resolver_95_mock__;
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
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var Injector = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}).Injector;
var $__4 = ($__angular2_47_change_95_detection__ = require("angular2/change_detection"), $__angular2_47_change_95_detection__ && $__angular2_47_change_95_detection__.__esModule && $__angular2_47_change_95_detection__ || {default: $__angular2_47_change_95_detection__}),
    Lexer = $__4.Lexer,
    Parser = $__4.Parser,
    ChangeDetector = $__4.ChangeDetector,
    dynamicChangeDetection = $__4.dynamicChangeDetection;
var $__5 = ($__angular2_47_src_47_core_47_compiler_47_compiler__ = require("angular2/src/core/compiler/compiler"), $__angular2_47_src_47_core_47_compiler_47_compiler__ && $__angular2_47_src_47_core_47_compiler_47_compiler__.__esModule && $__angular2_47_src_47_core_47_compiler_47_compiler__ || {default: $__angular2_47_src_47_core_47_compiler_47_compiler__}),
    Compiler = $__5.Compiler,
    CompilerCache = $__5.CompilerCache;
var DirectiveMetadataReader = ($__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__ = require("angular2/src/core/compiler/directive_metadata_reader"), $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__ && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__.__esModule && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__ || {default: $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__}).DirectiveMetadataReader;
var NativeShadowDomStrategy = ($__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__ = require("angular2/src/core/compiler/shadow_dom_strategy"), $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__ && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__.__esModule && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__ || {default: $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__}).NativeShadowDomStrategy;
var ComponentUrlMapper = ($__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__ = require("angular2/src/core/compiler/component_url_mapper"), $__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__ && $__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__.__esModule && $__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__ || {default: $__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__}).ComponentUrlMapper;
var UrlResolver = ($__angular2_47_src_47_core_47_compiler_47_url_95_resolver__ = require("angular2/src/core/compiler/url_resolver"), $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__ && $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__.__esModule && $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__ || {default: $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__}).UrlResolver;
var StyleUrlResolver = ($__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__ = require("angular2/src/core/compiler/style_url_resolver"), $__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__ && $__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__.__esModule && $__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__ || {default: $__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__}).StyleUrlResolver;
var CssProcessor = ($__angular2_47_src_47_core_47_compiler_47_css_95_processor__ = require("angular2/src/core/compiler/css_processor"), $__angular2_47_src_47_core_47_compiler_47_css_95_processor__ && $__angular2_47_src_47_core_47_compiler_47_css_95_processor__.__esModule && $__angular2_47_src_47_core_47_compiler_47_css_95_processor__ || {default: $__angular2_47_src_47_core_47_compiler_47_css_95_processor__}).CssProcessor;
var $__12 = ($__angular2_47_src_47_core_47_annotations_47_annotations__ = require("angular2/src/core/annotations/annotations"), $__angular2_47_src_47_core_47_annotations_47_annotations__ && $__angular2_47_src_47_core_47_annotations_47_annotations__.__esModule && $__angular2_47_src_47_core_47_annotations_47_annotations__ || {default: $__angular2_47_src_47_core_47_annotations_47_annotations__}),
    Decorator = $__12.Decorator,
    Component = $__12.Component;
var Template = ($__angular2_47_src_47_core_47_annotations_47_template__ = require("angular2/src/core/annotations/template"), $__angular2_47_src_47_core_47_annotations_47_template__ && $__angular2_47_src_47_core_47_annotations_47_template__.__esModule && $__angular2_47_src_47_core_47_annotations_47_template__ || {default: $__angular2_47_src_47_core_47_annotations_47_template__}).Template;
var TemplateLoader = ($__angular2_47_src_47_core_47_compiler_47_template_95_loader__ = require("angular2/src/core/compiler/template_loader"), $__angular2_47_src_47_core_47_compiler_47_template_95_loader__ && $__angular2_47_src_47_core_47_compiler_47_template_95_loader__.__esModule && $__angular2_47_src_47_core_47_compiler_47_template_95_loader__ || {default: $__angular2_47_src_47_core_47_compiler_47_template_95_loader__}).TemplateLoader;
var NgElement = ($__angular2_47_src_47_core_47_dom_47_element__ = require("angular2/src/core/dom/element"), $__angular2_47_src_47_core_47_dom_47_element__ && $__angular2_47_src_47_core_47_dom_47_element__.__esModule && $__angular2_47_src_47_core_47_dom_47_element__ || {default: $__angular2_47_src_47_core_47_dom_47_element__}).NgElement;
var NonBindable = ($__angular2_47_src_47_directives_47_non_95_bindable__ = require("angular2/src/directives/non_bindable"), $__angular2_47_src_47_directives_47_non_95_bindable__ && $__angular2_47_src_47_directives_47_non_95_bindable__.__esModule && $__angular2_47_src_47_directives_47_non_95_bindable__ || {default: $__angular2_47_src_47_directives_47_non_95_bindable__}).NonBindable;
var MockTemplateResolver = ($__angular2_47_src_47_mock_47_template_95_resolver_95_mock__ = require("angular2/src/mock/template_resolver_mock"), $__angular2_47_src_47_mock_47_template_95_resolver_95_mock__ && $__angular2_47_src_47_mock_47_template_95_resolver_95_mock__.__esModule && $__angular2_47_src_47_mock_47_template_95_resolver_95_mock__ || {default: $__angular2_47_src_47_mock_47_template_95_resolver_95_mock__}).MockTemplateResolver;
function main() {
  describe('non-bindable', (function() {
    var view,
        cd,
        compiler,
        component,
        tplResolver;
    beforeEach((function() {
      var urlResolver = new UrlResolver();
      tplResolver = new MockTemplateResolver();
      compiler = new Compiler(dynamicChangeDetection, new TemplateLoader(null, null), new DirectiveMetadataReader(), new Parser(new Lexer()), new CompilerCache(), new NativeShadowDomStrategy(new StyleUrlResolver(urlResolver)), tplResolver, new ComponentUrlMapper(), urlResolver, new CssProcessor(null));
    }));
    function createView(pv) {
      component = new TestComponent();
      view = pv.instantiate(null, null, null);
      view.hydrate(new Injector([]), null, component);
      cd = view.changeDetector;
    }
    function compileWithTemplate(html) {
      var template = new Template({
        inline: html,
        directives: [NonBindable, TestDecorator]
      });
      tplResolver.setTemplate(TestComponent, template);
      return compiler.compile(TestComponent);
    }
    it('should not interpolate children', (function(done) {
      var template = '<div>{{text}}<span non-bindable>{{text}}</span></div>';
      compileWithTemplate(template).then((function(pv) {
        createView(pv);
        cd.detectChanges();
        expect(DOM.getText(view.nodes[0])).toEqual('foo{{text}}');
        done();
      }));
    }));
    it('should ignore directives on child nodes', (function(done) {
      var template = '<div non-bindable><span id=child test-dec>{{text}}</span></div>';
      compileWithTemplate(template).then((function(pv) {
        createView(pv);
        cd.detectChanges();
        var span = DOM.querySelector(view.nodes[0], '#child');
        expect(DOM.hasClass(span, 'compiled')).toBeFalsy();
        done();
      }));
    }));
    it('should trigger directives on the same node', (function(done) {
      var template = '<div><span id=child non-bindable test-dec>{{text}}</span></div>';
      compileWithTemplate(template).then((function(pv) {
        createView(pv);
        cd.detectChanges();
        var span = DOM.querySelector(view.nodes[0], '#child');
        expect(DOM.hasClass(span, 'compiled')).toBeTruthy();
        done();
      }));
    }));
  }));
}
var TestComponent = function TestComponent() {
  this.text = 'foo';
};
($traceurRuntime.createClass)(TestComponent, {}, {});
Object.defineProperty(TestComponent, "annotations", {get: function() {
    return [new Component({selector: 'test-cmp'})];
  }});
var TestDecorator = function TestDecorator(el) {
  assert.argumentTypes(el, NgElement);
  DOM.addClass(el.domElement, 'compiled');
};
($traceurRuntime.createClass)(TestDecorator, {}, {});
Object.defineProperty(TestDecorator, "annotations", {get: function() {
    return [new Decorator({selector: '[test-dec]'})];
  }});
Object.defineProperty(TestDecorator, "parameters", {get: function() {
    return [[NgElement]];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/test/directives/non_bindable_spec.map

//# sourceMappingURL=./non_bindable_spec.map
 main();