import {assert} from "rtts_assert/rtts_assert";
import {describe,
  it,
  expect,
  beforeEach,
  ddescribe,
  iit,
  xit,
  el} from 'angular2/test_lib';
import {CssProcessor,
  CssTransformer} from 'angular2/src/core/compiler/css_processor';
import {ShadowDomStrategy} from 'angular2/src/core/compiler/shadow_dom_strategy';
import {CompilePipeline} from 'angular2/src/core/compiler/pipeline/compile_pipeline';
import {CompileElement} from 'angular2/src/core/compiler/pipeline/compile_element';
import {CompileStep} from 'angular2/src/core/compiler/pipeline/compile_step';
import {CompileControl} from 'angular2/src/core/compiler/pipeline/compile_control';
import {DOM} from 'angular2/src/dom/dom_adapter';
import {Component} from 'angular2/src/core/annotations/annotations';
import {DirectiveMetadata} from 'angular2/src/core/compiler/directive_metadata';
import {ListWrapper} from 'angular2/src/facade/collection';
export function main() {
  describe('CssProcessor', () => {
    describe('compile step', () => {
      function createPipeline(cssProcessor, strategy, templateUrl) {
        assert.argumentTypes(cssProcessor, CssProcessor, strategy, ShadowDomStrategy, templateUrl, assert.type.string);
        var annotation = new Component();
        var meta = new DirectiveMetadata(SomeComponent, annotation);
        return new CompilePipeline([cssProcessor.getCompileStep(meta, strategy, templateUrl)]);
      }
      Object.defineProperty(createPipeline, "parameters", {get: function() {
          return [[CssProcessor], [ShadowDomStrategy], [assert.type.string]];
        }});
      it('it should set ignoreBindings to true for style elements', () => {
        var strategy = new FakeShadowDomStrategy(null);
        var cssProcessor = new CssProcessor(null);
        var pipeline = createPipeline(cssProcessor, strategy, 'http://base');
        var results = pipeline.process(el('<div><style></style></div>'));
        expect(results[0].ignoreBindings).toBe(false);
        expect(results[1].ignoreBindings).toBe(true);
      });
      it('should execute the strategy step for style elements', () => {
        var processedEls = [];
        var compileStep = new MockStep((parent, current, control) => {
          ListWrapper.push(processedEls, current.element);
        });
        var strategy = new FakeShadowDomStrategy(compileStep);
        var cssProcessor = new CssProcessor(null);
        var pipeline = createPipeline(cssProcessor, strategy, 'http://base');
        var results = pipeline.process(el('<div><style></style></div>'));
        expect(processedEls.length).toEqual(1);
        expect(processedEls[0]).toBe(results[1].element);
      });
      it('should apply the given transformers', () => {
        var strategy = new FakeShadowDomStrategy(null);
        var cssProcessor = new CssProcessor([new FakeCssTransformer('/*transformer1 */'), new FakeCssTransformer('/*transformer2 */')]);
        var pipeline = createPipeline(cssProcessor, strategy, 'http://base');
        var results = pipeline.process(el('<div><style></style></div>'));
        expect(results[1].element).toHaveText('/*transformer1 *//*transformer2 */');
      });
    });
  });
}
class FakeShadowDomStrategy extends ShadowDomStrategy {
  constructor(compileStep) {
    assert.argumentTypes(compileStep, CompileStep);
    super();
    this._compileStep = compileStep;
  }
  getStyleCompileStep(cmpMetadata, templateUrl) {
    assert.argumentTypes(cmpMetadata, DirectiveMetadata, templateUrl, assert.type.string);
    return assert.returnType((this._compileStep), CompileStep);
  }
}
Object.defineProperty(FakeShadowDomStrategy, "parameters", {get: function() {
    return [[CompileStep]];
  }});
Object.defineProperty(FakeShadowDomStrategy.prototype.getStyleCompileStep, "parameters", {get: function() {
    return [[DirectiveMetadata], [assert.type.string]];
  }});
class MockStep extends CompileStep {
  constructor(process) {
    super();
    this.processClosure = process;
  }
  process(parent, current, control) {
    assert.argumentTypes(parent, CompileElement, current, CompileElement, control, CompileControl);
    this.processClosure(parent, current, control);
  }
}
Object.defineProperty(MockStep.prototype.process, "parameters", {get: function() {
    return [[CompileElement], [CompileElement], [CompileControl]];
  }});
class FakeCssTransformer extends CssTransformer {
  constructor(css) {
    assert.argumentTypes(css, assert.type.string);
    super();
    this._css = css;
  }
  transform(styleEl) {
    var cssText = DOM.getText(styleEl);
    cssText += this._css;
    DOM.setText(styleEl, cssText);
  }
}
Object.defineProperty(FakeCssTransformer, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
class SomeComponent {}

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/test/core/compiler/css_processor_spec.map

//# sourceMappingURL=./css_processor_spec.map