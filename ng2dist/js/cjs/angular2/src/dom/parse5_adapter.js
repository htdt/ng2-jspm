"use strict";
Object.defineProperties(module.exports, {
  Parse5DomAdapter: {get: function() {
      return Parse5DomAdapter;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/src/dom/parse5_adapter";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_dom_47_dom_95_adapter__,
    $__angular2_47_src_47_facade_47_lang__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var parse5 = require('parse5');
var parser = new parse5.Parser(parse5.TreeAdapters.htmlparser2);
var serializer = new parse5.Serializer(parse5.TreeAdapters.htmlparser2);
var treeAdapter = parser.treeAdapter;
var cssParse = require('css-parse');
var url = require('url');
var $__1 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    List = $__1.List,
    MapWrapper = $__1.MapWrapper,
    ListWrapper = $__1.ListWrapper,
    StringMapWrapper = $__1.StringMapWrapper;
var $__2 = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("./dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}),
    DomAdapter = $__2.DomAdapter,
    setRootDomAdapter = $__2.setRootDomAdapter;
var $__3 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    BaseException = $__3.BaseException,
    isPresent = $__3.isPresent,
    isBlank = $__3.isBlank;
var _attrToPropMap = {
  'inner-html': 'innerHTML',
  'readonly': 'readOnly',
  'tabindex': 'tabIndex'
};
var defDoc = null;
function _notImplemented(methodName) {
  return new BaseException('This method is not implemented in Parse5DomAdapter: ' + methodName);
}
var Parse5DomAdapter = function Parse5DomAdapter() {
  $traceurRuntime.superConstructor($Parse5DomAdapter).apply(this, arguments);
};
var $Parse5DomAdapter = Parse5DomAdapter;
($traceurRuntime.createClass)(Parse5DomAdapter, {
  get attrToPropMap() {
    return _attrToPropMap;
  },
  query: function(selector) {
    throw _notImplemented('query');
  },
  querySelector: function(el, selector) {
    assert.argumentTypes(el, assert.type.any, selector, assert.type.string);
    throw _notImplemented('querySelector');
  },
  querySelectorAll: function(el, selector) {
    var $__4 = this;
    assert.argumentTypes(el, assert.type.any, selector, assert.type.string);
    var res = ListWrapper.create();
    var _recursive = (function(result, node, className) {
      if ($__4.hasClass(node, className)) {
        ListWrapper.push(result, node);
      }
      var cNodes = node.childNodes;
      if (cNodes && cNodes.length > 0) {
        for (var i = 0; i < cNodes.length; i++) {
          _recursive(result, cNodes[i], className);
        }
      }
    });
    _recursive(res, el, selector.substring(1));
    return res;
  },
  on: function(el, evt, listener) {
    throw _notImplemented('on');
  },
  dispatchEvent: function(el, evt) {
    throw _notImplemented('dispatchEvent');
  },
  createMouseEvent: function(eventType) {
    throw _notImplemented('createMouseEvent');
  },
  createEvent: function(eventType) {
    throw _notImplemented('createEvent');
  },
  getInnerHTML: function(el) {
    return serializer.serialize(this.templateAwareRoot(el));
  },
  getOuterHTML: function(el) {
    serializer.html = '';
    serializer._serializeElement(el);
    return serializer.html;
  },
  nodeName: function(node) {
    return assert.returnType((node.tagName), assert.type.string);
  },
  nodeValue: function(node) {
    return assert.returnType((node.nodeValue), assert.type.string);
  },
  type: function(node) {
    assert.argumentTypes(node, assert.type.string);
    throw _notImplemented('type');
  },
  content: function(node) {
    return node.childNodes[0];
  },
  firstChild: function(el) {
    return el.firstChild;
  },
  nextSibling: function(el) {
    return el.nextSibling;
  },
  parentElement: function(el) {
    return el.parent;
  },
  childNodes: function(el) {
    return el.childNodes;
  },
  childNodesAsList: function(el) {
    var childNodes = el.childNodes;
    var res = ListWrapper.createFixedSize(childNodes.length);
    for (var i = 0; i < childNodes.length; i++) {
      res[i] = childNodes[i];
    }
    return assert.returnType((res), List);
  },
  clearNodes: function(el) {
    while (el.childNodes.length > 0) {
      this.remove(el.childNodes[0]);
    }
  },
  appendChild: function(el, node) {
    this.remove(node);
    treeAdapter.appendChild(this.templateAwareRoot(el), node);
  },
  removeChild: function(el, node) {
    if (ListWrapper.contains(el.childNodes, node)) {
      this.remove(node);
    }
  },
  remove: function(el) {
    var parent = el.parent;
    if (parent) {
      var index = parent.childNodes.indexOf(el);
      parent.childNodes.splice(index, 1);
    }
    var prev = el.previousSibling;
    var next = el.nextSibling;
    if (prev) {
      prev.next = next;
    }
    if (next) {
      next.prev = prev;
    }
    el.prev = null;
    el.next = null;
    el.parent = null;
    return el;
  },
  insertBefore: function(el, node) {
    this.remove(node);
    treeAdapter.insertBefore(el.parent, node, el);
  },
  insertAllBefore: function(el, nodes) {
    var $__4 = this;
    ListWrapper.forEach(nodes, (function(n) {
      $__4.insertBefore(el, n);
    }));
  },
  insertAfter: function(el, node) {
    if (el.nextSibling) {
      this.insertBefore(el.nextSibling, node);
    } else {
      this.appendChild(el.parent, node);
    }
  },
  setInnerHTML: function(el, value) {
    this.clearNodes(el);
    var content = parser.parseFragment(value);
    for (var i = 0; i < content.childNodes.length; i++) {
      treeAdapter.appendChild(el, content.childNodes[i]);
    }
  },
  getText: function(el) {
    if (this.isTextNode(el)) {
      return el.data;
    } else if (el.childNodes.length == 0) {
      return "";
    } else {
      var textContent = "";
      for (var i = 0; i < el.childNodes.length; i++) {
        textContent += this.getText(el.childNodes[i]);
      }
      return textContent;
    }
  },
  setText: function(el, value) {
    assert.argumentTypes(el, assert.type.any, value, assert.type.string);
    if (this.isTextNode(el)) {
      el.data = value;
    } else {
      this.clearNodes(el);
      treeAdapter.insertText(el, value);
    }
  },
  getValue: function(el) {
    return el.value;
  },
  setValue: function(el, value) {
    assert.argumentTypes(el, assert.type.any, value, assert.type.string);
    el.value = value;
  },
  getChecked: function(el) {
    return el.checked;
  },
  setChecked: function(el, value) {
    assert.argumentTypes(el, assert.type.any, value, assert.type.boolean);
    el.checked = value;
  },
  createTemplate: function(html) {
    var template = treeAdapter.createElement("template", 'http://www.w3.org/1999/xhtml', []);
    var content = parser.parseFragment(html);
    treeAdapter.appendChild(template, content);
    return template;
  },
  createElement: function(tagName) {
    return treeAdapter.createElement(tagName, 'http://www.w3.org/1999/xhtml', []);
  },
  createTextNode: function(text) {
    assert.argumentTypes(text, assert.type.string);
    throw _notImplemented('createTextNode');
  },
  createScriptTag: function(attrName, attrValue) {
    assert.argumentTypes(attrName, assert.type.string, attrValue, assert.type.string);
    return treeAdapter.createElement("script", 'http://www.w3.org/1999/xhtml', [{
      name: attrName,
      value: attrValue
    }]);
  },
  createStyleElement: function(css) {
    assert.argumentTypes(css, assert.type.string);
    var style = this.createElement('style');
    this.setText(style, css);
    return style;
  },
  createShadowRoot: function(el) {
    el.shadowRoot = treeAdapter.createDocumentFragment();
    el.shadowRoot.parent = el;
    return el.shadowRoot;
  },
  getShadowRoot: function(el) {
    return el.shadowRoot;
  },
  clone: function(node) {
    var temp = treeAdapter.createElement("template", null, []);
    treeAdapter.appendChild(temp, node);
    var serialized = serializer.serialize(temp);
    var newParser = new parse5.Parser(parse5.TreeAdapters.htmlparser2);
    return newParser.parseFragment(serialized).childNodes[0];
  },
  hasProperty: function(element, name) {
    assert.argumentTypes(element, assert.type.any, name, assert.type.string);
    return _HTMLElementPropertyList.indexOf(name) > -1;
  },
  getElementsByClassName: function(element, name) {
    assert.argumentTypes(element, assert.type.any, name, assert.type.string);
    return this.querySelectorAll(element, "." + name);
  },
  getElementsByTagName: function(element, name) {
    assert.argumentTypes(element, assert.type.any, name, assert.type.string);
    throw _notImplemented('getElementsByTagName');
  },
  classList: function(element) {
    var classAttrValue = null;
    var attributes = element.attribs;
    if (attributes && attributes.hasOwnProperty("class")) {
      classAttrValue = attributes["class"];
    }
    return assert.returnType((classAttrValue ? classAttrValue.trim().split(/\s+/g) : []), List);
  },
  addClass: function(element, classname) {
    assert.argumentTypes(element, assert.type.any, classname, assert.type.string);
    var classList = this.classList(element);
    var index = classList.indexOf(classname);
    if (index == -1) {
      ListWrapper.push(classList, classname);
      element.attribs["class"] = element.className = ListWrapper.join(classList, " ");
    }
  },
  removeClass: function(element, classname) {
    assert.argumentTypes(element, assert.type.any, classname, assert.type.string);
    var classList = this.classList(element);
    var index = classList.indexOf(classname);
    if (index > -1) {
      classList.splice(index, 1);
      element.attribs["class"] = element.className = ListWrapper.join(classList, " ");
    }
  },
  hasClass: function(element, classname) {
    assert.argumentTypes(element, assert.type.any, classname, assert.type.string);
    return ListWrapper.contains(this.classList(element), classname);
  },
  _readStyleAttribute: function(element) {
    var styleMap = {};
    var attributes = element.attribs;
    if (attributes && attributes.hasOwnProperty("style")) {
      var styleAttrValue = attributes["style"];
      var styleList = styleAttrValue.split(/;+/g);
      for (var i = 0; i < styleList.length; i++) {
        if (styleList[i].length > 0) {
          var elems = styleList[i].split(/:+/g);
          styleMap[elems[0].trim()] = elems[1].trim();
        }
      }
    }
    return styleMap;
  },
  _writeStyleAttribute: function(element, styleMap) {
    var styleAttrValue = "";
    for (var key = void 0 in styleMap) {
      var newValue = styleMap[key];
      if (newValue && newValue.length > 0) {
        styleAttrValue += key + ":" + styleMap[key] + ";";
      }
    }
    element.attribs["style"] = styleAttrValue;
  },
  setStyle: function(element, stylename, stylevalue) {
    assert.argumentTypes(element, assert.type.any, stylename, assert.type.string, stylevalue, assert.type.string);
    var styleMap = this._readStyleAttribute(element);
    styleMap[stylename] = stylevalue;
    this._writeStyleAttribute(element, styleMap);
  },
  removeStyle: function(element, stylename) {
    assert.argumentTypes(element, assert.type.any, stylename, assert.type.string);
    this.setStyle(element, stylename, null);
  },
  getStyle: function(element, stylename) {
    assert.argumentTypes(element, assert.type.any, stylename, assert.type.string);
    var styleMap = this._readStyleAttribute(element);
    return styleMap.hasOwnProperty(stylename) ? styleMap[stylename] : "";
  },
  tagName: function(element) {
    return assert.returnType((element.tagName == "style" ? "STYLE" : element.tagName), assert.type.string);
  },
  attributeMap: function(element) {
    var res = MapWrapper.create();
    var elAttrs = treeAdapter.getAttrList(element);
    for (var i = 0; i < elAttrs.length; i++) {
      var attrib = elAttrs[i];
      MapWrapper.set(res, attrib.name, attrib.value);
    }
    return res;
  },
  getAttribute: function(element, attribute) {
    assert.argumentTypes(element, assert.type.any, attribute, assert.type.string);
    return element.attribs.hasOwnProperty(attribute) ? element.attribs[attribute] : null;
  },
  setAttribute: function(element, attribute, value) {
    assert.argumentTypes(element, assert.type.any, attribute, assert.type.string, value, assert.type.string);
    if (attribute) {
      element.attribs[attribute] = value;
    }
  },
  removeAttribute: function(element, attribute) {
    assert.argumentTypes(element, assert.type.any, attribute, assert.type.string);
    if (attribute) {
      delete element.attribs[attribute];
    }
  },
  templateAwareRoot: function(el) {
    return this.isTemplateElement(el) ? this.content(el) : el;
  },
  createHtmlDocument: function() {
    throw _notImplemented('createHtmlDocument');
  },
  defaultDoc: function() {
    if (defDoc === null) {
      defDoc = StringMapWrapper.create();
      StringMapWrapper.set(defDoc, "head", treeAdapter.createElement("head", null, []));
    }
    return defDoc;
  },
  elementMatches: function(n, selector) {
    assert.argumentTypes(n, assert.type.any, selector, assert.type.string);
    if (selector && selector.charAt(0) == ".") {
      return assert.returnType((this.hasClass(n, selector.substring(1))), assert.type.boolean);
    } else {
      return assert.returnType((n.tagName == selector), assert.type.boolean);
    }
  },
  isTemplateElement: function(el) {
    assert.argumentTypes(el, assert.type.any);
    return assert.returnType((this.isElementNode(el) && this.tagName(el) === "template"), assert.type.boolean);
  },
  isTextNode: function(node) {
    return assert.returnType((treeAdapter.isTextNode(node)), assert.type.boolean);
  },
  isCommentNode: function(node) {
    throw treeAdapter.isCommentNode(node);
  },
  isElementNode: function(node) {
    return assert.returnType((node ? treeAdapter.isElementNode(node) : false), assert.type.boolean);
  },
  hasShadowRoot: function(node) {
    return assert.returnType((isPresent(node.shadowRoot)), assert.type.boolean);
  },
  importIntoDoc: function(node) {
    return this.clone(node);
  },
  isPageRule: function(rule) {
    return assert.returnType((rule.type === 6), assert.type.boolean);
  },
  isStyleRule: function(rule) {
    return assert.returnType((rule.type === 1), assert.type.boolean);
  },
  isMediaRule: function(rule) {
    return assert.returnType((rule.type === 4), assert.type.boolean);
  },
  isKeyframesRule: function(rule) {
    return assert.returnType((rule.type === 7), assert.type.boolean);
  },
  getHref: function(el) {
    return assert.returnType((el.href), assert.type.string);
  },
  resolveAndSetHref: function(el, baseUrl, href) {
    assert.argumentTypes(el, assert.type.any, baseUrl, assert.type.string, href, assert.type.string);
    if (href == null) {
      el.href = baseUrl;
    } else {
      el.href = url.resolve(baseUrl, href);
    }
  },
  _buildRules: function(parsedRules, css) {
    var rules = ListWrapper.create();
    for (var i = 0; i < parsedRules.length; i++) {
      var parsedRule = parsedRules[i];
      var rule = {cssText: css};
      rule.style = {
        content: "",
        cssText: ""
      };
      if (parsedRule.type == "rule") {
        rule.type = 1;
        rule.selectorText = parsedRule.selectors.join(", ").replace(/\s{2,}/g, " ").replace(/\s*~\s*/g, " ~ ").replace(/\s*\+\s*/g, " + ").replace(/\s*>\s*/g, " > ").replace(/\[(\w+)=(\w+)\]/g, '[$1="$2"]');
        if (isBlank(parsedRule.declarations)) {
          continue;
        }
        for (var j = 0; j < parsedRule.declarations.length; j++) {
          var declaration = parsedRule.declarations[j];
          rule.style[declaration.property] = declaration.value;
          rule.style.cssText += declaration.property + ": " + declaration.value + ";";
        }
      } else if (parsedRule.type == "media") {
        rule.type = 4;
        rule.media = {mediaText: parsedRule.media};
        if (parsedRule.rules) {
          rule.cssRules = this._buildRules(parsedRule.rules);
        }
      }
      ListWrapper.push(rules, rule);
    }
    return rules;
  },
  cssToRules: function(css) {
    assert.argumentTypes(css, assert.type.string);
    css = css.replace(/url\(\'(.+)\'\)/g, 'url($1)');
    var rules = ListWrapper.create();
    var parsedCSS = cssParse(css, {silent: true});
    if (parsedCSS.stylesheet && parsedCSS.stylesheet.rules) {
      rules = this._buildRules(parsedCSS.stylesheet.rules, css);
    }
    return assert.returnType((rules), List);
  }
}, {makeCurrent: function() {
    setRootDomAdapter(new $Parse5DomAdapter());
  }}, DomAdapter);
Object.defineProperty(Parse5DomAdapter.prototype.querySelector, "parameters", {get: function() {
    return [[], [assert.type.string]];
  }});
Object.defineProperty(Parse5DomAdapter.prototype.querySelectorAll, "parameters", {get: function() {
    return [[], [assert.type.string]];
  }});
Object.defineProperty(Parse5DomAdapter.prototype.type, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
Object.defineProperty(Parse5DomAdapter.prototype.setText, "parameters", {get: function() {
    return [[], [assert.type.string]];
  }});
Object.defineProperty(Parse5DomAdapter.prototype.setValue, "parameters", {get: function() {
    return [[], [assert.type.string]];
  }});
Object.defineProperty(Parse5DomAdapter.prototype.setChecked, "parameters", {get: function() {
    return [[], [assert.type.boolean]];
  }});
Object.defineProperty(Parse5DomAdapter.prototype.createTextNode, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
Object.defineProperty(Parse5DomAdapter.prototype.createScriptTag, "parameters", {get: function() {
    return [[assert.type.string], [assert.type.string]];
  }});
Object.defineProperty(Parse5DomAdapter.prototype.createStyleElement, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
Object.defineProperty(Parse5DomAdapter.prototype.hasProperty, "parameters", {get: function() {
    return [[], [assert.type.string]];
  }});
Object.defineProperty(Parse5DomAdapter.prototype.getElementsByClassName, "parameters", {get: function() {
    return [[], [assert.type.string]];
  }});
Object.defineProperty(Parse5DomAdapter.prototype.getElementsByTagName, "parameters", {get: function() {
    return [[], [assert.type.string]];
  }});
Object.defineProperty(Parse5DomAdapter.prototype.addClass, "parameters", {get: function() {
    return [[], [assert.type.string]];
  }});
Object.defineProperty(Parse5DomAdapter.prototype.removeClass, "parameters", {get: function() {
    return [[], [assert.type.string]];
  }});
Object.defineProperty(Parse5DomAdapter.prototype.hasClass, "parameters", {get: function() {
    return [[], [assert.type.string]];
  }});
Object.defineProperty(Parse5DomAdapter.prototype.setStyle, "parameters", {get: function() {
    return [[], [assert.type.string], [assert.type.string]];
  }});
Object.defineProperty(Parse5DomAdapter.prototype.removeStyle, "parameters", {get: function() {
    return [[], [assert.type.string]];
  }});
Object.defineProperty(Parse5DomAdapter.prototype.getStyle, "parameters", {get: function() {
    return [[], [assert.type.string]];
  }});
Object.defineProperty(Parse5DomAdapter.prototype.getAttribute, "parameters", {get: function() {
    return [[], [assert.type.string]];
  }});
Object.defineProperty(Parse5DomAdapter.prototype.setAttribute, "parameters", {get: function() {
    return [[], [assert.type.string], [assert.type.string]];
  }});
Object.defineProperty(Parse5DomAdapter.prototype.removeAttribute, "parameters", {get: function() {
    return [[], [assert.type.string]];
  }});
Object.defineProperty(Parse5DomAdapter.prototype.elementMatches, "parameters", {get: function() {
    return [[], [assert.type.string]];
  }});
Object.defineProperty(Parse5DomAdapter.prototype.isTemplateElement, "parameters", {get: function() {
    return [[assert.type.any]];
  }});
Object.defineProperty(Parse5DomAdapter.prototype.resolveAndSetHref, "parameters", {get: function() {
    return [[], [assert.type.string], [assert.type.string]];
  }});
Object.defineProperty(Parse5DomAdapter.prototype.cssToRules, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
var _HTMLElementPropertyList = ["webkitEntries", "incremental", "webkitdirectory", "selectionDirection", "selectionEnd", "selectionStart", "labels", "validationMessage", "validity", "willValidate", "width", "valueAsNumber", "valueAsDate", "value", "useMap", "defaultValue", "type", "step", "src", "size", "required", "readOnly", "placeholder", "pattern", "name", "multiple", "min", "minLength", "maxLength", "max", "list", "indeterminate", "height", "formTarget", "formNoValidate", "formMethod", "formEnctype", "formAction", "files", "form", "disabled", "dirName", "checked", "defaultChecked", "autofocus", "autocomplete", "alt", "align", "accept", "onautocompleteerror", "onautocomplete", "onwaiting", "onvolumechange", "ontoggle", "ontimeupdate", "onsuspend", "onsubmit", "onstalled", "onshow", "onselect", "onseeking", "onseeked", "onscroll", "onresize", "onreset", "onratechange", "onprogress", "onplaying", "onplay", "onpause", "onmousewheel", "onmouseup", "onmouseover", "onmouseout", "onmousemove", "onmouseleave", "onmouseenter", "onmousedown", "onloadstart", "onloadedmetadata", "onloadeddata", "onload", "onkeyup", "onkeypress", "onkeydown", "oninvalid", "oninput", "onfocus", "onerror", "onended", "onemptied", "ondurationchange", "ondrop", "ondragstart", "ondragover", "ondragleave", "ondragenter", "ondragend", "ondrag", "ondblclick", "oncuechange", "oncontextmenu", "onclose", "onclick", "onchange", "oncanplaythrough", "oncanplay", "oncancel", "onblur", "onabort", "spellcheck", "isContentEditable", "contentEditable", "outerText", "innerText", "accessKey", "hidden", "webkitdropzone", "draggable", "tabIndex", "dir", "translate", "lang", "title", "childElementCount", "lastElementChild", "firstElementChild", "children", "onwebkitfullscreenerror", "onwebkitfullscreenchange", "nextElementSibling", "previousElementSibling", "onwheel", "onselectstart", "onsearch", "onpaste", "oncut", "oncopy", "onbeforepaste", "onbeforecut", "onbeforecopy", "shadowRoot", "dataset", "classList", "className", "outerHTML", "innerHTML", "scrollHeight", "scrollWidth", "scrollTop", "scrollLeft", "clientHeight", "clientWidth", "clientTop", "clientLeft", "offsetParent", "offsetHeight", "offsetWidth", "offsetTop", "offsetLeft", "localName", "prefix", "namespaceURI", "id", "style", "attributes", "tagName", "parentElement", "textContent", "baseURI", "ownerDocument", "nextSibling", "previousSibling", "lastChild", "firstChild", "childNodes", "parentNode", "nodeType", "nodeValue", "nodeName", "closure_lm_714617", "__jsaction"];

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/dom/parse5_adapter.map

//# sourceMappingURL=./parse5_adapter.map