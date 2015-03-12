var parse5Adapter = require('angular2/src/dom/parse5_adapter');
parse5Adapter.Parse5DomAdapter.makeCurrent();
"use strict";
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/test/change_detection/coalesce_spec";
var $__angular2_47_test_95_lib__,
    $__angular2_47_src_47_change_95_detection_47_coalesce__,
    $__angular2_47_src_47_change_95_detection_47_proto_95_record__;
var $__0 = ($__angular2_47_test_95_lib__ = require("angular2/test_lib"), $__angular2_47_test_95_lib__ && $__angular2_47_test_95_lib__.__esModule && $__angular2_47_test_95_lib__ || {default: $__angular2_47_test_95_lib__}),
    ddescribe = $__0.ddescribe,
    describe = $__0.describe,
    it = $__0.it,
    iit = $__0.iit,
    xit = $__0.xit,
    expect = $__0.expect,
    beforeEach = $__0.beforeEach,
    afterEach = $__0.afterEach;
var coalesce = ($__angular2_47_src_47_change_95_detection_47_coalesce__ = require("angular2/src/change_detection/coalesce"), $__angular2_47_src_47_change_95_detection_47_coalesce__ && $__angular2_47_src_47_change_95_detection_47_coalesce__.__esModule && $__angular2_47_src_47_change_95_detection_47_coalesce__ || {default: $__angular2_47_src_47_change_95_detection_47_coalesce__}).coalesce;
var $__2 = ($__angular2_47_src_47_change_95_detection_47_proto_95_record__ = require("angular2/src/change_detection/proto_record"), $__angular2_47_src_47_change_95_detection_47_proto_95_record__ && $__angular2_47_src_47_change_95_detection_47_proto_95_record__.__esModule && $__angular2_47_src_47_change_95_detection_47_proto_95_record__ || {default: $__angular2_47_src_47_change_95_detection_47_proto_95_record__}),
    RECORD_TYPE_SELF = $__2.RECORD_TYPE_SELF,
    ProtoRecord = $__2.ProtoRecord;
function main() {
  function r(funcOrValue, args, contextIndex, selfIndex) {
    var lastInBinding = arguments[4] !== (void 0) ? arguments[4] : false;
    return new ProtoRecord(99, "name", funcOrValue, args, null, contextIndex, selfIndex, null, null, null, lastInBinding, false);
  }
  describe("change detection - coalesce", (function() {
    it("should work with an empty list", (function() {
      expect(coalesce([])).toEqual([]);
    }));
    it("should remove non-terminal duplicate records" + " and update the context indices referencing them", (function() {
      var rs = coalesce([r("user", [], 0, 1), r("first", [], 1, 2), r("user", [], 0, 3), r("last", [], 3, 4)]);
      expect(rs).toEqual([r("user", [], 0, 1), r("first", [], 1, 2), r("last", [], 1, 3)]);
    }));
    it("should update indices of other records", (function() {
      var rs = coalesce([r("dup", [], 0, 1), r("dup", [], 0, 2), r("user", [], 0, 3), r("first", [3], 3, 4)]);
      expect(rs).toEqual([r("dup", [], 0, 1), r("user", [], 0, 2), r("first", [2], 2, 3)]);
    }));
    it("should remove non-terminal duplicate records" + " and update the args indices referencing them", (function() {
      var rs = coalesce([r("user1", [], 0, 1), r("user2", [], 0, 2), r("hi", [1], 0, 3), r("hi", [1], 0, 4), r("hi", [2], 0, 5)]);
      expect(rs).toEqual([r("user1", [], 0, 1), r("user2", [], 0, 2), r("hi", [1], 0, 3), r("hi", [2], 0, 4)]);
    }));
    it("should replace duplicate terminal records with" + " self records", (function() {
      var rs = coalesce([r("user", [], 0, 1, true), r("user", [], 0, 2, true)]);
      expect(rs[1]).toEqual(new ProtoRecord(RECORD_TYPE_SELF, "self", null, [], null, 1, 2, null, null, null, true, false));
    }));
  }));
}

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/test/change_detection/coalesce_spec.map

//# sourceMappingURL=./coalesce_spec.map
 main();