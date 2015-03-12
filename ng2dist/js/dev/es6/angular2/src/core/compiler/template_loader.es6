import {assert} from "rtts_assert/rtts_assert";
import {isBlank,
  isPresent,
  BaseException,
  stringify} from 'angular2/src/facade/lang';
import {Map,
  MapWrapper,
  StringMapWrapper,
  StringMap} from 'angular2/src/facade/collection';
import {DOM} from 'angular2/src/dom/dom_adapter';
import {XHR} from './xhr/xhr';
import {Template} from 'angular2/src/core/annotations/template';
import {UrlResolver} from './url_resolver';
export class TemplateLoader {
  constructor(xhr, urlResolver) {
    assert.argumentTypes(xhr, XHR, urlResolver, UrlResolver);
    this._xhr = xhr;
    this._urlResolver = urlResolver;
    this._htmlCache = StringMapWrapper.create();
    this._baseUrls = MapWrapper.create();
    this._urlCache = MapWrapper.create();
  }
  load(template) {
    assert.argumentTypes(template, Template);
    if (isPresent(template.inline)) {
      return DOM.createTemplate(template.inline);
    }
    if (isPresent(template.url)) {
      var url = this.getTemplateUrl(template);
      var promise = StringMapWrapper.get(this._htmlCache, url);
      if (isBlank(promise)) {
        promise = this._xhr.get(url).then(function(html) {
          var template = DOM.createTemplate(html);
          return template;
        });
        StringMapWrapper.set(this._htmlCache, url, promise);
      }
      return promise;
    }
    throw new BaseException('Templates should have either their url or inline property set');
  }
  setBaseUrl(template, baseUrl) {
    assert.argumentTypes(template, Template, baseUrl, assert.type.string);
    MapWrapper.set(this._baseUrls, template, baseUrl);
    MapWrapper.delete(this._urlCache, template);
  }
  getTemplateUrl(template) {
    assert.argumentTypes(template, Template);
    if (!MapWrapper.contains(this._urlCache, template)) {
      var baseUrl = MapWrapper.get(this._baseUrls, template);
      if (isBlank(baseUrl)) {
        throw new BaseException('The template base URL is not set');
      }
      var templateUrl;
      if (isPresent(template.url)) {
        templateUrl = this._urlResolver.resolve(baseUrl, template.url);
      } else {
        templateUrl = baseUrl;
      }
      MapWrapper.set(this._urlCache, template, templateUrl);
    }
    return MapWrapper.get(this._urlCache, template);
  }
}
Object.defineProperty(TemplateLoader, "parameters", {get: function() {
    return [[XHR], [UrlResolver]];
  }});
Object.defineProperty(TemplateLoader.prototype.load, "parameters", {get: function() {
    return [[Template]];
  }});
Object.defineProperty(TemplateLoader.prototype.setBaseUrl, "parameters", {get: function() {
    return [[Template], [assert.type.string]];
  }});
Object.defineProperty(TemplateLoader.prototype.getTemplateUrl, "parameters", {get: function() {
    return [[Template]];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/core/compiler/template_loader.map

//# sourceMappingURL=./template_loader.map