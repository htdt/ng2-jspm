"use strict";
Object.defineProperties(module.exports, {
  PipeRegistry: {get: function() {
      return PipeRegistry;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/src/change_detection/pipes/pipe_registry";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var $__1 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    List = $__1.List,
    ListWrapper = $__1.ListWrapper;
var $__2 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    isBlank = $__2.isBlank,
    isPresent = $__2.isPresent,
    BaseException = $__2.BaseException,
    CONST = $__2.CONST;
var Pipe = ($__angular2_47_src_47_change_95_detection_47_pipes_47_pipe__ = require("./pipe"), $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe__ && $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe__.__esModule && $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe__ || {default: $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe__}).Pipe;
var PipeRegistry = function PipeRegistry(config) {
  this.config = config;
};
($traceurRuntime.createClass)(PipeRegistry, {get: function(type, obj) {
    var listOfConfigs = this.config[type];
    if (isBlank(listOfConfigs)) {
      throw new BaseException(("Cannot find a pipe for type '" + type + "' object '" + obj + "'"));
    }
    var matchingConfig = ListWrapper.find(listOfConfigs, (function(pipeConfig) {
      return pipeConfig.supports(obj);
    }));
    if (isBlank(matchingConfig)) {
      throw new BaseException(("Cannot find a pipe for type '" + type + "' object '" + obj + "'"));
    }
    return assert.returnType((matchingConfig.create()), Pipe);
  }}, {});
Object.defineProperty(PipeRegistry.prototype.get, "parameters", {get: function() {
    return [[assert.type.string], []];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/change_detection/pipes/pipe_registry.map

//# sourceMappingURL=./pipe_registry.map