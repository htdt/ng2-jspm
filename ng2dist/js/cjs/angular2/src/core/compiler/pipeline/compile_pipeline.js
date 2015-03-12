"use strict";
Object.defineProperties(module.exports, {
  CompilePipeline: {get: function() {
      return CompilePipeline;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/src/core/compiler/pipeline/compile_pipeline";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_dom_47_dom_95_adapter__,
    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__,
    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__,
    $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var isPresent = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).isPresent;
var $__2 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    List = $__2.List,
    ListWrapper = $__2.ListWrapper;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var CompileElement = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ = require("./compile_element"), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_element__}).CompileElement;
var CompileControl = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__ = require("./compile_control"), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_control__}).CompileControl;
var CompileStep = ($__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__ = require("./compile_step"), $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__ && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__.__esModule && $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__ || {default: $__angular2_47_src_47_core_47_compiler_47_pipeline_47_compile_95_step__}).CompileStep;
var CompilePipeline = function CompilePipeline(steps) {
  assert.argumentTypes(steps, assert.genericType(List, CompileStep));
  this._control = new CompileControl(steps);
};
($traceurRuntime.createClass)(CompilePipeline, {
  process: function(rootElement) {
    var compilationCtxtDescription = arguments[1] !== (void 0) ? arguments[1] : '';
    assert.argumentTypes(rootElement, assert.type.any, compilationCtxtDescription, assert.type.string);
    var results = ListWrapper.create();
    this._process(results, null, new CompileElement(rootElement, compilationCtxtDescription), compilationCtxtDescription);
    return assert.returnType((results), List);
  },
  _process: function(results, parent, current) {
    var compilationCtxtDescription = arguments[3] !== (void 0) ? arguments[3] : '';
    assert.argumentTypes(results, assert.type.any, parent, CompileElement, current, CompileElement, compilationCtxtDescription, assert.type.string);
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
}, {});
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