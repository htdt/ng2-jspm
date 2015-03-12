"use strict";
var __moduleName = "angular2/change_detection";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_src_47_change_95_detection_47_parser_47_ast__,
    $__angular2_47_src_47_change_95_detection_47_parser_47_lexer__,
    $__angular2_47_src_47_change_95_detection_47_parser_47_parser__,
    $__angular2_47_src_47_change_95_detection_47_parser_47_context_95_with_95_variable_95_bindings__,
    $__angular2_47_src_47_change_95_detection_47_exceptions__,
    $__angular2_47_src_47_change_95_detection_47_interfaces__,
    $__angular2_47_src_47_change_95_detection_47_proto_95_change_95_detector__,
    $__angular2_47_src_47_change_95_detection_47_dynamic_95_change_95_detector__,
    $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe_95_registry__,
    $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe__,
    $__angular2_47_src_47_change_95_detection_47_proto_95_change_95_detector__,
    $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe_95_registry__,
    $__angular2_47_src_47_change_95_detection_47_pipes_47_array_95_changes__,
    $__angular2_47_src_47_change_95_detection_47_pipes_47_keyvalue_95_changes__,
    $__angular2_47_src_47_change_95_detection_47_pipes_47_null_95_pipe__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var $__angular2_47_src_47_change_95_detection_47_parser_47_ast__ = ($__angular2_47_src_47_change_95_detection_47_parser_47_ast__ = require("./src/change_detection/parser/ast"), $__angular2_47_src_47_change_95_detection_47_parser_47_ast__ && $__angular2_47_src_47_change_95_detection_47_parser_47_ast__.__esModule && $__angular2_47_src_47_change_95_detection_47_parser_47_ast__ || {default: $__angular2_47_src_47_change_95_detection_47_parser_47_ast__});
var $__angular2_47_src_47_change_95_detection_47_parser_47_lexer__ = ($__angular2_47_src_47_change_95_detection_47_parser_47_lexer__ = require("./src/change_detection/parser/lexer"), $__angular2_47_src_47_change_95_detection_47_parser_47_lexer__ && $__angular2_47_src_47_change_95_detection_47_parser_47_lexer__.__esModule && $__angular2_47_src_47_change_95_detection_47_parser_47_lexer__ || {default: $__angular2_47_src_47_change_95_detection_47_parser_47_lexer__});
var $__angular2_47_src_47_change_95_detection_47_parser_47_parser__ = ($__angular2_47_src_47_change_95_detection_47_parser_47_parser__ = require("./src/change_detection/parser/parser"), $__angular2_47_src_47_change_95_detection_47_parser_47_parser__ && $__angular2_47_src_47_change_95_detection_47_parser_47_parser__.__esModule && $__angular2_47_src_47_change_95_detection_47_parser_47_parser__ || {default: $__angular2_47_src_47_change_95_detection_47_parser_47_parser__});
var $__angular2_47_src_47_change_95_detection_47_parser_47_context_95_with_95_variable_95_bindings__ = ($__angular2_47_src_47_change_95_detection_47_parser_47_context_95_with_95_variable_95_bindings__ = require("./src/change_detection/parser/context_with_variable_bindings"), $__angular2_47_src_47_change_95_detection_47_parser_47_context_95_with_95_variable_95_bindings__ && $__angular2_47_src_47_change_95_detection_47_parser_47_context_95_with_95_variable_95_bindings__.__esModule && $__angular2_47_src_47_change_95_detection_47_parser_47_context_95_with_95_variable_95_bindings__ || {default: $__angular2_47_src_47_change_95_detection_47_parser_47_context_95_with_95_variable_95_bindings__});
var $__angular2_47_src_47_change_95_detection_47_exceptions__ = ($__angular2_47_src_47_change_95_detection_47_exceptions__ = require("./src/change_detection/exceptions"), $__angular2_47_src_47_change_95_detection_47_exceptions__ && $__angular2_47_src_47_change_95_detection_47_exceptions__.__esModule && $__angular2_47_src_47_change_95_detection_47_exceptions__ || {default: $__angular2_47_src_47_change_95_detection_47_exceptions__});
var $__angular2_47_src_47_change_95_detection_47_interfaces__ = ($__angular2_47_src_47_change_95_detection_47_interfaces__ = require("./src/change_detection/interfaces"), $__angular2_47_src_47_change_95_detection_47_interfaces__ && $__angular2_47_src_47_change_95_detection_47_interfaces__.__esModule && $__angular2_47_src_47_change_95_detection_47_interfaces__ || {default: $__angular2_47_src_47_change_95_detection_47_interfaces__});
var $__angular2_47_src_47_change_95_detection_47_proto_95_change_95_detector__ = ($__angular2_47_src_47_change_95_detection_47_proto_95_change_95_detector__ = require("./src/change_detection/proto_change_detector"), $__angular2_47_src_47_change_95_detection_47_proto_95_change_95_detector__ && $__angular2_47_src_47_change_95_detection_47_proto_95_change_95_detector__.__esModule && $__angular2_47_src_47_change_95_detection_47_proto_95_change_95_detector__ || {default: $__angular2_47_src_47_change_95_detection_47_proto_95_change_95_detector__});
var $__angular2_47_src_47_change_95_detection_47_dynamic_95_change_95_detector__ = ($__angular2_47_src_47_change_95_detection_47_dynamic_95_change_95_detector__ = require("./src/change_detection/dynamic_change_detector"), $__angular2_47_src_47_change_95_detection_47_dynamic_95_change_95_detector__ && $__angular2_47_src_47_change_95_detection_47_dynamic_95_change_95_detector__.__esModule && $__angular2_47_src_47_change_95_detection_47_dynamic_95_change_95_detector__ || {default: $__angular2_47_src_47_change_95_detection_47_dynamic_95_change_95_detector__});
var $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe_95_registry__ = ($__angular2_47_src_47_change_95_detection_47_pipes_47_pipe_95_registry__ = require("./src/change_detection/pipes/pipe_registry"), $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe_95_registry__ && $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe_95_registry__.__esModule && $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe_95_registry__ || {default: $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe_95_registry__});
var $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe__ = ($__angular2_47_src_47_change_95_detection_47_pipes_47_pipe__ = require("./src/change_detection/pipes/pipe"), $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe__ && $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe__.__esModule && $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe__ || {default: $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe__});
var $__1 = ($__angular2_47_src_47_change_95_detection_47_proto_95_change_95_detector__ = require("./src/change_detection/proto_change_detector"), $__angular2_47_src_47_change_95_detection_47_proto_95_change_95_detector__ && $__angular2_47_src_47_change_95_detection_47_proto_95_change_95_detector__.__esModule && $__angular2_47_src_47_change_95_detection_47_proto_95_change_95_detector__ || {default: $__angular2_47_src_47_change_95_detection_47_proto_95_change_95_detector__}),
    ProtoChangeDetector = $__1.ProtoChangeDetector,
    DynamicProtoChangeDetector = $__1.DynamicProtoChangeDetector,
    JitProtoChangeDetector = $__1.JitProtoChangeDetector;
var PipeRegistry = ($__angular2_47_src_47_change_95_detection_47_pipes_47_pipe_95_registry__ = require("./src/change_detection/pipes/pipe_registry"), $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe_95_registry__ && $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe_95_registry__.__esModule && $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe_95_registry__ || {default: $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe_95_registry__}).PipeRegistry;
var ArrayChangesFactory = ($__angular2_47_src_47_change_95_detection_47_pipes_47_array_95_changes__ = require("./src/change_detection/pipes/array_changes"), $__angular2_47_src_47_change_95_detection_47_pipes_47_array_95_changes__ && $__angular2_47_src_47_change_95_detection_47_pipes_47_array_95_changes__.__esModule && $__angular2_47_src_47_change_95_detection_47_pipes_47_array_95_changes__ || {default: $__angular2_47_src_47_change_95_detection_47_pipes_47_array_95_changes__}).ArrayChangesFactory;
var KeyValueChangesFactory = ($__angular2_47_src_47_change_95_detection_47_pipes_47_keyvalue_95_changes__ = require("./src/change_detection/pipes/keyvalue_changes"), $__angular2_47_src_47_change_95_detection_47_pipes_47_keyvalue_95_changes__ && $__angular2_47_src_47_change_95_detection_47_pipes_47_keyvalue_95_changes__.__esModule && $__angular2_47_src_47_change_95_detection_47_pipes_47_keyvalue_95_changes__ || {default: $__angular2_47_src_47_change_95_detection_47_pipes_47_keyvalue_95_changes__}).KeyValueChangesFactory;
var NullPipeFactory = ($__angular2_47_src_47_change_95_detection_47_pipes_47_null_95_pipe__ = require("./src/change_detection/pipes/null_pipe"), $__angular2_47_src_47_change_95_detection_47_pipes_47_null_95_pipe__ && $__angular2_47_src_47_change_95_detection_47_pipes_47_null_95_pipe__.__esModule && $__angular2_47_src_47_change_95_detection_47_pipes_47_null_95_pipe__ || {default: $__angular2_47_src_47_change_95_detection_47_pipes_47_null_95_pipe__}).NullPipeFactory;
var ChangeDetection = function ChangeDetection() {};
($traceurRuntime.createClass)(ChangeDetection, {createProtoChangeDetector: function(name) {
    assert.argumentTypes(name, assert.type.string);
    return assert.returnType((null), ProtoChangeDetector);
  }}, {});
Object.defineProperty(ChangeDetection.prototype.createProtoChangeDetector, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
var defaultPipes = {
  "iterableDiff": [new ArrayChangesFactory(), new NullPipeFactory()],
  "keyValDiff": [new KeyValueChangesFactory(), new NullPipeFactory()]
};
var DynamicChangeDetection = function DynamicChangeDetection(registry) {
  assert.argumentTypes(registry, PipeRegistry);
  $traceurRuntime.superConstructor($DynamicChangeDetection).call(this);
  this.registry = registry;
};
var $DynamicChangeDetection = DynamicChangeDetection;
($traceurRuntime.createClass)(DynamicChangeDetection, {createProtoChangeDetector: function(name) {
    assert.argumentTypes(name, assert.type.string);
    return assert.returnType((new DynamicProtoChangeDetector(this.registry)), ProtoChangeDetector);
  }}, {}, ChangeDetection);
Object.defineProperty(DynamicChangeDetection, "parameters", {get: function() {
    return [[PipeRegistry]];
  }});
Object.defineProperty(DynamicChangeDetection.prototype.createProtoChangeDetector, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
var JitChangeDetection = function JitChangeDetection(registry) {
  assert.argumentTypes(registry, PipeRegistry);
  $traceurRuntime.superConstructor($JitChangeDetection).call(this);
  this.registry = registry;
};
var $JitChangeDetection = JitChangeDetection;
($traceurRuntime.createClass)(JitChangeDetection, {createProtoChangeDetector: function(name) {
    assert.argumentTypes(name, assert.type.string);
    return assert.returnType((new JitProtoChangeDetector(this.registry)), ProtoChangeDetector);
  }}, {}, ChangeDetection);
Object.defineProperty(JitChangeDetection, "parameters", {get: function() {
    return [[PipeRegistry]];
  }});
Object.defineProperty(JitChangeDetection.prototype.createProtoChangeDetector, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
var _registry = new PipeRegistry(defaultPipes);
var dynamicChangeDetection = new DynamicChangeDetection(_registry);
var jitChangeDetection = new JitChangeDetection(_registry);
module.exports = $traceurRuntime.exportStar({
  get AST() {
    return $__angular2_47_src_47_change_95_detection_47_parser_47_ast__.AST;
  },
  get Lexer() {
    return $__angular2_47_src_47_change_95_detection_47_parser_47_lexer__.Lexer;
  },
  get Parser() {
    return $__angular2_47_src_47_change_95_detection_47_parser_47_parser__.Parser;
  },
  get ContextWithVariableBindings() {
    return $__angular2_47_src_47_change_95_detection_47_parser_47_context_95_with_95_variable_95_bindings__.ContextWithVariableBindings;
  },
  get ExpressionChangedAfterItHasBeenChecked() {
    return $__angular2_47_src_47_change_95_detection_47_exceptions__.ExpressionChangedAfterItHasBeenChecked;
  },
  get ChangeDetectionError() {
    return $__angular2_47_src_47_change_95_detection_47_exceptions__.ChangeDetectionError;
  },
  get ChangeRecord() {
    return $__angular2_47_src_47_change_95_detection_47_interfaces__.ChangeRecord;
  },
  get ChangeDispatcher() {
    return $__angular2_47_src_47_change_95_detection_47_interfaces__.ChangeDispatcher;
  },
  get ChangeDetector() {
    return $__angular2_47_src_47_change_95_detection_47_interfaces__.ChangeDetector;
  },
  get CHECK_ONCE() {
    return $__angular2_47_src_47_change_95_detection_47_interfaces__.CHECK_ONCE;
  },
  get CHECK_ALWAYS() {
    return $__angular2_47_src_47_change_95_detection_47_interfaces__.CHECK_ALWAYS;
  },
  get DETACHED() {
    return $__angular2_47_src_47_change_95_detection_47_interfaces__.DETACHED;
  },
  get CHECKED() {
    return $__angular2_47_src_47_change_95_detection_47_interfaces__.CHECKED;
  },
  get ProtoChangeDetector() {
    return $__angular2_47_src_47_change_95_detection_47_proto_95_change_95_detector__.ProtoChangeDetector;
  },
  get DynamicProtoChangeDetector() {
    return $__angular2_47_src_47_change_95_detection_47_proto_95_change_95_detector__.DynamicProtoChangeDetector;
  },
  get JitProtoChangeDetector() {
    return $__angular2_47_src_47_change_95_detection_47_proto_95_change_95_detector__.JitProtoChangeDetector;
  },
  get DynamicChangeDetector() {
    return $__angular2_47_src_47_change_95_detection_47_dynamic_95_change_95_detector__.DynamicChangeDetector;
  },
  get ChangeDetection() {
    return ChangeDetection;
  },
  get defaultPipes() {
    return defaultPipes;
  },
  get DynamicChangeDetection() {
    return DynamicChangeDetection;
  },
  get JitChangeDetection() {
    return JitChangeDetection;
  },
  get dynamicChangeDetection() {
    return dynamicChangeDetection;
  },
  get jitChangeDetection() {
    return jitChangeDetection;
  },
  __esModule: true
}, $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe_95_registry__, $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe__);

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/change_detection.map

//# sourceMappingURL=./change_detection.map