"use strict";
Object.defineProperties(module.exports, {
  NO_CHANGE: {get: function() {
      return NO_CHANGE;
    }},
  Pipe: {get: function() {
      return Pipe;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/src/change_detection/pipes/pipe";
var $__rtts_95_assert_47_rtts_95_assert__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var NO_CHANGE = new Object();
var Pipe = function Pipe() {};
($traceurRuntime.createClass)(Pipe, {
  supports: function(obj) {
    return assert.returnType((false), assert.type.boolean);
  },
  onDestroy: function() {},
  transform: function(value) {
    assert.argumentTypes(value, assert.type.any);
    return assert.returnType((null), assert.type.any);
  }
}, {});
Object.defineProperty(Pipe.prototype.transform, "parameters", {get: function() {
    return [[assert.type.any]];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/change_detection/pipes/pipe.map

//# sourceMappingURL=./pipe.map