"use strict";
Object.defineProperties(module.exports, {
  KeyMetadataError: {get: function() {
      return KeyMetadataError;
    }},
  ProviderError: {get: function() {
      return ProviderError;
    }},
  NoProviderError: {get: function() {
      return NoProviderError;
    }},
  AsyncBindingError: {get: function() {
      return AsyncBindingError;
    }},
  CyclicDependencyError: {get: function() {
      return CyclicDependencyError;
    }},
  InstantiationError: {get: function() {
      return InstantiationError;
    }},
  InvalidBindingError: {get: function() {
      return InvalidBindingError;
    }},
  NoAnnotationError: {get: function() {
      return NoAnnotationError;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/src/di/exceptions";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_facade_47_lang__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var $__1 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    ListWrapper = $__1.ListWrapper,
    List = $__1.List;
var stringify = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).stringify;
function findFirstClosedCycle(keys) {
  assert.argumentTypes(keys, List);
  var res = [];
  for (var i = 0; i < keys.length; ++i) {
    if (ListWrapper.contains(res, keys[i])) {
      ListWrapper.push(res, keys[i]);
      return res;
    } else {
      ListWrapper.push(res, keys[i]);
    }
  }
  return res;
}
Object.defineProperty(findFirstClosedCycle, "parameters", {get: function() {
    return [[List]];
  }});
function constructResolvingPath(keys) {
  if (keys.length > 1) {
    var reversed = findFirstClosedCycle(ListWrapper.reversed(keys));
    var tokenStrs = ListWrapper.map(reversed, (function(k) {
      return stringify(k.token);
    }));
    return " (" + tokenStrs.join(' -> ') + ")";
  } else {
    return "";
  }
}
Object.defineProperty(constructResolvingPath, "parameters", {get: function() {
    return [[List]];
  }});
var KeyMetadataError = function KeyMetadataError() {
  $traceurRuntime.superConstructor($KeyMetadataError).apply(this, arguments);
};
var $KeyMetadataError = KeyMetadataError;
($traceurRuntime.createClass)(KeyMetadataError, {}, {}, Error);
var ProviderError = function ProviderError(key, constructResolvingMessage) {
  assert.argumentTypes(key, assert.type.any, constructResolvingMessage, Function);
  $traceurRuntime.superConstructor($ProviderError).call(this);
  this.keys = [key];
  this.constructResolvingMessage = constructResolvingMessage;
  this.message = this.constructResolvingMessage(this.keys);
};
var $ProviderError = ProviderError;
($traceurRuntime.createClass)(ProviderError, {
  addKey: function(key) {
    ListWrapper.push(this.keys, key);
    this.message = this.constructResolvingMessage(this.keys);
  },
  toString: function() {
    return this.message;
  }
}, {}, Error);
Object.defineProperty(ProviderError, "parameters", {get: function() {
    return [[], [Function]];
  }});
var NoProviderError = function NoProviderError(key) {
  $traceurRuntime.superConstructor($NoProviderError).call(this, key, function(keys) {
    assert.argumentTypes(keys, List);
    var first = stringify(ListWrapper.first(keys).token);
    return ("No provider for " + first + "!" + constructResolvingPath(keys));
  });
};
var $NoProviderError = NoProviderError;
($traceurRuntime.createClass)(NoProviderError, {}, {}, ProviderError);
var AsyncBindingError = function AsyncBindingError(key) {
  $traceurRuntime.superConstructor($AsyncBindingError).call(this, key, function(keys) {
    assert.argumentTypes(keys, List);
    var first = stringify(ListWrapper.first(keys).token);
    return ("Cannot instantiate " + first + " synchronously. ") + ("It is provided as a promise!" + constructResolvingPath(keys));
  });
};
var $AsyncBindingError = AsyncBindingError;
($traceurRuntime.createClass)(AsyncBindingError, {}, {}, ProviderError);
var CyclicDependencyError = function CyclicDependencyError(key) {
  $traceurRuntime.superConstructor($CyclicDependencyError).call(this, key, function(keys) {
    assert.argumentTypes(keys, List);
    return ("Cannot instantiate cyclic dependency!" + constructResolvingPath(keys));
  });
};
var $CyclicDependencyError = CyclicDependencyError;
($traceurRuntime.createClass)(CyclicDependencyError, {}, {}, ProviderError);
var InstantiationError = function InstantiationError(originalException, key) {
  $traceurRuntime.superConstructor($InstantiationError).call(this, key, function(keys) {
    assert.argumentTypes(keys, List);
    var first = stringify(ListWrapper.first(keys).token);
    return ("Error during instantiation of " + first + "!" + constructResolvingPath(keys) + ".") + (" ORIGINAL ERROR: " + originalException);
  });
};
var $InstantiationError = InstantiationError;
($traceurRuntime.createClass)(InstantiationError, {}, {}, ProviderError);
var InvalidBindingError = function InvalidBindingError(binding) {
  $traceurRuntime.superConstructor($InvalidBindingError).call(this);
  this.message = ("Invalid binding " + binding);
};
var $InvalidBindingError = InvalidBindingError;
($traceurRuntime.createClass)(InvalidBindingError, {toString: function() {
    return this.message;
  }}, {}, Error);
var NoAnnotationError = function NoAnnotationError(typeOrFunc) {
  $traceurRuntime.superConstructor($NoAnnotationError).call(this);
  this.message = ("Cannot resolve all parameters for " + stringify(typeOrFunc));
};
var $NoAnnotationError = NoAnnotationError;
($traceurRuntime.createClass)(NoAnnotationError, {toString: function() {
    return this.message;
  }}, {}, Error);

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/di/exceptions.map

//# sourceMappingURL=./exceptions.map