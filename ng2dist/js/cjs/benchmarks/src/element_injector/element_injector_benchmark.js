"use strict";
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var __moduleName = "benchmarks/src/element_injector/element_injector_benchmark";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_src_47_reflection_47_reflection__,
    $__angular2_47_di__,
    $__angular2_47_src_47_core_47_compiler_47_element_95_injector__,
    $__angular2_47_src_47_test_95_lib_47_benchmark_95_util__,
    $__angular2_47_src_47_dom_47_browser_95_adapter__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var reflector = ($__angular2_47_src_47_reflection_47_reflection__ = require("angular2/src/reflection/reflection"), $__angular2_47_src_47_reflection_47_reflection__ && $__angular2_47_src_47_reflection_47_reflection__.__esModule && $__angular2_47_src_47_reflection_47_reflection__ || {default: $__angular2_47_src_47_reflection_47_reflection__}).reflector;
var Injector = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}).Injector;
var ProtoElementInjector = ($__angular2_47_src_47_core_47_compiler_47_element_95_injector__ = require("angular2/src/core/compiler/element_injector"), $__angular2_47_src_47_core_47_compiler_47_element_95_injector__ && $__angular2_47_src_47_core_47_compiler_47_element_95_injector__.__esModule && $__angular2_47_src_47_core_47_compiler_47_element_95_injector__ || {default: $__angular2_47_src_47_core_47_compiler_47_element_95_injector__}).ProtoElementInjector;
var $__4 = ($__angular2_47_src_47_test_95_lib_47_benchmark_95_util__ = require("angular2/src/test_lib/benchmark_util"), $__angular2_47_src_47_test_95_lib_47_benchmark_95_util__ && $__angular2_47_src_47_test_95_lib_47_benchmark_95_util__.__esModule && $__angular2_47_src_47_test_95_lib_47_benchmark_95_util__ || {default: $__angular2_47_src_47_test_95_lib_47_benchmark_95_util__}),
    getIntParameter = $__4.getIntParameter,
    bindAction = $__4.bindAction;
var BrowserDomAdapter = ($__angular2_47_src_47_dom_47_browser_95_adapter__ = require("angular2/src/dom/browser_adapter"), $__angular2_47_src_47_dom_47_browser_95_adapter__ && $__angular2_47_src_47_dom_47_browser_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_browser_95_adapter__ || {default: $__angular2_47_src_47_dom_47_browser_95_adapter__}).BrowserDomAdapter;
var count = 0;
function setupReflector() {
  reflector.registerType(A, {
    'factory': (function() {
      return new A();
    }),
    'parameters': [],
    'annotations': []
  });
  reflector.registerType(B, {
    'factory': (function() {
      return new B();
    }),
    'parameters': [],
    'annotations': []
  });
  reflector.registerType(C, {
    'factory': (function(a, b) {
      return new C(a, b);
    }),
    'parameters': [[A], [B]],
    'annotations': []
  });
}
function main() {
  BrowserDomAdapter.makeCurrent();
  var iterations = getIntParameter('iterations');
  setupReflector();
  var appInjector = new Injector([]);
  var bindings = [A, B, C];
  var proto = new ProtoElementInjector(null, 0, bindings);
  var elementInjector = proto.instantiate(null, null, null);
  function instantiate() {
    for (var i = 0; i < iterations; ++i) {
      var ei = proto.instantiate(null, null, null);
      ei.instantiateDirectives(appInjector, null, null);
    }
  }
  function instantiateDirectives() {
    for (var i = 0; i < iterations; ++i) {
      elementInjector.clearDirectives();
      elementInjector.instantiateDirectives(appInjector, null, null);
    }
  }
  bindAction('#instantiate', instantiate);
  bindAction('#instantiateDirectives', instantiateDirectives);
}
var A = function A() {
  count++;
};
($traceurRuntime.createClass)(A, {}, {});
var B = function B() {
  count++;
};
($traceurRuntime.createClass)(B, {}, {});
var C = function C(a, b) {
  assert.argumentTypes(a, A, b, B);
  count++;
};
($traceurRuntime.createClass)(C, {}, {});
Object.defineProperty(C, "parameters", {get: function() {
    return [[A], [B]];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/benchmarks/src/element_injector/element_injector_benchmark.map

//# sourceMappingURL=./element_injector_benchmark.map