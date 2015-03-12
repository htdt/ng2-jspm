"use strict";
Object.defineProperties(module.exports, {
  Switch: {get: function() {
      return Switch;
    }},
  SwitchWhen: {get: function() {
      return SwitchWhen;
    }},
  SwitchDefault: {get: function() {
      return SwitchDefault;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/src/directives/switch";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_src_47_core_47_annotations_47_annotations__,
    $__angular2_47_src_47_core_47_compiler_47_view_95_container__,
    $__angular2_47_src_47_core_47_dom_47_element__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_core_47_annotations_47_visibility__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var $__1 = ($__angular2_47_src_47_core_47_annotations_47_annotations__ = require("angular2/src/core/annotations/annotations"), $__angular2_47_src_47_core_47_annotations_47_annotations__ && $__angular2_47_src_47_core_47_annotations_47_annotations__.__esModule && $__angular2_47_src_47_core_47_annotations_47_annotations__ || {default: $__angular2_47_src_47_core_47_annotations_47_annotations__}),
    Decorator = $__1.Decorator,
    Viewport = $__1.Viewport;
var ViewContainer = ($__angular2_47_src_47_core_47_compiler_47_view_95_container__ = require("angular2/src/core/compiler/view_container"), $__angular2_47_src_47_core_47_compiler_47_view_95_container__ && $__angular2_47_src_47_core_47_compiler_47_view_95_container__.__esModule && $__angular2_47_src_47_core_47_compiler_47_view_95_container__ || {default: $__angular2_47_src_47_core_47_compiler_47_view_95_container__}).ViewContainer;
var NgElement = ($__angular2_47_src_47_core_47_dom_47_element__ = require("angular2/src/core/dom/element"), $__angular2_47_src_47_core_47_dom_47_element__ && $__angular2_47_src_47_core_47_dom_47_element__.__esModule && $__angular2_47_src_47_core_47_dom_47_element__ || {default: $__angular2_47_src_47_core_47_dom_47_element__}).NgElement;
var $__4 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    isPresent = $__4.isPresent,
    isBlank = $__4.isBlank,
    normalizeBlank = $__4.normalizeBlank;
var $__5 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    ListWrapper = $__5.ListWrapper,
    List = $__5.List,
    MapWrapper = $__5.MapWrapper,
    Map = $__5.Map;
var Parent = ($__angular2_47_src_47_core_47_annotations_47_visibility__ = require("angular2/src/core/annotations/visibility"), $__angular2_47_src_47_core_47_annotations_47_visibility__ && $__angular2_47_src_47_core_47_annotations_47_visibility__.__esModule && $__angular2_47_src_47_core_47_annotations_47_visibility__ || {default: $__angular2_47_src_47_core_47_annotations_47_visibility__}).Parent;
var Switch = function Switch() {
  this._valueViewContainers = MapWrapper.create();
  this._activeViewContainers = ListWrapper.create();
  this._useDefault = false;
};
($traceurRuntime.createClass)(Switch, {
  set value(value) {
    this._emptyAllActiveViewContainers();
    this._useDefault = false;
    var containers = MapWrapper.get(this._valueViewContainers, value);
    if (isBlank(containers)) {
      this._useDefault = true;
      containers = normalizeBlank(MapWrapper.get(this._valueViewContainers, _whenDefault));
    }
    this._activateViewContainers(containers);
    this._switchValue = value;
  },
  _onWhenValueChanged: function(oldWhen, newWhen, viewContainer) {
    assert.argumentTypes(oldWhen, assert.type.any, newWhen, assert.type.any, viewContainer, ViewContainer);
    this._deregisterViewContainer(oldWhen, viewContainer);
    this._registerViewContainer(newWhen, viewContainer);
    if (oldWhen === this._switchValue) {
      viewContainer.remove();
      ListWrapper.remove(this._activeViewContainers, viewContainer);
    } else if (newWhen === this._switchValue) {
      if (this._useDefault) {
        this._useDefault = false;
        this._emptyAllActiveViewContainers();
      }
      viewContainer.create();
      ListWrapper.push(this._activeViewContainers, viewContainer);
    }
    if (this._activeViewContainers.length === 0 && !this._useDefault) {
      this._useDefault = true;
      this._activateViewContainers(MapWrapper.get(this._valueViewContainers, _whenDefault));
    }
  },
  _emptyAllActiveViewContainers: function() {
    var activeContainers = this._activeViewContainers;
    for (var i = 0; i < activeContainers.length; i++) {
      activeContainers[i].remove();
    }
    this._activeViewContainers = ListWrapper.create();
  },
  _activateViewContainers: function(containers) {
    assert.argumentTypes(containers, assert.genericType(List, ViewContainer));
    if (isPresent(containers)) {
      for (var i = 0; i < containers.length; i++) {
        containers[i].create();
      }
      this._activeViewContainers = containers;
    }
  },
  _registerViewContainer: function(value, container) {
    assert.argumentTypes(value, assert.type.any, container, ViewContainer);
    var containers = MapWrapper.get(this._valueViewContainers, value);
    if (isBlank(containers)) {
      containers = ListWrapper.create();
      MapWrapper.set(this._valueViewContainers, value, containers);
    }
    ListWrapper.push(containers, container);
  },
  _deregisterViewContainer: function(value, container) {
    assert.argumentTypes(value, assert.type.any, container, ViewContainer);
    if (value == _whenDefault)
      return ;
    var containers = MapWrapper.get(this._valueViewContainers, value);
    if (containers.length == 1) {
      MapWrapper.delete(this._valueViewContainers, value);
    } else {
      ListWrapper.remove(containers, container);
    }
  }
}, {});
Object.defineProperty(Switch, "annotations", {get: function() {
    return [new Decorator({
      selector: '[switch]',
      bind: {'value': 'switch'}
    })];
  }});
Object.defineProperty(Switch.prototype._onWhenValueChanged, "parameters", {get: function() {
    return [[], [], [ViewContainer]];
  }});
Object.defineProperty(Switch.prototype._activateViewContainers, "parameters", {get: function() {
    return [[assert.genericType(List, ViewContainer)]];
  }});
Object.defineProperty(Switch.prototype._registerViewContainer, "parameters", {get: function() {
    return [[], [ViewContainer]];
  }});
Object.defineProperty(Switch.prototype._deregisterViewContainer, "parameters", {get: function() {
    return [[], [ViewContainer]];
  }});
var SwitchWhen = function SwitchWhen(el, viewContainer, sswitch) {
  assert.argumentTypes(el, NgElement, viewContainer, ViewContainer, sswitch, Switch);
  this._value = _whenDefault;
  this._switch = sswitch;
  this._viewContainer = viewContainer;
};
($traceurRuntime.createClass)(SwitchWhen, {set when(value) {
    this._switch._onWhenValueChanged(this._value, value, this._viewContainer);
    this._value = value;
  }}, {});
Object.defineProperty(SwitchWhen, "annotations", {get: function() {
    return [new Viewport({
      selector: '[switch-when]',
      bind: {'when': 'switch-when'}
    })];
  }});
Object.defineProperty(SwitchWhen, "parameters", {get: function() {
    return [[NgElement], [ViewContainer], [Switch, new Parent()]];
  }});
var SwitchDefault = function SwitchDefault(viewContainer, sswitch) {
  assert.argumentTypes(viewContainer, ViewContainer, sswitch, Switch);
  sswitch._registerViewContainer(_whenDefault, viewContainer);
};
($traceurRuntime.createClass)(SwitchDefault, {}, {});
Object.defineProperty(SwitchDefault, "annotations", {get: function() {
    return [new Viewport({selector: '[switch-default]'})];
  }});
Object.defineProperty(SwitchDefault, "parameters", {get: function() {
    return [[ViewContainer], [Switch, new Parent()]];
  }});
var _whenDefault = new Object();

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/directives/switch.map

//# sourceMappingURL=./switch.map