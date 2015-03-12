"use strict";
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var __moduleName = "examples/src/hello_world/index_common";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_angular2__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var $__1 = ($__angular2_47_angular2__ = require("angular2/angular2"), $__angular2_47_angular2__ && $__angular2_47_angular2__.__esModule && $__angular2_47_angular2__ || {default: $__angular2_47_angular2__}),
    bootstrap = $__1.bootstrap,
    Component = $__1.Component,
    Decorator = $__1.Decorator,
    Template = $__1.Template,
    NgElement = $__1.NgElement;
var HelloCmp = function HelloCmp(service) {
  assert.argumentTypes(service, GreetingService);
  this.greeting = service.greeting;
};
($traceurRuntime.createClass)(HelloCmp, {changeGreeting: function() {
    this.greeting = 'howdy';
  }}, {});
Object.defineProperty(HelloCmp, "annotations", {get: function() {
    return [new Component({
      selector: 'hello-app',
      componentServices: [GreetingService]
    }), new Template({
      inline: "<div class=\"greeting\">{{greeting}} <span red>world</span>!</div>\n           <button class=\"changeButton\" (click)=\"changeGreeting()\">change greeting</button>",
      directives: [RedDec]
    })];
  }});
Object.defineProperty(HelloCmp, "parameters", {get: function() {
    return [[GreetingService]];
  }});
var RedDec = function RedDec(el) {
  assert.argumentTypes(el, NgElement);
  el.domElement.style.color = 'red';
};
($traceurRuntime.createClass)(RedDec, {}, {});
Object.defineProperty(RedDec, "annotations", {get: function() {
    return [new Decorator({selector: '[red]'})];
  }});
Object.defineProperty(RedDec, "parameters", {get: function() {
    return [[NgElement]];
  }});
var GreetingService = function GreetingService() {
  this.greeting = 'hello';
};
($traceurRuntime.createClass)(GreetingService, {}, {});
function main() {
  bootstrap(HelloCmp);
}

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/examples/src/hello_world/index_common.map

//# sourceMappingURL=./index_common.map