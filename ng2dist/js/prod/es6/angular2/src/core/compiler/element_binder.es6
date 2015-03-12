import {ProtoElementInjector} from './element_injector';
import {DirectiveMetadata} from './directive_metadata';
import {List,
  StringMap} from 'angular2/src/facade/collection';
import {ProtoView} from './view';
export class ElementBinder {
  constructor(protoElementInjector, componentDirective, viewportDirective) {
    this.protoElementInjector = protoElementInjector;
    this.componentDirective = componentDirective;
    this.viewportDirective = viewportDirective;
    this.events = null;
    this.textNodeIndices = null;
    this.hasElementPropertyBindings = false;
    this.nestedProtoView = null;
  }
}
Object.defineProperty(ElementBinder, "parameters", {get: function() {
    return [[ProtoElementInjector], [DirectiveMetadata], [DirectiveMetadata]];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/core/compiler/element_binder.map

//# sourceMappingURL=./element_binder.map