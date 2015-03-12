"use strict";
Object.defineProperties(module.exports, {
  SampleDescription: {get: function() {
      return SampleDescription;
    }},
  __esModule: {value: true}
});
var __moduleName = "benchpress/src/sample_description";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_di__,
    $__benchpress_47_src_47_validator__,
    $__benchpress_47_src_47_metric__,
    $__benchpress_47_src_47_sample_95_options__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var $__1 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    StringMapWrapper = $__1.StringMapWrapper,
    ListWrapper = $__1.ListWrapper,
    StringMap = $__1.StringMap;
var $__2 = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}),
    bind = $__2.bind,
    OpaqueToken = $__2.OpaqueToken;
var Validator = ($__benchpress_47_src_47_validator__ = require("./validator"), $__benchpress_47_src_47_validator__ && $__benchpress_47_src_47_validator__.__esModule && $__benchpress_47_src_47_validator__ || {default: $__benchpress_47_src_47_validator__}).Validator;
var Metric = ($__benchpress_47_src_47_metric__ = require("./metric"), $__benchpress_47_src_47_metric__ && $__benchpress_47_src_47_metric__.__esModule && $__benchpress_47_src_47_metric__ || {default: $__benchpress_47_src_47_metric__}).Metric;
var Options = ($__benchpress_47_src_47_sample_95_options__ = require("./sample_options"), $__benchpress_47_src_47_sample_95_options__ && $__benchpress_47_src_47_sample_95_options__.__esModule && $__benchpress_47_src_47_sample_95_options__ || {default: $__benchpress_47_src_47_sample_95_options__}).Options;
var SampleDescription = function SampleDescription(id, descriptions, metrics) {
  var $__6 = this;
  this.id = id;
  this.metrics = metrics;
  this.description = {};
  ListWrapper.forEach(descriptions, (function(description) {
    StringMapWrapper.forEach(description, (function(value, prop) {
      return $__6.description[prop] = value;
    }));
  }));
};
($traceurRuntime.createClass)(SampleDescription, {toJson: function() {
    return {
      'id': this.id,
      'description': this.description,
      'metrics': this.metrics
    };
  }}, {get BINDINGS() {
    return _BINDINGS;
  }});
Object.defineProperty(SampleDescription, "parameters", {get: function() {
    return [[], [assert.genericType(List, StringMap)], [StringMap]];
  }});
var _BINDINGS = [bind(SampleDescription).toFactory((function(metric, id, forceGc, userAgent, validator, defaultDesc, userDesc) {
  return new SampleDescription(id, [{
    'forceGc': forceGc,
    'userAgent': userAgent
  }, validator.describe(), defaultDesc, userDesc], metric.describe());
}), [Metric, Options.SAMPLE_ID, Options.FORCE_GC, Options.USER_AGENT, Validator, Options.DEFAULT_DESCRIPTION, Options.SAMPLE_DESCRIPTION]), bind(Options.DEFAULT_DESCRIPTION).toValue({}), bind(Options.SAMPLE_DESCRIPTION).toValue({})];

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/benchpress/src/sample_description.map

//# sourceMappingURL=./sample_description.map