var parse5Adapter = require('angular2/src/dom/parse5_adapter');
parse5Adapter.Parse5DomAdapter.makeCurrent();
"use strict";
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/test/core/compiler/template_loader_spec";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_test_95_lib__,
    $__angular2_47_src_47_dom_47_dom_95_adapter__,
    $__angular2_47_src_47_core_47_compiler_47_template_95_loader__,
    $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__,
    $__angular2_47_src_47_core_47_annotations_47_template__,
    $__angular2_47_src_47_facade_47_async__,
    $__angular2_47_src_47_mock_47_xhr_95_mock__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var $__1 = ($__angular2_47_test_95_lib__ = require("angular2/test_lib"), $__angular2_47_test_95_lib__ && $__angular2_47_test_95_lib__.__esModule && $__angular2_47_test_95_lib__ || {default: $__angular2_47_test_95_lib__}),
    describe = $__1.describe,
    it = $__1.it,
    expect = $__1.expect,
    beforeEach = $__1.beforeEach,
    ddescribe = $__1.ddescribe,
    iit = $__1.iit,
    xit = $__1.xit,
    el = $__1.el;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var TemplateLoader = ($__angular2_47_src_47_core_47_compiler_47_template_95_loader__ = require("angular2/src/core/compiler/template_loader"), $__angular2_47_src_47_core_47_compiler_47_template_95_loader__ && $__angular2_47_src_47_core_47_compiler_47_template_95_loader__.__esModule && $__angular2_47_src_47_core_47_compiler_47_template_95_loader__ || {default: $__angular2_47_src_47_core_47_compiler_47_template_95_loader__}).TemplateLoader;
var UrlResolver = ($__angular2_47_src_47_core_47_compiler_47_url_95_resolver__ = require("angular2/src/core/compiler/url_resolver"), $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__ && $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__.__esModule && $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__ || {default: $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__}).UrlResolver;
var Template = ($__angular2_47_src_47_core_47_annotations_47_template__ = require("angular2/src/core/annotations/template"), $__angular2_47_src_47_core_47_annotations_47_template__ && $__angular2_47_src_47_core_47_annotations_47_template__.__esModule && $__angular2_47_src_47_core_47_annotations_47_template__ || {default: $__angular2_47_src_47_core_47_annotations_47_template__}).Template;
var PromiseWrapper = ($__angular2_47_src_47_facade_47_async__ = require("angular2/src/facade/async"), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}).PromiseWrapper;
var XHRMock = ($__angular2_47_src_47_mock_47_xhr_95_mock__ = require("angular2/src/mock/xhr_mock"), $__angular2_47_src_47_mock_47_xhr_95_mock__ && $__angular2_47_src_47_mock_47_xhr_95_mock__.__esModule && $__angular2_47_src_47_mock_47_xhr_95_mock__ || {default: $__angular2_47_src_47_mock_47_xhr_95_mock__}).XHRMock;
function main() {
  describe('TemplateLoader', (function() {
    var loader,
        xhr;
    beforeEach((function() {
      xhr = new XHRMock();
      loader = new TemplateLoader(xhr, new FakeUrlResolver());
    }));
    it('should load inline templates synchronously', (function() {
      var template = new Template({inline: 'inline template'});
      expect(DOM.content(loader.load(template))).toHaveText('inline template');
    }));
    it('should load templates through XHR', (function(done) {
      xhr.expect('base/foo', 'xhr template');
      var template = new Template({url: '/foo'});
      loader.setBaseUrl(template, 'base');
      loader.load(template).then((function(el) {
        expect(DOM.content(el)).toHaveText('xhr template');
        done();
      }));
      xhr.flush();
    }));
    it('should cache template loaded through XHR', (function(done) {
      var firstEl;
      xhr.expect('base/foo', 'xhr template');
      var template = new Template({url: '/foo'});
      loader.setBaseUrl(template, 'base');
      loader.load(template).then((function(el) {
        firstEl = el;
        return loader.load(template);
      })).then((function(el) {
        expect(el).toBe(firstEl);
        expect(DOM.content(el)).toHaveText('xhr template');
        done();
      }));
      xhr.flush();
    }));
    it('should throw when no template is defined', (function() {
      var template = new Template({
        inline: null,
        url: null
      });
      expect((function() {
        return loader.load(template);
      })).toThrowError('Templates should have either their url or inline property set');
    }));
    it('should return a rejected Promise when xhr loading fails', (function(done) {
      xhr.expect('base/foo', null);
      var template = new Template({url: '/foo'});
      loader.setBaseUrl(template, 'base');
      PromiseWrapper.then(loader.load(template), function(_) {
        throw 'Unexpected response';
      }, function(error) {
        expect(error).toEqual('Failed to load base/foo');
        done();
      });
      xhr.flush();
    }));
  }));
}
var SomeComponent = function SomeComponent() {};
($traceurRuntime.createClass)(SomeComponent, {}, {});
var FakeUrlResolver = function FakeUrlResolver() {
  $traceurRuntime.superConstructor($FakeUrlResolver).call(this);
};
var $FakeUrlResolver = FakeUrlResolver;
($traceurRuntime.createClass)(FakeUrlResolver, {resolve: function(baseUrl, url) {
    assert.argumentTypes(baseUrl, assert.type.string, url, assert.type.string);
    return assert.returnType((baseUrl + url), assert.type.string);
  }}, {}, UrlResolver);
Object.defineProperty(FakeUrlResolver.prototype.resolve, "parameters", {get: function() {
    return [[assert.type.string], [assert.type.string]];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/test/core/compiler/template_loader_spec.map

//# sourceMappingURL=./template_loader_spec.map
 main();