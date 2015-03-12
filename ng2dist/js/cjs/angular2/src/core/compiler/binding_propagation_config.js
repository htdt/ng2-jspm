"use strict";
Object.defineProperties(module.exports, {
  BindingPropagationConfig: {get: function() {
      return BindingPropagationConfig;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/src/core/compiler/binding_propagation_config";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_change_95_detection__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var $__1 = ($__angular2_47_change_95_detection__ = require("angular2/change_detection"), $__angular2_47_change_95_detection__ && $__angular2_47_change_95_detection__.__esModule && $__angular2_47_change_95_detection__ || {default: $__angular2_47_change_95_detection__}),
    ChangeDetector = $__1.ChangeDetector,
    CHECK_ONCE = $__1.CHECK_ONCE,
    DETACHED = $__1.DETACHED,
    CHECK_ALWAYS = $__1.CHECK_ALWAYS;
var BindingPropagationConfig = function BindingPropagationConfig(cd) {
  assert.argumentTypes(cd, ChangeDetector);
  this._cd = cd;
};
($traceurRuntime.createClass)(BindingPropagationConfig, {
  shouldBePropagated: function() {
    this._cd.mode = CHECK_ONCE;
  },
  shouldBePropagatedFromRoot: function() {
    this._cd.markPathToRootAsCheckOnce();
  },
  shouldNotPropagate: function() {
    this._cd.mode = DETACHED;
  },
  shouldAlwaysPropagate: function() {
    this._cd.mode = CHECK_ALWAYS;
  }
}, {});
Object.defineProperty(BindingPropagationConfig, "parameters", {get: function() {
    return [[ChangeDetector]];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/core/compiler/binding_propagation_config.map

//# sourceMappingURL=./binding_propagation_config.map