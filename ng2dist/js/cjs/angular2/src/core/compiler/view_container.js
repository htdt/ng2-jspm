"use strict";
Object.defineProperties(module.exports, {
  ViewContainer: {get: function() {
      return ViewContainer;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/src/core/compiler/view_container";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_src_47_core_47_compiler_47_view__,
    $__angular2_47_src_47_dom_47_dom_95_adapter__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_di__,
    $__angular2_47_src_47_core_47_compiler_47_element_95_injector__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_core_47_events_47_event_95_manager__,
    $__angular2_47_src_47_reflection_47_reflection__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var viewModule = ($__angular2_47_src_47_core_47_compiler_47_view__ = require("./view"), $__angular2_47_src_47_core_47_compiler_47_view__ && $__angular2_47_src_47_core_47_compiler_47_view__.__esModule && $__angular2_47_src_47_core_47_compiler_47_view__ || {default: $__angular2_47_src_47_core_47_compiler_47_view__});
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var $__2 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    ListWrapper = $__2.ListWrapper,
    MapWrapper = $__2.MapWrapper,
    List = $__2.List;
var BaseException = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).BaseException;
var Injector = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}).Injector;
var eiModule = ($__angular2_47_src_47_core_47_compiler_47_element_95_injector__ = require("angular2/src/core/compiler/element_injector"), $__angular2_47_src_47_core_47_compiler_47_element_95_injector__ && $__angular2_47_src_47_core_47_compiler_47_element_95_injector__.__esModule && $__angular2_47_src_47_core_47_compiler_47_element_95_injector__ || {default: $__angular2_47_src_47_core_47_compiler_47_element_95_injector__});
var $__5 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    isPresent = $__5.isPresent,
    isBlank = $__5.isBlank;
var EventManager = ($__angular2_47_src_47_core_47_events_47_event_95_manager__ = require("angular2/src/core/events/event_manager"), $__angular2_47_src_47_core_47_events_47_event_95_manager__ && $__angular2_47_src_47_core_47_events_47_event_95_manager__.__esModule && $__angular2_47_src_47_core_47_events_47_event_95_manager__ || {default: $__angular2_47_src_47_core_47_events_47_event_95_manager__}).EventManager;
var Reflector = ($__angular2_47_src_47_reflection_47_reflection__ = require("angular2/src/reflection/reflection"), $__angular2_47_src_47_reflection_47_reflection__ && $__angular2_47_src_47_reflection_47_reflection__.__esModule && $__angular2_47_src_47_reflection_47_reflection__ || {default: $__angular2_47_src_47_reflection_47_reflection__}).Reflector;
var ViewContainer = function ViewContainer(parentView, templateElement, defaultProtoView, elementInjector, eventManager, reflector) {
  var lightDom = arguments[6] !== (void 0) ? arguments[6] : null;
  assert.argumentTypes(parentView, viewModule.View, templateElement, assert.type.any, defaultProtoView, viewModule.ProtoView, elementInjector, eiModule.ElementInjector, eventManager, EventManager, reflector, Reflector, lightDom, assert.type.any);
  this.parentView = parentView;
  this.templateElement = templateElement;
  this.defaultProtoView = defaultProtoView;
  this.elementInjector = elementInjector;
  this._lightDom = lightDom;
  this._reflector = reflector;
  this._views = [];
  this.appInjector = null;
  this.hostElementInjector = null;
  this._eventManager = eventManager;
};
var $ViewContainer = ViewContainer;
($traceurRuntime.createClass)(ViewContainer, {
  hydrate: function(appInjector, hostElementInjector) {
    assert.argumentTypes(appInjector, Injector, hostElementInjector, eiModule.ElementInjector);
    this.appInjector = appInjector;
    this.hostElementInjector = hostElementInjector;
  },
  dehydrate: function() {
    this.appInjector = null;
    this.hostElementInjector = null;
    this.clear();
  },
  clear: function() {
    for (var i = this._views.length - 1; i >= 0; i--) {
      this.remove(i);
    }
  },
  get: function(index) {
    assert.argumentTypes(index, assert.type.number);
    return assert.returnType((this._views[index]), viewModule.View);
  },
  get length() {
    return this._views.length;
  },
  _siblingToInsertAfter: function(index) {
    assert.argumentTypes(index, assert.type.number);
    if (index == 0)
      return this.templateElement;
    return ListWrapper.last(this._views[index - 1].nodes);
  },
  hydrated: function() {
    return isPresent(this.appInjector);
  },
  create: function() {
    var atIndex = arguments[0] !== (void 0) ? arguments[0] : -1;
    if (!this.hydrated())
      throw new BaseException('Cannot create views on a dehydrated ViewContainer');
    var newView = this.defaultProtoView.instantiate(this.hostElementInjector, this._eventManager, this._reflector);
    this.insert(newView, atIndex);
    newView.hydrate(this.appInjector, this.hostElementInjector, this.parentView.context);
    return assert.returnType((newView), viewModule.View);
  },
  insert: function(view) {
    var atIndex = arguments[1] !== (void 0) ? arguments[1] : -1;
    if (atIndex == -1)
      atIndex = this._views.length;
    ListWrapper.insert(this._views, atIndex, view);
    if (isBlank(this._lightDom)) {
      $ViewContainer.moveViewNodesAfterSibling(this._siblingToInsertAfter(atIndex), view);
    } else {
      this._lightDom.redistribute();
    }
    this.parentView.changeDetector.addChild(view.changeDetector);
    this._linkElementInjectors(view);
    return assert.returnType((view), viewModule.View);
  },
  remove: function() {
    var atIndex = arguments[0] !== (void 0) ? arguments[0] : -1;
    if (atIndex == -1)
      atIndex = this._views.length - 1;
    var view = this.detach(atIndex);
    view.dehydrate();
    this.defaultProtoView.returnToPool(view);
  },
  detach: function() {
    var atIndex = arguments[0] !== (void 0) ? arguments[0] : -1;
    if (atIndex == -1)
      atIndex = this._views.length - 1;
    var detachedView = this.get(atIndex);
    ListWrapper.removeAt(this._views, atIndex);
    if (isBlank(this._lightDom)) {
      $ViewContainer.removeViewNodesFromParent(this.templateElement.parentNode, detachedView);
    } else {
      this._lightDom.redistribute();
    }
    detachedView.changeDetector.remove();
    this._unlinkElementInjectors(detachedView);
    return assert.returnType((detachedView), viewModule.View);
  },
  contentTagContainers: function() {
    return this._views;
  },
  nodes: function() {
    var r = [];
    for (var i = 0; i < this._views.length; ++i) {
      r = ListWrapper.concat(r, this._views[i].nodes);
    }
    return assert.returnType((r), List);
  },
  _linkElementInjectors: function(view) {
    for (var i = 0; i < view.rootElementInjectors.length; ++i) {
      view.rootElementInjectors[i].parent = this.elementInjector;
    }
  },
  _unlinkElementInjectors: function(view) {
    for (var i = 0; i < view.rootElementInjectors.length; ++i) {
      view.rootElementInjectors[i].parent = null;
    }
  }
}, {
  moveViewNodesAfterSibling: function(sibling, view) {
    for (var i = view.nodes.length - 1; i >= 0; --i) {
      DOM.insertAfter(sibling, view.nodes[i]);
    }
  },
  removeViewNodesFromParent: function(parent, view) {
    for (var i = view.nodes.length - 1; i >= 0; --i) {
      DOM.removeChild(parent, view.nodes[i]);
    }
  }
});
Object.defineProperty(ViewContainer, "parameters", {get: function() {
    return [[viewModule.View], [], [viewModule.ProtoView], [eiModule.ElementInjector], [EventManager], [Reflector], []];
  }});
Object.defineProperty(ViewContainer.prototype.hydrate, "parameters", {get: function() {
    return [[Injector], [eiModule.ElementInjector]];
  }});
Object.defineProperty(ViewContainer.prototype.get, "parameters", {get: function() {
    return [[assert.type.number]];
  }});
Object.defineProperty(ViewContainer.prototype._siblingToInsertAfter, "parameters", {get: function() {
    return [[assert.type.number]];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/core/compiler/view_container.map

//# sourceMappingURL=./view_container.map