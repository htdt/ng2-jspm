"use strict";
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var __moduleName = "benchmarks/src/compiler/selector_benchmark";
var $__angular2_47_src_47_core_47_compiler_47_selector__,
    $__angular2_47_src_47_core_47_compiler_47_selector__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_test_95_lib_47_benchmark_95_util__,
    $__angular2_47_src_47_dom_47_browser_95_adapter__;
var SelectorMatcher = ($__angular2_47_src_47_core_47_compiler_47_selector__ = require("angular2/src/core/compiler/selector"), $__angular2_47_src_47_core_47_compiler_47_selector__ && $__angular2_47_src_47_core_47_compiler_47_selector__.__esModule && $__angular2_47_src_47_core_47_compiler_47_selector__ || {default: $__angular2_47_src_47_core_47_compiler_47_selector__}).SelectorMatcher;
var CssSelector = ($__angular2_47_src_47_core_47_compiler_47_selector__ = require("angular2/src/core/compiler/selector"), $__angular2_47_src_47_core_47_compiler_47_selector__ && $__angular2_47_src_47_core_47_compiler_47_selector__.__esModule && $__angular2_47_src_47_core_47_compiler_47_selector__ || {default: $__angular2_47_src_47_core_47_compiler_47_selector__}).CssSelector;
var $__2 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    StringWrapper = $__2.StringWrapper,
    Math = $__2.Math;
var ListWrapper = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}).ListWrapper;
var $__4 = ($__angular2_47_src_47_test_95_lib_47_benchmark_95_util__ = require("angular2/src/test_lib/benchmark_util"), $__angular2_47_src_47_test_95_lib_47_benchmark_95_util__ && $__angular2_47_src_47_test_95_lib_47_benchmark_95_util__.__esModule && $__angular2_47_src_47_test_95_lib_47_benchmark_95_util__ || {default: $__angular2_47_src_47_test_95_lib_47_benchmark_95_util__}),
    getIntParameter = $__4.getIntParameter,
    bindAction = $__4.bindAction;
var BrowserDomAdapter = ($__angular2_47_src_47_dom_47_browser_95_adapter__ = require("angular2/src/dom/browser_adapter"), $__angular2_47_src_47_dom_47_browser_95_adapter__ && $__angular2_47_src_47_dom_47_browser_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_browser_95_adapter__ || {default: $__angular2_47_src_47_dom_47_browser_95_adapter__}).BrowserDomAdapter;
function main() {
  BrowserDomAdapter.makeCurrent();
  var count = getIntParameter('selectors');
  var fixedMatcher;
  var fixedSelectorStrings = [];
  var fixedSelectors = [];
  for (var i = 0; i < count; i++) {
    ListWrapper.push(fixedSelectorStrings, randomSelector());
  }
  for (var i = 0; i < count; i++) {
    ListWrapper.push(fixedSelectors, CssSelector.parse(fixedSelectorStrings[i]));
  }
  fixedMatcher = new SelectorMatcher();
  for (var i = 0; i < count; i++) {
    fixedMatcher.addSelectable(fixedSelectors[i], i);
  }
  function parse() {
    var result = [];
    for (var i = 0; i < count; i++) {
      ListWrapper.push(result, CssSelector.parse(fixedSelectorStrings[i]));
    }
    return result;
  }
  function addSelectable() {
    var matcher = new SelectorMatcher();
    for (var i = 0; i < count; i++) {
      matcher.addSelectable(fixedSelectors[i], i);
    }
    return matcher;
  }
  function match() {
    var matchCount = 0;
    for (var i = 0; i < count; i++) {
      fixedMatcher.match(fixedSelectors[i], (function(selector, selected) {
        matchCount += selected;
      }));
    }
    return matchCount;
  }
  bindAction('#parse', parse);
  bindAction('#addSelectable', addSelectable);
  bindAction('#match', match);
}
function randomSelector() {
  var res = randomStr(5);
  for (var i = 0; i < 3; i++) {
    res += '.' + randomStr(5);
  }
  for (var i = 0; i < 3; i++) {
    res += '[' + randomStr(3) + '=' + randomStr(6) + ']';
  }
  return res;
}
function randomStr(len) {
  var s = '';
  while (s.length < len) {
    s += randomChar();
  }
  return s;
}
function randomChar() {
  var n = randomNum(62);
  if (n < 10)
    return n.toString();
  if (n < 36)
    return StringWrapper.fromCharCode(n + 55);
  return StringWrapper.fromCharCode(n + 61);
}
function randomNum(max) {
  return Math.floor(Math.random() * max);
}

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/benchmarks/src/compiler/selector_benchmark.map

//# sourceMappingURL=./selector_benchmark.map