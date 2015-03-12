"use strict";
Object.defineProperties(module.exports, {
  StyleUrlResolver: {get: function() {
      return StyleUrlResolver;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/src/core/compiler/style_url_resolver";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var $__1 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    RegExp = $__1.RegExp,
    RegExpWrapper = $__1.RegExpWrapper,
    StringWrapper = $__1.StringWrapper;
var UrlResolver = ($__angular2_47_src_47_core_47_compiler_47_url_95_resolver__ = require("./url_resolver"), $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__ && $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__.__esModule && $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__ || {default: $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__}).UrlResolver;
var StyleUrlResolver = function StyleUrlResolver(resolver) {
  assert.argumentTypes(resolver, UrlResolver);
  this._resolver = resolver;
};
($traceurRuntime.createClass)(StyleUrlResolver, {
  resolveUrls: function(cssText, baseUrl) {
    assert.argumentTypes(cssText, assert.type.string, baseUrl, assert.type.string);
    cssText = this._replaceUrls(cssText, _cssUrlRe, baseUrl);
    cssText = this._replaceUrls(cssText, _cssImportRe, baseUrl);
    return cssText;
  },
  _replaceUrls: function(cssText, re, baseUrl) {
    var $__3 = this;
    assert.argumentTypes(cssText, assert.type.string, re, RegExp, baseUrl, assert.type.string);
    return StringWrapper.replaceAllMapped(cssText, re, (function(m) {
      var pre = m[1];
      var url = StringWrapper.replaceAll(m[2], _quoteRe, '');
      var post = m[3];
      var resolvedUrl = $__3._resolver.resolve(baseUrl, url);
      return pre + "'" + resolvedUrl + "'" + post;
    }));
  }
}, {});
Object.defineProperty(StyleUrlResolver, "parameters", {get: function() {
    return [[UrlResolver]];
  }});
Object.defineProperty(StyleUrlResolver.prototype.resolveUrls, "parameters", {get: function() {
    return [[assert.type.string], [assert.type.string]];
  }});
Object.defineProperty(StyleUrlResolver.prototype._replaceUrls, "parameters", {get: function() {
    return [[assert.type.string], [RegExp], [assert.type.string]];
  }});
var _cssUrlRe = RegExpWrapper.create('(url\\()([^)]*)(\\))');
var _cssImportRe = RegExpWrapper.create('(@import[\\s]+(?!url\\())[\'"]([^\'"]*)[\'"](.*;)');
var _quoteRe = RegExpWrapper.create('[\'"]');

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/core/compiler/style_url_resolver.map

//# sourceMappingURL=./style_url_resolver.map