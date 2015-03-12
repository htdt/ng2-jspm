"use strict";
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var __moduleName = "benchmarks/src/di/di_benchmark";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_di__,
    $__angular2_47_src_47_reflection_47_reflection__,
    $__angular2_47_src_47_test_95_lib_47_benchmark_95_util__,
    $__angular2_47_src_47_dom_47_browser_95_adapter__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var $__1 = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}),
    Injector = $__1.Injector,
    Key = $__1.Key;
var reflector = ($__angular2_47_src_47_reflection_47_reflection__ = require("angular2/src/reflection/reflection"), $__angular2_47_src_47_reflection_47_reflection__ && $__angular2_47_src_47_reflection_47_reflection__.__esModule && $__angular2_47_src_47_reflection_47_reflection__ || {default: $__angular2_47_src_47_reflection_47_reflection__}).reflector;
var $__3 = ($__angular2_47_src_47_test_95_lib_47_benchmark_95_util__ = require("angular2/src/test_lib/benchmark_util"), $__angular2_47_src_47_test_95_lib_47_benchmark_95_util__ && $__angular2_47_src_47_test_95_lib_47_benchmark_95_util__.__esModule && $__angular2_47_src_47_test_95_lib_47_benchmark_95_util__ || {default: $__angular2_47_src_47_test_95_lib_47_benchmark_95_util__}),
    getIntParameter = $__3.getIntParameter,
    bindAction = $__3.bindAction;
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
    'factory': (function(a) {
      return new B(a);
    }),
    'parameters': [[A]],
    'annotations': []
  });
  reflector.registerType(C, {
    'factory': (function(b) {
      return new C(b);
    }),
    'parameters': [[B]],
    'annotations': []
  });
  reflector.registerType(D, {
    'factory': (function(c, b) {
      return new D(c, b);
    }),
    'parameters': [[C], [B]],
    'annotations': []
  });
  reflector.registerType(E, {
    'factory': (function(d, c) {
      return new E(d, c);
    }),
    'parameters': [[D], [C]],
    'annotations': []
  });
}
function main() {
  BrowserDomAdapter.makeCurrent();
  var iterations = getIntParameter('iterations');
  setupReflector();
  var bindings = [A, B, C, D, E];
  var injector = new Injector(bindings);
  var D_KEY = Key.get(D);
  var E_KEY = Key.get(E);
  var childInjector = injector.createChild([]).createChild([]).createChild([]).createChild([]).createChild([]);
  function getByToken() {
    for (var i = 0; i < iterations; ++i) {
      injector.get(D);
      injector.get(E);
    }
  }
  function getByKey() {
    for (var i = 0; i < iterations; ++i) {
      injector.get(D_KEY);
      injector.get(E_KEY);
    }
  }
  function getChild() {
    for (var i = 0; i < iterations; ++i) {
      childInjector.get(D);
      childInjector.get(E);
    }
  }
  function instantiate() {
    for (var i = 0; i < iterations; ++i) {
      var child = injector.createChild([E]);
      child.get(E);
    }
  }
  bindAction('#getByToken', getByToken);
  bindAction('#getByKey', getByKey);
  bindAction('#getChild', getChild);
  bindAction('#instantiate', instantiate);
}
var A = function A() {
  count++;
};
($traceurRuntime.createClass)(A, {}, {});
var B = function B(a) {
  assert.argumentTypes(a, A);
  count++;
};
($traceurRuntime.createClass)(B, {}, {});
Object.defineProperty(B, "parameters", {get: function() {
    return [[A]];
  }});
var C = function C(b) {
  assert.argumentTypes(b, B);
  count++;
};
($traceurRuntime.createClass)(C, {}, {});
Object.defineProperty(C, "parameters", {get: function() {
    return [[B]];
  }});
var D = function D(c, b) {
  assert.argumentTypes(c, C, b, B);
  count++;
};
($traceurRuntime.createClass)(D, {}, {});
Object.defineProperty(D, "parameters", {get: function() {
    return [[C], [B]];
  }});
var E = function E(d, c) {
  assert.argumentTypes(d, D, c, C);
  count++;
};
($traceurRuntime.createClass)(E, {}, {});
Object.defineProperty(E, "parameters", {get: function() {
    return [[D], [C]];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/benchmarks/src/di/di_benchmark.map

//# sourceMappingURL=./di_benchmark.map