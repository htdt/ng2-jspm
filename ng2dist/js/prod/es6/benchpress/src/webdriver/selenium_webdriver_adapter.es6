import {Promise,
  PromiseWrapper} from 'angular2/src/facade/async';
import {bind} from 'angular2/di';
import {WebDriverAdapter} from '../web_driver_adapter';
import webdriver from 'selenium-webdriver';
export class SeleniumWebDriverAdapter extends WebDriverAdapter {
  static get PROTRACTOR_BINDINGS() {
    return _PROTRACTOR_BINDINGS;
  }
  constructor(driver) {
    super();
    this._driver = driver;
  }
  _convertPromise(thenable) {
    var completer = PromiseWrapper.completer();
    thenable.then((data) => completer.resolve(convertToLocalProcess(data)), completer.reject);
    return completer.promise;
  }
  waitFor(callback) {
    return this._convertPromise(this._driver.controlFlow().execute(callback));
  }
  executeScript(script) {
    return this._convertPromise(this._driver.executeScript(script));
  }
  capabilities() {
    return this._convertPromise(this._driver.getCapabilities().then((capsObject) => capsObject.toJSON()));
  }
  logs(type) {
    return this._convertPromise(this._driver.schedule(new webdriver.Command(webdriver.CommandName.GET_LOG).setParameter('type', type), 'WebDriver.manage().logs().get(' + type + ')'));
  }
}
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
var _PROTRACTOR_BINDINGS = [bind(WebDriverAdapter).toFactory(() => new SeleniumWebDriverAdapter(global.browser), [])];

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/benchpress/src/webdriver/selenium_webdriver_adapter.map

//# sourceMappingURL=./selenium_webdriver_adapter.map