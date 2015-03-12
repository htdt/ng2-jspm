var parse5Adapter = require('angular2/src/dom/parse5_adapter');
parse5Adapter.Parse5DomAdapter.makeCurrent();
"use strict";
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/test/directives/foreach_spec";
var $__angular2_47_test_95_lib__,
    $__angular2_47_src_47_dom_47_dom_95_adapter__,
    $__angular2_47_src_47_facade_47_collection__,
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
    $__angular2_47_src_47_core_47_annotations_47_template__,
    $__angular2_47_src_47_core_47_annotations_47_annotations__,
    $__angular2_47_src_47_mock_47_template_95_resolver_95_mock__,
    $__angular2_47_src_47_directives_47_foreach__;
var $__0 = ($__angular2_47_test_95_lib__ = require("angular2/test_lib"), $__angular2_47_test_95_lib__ && $__angular2_47_test_95_lib__.__esModule && $__angular2_47_test_95_lib__ || {default: $__angular2_47_test_95_lib__}),
    describe = $__0.describe,
    xit = $__0.xit,
    it = $__0.it,
    expect = $__0.expect,
    beforeEach = $__0.beforeEach,
    ddescribe = $__0.ddescribe,
    iit = $__0.iit,
    el = $__0.el;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var ListWrapper = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}).ListWrapper;
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
var TemplateLoader = ($__angular2_47_src_47_core_47_compiler_47_template_95_loader__ = require("angular2/src/core/compiler/template_loader"), $__angular2_47_src_47_core_47_compiler_47_template_95_loader__ && $__angular2_47_src_47_core_47_compiler_47_template_95_loader__.__esModule && $__angular2_47_src_47_core_47_compiler_47_template_95_loader__ || {default: $__angular2_47_src_47_core_47_compiler_47_template_95_loader__}).TemplateLoader;
var ComponentUrlMapper = ($__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__ = require("angular2/src/core/compiler/component_url_mapper"), $__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__ && $__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__.__esModule && $__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__ || {default: $__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__}).ComponentUrlMapper;
var UrlResolver = ($__angular2_47_src_47_core_47_compiler_47_url_95_resolver__ = require("angular2/src/core/compiler/url_resolver"), $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__ && $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__.__esModule && $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__ || {default: $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__}).UrlResolver;
var StyleUrlResolver = ($__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__ = require("angular2/src/core/compiler/style_url_resolver"), $__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__ && $__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__.__esModule && $__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__ || {default: $__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__}).StyleUrlResolver;
var CssProcessor = ($__angular2_47_src_47_core_47_compiler_47_css_95_processor__ = require("angular2/src/core/compiler/css_processor"), $__angular2_47_src_47_core_47_compiler_47_css_95_processor__ && $__angular2_47_src_47_core_47_compiler_47_css_95_processor__.__esModule && $__angular2_47_src_47_core_47_compiler_47_css_95_processor__ || {default: $__angular2_47_src_47_core_47_compiler_47_css_95_processor__}).CssProcessor;
var Template = ($__angular2_47_src_47_core_47_annotations_47_template__ = require("angular2/src/core/annotations/template"), $__angular2_47_src_47_core_47_annotations_47_template__ && $__angular2_47_src_47_core_47_annotations_47_template__.__esModule && $__angular2_47_src_47_core_47_annotations_47_template__ || {default: $__angular2_47_src_47_core_47_annotations_47_template__}).Template;
var $__14 = ($__angular2_47_src_47_core_47_annotations_47_annotations__ = require("angular2/src/core/annotations/annotations"), $__angular2_47_src_47_core_47_annotations_47_annotations__ && $__angular2_47_src_47_core_47_annotations_47_annotations__.__esModule && $__angular2_47_src_47_core_47_annotations_47_annotations__ || {default: $__angular2_47_src_47_core_47_annotations_47_annotations__}),
    Decorator = $__14.Decorator,
    Component = $__14.Component,
    Viewport = $__14.Viewport;
var MockTemplateResolver = ($__angular2_47_src_47_mock_47_template_95_resolver_95_mock__ = require("angular2/src/mock/template_resolver_mock"), $__angular2_47_src_47_mock_47_template_95_resolver_95_mock__ && $__angular2_47_src_47_mock_47_template_95_resolver_95_mock__.__esModule && $__angular2_47_src_47_mock_47_template_95_resolver_95_mock__ || {default: $__angular2_47_src_47_mock_47_template_95_resolver_95_mock__}).MockTemplateResolver;
var Foreach = ($__angular2_47_src_47_directives_47_foreach__ = require("angular2/src/directives/foreach"), $__angular2_47_src_47_directives_47_foreach__ && $__angular2_47_src_47_directives_47_foreach__.__esModule && $__angular2_47_src_47_directives_47_foreach__ || {default: $__angular2_47_src_47_directives_47_foreach__}).Foreach;
function main() {
  describe('foreach', (function() {
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
        directives: [Foreach]
      });
      tplResolver.setTemplate(TestComponent, template);
      return compiler.compile(TestComponent);
    }
    var TEMPLATE = '<div><copy-me template="foreach #item in items">{{item.toString()}};</copy-me></div>';
    it('should reflect initial elements', (function(done) {
      compileWithTemplate(TEMPLATE).then((function(pv) {
        createView(pv);
        cd.detectChanges();
        expect(DOM.getText(view.nodes[0])).toEqual('1;2;');
        done();
      }));
    }));
    it('should reflect added elements', (function(done) {
      compileWithTemplate(TEMPLATE).then((function(pv) {
        createView(pv);
        cd.detectChanges();
        ListWrapper.push(component.items, 3);
        cd.detectChanges();
        expect(DOM.getText(view.nodes[0])).toEqual('1;2;3;');
        done();
      }));
    }));
    it('should reflect removed elements', (function(done) {
      compileWithTemplate(TEMPLATE).then((function(pv) {
        createView(pv);
        cd.detectChanges();
        ListWrapper.removeAt(component.items, 1);
        cd.detectChanges();
        expect(DOM.getText(view.nodes[0])).toEqual('1;');
        done();
      }));
    }));
    it('should reflect moved elements', (function(done) {
      compileWithTemplate(TEMPLATE).then((function(pv) {
        createView(pv);
        cd.detectChanges();
        ListWrapper.removeAt(component.items, 0);
        ListWrapper.push(component.items, 1);
        cd.detectChanges();
        expect(DOM.getText(view.nodes[0])).toEqual('2;1;');
        done();
      }));
    }));
    it('should reflect a mix of all changes (additions/removals/moves)', (function(done) {
      compileWithTemplate(TEMPLATE).then((function(pv) {
        createView(pv);
        component.items = [0, 1, 2, 3, 4, 5];
        cd.detectChanges();
        component.items = [6, 2, 7, 0, 4, 8];
        cd.detectChanges();
        expect(DOM.getText(view.nodes[0])).toEqual('6;2;7;0;4;8;');
        done();
      }));
    }));
    it('should iterate over an array of objects', (function() {
      compileWithTemplate('<ul><li template="foreach #item in items">{{item["name"]}};</li></ul>').then((function(pv) {
        createView(pv);
        component.items = [{'name': 'misko'}, {'name': 'shyam'}];
        cd.detectChanges();
        expect(DOM.getText(view.nodes[0])).toEqual('misko;shyam;');
        ListWrapper.push(component.items, {'name': 'adam'});
        cd.detectChanges();
        expect(DOM.getText(view.nodes[0])).toEqual('misko;shyam;adam;');
        ListWrapper.removeAt(component.items, 2);
        ListWrapper.removeAt(component.items, 0);
        cd.detectChanges();
        expect(DOM.getText(view.nodes[0])).toEqual('shyam;');
      }));
    }));
    it('should gracefully handle nulls', (function(done) {
      compileWithTemplate('<ul><li template="foreach #item in null">{{item}};</li></ul>').then((function(pv) {
        createView(pv);
        cd.detectChanges();
        expect(DOM.getText(view.nodes[0])).toEqual('');
        done();
      }));
    }));
    it('should gracefully handle ref changing to null and back', (function(done) {
      compileWithTemplate(TEMPLATE).then((function(pv) {
        createView(pv);
        cd.detectChanges();
        expect(DOM.getText(view.nodes[0])).toEqual('1;2;');
        component.items = null;
        cd.detectChanges();
        expect(DOM.getText(view.nodes[0])).toEqual('');
        component.items = [1, 2, 3];
        cd.detectChanges();
        expect(DOM.getText(view.nodes[0])).toEqual('1;2;3;');
        done();
      }));
    }));
    it('should throw on ref changing to string', (function(done) {
      compileWithTemplate(TEMPLATE).then((function(pv) {
        createView(pv);
        cd.detectChanges();
        expect(DOM.getText(view.nodes[0])).toEqual('1;2;');
        component.items = 'whaaa';
        expect((function() {
          return cd.detectChanges();
        })).toThrowError();
        done();
      }));
    }));
    it('should works with duplicates', (function(done) {
      compileWithTemplate(TEMPLATE).then((function(pv) {
        createView(pv);
        var a = new Foo();
        component.items = [a, a];
        cd.detectChanges();
        expect(DOM.getText(view.nodes[0])).toEqual('foo;foo;');
        done();
      }));
    }));
    it('should repeat over nested arrays', (function(done) {
      compileWithTemplate('<div><div template="foreach #item in items">' + '<div template="foreach #subitem in item">' + '{{subitem}};' + '</div>|</div></div>').then((function(pv) {
        createView(pv);
        component.items = [['a', 'b'], ['c', 'd']];
        cd.detectChanges();
        cd.detectChanges();
        cd.detectChanges();
        expect(DOM.getText(view.nodes[0])).toEqual('a;b;|c;d;|');
        done();
      }));
    }));
    it('should display indices correctly', (function(done) {
      var INDEX_TEMPLATE = '<div><copy-me template="foreach: var item in items; var i=index">{{i.toString()}}</copy-me></div>';
      compileWithTemplate(INDEX_TEMPLATE).then((function(pv) {
        createView(pv);
        component.items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        cd.detectChanges();
        expect(DOM.getText(view.nodes[0])).toEqual('0123456789');
        component.items = [1, 2, 6, 7, 4, 3, 5, 8, 9, 0];
        cd.detectChanges();
        expect(DOM.getText(view.nodes[0])).toEqual('0123456789');
        done();
      }));
    }));
  }));
}
var Foo = function Foo() {};
($traceurRuntime.createClass)(Foo, {toString: function() {
    return 'foo';
  }}, {});
var TestComponent = function TestComponent() {
  this.items = [1, 2];
};
($traceurRuntime.createClass)(TestComponent, {}, {});
Object.defineProperty(TestComponent, "annotations", {get: function() {
    return [new Component({selector: 'test-cmp'})];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/test/directives/foreach_spec.map

//# sourceMappingURL=./foreach_spec.map
 main();