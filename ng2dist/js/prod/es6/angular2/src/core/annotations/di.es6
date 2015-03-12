import {CONST} from 'angular2/src/facade/lang';
import {DependencyAnnotation} from 'angular2/di';
export class EventEmitter extends DependencyAnnotation {
  constructor(eventName) {
    super();
    this.eventName = eventName;
  }
}
Object.defineProperty(EventEmitter, "annotations", {get: function() {
    return [new CONST()];
  }});
export class PropertySetter extends DependencyAnnotation {
  constructor(propName) {
    super();
    this.propName = propName;
  }
}
Object.defineProperty(PropertySetter, "annotations", {get: function() {
    return [new CONST()];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/core/annotations/di.map

//# sourceMappingURL=./di.map