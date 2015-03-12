"use strict";
Object.defineProperties(module.exports, {
  Content: {get: function() {
      return Content;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/src/core/compiler/shadow_dom_emulation/content_tag";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_src_47_core_47_annotations_47_annotations__,
    $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_light_95_dom__,
    $__angular2_47_di__,
    $__angular2_47_src_47_dom_47_dom_95_adapter__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_core_47_dom_47_element__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var Decorator = ($__angular2_47_src_47_core_47_annotations_47_annotations__ = require("../../annotations/annotations"), $__angular2_47_src_47_core_47_annotations_47_annotations__ && $__angular2_47_src_47_core_47_annotations_47_annotations__.__esModule && $__angular2_47_src_47_core_47_annotations_47_annotations__ || {default: $__angular2_47_src_47_core_47_annotations_47_annotations__}).Decorator;
var ldModule = ($__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_light_95_dom__ = require("./light_dom"), $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_light_95_dom__ && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_light_95_dom__.__esModule && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_light_95_dom__ || {default: $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_light_95_dom__});
var Inject = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}).Inject;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var isPresent = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).isPresent;
var $__5 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    List = $__5.List,
    ListWrapper = $__5.ListWrapper;
var NgElement = ($__angular2_47_src_47_core_47_dom_47_element__ = require("angular2/src/core/dom/element"), $__angular2_47_src_47_core_47_dom_47_element__ && $__angular2_47_src_47_core_47_dom_47_element__.__esModule && $__angular2_47_src_47_core_47_dom_47_element__ || {default: $__angular2_47_src_47_core_47_dom_47_element__}).NgElement;
var ContentStrategy = function ContentStrategy() {};
($traceurRuntime.createClass)(ContentStrategy, {insert: function(nodes) {
    assert.argumentTypes(nodes, List);
  }}, {});
Object.defineProperty(ContentStrategy.prototype.insert, "parameters", {get: function() {
    return [[List]];
  }});
var RenderedContent = function RenderedContent(contentEl) {
  $traceurRuntime.superConstructor($RenderedContent).call(this);
  this._replaceContentElementWithScriptTags(contentEl);
  this.nodes = [];
};
var $RenderedContent = RenderedContent;
($traceurRuntime.createClass)(RenderedContent, {
  _scriptTemplate: function() {
    if (!isPresent($RenderedContent._lazyScriptTemplate)) {
      $RenderedContent._lazyScriptTemplate = DOM.createScriptTag('type', 'ng/content');
    }
    return $RenderedContent._lazyScriptTemplate;
  },
  insert: function(nodes) {
    assert.argumentTypes(nodes, List);
    this.nodes = nodes;
    DOM.insertAllBefore(this.endScript, nodes);
    this._removeNodesUntil(ListWrapper.isEmpty(nodes) ? this.endScript : nodes[0]);
  },
  _replaceContentElementWithScriptTags: function(contentEl) {
    this.beginScript = DOM.clone(this._scriptTemplate());
    this.endScript = DOM.clone(this._scriptTemplate());
    DOM.insertBefore(contentEl, this.beginScript);
    DOM.insertBefore(contentEl, this.endScript);
    DOM.removeChild(DOM.parentElement(contentEl), contentEl);
  },
  _removeNodesUntil: function(node) {
    var p = DOM.parentElement(this.beginScript);
    for (var next = DOM.nextSibling(this.beginScript); next !== node; next = DOM.nextSibling(this.beginScript)) {
      DOM.removeChild(p, next);
    }
  }
}, {}, ContentStrategy);
Object.defineProperty(RenderedContent.prototype.insert, "parameters", {get: function() {
    return [[List]];
  }});
var IntermediateContent = function IntermediateContent(destinationLightDom) {
  assert.argumentTypes(destinationLightDom, ldModule.LightDom);
  $traceurRuntime.superConstructor($IntermediateContent).call(this);
  this.destinationLightDom = destinationLightDom;
  this.nodes = [];
};
var $IntermediateContent = IntermediateContent;
($traceurRuntime.createClass)(IntermediateContent, {insert: function(nodes) {
    assert.argumentTypes(nodes, List);
    this.nodes = nodes;
    this.destinationLightDom.redistribute();
  }}, {}, ContentStrategy);
Object.defineProperty(IntermediateContent, "parameters", {get: function() {
    return [[ldModule.LightDom]];
  }});
Object.defineProperty(IntermediateContent.prototype.insert, "parameters", {get: function() {
    return [[List]];
  }});
var Content = function Content(destinationLightDom, contentEl) {
  assert.argumentTypes(destinationLightDom, assert.type.any, contentEl, NgElement);
  this.select = contentEl.getAttribute('select');
  this._strategy = isPresent(destinationLightDom) ? new IntermediateContent(destinationLightDom) : new RenderedContent(contentEl.domElement);
};
($traceurRuntime.createClass)(Content, {
  nodes: function() {
    return assert.returnType((this._strategy.nodes), List);
  },
  insert: function(nodes) {
    assert.argumentTypes(nodes, List);
    this._strategy.insert(nodes);
  }
}, {});
Object.defineProperty(Content, "annotations", {get: function() {
    return [new Decorator({selector: 'content'})];
  }});
Object.defineProperty(Content, "parameters", {get: function() {
    return [[new Inject(ldModule.DestinationLightDom)], [NgElement]];
  }});
Object.defineProperty(Content.prototype.insert, "parameters", {get: function() {
    return [[List]];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/core/compiler/shadow_dom_emulation/content_tag.map

//# sourceMappingURL=./content_tag.map