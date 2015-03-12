"use strict";
Object.defineProperties(module.exports, {
  Runner: {get: function() {
      return Runner;
    }},
  __esModule: {value: true}
});
var __moduleName = "benchpress/src/runner";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_di__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_facade_47_async__,
    $__benchpress_47_src_47_sampler__,
    $__benchpress_47_src_47_reporter_47_console_95_reporter__,
    $__benchpress_47_src_47_reporter_47_multi_95_reporter__,
    $__benchpress_47_src_47_validator_47_regression_95_slope_95_validator__,
    $__benchpress_47_src_47_validator_47_size_95_validator__,
    $__benchpress_47_src_47_validator__,
    $__benchpress_47_src_47_metric_47_perflog_95_metric__,
    $__benchpress_47_src_47_metric_47_multi_95_metric__,
    $__benchpress_47_src_47_webdriver_47_chrome_95_driver_95_extension__,
    $__benchpress_47_src_47_webdriver_47_ios_95_driver_95_extension__,
    $__benchpress_47_src_47_web_95_driver_95_extension__,
    $__benchpress_47_src_47_sample_95_description__,
    $__benchpress_47_src_47_web_95_driver_95_adapter__,
    $__benchpress_47_src_47_reporter__,
    $__benchpress_47_src_47_metric__,
    $__benchpress_47_src_47_sample_95_options__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var $__1 = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}),
    Injector = $__1.Injector,
    bind = $__1.bind;
var $__2 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    isPresent = $__2.isPresent,
    isBlank = $__2.isBlank;
var $__3 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    List = $__3.List,
    ListWrapper = $__3.ListWrapper;
var Promise = ($__angular2_47_src_47_facade_47_async__ = require("angular2/src/facade/async"), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}).Promise;
var $__5 = ($__benchpress_47_src_47_sampler__ = require("./sampler"), $__benchpress_47_src_47_sampler__ && $__benchpress_47_src_47_sampler__.__esModule && $__benchpress_47_src_47_sampler__ || {default: $__benchpress_47_src_47_sampler__}),
    Sampler = $__5.Sampler,
    SampleState = $__5.SampleState;
var ConsoleReporter = ($__benchpress_47_src_47_reporter_47_console_95_reporter__ = require("./reporter/console_reporter"), $__benchpress_47_src_47_reporter_47_console_95_reporter__ && $__benchpress_47_src_47_reporter_47_console_95_reporter__.__esModule && $__benchpress_47_src_47_reporter_47_console_95_reporter__ || {default: $__benchpress_47_src_47_reporter_47_console_95_reporter__}).ConsoleReporter;
var MultiReporter = ($__benchpress_47_src_47_reporter_47_multi_95_reporter__ = require("./reporter/multi_reporter"), $__benchpress_47_src_47_reporter_47_multi_95_reporter__ && $__benchpress_47_src_47_reporter_47_multi_95_reporter__.__esModule && $__benchpress_47_src_47_reporter_47_multi_95_reporter__ || {default: $__benchpress_47_src_47_reporter_47_multi_95_reporter__}).MultiReporter;
var RegressionSlopeValidator = ($__benchpress_47_src_47_validator_47_regression_95_slope_95_validator__ = require("./validator/regression_slope_validator"), $__benchpress_47_src_47_validator_47_regression_95_slope_95_validator__ && $__benchpress_47_src_47_validator_47_regression_95_slope_95_validator__.__esModule && $__benchpress_47_src_47_validator_47_regression_95_slope_95_validator__ || {default: $__benchpress_47_src_47_validator_47_regression_95_slope_95_validator__}).RegressionSlopeValidator;
var SizeValidator = ($__benchpress_47_src_47_validator_47_size_95_validator__ = require("./validator/size_validator"), $__benchpress_47_src_47_validator_47_size_95_validator__ && $__benchpress_47_src_47_validator_47_size_95_validator__.__esModule && $__benchpress_47_src_47_validator_47_size_95_validator__ || {default: $__benchpress_47_src_47_validator_47_size_95_validator__}).SizeValidator;
var Validator = ($__benchpress_47_src_47_validator__ = require("./validator"), $__benchpress_47_src_47_validator__ && $__benchpress_47_src_47_validator__.__esModule && $__benchpress_47_src_47_validator__ || {default: $__benchpress_47_src_47_validator__}).Validator;
var PerflogMetric = ($__benchpress_47_src_47_metric_47_perflog_95_metric__ = require("./metric/perflog_metric"), $__benchpress_47_src_47_metric_47_perflog_95_metric__ && $__benchpress_47_src_47_metric_47_perflog_95_metric__.__esModule && $__benchpress_47_src_47_metric_47_perflog_95_metric__ || {default: $__benchpress_47_src_47_metric_47_perflog_95_metric__}).PerflogMetric;
var MultiMetric = ($__benchpress_47_src_47_metric_47_multi_95_metric__ = require("./metric/multi_metric"), $__benchpress_47_src_47_metric_47_multi_95_metric__ && $__benchpress_47_src_47_metric_47_multi_95_metric__.__esModule && $__benchpress_47_src_47_metric_47_multi_95_metric__ || {default: $__benchpress_47_src_47_metric_47_multi_95_metric__}).MultiMetric;
var ChromeDriverExtension = ($__benchpress_47_src_47_webdriver_47_chrome_95_driver_95_extension__ = require("./webdriver/chrome_driver_extension"), $__benchpress_47_src_47_webdriver_47_chrome_95_driver_95_extension__ && $__benchpress_47_src_47_webdriver_47_chrome_95_driver_95_extension__.__esModule && $__benchpress_47_src_47_webdriver_47_chrome_95_driver_95_extension__ || {default: $__benchpress_47_src_47_webdriver_47_chrome_95_driver_95_extension__}).ChromeDriverExtension;
var IOsDriverExtension = ($__benchpress_47_src_47_webdriver_47_ios_95_driver_95_extension__ = require("./webdriver/ios_driver_extension"), $__benchpress_47_src_47_webdriver_47_ios_95_driver_95_extension__ && $__benchpress_47_src_47_webdriver_47_ios_95_driver_95_extension__.__esModule && $__benchpress_47_src_47_webdriver_47_ios_95_driver_95_extension__ || {default: $__benchpress_47_src_47_webdriver_47_ios_95_driver_95_extension__}).IOsDriverExtension;
var WebDriverExtension = ($__benchpress_47_src_47_web_95_driver_95_extension__ = require("./web_driver_extension"), $__benchpress_47_src_47_web_95_driver_95_extension__ && $__benchpress_47_src_47_web_95_driver_95_extension__.__esModule && $__benchpress_47_src_47_web_95_driver_95_extension__ || {default: $__benchpress_47_src_47_web_95_driver_95_extension__}).WebDriverExtension;
var SampleDescription = ($__benchpress_47_src_47_sample_95_description__ = require("./sample_description"), $__benchpress_47_src_47_sample_95_description__ && $__benchpress_47_src_47_sample_95_description__.__esModule && $__benchpress_47_src_47_sample_95_description__ || {default: $__benchpress_47_src_47_sample_95_description__}).SampleDescription;
var WebDriverAdapter = ($__benchpress_47_src_47_web_95_driver_95_adapter__ = require("./web_driver_adapter"), $__benchpress_47_src_47_web_95_driver_95_adapter__ && $__benchpress_47_src_47_web_95_driver_95_adapter__.__esModule && $__benchpress_47_src_47_web_95_driver_95_adapter__ || {default: $__benchpress_47_src_47_web_95_driver_95_adapter__}).WebDriverAdapter;
var Reporter = ($__benchpress_47_src_47_reporter__ = require("./reporter"), $__benchpress_47_src_47_reporter__ && $__benchpress_47_src_47_reporter__.__esModule && $__benchpress_47_src_47_reporter__ || {default: $__benchpress_47_src_47_reporter__}).Reporter;
var Metric = ($__benchpress_47_src_47_metric__ = require("./metric"), $__benchpress_47_src_47_metric__ && $__benchpress_47_src_47_metric__.__esModule && $__benchpress_47_src_47_metric__ || {default: $__benchpress_47_src_47_metric__}).Metric;
var Options = ($__benchpress_47_src_47_sample_95_options__ = require("./sample_options"), $__benchpress_47_src_47_sample_95_options__ && $__benchpress_47_src_47_sample_95_options__.__esModule && $__benchpress_47_src_47_sample_95_options__ || {default: $__benchpress_47_src_47_sample_95_options__}).Options;
var Runner = function Runner() {
  var defaultBindings = arguments[0] !== (void 0) ? arguments[0] : null;
  assert.argumentTypes(defaultBindings, List);
  if (isBlank(defaultBindings)) {
    defaultBindings = [];
  }
  this._defaultBindings = defaultBindings;
};
($traceurRuntime.createClass)(Runner, {sample: function($__22) {
    var $__23 = $__22,
        id = $__23.id,
        execute = $__23.execute,
        prepare = $__23.prepare,
        microIterations = $__23.microIterations,
        bindings = $__23.bindings;
    var sampleBindings = [_DEFAULT_BINDINGS, this._defaultBindings, bind(Options.SAMPLE_ID).toValue(id), bind(Options.EXECUTE).toValue(execute)];
    if (isPresent(prepare)) {
      ListWrapper.push(sampleBindings, bind(Options.PREPARE).toValue(prepare));
    }
    if (isPresent(microIterations)) {
      ListWrapper.push(sampleBindings, bind(Options.MICRO_ITERATIONS).toValue(microIterations));
    }
    if (isPresent(bindings)) {
      ListWrapper.push(sampleBindings, bindings);
    }
    return assert.returnType((new Injector(sampleBindings).asyncGet(Sampler).then((function(sampler) {
      return sampler.sample();
    }))), assert.genericType(Promise, SampleState));
  }}, {});
Object.defineProperty(Runner, "parameters", {get: function() {
    return [[List]];
  }});
var _DEFAULT_BINDINGS = [Sampler.BINDINGS, ConsoleReporter.BINDINGS, RegressionSlopeValidator.BINDINGS, SizeValidator.BINDINGS, ChromeDriverExtension.BINDINGS, IOsDriverExtension.BINDINGS, PerflogMetric.BINDINGS, SampleDescription.BINDINGS, MultiReporter.createBindings([ConsoleReporter]), MultiMetric.createBindings([PerflogMetric]), Reporter.bindTo(MultiReporter), Validator.bindTo(RegressionSlopeValidator), WebDriverExtension.bindTo([ChromeDriverExtension, IOsDriverExtension]), Metric.bindTo(MultiMetric), bind(Options.CAPABILITIES).toAsyncFactory((function(adapter) {
  return adapter.capabilities();
}), [WebDriverAdapter]), bind(Options.USER_AGENT).toAsyncFactory((function(adapter) {
  return adapter.executeScript('return window.navigator.userAgent;');
}), [WebDriverAdapter])];

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/benchpress/src/runner.map

//# sourceMappingURL=./runner.map