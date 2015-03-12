var parse5Adapter = require('angular2/src/dom/parse5_adapter');
parse5Adapter.Parse5DomAdapter.makeCurrent();
"use strict";
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/test/di/key_spec";
var $__angular2_47_test_95_lib__,
    $__angular2_47_di__;
var $__0 = ($__angular2_47_test_95_lib__ = require("angular2/test_lib"), $__angular2_47_test_95_lib__ && $__angular2_47_test_95_lib__.__esModule && $__angular2_47_test_95_lib__ || {default: $__angular2_47_test_95_lib__}),
    describe = $__0.describe,
    iit = $__0.iit,
    it = $__0.it,
    expect = $__0.expect,
    beforeEach = $__0.beforeEach;
var $__1 = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}),
    Key = $__1.Key,
    KeyRegistry = $__1.KeyRegistry;
function main() {
  describe("key", function() {
    var registry;
    beforeEach(function() {
      registry = new KeyRegistry();
    });
    it('should be equal to another key if type is the same', function() {
      expect(registry.get('car')).toBe(registry.get('car'));
    });
    it('should not be equal to another key if types are different', function() {
      expect(registry.get('car')).not.toBe(registry.get('porsche'));
    });
    it('should return the passed in key', function() {
      expect(registry.get(registry.get('car'))).toBe(registry.get('car'));
    });
    describe("metadata", function() {
      it("should assign metadata to a key", function() {
        var key = registry.get('car');
        Key.setMetadata(key, "meta");
        expect(key.metadata).toEqual("meta");
      });
      it("should allow assigning the same metadata twice", function() {
        var key = registry.get('car');
        Key.setMetadata(key, "meta");
        Key.setMetadata(key, "meta");
        expect(key.metadata).toEqual("meta");
      });
      it("should throw when assigning different metadata", function() {
        var key = registry.get('car');
        Key.setMetadata(key, "meta1");
        expect((function() {
          return Key.setMetadata(key, "meta2");
        })).toThrowError();
      });
    });
  });
}

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/test/di/key_spec.map

//# sourceMappingURL=./key_spec.map
 main();