var parse5Adapter = require('angular2/src/dom/parse5_adapter');
parse5Adapter.Parse5DomAdapter.makeCurrent();
"use strict";
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/test/core/compiler/view_container_spec";
var $__angular2_47_test_95_lib__,
    $__angular2_47_src_47_core_47_compiler_47_view__,
    $__angular2_47_src_47_core_47_compiler_47_view_95_container__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_dom_47_dom_95_adapter__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_di__,
    $__angular2_47_src_47_core_47_compiler_47_element_95_injector__,
    $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__,
    $__angular2_47_change_95_detection__,
    $__angular2_47_src_47_reflection_47_reflection__;
var $__0 = ($__angular2_47_test_95_lib__ = require("angular2/test_lib"), $__angular2_47_test_95_lib__ && $__angular2_47_test_95_lib__.__esModule && $__angular2_47_test_95_lib__ || {default: $__angular2_47_test_95_lib__}),
    describe = $__0.describe,
    xit = $__0.xit,
    it = $__0.it,
    expect = $__0.expect,
    beforeEach = $__0.beforeEach,
    ddescribe = $__0.ddescribe,
    iit = $__0.iit,
    el = $__0.el,
    proxy = $__0.proxy;
var $__1 = ($__angular2_47_src_47_core_47_compiler_47_view__ = require("angular2/src/core/compiler/view"), $__angular2_47_src_47_core_47_compiler_47_view__ && $__angular2_47_src_47_core_47_compiler_47_view__.__esModule && $__angular2_47_src_47_core_47_compiler_47_view__ || {default: $__angular2_47_src_47_core_47_compiler_47_view__}),
    View = $__1.View,
    ProtoView = $__1.ProtoView;
var ViewContainer = ($__angular2_47_src_47_core_47_compiler_47_view_95_container__ = require("angular2/src/core/compiler/view_container"), $__angular2_47_src_47_core_47_compiler_47_view_95_container__ && $__angular2_47_src_47_core_47_compiler_47_view_95_container__.__esModule && $__angular2_47_src_47_core_47_compiler_47_view_95_container__ || {default: $__angular2_47_src_47_core_47_compiler_47_view_95_container__}).ViewContainer;
var IMPLEMENTS = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).IMPLEMENTS;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var $__5 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    ListWrapper = $__5.ListWrapper,
    MapWrapper = $__5.MapWrapper;
var Injector = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}).Injector;
var $__7 = ($__angular2_47_src_47_core_47_compiler_47_element_95_injector__ = require("angular2/src/core/compiler/element_injector"), $__angular2_47_src_47_core_47_compiler_47_element_95_injector__ && $__angular2_47_src_47_core_47_compiler_47_element_95_injector__.__esModule && $__angular2_47_src_47_core_47_compiler_47_element_95_injector__ || {default: $__angular2_47_src_47_core_47_compiler_47_element_95_injector__}),
    ProtoElementInjector = $__7.ProtoElementInjector,
    ElementInjector = $__7.ElementInjector;
var NativeShadowDomStrategy = ($__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__ = require("angular2/src/core/compiler/shadow_dom_strategy"), $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__ && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__.__esModule && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__ || {default: $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__}).NativeShadowDomStrategy;
var $__9 = ($__angular2_47_change_95_detection__ = require("angular2/change_detection"), $__angular2_47_change_95_detection__ && $__angular2_47_change_95_detection__.__esModule && $__angular2_47_change_95_detection__ || {default: $__angular2_47_change_95_detection__}),
    DynamicProtoChangeDetector = $__9.DynamicProtoChangeDetector,
    ChangeDetector = $__9.ChangeDetector,
    Lexer = $__9.Lexer,
    Parser = $__9.Parser;
var reflector = ($__angular2_47_src_47_reflection_47_reflection__ = require("angular2/src/reflection/reflection"), $__angular2_47_src_47_reflection_47_reflection__ && $__angular2_47_src_47_reflection_47_reflection__.__esModule && $__angular2_47_src_47_reflection_47_reflection__ || {default: $__angular2_47_src_47_reflection_47_reflection__}).reflector;
function createView(nodes) {
  var view = new View(null, nodes, new DynamicProtoChangeDetector(null), MapWrapper.create());
  view.init([], [], [], [], [], [], []);
  return view;
}
var AttachableChangeDetector = function AttachableChangeDetector() {};
var $AttachableChangeDetector = AttachableChangeDetector;
($traceurRuntime.createClass)(AttachableChangeDetector, {
  remove: function() {
    this.parent = null;
  },
  noSuchMethod: function(i) {
    $traceurRuntime.superGet(this, $AttachableChangeDetector.prototype, "noSuchMethod").call(this, i);
  }
}, {});
Object.defineProperty(AttachableChangeDetector, "annotations", {get: function() {
    return [new proxy, new IMPLEMENTS(ChangeDetector)];
  }});
var HydrateAwareFakeView = function HydrateAwareFakeView(isHydrated) {
  this.isHydrated = isHydrated;
  this.nodes = [DOM.createElement('div')];
  this.rootElementInjectors = [];
  this.changeDetector = new AttachableChangeDetector();
};
var $HydrateAwareFakeView = HydrateAwareFakeView;
($traceurRuntime.createClass)(HydrateAwareFakeView, {
  hydrated: function() {
    return this.isHydrated;
  },
  hydrate: function(_, __, ___) {
    this.isHydrated = true;
  },
  dehydrate: function() {
    this.isHydrated = false;
  },
  noSuchMethod: function(i) {
    $traceurRuntime.superGet(this, $HydrateAwareFakeView.prototype, "noSuchMethod").call(this, i);
  }
}, {});
Object.defineProperty(HydrateAwareFakeView, "annotations", {get: function() {
    return [new proxy, new IMPLEMENTS(View)];
  }});
function main() {
  describe('ViewContainer', (function() {
    var viewContainer,
        parentView,
        protoView,
        dom,
        customViewWithOneNode,
        customViewWithTwoNodes,
        elementInjector;
    beforeEach((function() {
      dom = el("<div><stuff></stuff><div insert-after-me></div><stuff></stuff></div>");
      var insertionElement = dom.childNodes[1];
      parentView = createView([dom.childNodes[0]]);
      protoView = new ProtoView(el('<div>hi</div>'), new DynamicProtoChangeDetector(null), new NativeShadowDomStrategy(null));
      elementInjector = new ElementInjector(null, null, null, reflector);
      viewContainer = new ViewContainer(parentView, insertionElement, protoView, elementInjector, null, reflector);
      customViewWithOneNode = createView([el('<div>single</div>')]);
      customViewWithTwoNodes = createView([el('<div>one</div>'), el('<div>two</div>')]);
    }));
    describe('when dehydrated', (function() {
      it('should throw if create is called', (function() {
        expect((function() {
          return viewContainer.create();
        })).toThrowError();
      }));
    }));
    describe('when hydrated', (function() {
      function textInViewContainer() {
        var out = '';
        for (var i = 2; i < dom.childNodes.length - 1; i++) {
          if (i != 2)
            out += ' ';
          out += DOM.getInnerHTML(dom.childNodes[i]);
        }
        return out;
      }
      beforeEach((function() {
        viewContainer.hydrate(new Injector([]), null);
        var fillerView = createView([el('<filler>filler</filler>')]);
        viewContainer.insert(fillerView);
      }));
      it('should create new views from protoView', (function() {
        viewContainer.create();
        expect(textInViewContainer()).toEqual('filler hi');
        expect(viewContainer.length).toBe(2);
      }));
      it('should create new views from protoView at index', (function() {
        viewContainer.create(0);
        expect(textInViewContainer()).toEqual('hi filler');
        expect(viewContainer.length).toBe(2);
      }));
      it('should insert new views at the end by default', (function() {
        viewContainer.insert(customViewWithOneNode);
        expect(textInViewContainer()).toEqual('filler single');
        expect(viewContainer.get(1)).toBe(customViewWithOneNode);
        expect(viewContainer.length).toBe(2);
      }));
      it('should insert new views at the given index', (function() {
        viewContainer.insert(customViewWithOneNode, 0);
        expect(textInViewContainer()).toEqual('single filler');
        expect(viewContainer.get(0)).toBe(customViewWithOneNode);
        expect(viewContainer.length).toBe(2);
      }));
      it('should remove the last view by default', (function() {
        viewContainer.insert(customViewWithOneNode);
        viewContainer.remove();
        expect(textInViewContainer()).toEqual('filler');
        expect(viewContainer.length).toBe(1);
      }));
      it('should remove the view at a given index', (function() {
        viewContainer.insert(customViewWithOneNode);
        viewContainer.insert(customViewWithTwoNodes);
        viewContainer.remove(1);
        expect(textInViewContainer()).toEqual('filler one two');
        expect(viewContainer.get(1)).toBe(customViewWithTwoNodes);
        expect(viewContainer.length).toBe(2);
      }));
      it('should detach the last view by default', (function() {
        viewContainer.insert(customViewWithOneNode);
        expect(viewContainer.length).toBe(2);
        var detachedView = viewContainer.detach();
        expect(detachedView).toBe(customViewWithOneNode);
        expect(textInViewContainer()).toEqual('filler');
        expect(viewContainer.length).toBe(1);
      }));
      it('should detach the view at a given index', (function() {
        viewContainer.insert(customViewWithOneNode);
        viewContainer.insert(customViewWithTwoNodes);
        expect(viewContainer.length).toBe(3);
        var detachedView = viewContainer.detach(1);
        expect(detachedView).toBe(customViewWithOneNode);
        expect(textInViewContainer()).toEqual('filler one two');
        expect(viewContainer.length).toBe(2);
      }));
      it('should keep views hydration state during insert', (function() {
        var hydratedView = new HydrateAwareFakeView(true);
        var dehydratedView = new HydrateAwareFakeView(false);
        viewContainer.insert(hydratedView);
        viewContainer.insert(dehydratedView);
        expect(hydratedView.hydrated()).toBe(true);
        expect(dehydratedView.hydrated()).toBe(false);
      }));
      it('should dehydrate on remove', (function() {
        var hydratedView = new HydrateAwareFakeView(true);
        viewContainer.insert(hydratedView);
        viewContainer.remove();
        expect(hydratedView.hydrated()).toBe(false);
      }));
      it('should keep views hydration state during detach', (function() {
        var hydratedView = new HydrateAwareFakeView(true);
        var dehydratedView = new HydrateAwareFakeView(false);
        viewContainer.insert(hydratedView);
        viewContainer.insert(dehydratedView);
        expect(viewContainer.detach().hydrated()).toBe(false);
        expect(viewContainer.detach().hydrated()).toBe(true);
      }));
      it('should support adding/removing views with more than one node', (function() {
        viewContainer.insert(customViewWithTwoNodes);
        viewContainer.insert(customViewWithOneNode);
        expect(textInViewContainer()).toEqual('filler one two single');
        viewContainer.remove(1);
        expect(textInViewContainer()).toEqual('filler single');
      }));
    }));
    describe('should update injectors and parent views.', (function() {
      var fancyView;
      beforeEach((function() {
        var parser = new Parser(new Lexer());
        viewContainer.hydrate(new Injector([]), null);
        var pv = new ProtoView(el('<div class="ng-binding">{{}}</div>'), new DynamicProtoChangeDetector(null), new NativeShadowDomStrategy(null));
        pv.bindElement(new ProtoElementInjector(null, 1, [SomeDirective]));
        pv.bindTextNode(0, parser.parseBinding('foo', null));
        fancyView = pv.instantiate(null, null, reflector);
      }));
      it('hydrating should update rootElementInjectors and parent change detector', (function() {
        viewContainer.insert(fancyView);
        ListWrapper.forEach(fancyView.rootElementInjectors, (function(inj) {
          return expect(inj.parent).toBe(elementInjector);
        }));
        expect(parentView.changeDetector.children.length).toBe(1);
      }));
      it('dehydrating should update rootElementInjectors and parent change detector', (function() {
        viewContainer.insert(fancyView);
        viewContainer.remove();
        ListWrapper.forEach(fancyView.rootElementInjectors, (function(inj) {
          return expect(inj.parent).toBe(null);
        }));
        expect(parentView.changeDetector.children.length).toBe(0);
        expect(viewContainer.length).toBe(0);
      }));
    }));
  }));
}
var SomeDirective = function SomeDirective() {
  this.prop = 'foo';
};
($traceurRuntime.createClass)(SomeDirective, {}, {});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/test/core/compiler/view_container_spec.map

//# sourceMappingURL=./view_container_spec.map
 main();