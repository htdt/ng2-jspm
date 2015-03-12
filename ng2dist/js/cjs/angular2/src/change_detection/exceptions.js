"use strict";
Object.defineProperties(module.exports, {
  ExpressionChangedAfterItHasBeenChecked: {get: function() {
      return ExpressionChangedAfterItHasBeenChecked;
    }},
  ChangeDetectionError: {get: function() {
      return ChangeDetectionError;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/src/change_detection/exceptions";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_src_47_change_95_detection_47_proto_95_record__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var ProtoRecord = ($__angular2_47_src_47_change_95_detection_47_proto_95_record__ = require("./proto_record"), $__angular2_47_src_47_change_95_detection_47_proto_95_record__ && $__angular2_47_src_47_change_95_detection_47_proto_95_record__.__esModule && $__angular2_47_src_47_change_95_detection_47_proto_95_record__ || {default: $__angular2_47_src_47_change_95_detection_47_proto_95_record__}).ProtoRecord;
var ExpressionChangedAfterItHasBeenChecked = function ExpressionChangedAfterItHasBeenChecked(proto, change) {
  assert.argumentTypes(proto, ProtoRecord, change, assert.type.any);
  $traceurRuntime.superConstructor($ExpressionChangedAfterItHasBeenChecked).call(this);
  this.message = ("Expression '" + proto.expressionAsString + "' has changed after it was checked. ") + ("Previous value: '" + change.previousValue + "'. Current value: '" + change.currentValue + "'");
};
var $ExpressionChangedAfterItHasBeenChecked = ExpressionChangedAfterItHasBeenChecked;
($traceurRuntime.createClass)(ExpressionChangedAfterItHasBeenChecked, {toString: function() {
    return assert.returnType((this.message), assert.type.string);
  }}, {}, Error);
Object.defineProperty(ExpressionChangedAfterItHasBeenChecked, "parameters", {get: function() {
    return [[ProtoRecord], [assert.type.any]];
  }});
var ChangeDetectionError = function ChangeDetectionError(proto, originalException) {
  assert.argumentTypes(proto, ProtoRecord, originalException, assert.type.any);
  $traceurRuntime.superConstructor($ChangeDetectionError).call(this);
  this.originalException = originalException;
  this.location = proto.expressionAsString;
  this.message = (this.originalException + " in [" + this.location + "]");
};
var $ChangeDetectionError = ChangeDetectionError;
($traceurRuntime.createClass)(ChangeDetectionError, {toString: function() {
    return assert.returnType((this.message), assert.type.string);
  }}, {}, Error);
Object.defineProperty(ChangeDetectionError, "parameters", {get: function() {
    return [[ProtoRecord], [assert.type.any]];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/change_detection/exceptions.map

//# sourceMappingURL=./exceptions.map