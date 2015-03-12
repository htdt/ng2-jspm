import {Injector,
  Key} from "angular2/di";
import {reflector} from 'angular2/src/reflection/reflection';
import {getIntParameter,
  bindAction} from 'angular2/src/test_lib/benchmark_util';
import {BrowserDomAdapter} from 'angular2/src/dom/browser_adapter';
var count = 0;
function setupReflector() {
  reflector.registerType(A, {
    'factory': () => new A(),
    'parameters': [],
    'annotations': []
  });
  reflector.registerType(B, {
    'factory': (a) => new B(a),
    'parameters': [[A]],
    'annotations': []
  });
  reflector.registerType(C, {
    'factory': (b) => new C(b),
    'parameters': [[B]],
    'annotations': []
  });
  reflector.registerType(D, {
    'factory': (c, b) => new D(c, b),
    'parameters': [[C], [B]],
    'annotations': []
  });
  reflector.registerType(E, {
    'factory': (d, c) => new E(d, c),
    'parameters': [[D], [C]],
    'annotations': []
  });
}
export function main() {
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
class A {
  constructor() {
    count++;
  }
}
class B {
  constructor(a) {
    count++;
  }
}
Object.defineProperty(B, "parameters", {get: function() {
    return [[A]];
  }});
class C {
  constructor(b) {
    count++;
  }
}
Object.defineProperty(C, "parameters", {get: function() {
    return [[B]];
  }});
class D {
  constructor(c, b) {
    count++;
  }
}
Object.defineProperty(D, "parameters", {get: function() {
    return [[C], [B]];
  }});
class E {
  constructor(d, c) {
    count++;
  }
}
Object.defineProperty(E, "parameters", {get: function() {
    return [[D], [C]];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/benchmarks/src/di/di_benchmark.map

//# sourceMappingURL=./di_benchmark.map