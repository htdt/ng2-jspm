"use strict";
Object.defineProperties(module.exports, {
  XHRImpl: {get: function() {
      return XHRImpl;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/src/core/compiler/xhr/xhr_impl";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_src_47_facade_47_async__,
    $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var $__1 = ($__angular2_47_src_47_facade_47_async__ = require("angular2/src/facade/async"), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}),
    Promise = $__1.Promise,
    PromiseWrapper = $__1.PromiseWrapper;
var XHR = ($__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr__ = require("./xhr"), $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr__ && $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr__.__esModule && $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr__ || {default: $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr__}).XHR;
var XHRImpl = function XHRImpl() {
  $traceurRuntime.superConstructor($XHRImpl).apply(this, arguments);
};
var $XHRImpl = XHRImpl;
($traceurRuntime.createClass)(XHRImpl, {get: function(url) {
    assert.argumentTypes(url, assert.type.string);
    var completer = PromiseWrapper.completer();
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'text';
    xhr.onload = function() {
      var status = xhr.status;
      if (200 <= status && status <= 300) {
        completer.resolve(xhr.responseText);
      } else {
        completer.reject(("Failed to load " + url));
      }
    };
    xhr.onerror = function() {
      completer.reject(("Failed to load " + url));
    };
    xhr.send();
    return assert.returnType((completer.promise), assert.genericType(Promise, assert.type.string));
  }}, {}, XHR);
Object.defineProperty(XHRImpl.prototype.get, "parameters", {get: function() {
    return [[assert.type.string]];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/core/compiler/xhr/xhr_impl.map

//# sourceMappingURL=./xhr_impl.map