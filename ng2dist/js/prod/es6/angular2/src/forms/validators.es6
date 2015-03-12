import {isBlank,
  isPresent} from 'angular2/src/facade/lang';
import {List,
  ListWrapper,
  StringMapWrapper} from 'angular2/src/facade/collection';
import {ControlGroup,
  Control} from 'angular2/forms';
export function required(c) {
  return isBlank(c.value) || c.value == "" ? {"required": true} : null;
}
Object.defineProperty(required, "parameters", {get: function() {
    return [[Control]];
  }});
export function nullValidator(c) {
  return null;
}
Object.defineProperty(nullValidator, "parameters", {get: function() {
    return [[Control]];
  }});
export function compose(validators) {
  return function(c) {
    var res = ListWrapper.reduce(validators, (res, validator) => {
      var errors = validator(c);
      return isPresent(errors) ? StringMapWrapper.merge(res, errors) : res;
    }, {});
    return StringMapWrapper.isEmpty(res) ? null : res;
  };
}
Object.defineProperty(compose, "parameters", {get: function() {
    return [[assert.genericType(List, Function)]];
  }});
export function controlGroupValidator(c) {
  var res = {};
  StringMapWrapper.forEach(c.controls, (control, name) => {
    if (c.contains(name) && isPresent(control.errors)) {
      StringMapWrapper.forEach(control.errors, (value, error) => {
        if (!StringMapWrapper.contains(res, error)) {
          res[error] = [];
        }
        ListWrapper.push(res[error], control);
      });
    }
  });
  return StringMapWrapper.isEmpty(res) ? null : res;
}
Object.defineProperty(controlGroupValidator, "parameters", {get: function() {
    return [[ControlGroup]];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/forms/validators.map

//# sourceMappingURL=./validators.map