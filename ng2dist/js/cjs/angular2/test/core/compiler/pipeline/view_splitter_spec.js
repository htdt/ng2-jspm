var parse5Adapter = require('angular2/src/dom/parse5_adapter');
parse5Adapter.Parse5DomAdapter.makeCurrent();
"use strict";
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/test/core/compiler/pipeline/view_splitter_spec";
var $__angular2_47_test_95_lib__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_view_95_splitter__,
    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_pipeline__,
    $__angular2_47_src_47_dom_47_dom_95_adapter__,
    $__angular2_47_change_95_detection__;
var $__0 = ($__angular2_47_test_95_lib__ = require("angular2/test_lib"), $__angular2_47_test_95_lib__ && $__angular2_47_test_95_lib__.__esModule && $__angular2_47_test_95_lib__ || {default: $__angular2_47_test_95_lib__}),
    describe = $__0.describe,
    beforeEach = $__0.beforeEach,
    it = $__0.it,
    expect = $__0.expect,
    iit = $__0.iit,
    ddescribe = $__0.ddescribe,
    el = $__0.el;
var MapWrapper = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}).MapWrapper;
var ViewSplitter = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_view_95_splitter__ = require("angular2/src/core/compiler/pipeline/view_splitter"), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_view_95_splitter__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_view_95_splitter__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_view_95_splitter__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_view_95_splitter__}).ViewSplitter;
var CompilePipeline = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_pipeline__ = require("angular2/src/core/compiler/pipeline/compile_pipeline"), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_pipeline__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_pipeline__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_pipeline__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_pipeline__}).CompilePipeline;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var $__5 = ($__angular2_47_change_95_detection__ = require("angular2/change_detection"), $__angular2_47_change_95_detection__ && $__angular2_47_change_95_detection__.__esModule && $__angular2_47_change_95_detection__ || {default: $__angular2_47_change_95_detection__}),
    Lexer = $__5.Lexer,
    Parser = $__5.Parser;
function main() {
  describe('ViewSplitter', (function() {
    function createPipeline() {
      return new CompilePipeline([new ViewSplitter(new Parser(new Lexer()))]);
    }
    it('should mark root elements as viewRoot', (function() {
      var rootElement = el('<div></div>');
      var results = createPipeline().process(rootElement);
      expect(results[0].isViewRoot).toBe(true);
    }));
    describe('<template> elements', (function() {
      it('should move the content into a new <template> element and mark that as viewRoot', (function() {
        var rootElement = el('<div><template if="true">a</template></div>');
        var results = createPipeline().process(rootElement);
        expect(DOM.getOuterHTML(results[1].element)).toEqual('<template if="true"></template>');
        expect(results[1].isViewRoot).toBe(false);
        expect(DOM.getOuterHTML(results[2].element)).toEqual('<template>a</template>');
        expect(results[2].isViewRoot).toBe(true);
      }));
      it('should not wrap a root <template> element', (function() {
        var rootElement = el('<div></div>');
        var results = createPipeline().process(rootElement);
        expect(results.length).toBe(1);
        expect(DOM.getOuterHTML(rootElement)).toEqual('<div></div>');
      }));
    }));
    describe('elements with template attribute', (function() {
      it('should replace the element with an empty <template> element', (function() {
        var rootElement = el('<div><span template=""></span></div>');
        var originalChild = rootElement.childNodes[0];
        var results = createPipeline().process(rootElement);
        expect(results[0].element).toBe(rootElement);
        expect(DOM.getOuterHTML(results[0].element)).toEqual('<div><template></template></div>');
        expect(DOM.getOuterHTML(results[2].element)).toEqual('<span template=""></span>');
        expect(results[2].element).toBe(originalChild);
      }));
      it('should mark the element as viewRoot', (function() {
        var rootElement = el('<div><div template></div></div>');
        var results = createPipeline().process(rootElement);
        expect(results[2].isViewRoot).toBe(true);
      }));
      it('should work with top-level template node', (function() {
        var rootElement = DOM.createTemplate('<div template>x</div>');
        var originalChild = DOM.content(rootElement).childNodes[0];
        var results = createPipeline().process(rootElement);
        expect(results[0].element).toBe(rootElement);
        expect(results[0].isViewRoot).toBe(true);
        expect(results[2].isViewRoot).toBe(true);
        expect(DOM.getOuterHTML(results[0].element)).toEqual('<template><template></template></template>');
        expect(results[2].element).toBe(originalChild);
      }));
      it('should add property bindings from the template attribute', (function() {
        var rootElement = el('<div><div template="prop:expr"></div></div>');
        var results = createPipeline().process(rootElement);
        expect(MapWrapper.get(results[1].propertyBindings, 'prop').source).toEqual('expr');
      }));
      it('should add variable mappings from the template attribute', (function() {
        var rootElement = el('<div><div template="var varName=mapName"></div></div>');
        var results = createPipeline().process(rootElement);
        expect(results[1].variableBindings).toEqual(MapWrapper.createFromStringMap({'mapName': 'varName'}));
      }));
      it('should add entries without value as attribute to the element', (function() {
        var rootElement = el('<div><div template="varname"></div></div>');
        var results = createPipeline().process(rootElement);
        expect(results[1].attrs()).toEqual(MapWrapper.createFromStringMap({'varname': ''}));
        expect(results[1].propertyBindings).toBe(null);
        expect(results[1].variableBindings).toBe(null);
      }));
      it('should iterate properly after a template dom modification', (function() {
        var rootElement = el('<div><div template></div><after></after></div>');
        var results = createPipeline().process(rootElement);
        expect(results.length).toEqual(4);
      }));
    }));
    describe('elements with *directive_name attribute', (function() {
      it('should replace the element with an empty <template> element', (function() {
        var rootElement = el('<div><span *if></span></div>');
        var originalChild = rootElement.childNodes[0];
        var results = createPipeline().process(rootElement);
        expect(results[0].element).toBe(rootElement);
        expect(DOM.getOuterHTML(results[0].element)).toEqual('<div><template if=""></template></div>');
        expect(DOM.getOuterHTML(results[2].element)).toEqual('<span *if=""></span>');
        expect(results[2].element).toBe(originalChild);
      }));
      it('should mark the element as viewRoot', (function() {
        var rootElement = el('<div><div *foo="bar"></div></div>');
        var results = createPipeline().process(rootElement);
        expect(results[2].isViewRoot).toBe(true);
      }));
      it('should work with top-level template node', (function() {
        var rootElement = DOM.createTemplate('<div *foo>x</div>');
        var originalChild = DOM.content(rootElement).childNodes[0];
        var results = createPipeline().process(rootElement);
        expect(results[0].element).toBe(rootElement);
        expect(results[0].isViewRoot).toBe(true);
        expect(results[2].isViewRoot).toBe(true);
        expect(DOM.getOuterHTML(results[0].element)).toEqual('<template><template foo=""></template></template>');
        expect(results[2].element).toBe(originalChild);
      }));
      it('should add property bindings from the template attribute', (function() {
        var rootElement = el('<div><div *prop="expr"></div></div>');
        var results = createPipeline().process(rootElement);
        expect(MapWrapper.get(results[1].propertyBindings, 'prop').source).toEqual('expr');
      }));
      it('should add variable mappings from the template attribute', (function() {
        var rootElement = el('<div><div *foreach="var varName=mapName"></div></div>');
        var results = createPipeline().process(rootElement);
        expect(results[1].variableBindings).toEqual(MapWrapper.createFromStringMap({'mapName': 'varName'}));
      }));
      it('should add entries without value as attribute to the element', (function() {
        var rootElement = el('<div><div *varname></div></div>');
        var results = createPipeline().process(rootElement);
        expect(results[1].attrs()).toEqual(MapWrapper.createFromStringMap({'varname': ''}));
        expect(results[1].propertyBindings).toBe(null);
        expect(results[1].variableBindings).toBe(null);
      }));
      it('should iterate properly after a template dom modification', (function() {
        var rootElement = el('<div><div *foo></div><after></after></div>');
        var results = createPipeline().process(rootElement);
        expect(results.length).toEqual(4);
      }));
      it('should not allow multiple template directives on the same element', (function() {
        expect((function() {
          var rootElement = el('<div><div *foo *bar="blah"></div></div>');
          createPipeline().process(rootElement);
        })).toThrowError('Only one template directive per element is allowed: foo and bar cannot be used simultaneously in <div *foo *bar="blah">');
      }));
      it('should not allow template and star directives on the same element', (function() {
        expect((function() {
          var rootElement = el('<div><div *foo template="bar"></div></div>');
          createPipeline().process(rootElement);
        })).toThrowError('Only one template directive per element is allowed: bar and foo cannot be used simultaneously in <div *foo template="bar">');
      }));
    }));
  }));
}

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/test/core/compiler/pipeline/view_splitter_spec.map

//# sourceMappingURL=./view_splitter_spec.map
 main();