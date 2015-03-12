var parse5Adapter = require('angular2/src/dom/parse5_adapter');
parse5Adapter.Parse5DomAdapter.makeCurrent();
"use strict";
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/test/directives/if_spec";
var $__angular2_47_test_95_lib__,
    $__angular2_47_src_47_dom_47_dom_95_adapter__,
    $__angular2_47_di__,
    $__angular2_47_change_95_detection__,
    $__angular2_47_src_47_core_47_compiler_47_compiler__,
    $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__,
    $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__,
    $__angular2_47_src_47_core_47_compiler_47_template_95_loader__,
    $__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__,
    $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__,
    $__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__,
    $__angular2_47_src_47_core_47_compiler_47_css_95_processor__,
    $__angular2_47_src_47_core_47_annotations_47_annotations__,
    $__angular2_47_src_47_core_47_annotations_47_template__,
    $__angular2_47_src_47_mock_47_template_95_resolver_95_mock__,
    $__angular2_47_src_47_directives_47_if__;
var $__0 = ($__angular2_47_test_95_lib__ = require("angular2/test_lib"), $__angular2_47_test_95_lib__ && $__angular2_47_test_95_lib__.__esModule && $__angular2_47_test_95_lib__ || {default: $__angular2_47_test_95_lib__}),
    describe = $__0.describe,
    xit = $__0.xit,
    it = $__0.it,
    expect = $__0.expect,
    beforeEach = $__0.beforeEach,
    ddescribe = $__0.ddescribe,
    iit = $__0.iit,
    el = $__0.el,
    IS_DARTIUM = $__0.IS_DARTIUM;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var Injector = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}).Injector;
var $__3 = ($__angular2_47_change_95_detection__ = require("angular2/change_detection"), $__angular2_47_change_95_detection__ && $__angular2_47_change_95_detection__.__esModule && $__angular2_47_change_95_detection__ || {default: $__angular2_47_change_95_detection__}),
    Lexer = $__3.Lexer,
    Parser = $__3.Parser,
    ChangeDetector = $__3.ChangeDetector,
    dynamicChangeDetection = $__3.dynamicChangeDetection;
var $__4 = ($__angular2_47_src_47_core_47_compiler_47_compiler__ = require("angular2/src/core/compiler/compiler"), $__angular2_47_src_47_core_47_compiler_47_compiler__ && $__angular2_47_src_47_core_47_compiler_47_compiler__.__esModule && $__angular2_47_src_47_core_47_compiler_47_compiler__ || {default: $__angular2_47_src_47_core_47_compiler_47_compiler__}),
    Compiler = $__4.Compiler,
    CompilerCache = $__4.CompilerCache;
var DirectiveMetadataReader = ($__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__ = require("angular2/src/core/compiler/directive_metadata_reader"), $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__ && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__.__esModule && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__ || {default: $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__}).DirectiveMetadataReader;
var NativeShadowDomStrategy = ($__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__ = require("angular2/src/core/compiler/shadow_dom_strategy"), $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__ && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__.__esModule && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__ || {default: $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__}).NativeShadowDomStrategy;
var TemplateLoader = ($__angular2_47_src_47_core_47_compiler_47_template_95_loader__ = require("angular2/src/core/compiler/template_loader"), $__angular2_47_src_47_core_47_compiler_47_template_95_loader__ && $__angular2_47_src_47_core_47_compiler_47_template_95_loader__.__esModule && $__angular2_47_src_47_core_47_compiler_47_template_95_loader__ || {default: $__angular2_47_src_47_core_47_compiler_47_template_95_loader__}).TemplateLoader;
var ComponentUrlMapper = ($__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__ = require("angular2/src/core/compiler/component_url_mapper"), $__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__ && $__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__.__esModule && $__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__ || {default: $__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__}).ComponentUrlMapper;
var UrlResolver = ($__angular2_47_src_47_core_47_compiler_47_url_95_resolver__ = require("angular2/src/core/compiler/url_resolver"), $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__ && $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__.__esModule && $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__ || {default: $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__}).UrlResolver;
var StyleUrlResolver = ($__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__ = require("angular2/src/core/compiler/style_url_resolver"), $__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__ && $__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__.__esModule && $__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__ || {default: $__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__}).StyleUrlResolver;
var CssProcessor = ($__angular2_47_src_47_core_47_compiler_47_css_95_processor__ = require("angular2/src/core/compiler/css_processor"), $__angular2_47_src_47_core_47_compiler_47_css_95_processor__ && $__angular2_47_src_47_core_47_compiler_47_css_95_processor__.__esModule && $__angular2_47_src_47_core_47_compiler_47_css_95_processor__ || {default: $__angular2_47_src_47_core_47_compiler_47_css_95_processor__}).CssProcessor;
var Component = ($__angular2_47_src_47_core_47_annotations_47_annotations__ = require("angular2/src/core/annotations/annotations"), $__angular2_47_src_47_core_47_annotations_47_annotations__ && $__angular2_47_src_47_core_47_annotations_47_annotations__.__esModule && $__angular2_47_src_47_core_47_annotations_47_annotations__ || {default: $__angular2_47_src_47_core_47_annotations_47_annotations__}).Component;
var Template = ($__angular2_47_src_47_core_47_annotations_47_template__ = require("angular2/src/core/annotations/template"), $__angular2_47_src_47_core_47_annotations_47_template__ && $__angular2_47_src_47_core_47_annotations_47_template__.__esModule && $__angular2_47_src_47_core_47_annotations_47_template__ || {default: $__angular2_47_src_47_core_47_annotations_47_template__}).Template;
var MockTemplateResolver = ($__angular2_47_src_47_mock_47_template_95_resolver_95_mock__ = require("angular2/src/mock/template_resolver_mock"), $__angular2_47_src_47_mock_47_template_95_resolver_95_mock__ && $__angular2_47_src_47_mock_47_template_95_resolver_95_mock__.__esModule && $__angular2_47_src_47_mock_47_template_95_resolver_95_mock__ || {default: $__angular2_47_src_47_mock_47_template_95_resolver_95_mock__}).MockTemplateResolver;
var If = ($__angular2_47_src_47_directives_47_if__ = require("angular2/src/directives/if"), $__angular2_47_src_47_directives_47_if__ && $__angular2_47_src_47_directives_47_if__.__esModule && $__angular2_47_src_47_directives_47_if__ || {default: $__angular2_47_src_47_directives_47_if__}).If;
function main() {
  describe('if directive', (function() {
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
        directives: [If]
      });
      tplResolver.setTemplate(TestComponent, template);
      return compiler.compile(TestComponent);
    }
    it('should work in a template attribute', (function(done) {
      compileWithTemplate('<div><copy-me template="if booleanCondition">hello</copy-me></div>').then((function(pv) {
        createView(pv);
        cd.detectChanges();
        expect(view.nodes[0].querySelectorAll('copy-me').length).toEqual(1);
        expect(DOM.getText(view.nodes[0])).toEqual('hello');
        done();
      }));
    }));
    it('should work in a template element', (function(done) {
      compileWithTemplate('<div><template [if]="booleanCondition"><copy-me>hello2</copy-me></template></div>').then((function(pv) {
        createView(pv);
        cd.detectChanges();
        expect(view.nodes[0].querySelectorAll('copy-me').length).toEqual(1);
        expect(DOM.getText(view.nodes[0])).toEqual('hello2');
        done();
      }));
    }));
    it('should toggle node when condition changes', (function(done) {
      compileWithTemplate('<div><copy-me template="if booleanCondition">hello</copy-me></div>').then((function(pv) {
        createView(pv);
        component.booleanCondition = false;
        cd.detectChanges();
        expect(view.nodes[0].querySelectorAll('copy-me').length).toEqual(0);
        expect(DOM.getText(view.nodes[0])).toEqual('');
        component.booleanCondition = true;
        cd.detectChanges();
        expect(view.nodes[0].querySelectorAll('copy-me').length).toEqual(1);
        expect(DOM.getText(view.nodes[0])).toEqual('hello');
        component.booleanCondition = false;
        cd.detectChanges();
        expect(view.nodes[0].querySelectorAll('copy-me').length).toEqual(0);
        expect(DOM.getText(view.nodes[0])).toEqual('');
        done();
      }));
    }));
    it('should update several nodes with if', (function(done) {
      var templateString = '<div>' + '<copy-me template="if numberCondition + 1 >= 2">helloNumber</copy-me>' + '<copy-me template="if stringCondition == \'foo\'">helloString</copy-me>' + '<copy-me template="if functionCondition(stringCondition, numberCondition)">helloFunction</copy-me>' + '</div>';
      compileWithTemplate(templateString).then((function(pv) {
        createView(pv);
        cd.detectChanges();
        expect(view.nodes[0].querySelectorAll('copy-me').length).toEqual(3);
        expect(DOM.getText(view.nodes[0])).toEqual('helloNumberhelloStringhelloFunction');
        component.numberCondition = 0;
        cd.detectChanges();
        expect(view.nodes[0].querySelectorAll('copy-me').length).toEqual(1);
        expect(DOM.getText(view.nodes[0])).toEqual('helloString');
        component.numberCondition = 1;
        component.stringCondition = "bar";
        cd.detectChanges();
        expect(view.nodes[0].querySelectorAll('copy-me').length).toEqual(1);
        expect(DOM.getText(view.nodes[0])).toEqual('helloNumber');
        done();
      }));
    }));
    if (!IS_DARTIUM) {
      it('should leave the element if the condition is a non-empty string (JS)', (function(done) {
        compileWithTemplate('<div><copy-me template="if stringCondition">hello</copy-me></div>').then((function(pv) {
          createView(pv);
          cd.detectChanges();
          expect(view.nodes[0].querySelectorAll('copy-me').length).toEqual(1);
          expect(DOM.getText(view.nodes[0])).toEqual('hello');
          done();
        }));
      }));
      it('should leave the element if the condition is an object (JS)', (function(done) {
        compileWithTemplate('<div><copy-me template="if objectCondition">hello</copy-me></div>').then((function(pv) {
          createView(pv);
          cd.detectChanges();
          expect(view.nodes[0].querySelectorAll('copy-me').length).toEqual(1);
          expect(DOM.getText(view.nodes[0])).toEqual('hello');
          done();
        }));
      }));
      it('should remove the element if the condition is null (JS)', (function(done) {
        compileWithTemplate('<div><copy-me template="if nullCondition">hello</copy-me></div>').then((function(pv) {
          createView(pv);
          cd.detectChanges();
          expect(view.nodes[0].querySelectorAll('copy-me').length).toEqual(0);
          expect(DOM.getText(view.nodes[0])).toEqual('');
          done();
        }));
      }));
      it('should not add the element twice if the condition goes from true to true (JS)', (function(done) {
        compileWithTemplate('<div><copy-me template="if numberCondition">hello</copy-me></div>').then((function(pv) {
          createView(pv);
          cd.detectChanges();
          expect(view.nodes[0].querySelectorAll('copy-me').length).toEqual(1);
          expect(DOM.getText(view.nodes[0])).toEqual('hello');
          component.numberCondition = 2;
          cd.detectChanges();
          expect(view.nodes[0].querySelectorAll('copy-me').length).toEqual(1);
          expect(DOM.getText(view.nodes[0])).toEqual('hello');
          done();
        }));
      }));
      it('should not recreate the element if the condition goes from true to true (JS)', (function(done) {
        compileWithTemplate('<div><copy-me template="if numberCondition">hello</copy-me></div>').then((function(pv) {
          createView(pv);
          cd.detectChanges();
          DOM.addClass(view.nodes[0].childNodes[1], "foo");
          component.numberCondition = 2;
          cd.detectChanges();
          expect(DOM.hasClass(view.nodes[0].childNodes[1], "foo")).toBe(true);
          done();
        }));
      }));
    } else {
      it('should not create the element if the condition is not a boolean (DART)', (function(done) {
        compileWithTemplate('<div><copy-me template="if numberCondition">hello</copy-me></div>').then((function(pv) {
          createView(pv);
          expect(function() {
            cd.detectChanges();
          }).toThrowError();
          expect(view.nodes[0].querySelectorAll('copy-me').length).toEqual(0);
          expect(DOM.getText(view.nodes[0])).toEqual('');
          done();
        }));
      }));
    }
  }));
}
var TestComponent = function TestComponent() {
  this.booleanCondition = true;
  this.numberCondition = 1;
  this.stringCondition = "foo";
  this.functionCondition = function(s, n) {
    return s == "foo" && n == 1;
  };
  this.objectCondition = {};
  this.nullCondition = null;
};
($traceurRuntime.createClass)(TestComponent, {}, {});
Object.defineProperty(TestComponent, "annotations", {get: function() {
    return [new Component({selector: 'test-cmp'})];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/test/directives/if_spec.map

//# sourceMappingURL=./if_spec.map
 main();