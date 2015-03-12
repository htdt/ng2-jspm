import {Type} from 'angular2/src/facade/lang';
import {Directive} from 'angular2/src/core/annotations/annotations';
export class DirectiveMetadata {
  constructor(type, annotation) {
    this.annotation = annotation;
    this.type = type;
  }
}
Object.defineProperty(DirectiveMetadata, "parameters", {get: function() {
    return [[Type], [Directive]];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/core/compiler/directive_metadata.map

//# sourceMappingURL=./directive_metadata.map