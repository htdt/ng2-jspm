"use strict";
Object.defineProperties(module.exports, {
  StyleInliner: {get: function() {
      return StyleInliner;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/src/core/compiler/style_inliner";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr__,
    $__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__,
    $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_async__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var XHR = ($__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr__ = require("angular2/src/core/compiler/xhr/xhr"), $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr__ && $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr__.__esModule && $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr__ || {default: $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr__}).XHR;
var StyleUrlResolver = ($__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__ = require("angular2/src/core/compiler/style_url_resolver"), $__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__ && $__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__.__esModule && $__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__ || {default: $__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__}).StyleUrlResolver;
var UrlResolver = ($__angular2_47_src_47_core_47_compiler_47_url_95_resolver__ = require("angular2/src/core/compiler/url_resolver"), $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__ && $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__.__esModule && $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__ || {default: $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__}).UrlResolver;
var ListWrapper = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}).ListWrapper;
var $__5 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    isBlank = $__5.isBlank,
    isPresent = $__5.isPresent,
    RegExp = $__5.RegExp,
    RegExpWrapper = $__5.RegExpWrapper,
    StringWrapper = $__5.StringWrapper,
    normalizeBlank = $__5.normalizeBlank;
var $__6 = ($__angular2_47_src_47_facade_47_async__ = require("angular2/src/facade/async"), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}),
    Promise = $__6.Promise,
    PromiseWrapper = $__6.PromiseWrapper;
var StyleInliner = function StyleInliner(xhr, styleUrlResolver, urlResolver) {
  assert.argumentTypes(xhr, XHR, styleUrlResolver, StyleUrlResolver, urlResolver, UrlResolver);
  this._xhr = xhr;
  this._urlResolver = urlResolver;
  this._styleUrlResolver = styleUrlResolver;
};
($traceurRuntime.createClass)(StyleInliner, {
  inlineImports: function(cssText, baseUrl) {
    assert.argumentTypes(cssText, assert.type.string, baseUrl, assert.type.string);
    return this._inlineImports(cssText, baseUrl, []);
  },
  _inlineImports: function(cssText, baseUrl, inlinedUrls) {
    var $__7 = this;
    var partIndex = 0;
    var parts = StringWrapper.split(cssText, _importRe);
    if (parts.length === 1) {
      return cssText;
    }
    var promises = [];
    while (partIndex < parts.length - 1) {
      var prefix = parts[partIndex];
      var rule = parts[partIndex + 1];
      var url = _extractUrl(rule);
      if (isPresent(url)) {
        url = this._urlResolver.resolve(baseUrl, url);
      }
      var mediaQuery = _extractMediaQuery(rule);
      var promise = void 0;
      if (isBlank(url)) {
        promise = PromiseWrapper.resolve(("/* Invalid import rule: \"@import " + rule + ";\" */"));
      } else if (ListWrapper.contains(inlinedUrls, url)) {
        promise = PromiseWrapper.resolve(prefix);
      } else {
        ListWrapper.push(inlinedUrls, url);
        promise = PromiseWrapper.then(this._xhr.get(url), (function(css) {
          css = $__7._inlineImports(css, url, inlinedUrls);
          if (PromiseWrapper.isPromise(css)) {
            return css.then((function(css) {
              return prefix + $__7._transformImportedCss(css, mediaQuery, url) + '\n';
            }));
          } else {
            return prefix + $__7._transformImportedCss(css, mediaQuery, url) + '\n';
          }
        }), (function(error) {
          return ("/* failed to import " + url + " */\n");
        }));
      }
      ListWrapper.push(promises, promise);
      partIndex += 2;
    }
    return PromiseWrapper.all(promises).then(function(cssParts) {
      var cssText = cssParts.join('');
      if (partIndex < parts.length) {
        cssText += parts[partIndex];
      }
      return cssText;
    });
  },
  _transformImportedCss: function(css, mediaQuery, url) {
    assert.argumentTypes(css, assert.type.string, mediaQuery, assert.type.string, url, assert.type.string);
    css = this._styleUrlResolver.resolveUrls(css, url);
    return assert.returnType((_wrapInMediaRule(css, mediaQuery)), assert.type.string);
  }
}, {});
Object.defineProperty(StyleInliner, "parameters", {get: function() {
    return [[XHR], [StyleUrlResolver], [UrlResolver]];
  }});
Object.defineProperty(StyleInliner.prototype.inlineImports, "parameters", {get: function() {
    return [[assert.type.string], [assert.type.string]];
  }});
Object.defineProperty(StyleInliner.prototype._inlineImports, "parameters", {get: function() {
    return [[assert.type.string], [assert.type.string], [assert.genericType(List, assert.type.string)]];
  }});
Object.defineProperty(StyleInliner.prototype._transformImportedCss, "parameters", {get: function() {
    return [[assert.type.string], [assert.type.string], [assert.type.string]];
  }});
function _extractUrl(importRule) {
  assert.argumentTypes(importRule, assert.type.string);
  var match = RegExpWrapper.firstMatch(_urlRe, importRule);
  if (isBlank(match))
    return assert.returnType((null), assert.type.string);
  return assert.returnType((isPresent(match[1]) ? match[1] : match[2]), assert.type.string);
}
Object.defineProperty(_extractUrl, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
function _extractMediaQuery(importRule) {
  assert.argumentTypes(importRule, assert.type.string);
  var match = RegExpWrapper.firstMatch(_mediaQueryRe, importRule);
  if (isBlank(match))
    return assert.returnType((null), assert.type.string);
  var mediaQuery = match[1].trim();
  return assert.returnType(((mediaQuery.length > 0) ? mediaQuery : null), assert.type.string);
}
Object.defineProperty(_extractMediaQuery, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
function _wrapInMediaRule(css, query) {
  assert.argumentTypes(css, assert.type.string, query, assert.type.string);
  return assert.returnType(((isBlank(query)) ? css : ("@media " + query + " {\n" + css + "\n}")), assert.type.string);
}
Object.defineProperty(_wrapInMediaRule, "parameters", {get: function() {
    return [[assert.type.string], [assert.type.string]];
  }});
var _importRe = RegExpWrapper.create('@import\\s+([^;]+);');
var _urlRe = RegExpWrapper.create('url\\(\\s*?[\'"]?([^\'")]+)[\'"]?|' + '[\'"]([^\'")]+)[\'"]');
var _mediaQueryRe = RegExpWrapper.create('[\'"][^\'"]+[\'"]\\s*\\)?\\s*(.*)');

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/core/compiler/style_inliner.map

//# sourceMappingURL=./style_inliner.map