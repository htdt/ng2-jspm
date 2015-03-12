var parse5Adapter = require('angular2/src/dom/parse5_adapter');
parse5Adapter.Parse5DomAdapter.makeCurrent();
"use strict";
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/test/core/events/event_manager_spec";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_test_95_lib__,
    $__angular2_47_src_47_core_47_events_47_event_95_manager__,
    $__angular2_47_src_47_core_47_zone_47_vm_95_turn_95_zone__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_facade_47_browser__,
    $__angular2_47_src_47_dom_47_dom_95_adapter__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var $__1 = ($__angular2_47_test_95_lib__ = require("angular2/test_lib"), $__angular2_47_test_95_lib__ && $__angular2_47_test_95_lib__.__esModule && $__angular2_47_test_95_lib__ || {default: $__angular2_47_test_95_lib__}),
    describe = $__1.describe,
    ddescribe = $__1.ddescribe,
    it = $__1.it,
    iit = $__1.iit,
    xit = $__1.xit,
    xdescribe = $__1.xdescribe,
    expect = $__1.expect,
    beforeEach = $__1.beforeEach,
    el = $__1.el;
var $__2 = ($__angular2_47_src_47_core_47_events_47_event_95_manager__ = require("angular2/src/core/events/event_manager"), $__angular2_47_src_47_core_47_events_47_event_95_manager__ && $__angular2_47_src_47_core_47_events_47_event_95_manager__.__esModule && $__angular2_47_src_47_core_47_events_47_event_95_manager__ || {default: $__angular2_47_src_47_core_47_events_47_event_95_manager__}),
    EventManager = $__2.EventManager,
    EventManagerPlugin = $__2.EventManagerPlugin,
    DomEventsPlugin = $__2.DomEventsPlugin;
var VmTurnZone = ($__angular2_47_src_47_core_47_zone_47_vm_95_turn_95_zone__ = require("angular2/src/core/zone/vm_turn_zone"), $__angular2_47_src_47_core_47_zone_47_vm_95_turn_95_zone__ && $__angular2_47_src_47_core_47_zone_47_vm_95_turn_95_zone__.__esModule && $__angular2_47_src_47_core_47_zone_47_vm_95_turn_95_zone__ || {default: $__angular2_47_src_47_core_47_zone_47_vm_95_turn_95_zone__}).VmTurnZone;
var $__4 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    List = $__4.List,
    ListWrapper = $__4.ListWrapper,
    Map = $__4.Map,
    MapWrapper = $__4.MapWrapper;
var document = ($__angular2_47_src_47_facade_47_browser__ = require("angular2/src/facade/browser"), $__angular2_47_src_47_facade_47_browser__ && $__angular2_47_src_47_facade_47_browser__.__esModule && $__angular2_47_src_47_facade_47_browser__ || {default: $__angular2_47_src_47_facade_47_browser__}).document;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
function main() {
  var domEventPlugin;
  beforeEach((function() {
    domEventPlugin = new DomEventsPlugin();
  }));
  describe('EventManager', (function() {
    it('should delegate event bindings to plugins', (function() {
      var element = el('<div></div>');
      var handler = (function(e) {
        return e;
      });
      var plugin = new FakeEventManagerPlugin(['click']);
      var manager = new EventManager([plugin, domEventPlugin], new FakeVmTurnZone());
      manager.addEventListener(element, 'click', handler);
      expect(MapWrapper.get(plugin._nonBubbleEventHandlers, 'click')).toBe(handler);
    }));
    it('should delegate bubbling events to plugins', (function() {
      var element = el('<div></div>');
      var handler = (function(e) {
        return e;
      });
      var plugin = new FakeEventManagerPlugin(['click']);
      var manager = new EventManager([plugin, domEventPlugin], new FakeVmTurnZone());
      manager.addEventListener(element, '^click', handler);
      expect(MapWrapper.get(plugin._bubbleEventHandlers, 'click')).toBe(handler);
    }));
    it('should delegate event bindings to the first plugin supporting the event', (function() {
      var element = el('<div></div>');
      var clickHandler = (function(e) {
        return e;
      });
      var dblClickHandler = (function(e) {
        return e;
      });
      var plugin1 = new FakeEventManagerPlugin(['dblclick']);
      var plugin2 = new FakeEventManagerPlugin(['click', 'dblclick']);
      var manager = new EventManager([plugin1, plugin2], new FakeVmTurnZone());
      manager.addEventListener(element, 'click', clickHandler);
      manager.addEventListener(element, 'dblclick', dblClickHandler);
      expect(MapWrapper.contains(plugin1._nonBubbleEventHandlers, 'click')).toBe(false);
      expect(MapWrapper.get(plugin2._nonBubbleEventHandlers, 'click')).toBe(clickHandler);
      expect(MapWrapper.contains(plugin2._nonBubbleEventHandlers, 'dblclick')).toBe(false);
      expect(MapWrapper.get(plugin1._nonBubbleEventHandlers, 'dblclick')).toBe(dblClickHandler);
    }));
    it('should throw when no plugin can handle the event', (function() {
      var element = el('<div></div>');
      var plugin = new FakeEventManagerPlugin(['dblclick']);
      var manager = new EventManager([plugin], new FakeVmTurnZone());
      expect((function() {
        return manager.addEventListener(element, 'click', null);
      })).toThrowError('No event manager plugin found for event click');
    }));
    it('by default events are only caught on same element', (function() {
      var element = el('<div><div></div></div>');
      var child = DOM.firstChild(element);
      var dispatchedEvent = DOM.createMouseEvent('click');
      var receivedEvent = null;
      var handler = (function(e) {
        receivedEvent = e;
      });
      var manager = new EventManager([domEventPlugin], new FakeVmTurnZone());
      manager.addEventListener(element, 'click', handler);
      DOM.dispatchEvent(child, dispatchedEvent);
      expect(receivedEvent).toBe(null);
    }));
    it('bubbled events are caught when fired from a child', (function() {
      var element = el('<div><div></div></div>');
      DOM.appendChild(document.body, element);
      var child = DOM.firstChild(element);
      var dispatchedEvent = DOM.createMouseEvent('click');
      var receivedEvent = null;
      var handler = (function(e) {
        receivedEvent = e;
      });
      var manager = new EventManager([domEventPlugin], new FakeVmTurnZone());
      manager.addEventListener(element, '^click', handler);
      DOM.dispatchEvent(child, dispatchedEvent);
      expect(receivedEvent).toBe(dispatchedEvent);
    }));
  }));
}
var FakeEventManagerPlugin = function FakeEventManagerPlugin(supports) {
  assert.argumentTypes(supports, assert.genericType(List, assert.type.string));
  $traceurRuntime.superConstructor($FakeEventManagerPlugin).call(this);
  this._supports = supports;
  this._nonBubbleEventHandlers = MapWrapper.create();
  this._bubbleEventHandlers = MapWrapper.create();
};
var $FakeEventManagerPlugin = FakeEventManagerPlugin;
($traceurRuntime.createClass)(FakeEventManagerPlugin, {
  supports: function(eventName) {
    assert.argumentTypes(eventName, assert.type.string);
    return assert.returnType((ListWrapper.contains(this._supports, eventName)), assert.type.boolean);
  },
  addEventListener: function(element, eventName, handler, shouldSupportBubble) {
    assert.argumentTypes(element, assert.type.any, eventName, assert.type.string, handler, Function, shouldSupportBubble, assert.type.boolean);
    MapWrapper.set(shouldSupportBubble ? this._bubbleEventHandlers : this._nonBubbleEventHandlers, eventName, handler);
  }
}, {}, EventManagerPlugin);
Object.defineProperty(FakeEventManagerPlugin, "parameters", {get: function() {
    return [[assert.genericType(List, assert.type.string)]];
  }});
Object.defineProperty(FakeEventManagerPlugin.prototype.supports, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
Object.defineProperty(FakeEventManagerPlugin.prototype.addEventListener, "parameters", {get: function() {
    return [[], [assert.type.string], [Function], [assert.type.boolean]];
  }});
var FakeVmTurnZone = function FakeVmTurnZone() {
  $traceurRuntime.superConstructor($FakeVmTurnZone).call(this, {enableLongStackTrace: false});
};
var $FakeVmTurnZone = FakeVmTurnZone;
($traceurRuntime.createClass)(FakeVmTurnZone, {
  run: function(fn) {
    fn();
  },
  runOutsideAngular: function(fn) {
    fn();
  }
}, {}, VmTurnZone);

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/test/core/events/event_manager_spec.map

//# sourceMappingURL=./event_manager_spec.map
 main();