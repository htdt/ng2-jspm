"use strict";
Object.defineProperties(module.exports, {
  CssSelector: {get: function() {
      return CssSelector;
    }},
  SelectorMatcher: {get: function() {
      return SelectorMatcher;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/src/core/compiler/selector";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_facade_47_lang__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var $__1 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    List = $__1.List,
    Map = $__1.Map,
    ListWrapper = $__1.ListWrapper,
    MapWrapper = $__1.MapWrapper;
var $__2 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    isPresent = $__2.isPresent,
    isBlank = $__2.isBlank,
    RegExpWrapper = $__2.RegExpWrapper,
    RegExpMatcherWrapper = $__2.RegExpMatcherWrapper,
    StringWrapper = $__2.StringWrapper;
var _EMPTY_ATTR_VALUE = '';
var _SELECTOR_REGEXP = RegExpWrapper.create('^([-\\w]+)|' + '(?:\\.([-\\w]+))|' + '(?:\\[([-\\w*]+)(?:=([^\\]]*))?\\])');
var CssSelector = function CssSelector() {
  this.element = null;
  this.classNames = ListWrapper.create();
  this.attrs = ListWrapper.create();
};
var $CssSelector = CssSelector;
($traceurRuntime.createClass)(CssSelector, {
  setElement: function() {
    var element = arguments[0] !== (void 0) ? arguments[0] : null;
    assert.argumentTypes(element, assert.type.string);
    if (isPresent(element)) {
      element = element.toLowerCase();
    }
    this.element = element;
  },
  addAttribute: function(name) {
    var value = arguments[1] !== (void 0) ? arguments[1] : _EMPTY_ATTR_VALUE;
    assert.argumentTypes(name, assert.type.string, value, assert.type.string);
    ListWrapper.push(this.attrs, name.toLowerCase());
    if (isPresent(value)) {
      value = value.toLowerCase();
    } else {
      value = _EMPTY_ATTR_VALUE;
    }
    ListWrapper.push(this.attrs, value);
  },
  addClassName: function(name) {
    assert.argumentTypes(name, assert.type.string);
    ListWrapper.push(this.classNames, name.toLowerCase());
  },
  toString: function() {
    var res = '';
    if (isPresent(this.element)) {
      res += this.element;
    }
    if (isPresent(this.classNames)) {
      for (var i = 0; i < this.classNames.length; i++) {
        res += '.' + this.classNames[i];
      }
    }
    if (isPresent(this.attrs)) {
      for (var i = 0; i < this.attrs.length; ) {
        var attrName = this.attrs[i++];
        var attrValue = this.attrs[i++];
        res += '[' + attrName;
        if (attrValue.length > 0) {
          res += '=' + attrValue;
        }
        res += ']';
      }
    }
    return assert.returnType((res), assert.type.string);
  }
}, {parse: function(selector) {
    assert.argumentTypes(selector, assert.type.string);
    var cssSelector = new $CssSelector();
    var matcher = RegExpWrapper.matcher(_SELECTOR_REGEXP, selector);
    var match;
    while (isPresent(match = RegExpMatcherWrapper.next(matcher))) {
      if (isPresent(match[1])) {
        cssSelector.setElement(match[1]);
      }
      if (isPresent(match[2])) {
        cssSelector.addClassName(match[2]);
      }
      if (isPresent(match[3])) {
        cssSelector.addAttribute(match[3], match[4]);
      }
    }
    return assert.returnType((cssSelector), $CssSelector);
  }});
Object.defineProperty(CssSelector.parse, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
Object.defineProperty(CssSelector.prototype.setElement, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
Object.defineProperty(CssSelector.prototype.addAttribute, "parameters", {get: function() {
    return [[assert.type.string], [assert.type.string]];
  }});
Object.defineProperty(CssSelector.prototype.addClassName, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
var SelectorMatcher = function SelectorMatcher() {
  this._elementMap = MapWrapper.create();
  this._elementPartialMap = MapWrapper.create();
  this._classMap = MapWrapper.create();
  this._classPartialMap = MapWrapper.create();
  this._attrValueMap = MapWrapper.create();
  this._attrValuePartialMap = MapWrapper.create();
};
var $SelectorMatcher = SelectorMatcher;
($traceurRuntime.createClass)(SelectorMatcher, {
  addSelectable: function(cssSelector, callbackCtxt) {
    assert.argumentTypes(cssSelector, CssSelector, callbackCtxt, assert.type.any);
    var matcher = this;
    var element = cssSelector.element;
    var classNames = cssSelector.classNames;
    var attrs = cssSelector.attrs;
    var selectable = new SelectorContext(cssSelector, callbackCtxt);
    if (isPresent(element)) {
      var isTerminal = attrs.length === 0 && classNames.length === 0;
      if (isTerminal) {
        this._addTerminal(matcher._elementMap, element, selectable);
      } else {
        matcher = this._addPartial(matcher._elementPartialMap, element);
      }
    }
    if (isPresent(classNames)) {
      for (var index = 0; index < classNames.length; index++) {
        var isTerminal = attrs.length === 0 && index === classNames.length - 1;
        var className = classNames[index];
        if (isTerminal) {
          this._addTerminal(matcher._classMap, className, selectable);
        } else {
          matcher = this._addPartial(matcher._classPartialMap, className);
        }
      }
    }
    if (isPresent(attrs)) {
      for (var index = 0; index < attrs.length; ) {
        var isTerminal = index === attrs.length - 2;
        var attrName = attrs[index++];
        var attrValue = attrs[index++];
        var map = isTerminal ? matcher._attrValueMap : matcher._attrValuePartialMap;
        var valuesMap = MapWrapper.get(map, attrName);
        if (isBlank(valuesMap)) {
          valuesMap = MapWrapper.create();
          MapWrapper.set(map, attrName, valuesMap);
        }
        if (isTerminal) {
          this._addTerminal(valuesMap, attrValue, selectable);
        } else {
          matcher = this._addPartial(valuesMap, attrValue);
        }
      }
    }
  },
  _addTerminal: function(map, name, selectable) {
    assert.argumentTypes(map, assert.genericType(Map, assert.type.string, assert.type.string), name, assert.type.string, selectable, assert.type.any);
    var terminalList = MapWrapper.get(map, name);
    if (isBlank(terminalList)) {
      terminalList = ListWrapper.create();
      MapWrapper.set(map, name, terminalList);
    }
    ListWrapper.push(terminalList, selectable);
  },
  _addPartial: function(map, name) {
    assert.argumentTypes(map, assert.genericType(Map, assert.type.string, assert.type.string), name, assert.type.string);
    var matcher = MapWrapper.get(map, name);
    if (isBlank(matcher)) {
      matcher = new $SelectorMatcher();
      MapWrapper.set(map, name, matcher);
    }
    return matcher;
  },
  match: function(cssSelector, matchedCallback) {
    assert.argumentTypes(cssSelector, CssSelector, matchedCallback, Function);
    var element = cssSelector.element;
    var classNames = cssSelector.classNames;
    var attrs = cssSelector.attrs;
    this._matchTerminal(this._elementMap, element, matchedCallback);
    this._matchPartial(this._elementPartialMap, element, cssSelector, matchedCallback);
    if (isPresent(classNames)) {
      for (var index = 0; index < classNames.length; index++) {
        var className = classNames[index];
        this._matchTerminal(this._classMap, className, matchedCallback);
        this._matchPartial(this._classPartialMap, className, cssSelector, matchedCallback);
      }
    }
    if (isPresent(attrs)) {
      for (var index = 0; index < attrs.length; ) {
        var attrName = attrs[index++];
        var attrValue = attrs[index++];
        var valuesMap = MapWrapper.get(this._attrValueMap, attrName);
        if (!StringWrapper.equals(attrValue, _EMPTY_ATTR_VALUE)) {
          this._matchTerminal(valuesMap, _EMPTY_ATTR_VALUE, matchedCallback);
        }
        this._matchTerminal(valuesMap, attrValue, matchedCallback);
        valuesMap = MapWrapper.get(this._attrValuePartialMap, attrName);
        this._matchPartial(valuesMap, attrValue, cssSelector, matchedCallback);
      }
    }
  },
  _matchTerminal: function() {
    var map = arguments[0] !== (void 0) ? arguments[0] : null;
    var name = arguments[1];
    var matchedCallback = arguments[2];
    assert.argumentTypes(map, assert.genericType(Map, assert.type.string, assert.type.string), name, assert.type.any, matchedCallback, assert.type.any);
    if (isBlank(map) || isBlank(name)) {
      return ;
    }
    var selectables = MapWrapper.get(map, name);
    if (isBlank(selectables)) {
      return ;
    }
    var selectable;
    for (var index = 0; index < selectables.length; index++) {
      selectable = selectables[index];
      matchedCallback(selectable.selector, selectable.cbContext);
    }
  },
  _matchPartial: function() {
    var map = arguments[0] !== (void 0) ? arguments[0] : null;
    var name = arguments[1];
    var cssSelector = arguments[2];
    var matchedCallback = arguments[3];
    assert.argumentTypes(map, assert.genericType(Map, assert.type.string, assert.type.string), name, assert.type.any, cssSelector, assert.type.any, matchedCallback, assert.type.any);
    if (isBlank(map) || isBlank(name)) {
      return ;
    }
    var nestedSelector = MapWrapper.get(map, name);
    if (isBlank(nestedSelector)) {
      return ;
    }
    nestedSelector.match(cssSelector, matchedCallback);
  }
}, {});
Object.defineProperty(SelectorMatcher.prototype.addSelectable, "parameters", {get: function() {
    return [[CssSelector], []];
  }});
Object.defineProperty(SelectorMatcher.prototype._addTerminal, "parameters", {get: function() {
    return [[assert.genericType(Map, assert.type.string, assert.type.string)], [assert.type.string], []];
  }});
Object.defineProperty(SelectorMatcher.prototype._addPartial, "parameters", {get: function() {
    return [[assert.genericType(Map, assert.type.string, assert.type.string)], [assert.type.string]];
  }});
Object.defineProperty(SelectorMatcher.prototype.match, "parameters", {get: function() {
    return [[CssSelector], [Function]];
  }});
Object.defineProperty(SelectorMatcher.prototype._matchTerminal, "parameters", {get: function() {
    return [[assert.genericType(Map, assert.type.string, assert.type.string)], [], []];
  }});
Object.defineProperty(SelectorMatcher.prototype._matchPartial, "parameters", {get: function() {
    return [[assert.genericType(Map, assert.type.string, assert.type.string)], [], [], []];
  }});
var SelectorContext = function SelectorContext(selector, cbContext) {
  assert.argumentTypes(selector, CssSelector, cbContext, assert.type.any);
  this.selector = selector;
  this.cbContext = cbContext;
};
($traceurRuntime.createClass)(SelectorContext, {}, {});
Object.defineProperty(SelectorContext, "parameters", {get: function() {
    return [[CssSelector], []];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/core/compiler/selector.map

//# sourceMappingURL=./selector.map