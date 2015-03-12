import {assert} from "rtts_assert/rtts_assert";
import {DOM} from 'angular2/src/dom/dom_adapter';
import {isPresent} from 'angular2/src/facade/lang';
import {List} from 'angular2/src/facade/collection';
import {CompileStep} from './pipeline/compile_step';
import {CompileElement} from './pipeline/compile_element';
import {CompileControl} from './pipeline/compile_control';
import {ShadowDomStrategy} from './shadow_dom_strategy';
import {DirectiveMetadata} from './directive_metadata';
export class CssProcessor {
  constructor(transformers) {
    assert.argumentTypes(transformers, assert.genericType(List, CssTransformer));
    this._transformers = transformers;
  }
  getCompileStep(cmpMetadata, shadowDomStrategy, templateUrl) {
    assert.argumentTypes(cmpMetadata, DirectiveMetadata, shadowDomStrategy, ShadowDomStrategy, templateUrl, assert.type.string);
    var strategyStep = shadowDomStrategy.getStyleCompileStep(cmpMetadata, templateUrl);
    return new _CssProcessorStep(strategyStep, this._transformers);
  }
}
Object.defineProperty(CssProcessor, "parameters", {get: function() {
    return [[assert.genericType(List, CssTransformer)]];
  }});
Object.defineProperty(CssProcessor.prototype.getCompileStep, "parameters", {get: function() {
    return [[DirectiveMetadata], [ShadowDomStrategy], [assert.type.string]];
  }});
export class CssTransformer {
  transform(styleElement) {}
}
class _CssProcessorStep extends CompileStep {
  constructor(strategyStep, transformers) {
    assert.argumentTypes(strategyStep, CompileStep, transformers, assert.genericType(List, CssTransformer));
    super();
    this._strategyStep = strategyStep;
    this._transformers = transformers;
  }
  process(parent, current, control) {
    assert.argumentTypes(parent, CompileElement, current, CompileElement, control, CompileControl);
    if (DOM.tagName(current.element) == 'STYLE') {
      current.ignoreBindings = true;
      if (isPresent(this._transformers)) {
        var styleEl = current.element;
        for (var i = 0; i < this._transformers.length; i++) {
          this._transformers[i].transform(styleEl);
        }
      }
      if (isPresent(this._strategyStep)) {
        this._strategyStep.process(parent, current, control);
      }
    }
  }
}
Object.defineProperty(_CssProcessorStep, "parameters", {get: function() {
    return [[CompileStep], [assert.genericType(List, CssTransformer)]];
  }});
Object.defineProperty(_CssProcessorStep.prototype.process, "parameters", {get: function() {
    return [[CompileElement], [CompileElement], [CompileControl]];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/core/compiler/css_processor.map

//# sourceMappingURL=./css_processor.map