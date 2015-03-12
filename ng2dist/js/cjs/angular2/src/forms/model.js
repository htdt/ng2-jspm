"use strict";
Object.defineProperties(module.exports, {
  VALID: {get: function() {
      return VALID;
    }},
  INVALID: {get: function() {
      return INVALID;
    }},
  AbstractControl: {get: function() {
      return AbstractControl;
    }},
  Control: {get: function() {
      return Control;
    }},
  ControlGroup: {get: function() {
      return ControlGroup;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/src/forms/model";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_forms_47_validators__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var isPresent = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).isPresent;
var $__2 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    StringMap = $__2.StringMap,
    StringMapWrapper = $__2.StringMapWrapper;
var $__3 = ($__angular2_47_src_47_forms_47_validators__ = require("./validators"), $__angular2_47_src_47_forms_47_validators__ && $__angular2_47_src_47_forms_47_validators__.__esModule && $__angular2_47_src_47_forms_47_validators__ || {default: $__angular2_47_src_47_forms_47_validators__}),
    nullValidator = $__3.nullValidator,
    controlGroupValidator = $__3.controlGroupValidator;
var VALID = "VALID";
var INVALID = "INVALID";
var AbstractControl = function AbstractControl() {
  var validator = arguments[0] !== (void 0) ? arguments[0] : nullValidator;
  assert.argumentTypes(validator, Function);
  this.validator = validator;
  this._dirty = true;
};
($traceurRuntime.createClass)(AbstractControl, {
  get value() {
    this._updateIfNeeded();
    return this._value;
  },
  get status() {
    this._updateIfNeeded();
    return this._status;
  },
  get valid() {
    this._updateIfNeeded();
    return this._status === VALID;
  },
  get errors() {
    this._updateIfNeeded();
    return this._errors;
  },
  setParent: function(parent) {
    this._parent = parent;
  },
  _updateIfNeeded: function() {},
  _updateParent: function() {
    if (isPresent(this._parent)) {
      this._parent._controlChanged();
    }
  }
}, {});
Object.defineProperty(AbstractControl, "parameters", {get: function() {
    return [[Function]];
  }});
var Control = function Control(value) {
  var validator = arguments[1] !== (void 0) ? arguments[1] : nullValidator;
  assert.argumentTypes(value, assert.type.any, validator, Function);
  $traceurRuntime.superConstructor($Control).call(this, validator);
  this._value = value;
};
var $Control = Control;
($traceurRuntime.createClass)(Control, {
  updateValue: function(value) {
    assert.argumentTypes(value, assert.type.any);
    this._value = value;
    this._dirty = true;
    this._updateParent();
  },
  _updateIfNeeded: function() {
    if (this._dirty) {
      this._dirty = false;
      this._errors = this.validator(this);
      this._status = isPresent(this._errors) ? INVALID : VALID;
    }
  }
}, {}, AbstractControl);
Object.defineProperty(Control, "parameters", {get: function() {
    return [[assert.type.any], [Function]];
  }});
Object.defineProperty(Control.prototype.updateValue, "parameters", {get: function() {
    return [[assert.type.any]];
  }});
var ControlGroup = function ControlGroup(controls) {
  var optionals = arguments[1] !== (void 0) ? arguments[1] : null;
  var validator = arguments[2] !== (void 0) ? arguments[2] : controlGroupValidator;
  assert.argumentTypes(controls, assert.type.any, optionals, assert.type.any, validator, Function);
  $traceurRuntime.superConstructor($ControlGroup).call(this, validator);
  this.controls = controls;
  this.optionals = isPresent(optionals) ? optionals : {};
  this._setParentForControls();
};
var $ControlGroup = ControlGroup;
($traceurRuntime.createClass)(ControlGroup, {
  include: function(controlName) {
    assert.argumentTypes(controlName, assert.type.string);
    this._dirty = true;
    StringMapWrapper.set(this.optionals, controlName, true);
  },
  exclude: function(controlName) {
    assert.argumentTypes(controlName, assert.type.string);
    this._dirty = true;
    StringMapWrapper.set(this.optionals, controlName, false);
  },
  contains: function(controlName) {
    assert.argumentTypes(controlName, assert.type.string);
    var c = StringMapWrapper.contains(this.controls, controlName);
    return c && this._included(controlName);
  },
  _setParentForControls: function() {
    var $__4 = this;
    StringMapWrapper.forEach(this.controls, (function(control, name) {
      control.setParent($__4);
    }));
  },
  _updateIfNeeded: function() {
    if (this._dirty) {
      this._dirty = false;
      this._value = this._reduceValue();
      this._errors = this.validator(this);
      this._status = isPresent(this._errors) ? INVALID : VALID;
    }
  },
  _reduceValue: function() {
    var $__4 = this;
    var newValue = {};
    StringMapWrapper.forEach(this.controls, (function(control, name) {
      if ($__4._included(name)) {
        newValue[name] = control.value;
      }
    }));
    return newValue;
  },
  _controlChanged: function() {
    this._dirty = true;
    this._updateParent();
  },
  _included: function(controlName) {
    assert.argumentTypes(controlName, assert.type.string);
    var isOptional = StringMapWrapper.contains(this.optionals, controlName);
    return assert.returnType((!isOptional || StringMapWrapper.get(this.optionals, controlName)), assert.type.boolean);
  }
}, {}, AbstractControl);
Object.defineProperty(ControlGroup, "parameters", {get: function() {
    return [[], [], [Function]];
  }});
Object.defineProperty(ControlGroup.prototype.include, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
Object.defineProperty(ControlGroup.prototype.exclude, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
Object.defineProperty(ControlGroup.prototype.contains, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
Object.defineProperty(ControlGroup.prototype._included, "parameters", {get: function() {
    return [[assert.type.string]];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/forms/model.map

//# sourceMappingURL=./model.map