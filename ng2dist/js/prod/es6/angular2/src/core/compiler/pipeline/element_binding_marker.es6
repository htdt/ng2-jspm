import {isPresent} from 'angular2/src/facade/lang';
import {MapWrapper} from 'angular2/src/facade/collection';
import {DOM} from 'angular2/src/dom/dom_adapter';
import {CompileStep} from './compile_step';
import {CompileElement} from './compile_element';
import {CompileControl} from './compile_control';
const NG_BINDING_CLASS = 'ng-binding';
export class ElementBindingMarker extends CompileStep {
  process(parent, current, control) {
    if (current.ignoreBindings) {
      return ;
    }
    var hasBindings = (isPresent(current.textNodeBindings) && MapWrapper.size(current.textNodeBindings) > 0) || (isPresent(current.propertyBindings) && MapWrapper.size(current.propertyBindings) > 0) || (isPresent(current.variableBindings) && MapWrapper.size(current.variableBindings) > 0) || (isPresent(current.eventBindings) && MapWrapper.size(current.eventBindings) > 0) || (isPresent(current.decoratorDirectives) && current.decoratorDirectives.length > 0) || isPresent(current.viewportDirective) || isPresent(current.componentDirective);
    if (hasBindings) {
      var element = current.element;
      DOM.addClass(element, NG_BINDING_CLASS);
      current.hasBindings = true;
    }
  }
}
Object.defineProperty(ElementBindingMarker.prototype.process, "parameters", {get: function() {
    return [[CompileElement], [CompileElement], [CompileControl]];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/core/compiler/pipeline/element_binding_marker.map

//# sourceMappingURL=./element_binding_marker.map