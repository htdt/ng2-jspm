"use strict";
Object.defineProperties(module.exports, {
  JsonFileReporter: {get: function() {
      return JsonFileReporter;
    }},
  __esModule: {value: true}
});
var __moduleName = "benchpress/src/reporter/json_file_reporter";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_facade_47_async__,
    $__angular2_47_di__,
    $__benchpress_47_src_47_reporter__,
    $__benchpress_47_src_47_sample_95_description__,
    $__benchpress_47_src_47_measure_95_values__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var $__1 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    DateWrapper = $__1.DateWrapper,
    isPresent = $__1.isPresent,
    isBlank = $__1.isBlank,
    Json = $__1.Json;
var List = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}).List;
var $__3 = ($__angular2_47_src_47_facade_47_async__ = require("angular2/src/facade/async"), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}),
    Promise = $__3.Promise,
    PromiseWrapper = $__3.PromiseWrapper;
var $__4 = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}),
    bind = $__4.bind,
    OpaqueToken = $__4.OpaqueToken;
var Reporter = ($__benchpress_47_src_47_reporter__ = require("../reporter"), $__benchpress_47_src_47_reporter__ && $__benchpress_47_src_47_reporter__.__esModule && $__benchpress_47_src_47_reporter__ || {default: $__benchpress_47_src_47_reporter__}).Reporter;
var SampleDescription = ($__benchpress_47_src_47_sample_95_description__ = require("../sample_description"), $__benchpress_47_src_47_sample_95_description__ && $__benchpress_47_src_47_sample_95_description__.__esModule && $__benchpress_47_src_47_sample_95_description__ || {default: $__benchpress_47_src_47_sample_95_description__}).SampleDescription;
var MeasureValues = ($__benchpress_47_src_47_measure_95_values__ = require("../measure_values"), $__benchpress_47_src_47_measure_95_values__ && $__benchpress_47_src_47_measure_95_values__.__esModule && $__benchpress_47_src_47_measure_95_values__ || {default: $__benchpress_47_src_47_measure_95_values__}).MeasureValues;
var JsonFileReporter = function JsonFileReporter(sampleDescription, path, writeFile) {
  $traceurRuntime.superConstructor($JsonFileReporter).call(this);
  this._description = sampleDescription;
  this._path = path;
  this._writeFile = writeFile;
};
var $JsonFileReporter = JsonFileReporter;
($traceurRuntime.createClass)(JsonFileReporter, {
  reportMeasureValues: function(measureValues) {
    assert.argumentTypes(measureValues, MeasureValues);
    return assert.returnType((PromiseWrapper.resolve(null)), Promise);
  },
  reportSample: function(completeSample, validSample) {
    assert.argumentTypes(completeSample, assert.genericType(List, MeasureValues), validSample, assert.genericType(List, MeasureValues));
    var content = Json.stringify({
      'description': this._description,
      'completeSample': completeSample,
      'validSample': validSample
    });
    var filePath = (this._path + "/" + this._description.id + "_" + DateWrapper.toMillis(DateWrapper.now()) + ".json");
    return assert.returnType((this._writeFile(filePath, content)), Promise);
  }
}, {
  get WRITE_FILE() {
    return _WRITE_FILE;
  },
  get PATH() {
    return _PATH;
  },
  get BINDINGS() {
    return _BINDINGS;
  }
}, Reporter);
Object.defineProperty(JsonFileReporter.prototype.reportMeasureValues, "parameters", {get: function() {
    return [[MeasureValues]];
  }});
Object.defineProperty(JsonFileReporter.prototype.reportSample, "parameters", {get: function() {
    return [[assert.genericType(List, MeasureValues)], [assert.genericType(List, MeasureValues)]];
  }});
var _WRITE_FILE = new OpaqueToken('JsonFileReporter.writeFile');
var _PATH = new OpaqueToken('JsonFileReporter.path');
var _BINDINGS = [bind(JsonFileReporter).toFactory((function(sampleDescription, path, writeFile) {
  return new JsonFileReporter(sampleDescription, path, writeFile);
}), [SampleDescription, _PATH, _WRITE_FILE]), bind(_PATH).toValue('.')];

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/benchpress/src/reporter/json_file_reporter.map

//# sourceMappingURL=./json_file_reporter.map