var parse5Adapter = require('angular2/src/dom/parse5_adapter');
parse5Adapter.Parse5DomAdapter.makeCurrent();
"use strict";
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/test/core/compiler/element_injector_spec";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_test_95_lib__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_core_47_compiler_47_element_95_injector__,
    $__angular2_47_src_47_core_47_annotations_47_visibility__,
    $__angular2_47_src_47_core_47_annotations_47_di__,
    $__angular2_47_src_47_core_47_annotations_47_annotations__,
    $__angular2_47_di__,
    $__angular2_47_src_47_core_47_compiler_47_view__,
    $__angular2_47_src_47_core_47_compiler_47_view_95_container__,
    $__angular2_47_src_47_core_47_dom_47_element__,
    $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_light_95_dom__,
    $__angular2_47_src_47_core_47_annotations_47_annotations__,
    $__angular2_47_src_47_core_47_compiler_47_binding_95_propagation_95_config__,
    $__angular2_47_src_47_reflection_47_reflection__,
    $__angular2_47_change_95_detection__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var $__1 = ($__angular2_47_test_95_lib__ = require("angular2/test_lib"), $__angular2_47_test_95_lib__ && $__angular2_47_test_95_lib__.__esModule && $__angular2_47_test_95_lib__ || {default: $__angular2_47_test_95_lib__}),
    describe = $__1.describe,
    ddescribe = $__1.ddescribe,
    it = $__1.it,
    iit = $__1.iit,
    xit = $__1.xit,
    xdescribe = $__1.xdescribe,
    expect = $__1.expect,
    beforeEach = $__1.beforeEach,
    SpyObject = $__1.SpyObject,
    proxy = $__1.proxy,
    el = $__1.el;
var $__2 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    isBlank = $__2.isBlank,
    isPresent = $__2.isPresent,
    FIELD = $__2.FIELD,
    IMPLEMENTS = $__2.IMPLEMENTS;
var $__3 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    ListWrapper = $__3.ListWrapper,
    MapWrapper = $__3.MapWrapper,
    List = $__3.List,
    StringMapWrapper = $__3.StringMapWrapper;
var $__4 = ($__angular2_47_src_47_core_47_compiler_47_element_95_injector__ = require("angular2/src/core/compiler/element_injector"), $__angular2_47_src_47_core_47_compiler_47_element_95_injector__ && $__angular2_47_src_47_core_47_compiler_47_element_95_injector__.__esModule && $__angular2_47_src_47_core_47_compiler_47_element_95_injector__ || {default: $__angular2_47_src_47_core_47_compiler_47_element_95_injector__}),
    ProtoElementInjector = $__4.ProtoElementInjector,
    PreBuiltObjects = $__4.PreBuiltObjects,
    DirectiveBinding = $__4.DirectiveBinding;
var $__5 = ($__angular2_47_src_47_core_47_annotations_47_visibility__ = require("angular2/src/core/annotations/visibility"), $__angular2_47_src_47_core_47_annotations_47_visibility__ && $__angular2_47_src_47_core_47_annotations_47_visibility__.__esModule && $__angular2_47_src_47_core_47_annotations_47_visibility__ || {default: $__angular2_47_src_47_core_47_annotations_47_visibility__}),
    Parent = $__5.Parent,
    Ancestor = $__5.Ancestor;
var $__6 = ($__angular2_47_src_47_core_47_annotations_47_di__ = require("angular2/src/core/annotations/di"), $__angular2_47_src_47_core_47_annotations_47_di__ && $__angular2_47_src_47_core_47_annotations_47_di__.__esModule && $__angular2_47_src_47_core_47_annotations_47_di__ || {default: $__angular2_47_src_47_core_47_annotations_47_di__}),
    EventEmitter = $__6.EventEmitter,
    PropertySetter = $__6.PropertySetter;
var onDestroy = ($__angular2_47_src_47_core_47_annotations_47_annotations__ = require("angular2/src/core/annotations/annotations"), $__angular2_47_src_47_core_47_annotations_47_annotations__ && $__angular2_47_src_47_core_47_annotations_47_annotations__.__esModule && $__angular2_47_src_47_core_47_annotations_47_annotations__ || {default: $__angular2_47_src_47_core_47_annotations_47_annotations__}).onDestroy;
var $__8 = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}),
    Optional = $__8.Optional,
    Injector = $__8.Injector,
    Inject = $__8.Inject,
    bind = $__8.bind;
var $__9 = ($__angular2_47_src_47_core_47_compiler_47_view__ = require("angular2/src/core/compiler/view"), $__angular2_47_src_47_core_47_compiler_47_view__ && $__angular2_47_src_47_core_47_compiler_47_view__.__esModule && $__angular2_47_src_47_core_47_compiler_47_view__ || {default: $__angular2_47_src_47_core_47_compiler_47_view__}),
    ProtoView = $__9.ProtoView,
    View = $__9.View;
var ViewContainer = ($__angular2_47_src_47_core_47_compiler_47_view_95_container__ = require("angular2/src/core/compiler/view_container"), $__angular2_47_src_47_core_47_compiler_47_view_95_container__ && $__angular2_47_src_47_core_47_compiler_47_view_95_container__.__esModule && $__angular2_47_src_47_core_47_compiler_47_view_95_container__ || {default: $__angular2_47_src_47_core_47_compiler_47_view_95_container__}).ViewContainer;
var NgElement = ($__angular2_47_src_47_core_47_dom_47_element__ = require("angular2/src/core/dom/element"), $__angular2_47_src_47_core_47_dom_47_element__ && $__angular2_47_src_47_core_47_dom_47_element__.__esModule && $__angular2_47_src_47_core_47_dom_47_element__ || {default: $__angular2_47_src_47_core_47_dom_47_element__}).NgElement;
var $__12 = ($__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_light_95_dom__ = require("angular2/src/core/compiler/shadow_dom_emulation/light_dom"), $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_light_95_dom__ && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_light_95_dom__.__esModule && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_light_95_dom__ || {default: $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_light_95_dom__}),
    LightDom = $__12.LightDom,
    SourceLightDom = $__12.SourceLightDom,
    DestinationLightDom = $__12.DestinationLightDom;
var Directive = ($__angular2_47_src_47_core_47_annotations_47_annotations__ = require("angular2/src/core/annotations/annotations"), $__angular2_47_src_47_core_47_annotations_47_annotations__ && $__angular2_47_src_47_core_47_annotations_47_annotations__.__esModule && $__angular2_47_src_47_core_47_annotations_47_annotations__ || {default: $__angular2_47_src_47_core_47_annotations_47_annotations__}).Directive;
var BindingPropagationConfig = ($__angular2_47_src_47_core_47_compiler_47_binding_95_propagation_95_config__ = require("angular2/src/core/compiler/binding_propagation_config"), $__angular2_47_src_47_core_47_compiler_47_binding_95_propagation_95_config__ && $__angular2_47_src_47_core_47_compiler_47_binding_95_propagation_95_config__.__esModule && $__angular2_47_src_47_core_47_compiler_47_binding_95_propagation_95_config__ || {default: $__angular2_47_src_47_core_47_compiler_47_binding_95_propagation_95_config__}).BindingPropagationConfig;
var reflector = ($__angular2_47_src_47_reflection_47_reflection__ = require("angular2/src/reflection/reflection"), $__angular2_47_src_47_reflection_47_reflection__ && $__angular2_47_src_47_reflection_47_reflection__.__esModule && $__angular2_47_src_47_reflection_47_reflection__ || {default: $__angular2_47_src_47_reflection_47_reflection__}).reflector;
var DynamicProtoChangeDetector = ($__angular2_47_change_95_detection__ = require("angular2/change_detection"), $__angular2_47_change_95_detection__ && $__angular2_47_change_95_detection__.__esModule && $__angular2_47_change_95_detection__ || {default: $__angular2_47_change_95_detection__}).DynamicProtoChangeDetector;
var DummyView = function DummyView() {
  $traceurRuntime.superConstructor($DummyView).apply(this, arguments);
};
var $DummyView = DummyView;
($traceurRuntime.createClass)(DummyView, {noSuchMethod: function(m) {
    $traceurRuntime.superGet(this, $DummyView.prototype, "noSuchMethod").call(this, m);
  }}, {}, SpyObject);
Object.defineProperty(DummyView, "annotations", {get: function() {
    return [new proxy, new IMPLEMENTS(View)];
  }});
var DummyLightDom = function DummyLightDom() {
  $traceurRuntime.superConstructor($DummyLightDom).apply(this, arguments);
};
var $DummyLightDom = DummyLightDom;
($traceurRuntime.createClass)(DummyLightDom, {noSuchMethod: function(m) {
    $traceurRuntime.superGet(this, $DummyLightDom.prototype, "noSuchMethod").call(this, m);
  }}, {}, SpyObject);
Object.defineProperty(DummyLightDom, "annotations", {get: function() {
    return [new proxy, new IMPLEMENTS(LightDom)];
  }});
var SimpleDirective = function SimpleDirective() {};
($traceurRuntime.createClass)(SimpleDirective, {}, {});
var SomeOtherDirective = function SomeOtherDirective() {};
($traceurRuntime.createClass)(SomeOtherDirective, {}, {});
var NeedsDirective = function NeedsDirective(dependency) {
  assert.argumentTypes(dependency, SimpleDirective);
  this.dependency = dependency;
};
($traceurRuntime.createClass)(NeedsDirective, {}, {});
Object.defineProperty(NeedsDirective, "parameters", {get: function() {
    return [[SimpleDirective]];
  }});
var OptionallyNeedsDirective = function OptionallyNeedsDirective(dependency) {
  assert.argumentTypes(dependency, SimpleDirective);
  this.dependency = dependency;
};
($traceurRuntime.createClass)(OptionallyNeedsDirective, {}, {});
Object.defineProperty(OptionallyNeedsDirective, "parameters", {get: function() {
    return [[SimpleDirective, new Optional()]];
  }});
var NeedDirectiveFromParent = function NeedDirectiveFromParent(dependency) {
  assert.argumentTypes(dependency, SimpleDirective);
  this.dependency = dependency;
};
($traceurRuntime.createClass)(NeedDirectiveFromParent, {}, {});
Object.defineProperty(NeedDirectiveFromParent, "parameters", {get: function() {
    return [[SimpleDirective, new Parent()]];
  }});
var NeedDirectiveFromAncestor = function NeedDirectiveFromAncestor(dependency) {
  assert.argumentTypes(dependency, SimpleDirective);
  this.dependency = dependency;
};
($traceurRuntime.createClass)(NeedDirectiveFromAncestor, {}, {});
Object.defineProperty(NeedDirectiveFromAncestor, "parameters", {get: function() {
    return [[SimpleDirective, new Ancestor()]];
  }});
var NeedsService = function NeedsService(service) {
  this.service = service;
};
($traceurRuntime.createClass)(NeedsService, {}, {});
Object.defineProperty(NeedsService, "parameters", {get: function() {
    return [[new Inject("service")]];
  }});
var NeedsEventEmitter = function NeedsEventEmitter(clickEmitter) {
  assert.argumentTypes(clickEmitter, Function);
  this.clickEmitter = clickEmitter;
};
($traceurRuntime.createClass)(NeedsEventEmitter, {click: function() {
    this.clickEmitter(null);
  }}, {});
Object.defineProperty(NeedsEventEmitter, "parameters", {get: function() {
    return [[Function, new EventEmitter('click')]];
  }});
var NeedsPropertySetter = function NeedsPropertySetter(propSetter) {
  assert.argumentTypes(propSetter, Function);
  this.propSetter = propSetter;
};
($traceurRuntime.createClass)(NeedsPropertySetter, {setProp: function(value) {
    this.propSetter(value);
  }}, {});
Object.defineProperty(NeedsPropertySetter, "parameters", {get: function() {
    return [[Function, new PropertySetter('title')]];
  }});
var A_Needs_B = function A_Needs_B(dep) {};
($traceurRuntime.createClass)(A_Needs_B, {}, {});
var B_Needs_A = function B_Needs_A(dep) {};
($traceurRuntime.createClass)(B_Needs_A, {}, {});
var NeedsView = function NeedsView(view) {
  this.view = view;
};
($traceurRuntime.createClass)(NeedsView, {}, {});
Object.defineProperty(NeedsView, "parameters", {get: function() {
    return [[new Inject(View)]];
  }});
var DirectiveWithDestroy = function DirectiveWithDestroy() {
  this.onDestroyCounter = 0;
};
($traceurRuntime.createClass)(DirectiveWithDestroy, {onDestroy: function() {
    this.onDestroyCounter++;
  }}, {});
function main() {
  var defaultPreBuiltObjects = new PreBuiltObjects(null, null, null, null, null);
  function humanize(tree, names) {
    var lookupName = (function(item) {
      return ListWrapper.last(ListWrapper.find(names, (function(pair) {
        return pair[0] === item;
      })));
    });
    if (tree.children.length == 0)
      return lookupName(tree);
    var children = tree.children.map((function(m) {
      return humanize(m, names);
    }));
    return [lookupName(tree), children];
  }
  Object.defineProperty(humanize, "parameters", {get: function() {
      return [[], [List]];
    }});
  function injector(bindings) {
    var lightDomAppInjector = arguments[1] !== (void 0) ? arguments[1] : null;
    var shadowDomAppInjector = arguments[2] !== (void 0) ? arguments[2] : null;
    var preBuiltObjects = arguments[3] !== (void 0) ? arguments[3] : null;
    if (isBlank(lightDomAppInjector))
      lightDomAppInjector = new Injector([]);
    var proto = new ProtoElementInjector(null, 0, bindings, isPresent(shadowDomAppInjector));
    var inj = proto.instantiate(null, null, reflector);
    var preBuilt = isPresent(preBuiltObjects) ? preBuiltObjects : defaultPreBuiltObjects;
    inj.instantiateDirectives(lightDomAppInjector, shadowDomAppInjector, preBuilt);
    return inj;
  }
  function parentChildInjectors(parentBindings, childBindings) {
    var parentPreBuildObjects = arguments[2] !== (void 0) ? arguments[2] : null;
    if (isBlank(parentPreBuildObjects))
      parentPreBuildObjects = defaultPreBuiltObjects;
    var inj = new Injector([]);
    var protoParent = new ProtoElementInjector(null, 0, parentBindings);
    var parent = protoParent.instantiate(null, null, reflector);
    parent.instantiateDirectives(inj, null, parentPreBuildObjects);
    var protoChild = new ProtoElementInjector(protoParent, 1, childBindings, false, 1);
    var child = protoChild.instantiate(parent, null, reflector);
    child.instantiateDirectives(inj, null, defaultPreBuiltObjects);
    return child;
  }
  function hostShadowInjectors(hostBindings, shadowBindings) {
    var hostPreBuildObjects = arguments[2] !== (void 0) ? arguments[2] : null;
    if (isBlank(hostPreBuildObjects))
      hostPreBuildObjects = defaultPreBuiltObjects;
    var inj = new Injector([]);
    var shadowInj = inj.createChild([]);
    var protoParent = new ProtoElementInjector(null, 0, hostBindings, true);
    var host = protoParent.instantiate(null, null, reflector);
    host.instantiateDirectives(inj, shadowInj, hostPreBuildObjects);
    var protoChild = new ProtoElementInjector(protoParent, 0, shadowBindings, false, 1);
    var shadow = protoChild.instantiate(null, host, reflector);
    shadow.instantiateDirectives(shadowInj, null, null);
    return shadow;
  }
  describe("ProtoElementInjector", (function() {
    describe("direct parent", (function() {
      it("should return parent proto injector when distance is 1", (function() {
        var distance = 1;
        var protoParent = new ProtoElementInjector(null, 0, []);
        var protoChild = new ProtoElementInjector(protoParent, 1, [], false, distance);
        expect(protoChild.directParent()).toEqual(protoParent);
      }));
      it("should return null otherwise", (function() {
        var distance = 2;
        var protoParent = new ProtoElementInjector(null, 0, []);
        var protoChild = new ProtoElementInjector(protoParent, 1, [], false, distance);
        expect(protoChild.directParent()).toEqual(null);
      }));
    }));
  }));
  describe("ElementInjector", function() {
    describe("instantiate", function() {
      it("should create an element injector", function() {
        var protoParent = new ProtoElementInjector(null, 0, []);
        var protoChild1 = new ProtoElementInjector(protoParent, 1, []);
        var protoChild2 = new ProtoElementInjector(protoParent, 2, []);
        var p = protoParent.instantiate(null, null, reflector);
        var c1 = protoChild1.instantiate(p, null, reflector);
        var c2 = protoChild2.instantiate(p, null, reflector);
        expect(humanize(p, [[p, 'parent'], [c1, 'child1'], [c2, 'child2']])).toEqual(["parent", ["child1", "child2"]]);
      });
      describe("direct parent", (function() {
        it("should return parent injector when distance is 1", (function() {
          var distance = 1;
          var protoParent = new ProtoElementInjector(null, 0, []);
          var protoChild = new ProtoElementInjector(protoParent, 1, [], false, distance);
          var p = protoParent.instantiate(null, null, reflector);
          var c = protoChild.instantiate(p, null, reflector);
          expect(c.directParent()).toEqual(p);
        }));
        it("should return null otherwise", (function() {
          var distance = 2;
          var protoParent = new ProtoElementInjector(null, 0, []);
          var protoChild = new ProtoElementInjector(protoParent, 1, [], false, distance);
          var p = protoParent.instantiate(null, null, reflector);
          var c = protoChild.instantiate(p, null, reflector);
          expect(c.directParent()).toEqual(null);
        }));
      }));
    });
    describe("hasBindings", function() {
      it("should be true when there are bindings", function() {
        var p = new ProtoElementInjector(null, 0, [SimpleDirective]);
        expect(p.hasBindings).toBeTruthy();
      });
      it("should be false otherwise", function() {
        var p = new ProtoElementInjector(null, 0, []);
        expect(p.hasBindings).toBeFalsy();
      });
    });
    describe("hasInstances", function() {
      it("should be false when no directives are instantiated", function() {
        expect(injector([]).hasInstances()).toBe(false);
      });
      it("should be true when directives are instantiated", function() {
        expect(injector([SimpleDirective]).hasInstances()).toBe(true);
      });
    });
    describe("instantiateDirectives", function() {
      it("should instantiate directives that have no dependencies", function() {
        var inj = injector([SimpleDirective]);
        expect(inj.get(SimpleDirective)).toBeAnInstanceOf(SimpleDirective);
      });
      it("should instantiate directives that depend on other directives", function() {
        var inj = injector([SimpleDirective, NeedsDirective]);
        var d = inj.get(NeedsDirective);
        expect(d).toBeAnInstanceOf(NeedsDirective);
        expect(d.dependency).toBeAnInstanceOf(SimpleDirective);
      });
      it("should instantiate directives that depend on app services", function() {
        var appInjector = new Injector([bind("service").toValue("service")]);
        var inj = injector([NeedsService], appInjector);
        var d = inj.get(NeedsService);
        expect(d).toBeAnInstanceOf(NeedsService);
        expect(d.service).toEqual("service");
      });
      it("should instantiate directives that depend on pre built objects", function() {
        var view = new DummyView();
        var inj = injector([NeedsView], null, null, new PreBuiltObjects(view, null, null, null, null));
        expect(inj.get(NeedsView).view).toBe(view);
      });
      it("should instantiate directives that depend on the containing component", function() {
        var shadow = hostShadowInjectors([SimpleDirective], [NeedsDirective]);
        var d = shadow.get(NeedsDirective);
        expect(d).toBeAnInstanceOf(NeedsDirective);
        expect(d.dependency).toBeAnInstanceOf(SimpleDirective);
      });
      it("should not instantiate directives that depend on other directives in the containing component's ElementInjector", (function() {
        expect((function() {
          hostShadowInjectors([SomeOtherDirective, SimpleDirective], [NeedsDirective]);
        })).toThrowError('No provider for SimpleDirective! (NeedsDirective -> SimpleDirective)');
      }));
      it("should instantiate component directives that depend on app services in the shadow app injector", (function() {
        var shadowAppInjector = new Injector([bind("service").toValue("service")]);
        var inj = injector([NeedsService], null, shadowAppInjector);
        var d = inj.get(NeedsService);
        expect(d).toBeAnInstanceOf(NeedsService);
        expect(d.service).toEqual("service");
      }));
      it("should not instantiate other directives that depend on app services in the shadow app injector", (function() {
        var shadowAppInjector = new Injector([bind("service").toValue("service")]);
        expect((function() {
          injector([SomeOtherDirective, NeedsService], null, shadowAppInjector);
        })).toThrowError('No provider for service! (NeedsService -> service)');
      }));
      it("should return app services", function() {
        var appInjector = new Injector([bind("service").toValue("service")]);
        var inj = injector([], appInjector);
        expect(inj.get('service')).toEqual('service');
      });
      it("should get directives from parent", function() {
        var child = parentChildInjectors([SimpleDirective], [NeedDirectiveFromParent]);
        var d = child.get(NeedDirectiveFromParent);
        expect(d).toBeAnInstanceOf(NeedDirectiveFromParent);
        expect(d.dependency).toBeAnInstanceOf(SimpleDirective);
      });
      it("should not return parent's directives on self", function() {
        expect((function() {
          injector([SimpleDirective, NeedDirectiveFromParent]);
        })).toThrowError();
      });
      it("should get directives from ancestor", function() {
        var child = parentChildInjectors([SimpleDirective], [NeedDirectiveFromAncestor]);
        var d = child.get(NeedDirectiveFromAncestor);
        expect(d).toBeAnInstanceOf(NeedDirectiveFromAncestor);
        expect(d.dependency).toBeAnInstanceOf(SimpleDirective);
      });
      it("should throw when no SimpleDirective found", function() {
        expect((function() {
          return injector([NeedDirectiveFromParent]);
        })).toThrowError('No provider for SimpleDirective! (NeedDirectiveFromParent -> SimpleDirective)');
      });
      it("should inject null when no directive found", function() {
        var inj = injector([OptionallyNeedsDirective]);
        var d = inj.get(OptionallyNeedsDirective);
        expect(d.dependency).toEqual(null);
      });
      it("should accept SimpleDirective bindings instead of SimpleDirective types", function() {
        var inj = injector([DirectiveBinding.createFromBinding(bind(SimpleDirective).toClass(SimpleDirective), null)]);
        expect(inj.get(SimpleDirective)).toBeAnInstanceOf(SimpleDirective);
      });
      it("should allow for direct access using getDirectiveAtIndex", function() {
        var inj = injector([DirectiveBinding.createFromBinding(bind(SimpleDirective).toClass(SimpleDirective), null)]);
        expect(inj.getDirectiveAtIndex(0)).toBeAnInstanceOf(SimpleDirective);
        expect((function() {
          return inj.getDirectiveAtIndex(-1);
        })).toThrowError('Index -1 is out-of-bounds.');
        expect((function() {
          return inj.getDirectiveAtIndex(10);
        })).toThrowError('Index 10 is out-of-bounds.');
      });
      it("should allow for direct access using getBindingAtIndex", function() {
        var inj = injector([DirectiveBinding.createFromBinding(bind(SimpleDirective).toClass(SimpleDirective), null)]);
        expect(inj.getDirectiveBindingAtIndex(0)).toBeAnInstanceOf(DirectiveBinding);
        expect((function() {
          return inj.getDirectiveBindingAtIndex(-1);
        })).toThrowError('Index -1 is out-of-bounds.');
        expect((function() {
          return inj.getDirectiveBindingAtIndex(10);
        })).toThrowError('Index 10 is out-of-bounds.');
      });
      it("should handle cyclic dependencies", function() {
        expect((function() {
          var bAneedsB = bind(A_Needs_B).toFactory((function(a) {
            return new A_Needs_B(a);
          }), [B_Needs_A]);
          var bBneedsA = bind(B_Needs_A).toFactory((function(a) {
            return new B_Needs_A(a);
          }), [A_Needs_B]);
          injector([DirectiveBinding.createFromBinding(bAneedsB, null), DirectiveBinding.createFromBinding(bBneedsA, null)]);
        })).toThrowError('Cannot instantiate cyclic dependency! ' + '(A_Needs_B -> B_Needs_A -> A_Needs_B)');
      });
      it("should call onDestroy on directives subscribed to this event", function() {
        var inj = injector([DirectiveBinding.createFromType(DirectiveWithDestroy, new Directive({lifecycle: [onDestroy]}))]);
        var destroy = inj.get(DirectiveWithDestroy);
        inj.clearDirectives();
        expect(destroy.onDestroyCounter).toBe(1);
      });
    });
    describe("pre built objects", function() {
      it("should return view", function() {
        var view = new DummyView();
        var inj = injector([], null, null, new PreBuiltObjects(view, null, null, null, null));
        expect(inj.get(View)).toEqual(view);
      });
      it("should return element", function() {
        var element = new NgElement(null);
        var inj = injector([], null, null, new PreBuiltObjects(null, element, null, null, null));
        expect(inj.get(NgElement)).toEqual(element);
      });
      it('should return viewContainer', function() {
        var viewContainer = new ViewContainer(null, null, null, null, null, null);
        var inj = injector([], null, null, new PreBuiltObjects(null, null, viewContainer, null, null));
        expect(inj.get(ViewContainer)).toEqual(viewContainer);
      });
      it('should return bindingPropagationConfig', function() {
        var config = new BindingPropagationConfig(null);
        var inj = injector([], null, null, new PreBuiltObjects(null, null, null, null, config));
        expect(inj.get(BindingPropagationConfig)).toEqual(config);
      });
      describe("light DOM", (function() {
        var lightDom,
            parentPreBuiltObjects;
        beforeEach((function() {
          lightDom = new DummyLightDom();
          parentPreBuiltObjects = new PreBuiltObjects(null, null, null, lightDom, null);
        }));
        it("should return destination light DOM from the parent's injector", function() {
          var child = parentChildInjectors([], [], parentPreBuiltObjects);
          expect(child.get(DestinationLightDom)).toEqual(lightDom);
        });
        it("should return null when parent's injector is a component boundary", function() {
          var child = hostShadowInjectors([], [], parentPreBuiltObjects);
          expect(child.get(DestinationLightDom)).toBeNull();
        });
        it("should return source light DOM from the closest component boundary", function() {
          var child = hostShadowInjectors([], [], parentPreBuiltObjects);
          expect(child.get(SourceLightDom)).toEqual(lightDom);
        });
      }));
    });
    describe('event emitters', (function() {
      it('should be injectable and callable', (function() {
        var called = false;
        var handlers = StringMapWrapper.create();
        StringMapWrapper.set(handlers, 'click', (function(e, view) {
          called = true;
        }));
        var pv = new ProtoView(null, null, null);
        pv.eventHandlers = [handlers];
        var view = new View(pv, null, new DynamicProtoChangeDetector(null), MapWrapper.create());
        var preBuildObject = new PreBuiltObjects(view, null, null, null, null);
        var inj = injector([NeedsEventEmitter], null, null, preBuildObject);
        inj.get(NeedsEventEmitter).click();
        expect(called).toEqual(true);
      }));
      it('should be queryable through hasEventEmitter', (function() {
        var inj = injector([NeedsEventEmitter]);
        expect(inj.hasEventEmitter('click')).toBe(true);
        expect(inj.hasEventEmitter('move')).toBe(false);
      }));
    }));
    describe('property setter', (function() {
      it('should be injectable and callable', (function() {
        var div = el('<div></div>');
        var ngElement = new NgElement(div);
        var preBuildObject = new PreBuiltObjects(null, ngElement, null, null, null);
        var inj = injector([NeedsPropertySetter], null, null, preBuildObject);
        inj.get(NeedsPropertySetter).setProp('foobar');
        expect(div.title).toEqual('foobar');
      }));
    }));
  });
}

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/test/core/compiler/element_injector_spec.map

//# sourceMappingURL=./element_injector_spec.map
 main();