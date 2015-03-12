"use strict";
Object.defineProperties(module.exports, {
  UrlResolver: {get: function() {
      return UrlResolver;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/src/core/compiler/url_resolver";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_dom_47_dom_95_adapter__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var $__1 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    isPresent = $__1.isPresent,
    isBlank = $__1.isBlank,
    RegExpWrapper = $__1.RegExpWrapper,
    BaseException = $__1.BaseException;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var UrlResolver = function UrlResolver() {
  if (isBlank($UrlResolver.a)) {
    $UrlResolver.a = DOM.createElement('a');
  }
};
var $UrlResolver = UrlResolver;
($traceurRuntime.createClass)(UrlResolver, {resolve: function(baseUrl, url) {
    assert.argumentTypes(baseUrl, assert.type.string, url, assert.type.string);
    if (isBlank(baseUrl)) {
      DOM.resolveAndSetHref($UrlResolver.a, url, null);
      return assert.returnType((DOM.getHref($UrlResolver.a)), assert.type.string);
    }
    if (isBlank(url) || url == '')
      return assert.returnType((baseUrl), assert.type.string);
    if (url[0] == '/') {
      throw new BaseException(("Could not resolve the url " + url + " from " + baseUrl));
    }
    var m = RegExpWrapper.firstMatch(_schemeRe, url);
    if (isPresent(m[1])) {
      return assert.returnType((url), assert.type.string);
    }
    DOM.resolveAndSetHref($UrlResolver.a, baseUrl, url);
    return assert.returnType((DOM.getHref($UrlResolver.a)), assert.type.string);
  }}, {});
Object.defineProperty(UrlResolver.prototype.resolve, "parameters", {get: function() {
    return [[assert.type.string], [assert.type.string]];
  }});
var _schemeRe = RegExpWrapper.create('^([^:/?#]+:)?');

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/core/compiler/url_resolver.map

//# sourceMappingURL=./url_resolver.map