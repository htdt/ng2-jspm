"use strict";
Object.defineProperties(module.exports, {
  appViewToken: {get: function() {
      return appViewToken;
    }},
  appChangeDetectorToken: {get: function() {
      return appChangeDetectorToken;
    }},
  appElementToken: {get: function() {
      return appElementToken;
    }},
  appComponentAnnotatedTypeToken: {get: function() {
      return appComponentAnnotatedTypeToken;
    }},
  appDocumentToken: {get: function() {
      return appDocumentToken;
    }},
  bootstrap: {get: function() {
      return bootstrap;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/src/core/application";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_di__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_dom_47_browser_95_adapter__,
    $__angular2_47_src_47_dom_47_dom_95_adapter__,
    $__angular2_47_src_47_core_47_compiler_47_compiler__,
    $__angular2_47_src_47_core_47_compiler_47_view__,
    $__angular2_47_src_47_reflection_47_reflection__,
    $__angular2_47_change_95_detection__,
    $__angular2_47_src_47_core_47_exception_95_handler__,
    $__angular2_47_src_47_core_47_compiler_47_template_95_loader__,
    $__angular2_47_src_47_core_47_compiler_47_template_95_resolver__,
    $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_facade_47_async__,
    $__angular2_47_src_47_core_47_zone_47_vm_95_turn_95_zone__,
    $__angular2_47_src_47_core_47_life_95_cycle_47_life_95_cycle__,
    $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__,
    $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr__,
    $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr_95_impl__,
    $__angular2_47_src_47_core_47_events_47_event_95_manager__,
    $__angular2_47_src_47_core_47_events_47_hammer_95_gestures__,
    $__angular2_47_src_47_di_47_binding__,
    $__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__,
    $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__,
    $__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__,
    $__angular2_47_src_47_core_47_compiler_47_style_95_inliner__,
    $__angular2_47_src_47_core_47_compiler_47_css_95_processor__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var $__1 = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}),
    Injector = $__1.Injector,
    bind = $__1.bind,
    OpaqueToken = $__1.OpaqueToken;
var $__2 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    Type = $__2.Type,
    FIELD = $__2.FIELD,
    isBlank = $__2.isBlank,
    isPresent = $__2.isPresent,
    BaseException = $__2.BaseException,
    assertionsEnabled = $__2.assertionsEnabled,
    print = $__2.print;
var BrowserDomAdapter = ($__angular2_47_src_47_dom_47_browser_95_adapter__ = require("angular2/src/dom/browser_adapter"), $__angular2_47_src_47_dom_47_browser_95_adapter__ && $__angular2_47_src_47_dom_47_browser_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_browser_95_adapter__ || {default: $__angular2_47_src_47_dom_47_browser_95_adapter__}).BrowserDomAdapter;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var $__5 = ($__angular2_47_src_47_core_47_compiler_47_compiler__ = require("./compiler/compiler"), $__angular2_47_src_47_core_47_compiler_47_compiler__ && $__angular2_47_src_47_core_47_compiler_47_compiler__.__esModule && $__angular2_47_src_47_core_47_compiler_47_compiler__ || {default: $__angular2_47_src_47_core_47_compiler_47_compiler__}),
    Compiler = $__5.Compiler,
    CompilerCache = $__5.CompilerCache;
var ProtoView = ($__angular2_47_src_47_core_47_compiler_47_view__ = require("./compiler/view"), $__angular2_47_src_47_core_47_compiler_47_view__ && $__angular2_47_src_47_core_47_compiler_47_view__.__esModule && $__angular2_47_src_47_core_47_compiler_47_view__ || {default: $__angular2_47_src_47_core_47_compiler_47_view__}).ProtoView;
var $__7 = ($__angular2_47_src_47_reflection_47_reflection__ = require("angular2/src/reflection/reflection"), $__angular2_47_src_47_reflection_47_reflection__ && $__angular2_47_src_47_reflection_47_reflection__.__esModule && $__angular2_47_src_47_reflection_47_reflection__ || {default: $__angular2_47_src_47_reflection_47_reflection__}),
    Reflector = $__7.Reflector,
    reflector = $__7.reflector;
var $__8 = ($__angular2_47_change_95_detection__ = require("angular2/change_detection"), $__angular2_47_change_95_detection__ && $__angular2_47_change_95_detection__.__esModule && $__angular2_47_change_95_detection__ || {default: $__angular2_47_change_95_detection__}),
    Parser = $__8.Parser,
    Lexer = $__8.Lexer,
    ChangeDetection = $__8.ChangeDetection,
    dynamicChangeDetection = $__8.dynamicChangeDetection,
    jitChangeDetection = $__8.jitChangeDetection;
var ExceptionHandler = ($__angular2_47_src_47_core_47_exception_95_handler__ = require("./exception_handler"), $__angular2_47_src_47_core_47_exception_95_handler__ && $__angular2_47_src_47_core_47_exception_95_handler__.__esModule && $__angular2_47_src_47_core_47_exception_95_handler__ || {default: $__angular2_47_src_47_core_47_exception_95_handler__}).ExceptionHandler;
var TemplateLoader = ($__angular2_47_src_47_core_47_compiler_47_template_95_loader__ = require("./compiler/template_loader"), $__angular2_47_src_47_core_47_compiler_47_template_95_loader__ && $__angular2_47_src_47_core_47_compiler_47_template_95_loader__.__esModule && $__angular2_47_src_47_core_47_compiler_47_template_95_loader__ || {default: $__angular2_47_src_47_core_47_compiler_47_template_95_loader__}).TemplateLoader;
var TemplateResolver = ($__angular2_47_src_47_core_47_compiler_47_template_95_resolver__ = require("./compiler/template_resolver"), $__angular2_47_src_47_core_47_compiler_47_template_95_resolver__ && $__angular2_47_src_47_core_47_compiler_47_template_95_resolver__.__esModule && $__angular2_47_src_47_core_47_compiler_47_template_95_resolver__ || {default: $__angular2_47_src_47_core_47_compiler_47_template_95_resolver__}).TemplateResolver;
var DirectiveMetadataReader = ($__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__ = require("./compiler/directive_metadata_reader"), $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__ && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__.__esModule && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__ || {default: $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__}).DirectiveMetadataReader;
var $__13 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    List = $__13.List,
    ListWrapper = $__13.ListWrapper;
var $__14 = ($__angular2_47_src_47_facade_47_async__ = require("angular2/src/facade/async"), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}),
    Promise = $__14.Promise,
    PromiseWrapper = $__14.PromiseWrapper;
var VmTurnZone = ($__angular2_47_src_47_core_47_zone_47_vm_95_turn_95_zone__ = require("angular2/src/core/zone/vm_turn_zone"), $__angular2_47_src_47_core_47_zone_47_vm_95_turn_95_zone__ && $__angular2_47_src_47_core_47_zone_47_vm_95_turn_95_zone__.__esModule && $__angular2_47_src_47_core_47_zone_47_vm_95_turn_95_zone__ || {default: $__angular2_47_src_47_core_47_zone_47_vm_95_turn_95_zone__}).VmTurnZone;
var LifeCycle = ($__angular2_47_src_47_core_47_life_95_cycle_47_life_95_cycle__ = require("angular2/src/core/life_cycle/life_cycle"), $__angular2_47_src_47_core_47_life_95_cycle_47_life_95_cycle__ && $__angular2_47_src_47_core_47_life_95_cycle_47_life_95_cycle__.__esModule && $__angular2_47_src_47_core_47_life_95_cycle_47_life_95_cycle__ || {default: $__angular2_47_src_47_core_47_life_95_cycle_47_life_95_cycle__}).LifeCycle;
var $__17 = ($__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__ = require("angular2/src/core/compiler/shadow_dom_strategy"), $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__ && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__.__esModule && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__ || {default: $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__}),
    ShadowDomStrategy = $__17.ShadowDomStrategy,
    NativeShadowDomStrategy = $__17.NativeShadowDomStrategy,
    EmulatedUnscopedShadowDomStrategy = $__17.EmulatedUnscopedShadowDomStrategy;
var XHR = ($__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr__ = require("angular2/src/core/compiler/xhr/xhr"), $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr__ && $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr__.__esModule && $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr__ || {default: $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr__}).XHR;
var XHRImpl = ($__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr_95_impl__ = require("angular2/src/core/compiler/xhr/xhr_impl"), $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr_95_impl__ && $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr_95_impl__.__esModule && $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr_95_impl__ || {default: $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr_95_impl__}).XHRImpl;
var $__20 = ($__angular2_47_src_47_core_47_events_47_event_95_manager__ = require("angular2/src/core/events/event_manager"), $__angular2_47_src_47_core_47_events_47_event_95_manager__ && $__angular2_47_src_47_core_47_events_47_event_95_manager__.__esModule && $__angular2_47_src_47_core_47_events_47_event_95_manager__ || {default: $__angular2_47_src_47_core_47_events_47_event_95_manager__}),
    EventManager = $__20.EventManager,
    DomEventsPlugin = $__20.DomEventsPlugin;
var HammerGesturesPlugin = ($__angular2_47_src_47_core_47_events_47_hammer_95_gestures__ = require("angular2/src/core/events/hammer_gestures"), $__angular2_47_src_47_core_47_events_47_hammer_95_gestures__ && $__angular2_47_src_47_core_47_events_47_hammer_95_gestures__.__esModule && $__angular2_47_src_47_core_47_events_47_hammer_95_gestures__ || {default: $__angular2_47_src_47_core_47_events_47_hammer_95_gestures__}).HammerGesturesPlugin;
var Binding = ($__angular2_47_src_47_di_47_binding__ = require("angular2/src/di/binding"), $__angular2_47_src_47_di_47_binding__ && $__angular2_47_src_47_di_47_binding__.__esModule && $__angular2_47_src_47_di_47_binding__ || {default: $__angular2_47_src_47_di_47_binding__}).Binding;
var ComponentUrlMapper = ($__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__ = require("angular2/src/core/compiler/component_url_mapper"), $__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__ && $__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__.__esModule && $__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__ || {default: $__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__}).ComponentUrlMapper;
var UrlResolver = ($__angular2_47_src_47_core_47_compiler_47_url_95_resolver__ = require("angular2/src/core/compiler/url_resolver"), $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__ && $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__.__esModule && $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__ || {default: $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__}).UrlResolver;
var StyleUrlResolver = ($__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__ = require("angular2/src/core/compiler/style_url_resolver"), $__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__ && $__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__.__esModule && $__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__ || {default: $__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__}).StyleUrlResolver;
var StyleInliner = ($__angular2_47_src_47_core_47_compiler_47_style_95_inliner__ = require("angular2/src/core/compiler/style_inliner"), $__angular2_47_src_47_core_47_compiler_47_style_95_inliner__ && $__angular2_47_src_47_core_47_compiler_47_style_95_inliner__.__esModule && $__angular2_47_src_47_core_47_compiler_47_style_95_inliner__ || {default: $__angular2_47_src_47_core_47_compiler_47_style_95_inliner__}).StyleInliner;
var CssProcessor = ($__angular2_47_src_47_core_47_compiler_47_css_95_processor__ = require("angular2/src/core/compiler/css_processor"), $__angular2_47_src_47_core_47_compiler_47_css_95_processor__ && $__angular2_47_src_47_core_47_compiler_47_css_95_processor__.__esModule && $__angular2_47_src_47_core_47_compiler_47_css_95_processor__ || {default: $__angular2_47_src_47_core_47_compiler_47_css_95_processor__}).CssProcessor;
var _rootInjector;
var _rootBindings = [bind(Reflector).toValue(reflector)];
var appViewToken = new OpaqueToken('AppView');
var appChangeDetectorToken = new OpaqueToken('AppChangeDetector');
var appElementToken = new OpaqueToken('AppElement');
var appComponentAnnotatedTypeToken = new OpaqueToken('AppComponentAnnotatedType');
var appDocumentToken = new OpaqueToken('AppDocument');
function _injectorBindings(appComponentType) {
  return assert.returnType(([bind(appDocumentToken).toValue(DOM.defaultDoc()), bind(appComponentAnnotatedTypeToken).toFactory((function(reader) {
    return reader.read(appComponentType);
  }), [DirectiveMetadataReader]), bind(appElementToken).toFactory((function(appComponentAnnotatedType, appDocument) {
    var selector = appComponentAnnotatedType.annotation.selector;
    var element = DOM.querySelector(appDocument, selector);
    if (isBlank(element)) {
      throw new BaseException(("The app selector \"" + selector + "\" did not match any elements"));
    }
    return element;
  }), [appComponentAnnotatedTypeToken, appDocumentToken]), bind(appViewToken).toAsyncFactory((function(changeDetection, compiler, injector, appElement, appComponentAnnotatedType, strategy, eventManager, reflector) {
    return compiler.compile(appComponentAnnotatedType.type).then((function(protoView) {
      var appProtoView = ProtoView.createRootProtoView(protoView, appElement, appComponentAnnotatedType, changeDetection.createProtoChangeDetector('root'), strategy);
      var view = appProtoView.instantiate(null, eventManager, reflector);
      view.hydrate(injector, null, new Object());
      return view;
    }));
  }), [ChangeDetection, Compiler, Injector, appElementToken, appComponentAnnotatedTypeToken, ShadowDomStrategy, EventManager, Reflector]), bind(appChangeDetectorToken).toFactory((function(rootView) {
    return rootView.changeDetector;
  }), [appViewToken]), bind(appComponentType).toFactory((function(rootView) {
    return rootView.elementInjectors[0].getComponent();
  }), [appViewToken]), bind(LifeCycle).toFactory((function(exceptionHandler) {
    return new LifeCycle(exceptionHandler, null, assertionsEnabled());
  }), [ExceptionHandler]), bind(EventManager).toFactory((function(zone) {
    var plugins = [new HammerGesturesPlugin(), new DomEventsPlugin()];
    return new EventManager(plugins, zone);
  }), [VmTurnZone]), bind(ShadowDomStrategy).toFactory((function(styleUrlResolver, doc) {
    return new EmulatedUnscopedShadowDomStrategy(styleUrlResolver, doc.head);
  }), [StyleUrlResolver, appDocumentToken]), Compiler, CompilerCache, TemplateResolver, bind(ChangeDetection).toValue(dynamicChangeDetection), TemplateLoader, DirectiveMetadataReader, Parser, Lexer, ExceptionHandler, bind(XHR).toValue(new XHRImpl()), ComponentUrlMapper, UrlResolver, StyleUrlResolver, StyleInliner, bind(CssProcessor).toFactory((function() {
    return new CssProcessor(null);
  }), [])]), assert.genericType(List, Binding));
}
function _createVmZone(givenReporter) {
  assert.argumentTypes(givenReporter, Function);
  var defaultErrorReporter = (function(exception, stackTrace) {
    var longStackTrace = ListWrapper.join(stackTrace, "\n\n-----async gap-----\n");
    print((exception + "\n\n" + longStackTrace));
    throw exception;
  });
  var reporter = isPresent(givenReporter) ? givenReporter : defaultErrorReporter;
  var zone = new VmTurnZone({enableLongStackTrace: assertionsEnabled()});
  zone.initCallbacks({onErrorHandler: reporter});
  return assert.returnType((zone), VmTurnZone);
}
Object.defineProperty(_createVmZone, "parameters", {get: function() {
    return [[Function]];
  }});
function bootstrap(appComponentType) {
  var bindings = arguments[1] !== (void 0) ? arguments[1] : null;
  var givenBootstrapErrorReporter = arguments[2] !== (void 0) ? arguments[2] : null;
  assert.argumentTypes(appComponentType, Type, bindings, assert.genericType(List, Binding), givenBootstrapErrorReporter, Function);
  BrowserDomAdapter.makeCurrent();
  var bootstrapProcess = PromiseWrapper.completer();
  var zone = _createVmZone(givenBootstrapErrorReporter);
  zone.run((function() {
    var appInjector = _createAppInjector(appComponentType, bindings, zone);
    PromiseWrapper.then(appInjector.asyncGet(appViewToken), (function(rootView) {
      var lc = appInjector.get(LifeCycle);
      lc.registerWith(zone, rootView.changeDetector);
      lc.tick();
      bootstrapProcess.resolve(appInjector);
    }), (function(err) {
      bootstrapProcess.reject(err);
    }));
  }));
  return assert.returnType((bootstrapProcess.promise), Promise);
}
Object.defineProperty(bootstrap, "parameters", {get: function() {
    return [[Type], [assert.genericType(List, Binding)], [Function]];
  }});
function _createAppInjector(appComponentType, bindings, zone) {
  assert.argumentTypes(appComponentType, Type, bindings, assert.genericType(List, Binding), zone, VmTurnZone);
  if (isBlank(_rootInjector))
    _rootInjector = new Injector(_rootBindings);
  var mergedBindings = isPresent(bindings) ? ListWrapper.concat(_injectorBindings(appComponentType), bindings) : _injectorBindings(appComponentType);
  ListWrapper.push(mergedBindings, bind(VmTurnZone).toValue(zone));
  return assert.returnType((_rootInjector.createChild(mergedBindings)), Injector);
}
Object.defineProperty(_createAppInjector, "parameters", {get: function() {
    return [[Type], [assert.genericType(List, Binding)], [VmTurnZone]];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/core/application.map

//# sourceMappingURL=./application.map