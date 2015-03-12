"use strict";
Object.defineProperties(module.exports, {
  App: {get: function() {
      return App;
    }},
  setupReflectorForApp: {get: function() {
      return setupReflectorForApp;
    }},
  __esModule: {value: true}
});
var __moduleName = "benchmarks/src/naive_infinite_scroll/app";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_reflection_47_reflection__,
    $__angular2_47_src_47_test_95_lib_47_benchmark_95_util__,
    $__angular2_47_angular2__,
    $__angular2_47_src_47_facade_47_async__,
    $__angular2_47_src_47_facade_47_collection__,
    $__benchmarks_47_src_47_naive_95_infinite_95_scroll_47_scroll_95_area__,
    $__angular2_47_directives__,
    $__angular2_47_src_47_dom_47_dom_95_adapter__,
    $__angular2_47_src_47_facade_47_browser__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var $__1 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    int = $__1.int,
    isPresent = $__1.isPresent;
var reflector = ($__angular2_47_src_47_reflection_47_reflection__ = require("angular2/src/reflection/reflection"), $__angular2_47_src_47_reflection_47_reflection__ && $__angular2_47_src_47_reflection_47_reflection__.__esModule && $__angular2_47_src_47_reflection_47_reflection__ || {default: $__angular2_47_src_47_reflection_47_reflection__}).reflector;
var $__3 = ($__angular2_47_src_47_test_95_lib_47_benchmark_95_util__ = require("angular2/src/test_lib/benchmark_util"), $__angular2_47_src_47_test_95_lib_47_benchmark_95_util__ && $__angular2_47_src_47_test_95_lib_47_benchmark_95_util__.__esModule && $__angular2_47_src_47_test_95_lib_47_benchmark_95_util__ || {default: $__angular2_47_src_47_test_95_lib_47_benchmark_95_util__}),
    getIntParameter = $__3.getIntParameter,
    bindAction = $__3.bindAction;
var $__4 = ($__angular2_47_angular2__ = require("angular2/angular2"), $__angular2_47_angular2__ && $__angular2_47_angular2__.__esModule && $__angular2_47_angular2__ || {default: $__angular2_47_angular2__}),
    bootstrap = $__4.bootstrap,
    Component = $__4.Component,
    Viewport = $__4.Viewport,
    Template = $__4.Template,
    ViewContainer = $__4.ViewContainer,
    Compiler = $__4.Compiler;
var PromiseWrapper = ($__angular2_47_src_47_facade_47_async__ = require("angular2/src/facade/async"), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}).PromiseWrapper;
var ListWrapper = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}).ListWrapper;
var ScrollAreaComponent = ($__benchmarks_47_src_47_naive_95_infinite_95_scroll_47_scroll_95_area__ = require("./scroll_area"), $__benchmarks_47_src_47_naive_95_infinite_95_scroll_47_scroll_95_area__ && $__benchmarks_47_src_47_naive_95_infinite_95_scroll_47_scroll_95_area__.__esModule && $__benchmarks_47_src_47_naive_95_infinite_95_scroll_47_scroll_95_area__ || {default: $__benchmarks_47_src_47_naive_95_infinite_95_scroll_47_scroll_95_area__}).ScrollAreaComponent;
var $__8 = ($__angular2_47_directives__ = require("angular2/directives"), $__angular2_47_directives__ && $__angular2_47_directives__.__esModule && $__angular2_47_directives__ || {default: $__angular2_47_directives__}),
    If = $__8.If,
    Foreach = $__8.Foreach;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var document = ($__angular2_47_src_47_facade_47_browser__ = require("angular2/src/facade/browser"), $__angular2_47_src_47_facade_47_browser__ && $__angular2_47_src_47_facade_47_browser__.__esModule && $__angular2_47_src_47_facade_47_browser__ || {default: $__angular2_47_src_47_facade_47_browser__}).document;
var App = function App() {
  var $__11 = this;
  var appSize = getIntParameter('appSize');
  this.iterationCount = getIntParameter('iterationCount');
  this.scrollIncrement = getIntParameter('scrollIncrement');
  appSize = appSize > 1 ? appSize - 1 : 0;
  this.scrollAreas = [];
  for (var i = 0; i < appSize; i++) {
    ListWrapper.push(this.scrollAreas, i);
  }
  bindAction('#run-btn', (function() {
    $__11.runBenchmark();
  }));
  bindAction('#reset-btn', (function() {
    $__11._getScrollDiv().scrollTop = 0;
    var existingMarker = $__11._locateFinishedMarker();
    if (isPresent(existingMarker)) {
      DOM.removeChild(document.body, existingMarker);
    }
  }));
};
($traceurRuntime.createClass)(App, {
  runBenchmark: function() {
    var $__11 = this;
    var scrollDiv = this._getScrollDiv();
    var n = assert.type(this.iterationCount, int);
    var scheduleScroll;
    scheduleScroll = (function() {
      PromiseWrapper.setTimeout((function() {
        scrollDiv.scrollTop += $__11.scrollIncrement;
        n--;
        if (n > 0) {
          scheduleScroll();
        } else {
          $__11._scheduleFinishedMarker();
        }
      }), 0);
    });
    scheduleScroll();
  },
  _scheduleFinishedMarker: function() {
    var existingMarker = this._locateFinishedMarker();
    if (isPresent(existingMarker)) {
      return ;
    }
    PromiseWrapper.setTimeout((function() {
      var finishedDiv = DOM.createElement('div');
      finishedDiv.id = 'done';
      DOM.setInnerHTML(finishedDiv, 'Finished');
      DOM.appendChild(document.body, finishedDiv);
    }), 0);
  },
  _locateFinishedMarker: function() {
    return DOM.querySelector(document.body, '#done');
  },
  _getScrollDiv: function() {
    return DOM.query('body /deep/ #testArea /deep/ #scrollDiv');
  }
}, {});
function setupReflectorForApp() {
  reflector.registerType(App, {
    'factory': (function() {
      return new App();
    }),
    'parameters': [],
    'annotations': [new Component({selector: 'scroll-app'}), new Template({
      directives: [ScrollAreaComponent, If, Foreach],
      inline: "\n          <div>\n            <div style=\"display: flex\">\n              <scroll-area id=\"testArea\"></scroll-area>\n            </div>\n            <div template=\"if scrollAreas.length > 0\">\n              <p>Following tables are only here to add weight to the UI:</p>\n              <scroll-area template=\"foreach #scrollArea in scrollAreas\"></scroll-area>\n            </div>\n          </div>"
    })]
  });
}

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/benchmarks/src/naive_infinite_scroll/app.map

//# sourceMappingURL=./app.map