"use strict";
Object.defineProperties(module.exports, {
  Sampler: {get: function() {
      return Sampler;
    }},
  SampleState: {get: function() {
      return SampleState;
    }},
  __esModule: {value: true}
});
var __moduleName = "benchpress/src/sampler";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_async__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_di__,
    $__benchpress_47_src_47_metric__,
    $__benchpress_47_src_47_validator__,
    $__benchpress_47_src_47_reporter__,
    $__benchpress_47_src_47_web_95_driver_95_extension__,
    $__benchpress_47_src_47_web_95_driver_95_adapter__,
    $__benchpress_47_src_47_sample_95_options__,
    $__benchpress_47_src_47_measure_95_values__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var $__1 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    isPresent = $__1.isPresent,
    isBlank = $__1.isBlank,
    Date = $__1.Date,
    DateWrapper = $__1.DateWrapper;
var $__2 = ($__angular2_47_src_47_facade_47_async__ = require("angular2/src/facade/async"), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}),
    Promise = $__2.Promise,
    PromiseWrapper = $__2.PromiseWrapper;
var $__3 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    StringMapWrapper = $__3.StringMapWrapper,
    StringMap = $__3.StringMap,
    List = $__3.List,
    ListWrapper = $__3.ListWrapper;
var $__4 = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}),
    bind = $__4.bind,
    OpaqueToken = $__4.OpaqueToken;
var Metric = ($__benchpress_47_src_47_metric__ = require("./metric"), $__benchpress_47_src_47_metric__ && $__benchpress_47_src_47_metric__.__esModule && $__benchpress_47_src_47_metric__ || {default: $__benchpress_47_src_47_metric__}).Metric;
var Validator = ($__benchpress_47_src_47_validator__ = require("./validator"), $__benchpress_47_src_47_validator__ && $__benchpress_47_src_47_validator__.__esModule && $__benchpress_47_src_47_validator__ || {default: $__benchpress_47_src_47_validator__}).Validator;
var Reporter = ($__benchpress_47_src_47_reporter__ = require("./reporter"), $__benchpress_47_src_47_reporter__ && $__benchpress_47_src_47_reporter__.__esModule && $__benchpress_47_src_47_reporter__ || {default: $__benchpress_47_src_47_reporter__}).Reporter;
var WebDriverExtension = ($__benchpress_47_src_47_web_95_driver_95_extension__ = require("./web_driver_extension"), $__benchpress_47_src_47_web_95_driver_95_extension__ && $__benchpress_47_src_47_web_95_driver_95_extension__.__esModule && $__benchpress_47_src_47_web_95_driver_95_extension__ || {default: $__benchpress_47_src_47_web_95_driver_95_extension__}).WebDriverExtension;
var WebDriverAdapter = ($__benchpress_47_src_47_web_95_driver_95_adapter__ = require("./web_driver_adapter"), $__benchpress_47_src_47_web_95_driver_95_adapter__ && $__benchpress_47_src_47_web_95_driver_95_adapter__.__esModule && $__benchpress_47_src_47_web_95_driver_95_adapter__ || {default: $__benchpress_47_src_47_web_95_driver_95_adapter__}).WebDriverAdapter;
var Options = ($__benchpress_47_src_47_sample_95_options__ = require("./sample_options"), $__benchpress_47_src_47_sample_95_options__ && $__benchpress_47_src_47_sample_95_options__.__esModule && $__benchpress_47_src_47_sample_95_options__ || {default: $__benchpress_47_src_47_sample_95_options__}).Options;
var MeasureValues = ($__benchpress_47_src_47_measure_95_values__ = require("./measure_values"), $__benchpress_47_src_47_measure_95_values__ && $__benchpress_47_src_47_measure_95_values__.__esModule && $__benchpress_47_src_47_measure_95_values__ || {default: $__benchpress_47_src_47_measure_95_values__}).MeasureValues;
var Sampler = function Sampler() {
  var $__14 = arguments[0] !== (void 0) ? arguments[0] : {},
      driver = $__14.driver,
      driverExtension = $__14.driverExtension,
      metric = $__14.metric,
      reporter = $__14.reporter,
      validator = $__14.validator,
      forceGc = $__14.forceGc,
      prepare = $__14.prepare,
      execute = $__14.execute,
      time = $__14.time;
  this._driver = driver;
  this._driverExtension = driverExtension;
  this._metric = metric;
  this._reporter = reporter;
  this._validator = validator;
  this._forceGc = forceGc;
  this._prepare = prepare;
  this._execute = execute;
  this._time = time;
};
($traceurRuntime.createClass)(Sampler, {
  sample: function() {
    var $__12 = this;
    var loop;
    loop = (function(lastState) {
      return $__12._iterate(lastState).then((function(newState) {
        if (isPresent(newState.validSample)) {
          return newState;
        } else {
          return loop(newState);
        }
      }));
    });
    return assert.returnType((this._gcIfNeeded().then((function(_) {
      return loop(new SampleState([], null));
    }))), assert.genericType(Promise, SampleState));
  },
  _gcIfNeeded: function() {
    if (this._forceGc) {
      return this._driverExtension.gc();
    } else {
      return PromiseWrapper.resolve(null);
    }
  },
  _iterate: function(lastState) {
    var $__12 = this;
    var resultPromise;
    if (isPresent(this._prepare)) {
      resultPromise = this._driver.waitFor(this._prepare).then((function(_) {
        return $__12._gcIfNeeded();
      }));
    } else {
      resultPromise = PromiseWrapper.resolve(null);
    }
    if (isPresent(this._prepare) || lastState.completeSample.length === 0) {
      resultPromise = resultPromise.then((function(_) {
        return $__12._metric.beginMeasure();
      }));
    }
    return resultPromise.then((function(_) {
      return $__12._driver.waitFor($__12._execute);
    })).then((function(_) {
      return $__12._gcIfNeeded();
    })).then((function(_) {
      return $__12._metric.endMeasure(isBlank($__12._prepare));
    })).then((function(measureValues) {
      return $__12._report(lastState, measureValues);
    }));
  },
  _report: function(state, metricValues) {
    var $__12 = this;
    var measureValues = new MeasureValues(state.completeSample.length, this._time(), metricValues);
    var completeSample = ListWrapper.concat(state.completeSample, [measureValues]);
    var validSample = this._validator.validate(completeSample);
    var resultPromise = this._reporter.reportMeasureValues(measureValues);
    if (isPresent(validSample)) {
      resultPromise = resultPromise.then((function(_) {
        return $__12._reporter.reportSample(completeSample, validSample);
      }));
    }
    return assert.returnType((resultPromise.then((function(_) {
      return new SampleState(completeSample, validSample);
    }))), assert.genericType(Promise, SampleState));
  }
}, {
  get BINDINGS() {
    return _BINDINGS;
  },
  get TIME() {
    return _TIME;
  }
});
Object.defineProperty(Sampler.prototype._report, "parameters", {get: function() {
    return [[SampleState], [StringMap]];
  }});
var SampleState = function SampleState(completeSample, validSample) {
  assert.argumentTypes(completeSample, List, validSample, List);
  this.completeSample = completeSample;
  this.validSample = validSample;
};
($traceurRuntime.createClass)(SampleState, {}, {});
Object.defineProperty(SampleState, "parameters", {get: function() {
    return [[List], [List]];
  }});
var _TIME = new OpaqueToken('Sampler.time');
var _BINDINGS = [bind(Sampler).toFactory((function(driver, driverExtension, metric, reporter, validator, forceGc, prepare, execute, time) {
  return new Sampler({
    driver: driver,
    driverExtension: driverExtension,
    reporter: reporter,
    validator: validator,
    metric: metric,
    forceGc: forceGc,
    prepare: prepare !== false ? prepare : null,
    execute: execute,
    time: time
  });
}), [WebDriverAdapter, WebDriverExtension, Metric, Reporter, Validator, Options.FORCE_GC, Options.PREPARE, Options.EXECUTE, _TIME]), bind(Options.FORCE_GC).toValue(false), bind(Options.PREPARE).toValue(false), bind(_TIME).toValue((function() {
  return DateWrapper.now();
}))];

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/benchpress/src/sampler.map

//# sourceMappingURL=./sampler.map