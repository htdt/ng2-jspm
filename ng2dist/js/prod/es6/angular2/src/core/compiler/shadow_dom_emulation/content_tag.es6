import {Decorator} from '../../annotations/annotations';
import * as ldModule from './light_dom';
import {Inject} from 'angular2/di';
import {DOM} from 'angular2/src/dom/dom_adapter';
import {isPresent} from 'angular2/src/facade/lang';
import {List,
  ListWrapper} from 'angular2/src/facade/collection';
import {NgElement} from 'angular2/src/core/dom/element';
class ContentStrategy {
  insert(nodes) {}
}
Object.defineProperty(ContentStrategy.prototype.insert, "parameters", {get: function() {
    return [[List]];
  }});
class RenderedContent extends ContentStrategy {
  constructor(contentEl) {
    super();
    this._replaceContentElementWithScriptTags(contentEl);
    this.nodes = [];
  }
  _scriptTemplate() {
    if (!isPresent(RenderedContent._lazyScriptTemplate)) {
      RenderedContent._lazyScriptTemplate = DOM.createScriptTag('type', 'ng/content');
    }
    return RenderedContent._lazyScriptTemplate;
  }
  insert(nodes) {
    this.nodes = nodes;
    DOM.insertAllBefore(this.endScript, nodes);
    this._removeNodesUntil(ListWrapper.isEmpty(nodes) ? this.endScript : nodes[0]);
  }
  _replaceContentElementWithScriptTags(contentEl) {
    this.beginScript = DOM.clone(this._scriptTemplate());
    this.endScript = DOM.clone(this._scriptTemplate());
    DOM.insertBefore(contentEl, this.beginScript);
    DOM.insertBefore(contentEl, this.endScript);
    DOM.removeChild(DOM.parentElement(contentEl), contentEl);
  }
  _removeNodesUntil(node) {
    var p = DOM.parentElement(this.beginScript);
    for (var next = DOM.nextSibling(this.beginScript); next !== node; next = DOM.nextSibling(this.beginScript)) {
      DOM.removeChild(p, next);
    }
  }
}
Object.defineProperty(RenderedContent.prototype.insert, "parameters", {get: function() {
    return [[List]];
  }});
class IntermediateContent extends ContentStrategy {
  constructor(destinationLightDom) {
    super();
    this.destinationLightDom = destinationLightDom;
    this.nodes = [];
  }
  insert(nodes) {
    this.nodes = nodes;
    this.destinationLightDom.redistribute();
  }
}
Object.defineProperty(IntermediateContent, "parameters", {get: function() {
    return [[ldModule.LightDom]];
  }});
Object.defineProperty(IntermediateContent.prototype.insert, "parameters", {get: function() {
    return [[List]];
  }});
export class Content {
  constructor(destinationLightDom, contentEl) {
    this.select = contentEl.getAttribute('select');
    this._strategy = isPresent(destinationLightDom) ? new IntermediateContent(destinationLightDom) : new RenderedContent(contentEl.domElement);
  }
  nodes() {
    return this._strategy.nodes;
  }
  insert(nodes) {
    this._strategy.insert(nodes);
  }
}
Object.defineProperty(Content, "annotations", {get: function() {
    return [new Decorator({selector: 'content'})];
  }});
Object.defineProperty(Content, "parameters", {get: function() {
    return [[new Inject(ldModule.DestinationLightDom)], [NgElement]];
  }});
Object.defineProperty(Content.prototype.insert, "parameters", {get: function() {
    return [[List]];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/core/compiler/shadow_dom_emulation/content_tag.map

//# sourceMappingURL=./content_tag.map