"use strict";
Object.defineProperties(module.exports, {
  SetterFn: {get: function() {
      return $__angular2_47_src_47_reflection_47_types__.SetterFn;
    }},
  GetterFn: {get: function() {
      return $__angular2_47_src_47_reflection_47_types__.GetterFn;
    }},
  MethodFn: {get: function() {
      return $__angular2_47_src_47_reflection_47_types__.MethodFn;
    }},
  Reflector: {get: function() {
      return Reflector;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/src/reflection/reflector";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_reflection_47_types__,
    $__angular2_47_src_47_reflection_47_types__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var $__1 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    Type = $__1.Type,
    isPresent = $__1.isPresent,
    stringify = $__1.stringify,
    BaseException = $__1.BaseException;
var $__2 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    List = $__2.List,
    ListWrapper = $__2.ListWrapper,
    Map = $__2.Map,
    MapWrapper = $__2.MapWrapper,
    StringMapWrapper = $__2.StringMapWrapper;
var $__3 = ($__angular2_47_src_47_reflection_47_types__ = require("./types"), $__angular2_47_src_47_reflection_47_types__ && $__angular2_47_src_47_reflection_47_types__.__esModule && $__angular2_47_src_47_reflection_47_types__ || {default: $__angular2_47_src_47_reflection_47_types__}),
    SetterFn = $__3.SetterFn,
    GetterFn = $__3.GetterFn,
    MethodFn = $__3.MethodFn;
var $__angular2_47_src_47_reflection_47_types__ = ($__angular2_47_src_47_reflection_47_types__ = require("./types"), $__angular2_47_src_47_reflection_47_types__ && $__angular2_47_src_47_reflection_47_types__.__esModule && $__angular2_47_src_47_reflection_47_types__ || {default: $__angular2_47_src_47_reflection_47_types__});
var Reflector = function Reflector(reflectionCapabilities) {
  this._typeInfo = MapWrapper.create();
  this._getters = MapWrapper.create();
  this._setters = MapWrapper.create();
  this._methods = MapWrapper.create();
  this.reflectionCapabilities = reflectionCapabilities;
};
($traceurRuntime.createClass)(Reflector, {
  registerType: function(type, typeInfo) {
    MapWrapper.set(this._typeInfo, type, typeInfo);
  },
  registerGetters: function(getters) {
    _mergeMaps(this._getters, getters);
  },
  registerSetters: function(setters) {
    _mergeMaps(this._setters, setters);
  },
  registerMethods: function(methods) {
    _mergeMaps(this._methods, methods);
  },
  factory: function(type) {
    assert.argumentTypes(type, Type);
    if (MapWrapper.contains(this._typeInfo, type)) {
      return assert.returnType((MapWrapper.get(this._typeInfo, type)["factory"]), Function);
    } else {
      return assert.returnType((this.reflectionCapabilities.factory(type)), Function);
    }
  },
  parameters: function(typeOfFunc) {
    if (MapWrapper.contains(this._typeInfo, typeOfFunc)) {
      return assert.returnType((MapWrapper.get(this._typeInfo, typeOfFunc)["parameters"]), List);
    } else {
      return assert.returnType((this.reflectionCapabilities.parameters(typeOfFunc)), List);
    }
  },
  annotations: function(typeOfFunc) {
    if (MapWrapper.contains(this._typeInfo, typeOfFunc)) {
      return assert.returnType((MapWrapper.get(this._typeInfo, typeOfFunc)["annotations"]), List);
    } else {
      return assert.returnType((this.reflectionCapabilities.annotations(typeOfFunc)), List);
    }
  },
  getter: function(name) {
    assert.argumentTypes(name, assert.type.string);
    if (MapWrapper.contains(this._getters, name)) {
      return assert.returnType((MapWrapper.get(this._getters, name)), GetterFn);
    } else {
      return assert.returnType((this.reflectionCapabilities.getter(name)), GetterFn);
    }
  },
  setter: function(name) {
    assert.argumentTypes(name, assert.type.string);
    if (MapWrapper.contains(this._setters, name)) {
      return assert.returnType((MapWrapper.get(this._setters, name)), SetterFn);
    } else {
      return assert.returnType((this.reflectionCapabilities.setter(name)), SetterFn);
    }
  },
  method: function(name) {
    assert.argumentTypes(name, assert.type.string);
    if (MapWrapper.contains(this._methods, name)) {
      return assert.returnType((MapWrapper.get(this._methods, name)), MethodFn);
    } else {
      return assert.returnType((this.reflectionCapabilities.method(name)), MethodFn);
    }
  }
}, {});
Object.defineProperty(Reflector.prototype.factory, "parameters", {get: function() {
    return [[Type]];
  }});
Object.defineProperty(Reflector.prototype.getter, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
Object.defineProperty(Reflector.prototype.setter, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
Object.defineProperty(Reflector.prototype.method, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
function _mergeMaps(target, config) {
  StringMapWrapper.forEach(config, (function(v, k) {
    return MapWrapper.set(target, k, v);
  }));
}
Object.defineProperty(_mergeMaps, "parameters", {get: function() {
    return [[Map], []];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/reflection/reflector.map

//# sourceMappingURL=./reflector.map