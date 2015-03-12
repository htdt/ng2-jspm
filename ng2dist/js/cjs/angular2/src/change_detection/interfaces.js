"use strict";
Object.defineProperties(module.exports, {
  ChangeRecord: {get: function() {
      return ChangeRecord;
    }},
  CHECK_ONCE: {get: function() {
      return CHECK_ONCE;
    }},
  CHECKED: {get: function() {
      return CHECKED;
    }},
  CHECK_ALWAYS: {get: function() {
      return CHECK_ALWAYS;
    }},
  DETACHED: {get: function() {
      return DETACHED;
    }},
  ChangeDispatcher: {get: function() {
      return ChangeDispatcher;
    }},
  ChangeDetector: {get: function() {
      return ChangeDetector;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/src/change_detection/interfaces";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_src_47_facade_47_collection__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var List = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}).List;
var ChangeRecord = function ChangeRecord(bindingMemento, change) {
  this.bindingMemento = bindingMemento;
  this.change = change;
};
($traceurRuntime.createClass)(ChangeRecord, {
  get currentValue() {
    return this.change.currentValue;
  },
  get previousValue() {
    return this.change.previousValue;
  }
}, {});
var CHECK_ONCE = "CHECK_ONCE";
var CHECKED = "CHECKED";
var CHECK_ALWAYS = "ALWAYS_CHECK";
var DETACHED = "DETACHED";
var ChangeDispatcher = function ChangeDispatcher() {};
($traceurRuntime.createClass)(ChangeDispatcher, {onRecordChange: function(directiveMemento, records) {
    assert.argumentTypes(directiveMemento, assert.type.any, records, assert.genericType(List, ChangeRecord));
  }}, {});
Object.defineProperty(ChangeDispatcher.prototype.onRecordChange, "parameters", {get: function() {
    return [[], [assert.genericType(List, ChangeRecord)]];
  }});
var ChangeDetector = function ChangeDetector() {};
var $ChangeDetector = ChangeDetector;
($traceurRuntime.createClass)(ChangeDetector, {
  addChild: function(cd) {
    assert.argumentTypes(cd, $ChangeDetector);
  },
  removeChild: function(cd) {
    assert.argumentTypes(cd, $ChangeDetector);
  },
  remove: function() {},
  hydrate: function(context) {
    assert.argumentTypes(context, assert.type.any);
  },
  dehydrate: function() {},
  markPathToRootAsCheckOnce: function() {},
  detectChanges: function() {},
  checkNoChanges: function() {}
}, {});
Object.defineProperty(ChangeDetector.prototype.addChild, "parameters", {get: function() {
    return [[ChangeDetector]];
  }});
Object.defineProperty(ChangeDetector.prototype.removeChild, "parameters", {get: function() {
    return [[ChangeDetector]];
  }});
Object.defineProperty(ChangeDetector.prototype.hydrate, "parameters", {get: function() {
    return [[assert.type.any]];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/change_detection/interfaces.map

//# sourceMappingURL=./interfaces.map