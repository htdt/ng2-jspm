"use strict";
Object.defineProperties(module.exports, {
  EventEmitter: {get: function() {
      return EventEmitter;
    }},
  PropertySetter: {get: function() {
      return PropertySetter;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/src/core/annotations/di";
var $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_di__;
var CONST = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).CONST;
var DependencyAnnotation = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}).DependencyAnnotation;
var EventEmitter = function EventEmitter(eventName) {
  $traceurRuntime.superConstructor($EventEmitter).call(this);
  this.eventName = eventName;
};
var $EventEmitter = EventEmitter;
($traceurRuntime.createClass)(EventEmitter, {}, {}, DependencyAnnotation);
Object.defineProperty(EventEmitter, "annotations", {get: function() {
    return [new CONST()];
  }});
var PropertySetter = function PropertySetter(propName) {
  $traceurRuntime.superConstructor($PropertySetter).call(this);
  this.propName = propName;
};
var $PropertySetter = PropertySetter;
($traceurRuntime.createClass)(PropertySetter, {}, {}, DependencyAnnotation);
Object.defineProperty(PropertySetter, "annotations", {get: function() {
    return [new CONST()];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/core/annotations/di.map

//# sourceMappingURL=./di.map