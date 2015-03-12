var parse5Adapter = require('angular2/src/dom/parse5_adapter');
parse5Adapter.Parse5DomAdapter.makeCurrent();
"use strict";
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/test/core/compiler/style_inliner_spec";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_test_95_lib__,
    $__angular2_47_src_47_core_47_compiler_47_style_95_inliner__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_async__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr__,
    $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__,
    $__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__;
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
var StyleInliner = ($__angular2_47_src_47_core_47_compiler_47_style_95_inliner__ = require("angular2/src/core/compiler/style_inliner"), $__angular2_47_src_47_core_47_compiler_47_style_95_inliner__ && $__angular2_47_src_47_core_47_compiler_47_style_95_inliner__.__esModule && $__angular2_47_src_47_core_47_compiler_47_style_95_inliner__ || {default: $__angular2_47_src_47_core_47_compiler_47_style_95_inliner__}).StyleInliner;
var isBlank = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).isBlank;
var $__4 = ($__angular2_47_src_47_facade_47_async__ = require("angular2/src/facade/async"), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}),
    Promise = $__4.Promise,
    PromiseWrapper = $__4.PromiseWrapper;
var $__5 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    Map = $__5.Map,
    MapWrapper = $__5.MapWrapper;
var XHR = ($__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr__ = require("angular2/src/core/compiler/xhr/xhr"), $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr__ && $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr__.__esModule && $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr__ || {default: $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr__}).XHR;
var UrlResolver = ($__angular2_47_src_47_core_47_compiler_47_url_95_resolver__ = require("angular2/src/core/compiler/url_resolver"), $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__ && $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__.__esModule && $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__ || {default: $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__}).UrlResolver;
var StyleUrlResolver = ($__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__ = require("angular2/src/core/compiler/style_url_resolver"), $__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__ && $__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__.__esModule && $__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__ || {default: $__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__}).StyleUrlResolver;
function main() {
  describe('StyleInliner', (function() {
    var xhr,
        inliner;
    beforeEach((function() {
      xhr = new FakeXHR();
      var urlResolver = new UrlResolver();
      var styleUrlResolver = new StyleUrlResolver(urlResolver);
      inliner = new StyleInliner(xhr, styleUrlResolver, urlResolver);
    }));
    describe('loading', (function() {
      it('should return a string when there is no import statement', (function() {
        var css = '.main {}';
        var loadedCss = inliner.inlineImports(css, 'http://base');
        expect(loadedCss).not.toBePromise();
        expect(loadedCss).toEqual(css);
      }));
      it('should inline @import rules', (function(done) {
        xhr.reply('http://base/one.css', '.one {}');
        var css = '@import url("one.css");.main {}';
        var loadedCss = inliner.inlineImports(css, 'http://base');
        expect(loadedCss).toBePromise();
        PromiseWrapper.then(loadedCss, function(css) {
          expect(css).toEqual('.one {}\n.main {}');
          done();
        }, function(e) {
          throw 'fail;';
        });
      }));
      it('should support url([unquoted url]) in @import rules', (function(done) {
        xhr.reply('http://base/one.css', '.one {}');
        var css = '@import url(one.css);.main {}';
        var loadedCss = inliner.inlineImports(css, 'http://base');
        expect(loadedCss).toBePromise();
        PromiseWrapper.then(loadedCss, function(css) {
          expect(css).toEqual('.one {}\n.main {}');
          done();
        }, function(e) {
          throw 'fail;';
        });
      }));
      it('should handle @import error gracefuly', (function(done) {
        var css = '@import "one.css";.main {}';
        var loadedCss = inliner.inlineImports(css, 'http://base');
        expect(loadedCss).toBePromise();
        PromiseWrapper.then(loadedCss, function(css) {
          expect(css).toEqual('/* failed to import http://base/one.css */\n.main {}');
          done();
        }, function(e) {
          throw 'fail;';
        });
      }));
      it('should inline multiple @import rules', (function(done) {
        xhr.reply('http://base/one.css', '.one {}');
        xhr.reply('http://base/two.css', '.two {}');
        var css = '@import "one.css";@import "two.css";.main {}';
        var loadedCss = inliner.inlineImports(css, 'http://base');
        expect(loadedCss).toBePromise();
        PromiseWrapper.then(loadedCss, function(css) {
          expect(css).toEqual('.one {}\n.two {}\n.main {}');
          done();
        }, function(e) {
          throw 'fail;';
        });
      }));
      it('should inline nested @import rules', (function(done) {
        xhr.reply('http://base/one.css', '@import "two.css";.one {}');
        xhr.reply('http://base/two.css', '.two {}');
        var css = '@import "one.css";.main {}';
        var loadedCss = inliner.inlineImports(css, 'http://base/');
        expect(loadedCss).toBePromise();
        PromiseWrapper.then(loadedCss, function(css) {
          expect(css).toEqual('.two {}\n.one {}\n.main {}');
          done();
        }, function(e) {
          throw 'fail;';
        });
      }));
      it('should handle circular dependencies gracefuly', (function(done) {
        xhr.reply('http://base/one.css', '@import "two.css";.one {}');
        xhr.reply('http://base/two.css', '@import "one.css";.two {}');
        var css = '@import "one.css";.main {}';
        var loadedCss = inliner.inlineImports(css, 'http://base/');
        expect(loadedCss).toBePromise();
        PromiseWrapper.then(loadedCss, function(css) {
          expect(css).toEqual('.two {}\n.one {}\n.main {}');
          done();
        }, function(e) {
          throw 'fail;';
        });
      }));
      it('should handle invalid @import fracefuly', (function(done) {
        var css = '@import one.css;.main {}';
        var loadedCss = inliner.inlineImports(css, 'http://base/');
        expect(loadedCss).toBePromise();
        PromiseWrapper.then(loadedCss, function(css) {
          expect(css).toEqual('/* Invalid import rule: "@import one.css;" */.main {}');
          done();
        }, function(e) {
          throw 'fail;';
        });
      }));
    }));
    describe('media query', (function() {
      it('should wrap inlined content in media query', (function(done) {
        xhr.reply('http://base/one.css', '.one {}');
        var css = '@import "one.css" (min-width: 700px) and (orientation: landscape);';
        var loadedCss = inliner.inlineImports(css, 'http://base/');
        expect(loadedCss).toBePromise();
        PromiseWrapper.then(loadedCss, function(css) {
          expect(css).toEqual('@media (min-width: 700px) and (orientation: landscape) {\n.one {}\n}\n');
          done();
        }, function(e) {
          throw 'fail;';
        });
      }));
    }));
    describe('url rewritting', (function() {
      it('should rewrite url in inlined content', (function(done) {
        xhr.reply('http://base/one.css', '@import "./nested/two.css";.one {background-image: url("one.jpg");}');
        xhr.reply('http://base/nested/two.css', '.two {background-image: url("../img/two.jpg");}');
        var css = '@import "one.css";';
        var loadedCss = inliner.inlineImports(css, 'http://base/');
        expect(loadedCss).toBePromise();
        PromiseWrapper.then(loadedCss, function(css) {
          expect(css).toEqual(".two {background-image: url('http://base/img/two.jpg');}\n" + ".one {background-image: url('http://base/one.jpg');}\n");
          done();
        }, function(e) {
          throw 'fail;';
        });
      }));
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

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/test/core/compiler/style_inliner_spec.map

//# sourceMappingURL=./style_inliner_spec.map
 main();