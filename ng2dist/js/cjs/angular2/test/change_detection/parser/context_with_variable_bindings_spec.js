var parse5Adapter = require('angular2/src/dom/parse5_adapter');
parse5Adapter.Parse5DomAdapter.makeCurrent();
"use strict";
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/test/change_detection/parser/context_with_variable_bindings_spec";
var $__angular2_47_test_95_lib__,
    $__angular2_47_src_47_change_95_detection_47_parser_47_context_95_with_95_variable_95_bindings__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__;
var $__0 = ($__angular2_47_test_95_lib__ = require("angular2/test_lib"), $__angular2_47_test_95_lib__ && $__angular2_47_test_95_lib__.__esModule && $__angular2_47_test_95_lib__ || {default: $__angular2_47_test_95_lib__}),
    ddescribe = $__0.ddescribe,
    describe = $__0.describe,
    it = $__0.it,
    xit = $__0.xit,
    iit = $__0.iit,
    expect = $__0.expect,
    beforeEach = $__0.beforeEach;
var ContextWithVariableBindings = ($__angular2_47_src_47_change_95_detection_47_parser_47_context_95_with_95_variable_95_bindings__ = require("angular2/src/change_detection/parser/context_with_variable_bindings"), $__angular2_47_src_47_change_95_detection_47_parser_47_context_95_with_95_variable_95_bindings__ && $__angular2_47_src_47_change_95_detection_47_parser_47_context_95_with_95_variable_95_bindings__.__esModule && $__angular2_47_src_47_change_95_detection_47_parser_47_context_95_with_95_variable_95_bindings__ || {default: $__angular2_47_src_47_change_95_detection_47_parser_47_context_95_with_95_variable_95_bindings__}).ContextWithVariableBindings;
var $__2 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    BaseException = $__2.BaseException,
    isBlank = $__2.isBlank,
    isPresent = $__2.isPresent;
var $__3 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    MapWrapper = $__3.MapWrapper,
    ListWrapper = $__3.ListWrapper;
function main() {
  describe('ContextWithVariableBindings', (function() {
    var locals;
    beforeEach((function() {
      locals = new ContextWithVariableBindings(null, MapWrapper.createFromPairs([['key', 'value'], ['nullKey', null]]));
    }));
    it('should support getting values', (function() {
      expect(locals.get('key')).toBe('value');
      var notPresentValue = locals.get('notPresent');
      expect(isPresent(notPresentValue)).toBe(false);
    }));
    it('should support checking if key is persent', (function() {
      expect(locals.hasBinding('key')).toBe(true);
      expect(locals.hasBinding('nullKey')).toBe(true);
      expect(locals.hasBinding('notPresent')).toBe(false);
    }));
    it('should support setting persent keys', (function() {
      locals.set('key', 'bar');
      expect(locals.get('key')).toBe('bar');
    }));
    it('should not support setting keys that are not present already', (function() {
      expect((function() {
        return locals.set('notPresent', 'bar');
      })).toThrowError();
    }));
    it('should clearValues', (function() {
      locals.clearValues();
      expect(locals.get('key')).toBe(null);
    }));
  }));
}

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/test/change_detection/parser/context_with_variable_bindings_spec.map

//# sourceMappingURL=./context_with_variable_bindings_spec.map
 main();