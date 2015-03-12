var parse5Adapter = require('angular2/src/dom/parse5_adapter');
parse5Adapter.Parse5DomAdapter.makeCurrent();
"use strict";
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/test/core/compiler/selector_spec";
var $__angular2_47_test_95_lib__,
    $__angular2_47_src_47_dom_47_dom_95_adapter__,
    $__angular2_47_src_47_core_47_compiler_47_selector__,
    $__angular2_47_src_47_core_47_compiler_47_selector__,
    $__angular2_47_src_47_facade_47_collection__;
var $__0 = ($__angular2_47_test_95_lib__ = require("angular2/test_lib"), $__angular2_47_test_95_lib__ && $__angular2_47_test_95_lib__.__esModule && $__angular2_47_test_95_lib__ || {default: $__angular2_47_test_95_lib__}),
    describe = $__0.describe,
    it = $__0.it,
    expect = $__0.expect,
    beforeEach = $__0.beforeEach,
    ddescribe = $__0.ddescribe,
    iit = $__0.iit,
    xit = $__0.xit,
    el = $__0.el;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var SelectorMatcher = ($__angular2_47_src_47_core_47_compiler_47_selector__ = require("angular2/src/core/compiler/selector"), $__angular2_47_src_47_core_47_compiler_47_selector__ && $__angular2_47_src_47_core_47_compiler_47_selector__.__esModule && $__angular2_47_src_47_core_47_compiler_47_selector__ || {default: $__angular2_47_src_47_core_47_compiler_47_selector__}).SelectorMatcher;
var CssSelector = ($__angular2_47_src_47_core_47_compiler_47_selector__ = require("angular2/src/core/compiler/selector"), $__angular2_47_src_47_core_47_compiler_47_selector__ && $__angular2_47_src_47_core_47_compiler_47_selector__.__esModule && $__angular2_47_src_47_core_47_compiler_47_selector__ || {default: $__angular2_47_src_47_core_47_compiler_47_selector__}).CssSelector;
var $__4 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    List = $__4.List,
    ListWrapper = $__4.ListWrapper,
    MapWrapper = $__4.MapWrapper;
function main() {
  describe('SelectorMatcher', (function() {
    var matcher,
        matched,
        selectableCollector,
        s1,
        s2,
        s3,
        s4;
    function reset() {
      matched = ListWrapper.create();
    }
    beforeEach((function() {
      reset();
      s1 = s2 = s3 = s4 = null;
      selectableCollector = (function(selector, context) {
        ListWrapper.push(matched, selector);
        ListWrapper.push(matched, context);
      });
      matcher = new SelectorMatcher();
    }));
    it('should select by element name case insensitive', (function() {
      matcher.addSelectable(s1 = CssSelector.parse('someTag'), 1);
      matcher.match(CssSelector.parse('SOMEOTHERTAG'), selectableCollector);
      expect(matched).toEqual([]);
      matcher.match(CssSelector.parse('SOMETAG'), selectableCollector);
      expect(matched).toEqual([s1, 1]);
    }));
    it('should select by class name case insensitive', (function() {
      matcher.addSelectable(s1 = CssSelector.parse('.someClass'), 1);
      matcher.addSelectable(s2 = CssSelector.parse('.someClass.class2'), 2);
      matcher.match(CssSelector.parse('.SOMEOTHERCLASS'), selectableCollector);
      expect(matched).toEqual([]);
      matcher.match(CssSelector.parse('.SOMECLASS'), selectableCollector);
      expect(matched).toEqual([s1, 1]);
      reset();
      matcher.match(CssSelector.parse('.someClass.class2'), selectableCollector);
      expect(matched).toEqual([s1, 1, s2, 2]);
    }));
    it('should select by attr name case insensitive independent of the value', (function() {
      matcher.addSelectable(s1 = CssSelector.parse('[someAttr]'), 1);
      matcher.addSelectable(s2 = CssSelector.parse('[someAttr][someAttr2]'), 2);
      matcher.match(CssSelector.parse('[SOMEOTHERATTR]'), selectableCollector);
      expect(matched).toEqual([]);
      matcher.match(CssSelector.parse('[SOMEATTR]'), selectableCollector);
      expect(matched).toEqual([s1, 1]);
      reset();
      matcher.match(CssSelector.parse('[SOMEATTR=someValue]'), selectableCollector);
      expect(matched).toEqual([s1, 1]);
      reset();
      matcher.match(CssSelector.parse('[someAttr][someAttr2]'), selectableCollector);
      expect(matched).toEqual([s1, 1, s2, 2]);
    }));
    it('should select by attr name only once if the value is from the DOM', (function() {
      matcher.addSelectable(s1 = CssSelector.parse('[some-decor]'), 1);
      var elementSelector = new CssSelector();
      var element = el('<div attr></div>');
      var empty = DOM.getAttribute(element, 'attr');
      elementSelector.addAttribute('some-decor', empty);
      matcher.match(elementSelector, selectableCollector);
      expect(matched).toEqual([s1, 1]);
    }));
    it('should select by attr name and value case insensitive', (function() {
      matcher.addSelectable(s1 = CssSelector.parse('[someAttr=someValue]'), 1);
      matcher.match(CssSelector.parse('[SOMEATTR=SOMEOTHERATTR]'), selectableCollector);
      expect(matched).toEqual([]);
      matcher.match(CssSelector.parse('[SOMEATTR=SOMEVALUE]'), selectableCollector);
      expect(matched).toEqual([s1, 1]);
    }));
    it('should select by element name, class name and attribute name with value', (function() {
      matcher.addSelectable(s1 = CssSelector.parse('someTag.someClass[someAttr=someValue]'), 1);
      matcher.match(CssSelector.parse('someOtherTag.someOtherClass[someOtherAttr]'), selectableCollector);
      expect(matched).toEqual([]);
      matcher.match(CssSelector.parse('someTag.someOtherClass[someOtherAttr]'), selectableCollector);
      expect(matched).toEqual([]);
      matcher.match(CssSelector.parse('someTag.someClass[someOtherAttr]'), selectableCollector);
      expect(matched).toEqual([]);
      matcher.match(CssSelector.parse('someTag.someClass[someAttr]'), selectableCollector);
      expect(matched).toEqual([]);
      matcher.match(CssSelector.parse('someTag.someClass[someAttr=someValue]'), selectableCollector);
      expect(matched).toEqual([s1, 1]);
    }));
    it('should select independent of the order in the css selector', (function() {
      matcher.addSelectable(s1 = CssSelector.parse('[someAttr].someClass'), 1);
      matcher.addSelectable(s2 = CssSelector.parse('.someClass[someAttr]'), 2);
      matcher.addSelectable(s3 = CssSelector.parse('.class1.class2'), 3);
      matcher.addSelectable(s4 = CssSelector.parse('.class2.class1'), 4);
      matcher.match(CssSelector.parse('[someAttr].someClass'), selectableCollector);
      expect(matched).toEqual([s1, 1, s2, 2]);
      reset();
      matcher.match(CssSelector.parse('.someClass[someAttr]'), selectableCollector);
      expect(matched).toEqual([s1, 1, s2, 2]);
      reset();
      matcher.match(CssSelector.parse('.class1.class2'), selectableCollector);
      expect(matched).toEqual([s3, 3, s4, 4]);
      reset();
      matcher.match(CssSelector.parse('.class2.class1'), selectableCollector);
      expect(matched).toEqual([s4, 4, s3, 3]);
    }));
  }));
  describe('CssSelector.parse', (function() {
    it('should detect element names', (function() {
      var cssSelector = CssSelector.parse('sometag');
      expect(cssSelector.element).toEqual('sometag');
      expect(cssSelector.toString()).toEqual('sometag');
    }));
    it('should detect class names', (function() {
      var cssSelector = CssSelector.parse('.someClass');
      expect(cssSelector.classNames).toEqual(['someclass']);
      expect(cssSelector.toString()).toEqual('.someclass');
    }));
    it('should detect attr names', (function() {
      var cssSelector = CssSelector.parse('[attrname]');
      expect(cssSelector.attrs).toEqual(['attrname', '']);
      expect(cssSelector.toString()).toEqual('[attrname]');
    }));
    it('should detect attr values', (function() {
      var cssSelector = CssSelector.parse('[attrname=attrvalue]');
      expect(cssSelector.attrs).toEqual(['attrname', 'attrvalue']);
      expect(cssSelector.toString()).toEqual('[attrname=attrvalue]');
    }));
    it('should detect multiple parts', (function() {
      var cssSelector = CssSelector.parse('sometag[attrname=attrvalue].someclass');
      expect(cssSelector.element).toEqual('sometag');
      expect(cssSelector.attrs).toEqual(['attrname', 'attrvalue']);
      expect(cssSelector.classNames).toEqual(['someclass']);
      expect(cssSelector.toString()).toEqual('sometag.someclass[attrname=attrvalue]');
    }));
  }));
}

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/test/core/compiler/selector_spec.map

//# sourceMappingURL=./selector_spec.map
 main();