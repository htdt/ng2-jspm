"use strict";
Object.defineProperties(module.exports, {
  HammerGesturesPluginCommon: {get: function() {
      return HammerGesturesPluginCommon;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/src/core/events/hammer_common";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_src_47_core_47_events_47_event_95_manager__,
    $__angular2_47_src_47_facade_47_collection__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var EventManagerPlugin = ($__angular2_47_src_47_core_47_events_47_event_95_manager__ = require("./event_manager"), $__angular2_47_src_47_core_47_events_47_event_95_manager__ && $__angular2_47_src_47_core_47_events_47_event_95_manager__.__esModule && $__angular2_47_src_47_core_47_events_47_event_95_manager__ || {default: $__angular2_47_src_47_core_47_events_47_event_95_manager__}).EventManagerPlugin;
var StringMapWrapper = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}).StringMapWrapper;
var _eventNames = {
  'pan': true,
  'panstart': true,
  'panmove': true,
  'panend': true,
  'pancancel': true,
  'panleft': true,
  'panright': true,
  'panup': true,
  'pandown': true,
  'pinch': true,
  'pinchstart': true,
  'pinchmove': true,
  'pinchend': true,
  'pinchcancel': true,
  'pinchin': true,
  'pinchout': true,
  'press': true,
  'pressup': true,
  'rotate': true,
  'rotatestart': true,
  'rotatemove': true,
  'rotateend': true,
  'rotatecancel': true,
  'swipe': true,
  'swipeleft': true,
  'swiperight': true,
  'swipeup': true,
  'swipedown': true,
  'tap': true
};
var HammerGesturesPluginCommon = function HammerGesturesPluginCommon() {
  $traceurRuntime.superConstructor($HammerGesturesPluginCommon).call(this);
};
var $HammerGesturesPluginCommon = HammerGesturesPluginCommon;
($traceurRuntime.createClass)(HammerGesturesPluginCommon, {supports: function(eventName) {
    assert.argumentTypes(eventName, assert.type.string);
    eventName = eventName.toLowerCase();
    return assert.returnType((StringMapWrapper.contains(_eventNames, eventName)), assert.type.boolean);
  }}, {}, EventManagerPlugin);
Object.defineProperty(HammerGesturesPluginCommon.prototype.supports, "parameters", {get: function() {
    return [[assert.type.string]];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/core/events/hammer_common.map

//# sourceMappingURL=./hammer_common.map