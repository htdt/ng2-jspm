"use strict";
Object.defineProperties(module.exports, {
  Dependency: {get: function() {
      return Dependency;
    }},
  Binding: {get: function() {
      return Binding;
    }},
  bind: {get: function() {
      return bind;
    }},
  BindingBuilder: {get: function() {
      return BindingBuilder;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/src/di/binding";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_reflection_47_reflection__,
    $__angular2_47_src_47_di_47_key__,
    $__angular2_47_src_47_di_47_annotations__,
    $__angular2_47_src_47_di_47_exceptions__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var $__1 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    FIELD = $__1.FIELD,
    Type = $__1.Type,
    isBlank = $__1.isBlank,
    isPresent = $__1.isPresent;
var $__2 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    List = $__2.List,
    MapWrapper = $__2.MapWrapper,
    ListWrapper = $__2.ListWrapper;
var reflector = ($__angular2_47_src_47_reflection_47_reflection__ = require("angular2/src/reflection/reflection"), $__angular2_47_src_47_reflection_47_reflection__ && $__angular2_47_src_47_reflection_47_reflection__.__esModule && $__angular2_47_src_47_reflection_47_reflection__ || {default: $__angular2_47_src_47_reflection_47_reflection__}).reflector;
var Key = ($__angular2_47_src_47_di_47_key__ = require("./key"), $__angular2_47_src_47_di_47_key__ && $__angular2_47_src_47_di_47_key__.__esModule && $__angular2_47_src_47_di_47_key__ || {default: $__angular2_47_src_47_di_47_key__}).Key;
var $__5 = ($__angular2_47_src_47_di_47_annotations__ = require("./annotations"), $__angular2_47_src_47_di_47_annotations__ && $__angular2_47_src_47_di_47_annotations__.__esModule && $__angular2_47_src_47_di_47_annotations__ || {default: $__angular2_47_src_47_di_47_annotations__}),
    Inject = $__5.Inject,
    InjectLazy = $__5.InjectLazy,
    InjectPromise = $__5.InjectPromise,
    Optional = $__5.Optional,
    DependencyAnnotation = $__5.DependencyAnnotation;
var NoAnnotationError = ($__angular2_47_src_47_di_47_exceptions__ = require("./exceptions"), $__angular2_47_src_47_di_47_exceptions__ && $__angular2_47_src_47_di_47_exceptions__.__esModule && $__angular2_47_src_47_di_47_exceptions__ || {default: $__angular2_47_src_47_di_47_exceptions__}).NoAnnotationError;
var Dependency = function Dependency(key, asPromise, lazy, optional, properties) {
  assert.argumentTypes(key, Key, asPromise, assert.type.boolean, lazy, assert.type.boolean, optional, assert.type.boolean, properties, List);
  this.key = key;
  this.asPromise = asPromise;
  this.lazy = lazy;
  this.optional = optional;
  this.properties = properties;
};
var $Dependency = Dependency;
($traceurRuntime.createClass)(Dependency, {}, {fromKey: function(key) {
    assert.argumentTypes(key, Key);
    return new $Dependency(key, false, false, false, []);
  }});
Object.defineProperty(Dependency, "parameters", {get: function() {
    return [[Key], [assert.type.boolean], [assert.type.boolean], [assert.type.boolean], [List]];
  }});
Object.defineProperty(Dependency.fromKey, "parameters", {get: function() {
    return [[Key]];
  }});
var Binding = function Binding(key, factory, dependencies, providedAsPromise) {
  assert.argumentTypes(key, Key, factory, Function, dependencies, List, providedAsPromise, assert.type.boolean);
  this.key = key;
  this.factory = factory;
  this.dependencies = dependencies;
  this.providedAsPromise = providedAsPromise;
};
($traceurRuntime.createClass)(Binding, {}, {});
Object.defineProperty(Binding, "parameters", {get: function() {
    return [[Key], [Function], [List], [assert.type.boolean]];
  }});
function bind(token) {
  return assert.returnType((new BindingBuilder(token)), BindingBuilder);
}
var BindingBuilder = function BindingBuilder(token) {
  this.token = token;
};
($traceurRuntime.createClass)(BindingBuilder, {
  toClass: function(type) {
    assert.argumentTypes(type, Type);
    return assert.returnType((new Binding(Key.get(this.token), reflector.factory(type), _dependenciesFor(type), false)), Binding);
  },
  toValue: function(value) {
    return assert.returnType((new Binding(Key.get(this.token), (function() {
      return value;
    }), [], false)), Binding);
  },
  toAlias: function(aliasToken) {
    return assert.returnType((new Binding(Key.get(this.token), (function(aliasInstance) {
      return aliasInstance;
    }), [Dependency.fromKey(Key.get(aliasToken))], false)), Binding);
  },
  toFactory: function(factoryFunction) {
    var dependencies = arguments[1] !== (void 0) ? arguments[1] : null;
    assert.argumentTypes(factoryFunction, Function, dependencies, List);
    return assert.returnType((new Binding(Key.get(this.token), factoryFunction, this._constructDependencies(factoryFunction, dependencies), false)), Binding);
  },
  toAsyncFactory: function(factoryFunction) {
    var dependencies = arguments[1] !== (void 0) ? arguments[1] : null;
    assert.argumentTypes(factoryFunction, Function, dependencies, List);
    return assert.returnType((new Binding(Key.get(this.token), factoryFunction, this._constructDependencies(factoryFunction, dependencies), true)), Binding);
  },
  _constructDependencies: function(factoryFunction, dependencies) {
    return isBlank(dependencies) ? _dependenciesFor(factoryFunction) : ListWrapper.map(dependencies, (function(t) {
      return Dependency.fromKey(Key.get(t));
    }));
  }
}, {});
Object.defineProperty(BindingBuilder.prototype.toClass, "parameters", {get: function() {
    return [[Type]];
  }});
Object.defineProperty(BindingBuilder.prototype.toFactory, "parameters", {get: function() {
    return [[Function], [List]];
  }});
Object.defineProperty(BindingBuilder.prototype.toAsyncFactory, "parameters", {get: function() {
    return [[Function], [List]];
  }});
Object.defineProperty(BindingBuilder.prototype._constructDependencies, "parameters", {get: function() {
    return [[Function], [List]];
  }});
function _dependenciesFor(typeOrFunc) {
  var params = reflector.parameters(typeOrFunc);
  if (isBlank(params))
    return assert.returnType(([]), List);
  if (ListWrapper.any(params, (function(p) {
    return isBlank(p);
  })))
    throw new NoAnnotationError(typeOrFunc);
  return assert.returnType((ListWrapper.map(params, (function(p) {
    return _extractToken(typeOrFunc, p);
  }))), List);
}
function _extractToken(typeOrFunc, annotations) {
  var depProps = [];
  var token = null;
  var optional = false;
  var lazy = false;
  var asPromise = false;
  for (var i = 0; i < annotations.length; ++i) {
    var paramAnnotation = annotations[i];
    if (paramAnnotation instanceof Type) {
      token = paramAnnotation;
    } else if (paramAnnotation instanceof Inject) {
      token = paramAnnotation.token;
    } else if (paramAnnotation instanceof InjectPromise) {
      token = paramAnnotation.token;
      asPromise = true;
    } else if (paramAnnotation instanceof InjectLazy) {
      token = paramAnnotation.token;
      lazy = true;
    } else if (paramAnnotation instanceof Optional) {
      optional = true;
    } else if (paramAnnotation instanceof DependencyAnnotation) {
      ListWrapper.push(depProps, paramAnnotation);
    }
  }
  if (isPresent(token)) {
    return _createDependency(token, asPromise, lazy, optional, depProps);
  } else {
    throw new NoAnnotationError(typeOrFunc);
  }
}
function _createDependency(token, asPromise, lazy, optional, depProps) {
  return assert.returnType((new Dependency(Key.get(token), asPromise, lazy, optional, depProps)), Dependency);
}

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/di/binding.map

//# sourceMappingURL=./binding.map