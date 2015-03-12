"use strict";
Object.defineProperties(module.exports, {
  CompilerCache: {get: function() {
      return CompilerCache;
    }},
  Compiler: {get: function() {
      return Compiler;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/src/core/compiler/compiler";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_async__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_change_95_detection__,
    $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__,
    $__angular2_47_src_47_core_47_compiler_47_view__,
    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_pipeline__,
    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__,
    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_default_95_steps__,
    $__angular2_47_src_47_core_47_compiler_47_template_95_loader__,
    $__angular2_47_src_47_core_47_compiler_47_template_95_resolver__,
    $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__,
    $__angular2_47_src_47_core_47_annotations_47_template__,
    $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__,
    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__,
    $__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__,
    $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__,
    $__angular2_47_src_47_core_47_compiler_47_css_95_processor__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var $__1 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    Type = $__1.Type,
    isBlank = $__1.isBlank,
    isPresent = $__1.isPresent,
    BaseException = $__1.BaseException,
    normalizeBlank = $__1.normalizeBlank,
    stringify = $__1.stringify;
var $__2 = ($__angular2_47_src_47_facade_47_async__ = require("angular2/src/facade/async"), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}),
    Promise = $__2.Promise,
    PromiseWrapper = $__2.PromiseWrapper;
var $__3 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    List = $__3.List,
    ListWrapper = $__3.ListWrapper,
    Map = $__3.Map,
    MapWrapper = $__3.MapWrapper;
var $__4 = ($__angular2_47_change_95_detection__ = require("angular2/change_detection"), $__angular2_47_change_95_detection__ && $__angular2_47_change_95_detection__.__esModule && $__angular2_47_change_95_detection__ || {default: $__angular2_47_change_95_detection__}),
    ChangeDetection = $__4.ChangeDetection,
    Parser = $__4.Parser;
var DirectiveMetadataReader = ($__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__ = require("./directive_metadata_reader"), $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__ && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__.__esModule && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__ || {default: $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__}).DirectiveMetadataReader;
var ProtoView = ($__angular2_47_src_47_core_47_compiler_47_view__ = require("./view"), $__angular2_47_src_47_core_47_compiler_47_view__ && $__angular2_47_src_47_core_47_compiler_47_view__.__esModule && $__angular2_47_src_47_core_47_compiler_47_view__ || {default: $__angular2_47_src_47_core_47_compiler_47_view__}).ProtoView;
var CompilePipeline = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_pipeline__ = require("./pipeline/compile_pipeline"), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_pipeline__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_pipeline__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_pipeline__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_pipeline__}).CompilePipeline;
var CompileElement = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ = require("./pipeline/compile_element"), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__}).CompileElement;
var createDefaultSteps = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_default_95_steps__ = require("./pipeline/default_steps"), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_default_95_steps__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_default_95_steps__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_default_95_steps__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_default_95_steps__}).createDefaultSteps;
var TemplateLoader = ($__angular2_47_src_47_core_47_compiler_47_template_95_loader__ = require("./template_loader"), $__angular2_47_src_47_core_47_compiler_47_template_95_loader__ && $__angular2_47_src_47_core_47_compiler_47_template_95_loader__.__esModule && $__angular2_47_src_47_core_47_compiler_47_template_95_loader__ || {default: $__angular2_47_src_47_core_47_compiler_47_template_95_loader__}).TemplateLoader;
var TemplateResolver = ($__angular2_47_src_47_core_47_compiler_47_template_95_resolver__ = require("./template_resolver"), $__angular2_47_src_47_core_47_compiler_47_template_95_resolver__ && $__angular2_47_src_47_core_47_compiler_47_template_95_resolver__.__esModule && $__angular2_47_src_47_core_47_compiler_47_template_95_resolver__ || {default: $__angular2_47_src_47_core_47_compiler_47_template_95_resolver__}).TemplateResolver;
var DirectiveMetadata = ($__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__ = require("./directive_metadata"), $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__ && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__.__esModule && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__ || {default: $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__}).DirectiveMetadata;
var Template = ($__angular2_47_src_47_core_47_annotations_47_template__ = require("../annotations/template"), $__angular2_47_src_47_core_47_annotations_47_template__ && $__angular2_47_src_47_core_47_annotations_47_template__.__esModule && $__angular2_47_src_47_core_47_annotations_47_template__ || {default: $__angular2_47_src_47_core_47_annotations_47_template__}).Template;
var ShadowDomStrategy = ($__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__ = require("./shadow_dom_strategy"), $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__ && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__.__esModule && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__ || {default: $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__}).ShadowDomStrategy;
var CompileStep = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__ = require("./pipeline/compile_step"), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__}).CompileStep;
var ComponentUrlMapper = ($__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__ = require("./component_url_mapper"), $__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__ && $__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__.__esModule && $__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__ || {default: $__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__}).ComponentUrlMapper;
var UrlResolver = ($__angular2_47_src_47_core_47_compiler_47_url_95_resolver__ = require("./url_resolver"), $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__ && $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__.__esModule && $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__ || {default: $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__}).UrlResolver;
var CssProcessor = ($__angular2_47_src_47_core_47_compiler_47_css_95_processor__ = require("./css_processor"), $__angular2_47_src_47_core_47_compiler_47_css_95_processor__ && $__angular2_47_src_47_core_47_compiler_47_css_95_processor__.__esModule && $__angular2_47_src_47_core_47_compiler_47_css_95_processor__ || {default: $__angular2_47_src_47_core_47_compiler_47_css_95_processor__}).CssProcessor;
var CompilerCache = function CompilerCache() {
  this._cache = MapWrapper.create();
};
($traceurRuntime.createClass)(CompilerCache, {
  set: function(component, protoView) {
    assert.argumentTypes(component, Type, protoView, ProtoView);
    MapWrapper.set(this._cache, component, protoView);
  },
  get: function(component) {
    assert.argumentTypes(component, Type);
    var result = MapWrapper.get(this._cache, component);
    return assert.returnType((normalizeBlank(result)), ProtoView);
  },
  clear: function() {
    MapWrapper.clear(this._cache);
  }
}, {});
Object.defineProperty(CompilerCache.prototype.set, "parameters", {get: function() {
    return [[Type], [ProtoView]];
  }});
Object.defineProperty(CompilerCache.prototype.get, "parameters", {get: function() {
    return [[Type]];
  }});
var Compiler = function Compiler(changeDetection, templateLoader, reader, parser, cache, shadowDomStrategy, templateResolver, componentUrlMapper, urlResolver, cssProcessor) {
  assert.argumentTypes(changeDetection, ChangeDetection, templateLoader, TemplateLoader, reader, DirectiveMetadataReader, parser, Parser, cache, CompilerCache, shadowDomStrategy, ShadowDomStrategy, templateResolver, TemplateResolver, componentUrlMapper, ComponentUrlMapper, urlResolver, UrlResolver, cssProcessor, CssProcessor);
  this._changeDetection = changeDetection;
  this._reader = reader;
  this._parser = parser;
  this._compilerCache = cache;
  this._templateLoader = templateLoader;
  this._compiling = MapWrapper.create();
  this._shadowDomStrategy = shadowDomStrategy;
  this._shadowDomDirectives = [];
  var types = shadowDomStrategy.polyfillDirectives();
  for (var i = 0; i < types.length; i++) {
    ListWrapper.push(this._shadowDomDirectives, reader.read(types[i]));
  }
  this._templateResolver = templateResolver;
  this._componentUrlMapper = componentUrlMapper;
  this._urlResolver = urlResolver;
  this._appUrl = urlResolver.resolve(null, './');
  this._cssProcessor = cssProcessor;
};
($traceurRuntime.createClass)(Compiler, {
  createSteps: function(component, template) {
    var $__19 = this;
    var dirMetadata = [];
    var tplMetadata = ListWrapper.map(this._flattenDirectives(template), (function(d) {
      return $__19._reader.read(d);
    }));
    dirMetadata = ListWrapper.concat(dirMetadata, tplMetadata);
    dirMetadata = ListWrapper.concat(dirMetadata, this._shadowDomDirectives);
    var cmpMetadata = this._reader.read(component);
    var templateUrl = this._templateLoader.getTemplateUrl(template);
    return assert.returnType((createDefaultSteps(this._changeDetection, this._parser, cmpMetadata, dirMetadata, this._shadowDomStrategy, templateUrl, this._cssProcessor)), assert.genericType(List, CompileStep));
  },
  compile: function(component) {
    assert.argumentTypes(component, Type);
    var protoView = this._compile(component);
    return assert.returnType((PromiseWrapper.isPromise(protoView) ? protoView : PromiseWrapper.resolve(protoView)), assert.genericType(Promise, ProtoView));
  },
  _compile: function(component) {
    var $__19 = this;
    var protoView = this._compilerCache.get(component);
    if (isPresent(protoView)) {
      return protoView;
    }
    var pvPromise = MapWrapper.get(this._compiling, component);
    if (isPresent(pvPromise)) {
      return pvPromise;
    }
    var template = this._templateResolver.resolve(component);
    var componentUrl = this._componentUrlMapper.getUrl(component);
    var baseUrl = this._urlResolver.resolve(this._appUrl, componentUrl);
    this._templateLoader.setBaseUrl(template, baseUrl);
    var tplElement = this._templateLoader.load(template);
    if (PromiseWrapper.isPromise(tplElement)) {
      pvPromise = PromiseWrapper.then(tplElement, (function(el) {
        return $__19._compileTemplate(template, el, component);
      }), (function(_) {
        throw new BaseException(("Failed to load the template for " + stringify(component)));
      }));
      MapWrapper.set(this._compiling, component, pvPromise);
      return pvPromise;
    }
    return this._compileTemplate(template, tplElement, component);
  },
  _compileTemplate: function(template, tplElement, component) {
    var pipeline = new CompilePipeline(this.createSteps(component, template));
    var compileElements;
    try {
      compileElements = pipeline.process(tplElement, stringify(component));
    } catch (ex) {
      return PromiseWrapper.reject(ex);
    }
    var protoView = compileElements[0].inheritedProtoView;
    this._compilerCache.set(component, protoView);
    MapWrapper.delete(this._compiling, component);
    var nestedPVPromises = [];
    for (var i = 0; i < compileElements.length; i++) {
      var ce = compileElements[i];
      if (isPresent(ce.componentDirective)) {
        this._compileNestedProtoView(ce, nestedPVPromises);
      }
    }
    if (protoView.stylePromises.length > 0) {
      var syncProtoView = protoView;
      protoView = PromiseWrapper.all(syncProtoView.stylePromises).then((function(_) {
        return syncProtoView;
      }));
    }
    if (nestedPVPromises.length > 0) {
      return PromiseWrapper.then(PromiseWrapper.all(nestedPVPromises), (function(_) {
        return protoView;
      }), (function(e) {
        throw new BaseException((e.message + " -> Failed to compile " + stringify(component)));
      }));
    }
    return protoView;
  },
  _compileNestedProtoView: function(ce, promises) {
    assert.argumentTypes(ce, CompileElement, promises, assert.genericType(List, Promise));
    var protoView = this._compile(ce.componentDirective.type);
    if (PromiseWrapper.isPromise(protoView)) {
      ListWrapper.push(promises, protoView.then(function(pv) {
        ce.inheritedElementBinder.nestedProtoView = pv;
      }));
    } else {
      ce.inheritedElementBinder.nestedProtoView = protoView;
    }
  },
  _flattenDirectives: function(template) {
    assert.argumentTypes(template, Template);
    if (isBlank(template.directives))
      return assert.returnType(([]), assert.genericType(List, Type));
    var directives = [];
    this._flattenList(template.directives, directives);
    return assert.returnType((directives), assert.genericType(List, Type));
  },
  _flattenList: function(tree, out) {
    assert.argumentTypes(tree, assert.genericType(List, assert.type.any), out, assert.genericType(List, Type));
    for (var i = 0; i < tree.length; i++) {
      var item = tree[i];
      if (ListWrapper.isList(item)) {
        this._flattenList(item, out);
      } else {
        ListWrapper.push(out, item);
      }
    }
  }
}, {});
Object.defineProperty(Compiler, "parameters", {get: function() {
    return [[ChangeDetection], [TemplateLoader], [DirectiveMetadataReader], [Parser], [CompilerCache], [ShadowDomStrategy], [TemplateResolver], [ComponentUrlMapper], [UrlResolver], [CssProcessor]];
  }});
Object.defineProperty(Compiler.prototype.createSteps, "parameters", {get: function() {
    return [[Type], [Template]];
  }});
Object.defineProperty(Compiler.prototype.compile, "parameters", {get: function() {
    return [[Type]];
  }});
Object.defineProperty(Compiler.prototype._compile, "parameters", {get: function() {
    return [[Type]];
  }});
Object.defineProperty(Compiler.prototype._compileTemplate, "parameters", {get: function() {
    return [[Template], [], [Type]];
  }});
Object.defineProperty(Compiler.prototype._compileNestedProtoView, "parameters", {get: function() {
    return [[CompileElement], [assert.genericType(List, Promise)]];
  }});
Object.defineProperty(Compiler.prototype._flattenDirectives, "parameters", {get: function() {
    return [[Template]];
  }});
Object.defineProperty(Compiler.prototype._flattenList, "parameters", {get: function() {
    return [[assert.genericType(List, assert.type.any)], [assert.genericType(List, Type)]];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/core/compiler/compiler.map

//# sourceMappingURL=./compiler.map