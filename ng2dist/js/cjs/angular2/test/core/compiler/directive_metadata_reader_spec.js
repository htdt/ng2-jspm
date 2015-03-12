var parse5Adapter = require('angular2/src/dom/parse5_adapter');
parse5Adapter.Parse5DomAdapter.makeCurrent();
"use strict";
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/test/core/compiler/directive_metadata_reader_spec";
var $__angular2_47_test_95_lib__,
    $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__,
    $__angular2_47_src_47_core_47_annotations_47_annotations__,
    $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__;
var $__0 = ($__angular2_47_test_95_lib__ = require("angular2/test_lib"), $__angular2_47_test_95_lib__ && $__angular2_47_test_95_lib__.__esModule && $__angular2_47_test_95_lib__ || {default: $__angular2_47_test_95_lib__}),
    ddescribe = $__0.ddescribe,
    describe = $__0.describe,
    it = $__0.it,
    iit = $__0.iit,
    expect = $__0.expect,
    beforeEach = $__0.beforeEach;
var DirectiveMetadataReader = ($__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__ = require("angular2/src/core/compiler/directive_metadata_reader"), $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__ && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__.__esModule && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__ || {default: $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__}).DirectiveMetadataReader;
var $__2 = ($__angular2_47_src_47_core_47_annotations_47_annotations__ = require("angular2/src/core/annotations/annotations"), $__angular2_47_src_47_core_47_annotations_47_annotations__ && $__angular2_47_src_47_core_47_annotations_47_annotations__.__esModule && $__angular2_47_src_47_core_47_annotations_47_annotations__ || {default: $__angular2_47_src_47_core_47_annotations_47_annotations__}),
    Decorator = $__2.Decorator,
    Component = $__2.Component,
    Viewport = $__2.Viewport;
var DirectiveMetadata = ($__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__ = require("angular2/src/core/compiler/directive_metadata"), $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__ && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__.__esModule && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__ || {default: $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__}).DirectiveMetadata;
var SomeDecorator = function SomeDecorator() {};
($traceurRuntime.createClass)(SomeDecorator, {}, {});
Object.defineProperty(SomeDecorator, "annotations", {get: function() {
    return [new Decorator({selector: 'someDecorator'})];
  }});
var SomeComponent = function SomeComponent() {};
($traceurRuntime.createClass)(SomeComponent, {}, {});
Object.defineProperty(SomeComponent, "annotations", {get: function() {
    return [new Component({selector: 'someComponent'})];
  }});
var SomeViewport = function SomeViewport() {};
($traceurRuntime.createClass)(SomeViewport, {}, {});
Object.defineProperty(SomeViewport, "annotations", {get: function() {
    return [new Viewport({selector: 'someViewport'})];
  }});
var SomeDirectiveWithoutAnnotation = function SomeDirectiveWithoutAnnotation() {};
($traceurRuntime.createClass)(SomeDirectiveWithoutAnnotation, {}, {});
function main() {
  describe("DirectiveMetadataReader", (function() {
    var reader;
    beforeEach((function() {
      reader = new DirectiveMetadataReader();
    }));
    it('should read out the Decorator annotation', (function() {
      var directiveMetadata = reader.read(SomeDecorator);
      expect(directiveMetadata).toEqual(new DirectiveMetadata(SomeDecorator, new Decorator({selector: 'someDecorator'})));
    }));
    it('should read out the Viewport annotation', (function() {
      var directiveMetadata = reader.read(SomeViewport);
      expect(directiveMetadata).toEqual(new DirectiveMetadata(SomeViewport, new Viewport({selector: 'someViewport'})));
    }));
    it('should read out the Component annotation', (function() {
      var directiveMetadata = reader.read(SomeComponent);
      expect(directiveMetadata).toEqual(new DirectiveMetadata(SomeComponent, new Component({selector: 'someComponent'})));
    }));
    it('should throw if not matching annotation is found', (function() {
      expect((function() {
        reader.read(SomeDirectiveWithoutAnnotation);
      })).toThrowError('No Directive annotation found on SomeDirectiveWithoutAnnotation');
    }));
  }));
}

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/test/core/compiler/directive_metadata_reader_spec.map

//# sourceMappingURL=./directive_metadata_reader_spec.map
 main();