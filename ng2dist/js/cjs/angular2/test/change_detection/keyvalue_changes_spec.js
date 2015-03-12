var parse5Adapter = require('angular2/src/dom/parse5_adapter');
parse5Adapter.Parse5DomAdapter.makeCurrent();
"use strict";
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/test/change_detection/keyvalue_changes_spec";
var $__angular2_47_test_95_lib__,
    $__angular2_47_src_47_change_95_detection_47_pipes_47_keyvalue_95_changes__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_test_47_change_95_detection_47_util__;
var $__0 = ($__angular2_47_test_95_lib__ = require("angular2/test_lib"), $__angular2_47_test_95_lib__ && $__angular2_47_test_95_lib__.__esModule && $__angular2_47_test_95_lib__ || {default: $__angular2_47_test_95_lib__}),
    describe = $__0.describe,
    it = $__0.it,
    iit = $__0.iit,
    xit = $__0.xit,
    expect = $__0.expect,
    beforeEach = $__0.beforeEach,
    afterEach = $__0.afterEach;
var KeyValueChanges = ($__angular2_47_src_47_change_95_detection_47_pipes_47_keyvalue_95_changes__ = require("angular2/src/change_detection/pipes/keyvalue_changes"), $__angular2_47_src_47_change_95_detection_47_pipes_47_keyvalue_95_changes__ && $__angular2_47_src_47_change_95_detection_47_pipes_47_keyvalue_95_changes__.__esModule && $__angular2_47_src_47_change_95_detection_47_pipes_47_keyvalue_95_changes__ || {default: $__angular2_47_src_47_change_95_detection_47_pipes_47_keyvalue_95_changes__}).KeyValueChanges;
var $__2 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    NumberWrapper = $__2.NumberWrapper,
    isJsObject = $__2.isJsObject;
var MapWrapper = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}).MapWrapper;
var kvChangesAsString = ($__angular2_47_test_47_change_95_detection_47_util__ = require("./util"), $__angular2_47_test_47_change_95_detection_47_util__ && $__angular2_47_test_47_change_95_detection_47_util__.__esModule && $__angular2_47_test_47_change_95_detection_47_util__ || {default: $__angular2_47_test_47_change_95_detection_47_util__}).kvChangesAsString;
function main() {
  describe('keyvalue_changes', function() {
    describe('KeyValueChanges', function() {
      var changes;
      var m;
      beforeEach((function() {
        changes = new KeyValueChanges();
        m = MapWrapper.create();
      }));
      afterEach((function() {
        changes = null;
      }));
      it('should detect additions', (function() {
        changes.check(m);
        MapWrapper.set(m, 'a', 1);
        changes.check(m);
        expect(changes.toString()).toEqual(kvChangesAsString({
          map: ['a[null->1]'],
          additions: ['a[null->1]']
        }));
        MapWrapper.set(m, 'b', 2);
        changes.check(m);
        expect(changes.toString()).toEqual(kvChangesAsString({
          map: ['a', 'b[null->2]'],
          previous: ['a'],
          additions: ['b[null->2]']
        }));
      }));
      it('should handle changing key/values correctly', (function() {
        MapWrapper.set(m, 1, 10);
        MapWrapper.set(m, 2, 20);
        changes.check(m);
        MapWrapper.set(m, 2, 10);
        MapWrapper.set(m, 1, 20);
        changes.check(m);
        expect(changes.toString()).toEqual(kvChangesAsString({
          map: ['1[10->20]', '2[20->10]'],
          previous: ['1[10->20]', '2[20->10]'],
          changes: ['1[10->20]', '2[20->10]']
        }));
      }));
      it('should do basic map watching', (function() {
        changes.check(m);
        MapWrapper.set(m, 'a', 'A');
        changes.check(m);
        expect(changes.toString()).toEqual(kvChangesAsString({
          map: ['a[null->A]'],
          additions: ['a[null->A]']
        }));
        MapWrapper.set(m, 'b', 'B');
        changes.check(m);
        expect(changes.toString()).toEqual(kvChangesAsString({
          map: ['a', 'b[null->B]'],
          previous: ['a'],
          additions: ['b[null->B]']
        }));
        MapWrapper.set(m, 'b', 'BB');
        MapWrapper.set(m, 'd', 'D');
        changes.check(m);
        expect(changes.toString()).toEqual(kvChangesAsString({
          map: ['a', 'b[B->BB]', 'd[null->D]'],
          previous: ['a', 'b[B->BB]'],
          additions: ['d[null->D]'],
          changes: ['b[B->BB]']
        }));
        MapWrapper.delete(m, 'b');
        changes.check(m);
        expect(changes.toString()).toEqual(kvChangesAsString({
          map: ['a', 'd'],
          previous: ['a', 'b[BB->null]', 'd'],
          removals: ['b[BB->null]']
        }));
        MapWrapper.clear(m);
        changes.check(m);
        expect(changes.toString()).toEqual(kvChangesAsString({
          previous: ['a[A->null]', 'd[D->null]'],
          removals: ['a[A->null]', 'd[D->null]']
        }));
      }));
      it('should test string by value rather than by reference (DART)', (function() {
        MapWrapper.set(m, 'foo', 'bar');
        changes.check(m);
        var f = 'f';
        var oo = 'oo';
        var b = 'b';
        var ar = 'ar';
        MapWrapper.set(m, f + oo, b + ar);
        changes.check(m);
        expect(changes.toString()).toEqual(kvChangesAsString({
          map: ['foo'],
          previous: ['foo']
        }));
      }));
      it('should not see a NaN value as a change (JS)', (function() {
        MapWrapper.set(m, 'foo', NumberWrapper.NaN);
        changes.check(m);
        changes.check(m);
        expect(changes.toString()).toEqual(kvChangesAsString({
          map: ['foo'],
          previous: ['foo']
        }));
      }));
      if (isJsObject({})) {
        describe('JsObject changes', (function() {
          it('should support JS Object', (function() {
            expect(KeyValueChanges.supportsObj({})).toBeTruthy();
            expect(KeyValueChanges.supportsObj("not supported")).toBeFalsy();
            expect(KeyValueChanges.supportsObj(0)).toBeFalsy();
            expect(KeyValueChanges.supportsObj(null)).toBeFalsy();
          }));
          it('should do basic object watching', (function() {
            m = {};
            changes.check(m);
            m['a'] = 'A';
            changes.check(m);
            expect(changes.toString()).toEqual(kvChangesAsString({
              map: ['a[null->A]'],
              additions: ['a[null->A]']
            }));
            m['b'] = 'B';
            changes.check(m);
            expect(changes.toString()).toEqual(kvChangesAsString({
              map: ['a', 'b[null->B]'],
              previous: ['a'],
              additions: ['b[null->B]']
            }));
            m['b'] = 'BB';
            m['d'] = 'D';
            changes.check(m);
            expect(changes.toString()).toEqual(kvChangesAsString({
              map: ['a', 'b[B->BB]', 'd[null->D]'],
              previous: ['a', 'b[B->BB]'],
              additions: ['d[null->D]'],
              changes: ['b[B->BB]']
            }));
            m = {};
            m['a'] = 'A';
            m['d'] = 'D';
            changes.check(m);
            expect(changes.toString()).toEqual(kvChangesAsString({
              map: ['a', 'd'],
              previous: ['a', 'b[BB->null]', 'd'],
              removals: ['b[BB->null]']
            }));
            m = {};
            changes.check(m);
            expect(changes.toString()).toEqual(kvChangesAsString({
              previous: ['a[A->null]', 'd[D->null]'],
              removals: ['a[A->null]', 'd[D->null]']
            }));
          }));
        }));
      }
    });
  });
}

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/test/change_detection/keyvalue_changes_spec.map

//# sourceMappingURL=./keyvalue_changes_spec.map
 main();