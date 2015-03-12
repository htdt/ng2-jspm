"use strict";
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var __moduleName = "benchpress/test/web_driver_extension_spec";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_test_95_lib__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_async__,
    $__benchpress_47_common__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var $__1 = ($__angular2_47_test_95_lib__ = require("angular2/test_lib"), $__angular2_47_test_95_lib__ && $__angular2_47_test_95_lib__.__esModule && $__angular2_47_test_95_lib__ || {default: $__angular2_47_test_95_lib__}),
    ddescribe = $__1.ddescribe,
    describe = $__1.describe,
    it = $__1.it,
    iit = $__1.iit,
    xit = $__1.xit,
    expect = $__1.expect,
    beforeEach = $__1.beforeEach,
    afterEach = $__1.afterEach;
var $__2 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    StringMap = $__2.StringMap,
    ListWrapper = $__2.ListWrapper;
var $__3 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    isPresent = $__3.isPresent,
    StringWrapper = $__3.StringWrapper;
var PromiseWrapper = ($__angular2_47_src_47_facade_47_async__ = require("angular2/src/facade/async"), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}).PromiseWrapper;
var $__5 = ($__benchpress_47_common__ = require("benchpress/common"), $__benchpress_47_common__ && $__benchpress_47_common__.__esModule && $__benchpress_47_common__ || {default: $__benchpress_47_common__}),
    WebDriverExtension = $__5.WebDriverExtension,
    bind = $__5.bind,
    Injector = $__5.Injector,
    Options = $__5.Options;
function main() {
  function createExtension(ids, caps) {
    return new Injector([ListWrapper.map(ids, (function(id) {
      return bind(id).toValue(new MockExtension(id));
    })), bind(Options.CAPABILITIES).toValue(caps), WebDriverExtension.bindTo(ids)]).asyncGet(WebDriverExtension);
  }
  describe('WebDriverExtension.bindTo', (function() {
    it('should bind the extension that matches the capabilities', (function(done) {
      createExtension(['m1', 'm2', 'm3'], {'browser': 'm2'}).then((function(m) {
        expect(m.id).toEqual('m2');
        done();
      }));
    }));
    it('should throw if there is no match', (function(done) {
      PromiseWrapper.catchError(createExtension(['m1'], {'browser': 'm2'}), (function(err) {
        expect(isPresent(err)).toBe(true);
        done();
      }));
    }));
  }));
}
var MockExtension = function MockExtension(id) {
  $traceurRuntime.superConstructor($MockExtension).call(this);
  this.id = id;
};
var $MockExtension = MockExtension;
($traceurRuntime.createClass)(MockExtension, {supports: function(capabilities) {
    assert.argumentTypes(capabilities, StringMap);
    return assert.returnType((StringWrapper.equals(capabilities['browser'], this.id)), assert.type.boolean);
  }}, {}, WebDriverExtension);
Object.defineProperty(MockExtension.prototype.supports, "parameters", {get: function() {
    return [[StringMap]];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/benchpress/test/web_driver_extension_spec.map

//# sourceMappingURL=./web_driver_extension_spec.map