import {assert} from "rtts_assert/rtts_assert";
import {Type,
  isBlank,
  isPresent,
  int} from 'angular2/src/facade/lang';
import {List,
  ListWrapper,
  MapWrapper,
  Map} from 'angular2/src/facade/collection';
import {PromiseWrapper} from 'angular2/src/facade/async';
import {DOM} from 'angular2/src/dom/dom_adapter';
import * as viewModule from './view';
import {Content} from './shadow_dom_emulation/content_tag';
import {LightDom} from './shadow_dom_emulation/light_dom';
import {ShadowCss} from './shadow_dom_emulation/shadow_css';
import {StyleInliner} from './style_inliner';
import {StyleUrlResolver} from './style_url_resolver';
import {DirectiveMetadata} from './directive_metadata';
import * as NS from './pipeline/compile_step';
import {CompileElement} from './pipeline/compile_element';
import {CompileControl} from './pipeline/compile_control';
export class ShadowDomStrategy {
  attachTemplate(el, view) {
    assert.argumentTypes(el, assert.type.any, view, viewModule.View);
  }
  constructLightDom(lightDomView, shadowDomView, el) {
    assert.argumentTypes(lightDomView, viewModule.View, shadowDomView, viewModule.View, el, assert.type.any);
    return assert.returnType((null), LightDom);
  }
  polyfillDirectives() {
    return assert.returnType(([]), assert.genericType(List, Type));
  }
  getStyleCompileStep(cmpMetadata, templateUrl) {
    assert.argumentTypes(cmpMetadata, DirectiveMetadata, templateUrl, assert.type.string);
    return assert.returnType((null), NS.CompileStep);
  }
  getTemplateCompileStep(cmpMetadata) {
    assert.argumentTypes(cmpMetadata, DirectiveMetadata);
    return assert.returnType((null), NS.CompileStep);
  }
  shimAppElement(cmpMetadata, element) {
    assert.argumentTypes(cmpMetadata, DirectiveMetadata, element, assert.type.any);
  }
}
Object.defineProperty(ShadowDomStrategy.prototype.attachTemplate, "parameters", {get: function() {
    return [[], [viewModule.View]];
  }});
Object.defineProperty(ShadowDomStrategy.prototype.constructLightDom, "parameters", {get: function() {
    return [[viewModule.View], [viewModule.View], []];
  }});
Object.defineProperty(ShadowDomStrategy.prototype.getStyleCompileStep, "parameters", {get: function() {
    return [[DirectiveMetadata], [assert.type.string]];
  }});
Object.defineProperty(ShadowDomStrategy.prototype.getTemplateCompileStep, "parameters", {get: function() {
    return [[DirectiveMetadata]];
  }});
Object.defineProperty(ShadowDomStrategy.prototype.shimAppElement, "parameters", {get: function() {
    return [[DirectiveMetadata], []];
  }});
export class EmulatedUnscopedShadowDomStrategy extends ShadowDomStrategy {
  constructor(styleUrlResolver, styleHost) {
    assert.argumentTypes(styleUrlResolver, StyleUrlResolver, styleHost, assert.type.any);
    super();
    this._styleUrlResolver = styleUrlResolver;
    this._styleHost = styleHost;
  }
  attachTemplate(el, view) {
    assert.argumentTypes(el, assert.type.any, view, viewModule.View);
    DOM.clearNodes(el);
    _moveViewNodesIntoParent(el, view);
  }
  constructLightDom(lightDomView, shadowDomView, el) {
    assert.argumentTypes(lightDomView, viewModule.View, shadowDomView, viewModule.View, el, assert.type.any);
    return assert.returnType((new LightDom(lightDomView, shadowDomView, el)), LightDom);
  }
  polyfillDirectives() {
    return assert.returnType(([Content]), assert.genericType(List, Type));
  }
  getStyleCompileStep(cmpMetadata, templateUrl) {
    assert.argumentTypes(cmpMetadata, DirectiveMetadata, templateUrl, assert.type.string);
    return assert.returnType((new _EmulatedUnscopedCssStep(cmpMetadata, templateUrl, this._styleUrlResolver, this._styleHost)), NS.CompileStep);
  }
}
Object.defineProperty(EmulatedUnscopedShadowDomStrategy, "parameters", {get: function() {
    return [[StyleUrlResolver], []];
  }});
Object.defineProperty(EmulatedUnscopedShadowDomStrategy.prototype.attachTemplate, "parameters", {get: function() {
    return [[], [viewModule.View]];
  }});
Object.defineProperty(EmulatedUnscopedShadowDomStrategy.prototype.constructLightDom, "parameters", {get: function() {
    return [[viewModule.View], [viewModule.View], []];
  }});
Object.defineProperty(EmulatedUnscopedShadowDomStrategy.prototype.getStyleCompileStep, "parameters", {get: function() {
    return [[DirectiveMetadata], [assert.type.string]];
  }});
export class EmulatedScopedShadowDomStrategy extends EmulatedUnscopedShadowDomStrategy {
  constructor(styleInliner, styleUrlResolver, styleHost) {
    assert.argumentTypes(styleInliner, StyleInliner, styleUrlResolver, StyleUrlResolver, styleHost, assert.type.any);
    super(styleUrlResolver, styleHost);
    this._styleInliner = styleInliner;
  }
  getStyleCompileStep(cmpMetadata, templateUrl) {
    assert.argumentTypes(cmpMetadata, DirectiveMetadata, templateUrl, assert.type.string);
    return assert.returnType((new _EmulatedScopedCssStep(cmpMetadata, templateUrl, this._styleInliner, this._styleUrlResolver, this._styleHost)), NS.CompileStep);
  }
  getTemplateCompileStep(cmpMetadata) {
    assert.argumentTypes(cmpMetadata, DirectiveMetadata);
    return assert.returnType((new _ShimShadowDomStep(cmpMetadata)), NS.CompileStep);
  }
  shimAppElement(cmpMetadata, element) {
    assert.argumentTypes(cmpMetadata, DirectiveMetadata, element, assert.type.any);
    var cmpType = cmpMetadata.type;
    var hostAttribute = _getHostAttribute(_getComponentId(cmpType));
    DOM.setAttribute(element, hostAttribute, '');
  }
}
Object.defineProperty(EmulatedScopedShadowDomStrategy, "parameters", {get: function() {
    return [[StyleInliner], [StyleUrlResolver], []];
  }});
Object.defineProperty(EmulatedScopedShadowDomStrategy.prototype.getStyleCompileStep, "parameters", {get: function() {
    return [[DirectiveMetadata], [assert.type.string]];
  }});
Object.defineProperty(EmulatedScopedShadowDomStrategy.prototype.getTemplateCompileStep, "parameters", {get: function() {
    return [[DirectiveMetadata]];
  }});
Object.defineProperty(EmulatedScopedShadowDomStrategy.prototype.shimAppElement, "parameters", {get: function() {
    return [[DirectiveMetadata], []];
  }});
export class NativeShadowDomStrategy extends ShadowDomStrategy {
  constructor(styleUrlResolver) {
    assert.argumentTypes(styleUrlResolver, StyleUrlResolver);
    super();
    this._styleUrlResolver = styleUrlResolver;
  }
  attachTemplate(el, view) {
    assert.argumentTypes(el, assert.type.any, view, viewModule.View);
    _moveViewNodesIntoParent(DOM.createShadowRoot(el), view);
  }
  getStyleCompileStep(cmpMetadata, templateUrl) {
    assert.argumentTypes(cmpMetadata, DirectiveMetadata, templateUrl, assert.type.string);
    return assert.returnType((new _NativeCssStep(templateUrl, this._styleUrlResolver)), NS.CompileStep);
  }
}
Object.defineProperty(NativeShadowDomStrategy, "parameters", {get: function() {
    return [[StyleUrlResolver]];
  }});
Object.defineProperty(NativeShadowDomStrategy.prototype.attachTemplate, "parameters", {get: function() {
    return [[], [viewModule.View]];
  }});
Object.defineProperty(NativeShadowDomStrategy.prototype.getStyleCompileStep, "parameters", {get: function() {
    return [[DirectiveMetadata], [assert.type.string]];
  }});
class _ShimShadowDomStep extends NS.CompileStep {
  constructor(cmpMetadata) {
    assert.argumentTypes(cmpMetadata, DirectiveMetadata);
    super();
    var id = _getComponentId(cmpMetadata.type);
    this._contentAttribute = _getContentAttribute(id);
  }
  process(parent, current, control) {
    assert.argumentTypes(parent, CompileElement, current, CompileElement, control, CompileControl);
    if (current.ignoreBindings) {
      return ;
    }
    DOM.setAttribute(current.element, this._contentAttribute, '');
    var host = current.componentDirective;
    if (isPresent(host)) {
      var hostId = _getComponentId(host.type);
      var hostAttribute = _getHostAttribute(hostId);
      DOM.setAttribute(current.element, hostAttribute, '');
    }
  }
}
Object.defineProperty(_ShimShadowDomStep, "parameters", {get: function() {
    return [[DirectiveMetadata]];
  }});
Object.defineProperty(_ShimShadowDomStep.prototype.process, "parameters", {get: function() {
    return [[CompileElement], [CompileElement], [CompileControl]];
  }});
class _EmulatedUnscopedCssStep extends NS.CompileStep {
  constructor(cmpMetadata, templateUrl, styleUrlResolver, styleHost) {
    assert.argumentTypes(cmpMetadata, DirectiveMetadata, templateUrl, assert.type.string, styleUrlResolver, StyleUrlResolver, styleHost, assert.type.any);
    super();
    this._templateUrl = templateUrl;
    this._styleUrlResolver = styleUrlResolver;
    this._styleHost = styleHost;
  }
  process(parent, current, control) {
    assert.argumentTypes(parent, CompileElement, current, CompileElement, control, CompileControl);
    var styleEl = current.element;
    var cssText = DOM.getText(styleEl);
    cssText = this._styleUrlResolver.resolveUrls(cssText, this._templateUrl);
    DOM.setText(styleEl, cssText);
    DOM.remove(styleEl);
    if (!MapWrapper.contains(_sharedStyleTexts, cssText)) {
      MapWrapper.set(_sharedStyleTexts, cssText, true);
      _insertStyleElement(this._styleHost, styleEl);
    }
  }
}
Object.defineProperty(_EmulatedUnscopedCssStep, "parameters", {get: function() {
    return [[DirectiveMetadata], [assert.type.string], [StyleUrlResolver], []];
  }});
Object.defineProperty(_EmulatedUnscopedCssStep.prototype.process, "parameters", {get: function() {
    return [[CompileElement], [CompileElement], [CompileControl]];
  }});
class _EmulatedScopedCssStep extends NS.CompileStep {
  constructor(cmpMetadata, templateUrl, styleInliner, styleUrlResolver, styleHost) {
    assert.argumentTypes(cmpMetadata, DirectiveMetadata, templateUrl, assert.type.string, styleInliner, StyleInliner, styleUrlResolver, StyleUrlResolver, styleHost, assert.type.any);
    super();
    this._templateUrl = templateUrl;
    this._component = cmpMetadata.type;
    this._styleInliner = styleInliner;
    this._styleUrlResolver = styleUrlResolver;
    this._styleHost = styleHost;
  }
  process(parent, current, control) {
    assert.argumentTypes(parent, CompileElement, current, CompileElement, control, CompileControl);
    var styleEl = current.element;
    var cssText = DOM.getText(styleEl);
    cssText = this._styleUrlResolver.resolveUrls(cssText, this._templateUrl);
    var css = this._styleInliner.inlineImports(cssText, this._templateUrl);
    if (PromiseWrapper.isPromise(css)) {
      DOM.setText(styleEl, '');
      ListWrapper.push(parent.inheritedProtoView.stylePromises, css);
      return css.then((css) => {
        css = _shimCssForComponent(css, this._component);
        DOM.setText(styleEl, css);
      });
    } else {
      css = _shimCssForComponent(css, this._component);
      DOM.setText(styleEl, css);
    }
    DOM.remove(styleEl);
    _insertStyleElement(this._styleHost, styleEl);
  }
}
Object.defineProperty(_EmulatedScopedCssStep, "parameters", {get: function() {
    return [[DirectiveMetadata], [assert.type.string], [StyleInliner], [StyleUrlResolver], []];
  }});
Object.defineProperty(_EmulatedScopedCssStep.prototype.process, "parameters", {get: function() {
    return [[CompileElement], [CompileElement], [CompileControl]];
  }});
class _NativeCssStep extends NS.CompileStep {
  constructor(templateUrl, styleUrlResover) {
    assert.argumentTypes(templateUrl, assert.type.string, styleUrlResover, StyleUrlResolver);
    super();
    this._styleUrlResolver = styleUrlResover;
    this._templateUrl = templateUrl;
  }
  process(parent, current, control) {
    assert.argumentTypes(parent, CompileElement, current, CompileElement, control, CompileControl);
    var styleEl = current.element;
    var cssText = DOM.getText(styleEl);
    cssText = this._styleUrlResolver.resolveUrls(cssText, this._templateUrl);
    DOM.setText(styleEl, cssText);
  }
}
Object.defineProperty(_NativeCssStep, "parameters", {get: function() {
    return [[assert.type.string], [StyleUrlResolver]];
  }});
Object.defineProperty(_NativeCssStep.prototype.process, "parameters", {get: function() {
    return [[CompileElement], [CompileElement], [CompileControl]];
  }});
function _moveViewNodesIntoParent(parent, view) {
  for (var i = 0; i < view.nodes.length; ++i) {
    DOM.appendChild(parent, view.nodes[i]);
  }
}
var _componentUIDs = assert.type(MapWrapper.create(), assert.genericType(Map, Type, int));
var _nextComponentUID = assert.type(0, int);
var _sharedStyleTexts = assert.type(MapWrapper.create(), assert.genericType(Map, assert.type.string, assert.type.boolean));
var _lastInsertedStyleEl;
function _getComponentId(component) {
  assert.argumentTypes(component, Type);
  var id = MapWrapper.get(_componentUIDs, component);
  if (isBlank(id)) {
    id = _nextComponentUID++;
    MapWrapper.set(_componentUIDs, component, id);
  }
  return id;
}
Object.defineProperty(_getComponentId, "parameters", {get: function() {
    return [[Type]];
  }});
function _insertStyleElement(host, styleEl) {
  if (isBlank(_lastInsertedStyleEl)) {
    var firstChild = DOM.firstChild(host);
    if (isPresent(firstChild)) {
      DOM.insertBefore(firstChild, styleEl);
    } else {
      DOM.appendChild(host, styleEl);
    }
  } else {
    DOM.insertAfter(_lastInsertedStyleEl, styleEl);
  }
  _lastInsertedStyleEl = styleEl;
}
function _getHostAttribute(id) {
  assert.argumentTypes(id, int);
  return `_nghost-${id}`;
}
Object.defineProperty(_getHostAttribute, "parameters", {get: function() {
    return [[int]];
  }});
function _getContentAttribute(id) {
  assert.argumentTypes(id, int);
  return `_ngcontent-${id}`;
}
Object.defineProperty(_getContentAttribute, "parameters", {get: function() {
    return [[int]];
  }});
function _shimCssForComponent(cssText, component) {
  assert.argumentTypes(cssText, assert.type.string, component, Type);
  var id = _getComponentId(component);
  var shadowCss = new ShadowCss();
  return assert.returnType((shadowCss.shimCssText(cssText, _getContentAttribute(id), _getHostAttribute(id))), assert.type.string);
}
Object.defineProperty(_shimCssForComponent, "parameters", {get: function() {
    return [[assert.type.string], [Type]];
  }});
export function resetShadowDomCache() {
  MapWrapper.clear(_componentUIDs);
  _nextComponentUID = 0;
  MapWrapper.clear(_sharedStyleTexts);
  _lastInsertedStyleEl = null;
}

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/core/compiler/shadow_dom_strategy.map

//# sourceMappingURL=./shadow_dom_strategy.map