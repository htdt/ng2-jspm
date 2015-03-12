import {bind} from 'angular2/di';
import {JsonFileReporter} from './common';
export * from './common';
export {SeleniumWebDriverAdapter} from './src/webdriver/selenium_webdriver_adapter';
var fs = require('fs');
JsonFileReporter.BINDINGS.push(bind(JsonFileReporter.WRITE_FILE).toValue(writeFile));
function writeFile(filename, content) {
  return new Promise(function(resolve, reject) {
    fs.writeFile(filename, content, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
}

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/benchpress/benchpress.map

//# sourceMappingURL=./benchpress.map