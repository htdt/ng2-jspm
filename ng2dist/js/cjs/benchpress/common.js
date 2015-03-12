"use strict";
Object.defineProperties(module.exports, {
  Sampler: {get: function() {
      return $__benchpress_47_src_47_sampler__.Sampler;
    }},
  SampleState: {get: function() {
      return $__benchpress_47_src_47_sampler__.SampleState;
    }},
  Metric: {get: function() {
      return $__benchpress_47_src_47_metric__.Metric;
    }},
  Validator: {get: function() {
      return $__benchpress_47_src_47_validator__.Validator;
    }},
  Reporter: {get: function() {
      return $__benchpress_47_src_47_reporter__.Reporter;
    }},
  WebDriverExtension: {get: function() {
      return $__benchpress_47_src_47_web_95_driver_95_extension__.WebDriverExtension;
    }},
  WebDriverAdapter: {get: function() {
      return $__benchpress_47_src_47_web_95_driver_95_adapter__.WebDriverAdapter;
    }},
  SizeValidator: {get: function() {
      return $__benchpress_47_src_47_validator_47_size_95_validator__.SizeValidator;
    }},
  RegressionSlopeValidator: {get: function() {
      return $__benchpress_47_src_47_validator_47_regression_95_slope_95_validator__.RegressionSlopeValidator;
    }},
  ConsoleReporter: {get: function() {
      return $__benchpress_47_src_47_reporter_47_console_95_reporter__.ConsoleReporter;
    }},
  JsonFileReporter: {get: function() {
      return $__benchpress_47_src_47_reporter_47_json_95_file_95_reporter__.JsonFileReporter;
    }},
  SampleDescription: {get: function() {
      return $__benchpress_47_src_47_sample_95_description__.SampleDescription;
    }},
  PerflogMetric: {get: function() {
      return $__benchpress_47_src_47_metric_47_perflog_95_metric__.PerflogMetric;
    }},
  ChromeDriverExtension: {get: function() {
      return $__benchpress_47_src_47_webdriver_47_chrome_95_driver_95_extension__.ChromeDriverExtension;
    }},
  IOsDriverExtension: {get: function() {
      return $__benchpress_47_src_47_webdriver_47_ios_95_driver_95_extension__.IOsDriverExtension;
    }},
  Runner: {get: function() {
      return $__benchpress_47_src_47_runner__.Runner;
    }},
  Options: {get: function() {
      return $__benchpress_47_src_47_sample_95_options__.Options;
    }},
  MeasureValues: {get: function() {
      return $__benchpress_47_src_47_measure_95_values__.MeasureValues;
    }},
  MultiMetric: {get: function() {
      return $__benchpress_47_src_47_metric_47_multi_95_metric__.MultiMetric;
    }},
  MultiReporter: {get: function() {
      return $__benchpress_47_src_47_reporter_47_multi_95_reporter__.MultiReporter;
    }},
  bind: {get: function() {
      return $__angular2_47_di__.bind;
    }},
  Injector: {get: function() {
      return $__angular2_47_di__.Injector;
    }},
  OpaqueToken: {get: function() {
      return $__angular2_47_di__.OpaqueToken;
    }},
  __esModule: {value: true}
});
var __moduleName = "benchpress/common";
var $__benchpress_47_src_47_sampler__,
    $__benchpress_47_src_47_metric__,
    $__benchpress_47_src_47_validator__,
    $__benchpress_47_src_47_reporter__,
    $__benchpress_47_src_47_web_95_driver_95_extension__,
    $__benchpress_47_src_47_web_95_driver_95_adapter__,
    $__benchpress_47_src_47_validator_47_size_95_validator__,
    $__benchpress_47_src_47_validator_47_regression_95_slope_95_validator__,
    $__benchpress_47_src_47_reporter_47_console_95_reporter__,
    $__benchpress_47_src_47_reporter_47_json_95_file_95_reporter__,
    $__benchpress_47_src_47_sample_95_description__,
    $__benchpress_47_src_47_metric_47_perflog_95_metric__,
    $__benchpress_47_src_47_webdriver_47_chrome_95_driver_95_extension__,
    $__benchpress_47_src_47_webdriver_47_ios_95_driver_95_extension__,
    $__benchpress_47_src_47_runner__,
    $__benchpress_47_src_47_sample_95_options__,
    $__benchpress_47_src_47_measure_95_values__,
    $__benchpress_47_src_47_metric_47_multi_95_metric__,
    $__benchpress_47_src_47_reporter_47_multi_95_reporter__,
    $__angular2_47_di__;
var $__benchpress_47_src_47_sampler__ = ($__benchpress_47_src_47_sampler__ = require("./src/sampler"), $__benchpress_47_src_47_sampler__ && $__benchpress_47_src_47_sampler__.__esModule && $__benchpress_47_src_47_sampler__ || {default: $__benchpress_47_src_47_sampler__});
var $__benchpress_47_src_47_metric__ = ($__benchpress_47_src_47_metric__ = require("./src/metric"), $__benchpress_47_src_47_metric__ && $__benchpress_47_src_47_metric__.__esModule && $__benchpress_47_src_47_metric__ || {default: $__benchpress_47_src_47_metric__});
var $__benchpress_47_src_47_validator__ = ($__benchpress_47_src_47_validator__ = require("./src/validator"), $__benchpress_47_src_47_validator__ && $__benchpress_47_src_47_validator__.__esModule && $__benchpress_47_src_47_validator__ || {default: $__benchpress_47_src_47_validator__});
var $__benchpress_47_src_47_reporter__ = ($__benchpress_47_src_47_reporter__ = require("./src/reporter"), $__benchpress_47_src_47_reporter__ && $__benchpress_47_src_47_reporter__.__esModule && $__benchpress_47_src_47_reporter__ || {default: $__benchpress_47_src_47_reporter__});
var $__benchpress_47_src_47_web_95_driver_95_extension__ = ($__benchpress_47_src_47_web_95_driver_95_extension__ = require("./src/web_driver_extension"), $__benchpress_47_src_47_web_95_driver_95_extension__ && $__benchpress_47_src_47_web_95_driver_95_extension__.__esModule && $__benchpress_47_src_47_web_95_driver_95_extension__ || {default: $__benchpress_47_src_47_web_95_driver_95_extension__});
var $__benchpress_47_src_47_web_95_driver_95_adapter__ = ($__benchpress_47_src_47_web_95_driver_95_adapter__ = require("./src/web_driver_adapter"), $__benchpress_47_src_47_web_95_driver_95_adapter__ && $__benchpress_47_src_47_web_95_driver_95_adapter__.__esModule && $__benchpress_47_src_47_web_95_driver_95_adapter__ || {default: $__benchpress_47_src_47_web_95_driver_95_adapter__});
var $__benchpress_47_src_47_validator_47_size_95_validator__ = ($__benchpress_47_src_47_validator_47_size_95_validator__ = require("./src/validator/size_validator"), $__benchpress_47_src_47_validator_47_size_95_validator__ && $__benchpress_47_src_47_validator_47_size_95_validator__.__esModule && $__benchpress_47_src_47_validator_47_size_95_validator__ || {default: $__benchpress_47_src_47_validator_47_size_95_validator__});
var $__benchpress_47_src_47_validator_47_regression_95_slope_95_validator__ = ($__benchpress_47_src_47_validator_47_regression_95_slope_95_validator__ = require("./src/validator/regression_slope_validator"), $__benchpress_47_src_47_validator_47_regression_95_slope_95_validator__ && $__benchpress_47_src_47_validator_47_regression_95_slope_95_validator__.__esModule && $__benchpress_47_src_47_validator_47_regression_95_slope_95_validator__ || {default: $__benchpress_47_src_47_validator_47_regression_95_slope_95_validator__});
var $__benchpress_47_src_47_reporter_47_console_95_reporter__ = ($__benchpress_47_src_47_reporter_47_console_95_reporter__ = require("./src/reporter/console_reporter"), $__benchpress_47_src_47_reporter_47_console_95_reporter__ && $__benchpress_47_src_47_reporter_47_console_95_reporter__.__esModule && $__benchpress_47_src_47_reporter_47_console_95_reporter__ || {default: $__benchpress_47_src_47_reporter_47_console_95_reporter__});
var $__benchpress_47_src_47_reporter_47_json_95_file_95_reporter__ = ($__benchpress_47_src_47_reporter_47_json_95_file_95_reporter__ = require("./src/reporter/json_file_reporter"), $__benchpress_47_src_47_reporter_47_json_95_file_95_reporter__ && $__benchpress_47_src_47_reporter_47_json_95_file_95_reporter__.__esModule && $__benchpress_47_src_47_reporter_47_json_95_file_95_reporter__ || {default: $__benchpress_47_src_47_reporter_47_json_95_file_95_reporter__});
var $__benchpress_47_src_47_sample_95_description__ = ($__benchpress_47_src_47_sample_95_description__ = require("./src/sample_description"), $__benchpress_47_src_47_sample_95_description__ && $__benchpress_47_src_47_sample_95_description__.__esModule && $__benchpress_47_src_47_sample_95_description__ || {default: $__benchpress_47_src_47_sample_95_description__});
var $__benchpress_47_src_47_metric_47_perflog_95_metric__ = ($__benchpress_47_src_47_metric_47_perflog_95_metric__ = require("./src/metric/perflog_metric"), $__benchpress_47_src_47_metric_47_perflog_95_metric__ && $__benchpress_47_src_47_metric_47_perflog_95_metric__.__esModule && $__benchpress_47_src_47_metric_47_perflog_95_metric__ || {default: $__benchpress_47_src_47_metric_47_perflog_95_metric__});
var $__benchpress_47_src_47_webdriver_47_chrome_95_driver_95_extension__ = ($__benchpress_47_src_47_webdriver_47_chrome_95_driver_95_extension__ = require("./src/webdriver/chrome_driver_extension"), $__benchpress_47_src_47_webdriver_47_chrome_95_driver_95_extension__ && $__benchpress_47_src_47_webdriver_47_chrome_95_driver_95_extension__.__esModule && $__benchpress_47_src_47_webdriver_47_chrome_95_driver_95_extension__ || {default: $__benchpress_47_src_47_webdriver_47_chrome_95_driver_95_extension__});
var $__benchpress_47_src_47_webdriver_47_ios_95_driver_95_extension__ = ($__benchpress_47_src_47_webdriver_47_ios_95_driver_95_extension__ = require("./src/webdriver/ios_driver_extension"), $__benchpress_47_src_47_webdriver_47_ios_95_driver_95_extension__ && $__benchpress_47_src_47_webdriver_47_ios_95_driver_95_extension__.__esModule && $__benchpress_47_src_47_webdriver_47_ios_95_driver_95_extension__ || {default: $__benchpress_47_src_47_webdriver_47_ios_95_driver_95_extension__});
var $__benchpress_47_src_47_runner__ = ($__benchpress_47_src_47_runner__ = require("./src/runner"), $__benchpress_47_src_47_runner__ && $__benchpress_47_src_47_runner__.__esModule && $__benchpress_47_src_47_runner__ || {default: $__benchpress_47_src_47_runner__});
var $__benchpress_47_src_47_sample_95_options__ = ($__benchpress_47_src_47_sample_95_options__ = require("./src/sample_options"), $__benchpress_47_src_47_sample_95_options__ && $__benchpress_47_src_47_sample_95_options__.__esModule && $__benchpress_47_src_47_sample_95_options__ || {default: $__benchpress_47_src_47_sample_95_options__});
var $__benchpress_47_src_47_measure_95_values__ = ($__benchpress_47_src_47_measure_95_values__ = require("./src/measure_values"), $__benchpress_47_src_47_measure_95_values__ && $__benchpress_47_src_47_measure_95_values__.__esModule && $__benchpress_47_src_47_measure_95_values__ || {default: $__benchpress_47_src_47_measure_95_values__});
var $__benchpress_47_src_47_metric_47_multi_95_metric__ = ($__benchpress_47_src_47_metric_47_multi_95_metric__ = require("./src/metric/multi_metric"), $__benchpress_47_src_47_metric_47_multi_95_metric__ && $__benchpress_47_src_47_metric_47_multi_95_metric__.__esModule && $__benchpress_47_src_47_metric_47_multi_95_metric__ || {default: $__benchpress_47_src_47_metric_47_multi_95_metric__});
var $__benchpress_47_src_47_reporter_47_multi_95_reporter__ = ($__benchpress_47_src_47_reporter_47_multi_95_reporter__ = require("./src/reporter/multi_reporter"), $__benchpress_47_src_47_reporter_47_multi_95_reporter__ && $__benchpress_47_src_47_reporter_47_multi_95_reporter__.__esModule && $__benchpress_47_src_47_reporter_47_multi_95_reporter__ || {default: $__benchpress_47_src_47_reporter_47_multi_95_reporter__});
var $__angular2_47_di__ = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/benchpress/common.map

//# sourceMappingURL=./common.map