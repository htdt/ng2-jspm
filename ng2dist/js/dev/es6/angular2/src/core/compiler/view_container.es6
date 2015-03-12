import {assert} from "rtts_assert/rtts_assert";
import * as viewModule from './view';
import {DOM} from 'angular2/src/dom/dom_adapter';
import {ListWrapper,
  MapWrapper,
  List} from 'angular2/src/facade/collection';
import {BaseException} from 'angular2/src/facade/lang';
import {Injector} from 'angular2/di';
import * as eiModule from 'angular2/src/core/compiler/element_injector';
import {isPresent,
  isBlank} from 'angular2/src/facade/lang';
import {EventManager} from 'angular2/src/core/events/event_manager';
import {Reflector} from 'angular2/src/reflection/reflection';
export class ViewContainer {
  constructor(parentView, templateElement, defaultProtoView, elementInjector, eventManager, reflector, lightDom = null) {
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
  }
  hydrate(appInjector, hostElementInjector) {
    assert.argumentTypes(appInjector, Injector, hostElementInjector, eiModule.ElementInjector);
    this.appInjector = appInjector;
    this.hostElementInjector = hostElementInjector;
  }
  dehydrate() {
    this.appInjector = null;
    this.hostElementInjector = null;
    this.clear();
  }
  clear() {
    for (var i = this._views.length - 1; i >= 0; i--) {
      this.remove(i);
    }
  }
  get(index) {
    assert.argumentTypes(index, assert.type.number);
    return assert.returnType((this._views[index]), viewModule.View);
  }
  get length() {
    return this._views.length;
  }
  _siblingToInsertAfter(index) {
    assert.argumentTypes(index, assert.type.number);
    if (index == 0)
      return this.templateElement;
    return ListWrapper.last(this._views[index - 1].nodes);
  }
  hydrated() {
    return isPresent(this.appInjector);
  }
  create(atIndex = -1) {
    if (!this.hydrated())
      throw new BaseException('Cannot create views on a dehydrated ViewContainer');
    var newView = this.defaultProtoView.instantiate(this.hostElementInjector, this._eventManager, this._reflector);
    this.insert(newView, atIndex);
    newView.hydrate(this.appInjector, this.hostElementInjector, this.parentView.context);
    return assert.returnType((newView), viewModule.View);
  }
  insert(view, atIndex = -1) {
    if (atIndex == -1)
      atIndex = this._views.length;
    ListWrapper.insert(this._views, atIndex, view);
    if (isBlank(this._lightDom)) {
      ViewContainer.moveViewNodesAfterSibling(this._siblingToInsertAfter(atIndex), view);
    } else {
      this._lightDom.redistribute();
    }
    this.parentView.changeDetector.addChild(view.changeDetector);
    this._linkElementInjectors(view);
    return assert.returnType((view), viewModule.View);
  }
  remove(atIndex = -1) {
    if (atIndex == -1)
      atIndex = this._views.length - 1;
    var view = this.detach(atIndex);
    view.dehydrate();
    this.defaultProtoView.returnToPool(view);
  }
  detach(atIndex = -1) {
    if (atIndex == -1)
      atIndex = this._views.length - 1;
    var detachedView = this.get(atIndex);
    ListWrapper.removeAt(this._views, atIndex);
    if (isBlank(this._lightDom)) {
      ViewContainer.removeViewNodesFromParent(this.templateElement.parentNode, detachedView);
    } else {
      this._lightDom.redistribute();
    }
    detachedView.changeDetector.remove();
    this._unlinkElementInjectors(detachedView);
    return assert.returnType((detachedView), viewModule.View);
  }
  contentTagContainers() {
    return this._views;
  }
  nodes() {
    var r = [];
    for (var i = 0; i < this._views.length; ++i) {
      r = ListWrapper.concat(r, this._views[i].nodes);
    }
    return assert.returnType((r), List);
  }
  _linkElementInjectors(view) {
    for (var i = 0; i < view.rootElementInjectors.length; ++i) {
      view.rootElementInjectors[i].parent = this.elementInjector;
    }
  }
  _unlinkElementInjectors(view) {
    for (var i = 0; i < view.rootElementInjectors.length; ++i) {
      view.rootElementInjectors[i].parent = null;
    }
  }
  static moveViewNodesAfterSibling(sibling, view) {
    for (var i = view.nodes.length - 1; i >= 0; --i) {
      DOM.insertAfter(sibling, view.nodes[i]);
    }
  }
  static removeViewNodesFromParent(parent, view) {
    for (var i = view.nodes.length - 1; i >= 0; --i) {
      DOM.removeChild(parent, view.nodes[i]);
    }
  }
}
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