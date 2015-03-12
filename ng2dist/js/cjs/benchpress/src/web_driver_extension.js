"use strict";
Object.defineProperties(module.exports, {
  WebDriverExtension: {get: function() {
      return WebDriverExtension;
    }},
  __esModule: {value: true}
});
var __moduleName = "benchpress/src/web_driver_extension";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_di__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_async__,
    $__angular2_47_src_47_facade_47_collection__,
    $__benchpress_47_src_47_sample_95_options__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var $__1 = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}),
    bind = $__1.bind,
    Injector = $__1.Injector,
    OpaqueToken = $__1.OpaqueToken;
var $__2 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    BaseException = $__2.BaseException,
    ABSTRACT = $__2.ABSTRACT,
    isBlank = $__2.isBlank;
var $__3 = ($__angular2_47_src_47_facade_47_async__ = require("angular2/src/facade/async"), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}),
    Promise = $__3.Promise,
    PromiseWrapper = $__3.PromiseWrapper;
var $__4 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    List = $__4.List,
    ListWrapper = $__4.ListWrapper,
    StringMap = $__4.StringMap;
var Options = ($__benchpress_47_src_47_sample_95_options__ = require("./sample_options"), $__benchpress_47_src_47_sample_95_options__ && $__benchpress_47_src_47_sample_95_options__.__esModule && $__benchpress_47_src_47_sample_95_options__ || {default: $__benchpress_47_src_47_sample_95_options__}).Options;
var WebDriverExtension = function WebDriverExtension() {};
var $WebDriverExtension = WebDriverExtension;
($traceurRuntime.createClass)(WebDriverExtension, {
  gc: function() {
    throw new BaseException('NYI');
  },
  timeBegin: function(name) {
    throw new BaseException('NYI');
  },
  timeEnd: function(name, restart) {
    assert.argumentTypes(name, assert.type.any, restart, assert.type.boolean);
    throw new BaseException('NYI');
  },
  readPerfLog: function() {
    throw new BaseException('NYI');
  },
  supports: function(capabilities) {
    assert.argumentTypes(capabilities, StringMap);
    return assert.returnType((true), assert.type.boolean);
  }
}, {bindTo: function(childTokens) {
    return [bind(_CHILDREN).toAsyncFactory((function(injector) {
      return PromiseWrapper.all(ListWrapper.map(childTokens, (function(token) {
        return injector.asyncGet(token);
      })));
    }), [Injector]), bind($WebDriverExtension).toFactory((function(children, capabilities) {
      var delegate;
      ListWrapper.forEach(children, (function(extension) {
        if (extension.supports(capabilities)) {
          delegate = extension;
        }
      }));
      if (isBlank(delegate)) {
        throw new BaseException('Could not find a delegate for given capabilities!');
      }
      return delegate;
    }), [_CHILDREN, Options.CAPABILITIES])];
  }});
Object.defineProperty(WebDriverExtension, "annotations", {get: function() {
    return [new ABSTRACT()];
  }});
Object.defineProperty(WebDriverExtension.prototype.timeEnd, "parameters", {get: function() {
    return [[], [assert.type.boolean]];
  }});
Object.defineProperty(WebDriverExtension.prototype.supports, "parameters", {get: function() {
    return [[StringMap]];
  }});
var _CHILDREN = new OpaqueToken('WebDriverExtension.children');

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/benchpress/src/web_driver_extension.map

//# sourceMappingURL=./web_driver_extension.map