System.register(["angular2/src/facade/async", "angular2/di", "../web_driver_adapter", "selenium-webdriver"], function($__export) {
  "use strict";
  var Promise,
      PromiseWrapper,
      bind,
      WebDriverAdapter,
      webdriver,
      SeleniumWebDriverAdapter,
      _PROTRACTOR_BINDINGS;
  function convertToLocalProcess(data) {
    var serialized = JSON.stringify(data);
    if ('' + serialized === 'undefined') {
      return undefined;
    }
    return JSON.parse(serialized);
  }
  return {
    setters: [function($__m) {
      Promise = $__m.Promise;
      PromiseWrapper = $__m.PromiseWrapper;
    }, function($__m) {
      bind = $__m.bind;
    }, function($__m) {
      WebDriverAdapter = $__m.WebDriverAdapter;
    }, function($__m) {
      webdriver = $__m.default;
    }],
    execute: function() {
      SeleniumWebDriverAdapter = $__export("SeleniumWebDriverAdapter", (function($__super) {
        var SeleniumWebDriverAdapter = function SeleniumWebDriverAdapter(driver) {
          $traceurRuntime.superConstructor(SeleniumWebDriverAdapter).call(this);
          this._driver = driver;
        };
        return ($traceurRuntime.createClass)(SeleniumWebDriverAdapter, {
          _convertPromise: function(thenable) {
            var completer = PromiseWrapper.completer();
            thenable.then((function(data) {
              return completer.resolve(convertToLocalProcess(data));
            }), completer.reject);
            return completer.promise;
          },
          waitFor: function(callback) {
            return this._convertPromise(this._driver.controlFlow().execute(callback));
          },
          executeScript: function(script) {
            return this._convertPromise(this._driver.executeScript(script));
          },
          capabilities: function() {
            return this._convertPromise(this._driver.getCapabilities().then((function(capsObject) {
              return capsObject.toJSON();
            })));
          },
          logs: function(type) {
            return this._convertPromise(this._driver.schedule(new webdriver.Command(webdriver.CommandName.GET_LOG).setParameter('type', type), 'WebDriver.manage().logs().get(' + type + ')'));
          }
        }, {get PROTRACTOR_BINDINGS() {
            return _PROTRACTOR_BINDINGS;
          }}, $__super);
      }(WebDriverAdapter)));
      Object.defineProperty(SeleniumWebDriverAdapter.prototype.executeScript, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
      Object.defineProperty(SeleniumWebDriverAdapter.prototype.logs, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
      _PROTRACTOR_BINDINGS = [bind(WebDriverAdapter).toFactory((function() {
        return new SeleniumWebDriverAdapter(global.browser);
      }), [])];
    }
  };
});

//# sourceMappingURL=benchpress/src/webdriver/selenium_webdriver_adapter.map

//# sourceMappingURL=../../../benchpress/src/webdriver/selenium_webdriver_adapter.js.map