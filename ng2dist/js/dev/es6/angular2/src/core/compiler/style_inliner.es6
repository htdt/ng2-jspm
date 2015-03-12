import {assert} from "rtts_assert/rtts_assert";
import {XHR} from 'angular2/src/core/compiler/xhr/xhr';
import {StyleUrlResolver} from 'angular2/src/core/compiler/style_url_resolver';
import {UrlResolver} from 'angular2/src/core/compiler/url_resolver';
import {ListWrapper} from 'angular2/src/facade/collection';
import {isBlank,
  isPresent,
  RegExp,
  RegExpWrapper,
  StringWrapper,
  normalizeBlank} from 'angular2/src/facade/lang';
import {Promise,
  PromiseWrapper} from 'angular2/src/facade/async';
export class StyleInliner {
  constructor(xhr, styleUrlResolver, urlResolver) {
    assert.argumentTypes(xhr, XHR, styleUrlResolver, StyleUrlResolver, urlResolver, UrlResolver);
    this._xhr = xhr;
    this._urlResolver = urlResolver;
    this._styleUrlResolver = styleUrlResolver;
  }
  inlineImports(cssText, baseUrl) {
    assert.argumentTypes(cssText, assert.type.string, baseUrl, assert.type.string);
    return this._inlineImports(cssText, baseUrl, []);
  }
  _inlineImports(cssText, baseUrl, inlinedUrls) {
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
      var promise;
      if (isBlank(url)) {
        promise = PromiseWrapper.resolve(`/* Invalid import rule: "@import ${rule};" */`);
      } else if (ListWrapper.contains(inlinedUrls, url)) {
        promise = PromiseWrapper.resolve(prefix);
      } else {
        ListWrapper.push(inlinedUrls, url);
        promise = PromiseWrapper.then(this._xhr.get(url), (css) => {
          css = this._inlineImports(css, url, inlinedUrls);
          if (PromiseWrapper.isPromise(css)) {
            return css.then((css) => {
              return prefix + this._transformImportedCss(css, mediaQuery, url) + '\n';
            });
          } else {
            return prefix + this._transformImportedCss(css, mediaQuery, url) + '\n';
          }
        }, (error) => `/* failed to import ${url} */\n`);
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
  }
  _transformImportedCss(css, mediaQuery, url) {
    assert.argumentTypes(css, assert.type.string, mediaQuery, assert.type.string, url, assert.type.string);
    css = this._styleUrlResolver.resolveUrls(css, url);
    return assert.returnType((_wrapInMediaRule(css, mediaQuery)), assert.type.string);
  }
}
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
  return assert.returnType(((isBlank(query)) ? css : `@media ${query} {\n${css}\n}`), assert.type.string);
}
Object.defineProperty(_wrapInMediaRule, "parameters", {get: function() {
    return [[assert.type.string], [assert.type.string]];
  }});
var _importRe = RegExpWrapper.create('@import\\s+([^;]+);');
var _urlRe = RegExpWrapper.create('url\\(\\s*?[\'"]?([^\'")]+)[\'"]?|' + '[\'"]([^\'")]+)[\'"]');
var _mediaQueryRe = RegExpWrapper.create('[\'"][^\'"]+[\'"]\\s*\\)?\\s*(.*)');

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/core/compiler/style_inliner.map

//# sourceMappingURL=./style_inliner.map