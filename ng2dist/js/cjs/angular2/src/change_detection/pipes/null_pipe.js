"use strict";
Object.defineProperties(module.exports, {
  NullPipeFactory: {get: function() {
      return NullPipeFactory;
    }},
  NullPipe: {get: function() {
      return NullPipe;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/src/change_detection/pipes/null_pipe";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var isBlank = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).isBlank;
var $__2 = ($__angular2_47_src_47_change_95_detection_47_pipes_47_pipe__ = require("./pipe"), $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe__ && $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe__.__esModule && $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe__ || {default: $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe__}),
    Pipe = $__2.Pipe,
    NO_CHANGE = $__2.NO_CHANGE;
var NullPipeFactory = function NullPipeFactory() {};
($traceurRuntime.createClass)(NullPipeFactory, {
  supports: function(obj) {
    return assert.returnType((NullPipe.supportsObj(obj)), assert.type.boolean);
  },
  create: function() {
    return assert.returnType((new NullPipe()), Pipe);
  }
}, {});
var NullPipe = function NullPipe() {
  $traceurRuntime.superConstructor($NullPipe).call(this);
  this.called = false;
};
var $NullPipe = NullPipe;
($traceurRuntime.createClass)(NullPipe, {
  supports: function(obj) {
    return $NullPipe.supportsObj(obj);
  },
  transform: function(value) {
    if (!this.called) {
      this.called = true;
      return null;
    } else {
      return NO_CHANGE;
    }
  }
}, {supportsObj: function(obj) {
    return assert.returnType((isBlank(obj)), assert.type.boolean);
  }}, Pipe);

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/change_detection/pipes/null_pipe.map

//# sourceMappingURL=./null_pipe.map