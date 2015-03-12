import {Template,
  Component,
  Decorator,
  NgElement,
  Ancestor,
  onChange} from 'angular2/core';
import {Optional} from 'angular2/di';
import {DOM} from 'angular2/src/dom/dom_adapter';
import {isBlank,
  isPresent,
  isString,
  CONST} from 'angular2/src/facade/lang';
import {StringMapWrapper,
  ListWrapper} from 'angular2/src/facade/collection';
import {ControlGroup,
  Control} from './model';
import * as validators from './validators';
export class ControlValueAccessor {
  readValue(el) {}
  writeValue(el, value) {}
}
Object.defineProperty(ControlValueAccessor, "annotations", {get: function() {
    return [new CONST()];
  }});
class DefaultControlValueAccessor extends ControlValueAccessor {
  constructor() {
    super();
  }
  readValue(el) {
    return DOM.getValue(el);
  }
  writeValue(el, value) {
    DOM.setValue(el, value);
  }
}
Object.defineProperty(DefaultControlValueAccessor, "annotations", {get: function() {
    return [new CONST()];
  }});
class CheckboxControlValueAccessor extends ControlValueAccessor {
  constructor() {
    super();
  }
  readValue(el) {
    return DOM.getChecked(el);
  }
  writeValue(el, value) {
    DOM.setChecked(el, value);
  }
}
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
  var accessor = StringMapWrapper.get(controlValueAccessors, controlType);
  if (isPresent(accessor)) {
    return accessor;
  } else {
    return StringMapWrapper.get(controlValueAccessors, "text");
  }
}
Object.defineProperty(controlValueAccessorFor, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
export class ControlDirective {
  constructor(groupDirective, el) {
    this._groupDirective = groupDirective;
    this._el = el;
    this.validator = validators.nullValidator;
  }
  onChange(_) {
    this._initialize();
  }
  _initialize() {
    this._groupDirective.addDirective(this);
    var c = this._control();
    c.validator = validators.compose([c.validator, this.validator]);
    if (isBlank(this.valueAccessor)) {
      this.valueAccessor = controlValueAccessorFor(this.type);
    }
    this._updateDomValue();
    DOM.on(this._el.domElement, "change", (_) => this._updateControlValue());
  }
  _updateDomValue() {
    this.valueAccessor.writeValue(this._el.domElement, this._control().value);
  }
  _updateControlValue() {
    this._control().updateValue(this.valueAccessor.readValue(this._el.domElement));
  }
  _control() {
    return this._groupDirective.findControl(this.controlName);
  }
}
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
export class ControlGroupDirective {
  constructor(groupDirective) {
    super();
    this._groupDirective = groupDirective;
    this._directives = ListWrapper.create();
  }
  set controlGroup(controlGroup) {
    if (isString(controlGroup)) {
      this._controlGroupName = controlGroup;
    } else {
      this._controlGroup = controlGroup;
    }
    this._updateDomValue();
  }
  _updateDomValue() {
    ListWrapper.forEach(this._directives, (cd) => cd._updateDomValue());
  }
  addDirective(c) {
    ListWrapper.push(this._directives, c);
  }
  findControl(name) {
    return this._getControlGroup().controls[name];
  }
  _getControlGroup() {
    if (isPresent(this._controlGroupName)) {
      return this._groupDirective.findControl(this._controlGroupName);
    } else {
      return this._controlGroup;
    }
  }
}
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
export var FormDirectives = [ControlGroupDirective, ControlDirective];

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/forms/directives.map

//# sourceMappingURL=./directives.map