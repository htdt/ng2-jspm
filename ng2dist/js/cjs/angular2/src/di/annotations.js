"use strict";
Object.defineProperties(module.exports, {
  Inject: {get: function() {
      return Inject;
    }},
  InjectPromise: {get: function() {
      return InjectPromise;
    }},
  InjectLazy: {get: function() {
      return InjectLazy;
    }},
  Optional: {get: function() {
      return Optional;
    }},
  DependencyAnnotation: {get: function() {
      return DependencyAnnotation;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/src/di/annotations";
var $__angular2_47_src_47_facade_47_lang__;
var CONST = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).CONST;
var Inject = function Inject(token) {
  this.token = token;
};
($traceurRuntime.createClass)(Inject, {}, {});
Object.defineProperty(Inject, "annotations", {get: function() {
    return [new CONST()];
  }});
var InjectPromise = function InjectPromise(token) {
  this.token = token;
};
($traceurRuntime.createClass)(InjectPromise, {}, {});
Object.defineProperty(InjectPromise, "annotations", {get: function() {
    return [new CONST()];
  }});
var InjectLazy = function InjectLazy(token) {
  this.token = token;
};
($traceurRuntime.createClass)(InjectLazy, {}, {});
Object.defineProperty(InjectLazy, "annotations", {get: function() {
    return [new CONST()];
  }});
var Optional = function Optional() {};
($traceurRuntime.createClass)(Optional, {}, {});
Object.defineProperty(Optional, "annotations", {get: function() {
    return [new CONST()];
  }});
var DependencyAnnotation = function DependencyAnnotation() {};
($traceurRuntime.createClass)(DependencyAnnotation, {}, {});
Object.defineProperty(DependencyAnnotation, "annotations", {get: function() {
    return [new CONST()];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/di/annotations.map

//# sourceMappingURL=./annotations.map