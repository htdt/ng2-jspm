import {isPresent} from 'angular2/src/facade/lang';
import {List,
  ListWrapper} from 'angular2/src/facade/collection';
import {DOM} from 'angular2/src/dom/dom_adapter';
import {CompileElement} from './compile_element';
import {CompileControl} from './compile_control';
import {CompileStep} from './compile_step';
export class CompilePipeline {
  constructor(steps) {
    this._control = new CompileControl(steps);
  }
  process(rootElement, compilationCtxtDescription = '') {
    var results = ListWrapper.create();
    this._process(results, null, new CompileElement(rootElement, compilationCtxtDescription), compilationCtxtDescription);
    return results;
  }
  _process(results, parent, current, compilationCtxtDescription = '') {
    var additionalChildren = this._control.internalProcess(results, 0, parent, current);
    if (current.compileChildren) {
      var node = DOM.firstChild(DOM.templateAwareRoot(current.element));
      while (isPresent(node)) {
        var nextNode = DOM.nextSibling(node);
        if (DOM.isElementNode(node)) {
          this._process(results, current, new CompileElement(node, compilationCtxtDescription));
        }
        node = nextNode;
      }
    }
    if (isPresent(additionalChildren)) {
      for (var i = 0; i < additionalChildren.length; i++) {
        this._process(results, current, additionalChildren[i]);
      }
    }
  }
}
Object.defineProperty(CompilePipeline, "parameters", {get: function() {
    return [[assert.genericType(List, CompileStep)]];
  }});
Object.defineProperty(CompilePipeline.prototype.process, "parameters", {get: function() {
    return [[], [assert.type.string]];
  }});
Object.defineProperty(CompilePipeline.prototype._process, "parameters", {get: function() {
    return [[], [CompileElement], [CompileElement], [assert.type.string]];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/core/compiler/pipeline/compile_pipeline.map

//# sourceMappingURL=./compile_pipeline.map