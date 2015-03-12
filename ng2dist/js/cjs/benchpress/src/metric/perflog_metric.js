"use strict";
Object.defineProperties(module.exports, {
  PerflogMetric: {get: function() {
      return PerflogMetric;
    }},
  __esModule: {value: true}
});
var __moduleName = "benchpress/src/metric/perflog_metric";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_src_47_facade_47_async__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_di__,
    $__benchpress_47_src_47_web_95_driver_95_extension__,
    $__benchpress_47_src_47_metric__,
    $__benchpress_47_src_47_sample_95_options__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var $__1 = ($__angular2_47_src_47_facade_47_async__ = require("angular2/src/facade/async"), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}),
    PromiseWrapper = $__1.PromiseWrapper,
    Promise = $__1.Promise;
var $__2 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    isPresent = $__2.isPresent,
    isBlank = $__2.isBlank,
    int = $__2.int,
    BaseException = $__2.BaseException,
    StringWrapper = $__2.StringWrapper,
    Math = $__2.Math;
var $__3 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    ListWrapper = $__3.ListWrapper,
    StringMap = $__3.StringMap,
    StringMapWrapper = $__3.StringMapWrapper;
var $__4 = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}),
    bind = $__4.bind,
    OpaqueToken = $__4.OpaqueToken;
var WebDriverExtension = ($__benchpress_47_src_47_web_95_driver_95_extension__ = require("../web_driver_extension"), $__benchpress_47_src_47_web_95_driver_95_extension__ && $__benchpress_47_src_47_web_95_driver_95_extension__.__esModule && $__benchpress_47_src_47_web_95_driver_95_extension__ || {default: $__benchpress_47_src_47_web_95_driver_95_extension__}).WebDriverExtension;
var Metric = ($__benchpress_47_src_47_metric__ = require("../metric"), $__benchpress_47_src_47_metric__ && $__benchpress_47_src_47_metric__.__esModule && $__benchpress_47_src_47_metric__ || {default: $__benchpress_47_src_47_metric__}).Metric;
var Options = ($__benchpress_47_src_47_sample_95_options__ = require("../sample_options"), $__benchpress_47_src_47_sample_95_options__ && $__benchpress_47_src_47_sample_95_options__.__esModule && $__benchpress_47_src_47_sample_95_options__ || {default: $__benchpress_47_src_47_sample_95_options__}).Options;
var PerflogMetric = function PerflogMetric(driverExtension, setTimeout, microIterations) {
  assert.argumentTypes(driverExtension, WebDriverExtension, setTimeout, Function, microIterations, int);
  $traceurRuntime.superConstructor($PerflogMetric).call(this);
  this._driverExtension = driverExtension;
  this._remainingEvents = [];
  this._measureCount = 0;
  this._setTimeout = setTimeout;
  this._microIterations = microIterations;
};
var $PerflogMetric = PerflogMetric;
($traceurRuntime.createClass)(PerflogMetric, {
  describe: function() {
    var res = {
      'script': 'script execution time in ms',
      'render': 'render time in ms',
      'gcTime': 'gc time in ms',
      'gcAmount': 'gc amount in kbytes',
      'majorGcTime': 'time of major gcs in ms',
      'majorGcAmount': 'amount of major gcs in kbytes'
    };
    if (this._microIterations > 0) {
      res['scriptMicroAvg'] = 'average script time for a micro iteration';
    }
    return assert.returnType((res), StringMap);
  },
  beginMeasure: function() {
    return assert.returnType((this._driverExtension.timeBegin(this._markName(this._measureCount++))), Promise);
  },
  endMeasure: function(restart) {
    var $__8 = this;
    var markName = this._markName(this._measureCount - 1);
    var nextMarkName = restart ? this._markName(this._measureCount++) : null;
    return assert.returnType((this._driverExtension.timeEnd(markName, nextMarkName).then((function(_) {
      return $__8._readUntilEndMark(markName);
    }))), assert.genericType(Promise, Object));
  },
  _readUntilEndMark: function(markName) {
    var loopCount = arguments[1] !== (void 0) ? arguments[1] : 0;
    var startEvent = arguments[2] !== (void 0) ? arguments[2] : null;
    var $__8 = this;
    if (loopCount > _MAX_RETRY_COUNT) {
      throw new BaseException(("Tried too often to get the ending mark: " + loopCount));
    }
    return this._driverExtension.readPerfLog().then((function(events) {
      $__8._addEvents(events);
      var result = $__8._aggregateEvents($__8._remainingEvents, markName);
      if (isPresent(result)) {
        $__8._remainingEvents = events;
        return result;
      }
      var completer = PromiseWrapper.completer();
      $__8._setTimeout((function() {
        return completer.resolve($__8._readUntilEndMark(markName, loopCount + 1));
      }), 100);
      return completer.promise;
    }));
  },
  _addEvents: function(events) {
    var $__8 = this;
    var needSort = false;
    ListWrapper.forEach(events, (function(event) {
      if (StringWrapper.equals(event['ph'], 'X')) {
        needSort = true;
        var startEvent = {};
        var endEvent = {};
        StringMapWrapper.forEach(event, (function(value, prop) {
          startEvent[prop] = value;
          endEvent[prop] = value;
        }));
        startEvent['ph'] = 'B';
        endEvent['ph'] = 'E';
        endEvent['ts'] = startEvent['ts'] + startEvent['dur'];
        ListWrapper.push($__8._remainingEvents, startEvent);
        ListWrapper.push($__8._remainingEvents, endEvent);
      } else {
        ListWrapper.push($__8._remainingEvents, event);
      }
    }));
    if (needSort) {
      ListWrapper.sort(this._remainingEvents, (function(a, b) {
        var diff = a['ts'] - b['ts'];
        return diff > 0 ? 1 : diff < 0 ? -1 : 0;
      }));
    }
  },
  _aggregateEvents: function(events, markName) {
    var result = {
      'script': 0,
      'render': 0,
      'gcTime': 0,
      'gcAmount': 0,
      'majorGcTime': 0,
      'majorGcAmount': 0
    };
    var markStartEvent = null;
    var markEndEvent = null;
    var gcTimeInScript = 0;
    var intervalStarts = {};
    events.forEach((function(event) {
      var ph = event['ph'];
      var name = event['name'];
      if (StringWrapper.equals(ph, 'b') && StringWrapper.equals(name, markName)) {
        markStartEvent = event;
      } else if (StringWrapper.equals(ph, 'e') && StringWrapper.equals(name, markName)) {
        markEndEvent = event;
      }
      if (isPresent(markStartEvent) && isBlank(markEndEvent) && event['pid'] === markStartEvent['pid']) {
        if (StringWrapper.equals(ph, 'B')) {
          intervalStarts[name] = event;
        } else if (StringWrapper.equals(ph, 'E') && isPresent(intervalStarts[name])) {
          var startEvent = intervalStarts[name];
          var duration = event['ts'] - startEvent['ts'];
          intervalStarts[name] = null;
          if (StringWrapper.equals(name, 'gc')) {
            var amount = (startEvent['args']['usedHeapSize'] - event['args']['usedHeapSize']) / 1000;
            result['gcTime'] += duration;
            result['gcAmount'] += amount;
            var majorGc = event['args']['majorGc'];
            if (isPresent(majorGc) && majorGc) {
              result['majorGcTime'] += duration;
              result['majorGcAmount'] += amount;
            }
            if (isPresent(intervalStarts['script'])) {
              gcTimeInScript += duration;
            }
          } else if (StringWrapper.equals(name, 'script') || StringWrapper.equals(name, 'render')) {
            result[name] += duration;
          }
        }
      }
    }));
    result['script'] -= gcTimeInScript;
    if (this._microIterations > 0) {
      result['scriptMicroAvg'] = result['script'] / this._microIterations;
    }
    return isPresent(markStartEvent) && isPresent(markEndEvent) ? result : null;
  },
  _markName: function(index) {
    return ("" + _MARK_NAME_PREFIX + index);
  }
}, {
  get BINDINGS() {
    return _BINDINGS;
  },
  get SET_TIMEOUT() {
    return _SET_TIMEOUT;
  }
}, Metric);
Object.defineProperty(PerflogMetric, "parameters", {get: function() {
    return [[WebDriverExtension], [Function], [int]];
  }});
Object.defineProperty(PerflogMetric.prototype.endMeasure, "parameters", {get: function() {
    return [[assert.type.boolean]];
  }});
Object.defineProperty(PerflogMetric.prototype._readUntilEndMark, "parameters", {get: function() {
    return [[assert.type.string], [int], []];
  }});
var _MAX_RETRY_COUNT = 20;
var _MARK_NAME_PREFIX = 'benchpress';
var _SET_TIMEOUT = new OpaqueToken('PerflogMetric.setTimeout');
var _BINDINGS = [bind(PerflogMetric).toFactory((function(driverExtension, setTimeout, microIterations) {
  return new PerflogMetric(driverExtension, setTimeout, microIterations);
}), [WebDriverExtension, _SET_TIMEOUT, Options.MICRO_ITERATIONS]), bind(_SET_TIMEOUT).toValue((function(fn, millis) {
  return PromiseWrapper.setTimeout(fn, millis);
})), bind(Options.MICRO_ITERATIONS).toValue(0)];

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/benchpress/src/metric/perflog_metric.map

//# sourceMappingURL=./perflog_metric.map