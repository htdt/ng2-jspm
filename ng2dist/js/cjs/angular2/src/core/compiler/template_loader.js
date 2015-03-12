"use strict";
Object.defineProperties(module.exports, {
  TemplateLoader: {get: function() {
      return TemplateLoader;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/src/core/compiler/template_loader";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_dom_47_dom_95_adapter__,
    $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr__,
    $__angular2_47_src_47_core_47_annotations_47_template__,
    $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var $__1 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    isBlank = $__1.isBlank,
    isPresent = $__1.isPresent,
    BaseException = $__1.BaseException,
    stringify = $__1.stringify;
var $__2 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    Map = $__2.Map,
    MapWrapper = $__2.MapWrapper,
    StringMapWrapper = $__2.StringMapWrapper,
    StringMap = $__2.StringMap;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var XHR = ($__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr__ = require("./xhr/xhr"), $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr__ && $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr__.__esModule && $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr__ || {default: $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr__}).XHR;
var Template = ($__angular2_47_src_47_core_47_annotations_47_template__ = require("angular2/src/core/annotations/template"), $__angular2_47_src_47_core_47_annotations_47_template__ && $__angular2_47_src_47_core_47_annotations_47_template__.__esModule && $__angular2_47_src_47_core_47_annotations_47_template__ || {default: $__angular2_47_src_47_core_47_annotations_47_template__}).Template;
var UrlResolver = ($__angular2_47_src_47_core_47_compiler_47_url_95_resolver__ = require("./url_resolver"), $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__ && $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__.__esModule && $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__ || {default: $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__}).UrlResolver;
var TemplateLoader = function TemplateLoader(xhr, urlResolver) {
  assert.argumentTypes(xhr, XHR, urlResolver, UrlResolver);
  this._xhr = xhr;
  this._urlResolver = urlResolver;
  this._htmlCache = StringMapWrapper.create();
  this._baseUrls = MapWrapper.create();
  this._urlCache = MapWrapper.create();
};
($traceurRuntime.createClass)(TemplateLoader, {
  load: function(template) {
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
  },
  setBaseUrl: function(template, baseUrl) {
    assert.argumentTypes(template, Template, baseUrl, assert.type.string);
    MapWrapper.set(this._baseUrls, template, baseUrl);
    MapWrapper.delete(this._urlCache, template);
  },
  getTemplateUrl: function(template) {
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
}, {});
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