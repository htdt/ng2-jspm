"use strict";
Object.defineProperties(module.exports, {
  DirectiveMetadata: {get: function() {
      return DirectiveMetadata;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/src/core/compiler/directive_metadata";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_core_47_annotations_47_annotations__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var Type = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).Type;
var Directive = ($__angular2_47_src_47_core_47_annotations_47_annotations__ = require("angular2/src/core/annotations/annotations"), $__angular2_47_src_47_core_47_annotations_47_annotations__ && $__angular2_47_src_47_core_47_annotations_47_annotations__.__esModule && $__angular2_47_src_47_core_47_annotations_47_annotations__ || {default: $__angular2_47_src_47_core_47_annotations_47_annotations__}).Directive;
var DirectiveMetadata = function DirectiveMetadata(type, annotation) {
  assert.argumentTypes(type, Type, annotation, Directive);
  this.annotation = annotation;
  this.type = type;
};
($traceurRuntime.createClass)(DirectiveMetadata, {}, {});
Object.defineProperty(DirectiveMetadata, "parameters", {get: function() {
    return [[Type], [Directive]];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/core/compiler/directive_metadata.map

//# sourceMappingURL=./directive_metadata.map