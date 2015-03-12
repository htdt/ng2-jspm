var parse5Adapter = require('angular2/src/dom/parse5_adapter');
parse5Adapter.Parse5DomAdapter.makeCurrent();
"use strict";
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/test/reflection/reflector_spec";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_test_95_lib__,
    $__angular2_47_src_47_reflection_47_reflection__,
    $__angular2_47_src_47_reflection_47_reflection_95_capabilities__,
    $__angular2_47_src_47_facade_47_lang__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var $__1 = ($__angular2_47_test_95_lib__ = require("angular2/test_lib"), $__angular2_47_test_95_lib__ && $__angular2_47_test_95_lib__.__esModule && $__angular2_47_test_95_lib__ || {default: $__angular2_47_test_95_lib__}),
    describe = $__1.describe,
    it = $__1.it,
    iit = $__1.iit,
    ddescribe = $__1.ddescribe,
    expect = $__1.expect,
    beforeEach = $__1.beforeEach;
var Reflector = ($__angular2_47_src_47_reflection_47_reflection__ = require("angular2/src/reflection/reflection"), $__angular2_47_src_47_reflection_47_reflection__ && $__angular2_47_src_47_reflection_47_reflection__.__esModule && $__angular2_47_src_47_reflection_47_reflection__ || {default: $__angular2_47_src_47_reflection_47_reflection__}).Reflector;
var ReflectionCapabilities = ($__angular2_47_src_47_reflection_47_reflection_95_capabilities__ = require("angular2/src/reflection/reflection_capabilities"), $__angular2_47_src_47_reflection_47_reflection_95_capabilities__ && $__angular2_47_src_47_reflection_47_reflection_95_capabilities__.__esModule && $__angular2_47_src_47_reflection_47_reflection_95_capabilities__ || {default: $__angular2_47_src_47_reflection_47_reflection_95_capabilities__}).ReflectionCapabilities;
var CONST = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).CONST;
var Annotation = function Annotation(value) {
  this.value = value;
};
($traceurRuntime.createClass)(Annotation, {}, {});
Object.defineProperty(Annotation, "annotations", {get: function() {
    return [new CONST()];
  }});
var AType = function AType(value) {
  this.value = value;
};
($traceurRuntime.createClass)(AType, {}, {});
var ClassWithAnnotations = function ClassWithAnnotations(a, b) {
  assert.argumentTypes(a, AType, b, AType);
  this.a = a;
  this.b = b;
};
($traceurRuntime.createClass)(ClassWithAnnotations, {}, {});
Object.defineProperty(ClassWithAnnotations, "annotations", {get: function() {
    return [new Annotation('class')];
  }});
Object.defineProperty(ClassWithAnnotations, "parameters", {get: function() {
    return [[AType, new Annotation("a")], [AType, new Annotation("b")]];
  }});
var ClassWithoutAnnotations = function ClassWithoutAnnotations(a, b) {};
($traceurRuntime.createClass)(ClassWithoutAnnotations, {}, {});
var TestObjWith11Args = function TestObjWith11Args(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) {};
($traceurRuntime.createClass)(TestObjWith11Args, {}, {});
function testFunc(a, b) {
  assert.argumentTypes(a, AType, b, AType);
}
Object.defineProperty(testFunc, "annotations", {get: function() {
    return [new Annotation('func')];
  }});
Object.defineProperty(testFunc, "parameters", {get: function() {
    return [[AType, new Annotation("a")], [AType, new Annotation("b")]];
  }});
var TestObj = function TestObj(a, b) {
  this.a = a;
  this.b = b;
};
($traceurRuntime.createClass)(TestObj, {identity: function(arg) {
    return arg;
  }}, {});
function main() {
  describe('Reflector', (function() {
    var reflector;
    beforeEach((function() {
      reflector = new Reflector(new ReflectionCapabilities());
    }));
    describe("factory", (function() {
      it("should create a factory for the given type", (function() {
        var obj = reflector.factory(TestObj)(1, 2);
        expect(obj.a).toEqual(1);
        expect(obj.b).toEqual(2);
      }));
      it("should throw when more than 10 arguments", (function() {
        expect((function() {
          return reflector.factory(TestObjWith11Args)(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11);
        })).toThrowError();
      }));
      it("should return a registered factory if available", (function() {
        reflector.registerType(TestObj, {"factory": (function() {
            return "fake";
          })});
        expect(reflector.factory(TestObj)()).toEqual("fake");
      }));
    }));
    describe("parameters", (function() {
      it("should return an array of parameters for a type", (function() {
        var p = reflector.parameters(ClassWithAnnotations);
        expect(p).toEqual([[AType, new Annotation('a')], [AType, new Annotation('b')]]);
      }));
      it("should return an array of parameters for a function", (function() {
        var p = reflector.parameters(testFunc);
        expect(p).toEqual([[AType, new Annotation('a')], [AType, new Annotation('b')]]);
      }));
      it("should work for a class without annotations", (function() {
        var p = reflector.parameters(ClassWithoutAnnotations);
        expect(p.length).toEqual(2);
      }));
      it("should return registered parameters if available", (function() {
        reflector.registerType(TestObj, {"parameters": [1, 2]});
        expect(reflector.parameters(TestObj)).toEqual([1, 2]);
      }));
    }));
    describe("annotations", (function() {
      it("should return an array of annotations for a type", (function() {
        var p = reflector.annotations(ClassWithAnnotations);
        expect(p).toEqual([new Annotation('class')]);
      }));
      it("should return an array of annotations for a function", (function() {
        var p = reflector.annotations(testFunc);
        expect(p).toEqual([new Annotation('func')]);
      }));
      it("should return registered annotations if available", (function() {
        reflector.registerType(TestObj, {"annotations": [1, 2]});
        expect(reflector.annotations(TestObj)).toEqual([1, 2]);
      }));
    }));
    describe("getter", (function() {
      it("returns a function reading a property", (function() {
        var getA = reflector.getter('a');
        expect(getA(new TestObj(1, 2))).toEqual(1);
      }));
      it("should return a registered getter if available", (function() {
        reflector.registerGetters({"abc": (function(obj) {
            return "fake";
          })});
        expect(reflector.getter("abc")("anything")).toEqual("fake");
      }));
    }));
    describe("setter", (function() {
      it("returns a function setting a property", (function() {
        var setA = reflector.setter('a');
        var obj = new TestObj(1, 2);
        setA(obj, 100);
        expect(obj.a).toEqual(100);
      }));
      it("should return a registered setter if available", (function() {
        var updateMe;
        reflector.registerSetters({"abc": (function(obj, value) {
            updateMe = value;
          })});
        reflector.setter("abc")("anything", "fake");
        expect(updateMe).toEqual("fake");
      }));
    }));
    describe("method", (function() {
      it("returns a function invoking a method", (function() {
        var func = reflector.method('identity');
        var obj = new TestObj(1, 2);
        expect(func(obj, ['value'])).toEqual('value');
      }));
      it("should return a registered method if available", (function() {
        reflector.registerMethods({"abc": (function(obj, args) {
            return args;
          })});
        expect(reflector.method("abc")("anything", ["fake"])).toEqual(['fake']);
      }));
    }));
  }));
}

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/test/reflection/reflector_spec.map

//# sourceMappingURL=./reflector_spec.map
 main();