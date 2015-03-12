var parse5Adapter = require('angular2/src/dom/parse5_adapter');
parse5Adapter.Parse5DomAdapter.makeCurrent();
"use strict";
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/test/core/compiler/pipeline/element_binder_builder_spec";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_test_95_lib__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_dom_47_dom_95_adapter__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_element_95_binder_95_builder__,
    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_pipeline__,
    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__,
    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__,
    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__,
    $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__,
    $__angular2_47_src_47_core_47_annotations_47_annotations__,
    $__angular2_47_src_47_core_47_compiler_47_view__,
    $__angular2_47_src_47_core_47_compiler_47_element_95_injector__,
    $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__,
    $__angular2_47_change_95_detection__,
    $__angular2_47_di__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var $__1 = ($__angular2_47_test_95_lib__ = require("angular2/test_lib"), $__angular2_47_test_95_lib__ && $__angular2_47_test_95_lib__.__esModule && $__angular2_47_test_95_lib__ || {default: $__angular2_47_test_95_lib__}),
    describe = $__1.describe,
    beforeEach = $__1.beforeEach,
    it = $__1.it,
    expect = $__1.expect,
    iit = $__1.iit,
    ddescribe = $__1.ddescribe,
    el = $__1.el;
var $__2 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    isPresent = $__2.isPresent,
    normalizeBlank = $__2.normalizeBlank;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var $__4 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    ListWrapper = $__4.ListWrapper,
    MapWrapper = $__4.MapWrapper,
    Map = $__4.Map,
    StringMap = $__4.StringMap,
    StringMapWrapper = $__4.StringMapWrapper;
var ElementBinderBuilder = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_element_95_binder_95_builder__ = require("angular2/src/core/compiler/pipeline/element_binder_builder"), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_element_95_binder_95_builder__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_element_95_binder_95_builder__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_element_95_binder_95_builder__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_element_95_binder_95_builder__}).ElementBinderBuilder;
var CompilePipeline = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_pipeline__ = require("angular2/src/core/compiler/pipeline/compile_pipeline"), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_pipeline__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_pipeline__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_pipeline__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_pipeline__}).CompilePipeline;
var CompileElement = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ = require("angular2/src/core/compiler/pipeline/compile_element"), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__}).CompileElement;
var CompileStep = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__ = require("angular2/src/core/compiler/pipeline/compile_step"), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__}).CompileStep;
var CompileControl = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__ = require("angular2/src/core/compiler/pipeline/compile_control"), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__}).CompileControl;
var NativeShadowDomStrategy = ($__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__ = require("angular2/src/core/compiler/shadow_dom_strategy"), $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__ && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__.__esModule && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__ || {default: $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__}).NativeShadowDomStrategy;
var $__11 = ($__angular2_47_src_47_core_47_annotations_47_annotations__ = require("angular2/src/core/annotations/annotations"), $__angular2_47_src_47_core_47_annotations_47_annotations__ && $__angular2_47_src_47_core_47_annotations_47_annotations__.__esModule && $__angular2_47_src_47_core_47_annotations_47_annotations__ || {default: $__angular2_47_src_47_core_47_annotations_47_annotations__}),
    Decorator = $__11.Decorator,
    Component = $__11.Component,
    Viewport = $__11.Viewport;
var $__12 = ($__angular2_47_src_47_core_47_compiler_47_view__ = require("angular2/src/core/compiler/view"), $__angular2_47_src_47_core_47_compiler_47_view__ && $__angular2_47_src_47_core_47_compiler_47_view__.__esModule && $__angular2_47_src_47_core_47_compiler_47_view__ || {default: $__angular2_47_src_47_core_47_compiler_47_view__}),
    ProtoView = $__12.ProtoView,
    ElementPropertyMemento = $__12.ElementPropertyMemento,
    DirectivePropertyMemento = $__12.DirectivePropertyMemento;
var ProtoElementInjector = ($__angular2_47_src_47_core_47_compiler_47_element_95_injector__ = require("angular2/src/core/compiler/element_injector"), $__angular2_47_src_47_core_47_compiler_47_element_95_injector__ && $__angular2_47_src_47_core_47_compiler_47_element_95_injector__.__esModule && $__angular2_47_src_47_core_47_compiler_47_element_95_injector__ || {default: $__angular2_47_src_47_core_47_compiler_47_element_95_injector__}).ProtoElementInjector;
var DirectiveMetadataReader = ($__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__ = require("angular2/src/core/compiler/directive_metadata_reader"), $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__ && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__.__esModule && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__ || {default: $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__}).DirectiveMetadataReader;
var $__15 = ($__angular2_47_change_95_detection__ = require("angular2/change_detection"), $__angular2_47_change_95_detection__ && $__angular2_47_change_95_detection__.__esModule && $__angular2_47_change_95_detection__ || {default: $__angular2_47_change_95_detection__}),
    ChangeDetector = $__15.ChangeDetector,
    Lexer = $__15.Lexer,
    Parser = $__15.Parser,
    DynamicProtoChangeDetector = $__15.DynamicProtoChangeDetector,
    PipeRegistry = $__15.PipeRegistry,
    Pipe = $__15.Pipe;
var Injector = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}).Injector;
function main() {
  describe('ElementBinderBuilder', (function() {
    var evalContext,
        view,
        changeDetector;
    function createPipeline() {
      var $__18 = arguments[0] !== (void 0) ? arguments[0] : {},
          textNodeBindings = $__18.textNodeBindings,
          propertyBindings = $__18.propertyBindings,
          eventBindings = $__18.eventBindings,
          directives = $__18.directives,
          protoElementInjector = $__18.protoElementInjector,
          registry = $__18.registry;
      var reflector = new DirectiveMetadataReader();
      var parser = new Parser(new Lexer());
      return new CompilePipeline([new MockStep((function(parent, current, control) {
        var hasBinding = false;
        if (isPresent(DOM.getAttribute(current.element, 'text-binding'))) {
          MapWrapper.forEach(textNodeBindings, (function(v, k) {
            current.addTextNodeBinding(k, parser.parseBinding(v, null));
          }));
          hasBinding = true;
        }
        if (isPresent(DOM.getAttribute(current.element, 'prop-binding'))) {
          if (isPresent(propertyBindings)) {
            MapWrapper.forEach(propertyBindings, (function(v, k) {
              current.addPropertyBinding(k, parser.parseBinding(v, null));
            }));
          }
          hasBinding = true;
        }
        if (isPresent(DOM.getAttribute(current.element, 'event-binding'))) {
          MapWrapper.forEach(eventBindings, (function(v, k) {
            current.addEventBinding(k, parser.parseAction(v, null));
          }));
          hasBinding = true;
        }
        if (isPresent(DOM.getAttribute(current.element, 'directives'))) {
          hasBinding = true;
          for (var i = 0; i < directives.length; i++) {
            var dirMetadata = reflector.read(directives[i]);
            current.addDirective(dirMetadata);
          }
        }
        if (hasBinding) {
          current.hasBindings = true;
          DOM.addClass(current.element, 'ng-binding');
        }
        if (isPresent(protoElementInjector) && (isPresent(DOM.getAttribute(current.element, 'text-binding')) || isPresent(DOM.getAttribute(current.element, 'prop-binding')) || isPresent(DOM.getAttribute(current.element, 'directives')) || isPresent(DOM.getAttribute(current.element, 'event-binding')))) {
          current.inheritedProtoElementInjector = protoElementInjector;
        }
        if (isPresent(DOM.getAttribute(current.element, 'viewroot'))) {
          current.isViewRoot = true;
          current.inheritedProtoView = new ProtoView(current.element, new DynamicProtoChangeDetector(normalizeBlank(registry)), new NativeShadowDomStrategy(null));
        } else if (isPresent(parent)) {
          current.inheritedProtoView = parent.inheritedProtoView;
        }
      })), new ElementBinderBuilder(parser)]);
    }
    function instantiateView(protoView) {
      evalContext = new Context();
      view = protoView.instantiate(null, null, null);
      view.hydrate(new Injector([]), null, evalContext);
      changeDetector = view.changeDetector;
    }
    it('should not create an ElementBinder for elements that have no bindings', (function() {
      var pipeline = createPipeline();
      var results = pipeline.process(el('<div viewroot><span></span></div>'));
      var pv = results[0].inheritedProtoView;
      expect(pv.elementBinders.length).toBe(0);
    }));
    it('should create an ElementBinder for elements that have bindings', (function() {
      var pipeline = createPipeline();
      var results = pipeline.process(el('<div viewroot prop-binding><span prop-binding></span></div>'));
      var pv = results[0].inheritedProtoView;
      expect(pv.elementBinders.length).toBe(2);
      expect(pv.elementBinders[1]).not.toBe(pv.elementBinders[0]);
    }));
    it('should inherit ElementBinders to children that have no bindings', (function() {
      var pipeline = createPipeline();
      var results = pipeline.process(el('<div viewroot prop-binding><span></span></div>'));
      var pv = results[0].inheritedProtoView;
      expect(pv.elementBinders.length).toBe(1);
      expect(results[0].inheritedElementBinder).toBe(results[1].inheritedElementBinder);
    }));
    it('should store the current protoElementInjector', (function() {
      var directives = [SomeDecoratorDirective];
      var protoElementInjector = new ProtoElementInjector(null, 0, directives);
      var pipeline = createPipeline({
        protoElementInjector: protoElementInjector,
        directives: directives
      });
      var results = pipeline.process(el('<div viewroot directives></div>'));
      var pv = results[0].inheritedProtoView;
      expect(pv.elementBinders[0].protoElementInjector).toBe(protoElementInjector);
    }));
    it('should not store the parent protoElementInjector', (function() {
      var directives = [SomeDecoratorDirective];
      var eventBindings = MapWrapper.createFromStringMap({'event1': '1+1'});
      var pipeline = createPipeline({
        directives: directives,
        eventBindings: eventBindings
      });
      var results = pipeline.process(el('<div viewroot directives><div event-binding></div></div>'));
      var pv = results[0].inheritedProtoView;
      expect(pv.elementBinders[1].protoElementInjector).toBeNull();
    }));
    it('should store the component directive', (function() {
      var directives = [SomeComponentDirective];
      var pipeline = createPipeline({
        protoElementInjector: null,
        directives: directives
      });
      var results = pipeline.process(el('<div viewroot directives></div>'));
      var pv = results[0].inheritedProtoView;
      expect(pv.elementBinders[0].componentDirective.type).toBe(SomeComponentDirective);
    }));
    it('should store the template directive', (function() {
      var directives = [SomeViewportDirective];
      var pipeline = createPipeline({
        protoElementInjector: null,
        directives: directives
      });
      var results = pipeline.process(el('<div viewroot directives></div>'));
      var pv = results[0].inheritedProtoView;
      expect(pv.elementBinders[0].viewportDirective.type).toBe(SomeViewportDirective);
    }));
    it('should bind text nodes', (function() {
      var textNodeBindings = MapWrapper.create();
      MapWrapper.set(textNodeBindings, 0, 'prop1');
      MapWrapper.set(textNodeBindings, 2, 'prop2');
      var pipeline = createPipeline({textNodeBindings: textNodeBindings});
      var results = pipeline.process(el('<div viewroot text-binding>{{}}<span></span>{{}}</div>'));
      var pv = results[0].inheritedProtoView;
      expect(sortArr(pv.elementBinders[0].textNodeIndices)).toEqual([0, 2]);
      instantiateView(pv);
      evalContext.prop1 = 'a';
      evalContext.prop2 = 'b';
      changeDetector.detectChanges();
      expect(view.nodes[0].childNodes[0].nodeValue).toEqual('a');
      expect(view.nodes[0].childNodes[2].nodeValue).toEqual('b');
    }));
    it('should bind element properties', (function() {
      var propertyBindings = MapWrapper.createFromStringMap({
        'value': 'prop1',
        'hidden': 'prop2'
      });
      var pipeline = createPipeline({propertyBindings: propertyBindings});
      var results = pipeline.process(el('<input viewroot prop-binding>'));
      var pv = results[0].inheritedProtoView;
      expect(pv.elementBinders[0].hasElementPropertyBindings).toBe(true);
      instantiateView(pv);
      evalContext.prop1 = 'a';
      evalContext.prop2 = false;
      changeDetector.detectChanges();
      expect(view.nodes[0].value).toEqual('a');
      expect(view.nodes[0].hidden).toEqual(false);
    }));
    it('should bind element properties where attr name and prop name do not match', (function() {
      var propertyBindings = MapWrapper.createFromStringMap({'tabindex': 'prop1'});
      var pipeline = createPipeline({propertyBindings: propertyBindings});
      var results = pipeline.process(el('<div viewroot prop-binding></div>'));
      var pv = results[0].inheritedProtoView;
      expect(pv.elementBinders[0].hasElementPropertyBindings).toBe(true);
      instantiateView(pv);
      evalContext.prop1 = 1;
      changeDetector.detectChanges();
      expect(view.nodes[0].tabIndex).toEqual(1);
      evalContext.prop1 = 0;
      changeDetector.detectChanges();
      expect(view.nodes[0].tabIndex).toEqual(0);
    }));
    it('should bind to aria-* attributes when exp evaluates to strings', (function() {
      var propertyBindings = MapWrapper.createFromStringMap({'aria-label': 'prop1'});
      var pipeline = createPipeline({propertyBindings: propertyBindings});
      var results = pipeline.process(el('<div viewroot prop-binding></div>'));
      var pv = results[0].inheritedProtoView;
      expect(pv.elementBinders[0].hasElementPropertyBindings).toBe(true);
      instantiateView(pv);
      evalContext.prop1 = 'some label';
      changeDetector.detectChanges();
      expect(DOM.getAttribute(view.nodes[0], 'aria-label')).toEqual('some label');
      evalContext.prop1 = 'some other label';
      changeDetector.detectChanges();
      expect(DOM.getAttribute(view.nodes[0], 'aria-label')).toEqual('some other label');
      evalContext.prop1 = null;
      changeDetector.detectChanges();
      expect(DOM.getAttribute(view.nodes[0], 'aria-label')).toBeNull();
    }));
    it('should bind to aria-* attributes when exp evaluates to booleans', (function() {
      var propertyBindings = MapWrapper.createFromStringMap({'aria-busy': 'prop1'});
      var pipeline = createPipeline({propertyBindings: propertyBindings});
      var results = pipeline.process(el('<div viewroot prop-binding></div>'));
      var pv = results[0].inheritedProtoView;
      expect(pv.elementBinders[0].hasElementPropertyBindings).toBe(true);
      instantiateView(pv);
      evalContext.prop1 = true;
      changeDetector.detectChanges();
      expect(DOM.getAttribute(view.nodes[0], 'aria-busy')).toEqual('true');
      evalContext.prop1 = false;
      changeDetector.detectChanges();
      expect(DOM.getAttribute(view.nodes[0], 'aria-busy')).toEqual('false');
    }));
    it('should bind to ARIA role attribute', (function() {
      var propertyBindings = MapWrapper.createFromStringMap({'role': 'prop1'});
      var pipeline = createPipeline({propertyBindings: propertyBindings});
      var results = pipeline.process(el('<div viewroot prop-binding></div>'));
      var pv = results[0].inheritedProtoView;
      expect(pv.elementBinders[0].hasElementPropertyBindings).toBe(true);
      instantiateView(pv);
      evalContext.prop1 = 'alert';
      changeDetector.detectChanges();
      expect(DOM.getAttribute(view.nodes[0], 'role')).toEqual('alert');
      evalContext.prop1 = 'alertdialog';
      changeDetector.detectChanges();
      expect(DOM.getAttribute(view.nodes[0], 'role')).toEqual('alertdialog');
      evalContext.prop1 = null;
      changeDetector.detectChanges();
      expect(DOM.getAttribute(view.nodes[0], 'role')).toBeNull();
    }));
    it('should throw for a non-string ARIA role', (function() {
      var propertyBindings = MapWrapper.createFromStringMap({'role': 'prop1'});
      var pipeline = createPipeline({propertyBindings: propertyBindings});
      var results = pipeline.process(el('<div viewroot prop-binding></div>'));
      var pv = results[0].inheritedProtoView;
      instantiateView(pv);
      expect((function() {
        evalContext.prop1 = 1;
        changeDetector.detectChanges();
      })).toThrowError("Invalid role attribute, only string values are allowed, got '1'");
    }));
    it('should bind class with a dot', (function() {
      var propertyBindings = MapWrapper.createFromStringMap({'class.bar': 'prop1'});
      var pipeline = createPipeline({propertyBindings: propertyBindings});
      var results = pipeline.process(el('<input class="foo" viewroot prop-binding>'));
      var pv = results[0].inheritedProtoView;
      expect(pv.elementBinders[0].hasElementPropertyBindings).toBe(true);
      instantiateView(pv);
      evalContext.prop1 = true;
      changeDetector.detectChanges();
      expect(view.nodes[0].className).toEqual('foo ng-binding bar');
      evalContext.prop1 = false;
      changeDetector.detectChanges();
      expect(view.nodes[0].className).toEqual('foo ng-binding');
    }));
    it('should bind style with a dot', (function() {
      var propertyBindings = MapWrapper.createFromStringMap({'style.color': 'prop1'});
      var pipeline = createPipeline({propertyBindings: propertyBindings});
      var results = pipeline.process(el('<div viewroot prop-binding>'));
      var pv = results[0].inheritedProtoView;
      expect(pv.elementBinders[0].hasElementPropertyBindings).toBe(true);
      instantiateView(pv);
      evalContext.prop1 = 'red';
      changeDetector.detectChanges();
      expect(DOM.getStyle(view.nodes[0], 'color')).toEqual('red');
      evalContext.prop1 = 'blue';
      changeDetector.detectChanges();
      expect(DOM.getStyle(view.nodes[0], 'color')).toEqual('blue');
    }));
    it('should bind style with a dot and suffix', (function() {
      var propertyBindings = MapWrapper.createFromStringMap({'style.font-size.px': 'prop1'});
      var pipeline = createPipeline({propertyBindings: propertyBindings});
      var results = pipeline.process(el('<div viewroot prop-binding>'));
      var pv = results[0].inheritedProtoView;
      expect(pv.elementBinders[0].hasElementPropertyBindings).toBe(true);
      instantiateView(pv);
      evalContext.prop1 = 10;
      changeDetector.detectChanges();
      expect(DOM.getStyle(view.nodes[0], 'font-size')).toEqual('10px');
      evalContext.prop1 = 20;
      changeDetector.detectChanges();
      expect(DOM.getStyle(view.nodes[0], 'font-size')).toEqual('20px');
      evalContext.prop1 = null;
      changeDetector.detectChanges();
      expect(DOM.getStyle(view.nodes[0], 'font-size')).toEqual('');
    }));
    it('should bind events', (function() {
      var eventBindings = MapWrapper.createFromStringMap({'event1': '1+1'});
      var pipeline = createPipeline({eventBindings: eventBindings});
      var results = pipeline.process(el('<div viewroot event-binding></div>'));
      var pv = results[0].inheritedProtoView;
      var eventMap = StringMapWrapper.get(pv.elementBinders[0].events, 'event1');
      var ast = MapWrapper.get(eventMap, -1);
      expect(ast.eval(null)).toBe(2);
    }));
    it('should bind directive events', (function() {
      var directives = [SomeDecoratorWithEvent];
      var protoElementInjector = new ProtoElementInjector(null, 0, directives, true);
      var pipeline = createPipeline({
        directives: directives,
        protoElementInjector: protoElementInjector
      });
      var results = pipeline.process(el('<div viewroot directives></div>'));
      var pv = results[0].inheritedProtoView;
      var directiveEvents = pv.elementBinders[0].events;
      var eventMap = StringMapWrapper.get(directiveEvents, 'event');
      var ast = MapWrapper.get(eventMap, 0);
      var context = new SomeDecoratorWithEvent();
      expect(ast.eval(context)).toEqual('onEvent() callback');
    }));
    it('should bind directive properties', (function() {
      var propertyBindings = MapWrapper.createFromStringMap({
        'boundprop1': 'prop1',
        'boundprop2': 'prop2',
        'boundprop3': 'prop3'
      });
      var directives = [SomeComponentDirectiveWithBinding, SomeViewportDirectiveWithBinding, SomeDecoratorDirectiveWith2Bindings];
      var protoElementInjector = new ProtoElementInjector(null, 0, directives, true);
      var pipeline = createPipeline({
        propertyBindings: propertyBindings,
        directives: directives,
        protoElementInjector: protoElementInjector
      });
      var results = pipeline.process(el('<div viewroot prop-binding directives></div>'));
      var pv = results[0].inheritedProtoView;
      results[0].inheritedElementBinder.nestedProtoView = new ProtoView(el('<div></div>'), new DynamicProtoChangeDetector(null), new NativeShadowDomStrategy(null));
      instantiateView(pv);
      evalContext.prop1 = 'a';
      evalContext.prop2 = 'b';
      evalContext.prop3 = 'c';
      changeDetector.detectChanges();
      expect(view.elementInjectors[0].get(SomeDecoratorDirectiveWith2Bindings).decorProp).toBe('a');
      expect(view.elementInjectors[0].get(SomeDecoratorDirectiveWith2Bindings).decorProp2).toBe('b');
      expect(view.elementInjectors[0].get(SomeViewportDirectiveWithBinding).templProp).toBe('b');
      expect(view.elementInjectors[0].get(SomeComponentDirectiveWithBinding).compProp).toBe('c');
    }));
    it('should bind directive properties with pipes', (function() {
      var propertyBindings = MapWrapper.createFromStringMap({'boundprop': 'prop1'});
      var directives = [DirectiveWithBindingsThatHavePipes];
      var protoElementInjector = new ProtoElementInjector(null, 0, directives, true);
      var registry = new PipeRegistry({"double": [new DoublePipeFactory()]});
      var pipeline = createPipeline({
        propertyBindings: propertyBindings,
        directives: directives,
        protoElementInjector: protoElementInjector,
        registry: registry
      });
      var results = pipeline.process(el('<div viewroot prop-binding directives></div>'));
      var pv = results[0].inheritedProtoView;
      results[0].inheritedElementBinder.nestedProtoView = new ProtoView(el('<div></div>'), new DynamicProtoChangeDetector(registry), new NativeShadowDomStrategy(null));
      instantiateView(pv);
      evalContext.prop1 = 'a';
      changeDetector.detectChanges();
      expect(view.elementInjectors[0].get(DirectiveWithBindingsThatHavePipes).compProp).toEqual('aa');
    }));
    it('should bind directive properties for sibling elements', (function() {
      var propertyBindings = MapWrapper.createFromStringMap({'boundprop1': 'prop1'});
      var directives = [SomeDecoratorDirectiveWithBinding];
      var protoElementInjector = new ProtoElementInjector(null, 0, directives);
      var pipeline = createPipeline({
        propertyBindings: propertyBindings,
        directives: directives,
        protoElementInjector: protoElementInjector
      });
      var results = pipeline.process(el('<div viewroot><div prop-binding directives>' + '</div><div prop-binding directives></div></div>'));
      var pv = results[0].inheritedProtoView;
      instantiateView(pv);
      evalContext.prop1 = 'a';
      changeDetector.detectChanges();
      expect(view.elementInjectors[1].get(SomeDecoratorDirectiveWithBinding).decorProp).toBe('a');
    }));
    it('should bind to string literals', (function() {
      var directives = [SomeDecoratorDirectiveWithBinding];
      var protoElementInjector = new ProtoElementInjector(null, 0, directives);
      var pipeline = createPipeline({
        directives: directives,
        protoElementInjector: protoElementInjector
      });
      var results = pipeline.process(el('<div viewroot directives boundprop1="foo"></div>'));
      var pv = results[0].inheritedProtoView;
      instantiateView(pv);
      changeDetector.detectChanges();
      expect(view.elementInjectors[0].get(SomeDecoratorDirectiveWithBinding).decorProp).toEqual('foo');
    }));
    describe('errors', (function() {
      it('should not throw any errors if there is no element property bindings for a directive ' + 'property binding', (function() {
        var pipeline = createPipeline({
          propertyBindings: MapWrapper.create(),
          directives: [SomeDecoratorDirectiveWithBinding]
        });
        pipeline.process(el('<div viewroot prop-binding directives>'));
      }));
    }));
  }));
}
var SomeDecoratorDirective = function SomeDecoratorDirective() {};
($traceurRuntime.createClass)(SomeDecoratorDirective, {}, {});
Object.defineProperty(SomeDecoratorDirective, "annotations", {get: function() {
    return [new Decorator()];
  }});
var SomeDecoratorDirectiveWithBinding = function SomeDecoratorDirectiveWithBinding() {
  this.decorProp = null;
  this.decorProp2 = null;
};
($traceurRuntime.createClass)(SomeDecoratorDirectiveWithBinding, {}, {});
Object.defineProperty(SomeDecoratorDirectiveWithBinding, "annotations", {get: function() {
    return [new Decorator({bind: {'decorProp': 'boundprop1'}})];
  }});
var SomeDecoratorWithEvent = function SomeDecoratorWithEvent() {
  this.$event = 'onEvent';
};
($traceurRuntime.createClass)(SomeDecoratorWithEvent, {onEvent: function(event) {
    return (event + "() callback");
  }}, {});
Object.defineProperty(SomeDecoratorWithEvent, "annotations", {get: function() {
    return [new Decorator({events: {'event': 'onEvent($event)'}})];
  }});
var SomeDecoratorDirectiveWith2Bindings = function SomeDecoratorDirectiveWith2Bindings() {
  this.decorProp = null;
  this.decorProp2 = null;
};
($traceurRuntime.createClass)(SomeDecoratorDirectiveWith2Bindings, {}, {});
Object.defineProperty(SomeDecoratorDirectiveWith2Bindings, "annotations", {get: function() {
    return [new Decorator({bind: {
        'decorProp': 'boundprop1',
        'decorProp2': 'boundprop2'
      }})];
  }});
var SomeViewportDirective = function SomeViewportDirective() {};
($traceurRuntime.createClass)(SomeViewportDirective, {}, {});
Object.defineProperty(SomeViewportDirective, "annotations", {get: function() {
    return [new Viewport()];
  }});
var SomeViewportDirectiveWithBinding = function SomeViewportDirectiveWithBinding() {
  this.templProp = null;
};
($traceurRuntime.createClass)(SomeViewportDirectiveWithBinding, {}, {});
Object.defineProperty(SomeViewportDirectiveWithBinding, "annotations", {get: function() {
    return [new Viewport({bind: {'templProp': 'boundprop2'}})];
  }});
var SomeComponentDirective = function SomeComponentDirective() {};
($traceurRuntime.createClass)(SomeComponentDirective, {}, {});
Object.defineProperty(SomeComponentDirective, "annotations", {get: function() {
    return [new Component()];
  }});
var SomeComponentDirectiveWithBinding = function SomeComponentDirectiveWithBinding() {
  this.compProp = null;
};
($traceurRuntime.createClass)(SomeComponentDirectiveWithBinding, {}, {});
Object.defineProperty(SomeComponentDirectiveWithBinding, "annotations", {get: function() {
    return [new Component({bind: {'compProp': 'boundprop3'}})];
  }});
var DirectiveWithBindingsThatHavePipes = function DirectiveWithBindingsThatHavePipes() {
  this.compProp = null;
};
($traceurRuntime.createClass)(DirectiveWithBindingsThatHavePipes, {}, {});
Object.defineProperty(DirectiveWithBindingsThatHavePipes, "annotations", {get: function() {
    return [new Component({bind: {'compProp': 'boundprop | double'}})];
  }});
var DoublePipe = function DoublePipe() {
  $traceurRuntime.superConstructor($DoublePipe).apply(this, arguments);
};
var $DoublePipe = DoublePipe;
($traceurRuntime.createClass)(DoublePipe, {
  supports: function(obj) {
    return true;
  },
  transform: function(value) {
    return ("" + value + value);
  }
}, {}, Pipe);
var DoublePipeFactory = function DoublePipeFactory() {};
($traceurRuntime.createClass)(DoublePipeFactory, {
  supports: function(obj) {
    return true;
  },
  create: function() {
    return new DoublePipe();
  }
}, {});
var Context = function Context() {
  this.prop1 = null;
  this.prop2 = null;
  this.prop3 = null;
};
($traceurRuntime.createClass)(Context, {}, {});
var MockStep = function MockStep(process) {
  $traceurRuntime.superConstructor($MockStep).call(this);
  this.processClosure = process;
};
var $MockStep = MockStep;
($traceurRuntime.createClass)(MockStep, {process: function(parent, current, control) {
    assert.argumentTypes(parent, CompileElement, current, CompileElement, control, CompileControl);
    this.processClosure(parent, current, control);
  }}, {}, CompileStep);
Object.defineProperty(MockStep.prototype.process, "parameters", {get: function() {
    return [[CompileElement], [CompileElement], [CompileControl]];
  }});
function sortArr(arr) {
  var arr2 = ListWrapper.clone(arr);
  arr2.sort();
  return arr2;
}

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/test/core/compiler/pipeline/element_binder_builder_spec.map

//# sourceMappingURL=./element_binder_builder_spec.map
 main();