"use strict";
Object.defineProperties(module.exports, {
  window: {get: function() {
      return win;
    }},
  document: {get: function() {
      return document;
    }},
  location: {get: function() {
      return location;
    }},
  gc: {get: function() {
      return gc;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/src/facade/browser";
var win = window;
;
var document = window.document;
var location = window.location;
var gc = window.gc ? (function() {
  return window.gc();
}) : (function() {
  return null;
});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/facade/browser.map

//# sourceMappingURL=./browser.map