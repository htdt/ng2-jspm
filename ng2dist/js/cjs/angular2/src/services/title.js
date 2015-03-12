"use strict";
Object.defineProperties(module.exports, {
  Title: {get: function() {
      return Title;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/src/services/title";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_src_47_dom_47_dom_95_adapter__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var Title = function Title() {};
($traceurRuntime.createClass)(Title, {
  getTitle: function() {
    return assert.returnType((DOM.getTitle()), assert.type.string);
  },
  setTitle: function(newTitle) {
    assert.argumentTypes(newTitle, assert.type.string);
    DOM.setTitle(newTitle);
  }
}, {});
Object.defineProperty(Title.prototype.setTitle, "parameters", {get: function() {
    return [[assert.type.string]];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/services/title.map

//# sourceMappingURL=./title.map