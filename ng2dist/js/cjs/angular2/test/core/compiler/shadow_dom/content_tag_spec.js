var parse5Adapter = require('angular2/src/dom/parse5_adapter');
parse5Adapter.Parse5DomAdapter.makeCurrent();
"use strict";
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/test/core/compiler/shadow_dom/content_tag_spec";
var $__angular2_47_test_95_lib__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_dom_47_dom_95_adapter__,
    $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_content_95_tag__,
    $__angular2_47_src_47_core_47_dom_47_element__,
    $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_light_95_dom__;
var $__0 = ($__angular2_47_test_95_lib__ = require("angular2/test_lib"), $__angular2_47_test_95_lib__ && $__angular2_47_test_95_lib__.__esModule && $__angular2_47_test_95_lib__ || {default: $__angular2_47_test_95_lib__}),
    describe = $__0.describe,
    beforeEach = $__0.beforeEach,
    it = $__0.it,
    expect = $__0.expect,
    ddescribe = $__0.ddescribe,
    iit = $__0.iit,
    SpyObject = $__0.SpyObject,
    el = $__0.el,
    proxy = $__0.proxy;
var IMPLEMENTS = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).IMPLEMENTS;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var Content = ($__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_content_95_tag__ = require("angular2/src/core/compiler/shadow_dom_emulation/content_tag"), $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_content_95_tag__ && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_content_95_tag__.__esModule && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_content_95_tag__ || {default: $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_content_95_tag__}).Content;
var NgElement = ($__angular2_47_src_47_core_47_dom_47_element__ = require("angular2/src/core/dom/element"), $__angular2_47_src_47_core_47_dom_47_element__ && $__angular2_47_src_47_core_47_dom_47_element__.__esModule && $__angular2_47_src_47_core_47_dom_47_element__ || {default: $__angular2_47_src_47_core_47_dom_47_element__}).NgElement;
var LightDom = ($__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_light_95_dom__ = require("angular2/src/core/compiler/shadow_dom_emulation/light_dom"), $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_light_95_dom__ && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_light_95_dom__.__esModule && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_light_95_dom__ || {default: $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_light_95_dom__}).LightDom;
var DummyLightDom = function DummyLightDom() {
  $traceurRuntime.superConstructor($DummyLightDom).apply(this, arguments);
};
var $DummyLightDom = DummyLightDom;
($traceurRuntime.createClass)(DummyLightDom, {noSuchMethod: function(m) {
    $traceurRuntime.superGet(this, $DummyLightDom.prototype, "noSuchMethod").call(this, m);
  }}, {}, SpyObject);
Object.defineProperty(DummyLightDom, "annotations", {get: function() {
    return [new proxy, new IMPLEMENTS(LightDom)];
  }});
var _script = "<script type=\"ng/content\"></script>";
function main() {
  describe('Content', function() {
    it("should insert the nodes", (function() {
      var parent = el("<div><content></content></div>");
      var content = DOM.firstChild(parent);
      var c = new Content(null, new NgElement(content));
      c.insert([el("<a></a>"), el("<b></b>")]);
      expect(DOM.getInnerHTML(parent)).toEqual((_script + "<a></a><b></b>" + _script));
    }));
    it("should remove the nodes from the previous insertion", (function() {
      var parent = el("<div><content></content></div>");
      var content = DOM.firstChild(parent);
      var c = new Content(null, new NgElement(content));
      c.insert([el("<a></a>")]);
      c.insert([el("<b></b>")]);
      expect(DOM.getInnerHTML(parent)).toEqual((_script + "<b></b>" + _script));
    }));
    it("should insert empty list", (function() {
      var parent = el("<div><content></content></div>");
      var content = DOM.firstChild(parent);
      var c = new Content(null, new NgElement(content));
      c.insert([el("<a></a>")]);
      c.insert([]);
      expect(DOM.getInnerHTML(parent)).toEqual(("" + _script + _script));
    }));
  });
}

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/test/core/compiler/shadow_dom/content_tag_spec.map

//# sourceMappingURL=./content_tag_spec.map
 main();