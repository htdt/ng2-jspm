"use strict";
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var __moduleName = "examples/src/gestures/index";
var $__angular2_47_core__,
    $__angular2_47_src_47_reflection_47_reflection__,
    $__angular2_47_src_47_reflection_47_reflection_95_capabilities__;
var $__0 = ($__angular2_47_core__ = require("angular2/core"), $__angular2_47_core__ && $__angular2_47_core__.__esModule && $__angular2_47_core__ || {default: $__angular2_47_core__}),
    bootstrap = $__0.bootstrap,
    Component = $__0.Component,
    Template = $__0.Template;
var reflector = ($__angular2_47_src_47_reflection_47_reflection__ = require("angular2/src/reflection/reflection"), $__angular2_47_src_47_reflection_47_reflection__ && $__angular2_47_src_47_reflection_47_reflection__.__esModule && $__angular2_47_src_47_reflection_47_reflection__ || {default: $__angular2_47_src_47_reflection_47_reflection__}).reflector;
var ReflectionCapabilities = ($__angular2_47_src_47_reflection_47_reflection_95_capabilities__ = require("angular2/src/reflection/reflection_capabilities"), $__angular2_47_src_47_reflection_47_reflection_95_capabilities__ && $__angular2_47_src_47_reflection_47_reflection_95_capabilities__.__esModule && $__angular2_47_src_47_reflection_47_reflection_95_capabilities__ || {default: $__angular2_47_src_47_reflection_47_reflection_95_capabilities__}).ReflectionCapabilities;
var GesturesCmp = function GesturesCmp() {
  this.swipeDirection = '-';
  this.pinchScale = 1;
  this.rotateAngle = 0;
};
($traceurRuntime.createClass)(GesturesCmp, {
  onSwipe: function(event) {
    this.swipeDirection = event.deltaX > 0 ? 'right' : 'left';
  },
  onPinch: function(event) {
    this.pinchScale = event.scale;
  },
  onRotate: function(event) {
    this.rotateAngle = event.rotation;
  }
}, {});
Object.defineProperty(GesturesCmp, "annotations", {get: function() {
    return [new Component({selector: 'gestures-app'}), new Template({url: 'template.html'})];
  }});
function main() {
  reflector.reflectionCapabilities = new ReflectionCapabilities();
  bootstrap(GesturesCmp);
}

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/examples/src/gestures/index.map

//# sourceMappingURL=./index.map