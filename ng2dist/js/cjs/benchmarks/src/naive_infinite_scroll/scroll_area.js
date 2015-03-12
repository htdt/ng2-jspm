"use strict";
Object.defineProperties(module.exports, {
  ScrollAreaComponent: {get: function() {
      return ScrollAreaComponent;
    }},
  setupReflectorForScrollArea: {get: function() {
      return setupReflectorForScrollArea;
    }},
  __esModule: {value: true}
});
var __moduleName = "benchmarks/src/naive_infinite_scroll/scroll_area";
var $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_reflection_47_reflection__,
    $__angular2_47_src_47_test_95_lib_47_benchmark_95_util__,
    $__angular2_47_angular2__,
    $__angular2_47_src_47_facade_47_async__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_dom_47_dom_95_adapter__,
    $__angular2_47_src_47_facade_47_math__,
    $__benchmarks_47_src_47_naive_95_infinite_95_scroll_47_common__,
    $__benchmarks_47_src_47_naive_95_infinite_95_scroll_47_random_95_data__,
    $__benchmarks_47_src_47_naive_95_infinite_95_scroll_47_scroll_95_item__,
    $__angular2_47_directives__;
var $__0 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    int = $__0.int,
    FINAL = $__0.FINAL;
var reflector = ($__angular2_47_src_47_reflection_47_reflection__ = require("angular2/src/reflection/reflection"), $__angular2_47_src_47_reflection_47_reflection__ && $__angular2_47_src_47_reflection_47_reflection__.__esModule && $__angular2_47_src_47_reflection_47_reflection__ || {default: $__angular2_47_src_47_reflection_47_reflection__}).reflector;
var $__2 = ($__angular2_47_src_47_test_95_lib_47_benchmark_95_util__ = require("angular2/src/test_lib/benchmark_util"), $__angular2_47_src_47_test_95_lib_47_benchmark_95_util__ && $__angular2_47_src_47_test_95_lib_47_benchmark_95_util__.__esModule && $__angular2_47_src_47_test_95_lib_47_benchmark_95_util__ || {default: $__angular2_47_src_47_test_95_lib_47_benchmark_95_util__}),
    getIntParameter = $__2.getIntParameter,
    bindAction = $__2.bindAction;
var $__3 = ($__angular2_47_angular2__ = require("angular2/angular2"), $__angular2_47_angular2__ && $__angular2_47_angular2__.__esModule && $__angular2_47_angular2__ || {default: $__angular2_47_angular2__}),
    Component = $__3.Component,
    Viewport = $__3.Viewport,
    Template = $__3.Template,
    ViewContainer = $__3.ViewContainer,
    Compiler = $__3.Compiler;
var PromiseWrapper = ($__angular2_47_src_47_facade_47_async__ = require("angular2/src/facade/async"), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}).PromiseWrapper;
var $__5 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    ListWrapper = $__5.ListWrapper,
    MapWrapper = $__5.MapWrapper;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var Math = ($__angular2_47_src_47_facade_47_math__ = require("angular2/src/facade/math"), $__angular2_47_src_47_facade_47_math__ && $__angular2_47_src_47_facade_47_math__.__esModule && $__angular2_47_src_47_facade_47_math__ || {default: $__angular2_47_src_47_facade_47_math__}).Math;
var $__8 = ($__benchmarks_47_src_47_naive_95_infinite_95_scroll_47_common__ = require("./common"), $__benchmarks_47_src_47_naive_95_infinite_95_scroll_47_common__ && $__benchmarks_47_src_47_naive_95_infinite_95_scroll_47_common__.__esModule && $__benchmarks_47_src_47_naive_95_infinite_95_scroll_47_common__ || {default: $__benchmarks_47_src_47_naive_95_infinite_95_scroll_47_common__}),
    Offering = $__8.Offering,
    ITEMS = $__8.ITEMS,
    ITEM_HEIGHT = $__8.ITEM_HEIGHT,
    VISIBLE_ITEMS = $__8.VISIBLE_ITEMS,
    VIEW_PORT_HEIGHT = $__8.VIEW_PORT_HEIGHT,
    ROW_WIDTH = $__8.ROW_WIDTH,
    HEIGHT = $__8.HEIGHT;
var generateOfferings = ($__benchmarks_47_src_47_naive_95_infinite_95_scroll_47_random_95_data__ = require("./random_data"), $__benchmarks_47_src_47_naive_95_infinite_95_scroll_47_random_95_data__ && $__benchmarks_47_src_47_naive_95_infinite_95_scroll_47_random_95_data__.__esModule && $__benchmarks_47_src_47_naive_95_infinite_95_scroll_47_random_95_data__ || {default: $__benchmarks_47_src_47_naive_95_infinite_95_scroll_47_random_95_data__}).generateOfferings;
var ScrollItemComponent = ($__benchmarks_47_src_47_naive_95_infinite_95_scroll_47_scroll_95_item__ = require("./scroll_item"), $__benchmarks_47_src_47_naive_95_infinite_95_scroll_47_scroll_95_item__ && $__benchmarks_47_src_47_naive_95_infinite_95_scroll_47_scroll_95_item__.__esModule && $__benchmarks_47_src_47_naive_95_infinite_95_scroll_47_scroll_95_item__ || {default: $__benchmarks_47_src_47_naive_95_infinite_95_scroll_47_scroll_95_item__}).ScrollItemComponent;
var Foreach = ($__angular2_47_directives__ = require("angular2/directives"), $__angular2_47_directives__ && $__angular2_47_directives__.__esModule && $__angular2_47_directives__ || {default: $__angular2_47_directives__}).Foreach;
var ScrollAreaComponent = function ScrollAreaComponent() {
  this._fullList = generateOfferings(ITEMS);
  this.visibleItems = [];
  this.scrollDivStyle = MapWrapper.createFromPairs([['height', (VIEW_PORT_HEIGHT + "px")], ['width', '1000px'], ['border', '1px solid #000'], ['overflow', 'scroll']]);
  this.onScroll(null);
};
($traceurRuntime.createClass)(ScrollAreaComponent, {onScroll: function(evt) {
    var scrollTop = 0;
    if (evt != null) {
      var scrollDiv = evt.target;
      if (this.paddingDiv == null) {
        this.paddingDiv = scrollDiv.querySelector('#padding');
      }
      if (this.innerDiv == null) {
        this.innerDiv = scrollDiv.querySelector('#inner');
        this.innerDiv.style.setProperty('width', (ROW_WIDTH + "px"));
      }
      scrollTop = scrollDiv.scrollTop;
    }
    var iStart = Math.floor(scrollTop / ITEM_HEIGHT);
    var iEnd = Math.min(iStart + VISIBLE_ITEMS + 1, this._fullList.length);
    var padding = iStart * ITEM_HEIGHT;
    if (this.innerDiv != null) {
      this.innerDiv.style.setProperty('height', ((HEIGHT - padding) + "px"));
    }
    if (this.paddingDiv != null) {
      this.paddingDiv.style.setProperty('height', (padding + "px"));
    }
    this.visibleItems = ListWrapper.slice(this._fullList, iStart, iEnd);
  }}, {});
function setupReflectorForScrollArea() {
  reflector.registerType(ScrollAreaComponent, {
    'factory': (function() {
      return new ScrollAreaComponent();
    }),
    'parameters': [],
    'annotations': [new Component({selector: 'scroll-area'}), new Template({
      directives: [ScrollItemComponent, Foreach],
      inline: "\n          <div>\n              <div id=\"scrollDiv\"\n                   [style]=\"scrollDivStyle\"\n                   on-scroll=\"onScroll($event)\">\n                  <div id=\"padding\"></div>\n                  <div id=\"inner\">\n                      <scroll-item\n                          template=\"foreach #item in visibleItems\"\n                          [offering]=\"item\">\n                      </scroll-item>\n                  </div>\n              </div>\n          </div>"
    })]
  });
}

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/benchmarks/src/naive_infinite_scroll/scroll_area.map

//# sourceMappingURL=./scroll_area.map