"use strict";
Object.defineProperties(module.exports, {
  VmTurnZone: {get: function() {
      return VmTurnZone;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/src/core/zone/vm_turn_zone";
var $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_facade_47_lang__;
var $__0 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    List = $__0.List,
    ListWrapper = $__0.ListWrapper,
    StringMapWrapper = $__0.StringMapWrapper;
var $__1 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    normalizeBlank = $__1.normalizeBlank,
    isPresent = $__1.isPresent,
    global = $__1.global;
var VmTurnZone = function VmTurnZone($__4) {
  var enableLongStackTrace = $__4.enableLongStackTrace;
  this._nestedRunCounter = 0;
  this._onTurnStart = null;
  this._onTurnDone = null;
  this._onErrorHandler = null;
  this._outerZone = global.zone;
  this._innerZone = this._createInnerZone(this._outerZone, enableLongStackTrace);
};
($traceurRuntime.createClass)(VmTurnZone, {
  initCallbacks: function() {
    var $__4 = arguments[0] !== (void 0) ? arguments[0] : {},
        onTurnStart = $__4.onTurnStart,
        onTurnDone = $__4.onTurnDone,
        onScheduleMicrotask = $__4.onScheduleMicrotask,
        onErrorHandler = $__4.onErrorHandler;
    this._onTurnStart = normalizeBlank(onTurnStart);
    this._onTurnDone = normalizeBlank(onTurnDone);
    this._onErrorHandler = normalizeBlank(onErrorHandler);
  },
  run: function(fn) {
    return this._innerZone.run(fn);
  },
  runOutsideAngular: function(fn) {
    return this._outerZone.run(fn);
  },
  _createInnerZone: function(zone, enableLongStackTrace) {
    var $__2 = this;
    var vmTurnZone = this;
    var errorHandling;
    if (enableLongStackTrace) {
      errorHandling = StringMapWrapper.merge(Zone.longStackTraceZone, {onError: function(e) {
          vmTurnZone._onError(this, e);
        }});
    } else {
      errorHandling = {onError: function(e) {
          vmTurnZone._onError(this, e);
        }};
    }
    return zone.fork(errorHandling).fork({
      beforeTask: (function() {
        $__2._beforeTask();
      }),
      afterTask: (function() {
        $__2._afterTask();
      })
    });
  },
  _beforeTask: function() {
    this._nestedRunCounter++;
    if (this._nestedRunCounter === 1 && this._onTurnStart) {
      this._onTurnStart();
    }
  },
  _afterTask: function() {
    this._nestedRunCounter--;
    if (this._nestedRunCounter === 0 && this._onTurnDone) {
      this._onTurnDone();
    }
  },
  _onError: function(zone, e) {
    if (isPresent(this._onErrorHandler)) {
      var trace = [normalizeBlank(e.stack)];
      while (zone && zone.constructedAtException) {
        trace.push(zone.constructedAtException.get());
        zone = zone.parent;
      }
      this._onErrorHandler(e, trace);
    } else {
      throw e;
    }
  }
}, {});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/core/zone/vm_turn_zone.map

//# sourceMappingURL=./vm_turn_zone.map