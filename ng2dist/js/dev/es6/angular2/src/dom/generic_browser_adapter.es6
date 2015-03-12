import {assert} from "rtts_assert/rtts_assert";
import {ABSTRACT} from 'angular2/src/facade/lang';
import {List,
  ListWrapper} from 'angular2/src/facade/collection';
import {isPresent} from 'angular2/src/facade/lang';
import {DomAdapter} from './dom_adapter';
export class GenericBrowserDomAdapter extends DomAdapter {
  resolveAndSetHref(el, baseUrl, href) {
    assert.argumentTypes(el, assert.type.any, baseUrl, assert.type.string, href, assert.type.string);
    el.href = href == null ? baseUrl : baseUrl + '/../' + href;
  }
  cssToRules(css) {
    assert.argumentTypes(css, assert.type.string);
    var style = this.createStyleElement(css);
    this.appendChild(this.defaultDoc().head, style);
    var rules = ListWrapper.create();
    if (isPresent(style.sheet)) {
      try {
        var rawRules = style.sheet.cssRules;
        rules = ListWrapper.createFixedSize(rawRules.length);
        for (var i = 0; i < rawRules.length; i++) {
          rules[i] = rawRules[i];
        }
      } catch (e) {}
    } else {}
    this.remove(style);
    return assert.returnType((rules), List);
  }
}
Object.defineProperty(GenericBrowserDomAdapter, "annotations", {get: function() {
    return [new ABSTRACT()];
  }});
Object.defineProperty(GenericBrowserDomAdapter.prototype.resolveAndSetHref, "parameters", {get: function() {
    return [[], [assert.type.string], [assert.type.string]];
  }});
Object.defineProperty(GenericBrowserDomAdapter.prototype.cssToRules, "parameters", {get: function() {
    return [[assert.type.string]];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/dom/generic_browser_adapter.map

//# sourceMappingURL=./generic_browser_adapter.map