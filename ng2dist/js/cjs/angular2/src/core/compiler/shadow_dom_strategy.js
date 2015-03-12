"use strict";
Object.defineProperties(module.exports, {
  ShadowDomStrategy: {get: function() {
      return ShadowDomStrategy;
    }},
  EmulatedUnscopedShadowDomStrategy: {get: function() {
      return EmulatedUnscopedShadowDomStrategy;
    }},
  EmulatedScopedShadowDomStrategy: {get: function() {
      return EmulatedScopedShadowDomStrategy;
    }},
  NativeShadowDomStrategy: {get: function() {
      return NativeShadowDomStrategy;
    }},
  resetShadowDomCache: {get: function() {
      return resetShadowDomCache;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/src/core/compiler/shadow_dom_strategy";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_facade_47_async__,
    $__angular2_47_src_47_dom_47_dom_95_adapter__,
    $__angular2_47_src_47_core_47_compiler_47_view__,
    $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_content_95_tag__,
    $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_light_95_dom__,
    $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_shadow_95_css__,
    $__angular2_47_src_47_core_47_compiler_47_style_95_inliner__,
    $__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__,
    $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__,
    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__,
    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__,
    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var $__1 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    Type = $__1.Type,
    isBlank = $__1.isBlank,
    isPresent = $__1.isPresent,
    int = $__1.int;
var $__2 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    List = $__2.List,
    ListWrapper = $__2.ListWrapper,
    MapWrapper = $__2.MapWrapper,
    Map = $__2.Map;
var PromiseWrapper = ($__angular2_47_src_47_facade_47_async__ = require("angular2/src/facade/async"), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}).PromiseWrapper;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var viewModule = ($__angular2_47_src_47_core_47_compiler_47_view__ = require("./view"), $__angular2_47_src_47_core_47_compiler_47_view__ && $__angular2_47_src_47_core_47_compiler_47_view__.__esModule && $__angular2_47_src_47_core_47_compiler_47_view__ || {default: $__angular2_47_src_47_core_47_compiler_47_view__});
var Content = ($__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_content_95_tag__ = require("./shadow_dom_emulation/content_tag"), $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_content_95_tag__ && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_content_95_tag__.__esModule && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_content_95_tag__ || {default: $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_content_95_tag__}).Content;
var LightDom = ($__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_light_95_dom__ = require("./shadow_dom_emulation/light_dom"), $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_light_95_dom__ && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_light_95_dom__.__esModule && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_light_95_dom__ || {default: $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_light_95_dom__}).LightDom;
var ShadowCss = ($__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_shadow_95_css__ = require("./shadow_dom_emulation/shadow_css"), $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_shadow_95_css__ && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_shadow_95_css__.__esModule && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_shadow_95_css__ || {default: $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_shadow_95_css__}).ShadowCss;
var StyleInliner = ($__angular2_47_src_47_core_47_compiler_47_style_95_inliner__ = require("./style_inliner"), $__angular2_47_src_47_core_47_compiler_47_style_95_inliner__ && $__angular2_47_src_47_core_47_compiler_47_style_95_inliner__.__esModule && $__angular2_47_src_47_core_47_compiler_47_style_95_inliner__ || {default: $__angular2_47_src_47_core_47_compiler_47_style_95_inliner__}).StyleInliner;
var StyleUrlResolver = ($__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__ = require("./style_url_resolver"), $__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__ && $__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__.__esModule && $__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__ || {default: $__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__}).StyleUrlResolver;
var DirectiveMetadata = ($__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__ = require("./directive_metadata"), $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__ && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__.__esModule && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__ || {default: $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__}).DirectiveMetadata;
var NS = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__ = require("./pipeline/compile_step"), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__});
var CompileElement = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ = require("./pipeline/compile_element"), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__}).CompileElement;
var CompileControl = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__ = require("./pipeline/compile_control"), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__}).CompileControl;
var ShadowDomStrategy = function ShadowDomStrategy() {};
($traceurRuntime.createClass)(ShadowDomStrategy, {
  attachTemplate: function(el, view) {
    assert.argumentTypes(el, assert.type.any, view, viewModule.View);
  },
  constructLightDom: function(lightDomView, shadowDomView, el) {
    assert.argumentTypes(lightDomView, viewModule.View, shadowDomView, viewModule.View, el, assert.type.any);
    return assert.returnType((null), LightDom);
  },
  polyfillDirectives: function() {
    return assert.returnType(([]), assert.genericType(List, Type));
  },
  getStyleCompileStep: function(cmpMetadata, templateUrl) {
    assert.argumentTypes(cmpMetadata, DirectiveMetadata, templateUrl, assert.type.string);
    return assert.returnType((null), NS.CompileStep);
  },
  getTemplateCompileStep: function(cmpMetadata) {
    assert.argumentTypes(cmpMetadata, DirectiveMetadata);
    return assert.returnType((null), NS.CompileStep);
  },
  shimAppElement: function(cmpMetadata, element) {
    assert.argumentTypes(cmpMetadata, DirectiveMetadata, element, assert.type.any);
  }
}, {});
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
var EmulatedUnscopedShadowDomStrategy = function EmulatedUnscopedShadowDomStrategy(styleUrlResolver, styleHost) {
  assert.argumentTypes(styleUrlResolver, StyleUrlResolver, styleHost, assert.type.any);
  $traceurRuntime.superConstructor($EmulatedUnscopedShadowDomStrategy).call(this);
  this._styleUrlResolver = styleUrlResolver;
  this._styleHost = styleHost;
};
var $EmulatedUnscopedShadowDomStrategy = EmulatedUnscopedShadowDomStrategy;
($traceurRuntime.createClass)(EmulatedUnscopedShadowDomStrategy, {
  attachTemplate: function(el, view) {
    assert.argumentTypes(el, assert.type.any, view, viewModule.View);
    DOM.clearNodes(el);
    _moveViewNodesIntoParent(el, view);
  },
  constructLightDom: function(lightDomView, shadowDomView, el) {
    assert.argumentTypes(lightDomView, viewModule.View, shadowDomView, viewModule.View, el, assert.type.any);
    return assert.returnType((new LightDom(lightDomView, shadowDomView, el)), LightDom);
  },
  polyfillDirectives: function() {
    return assert.returnType(([Content]), assert.genericType(List, Type));
  },
  getStyleCompileStep: function(cmpMetadata, templateUrl) {
    assert.argumentTypes(cmpMetadata, DirectiveMetadata, templateUrl, assert.type.string);
    return assert.returnType((new _EmulatedUnscopedCssStep(cmpMetadata, templateUrl, this._styleUrlResolver, this._styleHost)), NS.CompileStep);
  }
}, {}, ShadowDomStrategy);
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
var EmulatedScopedShadowDomStrategy = function EmulatedScopedShadowDomStrategy(styleInliner, styleUrlResolver, styleHost) {
  assert.argumentTypes(styleInliner, StyleInliner, styleUrlResolver, StyleUrlResolver, styleHost, assert.type.any);
  $traceurRuntime.superConstructor($EmulatedScopedShadowDomStrategy).call(this, styleUrlResolver, styleHost);
  this._styleInliner = styleInliner;
};
var $EmulatedScopedShadowDomStrategy = EmulatedScopedShadowDomStrategy;
($traceurRuntime.createClass)(EmulatedScopedShadowDomStrategy, {
  getStyleCompileStep: function(cmpMetadata, templateUrl) {
    assert.argumentTypes(cmpMetadata, DirectiveMetadata, templateUrl, assert.type.string);
    return assert.returnType((new _EmulatedScopedCssStep(cmpMetadata, templateUrl, this._styleInliner, this._styleUrlResolver, this._styleHost)), NS.CompileStep);
  },
  getTemplateCompileStep: function(cmpMetadata) {
    assert.argumentTypes(cmpMetadata, DirectiveMetadata);
    return assert.returnType((new _ShimShadowDomStep(cmpMetadata)), NS.CompileStep);
  },
  shimAppElement: function(cmpMetadata, element) {
    assert.argumentTypes(cmpMetadata, DirectiveMetadata, element, assert.type.any);
    var cmpType = cmpMetadata.type;
    var hostAttribute = _getHostAttribute(_getComponentId(cmpType));
    DOM.setAttribute(element, hostAttribute, '');
  }
}, {}, EmulatedUnscopedShadowDomStrategy);
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
var NativeShadowDomStrategy = function NativeShadowDomStrategy(styleUrlResolver) {
  assert.argumentTypes(styleUrlResolver, StyleUrlResolver);
  $traceurRuntime.superConstructor($NativeShadowDomStrategy).call(this);
  this._styleUrlResolver = styleUrlResolver;
};
var $NativeShadowDomStrategy = NativeShadowDomStrategy;
($traceurRuntime.createClass)(NativeShadowDomStrategy, {
  attachTemplate: function(el, view) {
    assert.argumentTypes(el, assert.type.any, view, viewModule.View);
    _moveViewNodesIntoParent(DOM.createShadowRoot(el), view);
  },
  getStyleCompileStep: function(cmpMetadata, templateUrl) {
    assert.argumentTypes(cmpMetadata, DirectiveMetadata, templateUrl, assert.type.string);
    return assert.returnType((new _NativeCssStep(templateUrl, this._styleUrlResolver)), NS.CompileStep);
  }
}, {}, ShadowDomStrategy);
Object.defineProperty(NativeShadowDomStrategy, "parameters", {get: function() {
    return [[StyleUrlResolver]];
  }});
Object.defineProperty(NativeShadowDomStrategy.prototype.attachTemplate, "parameters", {get: function() {
    return [[], [viewModule.View]];
  }});
Object.defineProperty(NativeShadowDomStrategy.prototype.getStyleCompileStep, "parameters", {get: function() {
    return [[DirectiveMetadata], [assert.type.string]];
  }});
var _ShimShadowDomStep = function _ShimShadowDomStep(cmpMetadata) {
  assert.argumentTypes(cmpMetadata, DirectiveMetadata);
  $traceurRuntime.superConstructor($_ShimShadowDomStep).call(this);
  var id = _getComponentId(cmpMetadata.type);
  this._contentAttribute = _getContentAttribute(id);
};
var $_ShimShadowDomStep = _ShimShadowDomStep;
($traceurRuntime.createClass)(_ShimShadowDomStep, {process: function(parent, current, control) {
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
  }}, {}, NS.CompileStep);
Object.defineProperty(_ShimShadowDomStep, "parameters", {get: function() {
    return [[DirectiveMetadata]];
  }});
Object.defineProperty(_ShimShadowDomStep.prototype.process, "parameters", {get: function() {
    return [[CompileElement], [CompileElement], [CompileControl]];
  }});
var _EmulatedUnscopedCssStep = function _EmulatedUnscopedCssStep(cmpMetadata, templateUrl, styleUrlResolver, styleHost) {
  assert.argumentTypes(cmpMetadata, DirectiveMetadata, templateUrl, assert.type.string, styleUrlResolver, StyleUrlResolver, styleHost, assert.type.any);
  $traceurRuntime.superConstructor($_EmulatedUnscopedCssStep).call(this);
  this._templateUrl = templateUrl;
  this._styleUrlResolver = styleUrlResolver;
  this._styleHost = styleHost;
};
var $_EmulatedUnscopedCssStep = _EmulatedUnscopedCssStep;
($traceurRuntime.createClass)(_EmulatedUnscopedCssStep, {process: function(parent, current, control) {
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
  }}, {}, NS.CompileStep);
Object.defineProperty(_EmulatedUnscopedCssStep, "parameters", {get: function() {
    return [[DirectiveMetadata], [assert.type.string], [StyleUrlResolver], []];
  }});
Object.defineProperty(_EmulatedUnscopedCssStep.prototype.process, "parameters", {get: function() {
    return [[CompileElement], [CompileElement], [CompileControl]];
  }});
var _EmulatedScopedCssStep = function _EmulatedScopedCssStep(cmpMetadata, templateUrl, styleInliner, styleUrlResolver, styleHost) {
  assert.argumentTypes(cmpMetadata, DirectiveMetadata, templateUrl, assert.type.string, styleInliner, StyleInliner, styleUrlResolver, StyleUrlResolver, styleHost, assert.type.any);
  $traceurRuntime.superConstructor($_EmulatedScopedCssStep).call(this);
  this._templateUrl = templateUrl;
  this._component = cmpMetadata.type;
  this._styleInliner = styleInliner;
  this._styleUrlResolver = styleUrlResolver;
  this._styleHost = styleHost;
};
var $_EmulatedScopedCssStep = _EmulatedScopedCssStep;
($traceurRuntime.createClass)(_EmulatedScopedCssStep, {process: function(parent, current, control) {
    var $__13 = this;
    assert.argumentTypes(parent, CompileElement, current, CompileElement, control, CompileControl);
    var styleEl = current.element;
    var cssText = DOM.getText(styleEl);
    cssText = this._styleUrlResolver.resolveUrls(cssText, this._templateUrl);
    var css = this._styleInliner.inlineImports(cssText, this._templateUrl);
    if (PromiseWrapper.isPromise(css)) {
      DOM.setText(styleEl, '');
      ListWrapper.push(parent.inheritedProtoView.stylePromises, css);
      return css.then((function(css) {
        css = _shimCssForComponent(css, $__13._component);
        DOM.setText(styleEl, css);
      }));
    } else {
      css = _shimCssForComponent(css, this._component);
      DOM.setText(styleEl, css);
    }
    DOM.remove(styleEl);
    _insertStyleElement(this._styleHost, styleEl);
  }}, {}, NS.CompileStep);
Object.defineProperty(_EmulatedScopedCssStep, "parameters", {get: function() {
    return [[DirectiveMetadata], [assert.type.string], [StyleInliner], [StyleUrlResolver], []];
  }});
Object.defineProperty(_EmulatedScopedCssStep.prototype.process, "parameters", {get: function() {
    return [[CompileElement], [CompileElement], [CompileControl]];
  }});
var _NativeCssStep = function _NativeCssStep(templateUrl, styleUrlResover) {
  assert.argumentTypes(templateUrl, assert.type.string, styleUrlResover, StyleUrlResolver);
  $traceurRuntime.superConstructor($_NativeCssStep).call(this);
  this._styleUrlResolver = styleUrlResover;
  this._templateUrl = templateUrl;
};
var $_NativeCssStep = _NativeCssStep;
($traceurRuntime.createClass)(_NativeCssStep, {process: function(parent, current, control) {
    assert.argumentTypes(parent, CompileElement, current, CompileElement, control, CompileControl);
    var styleEl = current.element;
    var cssText = DOM.getText(styleEl);
    cssText = this._styleUrlResolver.resolveUrls(cssText, this._templateUrl);
    DOM.setText(styleEl, cssText);
  }}, {}, NS.CompileStep);
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
  return ("_nghost-" + id);
}
Object.defineProperty(_getHostAttribute, "parameters", {get: function() {
    return [[int]];
  }});
function _getContentAttribute(id) {
  assert.argumentTypes(id, int);
  return ("_ngcontent-" + id);
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
function resetShadowDomCache() {
  MapWrapper.clear(_componentUIDs);
  _nextComponentUID = 0;
  MapWrapper.clear(_sharedStyleTexts);
  _lastInsertedStyleEl = null;
}

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/core/compiler/shadow_dom_strategy.map

//# sourceMappingURL=./shadow_dom_strategy.map