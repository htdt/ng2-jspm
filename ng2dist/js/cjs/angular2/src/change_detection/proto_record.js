"use strict";
Object.defineProperties(module.exports, {
  RECORD_TYPE_SELF: {get: function() {
      return RECORD_TYPE_SELF;
    }},
  RECORD_TYPE_CONST: {get: function() {
      return RECORD_TYPE_CONST;
    }},
  RECORD_TYPE_PRIMITIVE_OP: {get: function() {
      return RECORD_TYPE_PRIMITIVE_OP;
    }},
  RECORD_TYPE_PROPERTY: {get: function() {
      return RECORD_TYPE_PROPERTY;
    }},
  RECORD_TYPE_INVOKE_METHOD: {get: function() {
      return RECORD_TYPE_INVOKE_METHOD;
    }},
  RECORD_TYPE_INVOKE_CLOSURE: {get: function() {
      return RECORD_TYPE_INVOKE_CLOSURE;
    }},
  RECORD_TYPE_KEYED_ACCESS: {get: function() {
      return RECORD_TYPE_KEYED_ACCESS;
    }},
  RECORD_TYPE_PIPE: {get: function() {
      return RECORD_TYPE_PIPE;
    }},
  RECORD_TYPE_INTERPOLATE: {get: function() {
      return RECORD_TYPE_INTERPOLATE;
    }},
  ProtoRecord: {get: function() {
      return ProtoRecord;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/src/change_detection/proto_record";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_src_47_facade_47_collection__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var List = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}).List;
var RECORD_TYPE_SELF = 0;
var RECORD_TYPE_CONST = 1;
var RECORD_TYPE_PRIMITIVE_OP = 2;
var RECORD_TYPE_PROPERTY = 3;
var RECORD_TYPE_INVOKE_METHOD = 4;
var RECORD_TYPE_INVOKE_CLOSURE = 5;
var RECORD_TYPE_KEYED_ACCESS = 6;
var RECORD_TYPE_PIPE = 8;
var RECORD_TYPE_INTERPOLATE = 9;
var ProtoRecord = function ProtoRecord(mode, name, funcOrValue, args, fixedArgs, contextIndex, selfIndex, bindingMemento, directiveMemento, expressionAsString, lastInBinding, lastInDirective) {
  assert.argumentTypes(mode, assert.type.number, name, assert.type.string, funcOrValue, assert.type.any, args, List, fixedArgs, List, contextIndex, assert.type.number, selfIndex, assert.type.number, bindingMemento, assert.type.any, directiveMemento, assert.type.any, expressionAsString, assert.type.string, lastInBinding, assert.type.boolean, lastInDirective, assert.type.boolean);
  this.mode = mode;
  this.name = name;
  this.funcOrValue = funcOrValue;
  this.args = args;
  this.fixedArgs = fixedArgs;
  this.contextIndex = contextIndex;
  this.selfIndex = selfIndex;
  this.bindingMemento = bindingMemento;
  this.directiveMemento = directiveMemento;
  this.lastInBinding = lastInBinding;
  this.lastInDirective = lastInDirective;
  this.expressionAsString = expressionAsString;
};
($traceurRuntime.createClass)(ProtoRecord, {isPureFunction: function() {
    return assert.returnType((this.mode === RECORD_TYPE_INTERPOLATE || this.mode === RECORD_TYPE_PRIMITIVE_OP), assert.type.boolean);
  }}, {});
Object.defineProperty(ProtoRecord, "parameters", {get: function() {
    return [[assert.type.number], [assert.type.string], [], [List], [List], [assert.type.number], [assert.type.number], [assert.type.any], [assert.type.any], [assert.type.string], [assert.type.boolean], [assert.type.boolean]];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/change_detection/proto_record.map

//# sourceMappingURL=./proto_record.map