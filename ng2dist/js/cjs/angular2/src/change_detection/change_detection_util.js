"use strict";
Object.defineProperties(module.exports, {
  uninitialized: {get: function() {
      return uninitialized;
    }},
  SimpleChange: {get: function() {
      return SimpleChange;
    }},
  ChangeDetectionUtil: {get: function() {
      return ChangeDetectionUtil;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/src/change_detection/change_detection_util";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_change_95_detection_47_parser_47_context_95_with_95_variable_95_bindings__,
    $__angular2_47_src_47_change_95_detection_47_proto_95_record__,
    $__angular2_47_src_47_change_95_detection_47_exceptions__,
    $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe__,
    $__angular2_47_src_47_change_95_detection_47_interfaces__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var $__1 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    isPresent = $__1.isPresent,
    isBlank = $__1.isBlank,
    BaseException = $__1.BaseException,
    Type = $__1.Type;
var $__2 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    List = $__2.List,
    ListWrapper = $__2.ListWrapper,
    MapWrapper = $__2.MapWrapper,
    StringMapWrapper = $__2.StringMapWrapper;
var ContextWithVariableBindings = ($__angular2_47_src_47_change_95_detection_47_parser_47_context_95_with_95_variable_95_bindings__ = require("./parser/context_with_variable_bindings"), $__angular2_47_src_47_change_95_detection_47_parser_47_context_95_with_95_variable_95_bindings__ && $__angular2_47_src_47_change_95_detection_47_parser_47_context_95_with_95_variable_95_bindings__.__esModule && $__angular2_47_src_47_change_95_detection_47_parser_47_context_95_with_95_variable_95_bindings__ || {default: $__angular2_47_src_47_change_95_detection_47_parser_47_context_95_with_95_variable_95_bindings__}).ContextWithVariableBindings;
var ProtoRecord = ($__angular2_47_src_47_change_95_detection_47_proto_95_record__ = require("./proto_record"), $__angular2_47_src_47_change_95_detection_47_proto_95_record__ && $__angular2_47_src_47_change_95_detection_47_proto_95_record__.__esModule && $__angular2_47_src_47_change_95_detection_47_proto_95_record__ || {default: $__angular2_47_src_47_change_95_detection_47_proto_95_record__}).ProtoRecord;
var ExpressionChangedAfterItHasBeenChecked = ($__angular2_47_src_47_change_95_detection_47_exceptions__ = require("./exceptions"), $__angular2_47_src_47_change_95_detection_47_exceptions__ && $__angular2_47_src_47_change_95_detection_47_exceptions__.__esModule && $__angular2_47_src_47_change_95_detection_47_exceptions__ || {default: $__angular2_47_src_47_change_95_detection_47_exceptions__}).ExpressionChangedAfterItHasBeenChecked;
var NO_CHANGE = ($__angular2_47_src_47_change_95_detection_47_pipes_47_pipe__ = require("./pipes/pipe"), $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe__ && $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe__.__esModule && $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe__ || {default: $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe__}).NO_CHANGE;
var $__7 = ($__angular2_47_src_47_change_95_detection_47_interfaces__ = require("./interfaces"), $__angular2_47_src_47_change_95_detection_47_interfaces__ && $__angular2_47_src_47_change_95_detection_47_interfaces__.__esModule && $__angular2_47_src_47_change_95_detection_47_interfaces__ || {default: $__angular2_47_src_47_change_95_detection_47_interfaces__}),
    ChangeRecord = $__7.ChangeRecord,
    ChangeDetector = $__7.ChangeDetector,
    CHECK_ALWAYS = $__7.CHECK_ALWAYS,
    CHECK_ONCE = $__7.CHECK_ONCE,
    CHECKED = $__7.CHECKED,
    DETACHED = $__7.DETACHED;
var uninitialized = new Object();
var SimpleChange = function SimpleChange(previousValue, currentValue) {
  assert.argumentTypes(previousValue, assert.type.any, currentValue, assert.type.any);
  this.previousValue = previousValue;
  this.currentValue = currentValue;
};
($traceurRuntime.createClass)(SimpleChange, {}, {});
Object.defineProperty(SimpleChange, "parameters", {get: function() {
    return [[assert.type.any], [assert.type.any]];
  }});
var _simpleChangesIndex = 0;
var _simpleChanges = [new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null), new SimpleChange(null, null)];
var _changeRecordsIndex = 0;
var _changeRecords = [new ChangeRecord(null, null), new ChangeRecord(null, null), new ChangeRecord(null, null), new ChangeRecord(null, null), new ChangeRecord(null, null), new ChangeRecord(null, null), new ChangeRecord(null, null), new ChangeRecord(null, null), new ChangeRecord(null, null), new ChangeRecord(null, null), new ChangeRecord(null, null), new ChangeRecord(null, null), new ChangeRecord(null, null), new ChangeRecord(null, null), new ChangeRecord(null, null), new ChangeRecord(null, null), new ChangeRecord(null, null), new ChangeRecord(null, null), new ChangeRecord(null, null), new ChangeRecord(null, null)];
function _simpleChange(previousValue, currentValue) {
  var index = _simpleChangesIndex++ % 20;
  var s = _simpleChanges[index];
  s.previousValue = previousValue;
  s.currentValue = currentValue;
  return s;
}
function _changeRecord(bindingMemento, change) {
  var index = _changeRecordsIndex++ % 20;
  var s = _changeRecords[index];
  s.bindingMemento = bindingMemento;
  s.change = change;
  return s;
}
var _singleElementList = [null];
var ChangeDetectionUtil = function ChangeDetectionUtil() {};
($traceurRuntime.createClass)(ChangeDetectionUtil, {}, {
  unitialized: function() {
    return uninitialized;
  },
  arrayFn0: function() {
    return [];
  },
  arrayFn1: function(a1) {
    return [a1];
  },
  arrayFn2: function(a1, a2) {
    return [a1, a2];
  },
  arrayFn3: function(a1, a2, a3) {
    return [a1, a2, a3];
  },
  arrayFn4: function(a1, a2, a3, a4) {
    return [a1, a2, a3, a4];
  },
  arrayFn5: function(a1, a2, a3, a4, a5) {
    return [a1, a2, a3, a4, a5];
  },
  arrayFn6: function(a1, a2, a3, a4, a5, a6) {
    return [a1, a2, a3, a4, a5, a6];
  },
  arrayFn7: function(a1, a2, a3, a4, a5, a6, a7) {
    return [a1, a2, a3, a4, a5, a6, a7];
  },
  arrayFn8: function(a1, a2, a3, a4, a5, a6, a7, a8) {
    return [a1, a2, a3, a4, a5, a6, a7, a8];
  },
  arrayFn9: function(a1, a2, a3, a4, a5, a6, a7, a8, a9) {
    return [a1, a2, a3, a4, a5, a6, a7, a8, a9];
  },
  operation_negate: function(value) {
    return !value;
  },
  operation_add: function(left, right) {
    return left + right;
  },
  operation_subtract: function(left, right) {
    return left - right;
  },
  operation_multiply: function(left, right) {
    return left * right;
  },
  operation_divide: function(left, right) {
    return left / right;
  },
  operation_remainder: function(left, right) {
    return left % right;
  },
  operation_equals: function(left, right) {
    return left == right;
  },
  operation_not_equals: function(left, right) {
    return left != right;
  },
  operation_less_then: function(left, right) {
    return left < right;
  },
  operation_greater_then: function(left, right) {
    return left > right;
  },
  operation_less_or_equals_then: function(left, right) {
    return left <= right;
  },
  operation_greater_or_equals_then: function(left, right) {
    return left >= right;
  },
  operation_logical_and: function(left, right) {
    return left && right;
  },
  operation_logical_or: function(left, right) {
    return left || right;
  },
  cond: function(cond, trueVal, falseVal) {
    return cond ? trueVal : falseVal;
  },
  mapFn: function(keys) {
    function buildMap(values) {
      var res = StringMapWrapper.create();
      for (var i = 0; i < keys.length; ++i) {
        StringMapWrapper.set(res, keys[i], values[i]);
      }
      return res;
    }
    switch (keys.length) {
      case 0:
        return (function() {
          return [];
        });
      case 1:
        return (function(a1) {
          return buildMap([a1]);
        });
      case 2:
        return (function(a1, a2) {
          return buildMap([a1, a2]);
        });
      case 3:
        return (function(a1, a2, a3) {
          return buildMap([a1, a2, a3]);
        });
      case 4:
        return (function(a1, a2, a3, a4) {
          return buildMap([a1, a2, a3, a4]);
        });
      case 5:
        return (function(a1, a2, a3, a4, a5) {
          return buildMap([a1, a2, a3, a4, a5]);
        });
      case 6:
        return (function(a1, a2, a3, a4, a5, a6) {
          return buildMap([a1, a2, a3, a4, a5, a6]);
        });
      case 7:
        return (function(a1, a2, a3, a4, a5, a6, a7) {
          return buildMap([a1, a2, a3, a4, a5, a6, a7]);
        });
      case 8:
        return (function(a1, a2, a3, a4, a5, a6, a7, a8) {
          return buildMap([a1, a2, a3, a4, a5, a6, a7, a8]);
        });
      case 9:
        return (function(a1, a2, a3, a4, a5, a6, a7, a8, a9) {
          return buildMap([a1, a2, a3, a4, a5, a6, a7, a8, a9]);
        });
      default:
        throw new BaseException("Does not support literal maps with more than 9 elements");
    }
  },
  keyedAccess: function(obj, args) {
    return obj[args[0]];
  },
  findContext: function(name, c) {
    assert.argumentTypes(name, assert.type.string, c, assert.type.any);
    while (c instanceof ContextWithVariableBindings) {
      if (c.hasBinding(name)) {
        return c;
      }
      c = c.parent;
    }
    return c;
  },
  noChangeMarker: function(value) {
    return assert.returnType((value === NO_CHANGE), assert.type.boolean);
  },
  throwOnChange: function(proto, change) {
    assert.argumentTypes(proto, ProtoRecord, change, assert.type.any);
    throw new ExpressionChangedAfterItHasBeenChecked(proto, change);
  },
  simpleChange: function(previousValue, currentValue) {
    assert.argumentTypes(previousValue, assert.type.any, currentValue, assert.type.any);
    return assert.returnType((_simpleChange(previousValue, currentValue)), SimpleChange);
  },
  changeRecord: function(memento, change) {
    assert.argumentTypes(memento, assert.type.any, change, assert.type.any);
    return assert.returnType((_changeRecord(memento, change)), ChangeRecord);
  },
  simpleChangeRecord: function(memento, previousValue, currentValue) {
    assert.argumentTypes(memento, assert.type.any, previousValue, assert.type.any, currentValue, assert.type.any);
    return assert.returnType((_changeRecord(memento, _simpleChange(previousValue, currentValue))), ChangeRecord);
  },
  addRecord: function(updatedRecords, changeRecord) {
    assert.argumentTypes(updatedRecords, List, changeRecord, ChangeRecord);
    if (isBlank(updatedRecords)) {
      updatedRecords = _singleElementList;
      updatedRecords[0] = changeRecord;
    } else if (updatedRecords === _singleElementList) {
      updatedRecords = [_singleElementList[0], changeRecord];
    } else {
      ListWrapper.push(updatedRecords, changeRecord);
    }
    return assert.returnType((updatedRecords), List);
  }
});
Object.defineProperty(ChangeDetectionUtil.mapFn, "parameters", {get: function() {
    return [[List]];
  }});
Object.defineProperty(ChangeDetectionUtil.findContext, "parameters", {get: function() {
    return [[assert.type.string], []];
  }});
Object.defineProperty(ChangeDetectionUtil.throwOnChange, "parameters", {get: function() {
    return [[ProtoRecord], []];
  }});
Object.defineProperty(ChangeDetectionUtil.simpleChange, "parameters", {get: function() {
    return [[assert.type.any], [assert.type.any]];
  }});
Object.defineProperty(ChangeDetectionUtil.changeRecord, "parameters", {get: function() {
    return [[assert.type.any], [assert.type.any]];
  }});
Object.defineProperty(ChangeDetectionUtil.simpleChangeRecord, "parameters", {get: function() {
    return [[assert.type.any], [assert.type.any], [assert.type.any]];
  }});
Object.defineProperty(ChangeDetectionUtil.addRecord, "parameters", {get: function() {
    return [[List], [ChangeRecord]];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/change_detection/change_detection_util.map

//# sourceMappingURL=./change_detection_util.map