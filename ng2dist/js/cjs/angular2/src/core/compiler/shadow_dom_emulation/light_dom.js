"use strict";
Object.defineProperties(module.exports, {
  SourceLightDom: {get: function() {
      return SourceLightDom;
    }},
  DestinationLightDom: {get: function() {
      return DestinationLightDom;
    }},
  LightDom: {get: function() {
      return LightDom;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/src/core/compiler/shadow_dom_emulation/light_dom";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_src_47_dom_47_dom_95_adapter__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_core_47_compiler_47_view__,
    $__angular2_47_src_47_core_47_compiler_47_element_95_injector__,
    $__angular2_47_src_47_core_47_compiler_47_view_95_container__,
    $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_content_95_tag__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var $__2 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    List = $__2.List,
    ListWrapper = $__2.ListWrapper;
var $__3 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    isBlank = $__3.isBlank,
    isPresent = $__3.isPresent;
var viewModule = ($__angular2_47_src_47_core_47_compiler_47_view__ = require("../view"), $__angular2_47_src_47_core_47_compiler_47_view__ && $__angular2_47_src_47_core_47_compiler_47_view__.__esModule && $__angular2_47_src_47_core_47_compiler_47_view__ || {default: $__angular2_47_src_47_core_47_compiler_47_view__});
var ElementInjector = ($__angular2_47_src_47_core_47_compiler_47_element_95_injector__ = require("../element_injector"), $__angular2_47_src_47_core_47_compiler_47_element_95_injector__ && $__angular2_47_src_47_core_47_compiler_47_element_95_injector__.__esModule && $__angular2_47_src_47_core_47_compiler_47_element_95_injector__ || {default: $__angular2_47_src_47_core_47_compiler_47_element_95_injector__}).ElementInjector;
var ViewContainer = ($__angular2_47_src_47_core_47_compiler_47_view_95_container__ = require("../view_container"), $__angular2_47_src_47_core_47_compiler_47_view_95_container__ && $__angular2_47_src_47_core_47_compiler_47_view_95_container__.__esModule && $__angular2_47_src_47_core_47_compiler_47_view_95_container__ || {default: $__angular2_47_src_47_core_47_compiler_47_view_95_container__}).ViewContainer;
var Content = ($__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_content_95_tag__ = require("./content_tag"), $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_content_95_tag__ && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_content_95_tag__.__esModule && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_content_95_tag__ || {default: $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_content_95_tag__}).Content;
var SourceLightDom = function SourceLightDom() {};
($traceurRuntime.createClass)(SourceLightDom, {}, {});
var DestinationLightDom = function DestinationLightDom() {};
($traceurRuntime.createClass)(DestinationLightDom, {}, {});
var _Root = function _Root(node, injector) {
  this.node = node;
  this.injector = injector;
};
($traceurRuntime.createClass)(_Root, {}, {});
var LightDom = function LightDom(lightDomView, shadowDomView, element) {
  assert.argumentTypes(lightDomView, viewModule.View, shadowDomView, viewModule.View, element, assert.type.any);
  this.lightDomView = lightDomView;
  this.shadowDomView = shadowDomView;
  this.nodes = DOM.childNodesAsList(element);
  this.roots = null;
};
($traceurRuntime.createClass)(LightDom, {
  redistribute: function() {
    var tags = this.contentTags();
    if (tags.length > 0) {
      redistributeNodes(tags, this.expandedDomNodes());
    }
  },
  contentTags: function() {
    return assert.returnType((this._collectAllContentTags(this.shadowDomView, [])), assert.genericType(List, Content));
  },
  _collectAllContentTags: function(view, acc) {
    var $__7 = this;
    assert.argumentTypes(view, viewModule.View, acc, assert.genericType(List, Content));
    var eis = view.elementInjectors;
    for (var i = 0; i < eis.length; ++i) {
      var ei = eis[i];
      if (isBlank(ei))
        continue;
      if (ei.hasDirective(Content)) {
        ListWrapper.push(acc, ei.get(Content));
      } else if (ei.hasPreBuiltObject(ViewContainer)) {
        var vc = ei.get(ViewContainer);
        ListWrapper.forEach(vc.contentTagContainers(), (function(view) {
          $__7._collectAllContentTags(view, acc);
        }));
      }
    }
    return assert.returnType((acc), assert.genericType(List, Content));
  },
  expandedDomNodes: function() {
    var res = [];
    var roots = this._roots();
    for (var i = 0; i < roots.length; ++i) {
      var root = roots[i];
      var ei = root.injector;
      if (isPresent(ei) && ei.hasPreBuiltObject(ViewContainer)) {
        var vc = root.injector.get(ViewContainer);
        res = ListWrapper.concat(res, vc.nodes());
      } else if (isPresent(ei) && ei.hasDirective(Content)) {
        var content = root.injector.get(Content);
        res = ListWrapper.concat(res, content.nodes());
      } else {
        ListWrapper.push(res, root.node);
      }
    }
    return assert.returnType((res), List);
  },
  _roots: function() {
    if (isPresent(this.roots))
      return this.roots;
    var viewInj = this.lightDomView.elementInjectors;
    this.roots = ListWrapper.map(this.nodes, (function(n) {
      return new _Root(n, ListWrapper.find(viewInj, (function(inj) {
        return isPresent(inj) ? inj.forElement(n) : false;
      })));
    }));
    return this.roots;
  }
}, {});
Object.defineProperty(LightDom, "parameters", {get: function() {
    return [[viewModule.View], [viewModule.View], []];
  }});
Object.defineProperty(LightDom.prototype._collectAllContentTags, "parameters", {get: function() {
    return [[viewModule.View], [assert.genericType(List, Content)]];
  }});
function redistributeNodes(contents, nodes) {
  for (var i = 0; i < contents.length; ++i) {
    var content = contents[i];
    var select = content.select;
    var matchSelector = (function(n) {
      return DOM.elementMatches(n, select);
    });
    if (isBlank(select)) {
      content.insert(nodes);
      ListWrapper.clear(nodes);
    } else {
      var matchingNodes = ListWrapper.filter(nodes, matchSelector);
      content.insert(matchingNodes);
      ListWrapper.removeAll(nodes, matchingNodes);
    }
  }
}
Object.defineProperty(redistributeNodes, "parameters", {get: function() {
    return [[assert.genericType(List, Content)], [List]];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/core/compiler/shadow_dom_emulation/light_dom.map

//# sourceMappingURL=./light_dom.map