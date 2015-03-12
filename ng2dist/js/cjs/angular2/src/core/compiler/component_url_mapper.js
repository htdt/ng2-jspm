"use strict";
Object.defineProperties(module.exports, {
  ComponentUrlMapper: {get: function() {
      return ComponentUrlMapper;
    }},
  RuntimeComponentUrlMapper: {get: function() {
      return RuntimeComponentUrlMapper;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/src/core/compiler/component_url_mapper";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var $__1 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    Type = $__1.Type,
    isPresent = $__1.isPresent;
var $__2 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    Map = $__2.Map,
    MapWrapper = $__2.MapWrapper;
var ComponentUrlMapper = function ComponentUrlMapper() {};
($traceurRuntime.createClass)(ComponentUrlMapper, {getUrl: function(component) {
    assert.argumentTypes(component, Type);
    return assert.returnType(('./'), assert.type.string);
  }}, {});
Object.defineProperty(ComponentUrlMapper.prototype.getUrl, "parameters", {get: function() {
    return [[Type]];
  }});
var RuntimeComponentUrlMapper = function RuntimeComponentUrlMapper() {
  $traceurRuntime.superConstructor($RuntimeComponentUrlMapper).call(this);
  this._componentUrls = MapWrapper.create();
};
var $RuntimeComponentUrlMapper = RuntimeComponentUrlMapper;
($traceurRuntime.createClass)(RuntimeComponentUrlMapper, {
  setComponentUrl: function(component, url) {
    assert.argumentTypes(component, Type, url, assert.type.string);
    MapWrapper.set(this._componentUrls, component, url);
  },
  getUrl: function(component) {
    assert.argumentTypes(component, Type);
    var url = MapWrapper.get(this._componentUrls, component);
    if (isPresent(url))
      return assert.returnType((url), assert.type.string);
    return assert.returnType(($traceurRuntime.superGet(this, $RuntimeComponentUrlMapper.prototype, "getUrl").call(this, component)), assert.type.string);
  }
}, {}, ComponentUrlMapper);
Object.defineProperty(RuntimeComponentUrlMapper.prototype.setComponentUrl, "parameters", {get: function() {
    return [[Type], [assert.type.string]];
  }});
Object.defineProperty(RuntimeComponentUrlMapper.prototype.getUrl, "parameters", {get: function() {
    return [[Type]];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/core/compiler/component_url_mapper.map

//# sourceMappingURL=./component_url_mapper.map