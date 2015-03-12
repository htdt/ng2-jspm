"use strict";
Object.defineProperties(module.exports, {
  SeleniumWebDriverAdapter: {get: function() {
      return SeleniumWebDriverAdapter;
    }},
  __esModule: {value: true}
});
var __moduleName = "benchpress/src/webdriver/selenium_webdriver_adapter";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_src_47_facade_47_async__,
    $__angular2_47_di__,
    $__benchpress_47_src_47_web_95_driver_95_adapter__,
    $__selenium_45_webdriver__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var $__1 = ($__angular2_47_src_47_facade_47_async__ = require("angular2/src/facade/async"), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}),
    Promise = $__1.Promise,
    PromiseWrapper = $__1.PromiseWrapper;
var bind = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}).bind;
var WebDriverAdapter = ($__benchpress_47_src_47_web_95_driver_95_adapter__ = require("../web_driver_adapter"), $__benchpress_47_src_47_web_95_driver_95_adapter__ && $__benchpress_47_src_47_web_95_driver_95_adapter__.__esModule && $__benchpress_47_src_47_web_95_driver_95_adapter__ || {default: $__benchpress_47_src_47_web_95_driver_95_adapter__}).WebDriverAdapter;
var webdriver = ($__selenium_45_webdriver__ = require("selenium-webdriver"), $__selenium_45_webdriver__ && $__selenium_45_webdriver__.__esModule && $__selenium_45_webdriver__ || {default: $__selenium_45_webdriver__}).default;
var SeleniumWebDriverAdapter = function SeleniumWebDriverAdapter(driver) {
  $traceurRuntime.superConstructor($SeleniumWebDriverAdapter).call(this);
  this._driver = driver;
};
var $SeleniumWebDriverAdapter = SeleniumWebDriverAdapter;
($traceurRuntime.createClass)(SeleniumWebDriverAdapter, {
  _convertPromise: function(thenable) {
    var completer = PromiseWrapper.completer();
    thenable.then((function(data) {
      return completer.resolve(convertToLocalProcess(data));
    }), completer.reject);
    return completer.promise;
  },
  waitFor: function(callback) {
    return assert.returnType((this._convertPromise(this._driver.controlFlow().execute(callback))), Promise);
  },
  executeScript: function(script) {
    assert.argumentTypes(script, assert.type.string);
    return assert.returnType((this._convertPromise(this._driver.executeScript(script))), Promise);
  },
  capabilities: function() {
    return assert.returnType((this._convertPromise(this._driver.getCapabilities().then((function(capsObject) {
      return capsObject.toJSON();
    })))), Promise);
  },
  logs: function(type) {
    assert.argumentTypes(type, assert.type.string);
    return assert.returnType((this._convertPromise(this._driver.schedule(new webdriver.Command(webdriver.CommandName.GET_LOG).setParameter('type', type), 'WebDriver.manage().logs().get(' + type + ')'))), Promise);
  }
}, {get PROTRACTOR_BINDINGS() {
    return _PROTRACTOR_BINDINGS;
  }}, WebDriverAdapter);
Object.defineProperty(SeleniumWebDriverAdapter.prototype.executeScript, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
Object.defineProperty(SeleniumWebDriverAdapter.prototype.logs, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
function convertToLocalProcess(data) {
  var serialized = JSON.stringify(data);
  if ('' + serialized === 'undefined') {
    return undefined;
  }
  return JSON.parse(serialized);
}
var _PROTRACTOR_BINDINGS = [bind(WebDriverAdapter).toFactory((function() {
  return new SeleniumWebDriverAdapter(global.browser);
}), [])];

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/benchpress/src/webdriver/selenium_webdriver_adapter.map

//# sourceMappingURL=./selenium_webdriver_adapter.map