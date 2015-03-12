"use strict";
Object.defineProperties(module.exports, {
  OpaqueToken: {get: function() {
      return OpaqueToken;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/src/di/opaque_token";
var $__rtts_95_assert_47_rtts_95_assert__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var OpaqueToken = function OpaqueToken(desc) {
  assert.argumentTypes(desc, assert.type.string);
  this._desc = ("Token(" + desc + ")");
};
($traceurRuntime.createClass)(OpaqueToken, {toString: function() {
    return this._desc;
  }}, {});
Object.defineProperty(OpaqueToken, "parameters", {get: function() {
    return [[assert.type.string]];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/di/opaque_token.map

//# sourceMappingURL=./opaque_token.map