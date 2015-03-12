var parse5Adapter = require('angular2/src/dom/parse5_adapter');
parse5Adapter.Parse5DomAdapter.makeCurrent();
"use strict";
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/test/core/compiler/component_url_mapper_spec";
var $__angular2_47_test_95_lib__,
    $__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__;
var $__0 = ($__angular2_47_test_95_lib__ = require("angular2/test_lib"), $__angular2_47_test_95_lib__ && $__angular2_47_test_95_lib__.__esModule && $__angular2_47_test_95_lib__ || {default: $__angular2_47_test_95_lib__}),
    describe = $__0.describe,
    it = $__0.it,
    expect = $__0.expect,
    beforeEach = $__0.beforeEach,
    ddescribe = $__0.ddescribe,
    iit = $__0.iit,
    xit = $__0.xit,
    el = $__0.el;
var $__1 = ($__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__ = require("angular2/src/core/compiler/component_url_mapper"), $__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__ && $__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__.__esModule && $__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__ || {default: $__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__}),
    ComponentUrlMapper = $__1.ComponentUrlMapper,
    RuntimeComponentUrlMapper = $__1.RuntimeComponentUrlMapper;
function main() {
  describe('RuntimeComponentUrlMapper', (function() {
    it('should return the registered URL', (function() {
      var url = 'http://path/to/component';
      var mapper = new RuntimeComponentUrlMapper();
      mapper.setComponentUrl(SomeComponent, url);
      expect(mapper.getUrl(SomeComponent)).toEqual(url);
    }));
    it('should fallback to ComponentUrlMapper', (function() {
      var mapper = new ComponentUrlMapper();
      var runtimeMapper = new RuntimeComponentUrlMapper();
      expect(runtimeMapper.getUrl(SomeComponent)).toEqual(mapper.getUrl(SomeComponent));
    }));
  }));
}
var SomeComponent = function SomeComponent() {};
($traceurRuntime.createClass)(SomeComponent, {}, {});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/test/core/compiler/component_url_mapper_spec.map

//# sourceMappingURL=./component_url_mapper_spec.map
 main();