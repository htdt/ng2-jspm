"use strict";
Object.defineProperties(module.exports, {
  HammerGesturesPlugin: {get: function() {
      return HammerGesturesPlugin;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/src/core/events/hammer_gestures";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_src_47_core_47_events_47_hammer_95_common__,
    $__angular2_47_src_47_facade_47_lang__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var HammerGesturesPluginCommon = ($__angular2_47_src_47_core_47_events_47_hammer_95_common__ = require("./hammer_common"), $__angular2_47_src_47_core_47_events_47_hammer_95_common__ && $__angular2_47_src_47_core_47_events_47_hammer_95_common__.__esModule && $__angular2_47_src_47_core_47_events_47_hammer_95_common__ || {default: $__angular2_47_src_47_core_47_events_47_hammer_95_common__}).HammerGesturesPluginCommon;
var $__2 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    isPresent = $__2.isPresent,
    BaseException = $__2.BaseException;
var HammerGesturesPlugin = function HammerGesturesPlugin() {
  $traceurRuntime.superConstructor($HammerGesturesPlugin).call(this);
};
var $HammerGesturesPlugin = HammerGesturesPlugin;
($traceurRuntime.createClass)(HammerGesturesPlugin, {
  supports: function(eventName) {
    assert.argumentTypes(eventName, assert.type.string);
    if (!$traceurRuntime.superGet(this, $HammerGesturesPlugin.prototype, "supports").call(this, eventName))
      return assert.returnType((false), assert.type.boolean);
    if (!isPresent(window.Hammer)) {
      throw new BaseException(("Hammer.js is not loaded, can not bind " + eventName + " event"));
    }
    return assert.returnType((true), assert.type.boolean);
  },
  addEventListener: function(element, eventName, handler, shouldSupportBubble) {
    assert.argumentTypes(element, assert.type.any, eventName, assert.type.string, handler, Function, shouldSupportBubble, assert.type.boolean);
    if (shouldSupportBubble)
      throw new BaseException('Hammer.js plugin does not support bubbling gestures.');
    var zone = this.manager.getZone();
    eventName = eventName.toLowerCase();
    zone.runOutsideAngular(function() {
      var mc = new Hammer(element);
      mc.get('pinch').set({enable: true});
      mc.get('rotate').set({enable: true});
      mc.on(eventName, function(eventObj) {
        zone.run(function() {
          handler(eventObj);
        });
      });
    });
  }
}, {}, HammerGesturesPluginCommon);
Object.defineProperty(HammerGesturesPlugin.prototype.supports, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
Object.defineProperty(HammerGesturesPlugin.prototype.addEventListener, "parameters", {get: function() {
    return [[], [assert.type.string], [Function], [assert.type.boolean]];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/core/events/hammer_gestures.map

//# sourceMappingURL=./hammer_gestures.map