import {isPresent} from 'angular2/src/facade/lang';
import {StringMap,
  StringMapWrapper} from 'angular2/src/facade/collection';
import {nullValidator,
  controlGroupValidator} from './validators';
export const VALID = "VALID";
export const INVALID = "INVALID";
export class AbstractControl {
  constructor(validator = nullValidator) {
    this.validator = validator;
    this._dirty = true;
  }
  get value() {
    this._updateIfNeeded();
    return this._value;
  }
  get status() {
    this._updateIfNeeded();
    return this._status;
  }
  get valid() {
    this._updateIfNeeded();
    return this._status === VALID;
  }
  get errors() {
    this._updateIfNeeded();
    return this._errors;
  }
  setParent(parent) {
    this._parent = parent;
  }
  _updateIfNeeded() {}
  _updateParent() {
    if (isPresent(this._parent)) {
      this._parent._controlChanged();
    }
  }
}
Object.defineProperty(AbstractControl, "parameters", {get: function() {
    return [[Function]];
  }});
export class Control extends AbstractControl {
  constructor(value, validator = nullValidator) {
    super(validator);
    this._value = value;
  }
  updateValue(value) {
    this._value = value;
    this._dirty = true;
    this._updateParent();
  }
  _updateIfNeeded() {
    if (this._dirty) {
      this._dirty = false;
      this._errors = this.validator(this);
      this._status = isPresent(this._errors) ? INVALID : VALID;
    }
  }
}
Object.defineProperty(Control, "parameters", {get: function() {
    return [[assert.type.any], [Function]];
  }});
Object.defineProperty(Control.prototype.updateValue, "parameters", {get: function() {
    return [[assert.type.any]];
  }});
export class ControlGroup extends AbstractControl {
  constructor(controls, optionals = null, validator = controlGroupValidator) {
    super(validator);
    this.controls = controls;
    this.optionals = isPresent(optionals) ? optionals : {};
    this._setParentForControls();
  }
  include(controlName) {
    this._dirty = true;
    StringMapWrapper.set(this.optionals, controlName, true);
  }
  exclude(controlName) {
    this._dirty = true;
    StringMapWrapper.set(this.optionals, controlName, false);
  }
  contains(controlName) {
    var c = StringMapWrapper.contains(this.controls, controlName);
    return c && this._included(controlName);
  }
  _setParentForControls() {
    StringMapWrapper.forEach(this.controls, (control, name) => {
      control.setParent(this);
    });
  }
  _updateIfNeeded() {
    if (this._dirty) {
      this._dirty = false;
      this._value = this._reduceValue();
      this._errors = this.validator(this);
      this._status = isPresent(this._errors) ? INVALID : VALID;
    }
  }
  _reduceValue() {
    var newValue = {};
    StringMapWrapper.forEach(this.controls, (control, name) => {
      if (this._included(name)) {
        newValue[name] = control.value;
      }
    });
    return newValue;
  }
  _controlChanged() {
    this._dirty = true;
    this._updateParent();
  }
  _included(controlName) {
    var isOptional = StringMapWrapper.contains(this.optionals, controlName);
    return !isOptional || StringMapWrapper.get(this.optionals, controlName);
  }
}
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