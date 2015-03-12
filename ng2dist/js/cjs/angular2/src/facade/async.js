"use strict";
Object.defineProperties(module.exports, {
  Promise: {get: function() {
      return Promise;
    }},
  PromiseWrapper: {get: function() {
      return PromiseWrapper;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/src/facade/async";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var $__1 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    int = $__1.int,
    global = $__1.global;
var List = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}).List;
var Promise = global.Promise;
var PromiseWrapper = function PromiseWrapper() {};
($traceurRuntime.createClass)(PromiseWrapper, {}, {
  resolve: function(obj) {
    return assert.returnType((Promise.resolve(obj)), Promise);
  },
  reject: function(obj) {
    return assert.returnType((Promise.reject(obj)), Promise);
  },
  catchError: function(promise, onError) {
    assert.argumentTypes(promise, Promise, onError, Function);
    return assert.returnType((promise.catch(onError)), Promise);
  },
  all: function(promises) {
    assert.argumentTypes(promises, List);
    if (promises.length == 0)
      return assert.returnType((Promise.resolve([])), Promise);
    return assert.returnType((Promise.all(promises)), Promise);
  },
  then: function(promise, success, rejection) {
    assert.argumentTypes(promise, Promise, success, Function, rejection, Function);
    return assert.returnType((promise.then(success, rejection)), Promise);
  },
  completer: function() {
    var resolve;
    var reject;
    var p = new Promise(function(res, rej) {
      resolve = res;
      reject = rej;
    });
    return {
      promise: p,
      resolve: resolve,
      reject: reject
    };
  },
  setTimeout: function(fn, millis) {
    assert.argumentTypes(fn, Function, millis, int);
    global.setTimeout(fn, millis);
  },
  isPromise: function(maybePromise) {
    return assert.returnType((maybePromise instanceof Promise), assert.type.boolean);
  }
});
Object.defineProperty(PromiseWrapper.catchError, "parameters", {get: function() {
    return [[Promise], [Function]];
  }});
Object.defineProperty(PromiseWrapper.all, "parameters", {get: function() {
    return [[List]];
  }});
Object.defineProperty(PromiseWrapper.then, "parameters", {get: function() {
    return [[Promise], [Function], [Function]];
  }});
Object.defineProperty(PromiseWrapper.setTimeout, "parameters", {get: function() {
    return [[Function], [int]];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/facade/async.map

//# sourceMappingURL=./async.map