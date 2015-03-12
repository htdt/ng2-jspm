"use strict";
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  setupReflector: {get: function() {
      return setupReflector;
    }},
  setupReflectorForAngular: {get: function() {
      return setupReflectorForAngular;
    }},
  __esModule: {value: true}
});
var __moduleName = "benchmarks/src/naive_infinite_scroll/index";
var $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_dom_47_dom_95_adapter__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_change_95_detection__,
    $__angular2_47_src_47_core_47_exception_95_handler__,
    $__angular2_47_angular2__,
    $__angular2_47_src_47_reflection_47_reflection__,
    $__angular2_47_src_47_core_47_compiler_47_compiler__,
    $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__,
    $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__,
    $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_content_95_tag__,
    $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_light_95_dom__,
    $__angular2_47_src_47_core_47_compiler_47_template_95_loader__,
    $__angular2_47_src_47_core_47_compiler_47_template_95_resolver__,
    $__angular2_47_src_47_core_47_life_95_cycle_47_life_95_cycle__,
    $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr__,
    $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr_95_impl__,
    $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__,
    $__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__,
    $__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__,
    $__angular2_47_src_47_core_47_compiler_47_style_95_inliner__,
    $__angular2_47_src_47_core_47_compiler_47_css_95_processor__,
    $__angular2_47_directives__,
    $__benchmarks_47_src_47_naive_95_infinite_95_scroll_47_app__,
    $__benchmarks_47_src_47_naive_95_infinite_95_scroll_47_scroll_95_area__,
    $__benchmarks_47_src_47_naive_95_infinite_95_scroll_47_scroll_95_item__,
    $__benchmarks_47_src_47_naive_95_infinite_95_scroll_47_cells__;
var $__0 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    int = $__0.int,
    isBlank = $__0.isBlank;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var MapWrapper = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}).MapWrapper;
var $__3 = ($__angular2_47_change_95_detection__ = require("angular2/change_detection"), $__angular2_47_change_95_detection__ && $__angular2_47_change_95_detection__.__esModule && $__angular2_47_change_95_detection__ || {default: $__angular2_47_change_95_detection__}),
    Parser = $__3.Parser,
    Lexer = $__3.Lexer,
    ChangeDetector = $__3.ChangeDetector,
    ChangeDetection = $__3.ChangeDetection;
var ExceptionHandler = ($__angular2_47_src_47_core_47_exception_95_handler__ = require("angular2/src/core/exception_handler"), $__angular2_47_src_47_core_47_exception_95_handler__ && $__angular2_47_src_47_core_47_exception_95_handler__.__esModule && $__angular2_47_src_47_core_47_exception_95_handler__ || {default: $__angular2_47_src_47_core_47_exception_95_handler__}).ExceptionHandler;
var $__5 = ($__angular2_47_angular2__ = require("angular2/angular2"), $__angular2_47_angular2__ && $__angular2_47_angular2__.__esModule && $__angular2_47_angular2__ || {default: $__angular2_47_angular2__}),
    bootstrap = $__5.bootstrap,
    Component = $__5.Component,
    Viewport = $__5.Viewport,
    Template = $__5.Template,
    ViewContainer = $__5.ViewContainer,
    Compiler = $__5.Compiler,
    onChange = $__5.onChange,
    NgElement = $__5.NgElement,
    Decorator = $__5.Decorator;
var $__6 = ($__angular2_47_src_47_reflection_47_reflection__ = require("angular2/src/reflection/reflection"), $__angular2_47_src_47_reflection_47_reflection__ && $__angular2_47_src_47_reflection_47_reflection__.__esModule && $__angular2_47_src_47_reflection_47_reflection__ || {default: $__angular2_47_src_47_reflection_47_reflection__}),
    Reflector = $__6.Reflector,
    reflector = $__6.reflector;
var CompilerCache = ($__angular2_47_src_47_core_47_compiler_47_compiler__ = require("angular2/src/core/compiler/compiler"), $__angular2_47_src_47_core_47_compiler_47_compiler__ && $__angular2_47_src_47_core_47_compiler_47_compiler__.__esModule && $__angular2_47_src_47_core_47_compiler_47_compiler__ || {default: $__angular2_47_src_47_core_47_compiler_47_compiler__}).CompilerCache;
var DirectiveMetadataReader = ($__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__ = require("angular2/src/core/compiler/directive_metadata_reader"), $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__ && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__.__esModule && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__ || {default: $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__}).DirectiveMetadataReader;
var $__9 = ($__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__ = require("angular2/src/core/compiler/shadow_dom_strategy"), $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__ && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__.__esModule && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__ || {default: $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__}),
    ShadowDomStrategy = $__9.ShadowDomStrategy,
    NativeShadowDomStrategy = $__9.NativeShadowDomStrategy,
    EmulatedUnscopedShadowDomStrategy = $__9.EmulatedUnscopedShadowDomStrategy;
var Content = ($__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_content_95_tag__ = require("angular2/src/core/compiler/shadow_dom_emulation/content_tag"), $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_content_95_tag__ && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_content_95_tag__.__esModule && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_content_95_tag__ || {default: $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_content_95_tag__}).Content;
var DestinationLightDom = ($__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_light_95_dom__ = require("angular2/src/core/compiler/shadow_dom_emulation/light_dom"), $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_light_95_dom__ && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_light_95_dom__.__esModule && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_light_95_dom__ || {default: $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_light_95_dom__}).DestinationLightDom;
var TemplateLoader = ($__angular2_47_src_47_core_47_compiler_47_template_95_loader__ = require("angular2/src/core/compiler/template_loader"), $__angular2_47_src_47_core_47_compiler_47_template_95_loader__ && $__angular2_47_src_47_core_47_compiler_47_template_95_loader__.__esModule && $__angular2_47_src_47_core_47_compiler_47_template_95_loader__ || {default: $__angular2_47_src_47_core_47_compiler_47_template_95_loader__}).TemplateLoader;
var TemplateResolver = ($__angular2_47_src_47_core_47_compiler_47_template_95_resolver__ = require("angular2/src/core/compiler/template_resolver"), $__angular2_47_src_47_core_47_compiler_47_template_95_resolver__ && $__angular2_47_src_47_core_47_compiler_47_template_95_resolver__.__esModule && $__angular2_47_src_47_core_47_compiler_47_template_95_resolver__ || {default: $__angular2_47_src_47_core_47_compiler_47_template_95_resolver__}).TemplateResolver;
var LifeCycle = ($__angular2_47_src_47_core_47_life_95_cycle_47_life_95_cycle__ = require("angular2/src/core/life_cycle/life_cycle"), $__angular2_47_src_47_core_47_life_95_cycle_47_life_95_cycle__ && $__angular2_47_src_47_core_47_life_95_cycle_47_life_95_cycle__.__esModule && $__angular2_47_src_47_core_47_life_95_cycle_47_life_95_cycle__ || {default: $__angular2_47_src_47_core_47_life_95_cycle_47_life_95_cycle__}).LifeCycle;
var XHR = ($__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr__ = require("angular2/src/core/compiler/xhr/xhr"), $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr__ && $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr__.__esModule && $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr__ || {default: $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr__}).XHR;
var XHRImpl = ($__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr_95_impl__ = require("angular2/src/core/compiler/xhr/xhr_impl"), $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr_95_impl__ && $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr_95_impl__.__esModule && $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr_95_impl__ || {default: $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr_95_impl__}).XHRImpl;
var UrlResolver = ($__angular2_47_src_47_core_47_compiler_47_url_95_resolver__ = require("angular2/src/core/compiler/url_resolver"), $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__ && $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__.__esModule && $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__ || {default: $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__}).UrlResolver;
var StyleUrlResolver = ($__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__ = require("angular2/src/core/compiler/style_url_resolver"), $__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__ && $__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__.__esModule && $__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__ || {default: $__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__}).StyleUrlResolver;
var ComponentUrlMapper = ($__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__ = require("angular2/src/core/compiler/component_url_mapper"), $__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__ && $__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__.__esModule && $__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__ || {default: $__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__}).ComponentUrlMapper;
var StyleInliner = ($__angular2_47_src_47_core_47_compiler_47_style_95_inliner__ = require("angular2/src/core/compiler/style_inliner"), $__angular2_47_src_47_core_47_compiler_47_style_95_inliner__ && $__angular2_47_src_47_core_47_compiler_47_style_95_inliner__.__esModule && $__angular2_47_src_47_core_47_compiler_47_style_95_inliner__ || {default: $__angular2_47_src_47_core_47_compiler_47_style_95_inliner__}).StyleInliner;
var CssProcessor = ($__angular2_47_src_47_core_47_compiler_47_css_95_processor__ = require("angular2/src/core/compiler/css_processor"), $__angular2_47_src_47_core_47_compiler_47_css_95_processor__ && $__angular2_47_src_47_core_47_compiler_47_css_95_processor__.__esModule && $__angular2_47_src_47_core_47_compiler_47_css_95_processor__ || {default: $__angular2_47_src_47_core_47_compiler_47_css_95_processor__}).CssProcessor;
var $__22 = ($__angular2_47_directives__ = require("angular2/directives"), $__angular2_47_directives__ && $__angular2_47_directives__.__esModule && $__angular2_47_directives__ || {default: $__angular2_47_directives__}),
    If = $__22.If,
    Foreach = $__22.Foreach;
var $__23 = ($__benchmarks_47_src_47_naive_95_infinite_95_scroll_47_app__ = require("./app"), $__benchmarks_47_src_47_naive_95_infinite_95_scroll_47_app__ && $__benchmarks_47_src_47_naive_95_infinite_95_scroll_47_app__.__esModule && $__benchmarks_47_src_47_naive_95_infinite_95_scroll_47_app__ || {default: $__benchmarks_47_src_47_naive_95_infinite_95_scroll_47_app__}),
    App = $__23.App,
    setupReflectorForApp = $__23.setupReflectorForApp;
var $__24 = ($__benchmarks_47_src_47_naive_95_infinite_95_scroll_47_scroll_95_area__ = require("./scroll_area"), $__benchmarks_47_src_47_naive_95_infinite_95_scroll_47_scroll_95_area__ && $__benchmarks_47_src_47_naive_95_infinite_95_scroll_47_scroll_95_area__.__esModule && $__benchmarks_47_src_47_naive_95_infinite_95_scroll_47_scroll_95_area__ || {default: $__benchmarks_47_src_47_naive_95_infinite_95_scroll_47_scroll_95_area__}),
    ScrollAreaComponent = $__24.ScrollAreaComponent,
    setupReflectorForScrollArea = $__24.setupReflectorForScrollArea;
var $__25 = ($__benchmarks_47_src_47_naive_95_infinite_95_scroll_47_scroll_95_item__ = require("./scroll_item"), $__benchmarks_47_src_47_naive_95_infinite_95_scroll_47_scroll_95_item__ && $__benchmarks_47_src_47_naive_95_infinite_95_scroll_47_scroll_95_item__.__esModule && $__benchmarks_47_src_47_naive_95_infinite_95_scroll_47_scroll_95_item__ || {default: $__benchmarks_47_src_47_naive_95_infinite_95_scroll_47_scroll_95_item__}),
    ScrollItemComponent = $__25.ScrollItemComponent,
    setupReflectorForScrollItem = $__25.setupReflectorForScrollItem;
var $__26 = ($__benchmarks_47_src_47_naive_95_infinite_95_scroll_47_cells__ = require("./cells"), $__benchmarks_47_src_47_naive_95_infinite_95_scroll_47_cells__ && $__benchmarks_47_src_47_naive_95_infinite_95_scroll_47_cells__.__esModule && $__benchmarks_47_src_47_naive_95_infinite_95_scroll_47_cells__ || {default: $__benchmarks_47_src_47_naive_95_infinite_95_scroll_47_cells__}),
    CompanyNameComponent = $__26.CompanyNameComponent,
    OpportunityNameComponent = $__26.OpportunityNameComponent,
    OfferingNameComponent = $__26.OfferingNameComponent,
    AccountCellComponent = $__26.AccountCellComponent,
    StageButtonsComponent = $__26.StageButtonsComponent,
    FormattedCellComponent = $__26.FormattedCellComponent,
    setupReflectorForCells = $__26.setupReflectorForCells;
function main() {
  setupReflector();
  bootstrap(App);
}
function setupReflector() {
  setupReflectorForAngular();
  setupReflectorForApp();
  setupReflectorForScrollArea();
  setupReflectorForScrollItem();
  setupReflectorForCells();
  var evt = "$event";
  reflector.registerGetters({
    'scrollAreas': (function(o) {
      return o.scrollAreas;
    }),
    'length': (function(o) {
      return o.length;
    }),
    'iterableChanges': (function(o) {
      return o.iterableChanges;
    }),
    'scrollArea': (function(o) {
      return o.scrollArea;
    }),
    'item': (function(o) {
      return o.item;
    }),
    'visibleItems': (function(o) {
      return o.visibleItems;
    }),
    'condition': (function(o) {
      return o.condition;
    }),
    'width': (function(o) {
      return o.width;
    }),
    'value': (function(o) {
      return o.value;
    }),
    'href': (function(o) {
      return o.href;
    }),
    'company': (function(o) {
      return o.company;
    }),
    'formattedValue': (function(o) {
      return o.formattedValue;
    }),
    'name': (function(o) {
      return o.name;
    }),
    'style': (function(o) {
      return o.style;
    }),
    'offering': (function(o) {
      return o.offering;
    }),
    'account': (function(o) {
      return o.account;
    }),
    'accountId': (function(o) {
      return o.accountId;
    }),
    'companyNameWidth': (function(o) {
      return o.companyNameWidth;
    }),
    'opportunityNameWidth': (function(o) {
      return o.opportunityNameWidth;
    }),
    'offeringNameWidth': (function(o) {
      return o.offeringNameWidth;
    }),
    'accountCellWidth': (function(o) {
      return o.accountCellWidth;
    }),
    'basePointsWidth': (function(o) {
      return o.basePointsWidth;
    }),
    'scrollDivStyle': (function(o) {
      return o.scrollDivStyle;
    }),
    'paddingStyle': (function(o) {
      return o.paddingStyle;
    }),
    'innerStyle': (function(o) {
      return o.innerStyle;
    }),
    'opportunity': (function(o) {
      return o.opportunity;
    }),
    'itemStyle': (function(o) {
      return o.itemStyle;
    }),
    'dueDateWidth': (function(o) {
      return o.dueDateWidth;
    }),
    'basePoints': (function(o) {
      return o.basePoints;
    }),
    'kickerPoints': (function(o) {
      return o.kickerPoints;
    }),
    'kickerPointsWidth': (function(o) {
      return o.kickerPointsWidth;
    }),
    'bundles': (function(o) {
      return o.bundles;
    }),
    'stageButtonsWidth': (function(o) {
      return o.stageButtonsWidth;
    }),
    'bundlesWidth': (function(o) {
      return o.bundlesWidth;
    }),
    'disabled': (function(o) {
      return o.disabled;
    }),
    'isDisabled': (function(o) {
      return o.isDisabled;
    }),
    'dueDate': (function(o) {
      return o.dueDate;
    }),
    'endDate': (function(o) {
      return o.endDate;
    }),
    'aatStatus': (function(o) {
      return o.aatStatus;
    }),
    'stage': (function(o) {
      return o.stage;
    }),
    'stages': (function(o) {
      return o.stages;
    }),
    'aatStatusWidth': (function(o) {
      return o.aatStatusWidth;
    }),
    'endDateWidth': (function(o) {
      return o.endDateWidth;
    }),
    evt: (function(o) {
      return null;
    })
  });
  reflector.registerSetters({
    'scrollAreas': (function(o, v) {
      return o.scrollAreas = v;
    }),
    'length': (function(o, v) {
      return o.length = v;
    }),
    'condition': (function(o, v) {
      return o.condition = v;
    }),
    'scrollArea': (function(o, v) {
      return o.scrollArea = v;
    }),
    'item': (function(o, v) {
      return o.item = v;
    }),
    'visibleItems': (function(o, v) {
      return o.visibleItems = v;
    }),
    'iterableChanges': (function(o, v) {
      return o.iterableChanges = v;
    }),
    'width': (function(o, v) {
      return o.width = v;
    }),
    'value': (function(o, v) {
      return o.value = v;
    }),
    'company': (function(o, v) {
      return o.company = v;
    }),
    'name': (function(o, v) {
      return o.name = v;
    }),
    'offering': (function(o, v) {
      return o.offering = v;
    }),
    'account': (function(o, v) {
      return o.account = v;
    }),
    'accountId': (function(o, v) {
      return o.accountId = v;
    }),
    'formattedValue': (function(o, v) {
      return o.formattedValue = v;
    }),
    'stage': (function(o, v) {
      return o.stage = v;
    }),
    'stages': (function(o, v) {
      return o.stages = v;
    }),
    'disabled': (function(o, v) {
      return o.disabled = v;
    }),
    'isDisabled': (function(o, v) {
      return o.isDisabled = v;
    }),
    'href': (function(o, v) {
      return o.href = v;
    }),
    'companyNameWidth': (function(o, v) {
      return o.companyNameWidth = v;
    }),
    'opportunityNameWidth': (function(o, v) {
      return o.opportunityNameWidth = v;
    }),
    'offeringNameWidth': (function(o, v) {
      return o.offeringNameWidth = v;
    }),
    'accountCellWidth': (function(o, v) {
      return o.accountCellWidth = v;
    }),
    'basePointsWidth': (function(o, v) {
      return o.basePointsWidth = v;
    }),
    'scrollDivStyle': (function(o, v) {
      return o.scrollDivStyle = v;
    }),
    'paddingStyle': (function(o, v) {
      return o.paddingStyle = v;
    }),
    'innerStyle': (function(o, v) {
      return o.innerStyle = v;
    }),
    'opportunity': (function(o, v) {
      return o.opportunity = v;
    }),
    'itemStyle': (function(o, v) {
      return o.itemStyle = v;
    }),
    'basePoints': (function(o, v) {
      return o.basePoints = v;
    }),
    'kickerPoints': (function(o, v) {
      return o.kickerPoints = v;
    }),
    'kickerPointsWidth': (function(o, v) {
      return o.kickerPointsWidth = v;
    }),
    'stageButtonsWidth': (function(o, v) {
      return o.stageButtonsWidth = v;
    }),
    'dueDate': (function(o, v) {
      return o.dueDate = v;
    }),
    'dueDateWidth': (function(o, v) {
      return o.dueDateWidth = v;
    }),
    'endDate': (function(o, v) {
      return o.endDate = v;
    }),
    'endDateWidth': (function(o, v) {
      return o.endDate = v;
    }),
    'aatStatus': (function(o, v) {
      return o.aatStatus = v;
    }),
    'aatStatusWidth': (function(o, v) {
      return o.aatStatusWidth = v;
    }),
    'bundles': (function(o, v) {
      return o.bundles = v;
    }),
    'bundlesWidth': (function(o, v) {
      return o.bundlesWidth = v;
    }),
    evt: (function(o, v) {
      return null;
    }),
    'style': (function(o, m) {
      MapWrapper.forEach(m, function(v, k) {
        o.style.setProperty(k, v);
      });
    })
  });
  reflector.registerMethods({
    'onScroll': (function(o, args) {
      o.onScroll(args[0]);
    }),
    'setStage': (function(o, args) {
      return o.setStage(args[0]);
    })
  });
}
function setupReflectorForAngular() {
  reflector.registerType(If, {
    'factory': (function(vp) {
      return new If(vp);
    }),
    'parameters': [[ViewContainer]],
    'annotations': [new Viewport({
      selector: '[if]',
      bind: {'condition': 'if'}
    })]
  });
  reflector.registerType(Foreach, {
    'factory': (function(vp) {
      return new Foreach(vp);
    }),
    'parameters': [[ViewContainer]],
    'annotations': [new Viewport({
      selector: '[foreach]',
      bind: {'iterableChanges': 'in | iterableDiff'}
    })]
  });
  reflector.registerType(Compiler, {
    "factory": (function(changeDetection, templateLoader, reader, parser, compilerCache, shadowDomStrategy, tplResolver, cmpUrlMapper, urlResolver, cssProcessor) {
      return new Compiler(changeDetection, templateLoader, reader, parser, compilerCache, shadowDomStrategy, tplResolver, cmpUrlMapper, urlResolver, cssProcessor);
    }),
    "parameters": [[ChangeDetection], [TemplateLoader], [DirectiveMetadataReader], [Parser], [CompilerCache], [ShadowDomStrategy], [TemplateResolver], [ComponentUrlMapper], [UrlResolver], [CssProcessor]],
    "annotations": []
  });
  reflector.registerType(CompilerCache, {
    'factory': (function() {
      return new CompilerCache();
    }),
    'parameters': [],
    'annotations': []
  });
  reflector.registerType(Parser, {
    'factory': (function(lexer) {
      return new Parser(lexer);
    }),
    'parameters': [[Lexer]],
    'annotations': []
  });
  reflector.registerType(TemplateLoader, {
    "factory": (function(xhr, urlResolver) {
      return new TemplateLoader(xhr, urlResolver);
    }),
    "parameters": [[XHR], [UrlResolver]],
    "annotations": []
  });
  reflector.registerType(TemplateResolver, {
    "factory": (function() {
      return new TemplateResolver();
    }),
    "parameters": [],
    "annotations": []
  });
  reflector.registerType(XHR, {
    "factory": (function() {
      return new XHRImpl();
    }),
    "parameters": [],
    "annotations": []
  });
  reflector.registerType(DirectiveMetadataReader, {
    'factory': (function() {
      return new DirectiveMetadataReader();
    }),
    'parameters': [],
    'annotations': []
  });
  reflector.registerType(Lexer, {
    'factory': (function() {
      return new Lexer();
    }),
    'parameters': [],
    'annotations': []
  });
  reflector.registerType(ExceptionHandler, {
    "factory": (function() {
      return new ExceptionHandler();
    }),
    "parameters": [],
    "annotations": []
  });
  reflector.registerType(LifeCycle, {
    "factory": (function(exHandler, cd) {
      return new LifeCycle(exHandler, cd);
    }),
    "parameters": [[ExceptionHandler], [ChangeDetector]],
    "annotations": []
  });
  reflector.registerType(ShadowDomStrategy, {
    "factory": (function(strategy) {
      return strategy;
    }),
    "parameters": [[NativeShadowDomStrategy]],
    "annotations": []
  });
  reflector.registerType(NativeShadowDomStrategy, {
    "factory": (function(styleUrlResolver) {
      return new NativeShadowDomStrategy(styleUrlResolver);
    }),
    "parameters": [[StyleUrlResolver]],
    "annotations": []
  });
  reflector.registerType(EmulatedUnscopedShadowDomStrategy, {
    "factory": (function(styleUrlResolver) {
      return new EmulatedUnscopedShadowDomStrategy(styleUrlResolver, null);
    }),
    "parameters": [[StyleUrlResolver]],
    "annotations": []
  });
  reflector.registerType(StyleUrlResolver, {
    "factory": (function(urlResolver) {
      return new StyleUrlResolver(urlResolver);
    }),
    "parameters": [[UrlResolver]],
    "annotations": []
  });
  reflector.registerType(UrlResolver, {
    "factory": (function() {
      return new UrlResolver();
    }),
    "parameters": [],
    "annotations": []
  });
  reflector.registerType(ComponentUrlMapper, {
    "factory": (function() {
      return new ComponentUrlMapper();
    }),
    "parameters": [],
    "annotations": []
  });
  reflector.registerType(Content, {
    "factory": (function(lightDom, el) {
      return new Content(lightDom, el);
    }),
    "parameters": [[DestinationLightDom], [NgElement]],
    "annotations": [new Decorator({selector: '[content]'})]
  });
  reflector.registerType(StyleInliner, {
    "factory": (function(xhr, styleUrlResolver, urlResolver) {
      return new StyleInliner(xhr, styleUrlResolver, urlResolver);
    }),
    "parameters": [[XHR], [StyleUrlResolver], [UrlResolver]],
    "annotations": []
  });
  reflector.registerType(CssProcessor, {
    "factory": (function() {
      return new CssProcessor(null);
    }),
    "parameters": [],
    "annotations": []
  });
  reflector.registerType(Reflector, {
    "factory": (function() {
      return reflector;
    }),
    "parameters": [],
    "annotations": []
  });
}

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/benchmarks/src/naive_infinite_scroll/index.map

//# sourceMappingURL=./index.map