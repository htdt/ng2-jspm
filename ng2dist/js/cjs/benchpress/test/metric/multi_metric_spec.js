"use strict";
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var __moduleName = "benchpress/test/metric/multi_metric_spec";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_test_95_lib__,
    $__angular2_47_src_47_facade_47_collection__,
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
    List = $__2.List,
    ListWrapper = $__2.ListWrapper,
    StringMap = $__2.StringMap;
var $__3 = ($__angular2_47_src_47_facade_47_async__ = require("angular2/src/facade/async"), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}),
    PromiseWrapper = $__3.PromiseWrapper,
    Promise = $__3.Promise;
var $__4 = ($__benchpress_47_common__ = require("benchpress/common"), $__benchpress_47_common__ && $__benchpress_47_common__.__esModule && $__benchpress_47_common__ || {default: $__benchpress_47_common__}),
    Metric = $__4.Metric,
    MultiMetric = $__4.MultiMetric,
    bind = $__4.bind,
    Injector = $__4.Injector;
function main() {
  function createMetric(ids) {
    return new Injector([ListWrapper.map(ids, (function(id) {
      return bind(id).toValue(new MockMetric(id));
    })), MultiMetric.createBindings(ids)]).asyncGet(MultiMetric);
  }
  describe('multi metric', (function() {
    it('should merge descriptions', (function(done) {
      createMetric(['m1', 'm2']).then((function(m) {
        expect(m.describe()).toEqual({
          'm1': 'describe',
          'm2': 'describe'
        });
        done();
      }));
    }));
    it('should merge all beginMeasure calls', (function(done) {
      createMetric(['m1', 'm2']).then((function(m) {
        return m.beginMeasure();
      })).then((function(values) {
        expect(values).toEqual(['m1_beginMeasure', 'm2_beginMeasure']);
        done();
      }));
    }));
    [false, true].forEach((function(restartFlag) {
      it(("should merge all endMeasure calls for restart=" + restartFlag), (function(done) {
        createMetric(['m1', 'm2']).then((function(m) {
          return m.endMeasure(restartFlag);
        })).then((function(values) {
          expect(values).toEqual({
            'm1': {'restart': restartFlag},
            'm2': {'restart': restartFlag}
          });
          done();
        }));
      }));
    }));
  }));
}
var MockMetric = function MockMetric(id) {
  $traceurRuntime.superConstructor($MockMetric).call(this);
  this._id = id;
};
var $MockMetric = MockMetric;
($traceurRuntime.createClass)(MockMetric, {
  beginMeasure: function() {
    return assert.returnType((PromiseWrapper.resolve((this._id + "_beginMeasure"))), Promise);
  },
  endMeasure: function(restart) {
    assert.argumentTypes(restart, assert.type.boolean);
    var result = {};
    result[this._id] = {'restart': restart};
    return assert.returnType((PromiseWrapper.resolve(result)), assert.genericType(Promise, StringMap));
  },
  describe: function() {
    var result = {};
    result[this._id] = 'describe';
    return assert.returnType((result), StringMap);
  }
}, {}, Metric);
Object.defineProperty(MockMetric.prototype.endMeasure, "parameters", {get: function() {
    return [[assert.type.boolean]];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/benchpress/test/metric/multi_metric_spec.map

//# sourceMappingURL=./multi_metric_spec.map