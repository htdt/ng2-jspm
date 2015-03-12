import {assert} from "rtts_assert/rtts_assert";
import {isPresent,
  isBlank,
  RegExpWrapper,
  BaseException} from 'angular2/src/facade/lang';
import {DOM} from 'angular2/src/dom/dom_adapter';
export class UrlResolver {
  constructor() {
    if (isBlank(UrlResolver.a)) {
      UrlResolver.a = DOM.createElement('a');
    }
  }
  resolve(baseUrl, url) {
    assert.argumentTypes(baseUrl, assert.type.string, url, assert.type.string);
    if (isBlank(baseUrl)) {
      DOM.resolveAndSetHref(UrlResolver.a, url, null);
      return assert.returnType((DOM.getHref(UrlResolver.a)), assert.type.string);
    }
    if (isBlank(url) || url == '')
      return assert.returnType((baseUrl), assert.type.string);
    if (url[0] == '/') {
      throw new BaseException(`Could not resolve the url ${url} from ${baseUrl}`);
    }
    var m = RegExpWrapper.firstMatch(_schemeRe, url);
    if (isPresent(m[1])) {
      return assert.returnType((url), assert.type.string);
    }
    DOM.resolveAndSetHref(UrlResolver.a, baseUrl, url);
    return assert.returnType((DOM.getHref(UrlResolver.a)), assert.type.string);
  }
}
Object.defineProperty(UrlResolver.prototype.resolve, "parameters", {get: function() {
    return [[assert.type.string], [assert.type.string]];
  }});
var _schemeRe = RegExpWrapper.create('^([^:/?#]+:)?');

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/core/compiler/url_resolver.map

//# sourceMappingURL=./url_resolver.map