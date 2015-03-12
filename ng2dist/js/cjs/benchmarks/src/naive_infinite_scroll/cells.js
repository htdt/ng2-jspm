"use strict";
Object.defineProperties(module.exports, {
  HasStyle: {get: function() {
      return HasStyle;
    }},
  CompanyNameComponent: {get: function() {
      return CompanyNameComponent;
    }},
  OpportunityNameComponent: {get: function() {
      return OpportunityNameComponent;
    }},
  OfferingNameComponent: {get: function() {
      return OfferingNameComponent;
    }},
  Stage: {get: function() {
      return Stage;
    }},
  StageButtonsComponent: {get: function() {
      return StageButtonsComponent;
    }},
  AccountCellComponent: {get: function() {
      return AccountCellComponent;
    }},
  FormattedCellComponent: {get: function() {
      return FormattedCellComponent;
    }},
  setupReflectorForCells: {get: function() {
      return setupReflectorForCells;
    }},
  __esModule: {value: true}
});
var __moduleName = "benchmarks/src/naive_infinite_scroll/cells";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_reflection_47_reflection__,
    $__angular2_47_src_47_test_95_lib_47_benchmark_95_util__,
    $__angular2_47_angular2__,
    $__angular2_47_src_47_facade_47_async__,
    $__angular2_47_src_47_facade_47_collection__,
    $__benchmarks_47_src_47_naive_95_infinite_95_scroll_47_common__,
    $__angular2_47_directives__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var int = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).int;
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
var $__6 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    ListWrapper = $__6.ListWrapper,
    MapWrapper = $__6.MapWrapper;
var $__7 = ($__benchmarks_47_src_47_naive_95_infinite_95_scroll_47_common__ = require("./common"), $__benchmarks_47_src_47_naive_95_infinite_95_scroll_47_common__ && $__benchmarks_47_src_47_naive_95_infinite_95_scroll_47_common__.__esModule && $__benchmarks_47_src_47_naive_95_infinite_95_scroll_47_common__ || {default: $__benchmarks_47_src_47_naive_95_infinite_95_scroll_47_common__}),
    Company = $__7.Company,
    Opportunity = $__7.Opportunity,
    Offering = $__7.Offering,
    Account = $__7.Account,
    CustomDate = $__7.CustomDate,
    STATUS_LIST = $__7.STATUS_LIST;
var Foreach = ($__angular2_47_directives__ = require("angular2/directives"), $__angular2_47_directives__ && $__angular2_47_directives__.__esModule && $__angular2_47_directives__ || {default: $__angular2_47_directives__}).Foreach;
var HasStyle = function HasStyle() {
  this.style = MapWrapper.create();
};
($traceurRuntime.createClass)(HasStyle, {set width(w) {
    MapWrapper.set(this.style, 'width', w);
  }}, {});
var CompanyNameComponent = function CompanyNameComponent() {
  $traceurRuntime.superConstructor($CompanyNameComponent).apply(this, arguments);
};
var $CompanyNameComponent = CompanyNameComponent;
($traceurRuntime.createClass)(CompanyNameComponent, {}, {}, HasStyle);
var OpportunityNameComponent = function OpportunityNameComponent() {
  $traceurRuntime.superConstructor($OpportunityNameComponent).apply(this, arguments);
};
var $OpportunityNameComponent = OpportunityNameComponent;
($traceurRuntime.createClass)(OpportunityNameComponent, {}, {}, HasStyle);
var OfferingNameComponent = function OfferingNameComponent() {
  $traceurRuntime.superConstructor($OfferingNameComponent).apply(this, arguments);
};
var $OfferingNameComponent = OfferingNameComponent;
($traceurRuntime.createClass)(OfferingNameComponent, {}, {}, HasStyle);
var Stage = function Stage() {};
($traceurRuntime.createClass)(Stage, {}, {});
var StageButtonsComponent = function StageButtonsComponent() {
  $traceurRuntime.superConstructor($StageButtonsComponent).apply(this, arguments);
};
var $StageButtonsComponent = StageButtonsComponent;
($traceurRuntime.createClass)(StageButtonsComponent, {
  get offering() {
    return assert.returnType((this._offering), Offering);
  },
  set offering(offering) {
    assert.argumentTypes(offering, Offering);
    this._offering = offering;
    this._computeStageButtons();
  },
  setStage: function(stage) {
    assert.argumentTypes(stage, Stage);
    this._offering.status = stage.name;
    this._computeStageButtons();
  },
  _computeStageButtons: function() {
    var $__9 = this;
    var disabled = true;
    this.stages = ListWrapper.clone(STATUS_LIST.map((function(status) {
      var isCurrent = $__9._offering.status == status;
      var stage = new Stage();
      stage.name = status;
      stage.isDisabled = disabled;
      var stageStyle = MapWrapper.create();
      MapWrapper.set(stageStyle, 'background-color', disabled ? '#DDD' : isCurrent ? '#DDF' : '#FDD');
      stage.style = stageStyle;
      if (isCurrent) {
        disabled = false;
      }
      return stage;
    })));
  }
}, {}, HasStyle);
Object.defineProperty(Object.getOwnPropertyDescriptor(StageButtonsComponent.prototype, "offering").set, "parameters", {get: function() {
    return [[Offering]];
  }});
Object.defineProperty(StageButtonsComponent.prototype.setStage, "parameters", {get: function() {
    return [[Stage]];
  }});
var AccountCellComponent = function AccountCellComponent() {
  $traceurRuntime.superConstructor($AccountCellComponent).apply(this, arguments);
};
var $AccountCellComponent = AccountCellComponent;
($traceurRuntime.createClass)(AccountCellComponent, {}, {}, HasStyle);
var FormattedCellComponent = function FormattedCellComponent() {
  $traceurRuntime.superConstructor($FormattedCellComponent).apply(this, arguments);
};
var $FormattedCellComponent = FormattedCellComponent;
($traceurRuntime.createClass)(FormattedCellComponent, {set value(value) {
    if (value instanceof CustomDate) {
      this.formattedValue = (value.month + "/" + value.day + "/" + value.year);
    } else {
      this.formattedValue = value.toString();
    }
  }}, {}, HasStyle);
function setupReflectorForCells() {
  reflector.registerType(CompanyNameComponent, {
    'factory': (function() {
      return new CompanyNameComponent();
    }),
    'parameters': [],
    'annotations': [new Component({
      selector: 'company-name',
      bind: {
        'width': 'cell-width',
        'company': 'company'
      }
    }), new Template({
      directives: [],
      inline: "<div [style]=\"style\">{{company.name}}</div>"
    })]
  });
  reflector.registerType(OpportunityNameComponent, {
    'factory': (function() {
      return new OpportunityNameComponent();
    }),
    'parameters': [],
    'annotations': [new Component({
      selector: 'opportunity-name',
      bind: {
        'width': 'cell-width',
        'opportunity': 'opportunity'
      }
    }), new Template({
      directives: [],
      inline: "<div [style]=\"style\">{{opportunity.name}}</div>"
    })]
  });
  reflector.registerType(OfferingNameComponent, {
    'factory': (function() {
      return new OfferingNameComponent();
    }),
    'parameters': [],
    'annotations': [new Component({
      selector: 'offering-name',
      bind: {
        'width': 'cell-width',
        'offering': 'offering'
      }
    }), new Template({
      directives: [],
      inline: "<div [style]=\"style\">{{offering.name}}</div>"
    })]
  });
  reflector.registerType(StageButtonsComponent, {
    'factory': (function() {
      return new StageButtonsComponent();
    }),
    'parameters': [],
    'annotations': [new Component({
      selector: 'stage-buttons',
      bind: {
        'width': 'cell-width',
        'offering': 'offering'
      }
    }), new Template({
      directives: [Foreach],
      inline: "\n            <div [style]=\"style\">\n                <button template=\"foreach #stage in stages\"\n                        [disabled]=\"stage.isDisabled\"\n                        [style]=\"stage.style\"\n                        on-click=\"setStage(stage)\">\n                  {{stage.name}}\n                </button>\n            </div>"
    })]
  });
  reflector.registerType(AccountCellComponent, {
    'factory': (function() {
      return new AccountCellComponent();
    }),
    'parameters': [],
    'annotations': [new Component({
      selector: 'account-cell',
      bind: {
        'width': 'cell-width',
        'account': 'account'
      }
    }), new Template({
      directives: [],
      inline: "\n            <div [style]=\"style\">\n              <a href=\"/account/{{account.accountId}}\">\n                {{account.accountId}}\n              </a>\n            </div>"
    })]
  });
  reflector.registerType(FormattedCellComponent, {
    'factory': (function() {
      return new FormattedCellComponent();
    }),
    'parameters': [],
    'annotations': [new Component({
      selector: 'formatted-cell',
      bind: {
        'width': 'cell-width',
        'value': 'value'
      }
    }), new Template({
      directives: [],
      inline: "<div [style]=\"style\">{{formattedValue}}</div>"
    })]
  });
}

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/benchmarks/src/naive_infinite_scroll/cells.map

//# sourceMappingURL=./cells.map