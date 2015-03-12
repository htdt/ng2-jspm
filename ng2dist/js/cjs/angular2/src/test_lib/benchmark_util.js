"use strict";
Object.defineProperties(module.exports, {
  getIntParameter: {get: function() {
      return getIntParameter;
    }},
  getStringParameter: {get: function() {
      return getStringParameter;
    }},
  bindAction: {get: function() {
      return bindAction;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/src/test_lib/benchmark_util";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_src_47_dom_47_browser_95_adapter__,
    $__angular2_47_src_47_facade_47_browser__,
    $__angular2_47_src_47_facade_47_lang__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var BrowserDomAdapter = ($__angular2_47_src_47_dom_47_browser_95_adapter__ = require("angular2/src/dom/browser_adapter"), $__angular2_47_src_47_dom_47_browser_95_adapter__ && $__angular2_47_src_47_dom_47_browser_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_browser_95_adapter__ || {default: $__angular2_47_src_47_dom_47_browser_95_adapter__}).BrowserDomAdapter;
var document = ($__angular2_47_src_47_facade_47_browser__ = require("angular2/src/facade/browser"), $__angular2_47_src_47_facade_47_browser__ && $__angular2_47_src_47_facade_47_browser__.__esModule && $__angular2_47_src_47_facade_47_browser__ || {default: $__angular2_47_src_47_facade_47_browser__}).document;
var $__3 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    NumberWrapper = $__3.NumberWrapper,
    BaseException = $__3.BaseException,
    isBlank = $__3.isBlank;
var DOM = new BrowserDomAdapter();
function getIntParameter(name) {
  assert.argumentTypes(name, assert.type.string);
  return NumberWrapper.parseInt(getStringParameter(name), 10);
}
Object.defineProperty(getIntParameter, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
function getStringParameter(name) {
  assert.argumentTypes(name, assert.type.string);
  var els = DOM.querySelectorAll(document, ("input[name=\"" + name + "\"]"));
  var value;
  var el;
  for (var i = 0; i < els.length; i++) {
    el = els[i];
    var type = DOM.type(el);
    if ((type !== 'radio' && type !== 'checkbox') || DOM.getChecked(el)) {
      value = DOM.getValue(el);
      break;
    }
  }
  if (isBlank(value)) {
    throw new BaseException(("Could not find and input field with name " + name));
  }
  return value;
}
Object.defineProperty(getStringParameter, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
function bindAction(selector, callback) {
  assert.argumentTypes(selector, assert.type.string, callback, Function);
  var el = DOM.querySelector(document, selector);
  DOM.on(el, 'click', function(_) {
    callback();
  });
}
Object.defineProperty(bindAction, "parameters", {get: function() {
    return [[assert.type.string], [Function]];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/test_lib/benchmark_util.map

//# sourceMappingURL=./benchmark_util.map