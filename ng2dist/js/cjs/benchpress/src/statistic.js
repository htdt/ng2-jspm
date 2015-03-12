"use strict";
Object.defineProperties(module.exports, {
  Statistic: {get: function() {
      return Statistic;
    }},
  __esModule: {value: true}
});
var __moduleName = "benchpress/src/statistic";
var $__angular2_47_src_47_facade_47_math__,
    $__angular2_47_src_47_facade_47_collection__;
var Math = ($__angular2_47_src_47_facade_47_math__ = require("angular2/src/facade/math"), $__angular2_47_src_47_facade_47_math__ && $__angular2_47_src_47_facade_47_math__.__esModule && $__angular2_47_src_47_facade_47_math__ || {default: $__angular2_47_src_47_facade_47_math__}).Math;
var ListWrapper = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}).ListWrapper;
var Statistic = function Statistic() {};
var $Statistic = Statistic;
($traceurRuntime.createClass)(Statistic, {}, {
  calculateCoefficientOfVariation: function(sample, mean) {
    return $Statistic.calculateStandardDeviation(sample, mean) / mean * 100;
  },
  calculateMean: function(sample) {
    var total = 0;
    ListWrapper.forEach(sample, (function(x) {
      total += x;
    }));
    return total / sample.length;
  },
  calculateStandardDeviation: function(sample, mean) {
    var deviation = 0;
    ListWrapper.forEach(sample, (function(x) {
      deviation += Math.pow(x - mean, 2);
    }));
    deviation = deviation / (sample.length);
    deviation = Math.sqrt(deviation);
    return deviation;
  },
  calculateRegressionSlope: function(xValues, xMean, yValues, yMean) {
    var dividendSum = 0;
    var divisorSum = 0;
    for (var i = 0; i < xValues.length; i++) {
      dividendSum += (xValues[i] - xMean) * (yValues[i] - yMean);
      divisorSum += Math.pow(xValues[i] - xMean, 2);
    }
    return dividendSum / divisorSum;
  }
});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/benchpress/src/statistic.map

//# sourceMappingURL=./statistic.map