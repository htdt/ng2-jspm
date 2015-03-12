"use strict";
Object.defineProperties(module.exports, {
  IOsDriverExtension: {get: function() {
      return IOsDriverExtension;
    }},
  __esModule: {value: true}
});
var __moduleName = "benchpress/src/webdriver/ios_driver_extension";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_di__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_facade_47_lang__,
    $__benchpress_47_src_47_web_95_driver_95_extension__,
    $__benchpress_47_src_47_web_95_driver_95_adapter__,
    $__angular2_47_src_47_facade_47_async__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var bind = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}).bind;
var $__2 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    ListWrapper = $__2.ListWrapper,
    StringMap = $__2.StringMap;
var $__3 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    Json = $__3.Json,
    isPresent = $__3.isPresent,
    isBlank = $__3.isBlank,
    RegExpWrapper = $__3.RegExpWrapper,
    StringWrapper = $__3.StringWrapper;
var WebDriverExtension = ($__benchpress_47_src_47_web_95_driver_95_extension__ = require("../web_driver_extension"), $__benchpress_47_src_47_web_95_driver_95_extension__ && $__benchpress_47_src_47_web_95_driver_95_extension__.__esModule && $__benchpress_47_src_47_web_95_driver_95_extension__ || {default: $__benchpress_47_src_47_web_95_driver_95_extension__}).WebDriverExtension;
var WebDriverAdapter = ($__benchpress_47_src_47_web_95_driver_95_adapter__ = require("../web_driver_adapter"), $__benchpress_47_src_47_web_95_driver_95_adapter__ && $__benchpress_47_src_47_web_95_driver_95_adapter__.__esModule && $__benchpress_47_src_47_web_95_driver_95_adapter__ || {default: $__benchpress_47_src_47_web_95_driver_95_adapter__}).WebDriverAdapter;
var Promise = ($__angular2_47_src_47_facade_47_async__ = require("angular2/src/facade/async"), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}).Promise;
var IOsDriverExtension = function IOsDriverExtension(driver) {
  assert.argumentTypes(driver, WebDriverAdapter);
  $traceurRuntime.superConstructor($IOsDriverExtension).call(this);
  this._driver = driver;
};
var $IOsDriverExtension = IOsDriverExtension;
($traceurRuntime.createClass)(IOsDriverExtension, {
  gc: function() {
    return this._driver.executeScript('window.gc()');
  },
  timeBegin: function(name) {
    assert.argumentTypes(name, assert.type.string);
    return assert.returnType((this._driver.executeScript(("console.time('" + name + "');"))), Promise);
  },
  timeEnd: function(name) {
    var restartName = arguments[1] !== (void 0) ? arguments[1] : null;
    assert.argumentTypes(name, assert.type.string, restartName, assert.type.string);
    var script = ("console.timeEnd('" + name + "');");
    if (isPresent(restartName)) {
      script += ("console.time('" + restartName + "');");
    }
    return assert.returnType((this._driver.executeScript(script)), Promise);
  },
  readPerfLog: function() {
    var $__7 = this;
    return this._driver.executeScript('1+1').then((function(_) {
      return $__7._driver.logs('performance');
    })).then((function(entries) {
      var records = [];
      ListWrapper.forEach(entries, function(entry) {
        var message = Json.parse(entry['message'])['message'];
        if (StringWrapper.equals(message['method'], 'Timeline.eventRecorded')) {
          ListWrapper.push(records, message['params']['record']);
        }
      });
      return $__7._convertPerfRecordsToEvents(records);
    }));
  },
  _convertPerfRecordsToEvents: function(records) {
    var events = arguments[1] !== (void 0) ? arguments[1] : null;
    var $__7 = this;
    if (isBlank(events)) {
      events = [];
    }
    records.forEach((function(record) {
      var endEvent = null;
      var type = record['type'];
      var data = record['data'];
      var startTime = record['startTime'];
      var endTime = record['endTime'];
      if (StringWrapper.equals(type, 'FunctionCall') && (isBlank(data) || !StringWrapper.equals(data['scriptName'], 'InjectedScript'))) {
        ListWrapper.push(events, createStartEvent('script', startTime));
        endEvent = createEndEvent('script', endTime);
      } else if (StringWrapper.equals(type, 'Time')) {
        ListWrapper.push(events, createMarkStartEvent(data['message'], startTime));
      } else if (StringWrapper.equals(type, 'TimeEnd')) {
        ListWrapper.push(events, createMarkEndEvent(data['message'], startTime));
      } else if (StringWrapper.equals(type, 'RecalculateStyles') || StringWrapper.equals(type, 'Layout') || StringWrapper.equals(type, 'UpdateLayerTree') || StringWrapper.equals(type, 'Paint') || StringWrapper.equals(type, 'Rasterize') || StringWrapper.equals(type, 'CompositeLayers')) {
        ListWrapper.push(events, createStartEvent('render', startTime));
        endEvent = createEndEvent('render', endTime);
      } else if (StringWrapper.equals(type, 'GCEvent')) {
        ListWrapper.push(events, createStartEvent('gc', startTime, {'usedHeapSize': 0}));
        endEvent = createEndEvent('gc', endTime, {'usedHeapSize': -data['usedHeapSizeDelta']});
      }
      if (isPresent(record['children'])) {
        $__7._convertPerfRecordsToEvents(record['children'], events);
      }
      if (isPresent(endEvent)) {
        ListWrapper.push(events, endEvent);
      }
    }));
    return events;
  },
  supports: function(capabilities) {
    assert.argumentTypes(capabilities, StringMap);
    return assert.returnType((StringWrapper.equals(capabilities['browserName'].toLowerCase(), 'safari')), assert.type.boolean);
  }
}, {get BINDINGS() {
    return _BINDINGS;
  }}, WebDriverExtension);
Object.defineProperty(IOsDriverExtension, "parameters", {get: function() {
    return [[WebDriverAdapter]];
  }});
Object.defineProperty(IOsDriverExtension.prototype.timeBegin, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
Object.defineProperty(IOsDriverExtension.prototype.timeEnd, "parameters", {get: function() {
    return [[assert.type.string], [assert.type.string]];
  }});
Object.defineProperty(IOsDriverExtension.prototype.supports, "parameters", {get: function() {
    return [[StringMap]];
  }});
function createEvent(ph, name, time) {
  var args = arguments[3] !== (void 0) ? arguments[3] : null;
  var result = {
    'cat': 'timeline',
    'name': name,
    'ts': time,
    'ph': ph,
    'pid': 'pid0'
  };
  if (isPresent(args)) {
    result['args'] = args;
  }
  return result;
}
function createStartEvent(name, time) {
  var args = arguments[2] !== (void 0) ? arguments[2] : null;
  return createEvent('B', name, time, args);
}
function createEndEvent(name, time) {
  var args = arguments[2] !== (void 0) ? arguments[2] : null;
  return createEvent('E', name, time, args);
}
function createMarkStartEvent(name, time) {
  return createEvent('b', name, time);
}
function createMarkEndEvent(name, time) {
  return createEvent('e', name, time);
}
var _BINDINGS = [bind(IOsDriverExtension).toFactory((function(driver) {
  return new IOsDriverExtension(driver);
}), [WebDriverAdapter])];

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/benchpress/src/webdriver/ios_driver_extension.map

//# sourceMappingURL=./ios_driver_extension.map