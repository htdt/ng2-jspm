"use strict";
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var __moduleName = "benchpress/test/runner_spec";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_test_95_lib__,
    $__benchpress_47_common__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_async__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var $__1 = ($__angular2_47_test_95_lib__ = require("angular2/test_lib"), $__angular2_47_test_95_lib__ && $__angular2_47_test_95_lib__.__esModule && $__angular2_47_test_95_lib__ || {default: $__angular2_47_test_95_lib__}),
    describe = $__1.describe,
    it = $__1.it,
    iit = $__1.iit,
    xit = $__1.xit,
    expect = $__1.expect,
    beforeEach = $__1.beforeEach,
    afterEach = $__1.afterEach;
var $__2 = ($__benchpress_47_common__ = require("benchpress/common"), $__benchpress_47_common__ && $__benchpress_47_common__.__esModule && $__benchpress_47_common__ || {default: $__benchpress_47_common__}),
    Runner = $__2.Runner,
    Sampler = $__2.Sampler,
    SampleDescription = $__2.SampleDescription,
    Validator = $__2.Validator,
    bind = $__2.bind,
    Injector = $__2.Injector,
    Metric = $__2.Metric,
    Options = $__2.Options,
    WebDriverAdapter = $__2.WebDriverAdapter;
var isBlank = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).isBlank;
var $__4 = ($__angular2_47_src_47_facade_47_async__ = require("angular2/src/facade/async"), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}),
    Promise = $__4.Promise,
    PromiseWrapper = $__4.PromiseWrapper;
function main() {
  describe('runner', (function() {
    var injector;
    var runner;
    function createRunner() {
      var defaultBindings = arguments[0] !== (void 0) ? arguments[0] : null;
      if (isBlank(defaultBindings)) {
        defaultBindings = [];
      }
      runner = new Runner([defaultBindings, bind(Sampler).toFactory((function(_injector) {
        injector = _injector;
        return new MockSampler();
      }), [Injector]), bind(Metric).toFactory((function() {
        return new MockMetric();
      }), []), bind(Validator).toFactory((function() {
        return new MockValidator();
      }), []), bind(WebDriverAdapter).toFactory((function() {
        return new MockWebDriverAdapter();
      }), [])]);
      return runner;
    }
    it('should set SampleDescription.id', (function(done) {
      createRunner().sample({id: 'someId'}).then((function(_) {
        return injector.asyncGet(SampleDescription);
      })).then((function(desc) {
        expect(desc.id).toBe('someId');
        done();
      }));
    }));
    it('should merge SampleDescription.description', (function(done) {
      createRunner([bind(Options.DEFAULT_DESCRIPTION).toValue({'a': 1})]).sample({
        id: 'someId',
        bindings: [bind(Options.SAMPLE_DESCRIPTION).toValue({'b': 2})]
      }).then((function(_) {
        return injector.asyncGet(SampleDescription);
      })).then((function(desc) {
        expect(desc.description).toEqual({
          'forceGc': false,
          'userAgent': 'someUserAgent',
          'a': 1,
          'b': 2,
          'v': 11
        });
        done();
      }));
    }));
    it('should fill SampleDescription.metrics from the Metric', (function(done) {
      createRunner().sample({id: 'someId'}).then((function(_) {
        return injector.asyncGet(SampleDescription);
      })).then((function(desc) {
        expect(desc.metrics).toEqual({'m1': 'some metric'});
        done();
      }));
    }));
    it('should bind Options.EXECUTE', (function(done) {
      var execute = (function() {});
      createRunner().sample({
        id: 'someId',
        execute: execute
      }).then((function(_) {
        expect(injector.get(Options.EXECUTE)).toEqual(execute);
        done();
      }));
    }));
    it('should bind Options.PREPARE', (function(done) {
      var prepare = (function() {});
      createRunner().sample({
        id: 'someId',
        prepare: prepare
      }).then((function(_) {
        expect(injector.get(Options.PREPARE)).toEqual(prepare);
        done();
      }));
    }));
    it('should bind Options.MICRO_ITERATIONS', (function(done) {
      createRunner().sample({
        id: 'someId',
        microIterations: 23
      }).then((function(_) {
        expect(injector.get(Options.MICRO_ITERATIONS)).toEqual(23);
        done();
      }));
    }));
    it('should overwrite bindings per sample call', (function(done) {
      createRunner([bind(Options.DEFAULT_DESCRIPTION).toValue({'a': 1})]).sample({
        id: 'someId',
        bindings: [bind(Options.DEFAULT_DESCRIPTION).toValue({'a': 2})]
      }).then((function(_) {
        return injector.asyncGet(SampleDescription);
      })).then((function(desc) {
        expect(injector.get(SampleDescription).description['a']).toBe(2);
        done();
      }));
    }));
  }));
}
var MockWebDriverAdapter = function MockWebDriverAdapter() {
  $traceurRuntime.superConstructor($MockWebDriverAdapter).apply(this, arguments);
};
var $MockWebDriverAdapter = MockWebDriverAdapter;
($traceurRuntime.createClass)(MockWebDriverAdapter, {executeScript: function(script) {
    return assert.returnType((PromiseWrapper.resolve('someUserAgent')), Promise);
  }}, {}, WebDriverAdapter);
var MockValidator = function MockValidator() {
  $traceurRuntime.superConstructor($MockValidator).call(this);
};
var $MockValidator = MockValidator;
($traceurRuntime.createClass)(MockValidator, {describe: function() {
    return {'v': 11};
  }}, {}, Validator);
var MockMetric = function MockMetric() {
  $traceurRuntime.superConstructor($MockMetric).call(this);
};
var $MockMetric = MockMetric;
($traceurRuntime.createClass)(MockMetric, {describe: function() {
    return {'m1': 'some metric'};
  }}, {}, Metric);
var MockSampler = function MockSampler() {
  $traceurRuntime.superConstructor($MockSampler).call(this);
};
var $MockSampler = MockSampler;
($traceurRuntime.createClass)(MockSampler, {sample: function() {
    return assert.returnType((PromiseWrapper.resolve(23)), Promise);
  }}, {}, Sampler);

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/benchpress/test/runner_spec.map

//# sourceMappingURL=./runner_spec.map