"use strict";
var __moduleName = "angular2/src/test_lib/e2e_util";
var webdriver = require('selenium-webdriver');
module.exports = {
  verifyNoBrowserErrors: verifyNoBrowserErrors,
  clickAll: clickAll
};
function clickAll(buttonSelectors) {
  buttonSelectors.forEach(function(selector) {
    $(selector).click();
  });
}
function verifyNoBrowserErrors() {
  browser.executeScript('1+1');
  browser.manage().logs().get('browser').then(function(browserLog) {
    var filteredLog = browserLog.filter(function(logEntry) {
      if (logEntry.level.value >= webdriver.logging.Level.INFO.value) {
        console.log('>> ' + logEntry.message);
      }
      return logEntry.level.value > webdriver.logging.Level.WARNING.value;
    });
    expect(filteredLog.length).toEqual(0);
  });
}

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/test_lib/e2e_util.map

//# sourceMappingURL=./e2e_util.map