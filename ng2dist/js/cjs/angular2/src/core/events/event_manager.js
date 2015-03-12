"use strict";
Object.defineProperties(module.exports, {
  EventManager: {get: function() {
      return EventManager;
    }},
  EventManagerPlugin: {get: function() {
      return EventManagerPlugin;
    }},
  DomEventsPlugin: {get: function() {
      return DomEventsPlugin;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/src/core/events/event_manager";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_dom_47_dom_95_adapter__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_core_47_zone_47_vm_95_turn_95_zone__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var $__1 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    isBlank = $__1.isBlank,
    BaseException = $__1.BaseException,
    isPresent = $__1.isPresent,
    StringWrapper = $__1.StringWrapper;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var $__3 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    List = $__3.List,
    ListWrapper = $__3.ListWrapper,
    MapWrapper = $__3.MapWrapper;
var VmTurnZone = ($__angular2_47_src_47_core_47_zone_47_vm_95_turn_95_zone__ = require("angular2/src/core/zone/vm_turn_zone"), $__angular2_47_src_47_core_47_zone_47_vm_95_turn_95_zone__ && $__angular2_47_src_47_core_47_zone_47_vm_95_turn_95_zone__.__esModule && $__angular2_47_src_47_core_47_zone_47_vm_95_turn_95_zone__ || {default: $__angular2_47_src_47_core_47_zone_47_vm_95_turn_95_zone__}).VmTurnZone;
var BUBBLE_SYMBOL = '^';
var EventManager = function EventManager(plugins, zone) {
  assert.argumentTypes(plugins, assert.genericType(List, EventManagerPlugin), zone, VmTurnZone);
  this._zone = zone;
  this._plugins = plugins;
  for (var i = 0; i < plugins.length; i++) {
    plugins[i].manager = this;
  }
};
($traceurRuntime.createClass)(EventManager, {
  addEventListener: function(element, eventName, handler) {
    assert.argumentTypes(element, assert.type.any, eventName, assert.type.string, handler, Function);
    var shouldSupportBubble = eventName[0] == BUBBLE_SYMBOL;
    if (shouldSupportBubble) {
      eventName = StringWrapper.substring(eventName, 1);
    }
    var plugin = this._findPluginFor(eventName);
    plugin.addEventListener(element, eventName, handler, shouldSupportBubble);
  },
  getZone: function() {
    return assert.returnType((this._zone), VmTurnZone);
  },
  _findPluginFor: function(eventName) {
    assert.argumentTypes(eventName, assert.type.string);
    var plugins = this._plugins;
    for (var i = 0; i < plugins.length; i++) {
      var plugin = plugins[i];
      if (plugin.supports(eventName)) {
        return assert.returnType((plugin), EventManagerPlugin);
      }
    }
    throw new BaseException(("No event manager plugin found for event " + eventName));
  }
}, {});
Object.defineProperty(EventManager, "parameters", {get: function() {
    return [[assert.genericType(List, EventManagerPlugin)], [VmTurnZone]];
  }});
Object.defineProperty(EventManager.prototype.addEventListener, "parameters", {get: function() {
    return [[], [assert.type.string], [Function]];
  }});
Object.defineProperty(EventManager.prototype._findPluginFor, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
var EventManagerPlugin = function EventManagerPlugin() {};
($traceurRuntime.createClass)(EventManagerPlugin, {
  supports: function(eventName) {
    assert.argumentTypes(eventName, assert.type.string);
    return assert.returnType((false), assert.type.boolean);
  },
  addEventListener: function(element, eventName, handler, shouldSupportBubble) {
    assert.argumentTypes(element, assert.type.any, eventName, assert.type.string, handler, Function, shouldSupportBubble, assert.type.boolean);
    throw "not implemented";
  }
}, {});
Object.defineProperty(EventManagerPlugin.prototype.supports, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
Object.defineProperty(EventManagerPlugin.prototype.addEventListener, "parameters", {get: function() {
    return [[], [assert.type.string], [Function], [assert.type.boolean]];
  }});
var DomEventsPlugin = function DomEventsPlugin() {
  $traceurRuntime.superConstructor($DomEventsPlugin).apply(this, arguments);
};
var $DomEventsPlugin = DomEventsPlugin;
($traceurRuntime.createClass)(DomEventsPlugin, {
  supports: function(eventName) {
    assert.argumentTypes(eventName, assert.type.string);
    return assert.returnType((true), assert.type.boolean);
  },
  addEventListener: function(element, eventName, handler, shouldSupportBubble) {
    assert.argumentTypes(element, assert.type.any, eventName, assert.type.string, handler, Function, shouldSupportBubble, assert.type.boolean);
    var outsideHandler = shouldSupportBubble ? $DomEventsPlugin.bubbleCallback(element, handler, this.manager._zone) : $DomEventsPlugin.sameElementCallback(element, handler, this.manager._zone);
    this.manager._zone.runOutsideAngular((function() {
      DOM.on(element, eventName, outsideHandler);
    }));
  }
}, {
  sameElementCallback: function(element, handler, zone) {
    return (function(event) {
      if (event.target === element) {
        zone.run((function() {
          return handler(event);
        }));
      }
    });
  },
  bubbleCallback: function(element, handler, zone) {
    return (function(event) {
      return zone.run((function() {
        return handler(event);
      }));
    });
  }
}, EventManagerPlugin);
Object.defineProperty(DomEventsPlugin.prototype.supports, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
Object.defineProperty(DomEventsPlugin.prototype.addEventListener, "parameters", {get: function() {
    return [[], [assert.type.string], [Function], [assert.type.boolean]];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/core/events/event_manager.map

//# sourceMappingURL=./event_manager.map