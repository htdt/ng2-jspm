var parse5Adapter = require('angular2/src/dom/parse5_adapter');
parse5Adapter.Parse5DomAdapter.makeCurrent();
"use strict";
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/test/mock/xhr_mock_spec";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_test_95_lib__,
    $__angular2_47_src_47_mock_47_xhr_95_mock__,
    $__angular2_47_src_47_facade_47_async__,
    $__angular2_47_src_47_facade_47_lang__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var $__1 = ($__angular2_47_test_95_lib__ = require("angular2/test_lib"), $__angular2_47_test_95_lib__ && $__angular2_47_test_95_lib__.__esModule && $__angular2_47_test_95_lib__ || {default: $__angular2_47_test_95_lib__}),
    describe = $__1.describe,
    beforeEach = $__1.beforeEach,
    it = $__1.it,
    expect = $__1.expect,
    ddescribe = $__1.ddescribe,
    iit = $__1.iit,
    el = $__1.el,
    IS_DARTIUM = $__1.IS_DARTIUM;
var XHRMock = ($__angular2_47_src_47_mock_47_xhr_95_mock__ = require("angular2/src/mock/xhr_mock"), $__angular2_47_src_47_mock_47_xhr_95_mock__ && $__angular2_47_src_47_mock_47_xhr_95_mock__.__esModule && $__angular2_47_src_47_mock_47_xhr_95_mock__ || {default: $__angular2_47_src_47_mock_47_xhr_95_mock__}).XHRMock;
var $__3 = ($__angular2_47_src_47_facade_47_async__ = require("angular2/src/facade/async"), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}),
    PromiseWrapper = $__3.PromiseWrapper,
    Promise = $__3.Promise;
var isPresent = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).isPresent;
function main() {
  describe('XHRMock', (function() {
    var xhr;
    beforeEach((function() {
      xhr = new XHRMock();
    }));
    function expectResponse(request, url, response) {
      var done = arguments[3] !== (void 0) ? arguments[3] : null;
      assert.argumentTypes(request, Promise, url, assert.type.string, response, assert.type.string, done, assert.type.any);
      function onResponse(text) {
        assert.argumentTypes(text, assert.type.string);
        if (response === null) {
          throw ("Unexpected response " + url + " -> " + text);
        } else {
          expect(text).toEqual(response);
          if (isPresent(done))
            done();
        }
      }
      Object.defineProperty(onResponse, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
      function onError(error) {
        assert.argumentTypes(error, assert.type.string);
        if (response !== null) {
          throw ("Unexpected error " + url);
        } else {
          expect(error).toEqual(("Failed to load " + url));
          if (isPresent(done))
            done();
        }
      }
      Object.defineProperty(onError, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
      PromiseWrapper.then(request, onResponse, onError);
    }
    Object.defineProperty(expectResponse, "parameters", {get: function() {
        return [[Promise], [assert.type.string], [assert.type.string], []];
      }});
    it('should return a response from the definitions', (function(done) {
      var url = '/foo';
      var response = 'bar';
      xhr.when(url, response);
      expectResponse(xhr.get(url), url, response, done);
      xhr.flush();
    }));
    it('should return an error from the definitions', (function(done) {
      var url = '/foo';
      var response = null;
      xhr.when(url, response);
      expectResponse(xhr.get(url), url, response, done);
      xhr.flush();
    }));
    it('should return a response from the expectations', (function(done) {
      var url = '/foo';
      var response = 'bar';
      xhr.expect(url, response);
      expectResponse(xhr.get(url), url, response, done);
      xhr.flush();
    }));
    it('should return an error from the expectations', (function(done) {
      var url = '/foo';
      var response = null;
      xhr.expect(url, response);
      expectResponse(xhr.get(url), url, response, done);
      xhr.flush();
    }));
    it('should not reuse expectations', (function() {
      var url = '/foo';
      var response = 'bar';
      xhr.expect(url, response);
      xhr.get(url);
      xhr.get(url);
      expect((function() {
        xhr.flush();
      })).toThrowError('Unexpected request /foo');
    }));
    it('should return expectations before definitions', (function(done) {
      var url = '/foo';
      xhr.when(url, 'when');
      xhr.expect(url, 'expect');
      expectResponse(xhr.get(url), url, 'expect');
      expectResponse(xhr.get(url), url, 'when', done);
      xhr.flush();
    }));
    it('should throw when there is no definitions or expectations', (function() {
      xhr.get('/foo');
      expect((function() {
        xhr.flush();
      })).toThrowError('Unexpected request /foo');
    }));
    it('should throw when flush is called without any pending requests', (function() {
      expect((function() {
        xhr.flush();
      })).toThrowError('No pending requests to flush');
    }));
    it('should throw on unstatisfied expectations', (function() {
      xhr.expect('/foo', 'bar');
      xhr.when('/bar', 'foo');
      xhr.get('/bar');
      expect((function() {
        xhr.flush();
      })).toThrowError('Unsatisfied requests: /foo');
    }));
  }));
}

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/test/mock/xhr_mock_spec.map

//# sourceMappingURL=./xhr_mock_spec.map
 main();