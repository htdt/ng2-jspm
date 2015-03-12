System.register(["angular2/di", "./common", "./src/webdriver/selenium_webdriver_adapter"], function($__export) {
  "use strict";
  var bind,
      JsonFileReporter,
      fs;
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
  var $__exportNames = {undefined: true};
  return {
    setters: [function($__m) {
      bind = $__m.bind;
    }, function($__m) {
      JsonFileReporter = $__m.JsonFileReporter;
      Object.keys($__m).forEach(function(p) {
        if (!$__exportNames[p])
          $__export(p, $__m[p]);
      });
    }, function($__m) {
      $__export("SeleniumWebDriverAdapter", $__m.SeleniumWebDriverAdapter);
    }],
    execute: function() {
      fs = require('fs');
      JsonFileReporter.BINDINGS.push(bind(JsonFileReporter.WRITE_FILE).toValue(writeFile));
    }
  };
});

//# sourceMappingURL=benchpress/benchpress.map

//# sourceMappingURL=../benchpress/benchpress.js.map