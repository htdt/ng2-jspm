"use strict";
Object.defineProperties(module.exports, {
  ReflectionCapabilities: {get: function() {
      return ReflectionCapabilities;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/src/reflection/reflection_capabilities";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_reflection_47_types__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var $__1 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    Type = $__1.Type,
    isPresent = $__1.isPresent;
var $__2 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    List = $__2.List,
    ListWrapper = $__2.ListWrapper;
var $__3 = ($__angular2_47_src_47_reflection_47_types__ = require("./types"), $__angular2_47_src_47_reflection_47_types__ && $__angular2_47_src_47_reflection_47_types__.__esModule && $__angular2_47_src_47_reflection_47_types__ || {default: $__angular2_47_src_47_reflection_47_types__}),
    GetterFn = $__3.GetterFn,
    SetterFn = $__3.SetterFn,
    MethodFn = $__3.MethodFn;
var ReflectionCapabilities = function ReflectionCapabilities() {};
($traceurRuntime.createClass)(ReflectionCapabilities, {
  factory: function(type) {
    assert.argumentTypes(type, Type);
    switch (type.length) {
      case 0:
        return assert.returnType((function() {
          return new type();
        }), Function);
      case 1:
        return assert.returnType((function(a1) {
          return new type(a1);
        }), Function);
      case 2:
        return assert.returnType((function(a1, a2) {
          return new type(a1, a2);
        }), Function);
      case 3:
        return assert.returnType((function(a1, a2, a3) {
          return new type(a1, a2, a3);
        }), Function);
      case 4:
        return assert.returnType((function(a1, a2, a3, a4) {
          return new type(a1, a2, a3, a4);
        }), Function);
      case 5:
        return assert.returnType((function(a1, a2, a3, a4, a5) {
          return new type(a1, a2, a3, a4, a5);
        }), Function);
      case 6:
        return assert.returnType((function(a1, a2, a3, a4, a5, a6) {
          return new type(a1, a2, a3, a4, a5, a6);
        }), Function);
      case 7:
        return assert.returnType((function(a1, a2, a3, a4, a5, a6, a7) {
          return new type(a1, a2, a3, a4, a5, a6, a7);
        }), Function);
      case 8:
        return assert.returnType((function(a1, a2, a3, a4, a5, a6, a7, a8) {
          return new type(a1, a2, a3, a4, a5, a6, a7, a8);
        }), Function);
      case 9:
        return assert.returnType((function(a1, a2, a3, a4, a5, a6, a7, a8, a9) {
          return new type(a1, a2, a3, a4, a5, a6, a7, a8, a9);
        }), Function);
      case 10:
        return assert.returnType((function(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
          return new type(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10);
        }), Function);
    }
    ;
    throw new Error("Factory cannot take more than 10 arguments");
  },
  parameters: function(typeOfFunc) {
    return assert.returnType((isPresent(typeOfFunc.parameters) ? typeOfFunc.parameters : ListWrapper.createFixedSize(typeOfFunc.length)), assert.genericType(List, List));
  },
  annotations: function(typeOfFunc) {
    return assert.returnType((isPresent(typeOfFunc.annotations) ? typeOfFunc.annotations : []), List);
  },
  getter: function(name) {
    assert.argumentTypes(name, assert.type.string);
    return assert.returnType((new Function('o', 'return o.' + name + ';')), GetterFn);
  },
  setter: function(name) {
    assert.argumentTypes(name, assert.type.string);
    return assert.returnType((new Function('o', 'v', 'return o.' + name + ' = v;')), SetterFn);
  },
  method: function(name) {
    assert.argumentTypes(name, assert.type.string);
    var method = ("o." + name);
    return assert.returnType((new Function('o', 'args', ("if (!" + method + ") throw new Error('\"" + name + "\" is undefined');") + ("return " + method + ".apply(o, args);"))), MethodFn);
  }
}, {});
Object.defineProperty(ReflectionCapabilities.prototype.factory, "parameters", {get: function() {
    return [[Type]];
  }});
Object.defineProperty(ReflectionCapabilities.prototype.getter, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
Object.defineProperty(ReflectionCapabilities.prototype.setter, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
Object.defineProperty(ReflectionCapabilities.prototype.method, "parameters", {get: function() {
    return [[assert.type.string]];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/reflection/reflection_capabilities.map

//# sourceMappingURL=./reflection_capabilities.map