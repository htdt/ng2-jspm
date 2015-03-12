"use strict";
Object.defineProperties(module.exports, {
  Parent: {get: function() {
      return Parent;
    }},
  Ancestor: {get: function() {
      return Ancestor;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/src/core/annotations/visibility";
var $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_di__;
var CONST = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).CONST;
var DependencyAnnotation = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}).DependencyAnnotation;
var Parent = function Parent() {
  $traceurRuntime.superConstructor($Parent).call(this);
};
var $Parent = Parent;
($traceurRuntime.createClass)(Parent, {}, {}, DependencyAnnotation);
Object.defineProperty(Parent, "annotations", {get: function() {
    return [new CONST()];
  }});
var Ancestor = function Ancestor() {
  $traceurRuntime.superConstructor($Ancestor).call(this);
};
var $Ancestor = Ancestor;
($traceurRuntime.createClass)(Ancestor, {}, {}, DependencyAnnotation);
Object.defineProperty(Ancestor, "annotations", {get: function() {
    return [new CONST()];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/core/annotations/visibility.map

//# sourceMappingURL=./visibility.map