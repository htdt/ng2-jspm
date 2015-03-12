import {assert} from "rtts_assert/rtts_assert";
import {isBlank,
  BaseException,
  isPresent,
  StringWrapper} from 'angular2/src/facade/lang';
import {DOM} from 'angular2/src/dom/dom_adapter';
import {List,
  ListWrapper,
  MapWrapper} from 'angular2/src/facade/collection';
import {VmTurnZone} from 'angular2/src/core/zone/vm_turn_zone';
var BUBBLE_SYMBOL = '^';
export class EventManager {
  constructor(plugins, zone) {
    assert.argumentTypes(plugins, assert.genericType(List, EventManagerPlugin), zone, VmTurnZone);
    this._zone = zone;
    this._plugins = plugins;
    for (var i = 0; i < plugins.length; i++) {
      plugins[i].manager = this;
    }
  }
  addEventListener(element, eventName, handler) {
    assert.argumentTypes(element, assert.type.any, eventName, assert.type.string, handler, Function);
    var shouldSupportBubble = eventName[0] == BUBBLE_SYMBOL;
    if (shouldSupportBubble) {
      eventName = StringWrapper.substring(eventName, 1);
    }
    var plugin = this._findPluginFor(eventName);
    plugin.addEventListener(element, eventName, handler, shouldSupportBubble);
  }
  getZone() {
    return assert.returnType((this._zone), VmTurnZone);
  }
  _findPluginFor(eventName) {
    assert.argumentTypes(eventName, assert.type.string);
    var plugins = this._plugins;
    for (var i = 0; i < plugins.length; i++) {
      var plugin = plugins[i];
      if (plugin.supports(eventName)) {
        return assert.returnType((plugin), EventManagerPlugin);
      }
    }
    throw new BaseException(`No event manager plugin found for event ${eventName}`);
  }
}
Object.defineProperty(EventManager, "parameters", {get: function() {
    return [[assert.genericType(List, EventManagerPlugin)], [VmTurnZone]];
  }});
Object.defineProperty(EventManager.prototype.addEventListener, "parameters", {get: function() {
    return [[], [assert.type.string], [Function]];
  }});
Object.defineProperty(EventManager.prototype._findPluginFor, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
export class EventManagerPlugin {
  supports(eventName) {
    assert.argumentTypes(eventName, assert.type.string);
    return assert.returnType((false), assert.type.boolean);
  }
  addEventListener(element, eventName, handler, shouldSupportBubble) {
    assert.argumentTypes(element, assert.type.any, eventName, assert.type.string, handler, Function, shouldSupportBubble, assert.type.boolean);
    throw "not implemented";
  }
}
Object.defineProperty(EventManagerPlugin.prototype.supports, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
Object.defineProperty(EventManagerPlugin.prototype.addEventListener, "parameters", {get: function() {
    return [[], [assert.type.string], [Function], [assert.type.boolean]];
  }});
export class DomEventsPlugin extends EventManagerPlugin {
  supports(eventName) {
    assert.argumentTypes(eventName, assert.type.string);
    return assert.returnType((true), assert.type.boolean);
  }
  addEventListener(element, eventName, handler, shouldSupportBubble) {
    assert.argumentTypes(element, assert.type.any, eventName, assert.type.string, handler, Function, shouldSupportBubble, assert.type.boolean);
    var outsideHandler = shouldSupportBubble ? DomEventsPlugin.bubbleCallback(element, handler, this.manager._zone) : DomEventsPlugin.sameElementCallback(element, handler, this.manager._zone);
    this.manager._zone.runOutsideAngular(() => {
      DOM.on(element, eventName, outsideHandler);
    });
  }
  static sameElementCallback(element, handler, zone) {
    return (event) => {
      if (event.target === element) {
        zone.run(() => handler(event));
      }
    };
  }
  static bubbleCallback(element, handler, zone) {
    return (event) => zone.run(() => handler(event));
  }
}
Object.defineProperty(DomEventsPlugin.prototype.supports, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
Object.defineProperty(DomEventsPlugin.prototype.addEventListener, "parameters", {get: function() {
    return [[], [assert.type.string], [Function], [assert.type.boolean]];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/core/events/event_manager.map

//# sourceMappingURL=./event_manager.map