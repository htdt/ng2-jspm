"use strict";
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var __moduleName = "examples/src/sourcemap/index";
var $__angular2_47_src_47_facade_47_lang__;
var $__0 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    BaseException = $__0.BaseException,
    print = $__0.print,
    CONST = $__0.CONST;
var TestAnnotation = function TestAnnotation() {};
($traceurRuntime.createClass)(TestAnnotation, {}, {});
Object.defineProperty(TestAnnotation, "annotations", {get: function() {
    return [new CONST()];
  }});
var Test = function Test() {};
($traceurRuntime.createClass)(Test, {run: function() {
    try {
      throw new BaseException('Sourcemap test');
    } catch (e) {
      print(e);
    }
  }}, {});
Object.defineProperty(Test, "annotations", {get: function() {
    return [new TestAnnotation()];
  }});
function main() {
  new Test().run();
}

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/examples/src/sourcemap/index.map

//# sourceMappingURL=./index.map