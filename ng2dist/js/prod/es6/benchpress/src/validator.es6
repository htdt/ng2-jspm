import {bind} from 'angular2/di';
import {List,
  StringMap} from 'angular2/src/facade/collection';
import {ABSTRACT,
  BaseException} from 'angular2/src/facade/lang';
import {MeasureValues} from './measure_values';
export class Validator {
  static bindTo(delegateToken) {
    return [bind(Validator).toFactory((delegate) => delegate, [delegateToken])];
  }
  validate(completeSample) {
    throw new BaseException('NYI');
  }
  describe() {
    throw new BaseException('NYI');
  }
}
Object.defineProperty(Validator, "annotations", {get: function() {
    return [new ABSTRACT()];
  }});
Object.defineProperty(Validator.prototype.validate, "parameters", {get: function() {
    return [[assert.genericType(List, MeasureValues)]];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/benchpress/src/validator.map

//# sourceMappingURL=./validator.map