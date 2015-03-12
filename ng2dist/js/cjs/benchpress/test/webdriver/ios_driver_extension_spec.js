"use strict";
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var __moduleName = "benchpress/test/webdriver/ios_driver_extension_spec";
var $__angular2_47_test_95_lib__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_facade_47_async__,
    $__angular2_47_src_47_facade_47_lang__,
    $__benchpress_47_common__,
    $__benchpress_47_test_47_trace_95_event_95_factory__;
var $__0 = ($__angular2_47_test_95_lib__ = require("angular2/test_lib"), $__angular2_47_test_95_lib__ && $__angular2_47_test_95_lib__.__esModule && $__angular2_47_test_95_lib__ || {default: $__angular2_47_test_95_lib__}),
    describe = $__0.describe,
    ddescribe = $__0.ddescribe,
    it = $__0.it,
    iit = $__0.iit,
    xit = $__0.xit,
    expect = $__0.expect,
    beforeEach = $__0.beforeEach,
    afterEach = $__0.afterEach;
var ListWrapper = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}).ListWrapper;
var PromiseWrapper = ($__angular2_47_src_47_facade_47_async__ = require("angular2/src/facade/async"), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}).PromiseWrapper;
var $__3 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    Json = $__3.Json,
    isBlank = $__3.isBlank,
    isPresent = $__3.isPresent;
var $__4 = ($__benchpress_47_common__ = require("benchpress/common"), $__benchpress_47_common__ && $__benchpress_47_common__.__esModule && $__benchpress_47_common__ || {default: $__benchpress_47_common__}),
    WebDriverExtension = $__4.WebDriverExtension,
    IOsDriverExtension = $__4.IOsDriverExtension,
    WebDriverAdapter = $__4.WebDriverAdapter,
    Injector = $__4.Injector,
    bind = $__4.bind;
var TraceEventFactory = ($__benchpress_47_test_47_trace_95_event_95_factory__ = require("../trace_event_factory"), $__benchpress_47_test_47_trace_95_event_95_factory__ && $__benchpress_47_test_47_trace_95_event_95_factory__.__esModule && $__benchpress_47_test_47_trace_95_event_95_factory__ || {default: $__benchpress_47_test_47_trace_95_event_95_factory__}).TraceEventFactory;
function main() {
  describe('ios driver extension', (function() {
    var log;
    var extension;
    var normEvents = new TraceEventFactory('timeline', 'pid0');
    function createExtension() {
      var perfRecords = arguments[0] !== (void 0) ? arguments[0] : null;
      if (isBlank(perfRecords)) {
        perfRecords = [];
      }
      log = [];
      extension = new Injector([IOsDriverExtension.BINDINGS, bind(WebDriverAdapter).toValue(new MockDriverAdapter(log, perfRecords))]).get(IOsDriverExtension);
      return extension;
    }
    it('should force gc via window.gc()', (function(done) {
      createExtension().gc().then((function(_) {
        expect(log).toEqual([['executeScript', 'window.gc()']]);
        done();
      }));
    }));
    it('should mark the timeline via console.time()', (function(done) {
      createExtension().timeBegin('someName').then((function(_) {
        expect(log).toEqual([['executeScript', "console.time('someName');"]]);
        done();
      }));
    }));
    it('should mark the timeline via console.timeEnd()', (function(done) {
      createExtension().timeEnd('someName').then((function(_) {
        expect(log).toEqual([['executeScript', "console.timeEnd('someName');"]]);
        done();
      }));
    }));
    it('should mark the timeline via console.time() and console.timeEnd()', (function(done) {
      createExtension().timeEnd('name1', 'name2').then((function(_) {
        expect(log).toEqual([['executeScript', "console.timeEnd('name1');console.time('name2');"]]);
        done();
      }));
    }));
    describe('readPerfLog', (function() {
      it('should execute a dummy script before reading them', (function(done) {
        createExtension([]).readPerfLog().then((function(_) {
          expect(log).toEqual([['executeScript', '1+1'], ['logs', 'performance']]);
          done();
        }));
      }));
      it('should report FunctionCall records as "script"', (function(done) {
        createExtension([durationRecord('FunctionCall', 1, 5)]).readPerfLog().then((function(events) {
          expect(events).toEqual([normEvents.start('script', 1), normEvents.end('script', 5)]);
          done();
        }));
      }));
      it('should ignore FunctionCalls from webdriver', (function(done) {
        createExtension([internalScriptRecord(1, 5)]).readPerfLog().then((function(events) {
          expect(events).toEqual([]);
          done();
        }));
      }));
      it('should report begin time', (function(done) {
        createExtension([timeBeginRecord('someName', 12)]).readPerfLog().then((function(events) {
          expect(events).toEqual([normEvents.markStart('someName', 12)]);
          done();
        }));
      }));
      it('should report end timestamps', (function(done) {
        createExtension([timeEndRecord('someName', 12)]).readPerfLog().then((function(events) {
          expect(events).toEqual([normEvents.markEnd('someName', 12)]);
          done();
        }));
      }));
      it('should report gc', (function(done) {
        createExtension([gcRecord(1, 3, 21)]).readPerfLog().then((function(events) {
          expect(events).toEqual([normEvents.start('gc', 1, {'usedHeapSize': 0}), normEvents.end('gc', 3, {'usedHeapSize': -21})]);
          done();
        }));
      }));
      ['RecalculateStyles', 'Layout', 'UpdateLayerTree', 'Paint', 'Rasterize', 'CompositeLayers'].forEach((function(recordType) {
        it(("should report " + recordType), (function(done) {
          createExtension([durationRecord(recordType, 0, 1)]).readPerfLog().then((function(events) {
            expect(events).toEqual([normEvents.start('render', 0), normEvents.end('render', 1)]);
            done();
          }));
        }));
      }));
      it('should walk children', (function(done) {
        createExtension([durationRecord('FunctionCall', 1, 5, [timeBeginRecord('someName', 2)])]).readPerfLog().then((function(events) {
          expect(events).toEqual([normEvents.start('script', 1), normEvents.markStart('someName', 2), normEvents.end('script', 5)]);
          done();
        }));
      }));
      it('should match safari browsers', (function() {
        expect(createExtension().supports({'browserName': 'safari'})).toBe(true);
        expect(createExtension().supports({'browserName': 'Safari'})).toBe(true);
      }));
    }));
  }));
}
function timeBeginRecord(name, time) {
  return {
    'type': 'Time',
    'startTime': time,
    'data': {'message': name}
  };
}
function timeEndRecord(name, time) {
  return {
    'type': 'TimeEnd',
    'startTime': time,
    'data': {'message': name}
  };
}
function durationRecord(type, startTime, endTime) {
  var children = arguments[3] !== (void 0) ? arguments[3] : null;
  if (isBlank(children)) {
    children = [];
  }
  return {
    'type': type,
    'startTime': startTime,
    'endTime': endTime,
    'children': children
  };
}
function internalScriptRecord(startTime, endTime) {
  return {
    'type': 'FunctionCall',
    'startTime': startTime,
    'endTime': endTime,
    'data': {'scriptName': 'InjectedScript'}
  };
}
function gcRecord(startTime, endTime, gcAmount) {
  return {
    'type': 'GCEvent',
    'startTime': startTime,
    'endTime': endTime,
    'data': {'usedHeapSizeDelta': gcAmount}
  };
}
var MockDriverAdapter = function MockDriverAdapter(log, perfRecords) {
  $traceurRuntime.superConstructor($MockDriverAdapter).call(this);
  this._log = log;
  this._perfRecords = perfRecords;
};
var $MockDriverAdapter = MockDriverAdapter;
($traceurRuntime.createClass)(MockDriverAdapter, {
  executeScript: function(script) {
    ListWrapper.push(this._log, ['executeScript', script]);
    return PromiseWrapper.resolve(null);
  },
  logs: function(type) {
    ListWrapper.push(this._log, ['logs', type]);
    if (type === 'performance') {
      return PromiseWrapper.resolve(this._perfRecords.map(function(record) {
        return {'message': Json.stringify({'message': {
              'method': 'Timeline.eventRecorded',
              'params': {'record': record}
            }})};
      }));
    } else {
      return null;
    }
  }
}, {}, WebDriverAdapter);

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/benchpress/test/webdriver/ios_driver_extension_spec.map

//# sourceMappingURL=./ios_driver_extension_spec.map