"use strict";
Object.defineProperties(module.exports, {
  View: {get: function() {
      return View;
    }},
  ProtoView: {get: function() {
      return ProtoView;
    }},
  ElementBindingMemento: {get: function() {
      return ElementBindingMemento;
    }},
  DirectiveBindingMemento: {get: function() {
      return DirectiveBindingMemento;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/src/core/compiler/view";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_src_47_dom_47_dom_95_adapter__,
    $__angular2_47_src_47_facade_47_async__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_change_95_detection__,
    $__angular2_47_src_47_core_47_compiler_47_element_95_injector__,
    $__angular2_47_src_47_core_47_compiler_47_binding_95_propagation_95_config__,
    $__angular2_47_src_47_core_47_compiler_47_element_95_binder__,
    $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__,
    $__angular2_47_src_47_reflection_47_types__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_di__,
    $__angular2_47_src_47_core_47_dom_47_element__,
    $__angular2_47_src_47_core_47_compiler_47_view_95_container__,
    $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_light_95_dom__,
    $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__,
    $__angular2_47_src_47_core_47_compiler_47_view_95_pool__,
    $__angular2_47_src_47_core_47_events_47_event_95_manager__,
    $__angular2_47_src_47_reflection_47_reflection__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var Promise = ($__angular2_47_src_47_facade_47_async__ = require("angular2/src/facade/async"), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}).Promise;
var $__3 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    ListWrapper = $__3.ListWrapper,
    MapWrapper = $__3.MapWrapper,
    Map = $__3.Map,
    StringMapWrapper = $__3.StringMapWrapper,
    List = $__3.List;
var $__4 = ($__angular2_47_change_95_detection__ = require("angular2/change_detection"), $__angular2_47_change_95_detection__ && $__angular2_47_change_95_detection__.__esModule && $__angular2_47_change_95_detection__ || {default: $__angular2_47_change_95_detection__}),
    AST = $__4.AST,
    ContextWithVariableBindings = $__4.ContextWithVariableBindings,
    ChangeDispatcher = $__4.ChangeDispatcher,
    ProtoChangeDetector = $__4.ProtoChangeDetector,
    ChangeDetector = $__4.ChangeDetector,
    ChangeRecord = $__4.ChangeRecord;
var $__5 = ($__angular2_47_src_47_core_47_compiler_47_element_95_injector__ = require("./element_injector"), $__angular2_47_src_47_core_47_compiler_47_element_95_injector__ && $__angular2_47_src_47_core_47_compiler_47_element_95_injector__.__esModule && $__angular2_47_src_47_core_47_compiler_47_element_95_injector__ || {default: $__angular2_47_src_47_core_47_compiler_47_element_95_injector__}),
    ProtoElementInjector = $__5.ProtoElementInjector,
    ElementInjector = $__5.ElementInjector,
    PreBuiltObjects = $__5.PreBuiltObjects;
var BindingPropagationConfig = ($__angular2_47_src_47_core_47_compiler_47_binding_95_propagation_95_config__ = require("./binding_propagation_config"), $__angular2_47_src_47_core_47_compiler_47_binding_95_propagation_95_config__ && $__angular2_47_src_47_core_47_compiler_47_binding_95_propagation_95_config__.__esModule && $__angular2_47_src_47_core_47_compiler_47_binding_95_propagation_95_config__ || {default: $__angular2_47_src_47_core_47_compiler_47_binding_95_propagation_95_config__}).BindingPropagationConfig;
var ElementBinder = ($__angular2_47_src_47_core_47_compiler_47_element_95_binder__ = require("./element_binder"), $__angular2_47_src_47_core_47_compiler_47_element_95_binder__ && $__angular2_47_src_47_core_47_compiler_47_element_95_binder__.__esModule && $__angular2_47_src_47_core_47_compiler_47_element_95_binder__ || {default: $__angular2_47_src_47_core_47_compiler_47_element_95_binder__}).ElementBinder;
var DirectiveMetadata = ($__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__ = require("./directive_metadata"), $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__ && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__.__esModule && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__ || {default: $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__}).DirectiveMetadata;
var SetterFn = ($__angular2_47_src_47_reflection_47_types__ = require("angular2/src/reflection/types"), $__angular2_47_src_47_reflection_47_types__ && $__angular2_47_src_47_reflection_47_types__.__esModule && $__angular2_47_src_47_reflection_47_types__ || {default: $__angular2_47_src_47_reflection_47_types__}).SetterFn;
var $__10 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    FIELD = $__10.FIELD,
    IMPLEMENTS = $__10.IMPLEMENTS,
    int = $__10.int,
    isPresent = $__10.isPresent,
    isBlank = $__10.isBlank,
    BaseException = $__10.BaseException;
var Injector = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}).Injector;
var NgElement = ($__angular2_47_src_47_core_47_dom_47_element__ = require("angular2/src/core/dom/element"), $__angular2_47_src_47_core_47_dom_47_element__ && $__angular2_47_src_47_core_47_dom_47_element__.__esModule && $__angular2_47_src_47_core_47_dom_47_element__ || {default: $__angular2_47_src_47_core_47_dom_47_element__}).NgElement;
var ViewContainer = ($__angular2_47_src_47_core_47_compiler_47_view_95_container__ = require("./view_container"), $__angular2_47_src_47_core_47_compiler_47_view_95_container__ && $__angular2_47_src_47_core_47_compiler_47_view_95_container__.__esModule && $__angular2_47_src_47_core_47_compiler_47_view_95_container__ || {default: $__angular2_47_src_47_core_47_compiler_47_view_95_container__}).ViewContainer;
var $__14 = ($__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_light_95_dom__ = require("./shadow_dom_emulation/light_dom"), $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_light_95_dom__ && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_light_95_dom__.__esModule && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_light_95_dom__ || {default: $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_light_95_dom__}),
    LightDom = $__14.LightDom,
    DestinationLightDom = $__14.DestinationLightDom;
var ShadowDomStrategy = ($__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__ = require("./shadow_dom_strategy"), $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__ && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__.__esModule && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__ || {default: $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__}).ShadowDomStrategy;
var ViewPool = ($__angular2_47_src_47_core_47_compiler_47_view_95_pool__ = require("./view_pool"), $__angular2_47_src_47_core_47_compiler_47_view_95_pool__ && $__angular2_47_src_47_core_47_compiler_47_view_95_pool__.__esModule && $__angular2_47_src_47_core_47_compiler_47_view_95_pool__ || {default: $__angular2_47_src_47_core_47_compiler_47_view_95_pool__}).ViewPool;
var EventManager = ($__angular2_47_src_47_core_47_events_47_event_95_manager__ = require("angular2/src/core/events/event_manager"), $__angular2_47_src_47_core_47_events_47_event_95_manager__ && $__angular2_47_src_47_core_47_events_47_event_95_manager__.__esModule && $__angular2_47_src_47_core_47_events_47_event_95_manager__ || {default: $__angular2_47_src_47_core_47_events_47_event_95_manager__}).EventManager;
var Reflector = ($__angular2_47_src_47_reflection_47_reflection__ = require("angular2/src/reflection/reflection"), $__angular2_47_src_47_reflection_47_reflection__ && $__angular2_47_src_47_reflection_47_reflection__.__esModule && $__angular2_47_src_47_reflection_47_reflection__ || {default: $__angular2_47_src_47_reflection_47_reflection__}).Reflector;
var NG_BINDING_CLASS = 'ng-binding';
var NG_BINDING_CLASS_SELECTOR = '.ng-binding';
var VIEW_POOL_CAPACITY = 10000;
var VIEW_POOL_PREFILL = 0;
var View = function View(proto, nodes, protoChangeDetector, protoContextLocals) {
  assert.argumentTypes(proto, ProtoView, nodes, List, protoChangeDetector, ProtoChangeDetector, protoContextLocals, Map);
  this.proto = proto;
  this.nodes = nodes;
  this.changeDetector = protoChangeDetector.instantiate(this);
  this.elementInjectors = null;
  this.rootElementInjectors = null;
  this.textNodes = null;
  this.bindElements = null;
  this.componentChildViews = null;
  this.viewContainers = null;
  this.preBuiltObjects = null;
  this.context = null;
  this.contextWithLocals = (MapWrapper.size(protoContextLocals) > 0) ? new ContextWithVariableBindings(null, MapWrapper.clone(protoContextLocals)) : null;
};
($traceurRuntime.createClass)(View, {
  init: function(elementInjectors, rootElementInjectors, textNodes, bindElements, viewContainers, preBuiltObjects, componentChildViews) {
    assert.argumentTypes(elementInjectors, List, rootElementInjectors, List, textNodes, List, bindElements, List, viewContainers, List, preBuiltObjects, List, componentChildViews, List);
    this.elementInjectors = elementInjectors;
    this.rootElementInjectors = rootElementInjectors;
    this.textNodes = textNodes;
    this.bindElements = bindElements;
    this.viewContainers = viewContainers;
    this.preBuiltObjects = preBuiltObjects;
    this.componentChildViews = componentChildViews;
  },
  setLocal: function(contextName, value) {
    assert.argumentTypes(contextName, assert.type.string, value, assert.type.any);
    if (!this.hydrated())
      throw new BaseException('Cannot set locals on dehydrated view.');
    if (!MapWrapper.contains(this.proto.variableBindings, contextName)) {
      return ;
    }
    var templateName = MapWrapper.get(this.proto.variableBindings, contextName);
    this.context.set(templateName, value);
  },
  hydrated: function() {
    return isPresent(this.context);
  },
  _hydrateContext: function(newContext) {
    if (isPresent(this.contextWithLocals)) {
      this.contextWithLocals.parent = newContext;
      this.context = this.contextWithLocals;
    } else {
      this.context = newContext;
    }
    this.changeDetector.hydrate(this.context);
  },
  _dehydrateContext: function() {
    if (isPresent(this.contextWithLocals)) {
      this.contextWithLocals.clearValues();
    }
    this.context = null;
    this.changeDetector.dehydrate();
  },
  hydrate: function(appInjector, hostElementInjector, context) {
    assert.argumentTypes(appInjector, Injector, hostElementInjector, ElementInjector, context, Object);
    if (this.hydrated())
      throw new BaseException('The view is already hydrated.');
    this._hydrateContext(context);
    for (var i = 0; i < this.viewContainers.length; i++) {
      this.viewContainers[i].hydrate(appInjector, hostElementInjector);
    }
    var binders = this.proto.elementBinders;
    var componentChildViewIndex = 0;
    for (var i = 0; i < binders.length; ++i) {
      var componentDirective = binders[i].componentDirective;
      var shadowDomAppInjector = null;
      if (isPresent(componentDirective)) {
        var services = componentDirective.annotation.componentServices;
        if (isPresent(services))
          shadowDomAppInjector = appInjector.createChild(services);
        else {
          shadowDomAppInjector = appInjector;
        }
      } else {
        shadowDomAppInjector = null;
      }
      var elementInjector = this.elementInjectors[i];
      if (isPresent(elementInjector)) {
        elementInjector.instantiateDirectives(appInjector, shadowDomAppInjector, this.preBuiltObjects[i]);
        var exportImplicitName = elementInjector.getExportImplicitName();
        if (elementInjector.isExportingComponent()) {
          this.context.set(exportImplicitName, elementInjector.getComponent());
        } else if (elementInjector.isExportingElement()) {
          this.context.set(exportImplicitName, elementInjector.getNgElement().domElement);
        }
      }
      if (isPresent(componentDirective)) {
        this.componentChildViews[componentChildViewIndex++].hydrate(shadowDomAppInjector, elementInjector, elementInjector.getComponent());
      }
    }
    for (var i = 0; i < binders.length; ++i) {
      var componentDirective = binders[i].componentDirective;
      if (isPresent(componentDirective)) {
        var lightDom = this.preBuiltObjects[i].lightDom;
        if (isPresent(lightDom)) {
          lightDom.redistribute();
        }
      }
    }
  },
  dehydrate: function() {
    for (var i = 0; i < this.componentChildViews.length; i++) {
      this.componentChildViews[i].dehydrate();
    }
    for (var i = 0; i < this.elementInjectors.length; i++) {
      if (isPresent(this.elementInjectors[i])) {
        this.elementInjectors[i].clearDirectives();
      }
    }
    if (isPresent(this.viewContainers)) {
      for (var i = 0; i < this.viewContainers.length; i++) {
        this.viewContainers[i].dehydrate();
      }
    }
    this._dehydrateContext();
  },
  triggerEventHandlers: function(eventName, eventObj, binderIndex) {
    assert.argumentTypes(eventName, assert.type.string, eventObj, assert.type.any, binderIndex, int);
    var handlers = this.proto.eventHandlers[binderIndex];
    if (isBlank(handlers))
      return ;
    var handler = StringMapWrapper.get(handlers, eventName);
    if (isBlank(handler))
      return ;
    handler(eventObj, this);
  },
  onRecordChange: function(directiveMemento, records) {
    assert.argumentTypes(directiveMemento, assert.type.any, records, List);
    this._invokeMementos(records);
    if (directiveMemento instanceof DirectiveMemento) {
      this._notifyDirectiveAboutChanges(directiveMemento, records);
    }
  },
  _invokeMementos: function(records) {
    assert.argumentTypes(records, List);
    for (var i = 0; i < records.length; ++i) {
      this._invokeMementoFor(records[i]);
    }
  },
  _notifyDirectiveAboutChanges: function(directiveMemento, records) {
    assert.argumentTypes(directiveMemento, assert.type.any, records, List);
    var dir = directiveMemento.directive(this.elementInjectors);
    var binding = directiveMemento.directiveBinding(this.elementInjectors);
    if (binding.callOnChange) {
      dir.onChange(this._collectChanges(records));
    }
  },
  _invokeMementoFor: function(record) {
    assert.argumentTypes(record, ChangeRecord);
    var memento = record.bindingMemento;
    if (memento instanceof DirectiveBindingMemento) {
      var directiveMemento = assert.type(memento, DirectiveBindingMemento);
      directiveMemento.invoke(record, this.elementInjectors);
    } else if (memento instanceof ElementBindingMemento) {
      var elementMemento = assert.type(memento, ElementBindingMemento);
      elementMemento.invoke(record, this.bindElements);
    } else {
      var textNodeIndex = assert.type(memento, assert.type.number);
      DOM.setText(this.textNodes[textNodeIndex], record.currentValue);
    }
  },
  _collectChanges: function(records) {
    assert.argumentTypes(records, List);
    var changes = StringMapWrapper.create();
    for (var i = 0; i < records.length; ++i) {
      var record = records[i];
      var propertyUpdate = new PropertyUpdate(record.currentValue, record.previousValue);
      StringMapWrapper.set(changes, record.bindingMemento._setterName, propertyUpdate);
    }
    return changes;
  }
}, {});
Object.defineProperty(View, "annotations", {get: function() {
    return [new IMPLEMENTS(ChangeDispatcher)];
  }});
Object.defineProperty(View, "parameters", {get: function() {
    return [[ProtoView], [List], [ProtoChangeDetector], [Map]];
  }});
Object.defineProperty(View.prototype.init, "parameters", {get: function() {
    return [[List], [List], [List], [List], [List], [List], [List]];
  }});
Object.defineProperty(View.prototype.setLocal, "parameters", {get: function() {
    return [[assert.type.string], []];
  }});
Object.defineProperty(View.prototype.hydrate, "parameters", {get: function() {
    return [[Injector], [ElementInjector], [Object]];
  }});
Object.defineProperty(View.prototype.triggerEventHandlers, "parameters", {get: function() {
    return [[assert.type.string], [], [int]];
  }});
Object.defineProperty(View.prototype.onRecordChange, "parameters", {get: function() {
    return [[], [List]];
  }});
Object.defineProperty(View.prototype._invokeMementos, "parameters", {get: function() {
    return [[List]];
  }});
Object.defineProperty(View.prototype._notifyDirectiveAboutChanges, "parameters", {get: function() {
    return [[], [List]];
  }});
Object.defineProperty(View.prototype._invokeMementoFor, "parameters", {get: function() {
    return [[ChangeRecord]];
  }});
Object.defineProperty(View.prototype._collectChanges, "parameters", {get: function() {
    return [[List]];
  }});
var ProtoView = function ProtoView(template, protoChangeDetector, shadowDomStrategy) {
  assert.argumentTypes(template, assert.type.any, protoChangeDetector, ProtoChangeDetector, shadowDomStrategy, ShadowDomStrategy);
  this.element = template;
  this.elementBinders = [];
  this.variableBindings = MapWrapper.create();
  this.protoContextLocals = MapWrapper.create();
  this.protoChangeDetector = protoChangeDetector;
  this.textNodesWithBindingCount = 0;
  this.elementsWithBindingCount = 0;
  this.instantiateInPlace = false;
  this.rootBindingOffset = (isPresent(this.element) && DOM.hasClass(this.element, NG_BINDING_CLASS)) ? 1 : 0;
  this.isTemplateElement = DOM.isTemplateElement(this.element);
  this.shadowDomStrategy = shadowDomStrategy;
  this._viewPool = new ViewPool(VIEW_POOL_CAPACITY);
  this.stylePromises = [];
  this.eventHandlers = [];
};
var $ProtoView = ProtoView;
($traceurRuntime.createClass)(ProtoView, {
  instantiate: function(hostElementInjector, eventManager, reflector) {
    assert.argumentTypes(hostElementInjector, ElementInjector, eventManager, EventManager, reflector, Reflector);
    if (this._viewPool.length() == 0)
      this._preFillPool(hostElementInjector, eventManager, reflector);
    var view = this._viewPool.pop();
    return assert.returnType((isPresent(view) ? view : this._instantiate(hostElementInjector, eventManager, reflector)), View);
  },
  _preFillPool: function(hostElementInjector, eventManager, reflector) {
    assert.argumentTypes(hostElementInjector, ElementInjector, eventManager, EventManager, reflector, Reflector);
    for (var i = 0; i < VIEW_POOL_PREFILL; i++) {
      this._viewPool.push(this._instantiate(hostElementInjector, eventManager, reflector));
    }
  },
  _instantiate: function(hostElementInjector, eventManager, reflector) {
    assert.argumentTypes(hostElementInjector, ElementInjector, eventManager, EventManager, reflector, Reflector);
    var rootElementClone = this.instantiateInPlace ? this.element : DOM.importIntoDoc(this.element);
    var elementsWithBindingsDynamic;
    if (this.isTemplateElement) {
      elementsWithBindingsDynamic = DOM.querySelectorAll(DOM.content(rootElementClone), NG_BINDING_CLASS_SELECTOR);
    } else {
      elementsWithBindingsDynamic = DOM.getElementsByClassName(rootElementClone, NG_BINDING_CLASS);
    }
    var elementsWithBindings = ListWrapper.createFixedSize(elementsWithBindingsDynamic.length);
    for (var binderIdx = 0; binderIdx < elementsWithBindingsDynamic.length; ++binderIdx) {
      elementsWithBindings[binderIdx] = elementsWithBindingsDynamic[binderIdx];
    }
    var viewNodes;
    if (this.isTemplateElement) {
      var childNode = DOM.firstChild(DOM.content(rootElementClone));
      viewNodes = [];
      while (childNode != null) {
        ListWrapper.push(viewNodes, childNode);
        childNode = DOM.nextSibling(childNode);
      }
    } else {
      viewNodes = [rootElementClone];
    }
    var view = new View(this, viewNodes, this.protoChangeDetector, this.protoContextLocals);
    var binders = this.elementBinders;
    var elementInjectors = ListWrapper.createFixedSize(binders.length);
    var eventHandlers = ListWrapper.createFixedSize(binders.length);
    var rootElementInjectors = [];
    var textNodes = [];
    var elementsWithPropertyBindings = [];
    var preBuiltObjects = ListWrapper.createFixedSize(binders.length);
    var viewContainers = [];
    var componentChildViews = [];
    for (var binderIdx = 0; binderIdx < binders.length; binderIdx++) {
      var binder = binders[binderIdx];
      var element = void 0;
      if (binderIdx === 0 && this.rootBindingOffset === 1) {
        element = rootElementClone;
      } else {
        element = elementsWithBindings[binderIdx - this.rootBindingOffset];
      }
      var elementInjector = null;
      var protoElementInjector = binder.protoElementInjector;
      if (isPresent(protoElementInjector)) {
        if (isPresent(protoElementInjector.parent)) {
          var parentElementInjector = elementInjectors[protoElementInjector.parent.index];
          elementInjector = protoElementInjector.instantiate(parentElementInjector, null, reflector);
        } else {
          elementInjector = protoElementInjector.instantiate(null, hostElementInjector, reflector);
          ListWrapper.push(rootElementInjectors, elementInjector);
        }
      }
      elementInjectors[binderIdx] = elementInjector;
      if (binder.hasElementPropertyBindings) {
        ListWrapper.push(elementsWithPropertyBindings, element);
      }
      var textNodeIndices = binder.textNodeIndices;
      if (isPresent(textNodeIndices)) {
        var childNode = DOM.firstChild(DOM.templateAwareRoot(element));
        for (var j = 0,
            k = 0; j < textNodeIndices.length; j++) {
          for (var index = textNodeIndices[j]; k < index; k++) {
            childNode = DOM.nextSibling(childNode);
          }
          ListWrapper.push(textNodes, childNode);
        }
      }
      var lightDom = null;
      var bindingPropagationConfig = null;
      if (isPresent(binder.componentDirective)) {
        var strategy = this.shadowDomStrategy;
        var childView = binder.nestedProtoView.instantiate(elementInjector, eventManager, reflector);
        view.changeDetector.addChild(childView.changeDetector);
        lightDom = strategy.constructLightDom(view, childView, element);
        strategy.attachTemplate(element, childView);
        bindingPropagationConfig = new BindingPropagationConfig(view.changeDetector);
        ListWrapper.push(componentChildViews, childView);
      }
      var viewContainer = null;
      if (isPresent(binder.viewportDirective)) {
        var destLightDom = this._directParentElementLightDom(protoElementInjector, preBuiltObjects);
        viewContainer = new ViewContainer(view, element, binder.nestedProtoView, elementInjector, eventManager, reflector, destLightDom);
        ListWrapper.push(viewContainers, viewContainer);
      }
      if (isPresent(elementInjector)) {
        preBuiltObjects[binderIdx] = new PreBuiltObjects(view, new NgElement(element), viewContainer, lightDom, bindingPropagationConfig);
      }
      if (isPresent(binder.events)) {
        eventHandlers[binderIdx] = StringMapWrapper.create();
        StringMapWrapper.forEach(binder.events, (function(eventMap, eventName) {
          var handler = $ProtoView.buildEventHandler(eventMap, binderIdx);
          StringMapWrapper.set(eventHandlers[binderIdx], eventName, handler);
          if (isBlank(elementInjector) || !elementInjector.hasEventEmitter(eventName)) {
            eventManager.addEventListener(element, eventName, (function(event) {
              handler(event, view);
            }));
          }
        }));
      }
    }
    this.eventHandlers = eventHandlers;
    view.init(elementInjectors, rootElementInjectors, textNodes, elementsWithPropertyBindings, viewContainers, preBuiltObjects, componentChildViews);
    return assert.returnType((view), View);
  },
  returnToPool: function(view) {
    assert.argumentTypes(view, View);
    this._viewPool.push(view);
  },
  _directParentElementLightDom: function(protoElementInjector, preBuiltObjects) {
    assert.argumentTypes(protoElementInjector, ProtoElementInjector, preBuiltObjects, List);
    var p = protoElementInjector.directParent();
    return assert.returnType((isPresent(p) ? preBuiltObjects[p.index].lightDom : null), LightDom);
  },
  bindVariable: function(contextName, templateName) {
    assert.argumentTypes(contextName, assert.type.string, templateName, assert.type.string);
    MapWrapper.set(this.variableBindings, contextName, templateName);
    MapWrapper.set(this.protoContextLocals, templateName, null);
  },
  bindElement: function(protoElementInjector) {
    var componentDirective = arguments[1] !== (void 0) ? arguments[1] : null;
    var viewportDirective = arguments[2] !== (void 0) ? arguments[2] : null;
    assert.argumentTypes(protoElementInjector, ProtoElementInjector, componentDirective, DirectiveMetadata, viewportDirective, DirectiveMetadata);
    var elBinder = new ElementBinder(protoElementInjector, componentDirective, viewportDirective);
    ListWrapper.push(this.elementBinders, elBinder);
    return assert.returnType((elBinder), ElementBinder);
  },
  bindTextNode: function(indexInParent, expression) {
    assert.argumentTypes(indexInParent, int, expression, AST);
    var elBinder = this.elementBinders[this.elementBinders.length - 1];
    if (isBlank(elBinder.textNodeIndices)) {
      elBinder.textNodeIndices = ListWrapper.create();
    }
    ListWrapper.push(elBinder.textNodeIndices, indexInParent);
    var memento = this.textNodesWithBindingCount++;
    this.protoChangeDetector.addAst(expression, memento);
  },
  bindElementProperty: function(expression, setterName, setter) {
    assert.argumentTypes(expression, AST, setterName, assert.type.string, setter, SetterFn);
    var elBinder = this.elementBinders[this.elementBinders.length - 1];
    if (!elBinder.hasElementPropertyBindings) {
      elBinder.hasElementPropertyBindings = true;
      this.elementsWithBindingCount++;
    }
    var memento = new ElementBindingMemento(this.elementsWithBindingCount - 1, setterName, setter);
    this.protoChangeDetector.addAst(expression, memento);
  },
  bindEvent: function(eventName, expression) {
    var directiveIndex = arguments[2] !== (void 0) ? arguments[2] : -1;
    assert.argumentTypes(eventName, assert.type.string, expression, AST, directiveIndex, int);
    var elBinder = this.elementBinders[this.elementBinders.length - 1];
    var events = elBinder.events;
    if (isBlank(events)) {
      events = StringMapWrapper.create();
      elBinder.events = events;
    }
    var event = StringMapWrapper.get(events, eventName);
    if (isBlank(event)) {
      event = MapWrapper.create();
      StringMapWrapper.set(events, eventName, event);
    }
    MapWrapper.set(event, directiveIndex, expression);
  },
  bindDirectiveProperty: function(directiveIndex, expression, setterName, setter) {
    assert.argumentTypes(directiveIndex, assert.type.number, expression, AST, setterName, assert.type.string, setter, SetterFn);
    var bindingMemento = new DirectiveBindingMemento(this.elementBinders.length - 1, directiveIndex, setterName, setter);
    var directiveMemento = DirectiveMemento.get(bindingMemento);
    this.protoChangeDetector.addAst(expression, bindingMemento, directiveMemento);
  }
}, {
  buildEventHandler: function(eventMap, injectorIdx) {
    assert.argumentTypes(eventMap, Map, injectorIdx, int);
    var locals = MapWrapper.create();
    return (function(event, view) {
      if (view.hydrated()) {
        MapWrapper.set(locals, '$event', event);
        MapWrapper.forEach(eventMap, (function(expr, directiveIndex) {
          var context;
          if (directiveIndex === -1) {
            context = view.context;
          } else {
            context = view.elementInjectors[injectorIdx].getDirectiveAtIndex(directiveIndex);
          }
          expr.eval(new ContextWithVariableBindings(context, locals));
        }));
      }
    });
  },
  createRootProtoView: function(protoView, insertionElement, rootComponentAnnotatedType, protoChangeDetector, shadowDomStrategy) {
    assert.argumentTypes(protoView, $ProtoView, insertionElement, assert.type.any, rootComponentAnnotatedType, DirectiveMetadata, protoChangeDetector, ProtoChangeDetector, shadowDomStrategy, ShadowDomStrategy);
    DOM.addClass(insertionElement, NG_BINDING_CLASS);
    var cmpType = rootComponentAnnotatedType.type;
    var rootProtoView = new $ProtoView(insertionElement, protoChangeDetector, shadowDomStrategy);
    rootProtoView.instantiateInPlace = true;
    var binder = rootProtoView.bindElement(new ProtoElementInjector(null, 0, [cmpType], true));
    binder.componentDirective = rootComponentAnnotatedType;
    binder.nestedProtoView = protoView;
    shadowDomStrategy.shimAppElement(rootComponentAnnotatedType, insertionElement);
    return assert.returnType((rootProtoView), $ProtoView);
  }
});
Object.defineProperty(ProtoView, "parameters", {get: function() {
    return [[], [ProtoChangeDetector], [ShadowDomStrategy]];
  }});
Object.defineProperty(ProtoView.prototype.instantiate, "parameters", {get: function() {
    return [[ElementInjector], [EventManager], [Reflector]];
  }});
Object.defineProperty(ProtoView.prototype._preFillPool, "parameters", {get: function() {
    return [[ElementInjector], [EventManager], [Reflector]];
  }});
Object.defineProperty(ProtoView.prototype._instantiate, "parameters", {get: function() {
    return [[ElementInjector], [EventManager], [Reflector]];
  }});
Object.defineProperty(ProtoView.prototype.returnToPool, "parameters", {get: function() {
    return [[View]];
  }});
Object.defineProperty(ProtoView.buildEventHandler, "parameters", {get: function() {
    return [[Map], [int]];
  }});
Object.defineProperty(ProtoView.prototype._directParentElementLightDom, "parameters", {get: function() {
    return [[ProtoElementInjector], [List]];
  }});
Object.defineProperty(ProtoView.prototype.bindVariable, "parameters", {get: function() {
    return [[assert.type.string], [assert.type.string]];
  }});
Object.defineProperty(ProtoView.prototype.bindElement, "parameters", {get: function() {
    return [[ProtoElementInjector], [DirectiveMetadata], [DirectiveMetadata]];
  }});
Object.defineProperty(ProtoView.prototype.bindTextNode, "parameters", {get: function() {
    return [[int], [AST]];
  }});
Object.defineProperty(ProtoView.prototype.bindElementProperty, "parameters", {get: function() {
    return [[AST], [assert.type.string], [SetterFn]];
  }});
Object.defineProperty(ProtoView.prototype.bindEvent, "parameters", {get: function() {
    return [[assert.type.string], [AST], [int]];
  }});
Object.defineProperty(ProtoView.prototype.bindDirectiveProperty, "parameters", {get: function() {
    return [[assert.type.number], [AST], [assert.type.string], [SetterFn]];
  }});
Object.defineProperty(ProtoView.createRootProtoView, "parameters", {get: function() {
    return [[ProtoView], [], [DirectiveMetadata], [ProtoChangeDetector], [ShadowDomStrategy]];
  }});
var ElementBindingMemento = function ElementBindingMemento(elementIndex, setterName, setter) {
  assert.argumentTypes(elementIndex, int, setterName, assert.type.string, setter, SetterFn);
  this._elementIndex = elementIndex;
  this._setterName = setterName;
  this._setter = setter;
};
($traceurRuntime.createClass)(ElementBindingMemento, {invoke: function(record, bindElements) {
    assert.argumentTypes(record, ChangeRecord, bindElements, List);
    var element = bindElements[this._elementIndex];
    this._setter(element, record.currentValue);
  }}, {});
Object.defineProperty(ElementBindingMemento, "parameters", {get: function() {
    return [[int], [assert.type.string], [SetterFn]];
  }});
Object.defineProperty(ElementBindingMemento.prototype.invoke, "parameters", {get: function() {
    return [[ChangeRecord], [List]];
  }});
var DirectiveBindingMemento = function DirectiveBindingMemento(elementInjectorIndex, directiveIndex, setterName, setter) {
  assert.argumentTypes(elementInjectorIndex, assert.type.number, directiveIndex, assert.type.number, setterName, assert.type.string, setter, SetterFn);
  this._elementInjectorIndex = elementInjectorIndex;
  this._directiveIndex = directiveIndex;
  this._setterName = setterName;
  this._setter = setter;
};
($traceurRuntime.createClass)(DirectiveBindingMemento, {invoke: function(record, elementInjectors) {
    assert.argumentTypes(record, ChangeRecord, elementInjectors, assert.genericType(List, ElementInjector));
    var elementInjector = assert.type(elementInjectors[this._elementInjectorIndex], ElementInjector);
    var directive = elementInjector.getDirectiveAtIndex(this._directiveIndex);
    this._setter(directive, record.currentValue);
  }}, {});
Object.defineProperty(DirectiveBindingMemento, "parameters", {get: function() {
    return [[assert.type.number], [assert.type.number], [assert.type.string], [SetterFn]];
  }});
Object.defineProperty(DirectiveBindingMemento.prototype.invoke, "parameters", {get: function() {
    return [[ChangeRecord], [assert.genericType(List, ElementInjector)]];
  }});
var _directiveMementos = MapWrapper.create();
var DirectiveMemento = function DirectiveMemento(elementInjectorIndex, directiveIndex) {
  assert.argumentTypes(elementInjectorIndex, assert.type.number, directiveIndex, assert.type.number);
  this._elementInjectorIndex = elementInjectorIndex;
  this._directiveIndex = directiveIndex;
};
var $DirectiveMemento = DirectiveMemento;
($traceurRuntime.createClass)(DirectiveMemento, {
  directive: function(elementInjectors) {
    assert.argumentTypes(elementInjectors, assert.genericType(List, ElementInjector));
    var elementInjector = assert.type(elementInjectors[this._elementInjectorIndex], ElementInjector);
    return elementInjector.getDirectiveAtIndex(this._directiveIndex);
  },
  directiveBinding: function(elementInjectors) {
    assert.argumentTypes(elementInjectors, assert.genericType(List, ElementInjector));
    var elementInjector = assert.type(elementInjectors[this._elementInjectorIndex], ElementInjector);
    return elementInjector.getDirectiveBindingAtIndex(this._directiveIndex);
  }
}, {get: function(memento) {
    assert.argumentTypes(memento, DirectiveBindingMemento);
    var elementInjectorIndex = memento._elementInjectorIndex;
    var directiveIndex = memento._directiveIndex;
    var id = elementInjectorIndex * 100 + directiveIndex;
    if (!MapWrapper.contains(_directiveMementos, id)) {
      MapWrapper.set(_directiveMementos, id, new $DirectiveMemento(elementInjectorIndex, directiveIndex));
    }
    return MapWrapper.get(_directiveMementos, id);
  }});
Object.defineProperty(DirectiveMemento, "parameters", {get: function() {
    return [[assert.type.number], [assert.type.number]];
  }});
Object.defineProperty(DirectiveMemento.get, "parameters", {get: function() {
    return [[DirectiveBindingMemento]];
  }});
Object.defineProperty(DirectiveMemento.prototype.directive, "parameters", {get: function() {
    return [[assert.genericType(List, ElementInjector)]];
  }});
Object.defineProperty(DirectiveMemento.prototype.directiveBinding, "parameters", {get: function() {
    return [[assert.genericType(List, ElementInjector)]];
  }});
var PropertyUpdate = function PropertyUpdate(currentValue, previousValue) {
  this.currentValue = currentValue;
  this.previousValue = previousValue;
};
($traceurRuntime.createClass)(PropertyUpdate, {}, {});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/core/compiler/view.map

//# sourceMappingURL=./view.map