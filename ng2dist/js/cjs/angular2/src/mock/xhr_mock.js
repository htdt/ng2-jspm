"use strict";
Object.defineProperties(module.exports, {
  XHRMock: {get: function() {
      return XHRMock;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/src/mock/xhr_mock";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_async__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var XHR = ($__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr__ = require("angular2/src/core/compiler/xhr/xhr"), $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr__ && $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr__.__esModule && $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr__ || {default: $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr__}).XHR;
var $__2 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    List = $__2.List,
    ListWrapper = $__2.ListWrapper,
    Map = $__2.Map,
    MapWrapper = $__2.MapWrapper;
var $__3 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    isBlank = $__3.isBlank,
    isPresent = $__3.isPresent,
    normalizeBlank = $__3.normalizeBlank,
    BaseException = $__3.BaseException;
var $__4 = ($__angular2_47_src_47_facade_47_async__ = require("angular2/src/facade/async"), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}),
    PromiseWrapper = $__4.PromiseWrapper,
    Promise = $__4.Promise;
var XHRMock = function XHRMock() {
  $traceurRuntime.superConstructor($XHRMock).call(this);
  this._expectations = [];
  this._definitions = MapWrapper.create();
  this._requests = [];
};
var $XHRMock = XHRMock;
($traceurRuntime.createClass)(XHRMock, {
  get: function(url) {
    assert.argumentTypes(url, assert.type.string);
    var request = new _PendingRequest(url);
    ListWrapper.push(this._requests, request);
    return assert.returnType((request.getPromise()), assert.genericType(Promise, assert.type.string));
  },
  expect: function(url, response) {
    assert.argumentTypes(url, assert.type.string, response, assert.type.string);
    var expectation = new _Expectation(url, response);
    ListWrapper.push(this._expectations, expectation);
  },
  when: function(url, response) {
    assert.argumentTypes(url, assert.type.string, response, assert.type.string);
    MapWrapper.set(this._definitions, url, response);
  },
  flush: function() {
    if (this._requests.length === 0) {
      throw new BaseException('No pending requests to flush');
    }
    do {
      var request = ListWrapper.removeAt(this._requests, 0);
      this._processRequest(request);
    } while (this._requests.length > 0);
    this.verifyNoOustandingExpectations();
  },
  verifyNoOustandingExpectations: function() {
    if (this._expectations.length === 0)
      return ;
    var urls = [];
    for (var i = 0; i < this._expectations.length; i++) {
      var expectation = this._expectations[i];
      ListWrapper.push(urls, expectation.url);
    }
    throw new BaseException(("Unsatisfied requests: " + ListWrapper.join(urls, ', ')));
  },
  _processRequest: function(request) {
    assert.argumentTypes(request, _PendingRequest);
    var url = request.url;
    if (this._expectations.length > 0) {
      var expectation = this._expectations[0];
      if (expectation.url == url) {
        ListWrapper.remove(this._expectations, expectation);
        request.complete(expectation.response);
        return ;
      }
    }
    if (MapWrapper.contains(this._definitions, url)) {
      var response = MapWrapper.get(this._definitions, url);
      request.complete(normalizeBlank(response));
      return ;
    }
    throw new BaseException(("Unexpected request " + url));
  }
}, {}, XHR);
Object.defineProperty(XHRMock.prototype.get, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
Object.defineProperty(XHRMock.prototype.expect, "parameters", {get: function() {
    return [[assert.type.string], [assert.type.string]];
  }});
Object.defineProperty(XHRMock.prototype.when, "parameters", {get: function() {
    return [[assert.type.string], [assert.type.string]];
  }});
Object.defineProperty(XHRMock.prototype._processRequest, "parameters", {get: function() {
    return [[_PendingRequest]];
  }});
var _PendingRequest = function _PendingRequest(url) {
  this.url = url;
  this.completer = PromiseWrapper.completer();
};
($traceurRuntime.createClass)(_PendingRequest, {
  complete: function(response) {
    assert.argumentTypes(response, assert.type.string);
    if (isBlank(response)) {
      this.completer.reject(("Failed to load " + this.url));
    } else {
      this.completer.resolve(response);
    }
  },
  getPromise: function() {
    return assert.returnType((this.completer.promise), assert.genericType(Promise, assert.type.string));
  }
}, {});
Object.defineProperty(_PendingRequest.prototype.complete, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
var _Expectation = function _Expectation(url, response) {
  assert.argumentTypes(url, assert.type.string, response, assert.type.string);
  this.url = url;
  this.response = response;
};
($traceurRuntime.createClass)(_Expectation, {}, {});
Object.defineProperty(_Expectation, "parameters", {get: function() {
    return [[assert.type.string], [assert.type.string]];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/mock/xhr_mock.map

//# sourceMappingURL=./xhr_mock.map