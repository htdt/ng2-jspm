import {Type,
  isBlank,
  isPresent,
  BaseException,
  normalizeBlank,
  stringify} from 'angular2/src/facade/lang';
import {Promise,
  PromiseWrapper} from 'angular2/src/facade/async';
import {List,
  ListWrapper,
  Map,
  MapWrapper} from 'angular2/src/facade/collection';
import {ChangeDetection,
  Parser} from 'angular2/change_detection';
import {DirectiveMetadataReader} from './directive_metadata_reader';
import {ProtoView} from './view';
import {CompilePipeline} from './pipeline/compile_pipeline';
import {CompileElement} from './pipeline/compile_element';
import {createDefaultSteps} from './pipeline/default_steps';
import {TemplateLoader} from './template_loader';
import {TemplateResolver} from './template_resolver';
import {DirectiveMetadata} from './directive_metadata';
import {Template} from '../annotations/template';
import {ShadowDomStrategy} from './shadow_dom_strategy';
import {CompileStep} from './pipeline/compile_step';
import {ComponentUrlMapper} from './component_url_mapper';
import {UrlResolver} from './url_resolver';
import {CssProcessor} from './css_processor';
export class CompilerCache {
  constructor() {
    this._cache = MapWrapper.create();
  }
  set(component, protoView) {
    MapWrapper.set(this._cache, component, protoView);
  }
  get(component) {
    var result = MapWrapper.get(this._cache, component);
    return normalizeBlank(result);
  }
  clear() {
    MapWrapper.clear(this._cache);
  }
}
Object.defineProperty(CompilerCache.prototype.set, "parameters", {get: function() {
    return [[Type], [ProtoView]];
  }});
Object.defineProperty(CompilerCache.prototype.get, "parameters", {get: function() {
    return [[Type]];
  }});
export class Compiler {
  constructor(changeDetection, templateLoader, reader, parser, cache, shadowDomStrategy, templateResolver, componentUrlMapper, urlResolver, cssProcessor) {
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
  }
  createSteps(component, template) {
    var dirMetadata = [];
    var tplMetadata = ListWrapper.map(this._flattenDirectives(template), (d) => this._reader.read(d));
    dirMetadata = ListWrapper.concat(dirMetadata, tplMetadata);
    dirMetadata = ListWrapper.concat(dirMetadata, this._shadowDomDirectives);
    var cmpMetadata = this._reader.read(component);
    var templateUrl = this._templateLoader.getTemplateUrl(template);
    return createDefaultSteps(this._changeDetection, this._parser, cmpMetadata, dirMetadata, this._shadowDomStrategy, templateUrl, this._cssProcessor);
  }
  compile(component) {
    var protoView = this._compile(component);
    return PromiseWrapper.isPromise(protoView) ? protoView : PromiseWrapper.resolve(protoView);
  }
  _compile(component) {
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
      pvPromise = PromiseWrapper.then(tplElement, (el) => this._compileTemplate(template, el, component), (_) => {
        throw new BaseException(`Failed to load the template for ${stringify(component)}`);
      });
      MapWrapper.set(this._compiling, component, pvPromise);
      return pvPromise;
    }
    return this._compileTemplate(template, tplElement, component);
  }
  _compileTemplate(template, tplElement, component) {
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
      protoView = PromiseWrapper.all(syncProtoView.stylePromises).then((_) => syncProtoView);
    }
    if (nestedPVPromises.length > 0) {
      return PromiseWrapper.then(PromiseWrapper.all(nestedPVPromises), (_) => protoView, (e) => {
        throw new BaseException(`${e.message} -> Failed to compile ${stringify(component)}`);
      });
    }
    return protoView;
  }
  _compileNestedProtoView(ce, promises) {
    var protoView = this._compile(ce.componentDirective.type);
    if (PromiseWrapper.isPromise(protoView)) {
      ListWrapper.push(promises, protoView.then(function(pv) {
        ce.inheritedElementBinder.nestedProtoView = pv;
      }));
    } else {
      ce.inheritedElementBinder.nestedProtoView = protoView;
    }
  }
  _flattenDirectives(template) {
    if (isBlank(template.directives))
      return [];
    var directives = [];
    this._flattenList(template.directives, directives);
    return directives;
  }
  _flattenList(tree, out) {
    for (var i = 0; i < tree.length; i++) {
      var item = tree[i];
      if (ListWrapper.isList(item)) {
        this._flattenList(item, out);
      } else {
        ListWrapper.push(out, item);
      }
    }
  }
}
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