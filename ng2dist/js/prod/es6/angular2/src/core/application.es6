import {Injector,
  bind,
  OpaqueToken} from 'angular2/di';
import {Type,
  FIELD,
  isBlank,
  isPresent,
  BaseException,
  assertionsEnabled,
  print} from 'angular2/src/facade/lang';
import {BrowserDomAdapter} from 'angular2/src/dom/browser_adapter';
import {DOM} from 'angular2/src/dom/dom_adapter';
import {Compiler,
  CompilerCache} from './compiler/compiler';
import {ProtoView} from './compiler/view';
import {Reflector,
  reflector} from 'angular2/src/reflection/reflection';
import {Parser,
  Lexer,
  ChangeDetection,
  dynamicChangeDetection,
  jitChangeDetection} from 'angular2/change_detection';
import {ExceptionHandler} from './exception_handler';
import {TemplateLoader} from './compiler/template_loader';
import {TemplateResolver} from './compiler/template_resolver';
import {DirectiveMetadataReader} from './compiler/directive_metadata_reader';
import {List,
  ListWrapper} from 'angular2/src/facade/collection';
import {Promise,
  PromiseWrapper} from 'angular2/src/facade/async';
import {VmTurnZone} from 'angular2/src/core/zone/vm_turn_zone';
import {LifeCycle} from 'angular2/src/core/life_cycle/life_cycle';
import {ShadowDomStrategy,
  NativeShadowDomStrategy,
  EmulatedUnscopedShadowDomStrategy} from 'angular2/src/core/compiler/shadow_dom_strategy';
import {XHR} from 'angular2/src/core/compiler/xhr/xhr';
import {XHRImpl} from 'angular2/src/core/compiler/xhr/xhr_impl';
import {EventManager,
  DomEventsPlugin} from 'angular2/src/core/events/event_manager';
import {HammerGesturesPlugin} from 'angular2/src/core/events/hammer_gestures';
import {Binding} from 'angular2/src/di/binding';
import {ComponentUrlMapper} from 'angular2/src/core/compiler/component_url_mapper';
import {UrlResolver} from 'angular2/src/core/compiler/url_resolver';
import {StyleUrlResolver} from 'angular2/src/core/compiler/style_url_resolver';
import {StyleInliner} from 'angular2/src/core/compiler/style_inliner';
import {CssProcessor} from 'angular2/src/core/compiler/css_processor';
var _rootInjector;
var _rootBindings = [bind(Reflector).toValue(reflector)];
export var appViewToken = new OpaqueToken('AppView');
export var appChangeDetectorToken = new OpaqueToken('AppChangeDetector');
export var appElementToken = new OpaqueToken('AppElement');
export var appComponentAnnotatedTypeToken = new OpaqueToken('AppComponentAnnotatedType');
export var appDocumentToken = new OpaqueToken('AppDocument');
function _injectorBindings(appComponentType) {
  return [bind(appDocumentToken).toValue(DOM.defaultDoc()), bind(appComponentAnnotatedTypeToken).toFactory((reader) => {
    return reader.read(appComponentType);
  }, [DirectiveMetadataReader]), bind(appElementToken).toFactory((appComponentAnnotatedType, appDocument) => {
    var selector = appComponentAnnotatedType.annotation.selector;
    var element = DOM.querySelector(appDocument, selector);
    if (isBlank(element)) {
      throw new BaseException(`The app selector "${selector}" did not match any elements`);
    }
    return element;
  }, [appComponentAnnotatedTypeToken, appDocumentToken]), bind(appViewToken).toAsyncFactory((changeDetection, compiler, injector, appElement, appComponentAnnotatedType, strategy, eventManager, reflector) => {
    return compiler.compile(appComponentAnnotatedType.type).then((protoView) => {
      var appProtoView = ProtoView.createRootProtoView(protoView, appElement, appComponentAnnotatedType, changeDetection.createProtoChangeDetector('root'), strategy);
      var view = appProtoView.instantiate(null, eventManager, reflector);
      view.hydrate(injector, null, new Object());
      return view;
    });
  }, [ChangeDetection, Compiler, Injector, appElementToken, appComponentAnnotatedTypeToken, ShadowDomStrategy, EventManager, Reflector]), bind(appChangeDetectorToken).toFactory((rootView) => rootView.changeDetector, [appViewToken]), bind(appComponentType).toFactory((rootView) => rootView.elementInjectors[0].getComponent(), [appViewToken]), bind(LifeCycle).toFactory((exceptionHandler) => new LifeCycle(exceptionHandler, null, assertionsEnabled()), [ExceptionHandler]), bind(EventManager).toFactory((zone) => {
    var plugins = [new HammerGesturesPlugin(), new DomEventsPlugin()];
    return new EventManager(plugins, zone);
  }, [VmTurnZone]), bind(ShadowDomStrategy).toFactory((styleUrlResolver, doc) => new EmulatedUnscopedShadowDomStrategy(styleUrlResolver, doc.head), [StyleUrlResolver, appDocumentToken]), Compiler, CompilerCache, TemplateResolver, bind(ChangeDetection).toValue(dynamicChangeDetection), TemplateLoader, DirectiveMetadataReader, Parser, Lexer, ExceptionHandler, bind(XHR).toValue(new XHRImpl()), ComponentUrlMapper, UrlResolver, StyleUrlResolver, StyleInliner, bind(CssProcessor).toFactory(() => new CssProcessor(null), [])];
}
function _createVmZone(givenReporter) {
  var defaultErrorReporter = (exception, stackTrace) => {
    var longStackTrace = ListWrapper.join(stackTrace, "\n\n-----async gap-----\n");
    print(`${exception}\n\n${longStackTrace}`);
    throw exception;
  };
  var reporter = isPresent(givenReporter) ? givenReporter : defaultErrorReporter;
  var zone = new VmTurnZone({enableLongStackTrace: assertionsEnabled()});
  zone.initCallbacks({onErrorHandler: reporter});
  return zone;
}
Object.defineProperty(_createVmZone, "parameters", {get: function() {
    return [[Function]];
  }});
export function bootstrap(appComponentType, bindings = null, givenBootstrapErrorReporter = null) {
  BrowserDomAdapter.makeCurrent();
  var bootstrapProcess = PromiseWrapper.completer();
  var zone = _createVmZone(givenBootstrapErrorReporter);
  zone.run(() => {
    var appInjector = _createAppInjector(appComponentType, bindings, zone);
    PromiseWrapper.then(appInjector.asyncGet(appViewToken), (rootView) => {
      var lc = appInjector.get(LifeCycle);
      lc.registerWith(zone, rootView.changeDetector);
      lc.tick();
      bootstrapProcess.resolve(appInjector);
    }, (err) => {
      bootstrapProcess.reject(err);
    });
  });
  return bootstrapProcess.promise;
}
Object.defineProperty(bootstrap, "parameters", {get: function() {
    return [[Type], [assert.genericType(List, Binding)], [Function]];
  }});
function _createAppInjector(appComponentType, bindings, zone) {
  if (isBlank(_rootInjector))
    _rootInjector = new Injector(_rootBindings);
  var mergedBindings = isPresent(bindings) ? ListWrapper.concat(_injectorBindings(appComponentType), bindings) : _injectorBindings(appComponentType);
  ListWrapper.push(mergedBindings, bind(VmTurnZone).toValue(zone));
  return _rootInjector.createChild(mergedBindings);
}
Object.defineProperty(_createAppInjector, "parameters", {get: function() {
    return [[Type], [assert.genericType(List, Binding)], [VmTurnZone]];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/core/application.map

//# sourceMappingURL=./application.map