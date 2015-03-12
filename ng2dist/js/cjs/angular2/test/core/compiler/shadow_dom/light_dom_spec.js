var parse5Adapter = require('angular2/src/dom/parse5_adapter');
parse5Adapter.Parse5DomAdapter.makeCurrent();
"use strict";
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/test/core/compiler/shadow_dom/light_dom_spec";
var $__angular2_47_test_95_lib__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_dom_47_dom_95_adapter__,
    $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_content_95_tag__,
    $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_light_95_dom__,
    $__angular2_47_src_47_core_47_compiler_47_view__,
    $__angular2_47_src_47_core_47_compiler_47_view_95_container__,
    $__angular2_47_src_47_core_47_compiler_47_element_95_injector__;
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
var $__1 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    IMPLEMENTS = $__1.IMPLEMENTS,
    isBlank = $__1.isBlank;
var $__2 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    ListWrapper = $__2.ListWrapper,
    MapWrapper = $__2.MapWrapper;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var Content = ($__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_content_95_tag__ = require("angular2/src/core/compiler/shadow_dom_emulation/content_tag"), $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_content_95_tag__ && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_content_95_tag__.__esModule && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_content_95_tag__ || {default: $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_content_95_tag__}).Content;
var LightDom = ($__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_light_95_dom__ = require("angular2/src/core/compiler/shadow_dom_emulation/light_dom"), $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_light_95_dom__ && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_light_95_dom__.__esModule && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_light_95_dom__ || {default: $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_light_95_dom__}).LightDom;
var View = ($__angular2_47_src_47_core_47_compiler_47_view__ = require("angular2/src/core/compiler/view"), $__angular2_47_src_47_core_47_compiler_47_view__ && $__angular2_47_src_47_core_47_compiler_47_view__.__esModule && $__angular2_47_src_47_core_47_compiler_47_view__ || {default: $__angular2_47_src_47_core_47_compiler_47_view__}).View;
var ViewContainer = ($__angular2_47_src_47_core_47_compiler_47_view_95_container__ = require("angular2/src/core/compiler/view_container"), $__angular2_47_src_47_core_47_compiler_47_view_95_container__ && $__angular2_47_src_47_core_47_compiler_47_view_95_container__.__esModule && $__angular2_47_src_47_core_47_compiler_47_view_95_container__ || {default: $__angular2_47_src_47_core_47_compiler_47_view_95_container__}).ViewContainer;
var ElementInjector = ($__angular2_47_src_47_core_47_compiler_47_element_95_injector__ = require("angular2/src/core/compiler/element_injector"), $__angular2_47_src_47_core_47_compiler_47_element_95_injector__ && $__angular2_47_src_47_core_47_compiler_47_element_95_injector__.__esModule && $__angular2_47_src_47_core_47_compiler_47_element_95_injector__ || {default: $__angular2_47_src_47_core_47_compiler_47_element_95_injector__}).ElementInjector;
var FakeElementInjector = function FakeElementInjector() {
  var content = arguments[0] !== (void 0) ? arguments[0] : null;
  var viewContainer = arguments[1] !== (void 0) ? arguments[1] : null;
  var element = arguments[2] !== (void 0) ? arguments[2] : null;
  this.content = content;
  this.viewContainer = viewContainer;
  this.element = element;
};
var $FakeElementInjector = FakeElementInjector;
($traceurRuntime.createClass)(FakeElementInjector, {
  hasDirective: function(type) {
    return this.content != null;
  },
  hasPreBuiltObject: function(type) {
    return this.viewContainer != null;
  },
  forElement: function(n) {
    return this.element == n;
  },
  get: function(t) {
    if (t === Content)
      return this.content;
    if (t === ViewContainer)
      return this.viewContainer;
    return null;
  },
  noSuchMethod: function(i) {
    $traceurRuntime.superGet(this, $FakeElementInjector.prototype, "noSuchMethod").call(this, i);
  }
}, {});
Object.defineProperty(FakeElementInjector, "annotations", {get: function() {
    return [new proxy, new IMPLEMENTS(ElementInjector)];
  }});
var FakeView = function FakeView() {
  var elementInjectors = arguments[0] !== (void 0) ? arguments[0] : null;
  this.elementInjectors = elementInjectors;
};
var $FakeView = FakeView;
($traceurRuntime.createClass)(FakeView, {noSuchMethod: function(i) {
    $traceurRuntime.superGet(this, $FakeView.prototype, "noSuchMethod").call(this, i);
  }}, {});
Object.defineProperty(FakeView, "annotations", {get: function() {
    return [new proxy, new IMPLEMENTS(View)];
  }});
var FakeViewContainer = function FakeViewContainer() {
  var nodes = arguments[0] !== (void 0) ? arguments[0] : null;
  var views = arguments[1] !== (void 0) ? arguments[1] : null;
  this._nodes = nodes;
  this._contentTagContainers = views;
};
var $FakeViewContainer = FakeViewContainer;
($traceurRuntime.createClass)(FakeViewContainer, {
  nodes: function() {
    return this._nodes;
  },
  contentTagContainers: function() {
    return this._contentTagContainers;
  },
  noSuchMethod: function(i) {
    $traceurRuntime.superGet(this, $FakeViewContainer.prototype, "noSuchMethod").call(this, i);
  }
}, {});
Object.defineProperty(FakeViewContainer, "annotations", {get: function() {
    return [new proxy, new IMPLEMENTS(ViewContainer)];
  }});
var FakeContentTag = function FakeContentTag() {
  var select = arguments[0] !== (void 0) ? arguments[0] : null;
  var nodes = arguments[1] !== (void 0) ? arguments[1] : null;
  this.select = select;
  this._nodes = nodes;
};
var $FakeContentTag = FakeContentTag;
($traceurRuntime.createClass)(FakeContentTag, {
  insert: function(nodes) {
    this._nodes = ListWrapper.clone(nodes);
  },
  nodes: function() {
    return this._nodes;
  },
  noSuchMethod: function(i) {
    $traceurRuntime.superGet(this, $FakeContentTag.prototype, "noSuchMethod").call(this, i);
  }
}, {});
Object.defineProperty(FakeContentTag, "annotations", {get: function() {
    return [new proxy, new IMPLEMENTS(Content)];
  }});
function main() {
  describe('LightDom', function() {
    var lightDomView;
    beforeEach((function() {
      lightDomView = new FakeView([]);
    }));
    describe("contentTags", (function() {
      it("should collect content tags from element injectors", (function() {
        var tag = new FakeContentTag();
        var shadowDomView = new FakeView([new FakeElementInjector(tag)]);
        var lightDom = new LightDom(lightDomView, shadowDomView, el("<div></div>"));
        expect(lightDom.contentTags()).toEqual([tag]);
      }));
      it("should collect content tags from ViewContainers", (function() {
        var tag = new FakeContentTag();
        var vp = new FakeViewContainer(null, [new FakeView([new FakeElementInjector(tag, null)])]);
        var shadowDomView = new FakeView([new FakeElementInjector(null, vp)]);
        var lightDom = new LightDom(lightDomView, shadowDomView, el("<div></div>"));
        expect(lightDom.contentTags()).toEqual([tag]);
      }));
    }));
    describe("expanded roots", (function() {
      it("should contain root nodes", (function() {
        var lightDomEl = el("<div><a></a></div>");
        var lightDom = new LightDom(lightDomView, new FakeView(), lightDomEl);
        expect(toHtml(lightDom.expandedDomNodes())).toEqual(["<a></a>"]);
      }));
      it("should include ViewContainer nodes", (function() {
        var lightDomEl = el("<div><template></template></div>");
        var lightDomView = new FakeView([new FakeElementInjector(null, new FakeViewContainer([el("<a></a>")]), DOM.firstChild(lightDomEl))]);
        var lightDom = new LightDom(lightDomView, new FakeView(), lightDomEl);
        expect(toHtml(lightDom.expandedDomNodes())).toEqual(["<a></a>"]);
      }));
      it("should include content nodes", (function() {
        var lightDomEl = el("<div><content></content></div>");
        var lightDomView = new FakeView([new FakeElementInjector(new FakeContentTag(null, [el("<a></a>")]), null, DOM.firstChild(lightDomEl))]);
        var lightDom = new LightDom(lightDomView, new FakeView(), lightDomEl);
        expect(toHtml(lightDom.expandedDomNodes())).toEqual(["<a></a>"]);
      }));
      it("should work when the element injector array contains nulls", (function() {
        var lightDomEl = el("<div><a></a></div>");
        var lightDomView = new FakeView([null]);
        var lightDom = new LightDom(lightDomView, new FakeView(), lightDomEl);
        expect(toHtml(lightDom.expandedDomNodes())).toEqual(["<a></a>"]);
      }));
    }));
    describe("redistribute", (function() {
      it("should redistribute nodes between content tags with select property set", (function() {
        var contentA = new FakeContentTag("a");
        var contentB = new FakeContentTag("b");
        var lightDomEl = el("<div><a>1</a><b>2</b><a>3</a></div>");
        var lightDom = new LightDom(lightDomView, new FakeView([new FakeElementInjector(contentA, null), new FakeElementInjector(contentB, null)]), lightDomEl);
        lightDom.redistribute();
        expect(toHtml(contentA.nodes())).toEqual(["<a>1</a>", "<a>3</a>"]);
        expect(toHtml(contentB.nodes())).toEqual(["<b>2</b>"]);
      }));
      it("should support wildcard content tags", (function() {
        var wildcard = new FakeContentTag(null);
        var contentB = new FakeContentTag("b");
        var lightDomEl = el("<div><a>1</a><b>2</b><a>3</a></div>");
        var lightDom = new LightDom(lightDomView, new FakeView([new FakeElementInjector(wildcard, null), new FakeElementInjector(contentB, null)]), lightDomEl);
        lightDom.redistribute();
        expect(toHtml(wildcard.nodes())).toEqual(["<a>1</a>", "<b>2</b>", "<a>3</a>"]);
        expect(toHtml(contentB.nodes())).toEqual([]);
      }));
    }));
  });
}
function toHtml(nodes) {
  if (isBlank(nodes))
    return [];
  return ListWrapper.map(nodes, DOM.getOuterHTML);
}

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/test/core/compiler/shadow_dom/light_dom_spec.map

//# sourceMappingURL=./light_dom_spec.map
 main();