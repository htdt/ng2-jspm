"use strict";
Object.defineProperties(module.exports, {
  ControlValueAccessor: {get: function() {
      return ControlValueAccessor;
    }},
  ControlDirective: {get: function() {
      return ControlDirective;
    }},
  ControlGroupDirective: {get: function() {
      return ControlGroupDirective;
    }},
  FormDirectives: {get: function() {
      return FormDirectives;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/src/forms/directives";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_core__,
    $__angular2_47_di__,
    $__angular2_47_src_47_dom_47_dom_95_adapter__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_forms_47_model__,
    $__angular2_47_src_47_forms_47_validators__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var $__1 = ($__angular2_47_core__ = require("angular2/core"), $__angular2_47_core__ && $__angular2_47_core__.__esModule && $__angular2_47_core__ || {default: $__angular2_47_core__}),
    Template = $__1.Template,
    Component = $__1.Component,
    Decorator = $__1.Decorator,
    NgElement = $__1.NgElement,
    Ancestor = $__1.Ancestor,
    onChange = $__1.onChange;
var Optional = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}).Optional;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var $__4 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    isBlank = $__4.isBlank,
    isPresent = $__4.isPresent,
    isString = $__4.isString,
    CONST = $__4.CONST;
var $__5 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    StringMapWrapper = $__5.StringMapWrapper,
    ListWrapper = $__5.ListWrapper;
var $__6 = ($__angular2_47_src_47_forms_47_model__ = require("./model"), $__angular2_47_src_47_forms_47_model__ && $__angular2_47_src_47_forms_47_model__.__esModule && $__angular2_47_src_47_forms_47_model__ || {default: $__angular2_47_src_47_forms_47_model__}),
    ControlGroup = $__6.ControlGroup,
    Control = $__6.Control;
var validators = ($__angular2_47_src_47_forms_47_validators__ = require("./validators"), $__angular2_47_src_47_forms_47_validators__ && $__angular2_47_src_47_forms_47_validators__.__esModule && $__angular2_47_src_47_forms_47_validators__ || {default: $__angular2_47_src_47_forms_47_validators__});
var ControlValueAccessor = function ControlValueAccessor() {};
($traceurRuntime.createClass)(ControlValueAccessor, {
  readValue: function(el) {},
  writeValue: function(el, value) {}
}, {});
Object.defineProperty(ControlValueAccessor, "annotations", {get: function() {
    return [new CONST()];
  }});
var DefaultControlValueAccessor = function DefaultControlValueAccessor() {
  $traceurRuntime.superConstructor($DefaultControlValueAccessor).call(this);
};
var $DefaultControlValueAccessor = DefaultControlValueAccessor;
($traceurRuntime.createClass)(DefaultControlValueAccessor, {
  readValue: function(el) {
    return DOM.getValue(el);
  },
  writeValue: function(el, value) {
    DOM.setValue(el, value);
  }
}, {}, ControlValueAccessor);
Object.defineProperty(DefaultControlValueAccessor, "annotations", {get: function() {
    return [new CONST()];
  }});
var CheckboxControlValueAccessor = function CheckboxControlValueAccessor() {
  $traceurRuntime.superConstructor($CheckboxControlValueAccessor).call(this);
};
var $CheckboxControlValueAccessor = CheckboxControlValueAccessor;
($traceurRuntime.createClass)(CheckboxControlValueAccessor, {
  readValue: function(el) {
    return assert.returnType((DOM.getChecked(el)), assert.type.boolean);
  },
  writeValue: function(el, value) {
    assert.argumentTypes(el, assert.type.any, value, assert.type.boolean);
    DOM.setChecked(el, value);
  }
}, {}, ControlValueAccessor);
Object.defineProperty(CheckboxControlValueAccessor, "annotations", {get: function() {
    return [new CONST()];
  }});
Object.defineProperty(CheckboxControlValueAccessor.prototype.writeValue, "parameters", {get: function() {
    return [[], [assert.type.boolean]];
  }});
var controlValueAccessors = {
  "checkbox": new CheckboxControlValueAccessor(),
  "text": new DefaultControlValueAccessor()
};
function controlValueAccessorFor(controlType) {
  assert.argumentTypes(controlType, assert.type.string);
  var accessor = StringMapWrapper.get(controlValueAccessors, controlType);
  if (isPresent(accessor)) {
    return assert.returnType((accessor), ControlValueAccessor);
  } else {
    return assert.returnType((StringMapWrapper.get(controlValueAccessors, "text")), ControlValueAccessor);
  }
}
Object.defineProperty(controlValueAccessorFor, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
var ControlDirective = function ControlDirective(groupDirective, el) {
  assert.argumentTypes(groupDirective, ControlGroupDirective, el, NgElement);
  this._groupDirective = groupDirective;
  this._el = el;
  this.validator = validators.nullValidator;
};
($traceurRuntime.createClass)(ControlDirective, {
  onChange: function(_) {
    this._initialize();
  },
  _initialize: function() {
    var $__7 = this;
    this._groupDirective.addDirective(this);
    var c = this._control();
    c.validator = validators.compose([c.validator, this.validator]);
    if (isBlank(this.valueAccessor)) {
      this.valueAccessor = controlValueAccessorFor(this.type);
    }
    this._updateDomValue();
    DOM.on(this._el.domElement, "change", (function(_) {
      return $__7._updateControlValue();
    }));
  },
  _updateDomValue: function() {
    this.valueAccessor.writeValue(this._el.domElement, this._control().value);
  },
  _updateControlValue: function() {
    this._control().updateValue(this.valueAccessor.readValue(this._el.domElement));
  },
  _control: function() {
    return this._groupDirective.findControl(this.controlName);
  }
}, {});
Object.defineProperty(ControlDirective, "annotations", {get: function() {
    return [new Decorator({
      lifecycle: [onChange],
      selector: '[control]',
      bind: {
        'controlName': 'control',
        'type': 'type'
      }
    })];
  }});
Object.defineProperty(ControlDirective, "parameters", {get: function() {
    return [[ControlGroupDirective, new Ancestor()], [NgElement]];
  }});
var ControlGroupDirective = function ControlGroupDirective(groupDirective) {
  assert.argumentTypes(groupDirective, $ControlGroupDirective);
  $traceurRuntime.superConstructor($ControlGroupDirective).call(this);
  this._groupDirective = groupDirective;
  this._directives = ListWrapper.create();
};
var $ControlGroupDirective = ControlGroupDirective;
($traceurRuntime.createClass)(ControlGroupDirective, {
  set controlGroup(controlGroup) {
    if (isString(controlGroup)) {
      this._controlGroupName = controlGroup;
    } else {
      this._controlGroup = controlGroup;
    }
    this._updateDomValue();
  },
  _updateDomValue: function() {
    ListWrapper.forEach(this._directives, (function(cd) {
      return cd._updateDomValue();
    }));
  },
  addDirective: function(c) {
    assert.argumentTypes(c, ControlDirective);
    ListWrapper.push(this._directives, c);
  },
  findControl: function(name) {
    assert.argumentTypes(name, assert.type.string);
    return assert.returnType((this._getControlGroup().controls[name]), assert.type.any);
  },
  _getControlGroup: function() {
    if (isPresent(this._controlGroupName)) {
      return assert.returnType((this._groupDirective.findControl(this._controlGroupName)), ControlGroup);
    } else {
      return assert.returnType((this._controlGroup), ControlGroup);
    }
  }
}, {});
Object.defineProperty(ControlGroupDirective, "annotations", {get: function() {
    return [new Decorator({
      selector: '[control-group]',
      bind: {'controlGroup': 'control-group'}
    })];
  }});
Object.defineProperty(ControlGroupDirective, "parameters", {get: function() {
    return [[ControlGroupDirective, new Optional(), new Ancestor()]];
  }});
Object.defineProperty(ControlGroupDirective.prototype.addDirective, "parameters", {get: function() {
    return [[ControlDirective]];
  }});
Object.defineProperty(ControlGroupDirective.prototype.findControl, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
var FormDirectives = [ControlGroupDirective, ControlDirective];

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/forms/directives.map

//# sourceMappingURL=./directives.map