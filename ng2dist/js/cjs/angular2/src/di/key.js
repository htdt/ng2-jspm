"use strict";
Object.defineProperties(module.exports, {
  Key: {get: function() {
      return Key;
    }},
  KeyRegistry: {get: function() {
      return KeyRegistry;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/src/di/key";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_src_47_di_47_exceptions__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_facade_47_lang__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var KeyMetadataError = ($__angular2_47_src_47_di_47_exceptions__ = require("./exceptions"), $__angular2_47_src_47_di_47_exceptions__ && $__angular2_47_src_47_di_47_exceptions__.__esModule && $__angular2_47_src_47_di_47_exceptions__ || {default: $__angular2_47_src_47_di_47_exceptions__}).KeyMetadataError;
var $__2 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    MapWrapper = $__2.MapWrapper,
    Map = $__2.Map;
var $__3 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    FIELD = $__3.FIELD,
    int = $__3.int,
    isPresent = $__3.isPresent;
var Key = function Key(token, id) {
  assert.argumentTypes(token, assert.type.any, id, int);
  this.token = token;
  this.id = id;
  this.metadata = null;
};
var $Key = Key;
($traceurRuntime.createClass)(Key, {}, {
  setMetadata: function(key, metadata) {
    assert.argumentTypes(key, $Key, metadata, assert.type.any);
    if (isPresent(key.metadata) && key.metadata !== metadata) {
      throw new KeyMetadataError();
    }
    key.metadata = metadata;
    return assert.returnType((key), $Key);
  },
  get: function(token) {
    return assert.returnType((_globalKeyRegistry.get(token)), $Key);
  },
  get numberOfKeys() {
    return assert.returnType((_globalKeyRegistry.numberOfKeys), int);
  }
});
Object.defineProperty(Key, "parameters", {get: function() {
    return [[], [int]];
  }});
Object.defineProperty(Key.setMetadata, "parameters", {get: function() {
    return [[Key], []];
  }});
var KeyRegistry = function KeyRegistry() {
  this._allKeys = MapWrapper.create();
};
($traceurRuntime.createClass)(KeyRegistry, {
  get: function(token) {
    if (token instanceof Key)
      return assert.returnType((token), Key);
    if (MapWrapper.contains(this._allKeys, token)) {
      return assert.returnType((MapWrapper.get(this._allKeys, token)), Key);
    }
    var newKey = new Key(token, Key.numberOfKeys);
    MapWrapper.set(this._allKeys, token, newKey);
    return assert.returnType((newKey), Key);
  },
  get numberOfKeys() {
    return assert.returnType((MapWrapper.size(this._allKeys)), int);
  }
}, {});
var _globalKeyRegistry = new KeyRegistry();

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/di/key.map

//# sourceMappingURL=./key.map