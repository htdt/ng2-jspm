import {Map,
  MapWrapper,
  ListWrapper} from 'angular2/src/facade/collection';
import {Type,
  isPresent} from 'angular2/src/facade/lang';
import {Template} from 'angular2/src/core/annotations/template';
import {TemplateResolver} from 'angular2/src/core/compiler/template_resolver';
export class MockTemplateResolver extends TemplateResolver {
  constructor() {
    super();
    this._cmpTemplates = MapWrapper.create();
  }
  setTemplate(component, template) {
    MapWrapper.set(this._cmpTemplates, component, template);
  }
  resolve(component) {
    var override = MapWrapper.get(this._cmpTemplates, component);
    if (isPresent(override)) {
      return override;
    }
    return super.resolve(component);
  }
}
Object.defineProperty(MockTemplateResolver.prototype.setTemplate, "parameters", {get: function() {
    return [[Type], [Template]];
  }});
Object.defineProperty(MockTemplateResolver.prototype.resolve, "parameters", {get: function() {
    return [[Type]];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/mock/template_resolver_mock.map

//# sourceMappingURL=./template_resolver_mock.map