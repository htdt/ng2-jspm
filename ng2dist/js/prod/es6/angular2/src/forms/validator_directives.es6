import {Decorator} from 'angular2/core';
import {ControlDirective} from 'angular2/forms';
import * as validators from 'angular2/forms';
export class RequiredValidatorDirective {
  constructor(c) {
    c.validator = validators.compose([c.validator, validators.required]);
  }
}
Object.defineProperty(RequiredValidatorDirective, "annotations", {get: function() {
    return [new Decorator({selector: '[required]'})];
  }});
Object.defineProperty(RequiredValidatorDirective, "parameters", {get: function() {
    return [[ControlDirective]];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/forms/validator_directives.map

//# sourceMappingURL=./validator_directives.map