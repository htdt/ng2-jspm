var parse5Adapter = require('angular2/src/dom/parse5_adapter');
parse5Adapter.Parse5DomAdapter.makeCurrent();
"use strict";
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/test/core/compiler/shadow_dom_strategy_spec";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_test_95_lib__,
    $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__,
    $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__,
    $__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__,
    $__angular2_47_src_47_core_47_compiler_47_style_95_inliner__,
    $__angular2_47_src_47_core_47_compiler_47_view__,
    $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__,
    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__,
    $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_dom_47_dom_95_adapter__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_facade_47_async__,
    $__angular2_47_change_95_detection__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var $__1 = ($__angular2_47_test_95_lib__ = require("angular2/test_lib"), $__angular2_47_test_95_lib__ && $__angular2_47_test_95_lib__.__esModule && $__angular2_47_test_95_lib__ || {default: $__angular2_47_test_95_lib__}),
    describe = $__1.describe,
    beforeEach = $__1.beforeEach,
    it = $__1.it,
    expect = $__1.expect,
    ddescribe = $__1.ddescribe,
    iit = $__1.iit,
    SpyObject = $__1.SpyObject,
    el = $__1.el;
var $__2 = ($__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__ = require("angular2/src/core/compiler/shadow_dom_strategy"), $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__ && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__.__esModule && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__ || {default: $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__}),
    NativeShadowDomStrategy = $__2.NativeShadowDomStrategy,
    EmulatedScopedShadowDomStrategy = $__2.EmulatedScopedShadowDomStrategy,
    EmulatedUnscopedShadowDomStrategy = $__2.EmulatedUnscopedShadowDomStrategy,
    resetShadowDomCache = $__2.resetShadowDomCache;
var UrlResolver = ($__angular2_47_src_47_core_47_compiler_47_url_95_resolver__ = require("angular2/src/core/compiler/url_resolver"), $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__ && $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__.__esModule && $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__ || {default: $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__}).UrlResolver;
var StyleUrlResolver = ($__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__ = require("angular2/src/core/compiler/style_url_resolver"), $__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__ && $__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__.__esModule && $__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__ || {default: $__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__}).StyleUrlResolver;
var StyleInliner = ($__angular2_47_src_47_core_47_compiler_47_style_95_inliner__ = require("angular2/src/core/compiler/style_inliner"), $__angular2_47_src_47_core_47_compiler_47_style_95_inliner__ && $__angular2_47_src_47_core_47_compiler_47_style_95_inliner__.__esModule && $__angular2_47_src_47_core_47_compiler_47_style_95_inliner__ || {default: $__angular2_47_src_47_core_47_compiler_47_style_95_inliner__}).StyleInliner;
var ProtoView = ($__angular2_47_src_47_core_47_compiler_47_view__ = require("angular2/src/core/compiler/view"), $__angular2_47_src_47_core_47_compiler_47_view__ && $__angular2_47_src_47_core_47_compiler_47_view__.__esModule && $__angular2_47_src_47_core_47_compiler_47_view__ || {default: $__angular2_47_src_47_core_47_compiler_47_view__}).ProtoView;
var DirectiveMetadata = ($__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__ = require("angular2/src/core/compiler/directive_metadata"), $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__ && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__.__esModule && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__ || {default: $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__}).DirectiveMetadata;
var CompileElement = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ = require("angular2/src/core/compiler/pipeline/compile_element"), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__}).CompileElement;
var XHR = ($__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr__ = require("angular2/src/core/compiler/xhr/xhr"), $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr__ && $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr__.__esModule && $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr__ || {default: $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr__}).XHR;
var $__10 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    isPresent = $__10.isPresent,
    isBlank = $__10.isBlank;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var $__12 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    Map = $__12.Map,
    MapWrapper = $__12.MapWrapper;
var $__13 = ($__angular2_47_src_47_facade_47_async__ = require("angular2/src/facade/async"), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}),
    PromiseWrapper = $__13.PromiseWrapper,
    Promise = $__13.Promise;
var DynamicProtoChangeDetector = ($__angular2_47_change_95_detection__ = require("angular2/change_detection"), $__angular2_47_change_95_detection__ && $__angular2_47_change_95_detection__.__esModule && $__angular2_47_change_95_detection__ || {default: $__angular2_47_change_95_detection__}).DynamicProtoChangeDetector;
function main() {
  var strategy;
  describe('NativeShadowDomStratgey', (function() {
    beforeEach((function() {
      var urlResolver = new UrlResolver();
      var styleUrlResolver = new StyleUrlResolver(urlResolver);
      strategy = new NativeShadowDomStrategy(styleUrlResolver);
    }));
    it('should attach the view nodes to the shadow root', (function() {
      var host = el('<div></div>');
      var nodes = el('<div>view</div>');
      var pv = new ProtoView(nodes, new DynamicProtoChangeDetector(null), null);
      var view = pv.instantiate(null, null, null);
      strategy.attachTemplate(host, view);
      var shadowRoot = DOM.getShadowRoot(host);
      expect(isPresent(shadowRoot)).toBeTruthy();
      expect(shadowRoot).toHaveText('view');
    }));
    it('should should not transform template elements', (function() {
      expect(strategy.getTemplateCompileStep(null)).toBe(null);
    }));
    it('should rewrite style urls', (function() {
      var step = strategy.getStyleCompileStep(null, 'http://base');
      var styleElement = DOM.createStyleElement('.one {background-image: url("img.jpg");}');
      var compileElement = new CompileElement(styleElement);
      step.process(null, compileElement, null);
      expect(styleElement).toHaveText(".one {background-image: url('http://base/img.jpg');}");
    }));
    it('should not inline import rules', (function() {
      var step = strategy.getStyleCompileStep(null, 'http://base');
      var styleElement = DOM.createStyleElement('@import "other.css";');
      var compileElement = new CompileElement(styleElement);
      step.process(null, compileElement, null);
      expect(styleElement).toHaveText("@import 'http://base/other.css';");
    }));
  }));
  describe('EmulatedScopedShadowDomStratgey', (function() {
    var xhr,
        styleHost;
    beforeEach((function() {
      var urlResolver = new UrlResolver();
      var styleUrlResolver = new StyleUrlResolver(urlResolver);
      xhr = new FakeXHR();
      var styleInliner = new StyleInliner(xhr, styleUrlResolver, urlResolver);
      styleHost = el('<div></div>');
      strategy = new EmulatedScopedShadowDomStrategy(styleInliner, styleUrlResolver, styleHost);
      resetShadowDomCache();
    }));
    it('should attach the view nodes as child of the host element', (function() {
      var host = el('<div><span>original content</span></div>');
      var nodes = el('<div>view</div>');
      var pv = new ProtoView(nodes, new DynamicProtoChangeDetector(null), null);
      var view = pv.instantiate(null, null, null);
      strategy.attachTemplate(host, view);
      var firstChild = DOM.firstChild(host);
      expect(DOM.tagName(firstChild).toLowerCase()).toEqual('div');
      expect(firstChild).toHaveText('view');
      expect(host).toHaveText('view');
    }));
    it('should rewrite style urls', (function() {
      var template = el('<div><style>.foo {background-image: url("img.jpg");}</style></div>');
      var cmpMetadata = new DirectiveMetadata(SomeComponent, null);
      var step = strategy.getStyleCompileStep(cmpMetadata, 'http://base');
      var styleElement = DOM.firstChild(template);
      var compileElement = new CompileElement(styleElement);
      step.process(null, compileElement, null);
      expect(styleElement).toHaveText(".foo[_ngcontent-0] {\n" + "background-image: url(http://base/img.jpg);\n" + "}");
    }));
    it('should scope styles', (function() {
      var template = el('<div><style>.foo {} :host {}</style></div>');
      var cmpMetadata = new DirectiveMetadata(SomeComponent, null);
      var step = strategy.getStyleCompileStep(cmpMetadata, 'http://base');
      var styleElement = DOM.firstChild(template);
      var compileElement = new CompileElement(styleElement);
      step.process(null, compileElement, null);
      expect(styleElement).toHaveText(".foo[_ngcontent-0] {\n\n}\n\n[_nghost-0] {\n\n}");
    }));
    it('should inline @import rules', (function(done) {
      xhr.reply('http://base/one.css', '.one {}');
      var template = el('<div><style>@import "one.css";</style></div>');
      var cmpMetadata = new DirectiveMetadata(SomeComponent, null);
      var step = strategy.getStyleCompileStep(cmpMetadata, 'http://base');
      var styleElement = DOM.firstChild(template);
      var parentElement = new CompileElement(template);
      var compileElement = new CompileElement(styleElement);
      var parentpv = new ProtoView(null, null, null);
      parentElement.inheritedProtoView = parentpv;
      step.process(parentElement, compileElement, null);
      expect(parentpv.stylePromises.length).toEqual(1);
      expect(parentpv.stylePromises[0]).toBePromise();
      expect(styleElement).toHaveText('');
      parentpv.stylePromises[0].then((function(_) {
        expect(styleElement).toHaveText('.one[_ngcontent-0] {\n\n}');
        done();
      }));
    }));
    it('should return the same style given the same component', (function() {
      var template = el('<div><style>.foo {} :host {}</style></div>');
      var cmpMetadata = new DirectiveMetadata(SomeComponent, null);
      var step = strategy.getStyleCompileStep(cmpMetadata, 'http://base');
      var styleElement = DOM.firstChild(template);
      var compileElement = new CompileElement(styleElement);
      step.process(null, compileElement, null);
      var template2 = el('<div><style>.foo {} :host {}</style></div>');
      var step2 = strategy.getStyleCompileStep(cmpMetadata, 'http://base');
      var styleElement2 = DOM.firstChild(template2);
      var compileElement2 = new CompileElement(styleElement2);
      step2.process(null, compileElement2, null);
      expect(DOM.getText(styleElement)).toEqual(DOM.getText(styleElement2));
    }));
    it('should return different styles given different components', (function() {
      var template = el('<div><style>.foo {} :host {}</style></div>');
      var cmpMetadata = new DirectiveMetadata(SomeComponent, null);
      var step = strategy.getStyleCompileStep(cmpMetadata, 'http://base');
      var styleElement = DOM.firstChild(template);
      var compileElement = new CompileElement(styleElement);
      step.process(null, compileElement, null);
      var template2 = el('<div><style>.foo {} :host {}</style></div>');
      var cmpMetadata2 = new DirectiveMetadata(SomeOtherComponent, null);
      var step2 = strategy.getStyleCompileStep(cmpMetadata2, 'http://base');
      var styleElement2 = DOM.firstChild(template2);
      var compileElement2 = new CompileElement(styleElement2);
      step2.process(null, compileElement2, null);
      expect(DOM.getText(styleElement)).not.toEqual(DOM.getText(styleElement2));
    }));
    it('should move the style element to the style host', (function() {
      var template = el('<div><style>.one {}</style></div>');
      var cmpMetadata = new DirectiveMetadata(SomeComponent, null);
      var step = strategy.getStyleCompileStep(cmpMetadata, 'http://base');
      var styleElement = DOM.firstChild(template);
      var compileElement = new CompileElement(styleElement);
      step.process(null, compileElement, null);
      expect(template).toHaveText('');
      expect(styleHost).toHaveText('.one[_ngcontent-0] {\n\n}');
    }));
    it('should add an attribute to the content elements', (function() {
      var template = el('<div></div>');
      var cmpMetadata = new DirectiveMetadata(SomeComponent, null);
      var step = strategy.getTemplateCompileStep(cmpMetadata);
      var compileElement = new CompileElement(template);
      step.process(null, compileElement, null);
      expect(DOM.getAttribute(template, '_ngcontent-0')).toEqual('');
    }));
    it('should add an attribute to the host elements', (function() {
      var template = el('<div></div>');
      var cmpMetadata = new DirectiveMetadata(SomeComponent, null);
      var step = strategy.getTemplateCompileStep(cmpMetadata);
      var compileElement = new CompileElement(template);
      compileElement.componentDirective = new DirectiveMetadata(SomeOtherComponent, null);
      step.process(null, compileElement, null);
      expect(DOM.getAttribute(template, '_nghost-1')).toEqual('');
    }));
  }));
  describe('EmulatedUnscopedShadowDomStratgey', (function() {
    var styleHost;
    beforeEach((function() {
      var urlResolver = new UrlResolver();
      var styleUrlResolver = new StyleUrlResolver(urlResolver);
      styleHost = el('<div></div>');
      strategy = new EmulatedUnscopedShadowDomStrategy(styleUrlResolver, styleHost);
      resetShadowDomCache();
    }));
    it('should attach the view nodes as child of the host element', (function() {
      var host = el('<div><span>original content</span></div>');
      var nodes = el('<div>view</div>');
      var pv = new ProtoView(nodes, new DynamicProtoChangeDetector(null), null);
      var view = pv.instantiate(null, null, null);
      strategy.attachTemplate(host, view);
      var firstChild = DOM.firstChild(host);
      expect(DOM.tagName(firstChild).toLowerCase()).toEqual('div');
      expect(firstChild).toHaveText('view');
      expect(host).toHaveText('view');
    }));
    it('should rewrite style urls', (function() {
      var template = el('<div><style>.one {background-image: url("img.jpg");}</style></div>');
      var step = strategy.getStyleCompileStep(null, 'http://base');
      var styleElement = DOM.firstChild(template);
      var compileElement = new CompileElement(styleElement);
      step.process(null, compileElement, null);
      expect(styleElement).toHaveText(".one {background-image: url('http://base/img.jpg');}");
    }));
    it('should not inline import rules', (function() {
      var template = el('<div><style>@import "other.css";</style></div>');
      var step = strategy.getStyleCompileStep(null, 'http://base');
      var styleElement = DOM.firstChild(template);
      var compileElement = new CompileElement(styleElement);
      step.process(null, compileElement, null);
      expect(styleElement).toHaveText("@import 'http://base/other.css';");
    }));
    it('should move the style element to the style host', (function() {
      var template = el('<div><style>/*css*/</style></div>');
      var step = strategy.getStyleCompileStep(null, 'http://base');
      var styleElement = DOM.firstChild(template);
      var compileElement = new CompileElement(styleElement);
      step.process(null, compileElement, null);
      expect(styleHost).toHaveText("/*css*/");
    }));
    it('should insert the same style only once in the style host', (function() {
      var template = el('<div><style>/*css1*/</style><style>/*css2*/</style>' + '<style>/*css1*/</style></div>');
      var step = strategy.getStyleCompileStep(null, 'http://base');
      var styleElements = DOM.childNodes(template);
      var compileElement = new CompileElement(styleElements[0]);
      step.process(null, compileElement, null);
      compileElement = new CompileElement(styleElements[0]);
      step.process(null, compileElement, null);
      compileElement = new CompileElement(styleElements[0]);
      step.process(null, compileElement, null);
      expect(styleHost).toHaveText("/*css1*//*css2*/");
    }));
  }));
}
var FakeXHR = function FakeXHR() {
  $traceurRuntime.superConstructor($FakeXHR).call(this);
  this._responses = MapWrapper.create();
};
var $FakeXHR = FakeXHR;
($traceurRuntime.createClass)(FakeXHR, {
  get: function(url) {
    assert.argumentTypes(url, assert.type.string);
    var response = MapWrapper.get(this._responses, url);
    if (isBlank(response)) {
      return assert.returnType((PromiseWrapper.reject('xhr error')), assert.genericType(Promise, assert.type.string));
    }
    return assert.returnType((PromiseWrapper.resolve(response)), assert.genericType(Promise, assert.type.string));
  },
  reply: function(url, response) {
    assert.argumentTypes(url, assert.type.string, response, assert.type.string);
    MapWrapper.set(this._responses, url, response);
  }
}, {}, XHR);
Object.defineProperty(FakeXHR.prototype.get, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
Object.defineProperty(FakeXHR.prototype.reply, "parameters", {get: function() {
    return [[assert.type.string], [assert.type.string]];
  }});
var SomeComponent = function SomeComponent() {};
($traceurRuntime.createClass)(SomeComponent, {}, {});
var SomeOtherComponent = function SomeOtherComponent() {};
($traceurRuntime.createClass)(SomeOtherComponent, {}, {});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/test/core/compiler/shadow_dom_strategy_spec.map

//# sourceMappingURL=./shadow_dom_strategy_spec.map
 main();