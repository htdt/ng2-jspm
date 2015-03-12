var parse5Adapter = require('angular2/src/dom/parse5_adapter');
parse5Adapter.Parse5DomAdapter.makeCurrent();
"use strict";
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/test/core/zone/vm_turn_zone_spec";
var $__angular2_47_test_95_lib__,
    $__angular2_47_test_95_lib__,
    $__angular2_47_src_47_facade_47_async__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_core_47_zone_47_vm_95_turn_95_zone__;
var $__0 = ($__angular2_47_test_95_lib__ = require("angular2/test_lib"), $__angular2_47_test_95_lib__ && $__angular2_47_test_95_lib__.__esModule && $__angular2_47_test_95_lib__ || {default: $__angular2_47_test_95_lib__}),
    describe = $__0.describe,
    ddescribe = $__0.ddescribe,
    it = $__0.it,
    iit = $__0.iit,
    xit = $__0.xit,
    xdescribe = $__0.xdescribe,
    expect = $__0.expect,
    beforeEach = $__0.beforeEach,
    async = $__0.async,
    tick = $__0.tick;
var $__1 = ($__angular2_47_test_95_lib__ = require("angular2/test_lib"), $__angular2_47_test_95_lib__ && $__angular2_47_test_95_lib__.__esModule && $__angular2_47_test_95_lib__ || {default: $__angular2_47_test_95_lib__}),
    Log = $__1.Log,
    once = $__1.once;
var PromiseWrapper = ($__angular2_47_src_47_facade_47_async__ = require("angular2/src/facade/async"), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}).PromiseWrapper;
var BaseException = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).BaseException;
var VmTurnZone = ($__angular2_47_src_47_core_47_zone_47_vm_95_turn_95_zone__ = require("angular2/src/core/zone/vm_turn_zone"), $__angular2_47_src_47_core_47_zone_47_vm_95_turn_95_zone__ && $__angular2_47_src_47_core_47_zone_47_vm_95_turn_95_zone__.__esModule && $__angular2_47_src_47_core_47_zone_47_vm_95_turn_95_zone__ || {default: $__angular2_47_src_47_core_47_zone_47_vm_95_turn_95_zone__}).VmTurnZone;
function main() {
  describe("VmTurnZone", (function() {
    var log,
        zone;
    beforeEach((function() {
      log = new Log();
      zone = new VmTurnZone({enableLongStackTrace: true});
      zone.initCallbacks({
        onTurnStart: log.fn('onTurnStart'),
        onTurnDone: log.fn('onTurnDone')
      });
    }));
    describe("run", (function() {
      it('should call onTurnStart and onTurnDone', (function() {
        zone.run(log.fn('run'));
        expect(log.result()).toEqual('onTurnStart; run; onTurnDone');
      }));
      it('should return the body return value from run', (function() {
        expect(zone.run((function() {
          return 6;
        }))).toEqual(6);
      }));
      it('should not run onTurnStart and onTurnDone for nested Zone.run', (function() {
        zone.run((function() {
          zone.run(log.fn('run'));
        }));
        expect(log.result()).toEqual('onTurnStart; run; onTurnDone');
      }));
      it('should call onTurnStart and onTurnDone before and after each top-level run', (function() {
        zone.run(log.fn('run1'));
        zone.run(log.fn('run2'));
        expect(log.result()).toEqual('onTurnStart; run1; onTurnDone; onTurnStart; run2; onTurnDone');
      }));
      it('should call onTurnStart and onTurnDone before and after each turn', (function(done) {
        var a = PromiseWrapper.completer();
        var b = PromiseWrapper.completer();
        zone.run((function() {
          log.add('run start');
          a.promise.then((function(_) {
            return log.add('a then');
          }));
          b.promise.then((function(_) {
            return log.add('b then');
          }));
        }));
        a.resolve("a");
        b.resolve("b");
        PromiseWrapper.all([a.promise, b.promise]).then((function(_) {
          expect(log.result()).toEqual('onTurnStart; run start; onTurnDone; onTurnStart; a then; onTurnDone; onTurnStart; b then; onTurnDone');
          done();
        }));
      }));
    }));
    describe("runOutsideAngular", (function() {
      it("should run a function outside of the angular zone", (function() {
        zone.runOutsideAngular(log.fn('run'));
        expect(log.result()).toEqual('run');
      }));
    }));
    describe("exceptions", (function() {
      var trace,
          exception,
          saveStackTrace;
      beforeEach((function() {
        trace = null;
        exception = null;
        saveStackTrace = (function(e, t) {
          exception = e;
          trace = t;
        });
      }));
      it('should call the on error callback when it is defined', (function() {
        zone.initCallbacks({onErrorHandler: saveStackTrace});
        zone.run((function() {
          throw new BaseException('aaa');
        }));
        expect(exception).toBeDefined();
      }));
      it('should rethrow exceptions from the body when no callback defined', (function() {
        expect((function() {
          zone.run((function() {
            throw new BaseException('bbb');
          }));
        })).toThrowError('bbb');
      }));
      it('should produce long stack traces', (function(done) {
        zone.initCallbacks({onErrorHandler: saveStackTrace});
        var c = PromiseWrapper.completer();
        zone.run(function() {
          PromiseWrapper.setTimeout(function() {
            PromiseWrapper.setTimeout(function() {
              c.resolve(null);
              throw new BaseException('ccc');
            }, 0);
          }, 0);
        });
        c.promise.then((function(_) {
          expect(trace.length).toBeGreaterThan(1);
          done();
        }));
      }));
      it('should produce long stack traces (when using promises)', (function(done) {
        zone.initCallbacks({onErrorHandler: saveStackTrace});
        var c = PromiseWrapper.completer();
        zone.run(function() {
          PromiseWrapper.resolve(null).then((function(_) {
            return PromiseWrapper.resolve(null).then((function(__) {
              c.resolve(null);
              throw new BaseException("ddd");
            }));
          }));
        });
        c.promise.then((function(_) {
          expect(trace.length).toBeGreaterThan(1);
          done();
        }));
      }));
      it('should disable long stack traces', (function(done) {
        var zone = new VmTurnZone({enableLongStackTrace: false});
        zone.initCallbacks({onErrorHandler: saveStackTrace});
        var c = PromiseWrapper.completer();
        zone.run(function() {
          PromiseWrapper.setTimeout(function() {
            PromiseWrapper.setTimeout(function() {
              c.resolve(null);
              throw new BaseException('ccc');
            }, 0);
          }, 0);
        });
        c.promise.then((function(_) {
          expect(trace.length).toEqual(1);
          done();
        }));
      }));
    }));
  }));
}

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/test/core/zone/vm_turn_zone_spec.map

//# sourceMappingURL=./vm_turn_zone_spec.map
 main();