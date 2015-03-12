var parse5Adapter = require('angular2/src/dom/parse5_adapter');
parse5Adapter.Parse5DomAdapter.makeCurrent();
"use strict";
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/test/test_lib/test_lib_spec";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_test_95_lib__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_facade_47_lang__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var $__1 = ($__angular2_47_test_95_lib__ = require("angular2/test_lib"), $__angular2_47_test_95_lib__ && $__angular2_47_test_95_lib__.__esModule && $__angular2_47_test_95_lib__ || {default: $__angular2_47_test_95_lib__}),
    describe = $__1.describe,
    it = $__1.it,
    iit = $__1.iit,
    ddescribe = $__1.ddescribe,
    expect = $__1.expect,
    tick = $__1.tick,
    async = $__1.async,
    SpyObject = $__1.SpyObject,
    beforeEach = $__1.beforeEach,
    proxy = $__1.proxy;
var $__2 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    MapWrapper = $__2.MapWrapper,
    ListWrapper = $__2.ListWrapper;
var $__3 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    IMPLEMENTS = $__3.IMPLEMENTS,
    Date = $__3.Date,
    DateWrapper = $__3.DateWrapper;
var TestObj = function TestObj(prop) {
  this.prop = prop;
};
($traceurRuntime.createClass)(TestObj, {}, {});
var SpyTestObj = function SpyTestObj() {
  $traceurRuntime.superConstructor($SpyTestObj).apply(this, arguments);
};
var $SpyTestObj = SpyTestObj;
($traceurRuntime.createClass)(SpyTestObj, {noSuchMethod: function(m) {
    return $traceurRuntime.superGet(this, $SpyTestObj.prototype, "noSuchMethod").call(this, m);
  }}, {}, SpyObject);
Object.defineProperty(SpyTestObj, "annotations", {get: function() {
    return [new proxy, new IMPLEMENTS(TestObj)];
  }});
function main() {
  describe('test_lib', (function() {
    describe('equality', (function() {
      it('should structurally compare objects', (function() {
        var expected = new TestObj(new TestObj({'one': [1, 2]}));
        var actual = new TestObj(new TestObj({'one': [1, 2]}));
        var falseActual = new TestObj(new TestObj({'one': [1, 3]}));
        expect(actual).toEqual(expected);
        expect(falseActual).not.toEqual(expected);
      }));
      it('should structurally compare objects with private and static fields', (function() {
        expect(DateWrapper.fromMillis(1)).toEqual(DateWrapper.fromMillis(1));
      }));
      it('should work for arrays of string maps', (function() {
        expect([{'a': 'b'}]).toEqual([{'a': 'b'}]);
      }));
      it('should work for arrays of real maps', (function() {
        expect([MapWrapper.createFromStringMap({'a': 'b'})]).toEqual([MapWrapper.createFromStringMap({'a': 'b'})]);
        expect([MapWrapper.createFromStringMap({'a': 'b'})]).not.toEqual([MapWrapper.createFromStringMap({'a': 'c'})]);
      }));
    }));
    describe('toEqual for Maps', (function() {
      it('should detect equality for same reference', (function() {
        var m1 = MapWrapper.createFromStringMap({'a': 1});
        expect(m1).toEqual(m1);
      }));
      it('should detect equality for same content', (function() {
        expect(MapWrapper.createFromStringMap({'a': 1})).toEqual(MapWrapper.createFromStringMap({'a': 1}));
      }));
      it('should detect missing entries', (function() {
        expect(MapWrapper.createFromStringMap({'a': 1})).not.toEqual(MapWrapper.createFromStringMap({}));
      }));
      it('should detect different values', (function() {
        expect(MapWrapper.createFromStringMap({'a': 1})).not.toEqual(MapWrapper.createFromStringMap({'a': 2}));
      }));
      it('should detect additional entries', (function() {
        expect(MapWrapper.createFromStringMap({'a': 1})).not.toEqual(MapWrapper.createFromStringMap({
          'a': 1,
          'b': 1
        }));
      }));
    }));
    describe("spy objects", (function() {
      var spyObj;
      beforeEach((function() {
        spyObj = new SpyTestObj();
      }));
      it("should pass the runtime check", (function() {
        var t = assert.type(spyObj, TestObj);
        expect(t).toBeDefined();
      }));
      it("should return a new spy func with no calls", (function() {
        expect(spyObj.spy("someFunc")).not.toHaveBeenCalled();
      }));
      it("should record function calls", (function() {
        spyObj.spy("someFunc").andCallFake((function(a, b) {
          return a + b;
        }));
        expect(spyObj.someFunc(1, 2)).toEqual(3);
        expect(spyObj.spy("someFunc")).toHaveBeenCalledWith(1, 2);
      }));
    }));
  }));
}

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/test/test_lib/test_lib_spec.map

//# sourceMappingURL=./test_lib_spec.map
 main();