import {assert} from "rtts_assert/rtts_assert";
import {ABSTRACT,
  BaseException} from 'angular2/src/facade/lang';
export var DOM;
export function setRootDomAdapter(adapter) {
  assert.argumentTypes(adapter, DomAdapter);
  DOM = adapter;
}
Object.defineProperty(setRootDomAdapter, "parameters", {get: function() {
    return [[DomAdapter]];
  }});
function _abstract() {
  return new BaseException('This method is abstract');
}
export class DomAdapter {
  get attrToPropMap() {
    throw _abstract();
  }
  parse(templateHtml) {
    assert.argumentTypes(templateHtml, assert.type.string);
    throw _abstract();
  }
  query(selector) {
    assert.argumentTypes(selector, assert.type.string);
    throw _abstract();
  }
  querySelector(el, selector) {
    assert.argumentTypes(el, assert.type.any, selector, assert.type.string);
    throw _abstract();
  }
  querySelectorAll(el, selector) {
    assert.argumentTypes(el, assert.type.any, selector, assert.type.string);
    throw _abstract();
  }
  on(el, evt, listener) {
    throw _abstract();
  }
  dispatchEvent(el, evt) {
    throw _abstract();
  }
  createMouseEvent(eventType) {
    throw _abstract();
  }
  createEvent(eventType) {
    throw _abstract();
  }
  getInnerHTML(el) {
    throw _abstract();
  }
  getOuterHTML(el) {
    throw _abstract();
  }
  nodeName(node) {
    throw _abstract();
  }
  nodeValue(node) {
    throw _abstract();
  }
  type(node) {
    throw _abstract();
  }
  content(node) {
    throw _abstract();
  }
  firstChild(el) {
    throw _abstract();
  }
  nextSibling(el) {
    throw _abstract();
  }
  parentElement(el) {
    throw _abstract();
  }
  childNodes(el) {
    throw _abstract();
  }
  childNodesAsList(el) {
    throw _abstract();
  }
  clearNodes(el) {
    throw _abstract();
  }
  appendChild(el, node) {
    throw _abstract();
  }
  removeChild(el, node) {
    throw _abstract();
  }
  remove(el) {
    throw _abstract();
  }
  insertBefore(el, node) {
    throw _abstract();
  }
  insertAllBefore(el, nodes) {
    throw _abstract();
  }
  insertAfter(el, node) {
    throw _abstract();
  }
  setInnerHTML(el, value) {
    throw _abstract();
  }
  getText(el) {
    throw _abstract();
  }
  setText(el, value) {
    assert.argumentTypes(el, assert.type.any, value, assert.type.string);
    throw _abstract();
  }
  getValue(el) {
    throw _abstract();
  }
  setValue(el, value) {
    assert.argumentTypes(el, assert.type.any, value, assert.type.string);
    throw _abstract();
  }
  getChecked(el) {
    throw _abstract();
  }
  setChecked(el, value) {
    assert.argumentTypes(el, assert.type.any, value, assert.type.boolean);
    throw _abstract();
  }
  createTemplate(html) {
    throw _abstract();
  }
  createElement(tagName, doc = null) {
    throw _abstract();
  }
  createTextNode(text, doc = null) {
    assert.argumentTypes(text, assert.type.string, doc, assert.type.any);
    throw _abstract();
  }
  createScriptTag(attrName, attrValue, doc = null) {
    assert.argumentTypes(attrName, assert.type.string, attrValue, assert.type.string, doc, assert.type.any);
    throw _abstract();
  }
  createStyleElement(css, doc = null) {
    assert.argumentTypes(css, assert.type.string, doc, assert.type.any);
    throw _abstract();
  }
  createShadowRoot(el) {
    throw _abstract();
  }
  getShadowRoot(el) {
    throw _abstract();
  }
  clone(node) {
    throw _abstract();
  }
  hasProperty(element, name) {
    assert.argumentTypes(element, assert.type.any, name, assert.type.string);
    throw _abstract();
  }
  getElementsByClassName(element, name) {
    assert.argumentTypes(element, assert.type.any, name, assert.type.string);
    throw _abstract();
  }
  getElementsByTagName(element, name) {
    assert.argumentTypes(element, assert.type.any, name, assert.type.string);
    throw _abstract();
  }
  classList(element) {
    throw _abstract();
  }
  addClass(element, classname) {
    assert.argumentTypes(element, assert.type.any, classname, assert.type.string);
    throw _abstract();
  }
  removeClass(element, classname) {
    assert.argumentTypes(element, assert.type.any, classname, assert.type.string);
    throw _abstract();
  }
  hasClass(element, classname) {
    assert.argumentTypes(element, assert.type.any, classname, assert.type.string);
    throw _abstract();
  }
  setStyle(element, stylename, stylevalue) {
    assert.argumentTypes(element, assert.type.any, stylename, assert.type.string, stylevalue, assert.type.string);
    throw _abstract();
  }
  removeStyle(element, stylename) {
    assert.argumentTypes(element, assert.type.any, stylename, assert.type.string);
    throw _abstract();
  }
  getStyle(element, stylename) {
    assert.argumentTypes(element, assert.type.any, stylename, assert.type.string);
    throw _abstract();
  }
  tagName(element) {
    throw _abstract();
  }
  attributeMap(element) {
    throw _abstract();
  }
  getAttribute(element, attribute) {
    assert.argumentTypes(element, assert.type.any, attribute, assert.type.string);
    throw _abstract();
  }
  setAttribute(element, name, value) {
    assert.argumentTypes(element, assert.type.any, name, assert.type.string, value, assert.type.string);
    throw _abstract();
  }
  removeAttribute(element, attribute) {
    assert.argumentTypes(element, assert.type.any, attribute, assert.type.string);
    throw _abstract();
  }
  templateAwareRoot(el) {
    throw _abstract();
  }
  createHtmlDocument() {
    throw _abstract();
  }
  defaultDoc() {
    throw _abstract();
  }
  getTitle() {
    throw _abstract();
  }
  setTitle(newTitle) {
    assert.argumentTypes(newTitle, assert.type.string);
    throw _abstract();
  }
  elementMatches(n, selector) {
    assert.argumentTypes(n, assert.type.any, selector, assert.type.string);
    throw _abstract();
  }
  isTemplateElement(el) {
    assert.argumentTypes(el, assert.type.any);
    throw _abstract();
  }
  isTextNode(node) {
    throw _abstract();
  }
  isCommentNode(node) {
    throw _abstract();
  }
  isElementNode(node) {
    throw _abstract();
  }
  hasShadowRoot(node) {
    throw _abstract();
  }
  importIntoDoc(node) {
    throw _abstract();
  }
  isPageRule(rule) {
    throw _abstract();
  }
  isStyleRule(rule) {
    throw _abstract();
  }
  isMediaRule(rule) {
    throw _abstract();
  }
  isKeyframesRule(rule) {
    throw _abstract();
  }
  getHref(element) {
    throw _abstract();
  }
  resolveAndSetHref(element, baseUrl, href) {
    assert.argumentTypes(element, assert.type.any, baseUrl, assert.type.string, href, assert.type.string);
    throw _abstract();
  }
  cssToRules(css) {
    assert.argumentTypes(css, assert.type.string);
    throw _abstract();
  }
}
Object.defineProperty(DomAdapter, "annotations", {get: function() {
    return [new ABSTRACT()];
  }});
Object.defineProperty(DomAdapter.prototype.parse, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
Object.defineProperty(DomAdapter.prototype.query, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
Object.defineProperty(DomAdapter.prototype.querySelector, "parameters", {get: function() {
    return [[], [assert.type.string]];
  }});
Object.defineProperty(DomAdapter.prototype.querySelectorAll, "parameters", {get: function() {
    return [[], [assert.type.string]];
  }});
Object.defineProperty(DomAdapter.prototype.setText, "parameters", {get: function() {
    return [[], [assert.type.string]];
  }});
Object.defineProperty(DomAdapter.prototype.setValue, "parameters", {get: function() {
    return [[], [assert.type.string]];
  }});
Object.defineProperty(DomAdapter.prototype.setChecked, "parameters", {get: function() {
    return [[], [assert.type.boolean]];
  }});
Object.defineProperty(DomAdapter.prototype.createTextNode, "parameters", {get: function() {
    return [[assert.type.string], []];
  }});
Object.defineProperty(DomAdapter.prototype.createScriptTag, "parameters", {get: function() {
    return [[assert.type.string], [assert.type.string], []];
  }});
Object.defineProperty(DomAdapter.prototype.createStyleElement, "parameters", {get: function() {
    return [[assert.type.string], []];
  }});
Object.defineProperty(DomAdapter.prototype.hasProperty, "parameters", {get: function() {
    return [[], [assert.type.string]];
  }});
Object.defineProperty(DomAdapter.prototype.getElementsByClassName, "parameters", {get: function() {
    return [[], [assert.type.string]];
  }});
Object.defineProperty(DomAdapter.prototype.getElementsByTagName, "parameters", {get: function() {
    return [[], [assert.type.string]];
  }});
Object.defineProperty(DomAdapter.prototype.addClass, "parameters", {get: function() {
    return [[], [assert.type.string]];
  }});
Object.defineProperty(DomAdapter.prototype.removeClass, "parameters", {get: function() {
    return [[], [assert.type.string]];
  }});
Object.defineProperty(DomAdapter.prototype.hasClass, "parameters", {get: function() {
    return [[], [assert.type.string]];
  }});
Object.defineProperty(DomAdapter.prototype.setStyle, "parameters", {get: function() {
    return [[], [assert.type.string], [assert.type.string]];
  }});
Object.defineProperty(DomAdapter.prototype.removeStyle, "parameters", {get: function() {
    return [[], [assert.type.string]];
  }});
Object.defineProperty(DomAdapter.prototype.getStyle, "parameters", {get: function() {
    return [[], [assert.type.string]];
  }});
Object.defineProperty(DomAdapter.prototype.getAttribute, "parameters", {get: function() {
    return [[], [assert.type.string]];
  }});
Object.defineProperty(DomAdapter.prototype.setAttribute, "parameters", {get: function() {
    return [[], [assert.type.string], [assert.type.string]];
  }});
Object.defineProperty(DomAdapter.prototype.removeAttribute, "parameters", {get: function() {
    return [[], [assert.type.string]];
  }});
Object.defineProperty(DomAdapter.prototype.setTitle, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
Object.defineProperty(DomAdapter.prototype.elementMatches, "parameters", {get: function() {
    return [[], [assert.type.string]];
  }});
Object.defineProperty(DomAdapter.prototype.isTemplateElement, "parameters", {get: function() {
    return [[assert.type.any]];
  }});
Object.defineProperty(DomAdapter.prototype.resolveAndSetHref, "parameters", {get: function() {
    return [[], [assert.type.string], [assert.type.string]];
  }});
Object.defineProperty(DomAdapter.prototype.cssToRules, "parameters", {get: function() {
    return [[assert.type.string]];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/dom/dom_adapter.map

//# sourceMappingURL=./dom_adapter.map