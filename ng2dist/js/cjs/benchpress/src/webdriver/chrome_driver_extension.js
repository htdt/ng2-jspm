"use strict";
Object.defineProperties(module.exports, {
  ChromeDriverExtension: {get: function() {
      return ChromeDriverExtension;
    }},
  __esModule: {value: true}
});
var __moduleName = "benchpress/src/webdriver/chrome_driver_extension";
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
    StringMapWrapper = $__2.StringMapWrapper,
    StringMap = $__2.StringMap;
var $__3 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    Json = $__3.Json,
    isPresent = $__3.isPresent,
    isBlank = $__3.isBlank,
    RegExpWrapper = $__3.RegExpWrapper,
    StringWrapper = $__3.StringWrapper,
    BaseException = $__3.BaseException,
    NumberWrapper = $__3.NumberWrapper;
var WebDriverExtension = ($__benchpress_47_src_47_web_95_driver_95_extension__ = require("../web_driver_extension"), $__benchpress_47_src_47_web_95_driver_95_extension__ && $__benchpress_47_src_47_web_95_driver_95_extension__.__esModule && $__benchpress_47_src_47_web_95_driver_95_extension__ || {default: $__benchpress_47_src_47_web_95_driver_95_extension__}).WebDriverExtension;
var WebDriverAdapter = ($__benchpress_47_src_47_web_95_driver_95_adapter__ = require("../web_driver_adapter"), $__benchpress_47_src_47_web_95_driver_95_adapter__ && $__benchpress_47_src_47_web_95_driver_95_adapter__.__esModule && $__benchpress_47_src_47_web_95_driver_95_adapter__ || {default: $__benchpress_47_src_47_web_95_driver_95_adapter__}).WebDriverAdapter;
var Promise = ($__angular2_47_src_47_facade_47_async__ = require("angular2/src/facade/async"), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}).Promise;
var ChromeDriverExtension = function ChromeDriverExtension(driver) {
  assert.argumentTypes(driver, WebDriverAdapter);
  $traceurRuntime.superConstructor($ChromeDriverExtension).call(this);
  this._driver = driver;
};
var $ChromeDriverExtension = ChromeDriverExtension;
($traceurRuntime.createClass)(ChromeDriverExtension, {
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
      var events = [];
      ListWrapper.forEach(entries, function(entry) {
        var message = Json.parse(entry['message'])['message'];
        if (StringWrapper.equals(message['method'], 'Tracing.dataCollected')) {
          ListWrapper.push(events, message['params']);
        }
        if (StringWrapper.equals(message['method'], 'Tracing.bufferUsage')) {
          throw new BaseException('The DevTools trace buffer filled during the test!');
        }
      });
      return $__7._convertPerfRecordsToEvents(events);
    }));
  },
  _convertPerfRecordsToEvents: function(chromeEvents) {
    var normalizedEvents = arguments[1] !== (void 0) ? arguments[1] : null;
    if (isBlank(normalizedEvents)) {
      normalizedEvents = [];
    }
    var majorGCPids = {};
    chromeEvents.forEach((function(event) {
      var cat = event['cat'];
      var name = event['name'];
      var args = event['args'];
      var pid = event['pid'];
      var ph = event['ph'];
      if (StringWrapper.equals(cat, 'disabled-by-default-devtools.timeline')) {
        if (StringWrapper.equals(name, 'FunctionCall') && (isBlank(args) || isBlank(args['data']) || !StringWrapper.equals(args['data']['scriptName'], 'InjectedScript'))) {
          ListWrapper.push(normalizedEvents, normalizeEvent(event, {'name': 'script'}));
        } else if (StringWrapper.equals(name, 'RecalculateStyles') || StringWrapper.equals(name, 'Layout') || StringWrapper.equals(name, 'UpdateLayerTree') || StringWrapper.equals(name, 'Paint') || StringWrapper.equals(name, 'Rasterize') || StringWrapper.equals(name, 'CompositeLayers')) {
          ListWrapper.push(normalizedEvents, normalizeEvent(event, {'name': 'render'}));
        } else if (StringWrapper.equals(name, 'GCEvent')) {
          var normArgs = {'usedHeapSize': isPresent(args['usedHeapSizeAfter']) ? args['usedHeapSizeAfter'] : args['usedHeapSizeBefore']};
          if (StringWrapper.equals(event['ph'], 'E')) {
            normArgs['majorGc'] = isPresent(majorGCPids[pid]) && majorGCPids[pid];
          }
          majorGCPids[pid] = false;
          ListWrapper.push(normalizedEvents, normalizeEvent(event, {
            'name': 'gc',
            'args': normArgs
          }));
        }
      } else if (StringWrapper.equals(cat, 'blink.console')) {
        ListWrapper.push(normalizedEvents, normalizeEvent(event, {'name': name}));
      } else if (StringWrapper.equals(cat, 'v8')) {
        if (StringWrapper.equals(name, 'majorGC')) {
          if (StringWrapper.equals(ph, 'B')) {
            majorGCPids[pid] = true;
          }
        }
      }
    }));
    return normalizedEvents;
  },
  supports: function(capabilities) {
    assert.argumentTypes(capabilities, StringMap);
    return assert.returnType((StringWrapper.equals(capabilities['browserName'].toLowerCase(), 'chrome')), assert.type.boolean);
  }
}, {get BINDINGS() {
    return _BINDINGS;
  }}, WebDriverExtension);
Object.defineProperty(ChromeDriverExtension, "parameters", {get: function() {
    return [[WebDriverAdapter]];
  }});
Object.defineProperty(ChromeDriverExtension.prototype.timeBegin, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
Object.defineProperty(ChromeDriverExtension.prototype.timeEnd, "parameters", {get: function() {
    return [[assert.type.string], [assert.type.string]];
  }});
Object.defineProperty(ChromeDriverExtension.prototype.supports, "parameters", {get: function() {
    return [[StringMap]];
  }});
function normalizeEvent(chromeEvent, data) {
  var ph = chromeEvent['ph'];
  if (StringWrapper.equals(ph, 'S')) {
    ph = 'b';
  } else if (StringWrapper.equals(ph, 'F')) {
    ph = 'e';
  }
  var result = {
    'pid': chromeEvent['pid'],
    'ph': ph,
    'cat': 'timeline',
    'ts': chromeEvent['ts'] / 1000
  };
  if (chromeEvent['ph'] === 'X') {
    var dur = chromeEvent['dur'];
    if (isBlank(dur)) {
      dur = chromeEvent['tdur'];
    }
    result['dur'] = isBlank(dur) ? 0.0 : dur / 1000;
  }
  StringMapWrapper.forEach(data, (function(value, prop) {
    result[prop] = value;
  }));
  return result;
}
var _BINDINGS = [bind(ChromeDriverExtension).toFactory((function(driver) {
  return new ChromeDriverExtension(driver);
}), [WebDriverAdapter])];

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/benchpress/src/webdriver/chrome_driver_extension.map

//# sourceMappingURL=./chrome_driver_extension.map