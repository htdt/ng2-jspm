"use strict";
Object.defineProperties(module.exports, {
  Injector: {get: function() {
      return Injector;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/src/di/injector";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_di_47_binding__,
    $__angular2_47_src_47_di_47_exceptions__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_async__,
    $__angular2_47_src_47_di_47_key__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var $__1 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    Map = $__1.Map,
    List = $__1.List,
    MapWrapper = $__1.MapWrapper,
    ListWrapper = $__1.ListWrapper;
var $__2 = ($__angular2_47_src_47_di_47_binding__ = require("./binding"), $__angular2_47_src_47_di_47_binding__ && $__angular2_47_src_47_di_47_binding__.__esModule && $__angular2_47_src_47_di_47_binding__ || {default: $__angular2_47_src_47_di_47_binding__}),
    Binding = $__2.Binding,
    BindingBuilder = $__2.BindingBuilder,
    bind = $__2.bind;
var $__3 = ($__angular2_47_src_47_di_47_exceptions__ = require("./exceptions"), $__angular2_47_src_47_di_47_exceptions__ && $__angular2_47_src_47_di_47_exceptions__.__esModule && $__angular2_47_src_47_di_47_exceptions__ || {default: $__angular2_47_src_47_di_47_exceptions__}),
    ProviderError = $__3.ProviderError,
    NoProviderError = $__3.NoProviderError,
    InvalidBindingError = $__3.InvalidBindingError,
    AsyncBindingError = $__3.AsyncBindingError,
    CyclicDependencyError = $__3.CyclicDependencyError,
    InstantiationError = $__3.InstantiationError;
var $__4 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    FunctionWrapper = $__4.FunctionWrapper,
    Type = $__4.Type,
    isPresent = $__4.isPresent,
    isBlank = $__4.isBlank;
var $__5 = ($__angular2_47_src_47_facade_47_async__ = require("angular2/src/facade/async"), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}),
    Promise = $__5.Promise,
    PromiseWrapper = $__5.PromiseWrapper;
var Key = ($__angular2_47_src_47_di_47_key__ = require("./key"), $__angular2_47_src_47_di_47_key__ && $__angular2_47_src_47_di_47_key__.__esModule && $__angular2_47_src_47_di_47_key__ || {default: $__angular2_47_src_47_di_47_key__}).Key;
var _constructing = new Object();
var _Waiting = function _Waiting(promise) {
  assert.argumentTypes(promise, Promise);
  this.promise = promise;
};
($traceurRuntime.createClass)(_Waiting, {}, {});
Object.defineProperty(_Waiting, "parameters", {get: function() {
    return [[Promise]];
  }});
function _isWaiting(obj) {
  return assert.returnType((obj instanceof _Waiting), assert.type.boolean);
}
var Injector = function Injector(bindings) {
  var $__10,
      $__11;
  var $__9 = arguments[1] !== (void 0) ? arguments[1] : {},
      parent = ($__10 = $__9.parent) === void 0 ? null : $__10,
      defaultBindings = ($__11 = $__9.defaultBindings) === void 0 ? false : $__11;
  assert.argumentTypes(bindings, List);
  var flatten = _flattenBindings(bindings, MapWrapper.create());
  this._bindings = this._createListOfBindings(flatten);
  this._instances = this._createInstances();
  this._parent = parent;
  this._defaultBindings = defaultBindings;
  this._asyncStrategy = new _AsyncInjectorStrategy(this);
  this._syncStrategy = new _SyncInjectorStrategy(this);
};
var $Injector = Injector;
($traceurRuntime.createClass)(Injector, {
  get: function(token) {
    return this._getByKey(Key.get(token), false, false, false);
  },
  getOptional: function(token) {
    return this._getByKey(Key.get(token), false, false, true);
  },
  asyncGet: function(token) {
    return this._getByKey(Key.get(token), true, false, false);
  },
  createChild: function(bindings) {
    assert.argumentTypes(bindings, List);
    return assert.returnType((new $Injector(bindings, {parent: this})), $Injector);
  },
  _createListOfBindings: function(flattenBindings) {
    var bindings = ListWrapper.createFixedSize(Key.numberOfKeys + 1);
    MapWrapper.forEach(flattenBindings, (function(v, keyId) {
      return bindings[keyId] = v;
    }));
    return assert.returnType((bindings), List);
  },
  _createInstances: function() {
    return assert.returnType((ListWrapper.createFixedSize(Key.numberOfKeys + 1)), List);
  },
  _getByKey: function(key, returnPromise, returnLazy, optional) {
    var $__7 = this;
    if (returnLazy) {
      return (function() {
        return $__7._getByKey(key, returnPromise, false, optional);
      });
    }
    var strategy = returnPromise ? this._asyncStrategy : this._syncStrategy;
    var instance = strategy.readFromCache(key);
    if (isPresent(instance))
      return instance;
    instance = strategy.instantiate(key);
    if (isPresent(instance))
      return instance;
    if (isPresent(this._parent)) {
      return this._parent._getByKey(key, returnPromise, returnLazy, optional);
    }
    if (optional) {
      return null;
    } else {
      throw new NoProviderError(key);
    }
  },
  _resolveDependencies: function(key, binding, forceAsync) {
    var $__7 = this;
    try {
      var getDependency = (function(d) {
        return $__7._getByKey(d.key, forceAsync || d.asPromise, d.lazy, d.optional);
      });
      return assert.returnType((ListWrapper.map(binding.dependencies, getDependency)), List);
    } catch (e) {
      this._clear(key);
      if (e instanceof ProviderError)
        e.addKey(key);
      throw e;
    }
  },
  _getInstance: function(key) {
    assert.argumentTypes(key, Key);
    if (this._instances.length <= key.id)
      return null;
    return ListWrapper.get(this._instances, key.id);
  },
  _setInstance: function(key, obj) {
    assert.argumentTypes(key, Key, obj, assert.type.any);
    ListWrapper.set(this._instances, key.id, obj);
  },
  _getBinding: function(key) {
    assert.argumentTypes(key, Key);
    var binding = this._bindings.length <= key.id ? null : ListWrapper.get(this._bindings, key.id);
    if (isBlank(binding) && this._defaultBindings) {
      return bind(key.token).toClass(key.token);
    } else {
      return binding;
    }
  },
  _markAsConstructing: function(key) {
    assert.argumentTypes(key, Key);
    this._setInstance(key, _constructing);
  },
  _clear: function(key) {
    assert.argumentTypes(key, Key);
    this._setInstance(key, null);
  }
}, {});
Object.defineProperty(Injector, "parameters", {get: function() {
    return [[List], []];
  }});
Object.defineProperty(Injector.prototype.createChild, "parameters", {get: function() {
    return [[List]];
  }});
Object.defineProperty(Injector.prototype._getByKey, "parameters", {get: function() {
    return [[Key], [assert.type.boolean], [assert.type.boolean], [assert.type.boolean]];
  }});
Object.defineProperty(Injector.prototype._resolveDependencies, "parameters", {get: function() {
    return [[Key], [Binding], [assert.type.boolean]];
  }});
Object.defineProperty(Injector.prototype._getInstance, "parameters", {get: function() {
    return [[Key]];
  }});
Object.defineProperty(Injector.prototype._setInstance, "parameters", {get: function() {
    return [[Key], []];
  }});
Object.defineProperty(Injector.prototype._getBinding, "parameters", {get: function() {
    return [[Key]];
  }});
Object.defineProperty(Injector.prototype._markAsConstructing, "parameters", {get: function() {
    return [[Key]];
  }});
Object.defineProperty(Injector.prototype._clear, "parameters", {get: function() {
    return [[Key]];
  }});
var _SyncInjectorStrategy = function _SyncInjectorStrategy(injector) {
  assert.argumentTypes(injector, Injector);
  this.injector = injector;
};
($traceurRuntime.createClass)(_SyncInjectorStrategy, {
  readFromCache: function(key) {
    assert.argumentTypes(key, Key);
    if (key.token === Injector) {
      return this.injector;
    }
    var instance = this.injector._getInstance(key);
    if (instance === _constructing) {
      throw new CyclicDependencyError(key);
    } else if (isPresent(instance) && !_isWaiting(instance)) {
      return instance;
    } else {
      return null;
    }
  },
  instantiate: function(key) {
    assert.argumentTypes(key, Key);
    var binding = this.injector._getBinding(key);
    if (isBlank(binding))
      return null;
    if (binding.providedAsPromise)
      throw new AsyncBindingError(key);
    this.injector._markAsConstructing(key);
    var deps = this.injector._resolveDependencies(key, binding, false);
    return this._createInstance(key, binding, deps);
  },
  _createInstance: function(key, binding, deps) {
    assert.argumentTypes(key, Key, binding, Binding, deps, List);
    try {
      var instance = FunctionWrapper.apply(binding.factory, deps);
      this.injector._setInstance(key, instance);
      return instance;
    } catch (e) {
      this.injector._clear(key);
      throw new InstantiationError(e, key);
    }
  }
}, {});
Object.defineProperty(_SyncInjectorStrategy, "parameters", {get: function() {
    return [[Injector]];
  }});
Object.defineProperty(_SyncInjectorStrategy.prototype.readFromCache, "parameters", {get: function() {
    return [[Key]];
  }});
Object.defineProperty(_SyncInjectorStrategy.prototype.instantiate, "parameters", {get: function() {
    return [[Key]];
  }});
Object.defineProperty(_SyncInjectorStrategy.prototype._createInstance, "parameters", {get: function() {
    return [[Key], [Binding], [List]];
  }});
var _AsyncInjectorStrategy = function _AsyncInjectorStrategy(injector) {
  assert.argumentTypes(injector, Injector);
  this.injector = injector;
};
($traceurRuntime.createClass)(_AsyncInjectorStrategy, {
  readFromCache: function(key) {
    assert.argumentTypes(key, Key);
    if (key.token === Injector) {
      return PromiseWrapper.resolve(this.injector);
    }
    var instance = this.injector._getInstance(key);
    if (instance === _constructing) {
      throw new CyclicDependencyError(key);
    } else if (_isWaiting(instance)) {
      return instance.promise;
    } else if (isPresent(instance)) {
      return PromiseWrapper.resolve(instance);
    } else {
      return null;
    }
  },
  instantiate: function(key) {
    var $__7 = this;
    var binding = this.injector._getBinding(key);
    if (isBlank(binding))
      return null;
    this.injector._markAsConstructing(key);
    var deps = this.injector._resolveDependencies(key, binding, true);
    var depsPromise = PromiseWrapper.all(deps);
    var promise = PromiseWrapper.then(depsPromise, null, (function(e) {
      return $__7._errorHandler(key, e);
    })).then((function(deps) {
      return $__7._findOrCreate(key, binding, deps);
    })).then((function(instance) {
      return $__7._cacheInstance(key, instance);
    }));
    this.injector._setInstance(key, new _Waiting(promise));
    return promise;
  },
  _errorHandler: function(key, e) {
    assert.argumentTypes(key, Key, e, assert.type.any);
    if (e instanceof ProviderError)
      e.addKey(key);
    return assert.returnType((PromiseWrapper.reject(e)), Promise);
  },
  _findOrCreate: function(key, binding, deps) {
    assert.argumentTypes(key, Key, binding, Binding, deps, List);
    try {
      var instance = this.injector._getInstance(key);
      if (!_isWaiting(instance))
        return instance;
      return FunctionWrapper.apply(binding.factory, deps);
    } catch (e) {
      this.injector._clear(key);
      throw new InstantiationError(e, key);
    }
  },
  _cacheInstance: function(key, instance) {
    this.injector._setInstance(key, instance);
    return instance;
  }
}, {});
Object.defineProperty(_AsyncInjectorStrategy, "parameters", {get: function() {
    return [[Injector]];
  }});
Object.defineProperty(_AsyncInjectorStrategy.prototype.readFromCache, "parameters", {get: function() {
    return [[Key]];
  }});
Object.defineProperty(_AsyncInjectorStrategy.prototype.instantiate, "parameters", {get: function() {
    return [[Key]];
  }});
Object.defineProperty(_AsyncInjectorStrategy.prototype._errorHandler, "parameters", {get: function() {
    return [[Key], []];
  }});
Object.defineProperty(_AsyncInjectorStrategy.prototype._findOrCreate, "parameters", {get: function() {
    return [[Key], [Binding], [List]];
  }});
function _flattenBindings(bindings, res) {
  assert.argumentTypes(bindings, List, res, Map);
  ListWrapper.forEach(bindings, function(b) {
    if (b instanceof Binding) {
      MapWrapper.set(res, b.key.id, b);
    } else if (b instanceof Type) {
      var s = bind(b).toClass(b);
      MapWrapper.set(res, s.key.id, s);
    } else if (b instanceof List) {
      _flattenBindings(b, res);
    } else if (b instanceof BindingBuilder) {
      throw new InvalidBindingError(b.token);
    } else {
      throw new InvalidBindingError(b);
    }
  });
  return res;
}
Object.defineProperty(_flattenBindings, "parameters", {get: function() {
    return [[List], [Map]];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/di/injector.map

//# sourceMappingURL=./injector.map