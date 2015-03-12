"use strict";
Object.defineProperties(module.exports, {
  AbstractChangeDetector: {get: function() {
      return AbstractChangeDetector;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/src/change_detection/abstract_change_detector";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_change_95_detection_47_interfaces__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var isPresent = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).isPresent;
var $__2 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    List = $__2.List,
    ListWrapper = $__2.ListWrapper;
var $__3 = ($__angular2_47_src_47_change_95_detection_47_interfaces__ = require("./interfaces"), $__angular2_47_src_47_change_95_detection_47_interfaces__ && $__angular2_47_src_47_change_95_detection_47_interfaces__.__esModule && $__angular2_47_src_47_change_95_detection_47_interfaces__ || {default: $__angular2_47_src_47_change_95_detection_47_interfaces__}),
    ChangeDetector = $__3.ChangeDetector,
    CHECK_ALWAYS = $__3.CHECK_ALWAYS,
    CHECK_ONCE = $__3.CHECK_ONCE,
    CHECKED = $__3.CHECKED,
    DETACHED = $__3.DETACHED;
var AbstractChangeDetector = function AbstractChangeDetector() {
  $traceurRuntime.superConstructor($AbstractChangeDetector).call(this);
  this.children = [];
  this.mode = CHECK_ALWAYS;
};
var $AbstractChangeDetector = AbstractChangeDetector;
($traceurRuntime.createClass)(AbstractChangeDetector, {
  addChild: function(cd) {
    assert.argumentTypes(cd, ChangeDetector);
    ListWrapper.push(this.children, cd);
    cd.parent = this;
  },
  removeChild: function(cd) {
    assert.argumentTypes(cd, ChangeDetector);
    ListWrapper.remove(this.children, cd);
  },
  remove: function() {
    this.parent.removeChild(this);
  },
  detectChanges: function() {
    this._detectChanges(false);
  },
  checkNoChanges: function() {
    this._detectChanges(true);
  },
  _detectChanges: function(throwOnChange) {
    assert.argumentTypes(throwOnChange, assert.type.boolean);
    if (this.mode === DETACHED || this.mode === CHECKED)
      return ;
    this.detectChangesInRecords(throwOnChange);
    this._detectChangesInChildren(throwOnChange);
    if (this.mode === CHECK_ONCE)
      this.mode = CHECKED;
  },
  detectChangesInRecords: function(throwOnChange) {
    assert.argumentTypes(throwOnChange, assert.type.boolean);
  },
  _detectChangesInChildren: function(throwOnChange) {
    assert.argumentTypes(throwOnChange, assert.type.boolean);
    var children = this.children;
    for (var i = 0; i < children.length; ++i) {
      children[i]._detectChanges(throwOnChange);
    }
  },
  markPathToRootAsCheckOnce: function() {
    var c = this;
    while (isPresent(c) && c.mode != DETACHED) {
      if (c.mode === CHECKED)
        c.mode = CHECK_ONCE;
      c = c.parent;
    }
  }
}, {}, ChangeDetector);
Object.defineProperty(AbstractChangeDetector.prototype.addChild, "parameters", {get: function() {
    return [[ChangeDetector]];
  }});
Object.defineProperty(AbstractChangeDetector.prototype.removeChild, "parameters", {get: function() {
    return [[ChangeDetector]];
  }});
Object.defineProperty(AbstractChangeDetector.prototype._detectChanges, "parameters", {get: function() {
    return [[assert.type.boolean]];
  }});
Object.defineProperty(AbstractChangeDetector.prototype.detectChangesInRecords, "parameters", {get: function() {
    return [[assert.type.boolean]];
  }});
Object.defineProperty(AbstractChangeDetector.prototype._detectChangesInChildren, "parameters", {get: function() {
    return [[assert.type.boolean]];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/change_detection/abstract_change_detector.map

//# sourceMappingURL=./abstract_change_detector.map