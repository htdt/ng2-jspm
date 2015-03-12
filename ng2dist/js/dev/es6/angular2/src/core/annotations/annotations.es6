import {assert} from "rtts_assert/rtts_assert";
import {ABSTRACT,
  CONST,
  normalizeBlank,
  isPresent} from 'angular2/src/facade/lang';
import {ListWrapper,
  List} from 'angular2/src/facade/collection';
export class Directive {
  constructor({selector,
    bind,
    events,
    lightDomServices,
    implementsTypes,
    lifecycle} = {}) {
    this.selector = selector;
    this.lightDomServices = lightDomServices;
    this.implementsTypes = implementsTypes;
    this.bind = bind;
    this.events = events;
    this.lifecycle = lifecycle;
  }
  hasLifecycleHook(hook) {
    assert.argumentTypes(hook, assert.type.string);
    return assert.returnType((isPresent(this.lifecycle) ? ListWrapper.contains(this.lifecycle, hook) : false), assert.type.boolean);
  }
}
Object.defineProperty(Directive, "annotations", {get: function() {
    return [new ABSTRACT(), new CONST()];
  }});
Object.defineProperty(Directive.prototype.hasLifecycleHook, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
export class Component extends Directive {
  constructor({selector,
    bind,
    events,
    lightDomServices,
    shadowDomServices,
    componentServices,
    implementsTypes,
    lifecycle} = {}) {
    super({
      selector: selector,
      bind: bind,
      events: events,
      lightDomServices: lightDomServices,
      implementsTypes: implementsTypes,
      lifecycle: lifecycle
    });
    this.shadowDomServices = shadowDomServices;
    this.componentServices = componentServices;
  }
}
Object.defineProperty(Component, "annotations", {get: function() {
    return [new CONST()];
  }});
export class Decorator extends Directive {
  constructor({selector,
    bind,
    events,
    lightDomServices,
    implementsTypes,
    lifecycle,
    compileChildren = true} = {}) {
    this.compileChildren = compileChildren;
    super({
      selector: selector,
      bind: bind,
      events: events,
      lightDomServices: lightDomServices,
      implementsTypes: implementsTypes,
      lifecycle: lifecycle
    });
  }
}
Object.defineProperty(Decorator, "annotations", {get: function() {
    return [new CONST()];
  }});
export class Viewport extends Directive {
  constructor({selector,
    bind,
    events,
    lightDomServices,
    implementsTypes,
    lifecycle} = {}) {
    super({
      selector: selector,
      bind: bind,
      events: events,
      lightDomServices: lightDomServices,
      implementsTypes: implementsTypes,
      lifecycle: lifecycle
    });
  }
}
Object.defineProperty(Viewport, "annotations", {get: function() {
    return [new CONST()];
  }});
export const onDestroy = "onDestroy";
export const onChange = "onChange";

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/core/annotations/annotations.map

//# sourceMappingURL=./annotations.map