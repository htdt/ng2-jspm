"use strict";
Object.defineProperties(module.exports, {
  ScrollItemComponent: {get: function() {
      return ScrollItemComponent;
    }},
  setupReflectorForScrollItem: {get: function() {
      return setupReflectorForScrollItem;
    }},
  __esModule: {value: true}
});
var __moduleName = "benchmarks/src/naive_infinite_scroll/scroll_item";
var $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_reflection_47_reflection__,
    $__angular2_47_angular2__,
    $__angular2_47_src_47_facade_47_async__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_dom_47_dom_95_adapter__,
    $__angular2_47_src_47_facade_47_math__,
    $__benchmarks_47_src_47_naive_95_infinite_95_scroll_47_cells__,
    $__benchmarks_47_src_47_naive_95_infinite_95_scroll_47_common__,
    $__benchmarks_47_src_47_naive_95_infinite_95_scroll_47_random_95_data__;
var int = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).int;
var reflector = ($__angular2_47_src_47_reflection_47_reflection__ = require("angular2/src/reflection/reflection"), $__angular2_47_src_47_reflection_47_reflection__ && $__angular2_47_src_47_reflection_47_reflection__.__esModule && $__angular2_47_src_47_reflection_47_reflection__ || {default: $__angular2_47_src_47_reflection_47_reflection__}).reflector;
var $__2 = ($__angular2_47_angular2__ = require("angular2/angular2"), $__angular2_47_angular2__ && $__angular2_47_angular2__.__esModule && $__angular2_47_angular2__ || {default: $__angular2_47_angular2__}),
    Component = $__2.Component,
    Viewport = $__2.Viewport,
    Template = $__2.Template,
    ViewContainer = $__2.ViewContainer,
    Compiler = $__2.Compiler;
var PromiseWrapper = ($__angular2_47_src_47_facade_47_async__ = require("angular2/src/facade/async"), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}).PromiseWrapper;
var $__4 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    ListWrapper = $__4.ListWrapper,
    MapWrapper = $__4.MapWrapper;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var Math = ($__angular2_47_src_47_facade_47_math__ = require("angular2/src/facade/math"), $__angular2_47_src_47_facade_47_math__ && $__angular2_47_src_47_facade_47_math__.__esModule && $__angular2_47_src_47_facade_47_math__ || {default: $__angular2_47_src_47_facade_47_math__}).Math;
var $__7 = ($__benchmarks_47_src_47_naive_95_infinite_95_scroll_47_cells__ = require("./cells"), $__benchmarks_47_src_47_naive_95_infinite_95_scroll_47_cells__ && $__benchmarks_47_src_47_naive_95_infinite_95_scroll_47_cells__.__esModule && $__benchmarks_47_src_47_naive_95_infinite_95_scroll_47_cells__ || {default: $__benchmarks_47_src_47_naive_95_infinite_95_scroll_47_cells__}),
    CompanyNameComponent = $__7.CompanyNameComponent,
    OpportunityNameComponent = $__7.OpportunityNameComponent,
    OfferingNameComponent = $__7.OfferingNameComponent,
    StageButtonsComponent = $__7.StageButtonsComponent,
    AccountCellComponent = $__7.AccountCellComponent,
    FormattedCellComponent = $__7.FormattedCellComponent;
var $__8 = ($__benchmarks_47_src_47_naive_95_infinite_95_scroll_47_common__ = require("./common"), $__benchmarks_47_src_47_naive_95_infinite_95_scroll_47_common__ && $__benchmarks_47_src_47_naive_95_infinite_95_scroll_47_common__.__esModule && $__benchmarks_47_src_47_naive_95_infinite_95_scroll_47_common__ || {default: $__benchmarks_47_src_47_naive_95_infinite_95_scroll_47_common__}),
    Offering = $__8.Offering,
    ITEM_HEIGHT = $__8.ITEM_HEIGHT,
    COMPANY_NAME_WIDTH = $__8.COMPANY_NAME_WIDTH,
    OPPORTUNITY_NAME_WIDTH = $__8.OPPORTUNITY_NAME_WIDTH,
    OFFERING_NAME_WIDTH = $__8.OFFERING_NAME_WIDTH,
    ACCOUNT_CELL_WIDTH = $__8.ACCOUNT_CELL_WIDTH,
    BASE_POINTS_WIDTH = $__8.BASE_POINTS_WIDTH,
    KICKER_POINTS_WIDTH = $__8.KICKER_POINTS_WIDTH,
    STAGE_BUTTONS_WIDTH = $__8.STAGE_BUTTONS_WIDTH,
    BUNDLES_WIDTH = $__8.BUNDLES_WIDTH,
    DUE_DATE_WIDTH = $__8.DUE_DATE_WIDTH,
    END_DATE_WIDTH = $__8.END_DATE_WIDTH,
    AAT_STATUS_WIDTH = $__8.AAT_STATUS_WIDTH;
var generateOfferings = ($__benchmarks_47_src_47_naive_95_infinite_95_scroll_47_random_95_data__ = require("./random_data"), $__benchmarks_47_src_47_naive_95_infinite_95_scroll_47_random_95_data__ && $__benchmarks_47_src_47_naive_95_infinite_95_scroll_47_random_95_data__.__esModule && $__benchmarks_47_src_47_naive_95_infinite_95_scroll_47_random_95_data__ || {default: $__benchmarks_47_src_47_naive_95_infinite_95_scroll_47_random_95_data__}).generateOfferings;
var ScrollItemComponent = function ScrollItemComponent() {
  this.itemStyle = MapWrapper.createFromPairs([['height', (ITEM_HEIGHT + "px")], ['line-height', (ITEM_HEIGHT + "px")], ['font-size', '18px'], ['display', 'flex'], ['justify-content', 'space-between']]);
};
($traceurRuntime.createClass)(ScrollItemComponent, {
  get companyNameWidth() {
    return (COMPANY_NAME_WIDTH + "px");
  },
  get opportunityNameWidth() {
    return (OPPORTUNITY_NAME_WIDTH + "px");
  },
  get offeringNameWidth() {
    return (OFFERING_NAME_WIDTH + "px");
  },
  get accountCellWidth() {
    return (ACCOUNT_CELL_WIDTH + "px");
  },
  get basePointsWidth() {
    return (BASE_POINTS_WIDTH + "px");
  },
  get kickerPointsWidth() {
    return (KICKER_POINTS_WIDTH + "px");
  },
  get stageButtonsWidth() {
    return (STAGE_BUTTONS_WIDTH + "px");
  },
  get bundlesWidth() {
    return (BUNDLES_WIDTH + "px");
  },
  get dueDateWidth() {
    return (DUE_DATE_WIDTH + "px");
  },
  get endDateWidth() {
    return (END_DATE_WIDTH + "px");
  },
  get aatStatusWidth() {
    return (AAT_STATUS_WIDTH + "px");
  }
}, {});
function setupReflectorForScrollItem() {
  reflector.registerType(ScrollItemComponent, {
    'factory': (function() {
      return new ScrollItemComponent();
    }),
    'parameters': [],
    'annotations': [new Component({
      selector: 'scroll-item',
      bind: {'offering': 'offering'}
    }), new Template({
      directives: [CompanyNameComponent, OpportunityNameComponent, OfferingNameComponent, StageButtonsComponent, AccountCellComponent, FormattedCellComponent],
      inline: "\n          <div class=\"row\" [style]=\"itemStyle\">\n              <company-name [company]=\"offering.company\"\n                            [cell-width]=\"companyNameWidth\">\n              </company-name>\n              <opportunity-name [opportunity]=\"offering.opportunity\"\n                                [cell-width]=\"opportunityNameWidth\">\n              </opportunity-name>\n              <offering-name [offering]=\"offering\"\n                             [cell-width]=\"offeringNameWidth\">\n              </offering-name>\n              <account-cell [account]=\"offering.account\"\n                            [cell-width]=\"accountCellWidth\">\n              </account-cell>\n              <formatted-cell [value]=\"offering.basePoints\"\n                              [cell-width]=\"basePointsWidth\">\n              </formatted-cell>\n              <formatted-cell [value]=\"offering.kickerPoints\"\n                              [cell-width]=\"kickerPointsWidth\">\n              </formatted-cell>\n              <stage-buttons [offering]=\"offering\"\n                             [cell-width]=\"stageButtonsWidth\">\n              </stage-buttons>\n              <formatted-cell [value]=\"offering.bundles\"\n                              [cell-width]=\"bundlesWidth\">\n              </formatted-cell>\n              <formatted-cell [value]=\"offering.dueDate\"\n                              [cell-width]=\"dueDateWidth\">\n              </formatted-cell>\n              <formatted-cell [value]=\"offering.endDate\"\n                              [cell-width]=\"endDateWidth\">\n              </formatted-cell>\n              <formatted-cell [value]=\"offering.aatStatus\"\n                              [cell-width]=\"aatStatusWidth\">\n              </formatted-cell>\n          </div>"
    })]
  });
}

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/benchmarks/src/naive_infinite_scroll/scroll_item.map

//# sourceMappingURL=./scroll_item.map