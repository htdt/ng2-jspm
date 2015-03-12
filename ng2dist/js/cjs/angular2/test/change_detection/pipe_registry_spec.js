var parse5Adapter = require('angular2/src/dom/parse5_adapter');
parse5Adapter.Parse5DomAdapter.makeCurrent();
"use strict";
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/test/change_detection/pipe_registry_spec";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_test_95_lib__,
    $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe_95_registry__,
    $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var $__1 = ($__angular2_47_test_95_lib__ = require("angular2/test_lib"), $__angular2_47_test_95_lib__ && $__angular2_47_test_95_lib__.__esModule && $__angular2_47_test_95_lib__ || {default: $__angular2_47_test_95_lib__}),
    ddescribe = $__1.ddescribe,
    describe = $__1.describe,
    it = $__1.it,
    iit = $__1.iit,
    xit = $__1.xit,
    expect = $__1.expect,
    beforeEach = $__1.beforeEach,
    afterEach = $__1.afterEach;
var PipeRegistry = ($__angular2_47_src_47_change_95_detection_47_pipes_47_pipe_95_registry__ = require("angular2/src/change_detection/pipes/pipe_registry"), $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe_95_registry__ && $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe_95_registry__.__esModule && $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe_95_registry__ || {default: $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe_95_registry__}).PipeRegistry;
var Pipe = ($__angular2_47_src_47_change_95_detection_47_pipes_47_pipe__ = require("angular2/src/change_detection/pipes/pipe"), $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe__ && $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe__.__esModule && $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe__ || {default: $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe__}).Pipe;
function main() {
  describe("pipe registry", (function() {
    var firstPipe = new Pipe();
    var secondPipe = new Pipe();
    it("should return the first pipe supporting the data type", (function() {
      var r = new PipeRegistry({"type": [new PipeFactory(false, firstPipe), new PipeFactory(true, secondPipe)]});
      expect(r.get("type", "some object")).toBe(secondPipe);
    }));
    it("should throw when no matching type", (function() {
      var r = new PipeRegistry({});
      expect((function() {
        return r.get("unknown", "some object");
      })).toThrowError("Cannot find a pipe for type 'unknown' object 'some object'");
    }));
    it("should throw when no matching pipe", (function() {
      var r = new PipeRegistry({"type": []});
      expect((function() {
        return r.get("type", "some object");
      })).toThrowError("Cannot find a pipe for type 'type' object 'some object'");
    }));
  }));
}
var PipeFactory = function PipeFactory(shouldSupport, pipe) {
  assert.argumentTypes(shouldSupport, assert.type.boolean, pipe, assert.type.any);
  this.shouldSupport = shouldSupport;
  this.pipe = pipe;
};
($traceurRuntime.createClass)(PipeFactory, {
  supports: function(obj) {
    return assert.returnType((this.shouldSupport), assert.type.boolean);
  },
  create: function() {
    return assert.returnType((this.pipe), Pipe);
  }
}, {});
Object.defineProperty(PipeFactory, "parameters", {get: function() {
    return [[assert.type.boolean], [assert.type.any]];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/test/change_detection/pipe_registry_spec.map

//# sourceMappingURL=./pipe_registry_spec.map
 main();