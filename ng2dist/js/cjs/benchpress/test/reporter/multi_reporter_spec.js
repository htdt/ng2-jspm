"use strict";
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var __moduleName = "benchpress/test/reporter/multi_reporter_spec";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_test_95_lib__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_facade_47_async__,
    $__angular2_47_src_47_facade_47_lang__,
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
var DateWrapper = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).DateWrapper;
var $__5 = ($__benchpress_47_common__ = require("benchpress/common"), $__benchpress_47_common__ && $__benchpress_47_common__.__esModule && $__benchpress_47_common__ || {default: $__benchpress_47_common__}),
    Reporter = $__5.Reporter,
    MultiReporter = $__5.MultiReporter,
    bind = $__5.bind,
    Injector = $__5.Injector,
    MeasureValues = $__5.MeasureValues;
function main() {
  function createReporters(ids) {
    return new Injector([ListWrapper.map(ids, (function(id) {
      return bind(id).toValue(new MockReporter(id));
    })), MultiReporter.createBindings(ids)]).asyncGet(MultiReporter);
  }
  describe('multi reporter', (function() {
    it('should reportMeasureValues to all', (function(done) {
      var mv = new MeasureValues(0, DateWrapper.now(), {});
      createReporters(['m1', 'm2']).then((function(r) {
        return r.reportMeasureValues(mv);
      })).then((function(values) {
        expect(values).toEqual([{
          'id': 'm1',
          'values': mv
        }, {
          'id': 'm2',
          'values': mv
        }]);
        done();
      }));
    }));
    it('should reportSample to call', (function(done) {
      var completeSample = [new MeasureValues(0, DateWrapper.now(), {}), new MeasureValues(1, DateWrapper.now(), {})];
      var validSample = [completeSample[1]];
      createReporters(['m1', 'm2']).then((function(r) {
        return r.reportSample(completeSample, validSample);
      })).then((function(values) {
        expect(values).toEqual([{
          'id': 'm1',
          'completeSample': completeSample,
          'validSample': validSample
        }, {
          'id': 'm2',
          'completeSample': completeSample,
          'validSample': validSample
        }]);
        done();
      }));
    }));
  }));
}
var MockReporter = function MockReporter(id) {
  $traceurRuntime.superConstructor($MockReporter).call(this);
  this._id = id;
};
var $MockReporter = MockReporter;
($traceurRuntime.createClass)(MockReporter, {
  reportMeasureValues: function(values) {
    assert.argumentTypes(values, MeasureValues);
    return assert.returnType((PromiseWrapper.resolve({
      'id': this._id,
      'values': values
    })), Promise);
  },
  reportSample: function(completeSample, validSample) {
    assert.argumentTypes(completeSample, assert.genericType(List, MeasureValues), validSample, assert.genericType(List, MeasureValues));
    return assert.returnType((PromiseWrapper.resolve({
      'id': this._id,
      'completeSample': completeSample,
      'validSample': validSample
    })), Promise);
  }
}, {}, Reporter);
Object.defineProperty(MockReporter.prototype.reportMeasureValues, "parameters", {get: function() {
    return [[MeasureValues]];
  }});
Object.defineProperty(MockReporter.prototype.reportSample, "parameters", {get: function() {
    return [[assert.genericType(List, MeasureValues)], [assert.genericType(List, MeasureValues)]];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/benchpress/test/reporter/multi_reporter_spec.map

//# sourceMappingURL=./multi_reporter_spec.map