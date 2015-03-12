var parse5Adapter = require('angular2/src/dom/parse5_adapter');
parse5Adapter.Parse5DomAdapter.makeCurrent();
"use strict";
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/test/core/compiler/view_spec";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_test_95_lib__,
    $__angular2_47_src_47_core_47_compiler_47_view__,
    $__angular2_47_src_47_core_47_compiler_47_element_95_injector__,
    $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__,
    $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__,
    $__angular2_47_src_47_core_47_annotations_47_annotations__,
    $__angular2_47_change_95_detection__,
    $__angular2_47_src_47_core_47_annotations_47_di__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_dom_47_dom_95_adapter__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_di__,
    $__angular2_47_src_47_core_47_compiler_47_view__,
    $__angular2_47_src_47_core_47_compiler_47_view_95_container__,
    $__angular2_47_src_47_core_47_zone_47_vm_95_turn_95_zone__,
    $__angular2_47_src_47_core_47_events_47_event_95_manager__,
    $__angular2_47_src_47_reflection_47_reflection__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var $__1 = ($__angular2_47_test_95_lib__ = require("angular2/test_lib"), $__angular2_47_test_95_lib__ && $__angular2_47_test_95_lib__.__esModule && $__angular2_47_test_95_lib__ || {default: $__angular2_47_test_95_lib__}),
    describe = $__1.describe,
    xit = $__1.xit,
    it = $__1.it,
    expect = $__1.expect,
    beforeEach = $__1.beforeEach,
    ddescribe = $__1.ddescribe,
    iit = $__1.iit,
    el = $__1.el,
    proxy = $__1.proxy,
    IS_NODEJS = $__1.IS_NODEJS;
var $__2 = ($__angular2_47_src_47_core_47_compiler_47_view__ = require("angular2/src/core/compiler/view"), $__angular2_47_src_47_core_47_compiler_47_view__ && $__angular2_47_src_47_core_47_compiler_47_view__.__esModule && $__angular2_47_src_47_core_47_compiler_47_view__ || {default: $__angular2_47_src_47_core_47_compiler_47_view__}),
    ProtoView = $__2.ProtoView,
    ElementPropertyMemento = $__2.ElementPropertyMemento,
    DirectivePropertyMemento = $__2.DirectivePropertyMemento;
var $__3 = ($__angular2_47_src_47_core_47_compiler_47_element_95_injector__ = require("angular2/src/core/compiler/element_injector"), $__angular2_47_src_47_core_47_compiler_47_element_95_injector__ && $__angular2_47_src_47_core_47_compiler_47_element_95_injector__.__esModule && $__angular2_47_src_47_core_47_compiler_47_element_95_injector__ || {default: $__angular2_47_src_47_core_47_compiler_47_element_95_injector__}),
    ProtoElementInjector = $__3.ProtoElementInjector,
    ElementInjector = $__3.ElementInjector,
    DirectiveBinding = $__3.DirectiveBinding;
var $__4 = ($__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__ = require("angular2/src/core/compiler/shadow_dom_strategy"), $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__ && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__.__esModule && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__ || {default: $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__}),
    EmulatedScopedShadowDomStrategy = $__4.EmulatedScopedShadowDomStrategy,
    NativeShadowDomStrategy = $__4.NativeShadowDomStrategy;
var DirectiveMetadataReader = ($__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__ = require("angular2/src/core/compiler/directive_metadata_reader"), $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__ && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__.__esModule && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__ || {default: $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__}).DirectiveMetadataReader;
var $__6 = ($__angular2_47_src_47_core_47_annotations_47_annotations__ = require("angular2/src/core/annotations/annotations"), $__angular2_47_src_47_core_47_annotations_47_annotations__ && $__angular2_47_src_47_core_47_annotations_47_annotations__.__esModule && $__angular2_47_src_47_core_47_annotations_47_annotations__ || {default: $__angular2_47_src_47_core_47_annotations_47_annotations__}),
    Component = $__6.Component,
    Decorator = $__6.Decorator,
    Viewport = $__6.Viewport,
    Directive = $__6.Directive,
    onChange = $__6.onChange;
var $__7 = ($__angular2_47_change_95_detection__ = require("angular2/change_detection"), $__angular2_47_change_95_detection__ && $__angular2_47_change_95_detection__.__esModule && $__angular2_47_change_95_detection__ || {default: $__angular2_47_change_95_detection__}),
    Lexer = $__7.Lexer,
    Parser = $__7.Parser,
    DynamicProtoChangeDetector = $__7.DynamicProtoChangeDetector,
    ChangeDetector = $__7.ChangeDetector;
var EventEmitter = ($__angular2_47_src_47_core_47_annotations_47_di__ = require("angular2/src/core/annotations/di"), $__angular2_47_src_47_core_47_annotations_47_di__ && $__angular2_47_src_47_core_47_annotations_47_di__.__esModule && $__angular2_47_src_47_core_47_annotations_47_di__ || {default: $__angular2_47_src_47_core_47_annotations_47_di__}).EventEmitter;
var $__9 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    List = $__9.List,
    MapWrapper = $__9.MapWrapper;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var $__11 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    int = $__11.int,
    IMPLEMENTS = $__11.IMPLEMENTS;
var Injector = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}).Injector;
var View = ($__angular2_47_src_47_core_47_compiler_47_view__ = require("angular2/src/core/compiler/view"), $__angular2_47_src_47_core_47_compiler_47_view__ && $__angular2_47_src_47_core_47_compiler_47_view__.__esModule && $__angular2_47_src_47_core_47_compiler_47_view__ || {default: $__angular2_47_src_47_core_47_compiler_47_view__}).View;
var ViewContainer = ($__angular2_47_src_47_core_47_compiler_47_view_95_container__ = require("angular2/src/core/compiler/view_container"), $__angular2_47_src_47_core_47_compiler_47_view_95_container__ && $__angular2_47_src_47_core_47_compiler_47_view_95_container__.__esModule && $__angular2_47_src_47_core_47_compiler_47_view_95_container__ || {default: $__angular2_47_src_47_core_47_compiler_47_view_95_container__}).ViewContainer;
var VmTurnZone = ($__angular2_47_src_47_core_47_zone_47_vm_95_turn_95_zone__ = require("angular2/src/core/zone/vm_turn_zone"), $__angular2_47_src_47_core_47_zone_47_vm_95_turn_95_zone__ && $__angular2_47_src_47_core_47_zone_47_vm_95_turn_95_zone__.__esModule && $__angular2_47_src_47_core_47_zone_47_vm_95_turn_95_zone__ || {default: $__angular2_47_src_47_core_47_zone_47_vm_95_turn_95_zone__}).VmTurnZone;
var $__16 = ($__angular2_47_src_47_core_47_events_47_event_95_manager__ = require("angular2/src/core/events/event_manager"), $__angular2_47_src_47_core_47_events_47_event_95_manager__ && $__angular2_47_src_47_core_47_events_47_event_95_manager__.__esModule && $__angular2_47_src_47_core_47_events_47_event_95_manager__ || {default: $__angular2_47_src_47_core_47_events_47_event_95_manager__}),
    EventManager = $__16.EventManager,
    DomEventsPlugin = $__16.DomEventsPlugin;
var $__17 = ($__angular2_47_src_47_reflection_47_reflection__ = require("angular2/src/reflection/reflection"), $__angular2_47_src_47_reflection_47_reflection__ && $__angular2_47_src_47_reflection_47_reflection__.__esModule && $__angular2_47_src_47_reflection_47_reflection__ || {default: $__angular2_47_src_47_reflection_47_reflection__}),
    Reflector = $__17.Reflector,
    reflector = $__17.reflector;
var FakeViewContainer = function FakeViewContainer(templateElement) {
  this.templateElement = templateElement;
};
var $FakeViewContainer = FakeViewContainer;
($traceurRuntime.createClass)(FakeViewContainer, {noSuchMethod: function(i) {
    $traceurRuntime.superGet(this, $FakeViewContainer.prototype, "noSuchMethod").call(this, i);
  }}, {});
Object.defineProperty(FakeViewContainer, "annotations", {get: function() {
    return [new proxy, new IMPLEMENTS(ViewContainer)];
  }});
var FakeView = function FakeView() {};
var $FakeView = FakeView;
($traceurRuntime.createClass)(FakeView, {noSuchMethod: function(i) {
    $traceurRuntime.superGet(this, $FakeView.prototype, "noSuchMethod").call(this, i);
  }}, {});
Object.defineProperty(FakeView, "annotations", {get: function() {
    return [new proxy, new IMPLEMENTS(View)];
  }});
function main() {
  describe('view', function() {
    var parser,
        someComponentDirective,
        someViewportDirective;
    function createView(protoView) {
      var eventManager = arguments[1] !== (void 0) ? arguments[1] : null;
      assert.argumentTypes(protoView, assert.type.any, eventManager, EventManager);
      var ctx = new MyEvaluationContext();
      var view = protoView.instantiate(null, eventManager, reflector);
      view.hydrate(null, null, ctx);
      return view;
    }
    Object.defineProperty(createView, "parameters", {get: function() {
        return [[], [EventManager]];
      }});
    beforeEach((function() {
      parser = new Parser(new Lexer());
      someComponentDirective = new DirectiveMetadataReader().read(SomeComponent);
      someViewportDirective = new DirectiveMetadataReader().read(SomeViewport);
    }));
    describe('instantiated from protoView', (function() {
      var view;
      beforeEach((function() {
        var pv = new ProtoView(el('<div id="1"></div>'), new DynamicProtoChangeDetector(null), null);
        view = pv.instantiate(null, null, reflector);
      }));
      it('should be dehydrated by default', (function() {
        expect(view.hydrated()).toBe(false);
      }));
      it('should be able to be hydrated and dehydrated', (function() {
        var ctx = new Object();
        view.hydrate(null, null, ctx);
        expect(view.hydrated()).toBe(true);
        view.dehydrate();
        expect(view.hydrated()).toBe(false);
      }));
      it('should hydrate and dehydrate the change detector', (function() {
        var ctx = new Object();
        view.hydrate(null, null, ctx);
        expect(view.changeDetector.hydrated()).toBe(true);
        view.dehydrate();
        expect(view.changeDetector.hydrated()).toBe(false);
      }));
      it('should use the view pool to reuse views', (function() {
        var pv = new ProtoView(el('<div id="1"></div>'), new DynamicProtoChangeDetector(null), null);
        var fakeView = new FakeView();
        pv.returnToPool(fakeView);
        expect(pv.instantiate(null, null, reflector)).toBe(fakeView);
      }));
    }));
    describe('with locals', function() {
      var view;
      beforeEach((function() {
        var pv = new ProtoView(el('<div id="1"></div>'), new DynamicProtoChangeDetector(null), null);
        pv.bindVariable('context-foo', 'template-foo');
        view = createView(pv);
      }));
      it('should support setting of declared locals', (function() {
        view.setLocal('context-foo', 'bar');
        expect(view.context.get('template-foo')).toBe('bar');
      }));
      it('should not throw on undeclared locals', (function() {
        expect((function() {
          return view.setLocal('setMePlease', 'bar');
        })).not.toThrow();
      }));
      it('when dehydrated should set locals to null', (function() {
        view.setLocal('context-foo', 'bar');
        view.dehydrate();
        view.hydrate(null, null, new Object());
        expect(view.context.get('template-foo')).toBe(null);
      }));
      it('should throw when trying to set on dehydrated view', (function() {
        view.dehydrate();
        expect((function() {
          return view.setLocal('context-foo', 'bar');
        })).toThrowError();
      }));
    });
    describe('instantiated and hydrated', function() {
      function createCollectDomNodesTestCases(useTemplateElement) {
        assert.argumentTypes(useTemplateElement, assert.type.boolean);
        function templateAwareCreateElement(html) {
          return el(useTemplateElement ? ("<template>" + html + "</template>") : html);
        }
        it('should collect the root node in the ProtoView element', (function() {
          var pv = new ProtoView(templateAwareCreateElement('<div id="1"></div>'), new DynamicProtoChangeDetector(null), null);
          var view = pv.instantiate(null, null, reflector);
          view.hydrate(null, null, null);
          expect(view.nodes.length).toBe(1);
          expect(DOM.getAttribute(view.nodes[0], 'id')).toEqual('1');
        }));
        describe('collect elements with property bindings', (function() {
          it('should collect property bindings on the root element if it has the ng-binding class', (function() {
            var pv = new ProtoView(templateAwareCreateElement('<div [prop]="a" class="ng-binding"></div>'), new DynamicProtoChangeDetector(null), null);
            pv.bindElement(null);
            pv.bindElementProperty(parser.parseBinding('a', null), 'prop', reflector.setter('prop'));
            var view = pv.instantiate(null, null, reflector);
            view.hydrate(null, null, null);
            expect(view.bindElements.length).toEqual(1);
            expect(view.bindElements[0]).toBe(view.nodes[0]);
          }));
          it('should collect property bindings on child elements with ng-binding class', (function() {
            var pv = new ProtoView(templateAwareCreateElement('<div><span></span><span class="ng-binding"></span></div>'), new DynamicProtoChangeDetector(null), null);
            pv.bindElement(null);
            pv.bindElementProperty(parser.parseBinding('b', null), 'a', reflector.setter('a'));
            var view = pv.instantiate(null, null, reflector);
            view.hydrate(null, null, null);
            expect(view.bindElements.length).toEqual(1);
            expect(view.bindElements[0]).toBe(view.nodes[0].childNodes[1]);
          }));
        }));
        describe('collect text nodes with bindings', (function() {
          it('should collect text nodes under the root element', (function() {
            var pv = new ProtoView(templateAwareCreateElement('<div class="ng-binding">{{}}<span></span>{{}}</div>'), new DynamicProtoChangeDetector(null), null);
            pv.bindElement(null);
            pv.bindTextNode(0, parser.parseBinding('a', null));
            pv.bindTextNode(2, parser.parseBinding('b', null));
            var view = pv.instantiate(null, null, reflector);
            view.hydrate(null, null, null);
            expect(view.textNodes.length).toEqual(2);
            expect(view.textNodes[0]).toBe(view.nodes[0].childNodes[0]);
            expect(view.textNodes[1]).toBe(view.nodes[0].childNodes[2]);
          }));
          it('should collect text nodes with bindings on child elements with ng-binding class', (function() {
            var pv = new ProtoView(templateAwareCreateElement('<div><span> </span><span class="ng-binding">{{}}</span></div>'), new DynamicProtoChangeDetector(null), null);
            pv.bindElement(null);
            pv.bindTextNode(0, parser.parseBinding('b', null));
            var view = pv.instantiate(null, null, reflector);
            view.hydrate(null, null, null);
            expect(view.textNodes.length).toEqual(1);
            expect(view.textNodes[0]).toBe(view.nodes[0].childNodes[1].childNodes[0]);
          }));
        }));
      }
      Object.defineProperty(createCollectDomNodesTestCases, "parameters", {get: function() {
          return [[assert.type.boolean]];
        }});
      describe('inplace instantiation', (function() {
        it('should be supported.', (function() {
          var template = el('<div></div>');
          var pv = new ProtoView(template, new DynamicProtoChangeDetector(null), new NativeShadowDomStrategy(null));
          pv.instantiateInPlace = true;
          var view = pv.instantiate(null, null, reflector);
          view.hydrate(null, null, null);
          expect(view.nodes[0]).toBe(template);
        }));
        it('should be off by default.', (function() {
          var template = el('<div></div>');
          var pv = new ProtoView(template, new DynamicProtoChangeDetector(null), new NativeShadowDomStrategy(null));
          var view = pv.instantiate(null, null, reflector);
          view.hydrate(null, null, null);
          expect(view.nodes[0]).not.toBe(template);
        }));
      }));
      describe('collect dom nodes with a regular element as root', (function() {
        createCollectDomNodesTestCases(false);
      }));
      describe('collect dom nodes with a template element as root', (function() {
        createCollectDomNodesTestCases(true);
      }));
      describe('create ElementInjectors', (function() {
        it('should use the directives of the ProtoElementInjector', (function() {
          var pv = new ProtoView(el('<div class="ng-binding"></div>'), new DynamicProtoChangeDetector(null), null);
          pv.bindElement(new ProtoElementInjector(null, 1, [SomeDirective]));
          var view = pv.instantiate(null, null, reflector);
          view.hydrate(null, null, null);
          expect(view.elementInjectors.length).toBe(1);
          expect(view.elementInjectors[0].get(SomeDirective) instanceof SomeDirective).toBe(true);
        }));
        it('should use the correct parent', (function() {
          var pv = new ProtoView(el('<div class="ng-binding"><span class="ng-binding"></span></div>'), new DynamicProtoChangeDetector(null), null);
          var protoParent = new ProtoElementInjector(null, 0, [SomeDirective]);
          pv.bindElement(protoParent);
          pv.bindElement(new ProtoElementInjector(protoParent, 1, [AnotherDirective]));
          var view = pv.instantiate(null, null, reflector);
          view.hydrate(null, null, null);
          expect(view.elementInjectors.length).toBe(2);
          expect(view.elementInjectors[0].get(SomeDirective) instanceof SomeDirective).toBe(true);
          expect(view.elementInjectors[1].parent).toBe(view.elementInjectors[0]);
        }));
        it('should not pass the host injector when a parent injector exists', (function() {
          var pv = new ProtoView(el('<div class="ng-binding"><span class="ng-binding"></span></div>'), new DynamicProtoChangeDetector(null), null);
          var protoParent = new ProtoElementInjector(null, 0, [SomeDirective]);
          pv.bindElement(protoParent);
          var testProtoElementInjector = new TestProtoElementInjector(protoParent, 1, [AnotherDirective]);
          pv.bindElement(testProtoElementInjector);
          var hostProtoInjector = new ProtoElementInjector(null, 0, []);
          var hostInjector = hostProtoInjector.instantiate(null, null, reflector);
          var view;
          expect((function() {
            return view = pv.instantiate(hostInjector, null, reflector);
          })).not.toThrow();
          expect(testProtoElementInjector.parentElementInjector).toBe(view.elementInjectors[0]);
          expect(testProtoElementInjector.hostElementInjector).toBeNull();
        }));
        it('should pass the host injector when there is no parent injector', (function() {
          var pv = new ProtoView(el('<div class="ng-binding"><span class="ng-binding"></span></div>'), new DynamicProtoChangeDetector(null), null);
          pv.bindElement(new ProtoElementInjector(null, 0, [SomeDirective]));
          var testProtoElementInjector = new TestProtoElementInjector(null, 1, [AnotherDirective]);
          pv.bindElement(testProtoElementInjector);
          var hostProtoInjector = new ProtoElementInjector(null, 0, []);
          var hostInjector = hostProtoInjector.instantiate(null, null, reflector);
          expect((function() {
            return pv.instantiate(hostInjector, null, reflector);
          })).not.toThrow();
          expect(testProtoElementInjector.parentElementInjector).toBeNull();
          expect(testProtoElementInjector.hostElementInjector).toBe(hostInjector);
        }));
      }));
      describe('collect root element injectors', (function() {
        it('should collect a single root element injector', (function() {
          var pv = new ProtoView(el('<div class="ng-binding"><span class="ng-binding"></span></div>'), new DynamicProtoChangeDetector(null), null);
          var protoParent = new ProtoElementInjector(null, 0, [SomeDirective]);
          pv.bindElement(protoParent);
          pv.bindElement(new ProtoElementInjector(protoParent, 1, [AnotherDirective]));
          var view = pv.instantiate(null, null, reflector);
          view.hydrate(null, null, null);
          expect(view.rootElementInjectors.length).toBe(1);
          expect(view.rootElementInjectors[0].get(SomeDirective) instanceof SomeDirective).toBe(true);
        }));
        it('should collect multiple root element injectors', (function() {
          var pv = new ProtoView(el('<div><span class="ng-binding"></span><span class="ng-binding"></span></div>'), new DynamicProtoChangeDetector(null), null);
          pv.bindElement(new ProtoElementInjector(null, 1, [SomeDirective]));
          pv.bindElement(new ProtoElementInjector(null, 2, [AnotherDirective]));
          var view = pv.instantiate(null, null, reflector);
          view.hydrate(null, null, null);
          expect(view.rootElementInjectors.length).toBe(2);
          expect(view.rootElementInjectors[0].get(SomeDirective) instanceof SomeDirective).toBe(true);
          expect(view.rootElementInjectors[1].get(AnotherDirective) instanceof AnotherDirective).toBe(true);
        }));
      }));
      describe('with component views', (function() {
        var ctx;
        function createComponentWithSubPV(subProtoView) {
          var pv = new ProtoView(el('<cmp class="ng-binding"></cmp>'), new DynamicProtoChangeDetector(null), new NativeShadowDomStrategy(null));
          var binder = pv.bindElement(new ProtoElementInjector(null, 0, [SomeComponent], true));
          binder.componentDirective = someComponentDirective;
          binder.nestedProtoView = subProtoView;
          return pv;
        }
        function createNestedView(protoView) {
          ctx = new MyEvaluationContext();
          var view = protoView.instantiate(null, null, reflector);
          view.hydrate(new Injector([]), null, ctx);
          return view;
        }
        it('should expose component services to the component', (function() {
          var subpv = new ProtoView(el('<span></span>'), new DynamicProtoChangeDetector(null), null);
          var pv = createComponentWithSubPV(subpv);
          var view = createNestedView(pv);
          var comp = view.rootElementInjectors[0].get(SomeComponent);
          expect(comp.service).toBeAnInstanceOf(SomeService);
        }));
        it('should expose component services and component instance to directives in the shadow Dom', (function() {
          var subpv = new ProtoView(el('<div dec class="ng-binding">hello shadow dom</div>'), new DynamicProtoChangeDetector(null), null);
          subpv.bindElement(new ProtoElementInjector(null, 0, [ServiceDependentDecorator]));
          var pv = createComponentWithSubPV(subpv);
          var view = createNestedView(pv);
          var subView = view.componentChildViews[0];
          var subInj = subView.rootElementInjectors[0];
          var subDecorator = subInj.get(ServiceDependentDecorator);
          var comp = view.rootElementInjectors[0].get(SomeComponent);
          expect(subDecorator).toBeAnInstanceOf(ServiceDependentDecorator);
          expect(subDecorator.service).toBe(comp.service);
          expect(subDecorator.component).toBe(comp);
        }));
        function expectViewHasNoDirectiveInstances(view) {
          view.elementInjectors.forEach((function(inj) {
            return expect(inj.hasInstances()).toBe(false);
          }));
        }
        it('dehydration should dehydrate child component views too', (function() {
          var subpv = new ProtoView(el('<div dec class="ng-binding">hello shadow dom</div>'), new DynamicProtoChangeDetector(null), null);
          subpv.bindElement(new ProtoElementInjector(null, 0, [ServiceDependentDecorator]));
          var pv = createComponentWithSubPV(subpv);
          var view = createNestedView(pv);
          view.dehydrate();
          expect(view.hydrated()).toBe(false);
          expectViewHasNoDirectiveInstances(view);
          view.componentChildViews.forEach((function(view) {
            return expectViewHasNoDirectiveInstances(view);
          }));
        }));
        it('should create shadow dom (Native Strategy)', (function() {
          var subpv = new ProtoView(el('<span>hello shadow dom</span>'), new DynamicProtoChangeDetector(null), null);
          var pv = createComponentWithSubPV(subpv);
          var view = createNestedView(pv);
          expect(view.nodes[0].shadowRoot.childNodes[0].childNodes[0].nodeValue).toEqual('hello shadow dom');
        }));
        it('should emulate shadow dom (Emulated Strategy)', (function() {
          var subpv = new ProtoView(el('<span>hello shadow dom</span>'), new DynamicProtoChangeDetector(null), null);
          var pv = new ProtoView(el('<cmp class="ng-binding"></cmp>'), new DynamicProtoChangeDetector(null), new EmulatedScopedShadowDomStrategy(null, null, null));
          var binder = pv.bindElement(new ProtoElementInjector(null, 0, [SomeComponent], true));
          binder.componentDirective = new DirectiveMetadataReader().read(SomeComponent);
          binder.nestedProtoView = subpv;
          var view = createNestedView(pv);
          expect(view.nodes[0].childNodes[0].childNodes[0].nodeValue).toEqual('hello shadow dom');
        }));
      }));
      describe('with template views', (function() {
        function createViewWithViewport() {
          var templateProtoView = new ProtoView(el('<div id="1"></div>'), new DynamicProtoChangeDetector(null), null);
          var pv = new ProtoView(el('<someTmpl class="ng-binding"></someTmpl>'), new DynamicProtoChangeDetector(null), new NativeShadowDomStrategy(null));
          var binder = pv.bindElement(new ProtoElementInjector(null, 0, [SomeViewport]));
          binder.viewportDirective = someViewportDirective;
          binder.nestedProtoView = templateProtoView;
          return createView(pv);
        }
        it('should create a ViewContainer for the Viewport directive', (function() {
          var view = createViewWithViewport();
          var tmplComp = view.rootElementInjectors[0].get(SomeViewport);
          expect(tmplComp.viewContainer).not.toBe(null);
        }));
        it('dehydration should dehydrate viewcontainers', (function() {
          var view = createViewWithViewport();
          var tmplComp = view.rootElementInjectors[0].get(SomeViewport);
          expect(tmplComp.viewContainer.hydrated()).toBe(false);
        }));
      }));
      if (!IS_NODEJS) {
        describe('event handlers', (function() {
          var view,
              ctx,
              called,
              receivedEvent,
              dispatchedEvent;
          function createViewAndContext(protoView) {
            view = createView(protoView, new EventManager([new DomEventsPlugin()], new FakeVmTurnZone()));
            ctx = view.context;
            called = 0;
            receivedEvent = null;
            ctx.callMe = (function(event) {
              called += 1;
              receivedEvent = event;
            });
          }
          function dispatchClick(el) {
            dispatchedEvent = DOM.createMouseEvent('click');
            DOM.dispatchEvent(el, dispatchedEvent);
          }
          function createProtoView() {
            var pv = new ProtoView(el('<div class="ng-binding"><div></div></div>'), new DynamicProtoChangeDetector(null), null);
            pv.bindElement(new TestProtoElementInjector(null, 0, []));
            pv.bindEvent('click', parser.parseBinding('callMe($event)', null));
            return pv;
          }
          it('should fire on non-bubbling native events', (function() {
            createViewAndContext(createProtoView());
            dispatchClick(view.nodes[0]);
            expect(called).toEqual(1);
            expect(receivedEvent).toBe(dispatchedEvent);
          }));
          it('should not fire on a bubbled native events', (function() {
            createViewAndContext(createProtoView());
            dispatchClick(view.nodes[0].firstChild);
            expect(called).toEqual(0);
          }));
          it('should not throw if the view is dehydrated', (function() {
            createViewAndContext(createProtoView());
            view.dehydrate();
            expect((function() {
              return dispatchClick(view.nodes[0]);
            })).not.toThrow();
            expect(called).toEqual(0);
          }));
          it('should support custom event emitters', (function() {
            var pv = new ProtoView(el('<div class="ng-binding"><div></div></div>'), new DynamicProtoChangeDetector(null), null);
            pv.bindElement(new TestProtoElementInjector(null, 0, [EventEmitterDirective]));
            pv.bindEvent('click', parser.parseBinding('callMe($event)', null));
            createViewAndContext(pv);
            var dir = view.elementInjectors[0].get(EventEmitterDirective);
            var dispatchedEvent = new Object();
            dir.click(dispatchedEvent);
            expect(receivedEvent).toBe(dispatchedEvent);
            expect(called).toEqual(1);
            dispatchClick(view.nodes[0]);
            expect(called).toEqual(1);
          }));
          it('should bind to directive events', (function() {
            var pv = new ProtoView(el('<div class="ng-binding"></div>'), new DynamicProtoChangeDetector(null), null);
            pv.bindElement(new ProtoElementInjector(null, 0, [SomeDirectiveWithEventHandler]));
            pv.bindEvent('click', parser.parseAction('onEvent($event)', null), 0);
            view = createView(pv, new EventManager([new DomEventsPlugin()], new FakeVmTurnZone()));
            var directive = view.elementInjectors[0].get(SomeDirectiveWithEventHandler);
            expect(directive.event).toEqual(null);
            dispatchClick(view.nodes[0]);
            expect(directive.event).toBe(dispatchedEvent);
          }));
        }));
      }
      describe('react to record changes', (function() {
        var view,
            cd,
            ctx;
        function createViewAndChangeDetector(protoView) {
          view = createView(protoView);
          ctx = view.context;
          cd = view.changeDetector;
        }
        it('should consume text node changes', (function() {
          var pv = new ProtoView(el('<div class="ng-binding">{{}}</div>'), new DynamicProtoChangeDetector(null), null);
          pv.bindElement(null);
          pv.bindTextNode(0, parser.parseBinding('foo', null));
          createViewAndChangeDetector(pv);
          ctx.foo = 'buz';
          cd.detectChanges();
          expect(view.textNodes[0].nodeValue).toEqual('buz');
        }));
        it('should consume element binding changes', (function() {
          var pv = new ProtoView(el('<div class="ng-binding"></div>'), new DynamicProtoChangeDetector(null), null);
          pv.bindElement(null);
          pv.bindElementProperty(parser.parseBinding('foo', null), 'id', reflector.setter('id'));
          createViewAndChangeDetector(pv);
          ctx.foo = 'buz';
          cd.detectChanges();
          expect(view.bindElements[0].id).toEqual('buz');
        }));
        it('should consume directive watch expression change', (function() {
          var pv = new ProtoView(el('<div class="ng-binding"></div>'), new DynamicProtoChangeDetector(null), null);
          pv.bindElement(new ProtoElementInjector(null, 0, [SomeDirective]));
          pv.bindDirectiveProperty(0, parser.parseBinding('foo', null), 'prop', reflector.setter('prop'));
          createViewAndChangeDetector(pv);
          ctx.foo = 'buz';
          cd.detectChanges();
          expect(view.elementInjectors[0].get(SomeDirective).prop).toEqual('buz');
        }));
        it('should notify a directive about changes after all its properties have been set', (function() {
          var pv = new ProtoView(el('<div class="ng-binding"></div>'), new DynamicProtoChangeDetector(null), null);
          pv.bindElement(new ProtoElementInjector(null, 0, [DirectiveBinding.createFromType(DirectiveImplementingOnChange, new Directive({lifecycle: [onChange]}))]));
          pv.bindDirectiveProperty(0, parser.parseBinding('a', null), 'a', reflector.setter('a'));
          pv.bindDirectiveProperty(0, parser.parseBinding('b', null), 'b', reflector.setter('b'));
          createViewAndChangeDetector(pv);
          ctx.a = 100;
          ctx.b = 200;
          cd.detectChanges();
          var directive = view.elementInjectors[0].get(DirectiveImplementingOnChange);
          expect(directive.c).toEqual(300);
        }));
        it('should provide a map of updated properties', (function() {
          var pv = new ProtoView(el('<div class="ng-binding"></div>'), new DynamicProtoChangeDetector(null), null);
          pv.bindElement(new ProtoElementInjector(null, 0, [DirectiveBinding.createFromType(DirectiveImplementingOnChange, new Directive({lifecycle: [onChange]}))]));
          pv.bindDirectiveProperty(0, parser.parseBinding('a', null), 'a', reflector.setter('a'));
          pv.bindDirectiveProperty(0, parser.parseBinding('b', null), 'b', reflector.setter('b'));
          createViewAndChangeDetector(pv);
          ctx.a = 0;
          ctx.b = 0;
          cd.detectChanges();
          ctx.a = 100;
          cd.detectChanges();
          var directive = view.elementInjectors[0].get(DirectiveImplementingOnChange);
          expect(directive.changes["a"].currentValue).toEqual(100);
          expect(directive.changes["b"]).not.toBeDefined();
        }));
      }));
    });
    describe('protoView createRootProtoView', (function() {
      var element,
          pv;
      beforeEach((function() {
        element = DOM.createElement('div');
        pv = new ProtoView(el('<div>hi</div>'), new DynamicProtoChangeDetector(null), new NativeShadowDomStrategy(null));
      }));
      it('should create the root component when instantiated', (function() {
        var rootProtoView = ProtoView.createRootProtoView(pv, element, someComponentDirective, new DynamicProtoChangeDetector(null), new NativeShadowDomStrategy(null));
        var view = rootProtoView.instantiate(null, null, reflector);
        view.hydrate(new Injector([]), null, null);
        expect(view.rootElementInjectors[0].get(SomeComponent)).not.toBe(null);
      }));
      it('should inject the protoView into the shadowDom', (function() {
        var rootProtoView = ProtoView.createRootProtoView(pv, element, someComponentDirective, new DynamicProtoChangeDetector(null), new NativeShadowDomStrategy(null));
        var view = rootProtoView.instantiate(null, null, reflector);
        view.hydrate(new Injector([]), null, null);
        expect(element.shadowRoot.childNodes[0].childNodes[0].nodeValue).toEqual('hi');
      }));
    }));
  });
}
var SomeDirective = function SomeDirective() {
  this.prop = 'foo';
};
($traceurRuntime.createClass)(SomeDirective, {}, {});
var DirectiveImplementingOnChange = function DirectiveImplementingOnChange() {};
($traceurRuntime.createClass)(DirectiveImplementingOnChange, {onChange: function(changes) {
    this.c = this.a + this.b;
    this.changes = changes;
  }}, {});
var SomeService = function SomeService() {};
($traceurRuntime.createClass)(SomeService, {}, {});
var SomeComponent = function SomeComponent(service) {
  assert.argumentTypes(service, SomeService);
  this.service = service;
};
($traceurRuntime.createClass)(SomeComponent, {}, {});
Object.defineProperty(SomeComponent, "annotations", {get: function() {
    return [new Component({componentServices: [SomeService]})];
  }});
Object.defineProperty(SomeComponent, "parameters", {get: function() {
    return [[SomeService]];
  }});
var ServiceDependentDecorator = function ServiceDependentDecorator(component, service) {
  assert.argumentTypes(component, SomeComponent, service, SomeService);
  this.component = component;
  this.service = service;
};
($traceurRuntime.createClass)(ServiceDependentDecorator, {}, {});
Object.defineProperty(ServiceDependentDecorator, "annotations", {get: function() {
    return [new Decorator({selector: '[dec]'})];
  }});
Object.defineProperty(ServiceDependentDecorator, "parameters", {get: function() {
    return [[SomeComponent], [SomeService]];
  }});
var SomeViewport = function SomeViewport(viewContainer) {
  assert.argumentTypes(viewContainer, ViewContainer);
  this.viewContainer = viewContainer;
};
($traceurRuntime.createClass)(SomeViewport, {}, {});
Object.defineProperty(SomeViewport, "annotations", {get: function() {
    return [new Viewport({selector: 'someTmpl'})];
  }});
Object.defineProperty(SomeViewport, "parameters", {get: function() {
    return [[ViewContainer]];
  }});
var AnotherDirective = function AnotherDirective() {
  this.prop = 'anotherFoo';
};
($traceurRuntime.createClass)(AnotherDirective, {}, {});
var EventEmitterDirective = function EventEmitterDirective(clicker) {
  assert.argumentTypes(clicker, Function);
  this._clicker = clicker;
};
($traceurRuntime.createClass)(EventEmitterDirective, {click: function(eventData) {
    this._clicker(eventData);
  }}, {});
Object.defineProperty(EventEmitterDirective, "parameters", {get: function() {
    return [[Function, new EventEmitter('click')]];
  }});
var SomeDirectiveWithEventHandler = function SomeDirectiveWithEventHandler() {
  this.event = null;
};
($traceurRuntime.createClass)(SomeDirectiveWithEventHandler, {onEvent: function(event) {
    this.event = event;
  }}, {});
var MyEvaluationContext = function MyEvaluationContext() {
  this.foo = 'bar';
};
($traceurRuntime.createClass)(MyEvaluationContext, {}, {});
var TestProtoElementInjector = function TestProtoElementInjector(parent, index, bindings) {
  var firstBindingIsComponent = arguments[3] !== (void 0) ? arguments[3] : false;
  assert.argumentTypes(parent, ProtoElementInjector, index, int, bindings, List, firstBindingIsComponent, assert.type.boolean);
  $traceurRuntime.superConstructor($TestProtoElementInjector).call(this, parent, index, bindings, firstBindingIsComponent);
};
var $TestProtoElementInjector = TestProtoElementInjector;
($traceurRuntime.createClass)(TestProtoElementInjector, {instantiate: function(parent, host, reflector) {
    assert.argumentTypes(parent, ElementInjector, host, ElementInjector, reflector, Reflector);
    this.parentElementInjector = parent;
    this.hostElementInjector = host;
    return assert.returnType(($traceurRuntime.superGet(this, $TestProtoElementInjector.prototype, "instantiate").call(this, parent, host, reflector)), ElementInjector);
  }}, {}, ProtoElementInjector);
Object.defineProperty(TestProtoElementInjector, "parameters", {get: function() {
    return [[ProtoElementInjector], [int], [List], [assert.type.boolean]];
  }});
Object.defineProperty(TestProtoElementInjector.prototype.instantiate, "parameters", {get: function() {
    return [[ElementInjector], [ElementInjector], [Reflector]];
  }});
var FakeVmTurnZone = function FakeVmTurnZone() {
  $traceurRuntime.superConstructor($FakeVmTurnZone).call(this, {enableLongStackTrace: false});
};
var $FakeVmTurnZone = FakeVmTurnZone;
($traceurRuntime.createClass)(FakeVmTurnZone, {
  run: function(fn) {
    fn();
  },
  runOutsideAngular: function(fn) {
    fn();
  }
}, {}, VmTurnZone);

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/test/core/compiler/view_spec.map

//# sourceMappingURL=./view_spec.map
 main();