"use strict";
var __moduleName = "benchpress/benchpress";
var $__angular2_47_di__,
    $__benchpress_47_common__,
    $__benchpress_47_common__,
    $__benchpress_47_src_47_webdriver_47_selenium_95_webdriver_95_adapter__;
var bind = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}).bind;
var JsonFileReporter = ($__benchpress_47_common__ = require("./common"), $__benchpress_47_common__ && $__benchpress_47_common__.__esModule && $__benchpress_47_common__ || {default: $__benchpress_47_common__}).JsonFileReporter;
var $__benchpress_47_common__ = ($__benchpress_47_common__ = require("./common"), $__benchpress_47_common__ && $__benchpress_47_common__.__esModule && $__benchpress_47_common__ || {default: $__benchpress_47_common__});
var $__benchpress_47_src_47_webdriver_47_selenium_95_webdriver_95_adapter__ = ($__benchpress_47_src_47_webdriver_47_selenium_95_webdriver_95_adapter__ = require("./src/webdriver/selenium_webdriver_adapter"), $__benchpress_47_src_47_webdriver_47_selenium_95_webdriver_95_adapter__ && $__benchpress_47_src_47_webdriver_47_selenium_95_webdriver_95_adapter__.__esModule && $__benchpress_47_src_47_webdriver_47_selenium_95_webdriver_95_adapter__ || {default: $__benchpress_47_src_47_webdriver_47_selenium_95_webdriver_95_adapter__});
var fs = require('fs');
JsonFileReporter.BINDINGS.push(bind(JsonFileReporter.WRITE_FILE).toValue(writeFile));
function writeFile(filename, content) {
  return new Promise(function(resolve, reject) {
    fs.writeFile(filename, content, (function(error) {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    }));
  });
}
module.exports = $traceurRuntime.exportStar({
  get SeleniumWebDriverAdapter() {
    return $__benchpress_47_src_47_webdriver_47_selenium_95_webdriver_95_adapter__.SeleniumWebDriverAdapter;
  },
  __esModule: true
}, $__benchpress_47_common__);

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/benchpress/benchpress.map

//# sourceMappingURL=./benchpress.map