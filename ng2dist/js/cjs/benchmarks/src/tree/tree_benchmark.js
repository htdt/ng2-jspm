"use strict";
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var __moduleName = "benchmarks/src/tree/tree_benchmark";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_change_95_detection__,
    $__angular2_47_src_47_core_47_exception_95_handler__,
    $__angular2_47_angular2__,
    $__angular2_47_src_47_core_47_compiler_47_compiler__,
    $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__,
    $__angular2_47_src_47_core_47_compiler_47_template_95_loader__,
    $__angular2_47_src_47_core_47_compiler_47_template_95_resolver__,
    $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__,
    $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_content_95_tag__,
    $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_light_95_dom__,
    $__angular2_47_src_47_core_47_life_95_cycle_47_life_95_cycle__,
    $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__,
    $__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__,
    $__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__,
    $__angular2_47_src_47_core_47_compiler_47_style_95_inliner__,
    $__angular2_47_src_47_core_47_compiler_47_css_95_processor__,
    $__angular2_47_src_47_reflection_47_reflection__,
    $__angular2_47_src_47_dom_47_dom_95_adapter__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_browser__,
    $__angular2_47_src_47_test_95_lib_47_benchmark_95_util__,
    $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr__,
    $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr_95_impl__,
    $__angular2_47_directives__,
    $__angular2_47_src_47_dom_47_browser_95_adapter__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var $__1 = ($__angular2_47_change_95_detection__ = require("angular2/change_detection"), $__angular2_47_change_95_detection__ && $__angular2_47_change_95_detection__.__esModule && $__angular2_47_change_95_detection__ || {default: $__angular2_47_change_95_detection__}),
    Parser = $__1.Parser,
    Lexer = $__1.Lexer,
    ChangeDetector = $__1.ChangeDetector,
    ChangeDetection = $__1.ChangeDetection,
    jitChangeDetection = $__1.jitChangeDetection;
var ExceptionHandler = ($__angular2_47_src_47_core_47_exception_95_handler__ = require("angular2/src/core/exception_handler"), $__angular2_47_src_47_core_47_exception_95_handler__ && $__angular2_47_src_47_core_47_exception_95_handler__.__esModule && $__angular2_47_src_47_core_47_exception_95_handler__ || {default: $__angular2_47_src_47_core_47_exception_95_handler__}).ExceptionHandler;
var $__3 = ($__angular2_47_angular2__ = require("angular2/angular2"), $__angular2_47_angular2__ && $__angular2_47_angular2__.__esModule && $__angular2_47_angular2__ || {default: $__angular2_47_angular2__}),
    bootstrap = $__3.bootstrap,
    Component = $__3.Component,
    Viewport = $__3.Viewport,
    Template = $__3.Template,
    ViewContainer = $__3.ViewContainer,
    Compiler = $__3.Compiler,
    NgElement = $__3.NgElement,
    Decorator = $__3.Decorator;
var CompilerCache = ($__angular2_47_src_47_core_47_compiler_47_compiler__ = require("angular2/src/core/compiler/compiler"), $__angular2_47_src_47_core_47_compiler_47_compiler__ && $__angular2_47_src_47_core_47_compiler_47_compiler__.__esModule && $__angular2_47_src_47_core_47_compiler_47_compiler__ || {default: $__angular2_47_src_47_core_47_compiler_47_compiler__}).CompilerCache;
var DirectiveMetadataReader = ($__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__ = require("angular2/src/core/compiler/directive_metadata_reader"), $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__ && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__.__esModule && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__ || {default: $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__}).DirectiveMetadataReader;
var TemplateLoader = ($__angular2_47_src_47_core_47_compiler_47_template_95_loader__ = require("angular2/src/core/compiler/template_loader"), $__angular2_47_src_47_core_47_compiler_47_template_95_loader__ && $__angular2_47_src_47_core_47_compiler_47_template_95_loader__.__esModule && $__angular2_47_src_47_core_47_compiler_47_template_95_loader__ || {default: $__angular2_47_src_47_core_47_compiler_47_template_95_loader__}).TemplateLoader;
var TemplateResolver = ($__angular2_47_src_47_core_47_compiler_47_template_95_resolver__ = require("angular2/src/core/compiler/template_resolver"), $__angular2_47_src_47_core_47_compiler_47_template_95_resolver__ && $__angular2_47_src_47_core_47_compiler_47_template_95_resolver__.__esModule && $__angular2_47_src_47_core_47_compiler_47_template_95_resolver__ || {default: $__angular2_47_src_47_core_47_compiler_47_template_95_resolver__}).TemplateResolver;
var $__8 = ($__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__ = require("angular2/src/core/compiler/shadow_dom_strategy"), $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__ && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__.__esModule && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__ || {default: $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__}),
    ShadowDomStrategy = $__8.ShadowDomStrategy,
    NativeShadowDomStrategy = $__8.NativeShadowDomStrategy,
    EmulatedUnscopedShadowDomStrategy = $__8.EmulatedUnscopedShadowDomStrategy;
var Content = ($__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_content_95_tag__ = require("angular2/src/core/compiler/shadow_dom_emulation/content_tag"), $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_content_95_tag__ && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_content_95_tag__.__esModule && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_content_95_tag__ || {default: $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_content_95_tag__}).Content;
var DestinationLightDom = ($__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_light_95_dom__ = require("angular2/src/core/compiler/shadow_dom_emulation/light_dom"), $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_light_95_dom__ && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_light_95_dom__.__esModule && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_light_95_dom__ || {default: $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_light_95_dom__}).DestinationLightDom;
var LifeCycle = ($__angular2_47_src_47_core_47_life_95_cycle_47_life_95_cycle__ = require("angular2/src/core/life_cycle/life_cycle"), $__angular2_47_src_47_core_47_life_95_cycle_47_life_95_cycle__ && $__angular2_47_src_47_core_47_life_95_cycle_47_life_95_cycle__.__esModule && $__angular2_47_src_47_core_47_life_95_cycle_47_life_95_cycle__ || {default: $__angular2_47_src_47_core_47_life_95_cycle_47_life_95_cycle__}).LifeCycle;
var UrlResolver = ($__angular2_47_src_47_core_47_compiler_47_url_95_resolver__ = require("angular2/src/core/compiler/url_resolver"), $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__ && $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__.__esModule && $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__ || {default: $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__}).UrlResolver;
var StyleUrlResolver = ($__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__ = require("angular2/src/core/compiler/style_url_resolver"), $__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__ && $__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__.__esModule && $__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__ || {default: $__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__}).StyleUrlResolver;
var ComponentUrlMapper = ($__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__ = require("angular2/src/core/compiler/component_url_mapper"), $__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__ && $__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__.__esModule && $__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__ || {default: $__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__}).ComponentUrlMapper;
var StyleInliner = ($__angular2_47_src_47_core_47_compiler_47_style_95_inliner__ = require("angular2/src/core/compiler/style_inliner"), $__angular2_47_src_47_core_47_compiler_47_style_95_inliner__ && $__angular2_47_src_47_core_47_compiler_47_style_95_inliner__.__esModule && $__angular2_47_src_47_core_47_compiler_47_style_95_inliner__ || {default: $__angular2_47_src_47_core_47_compiler_47_style_95_inliner__}).StyleInliner;
var CssProcessor = ($__angular2_47_src_47_core_47_compiler_47_css_95_processor__ = require("angular2/src/core/compiler/css_processor"), $__angular2_47_src_47_core_47_compiler_47_css_95_processor__ && $__angular2_47_src_47_core_47_compiler_47_css_95_processor__.__esModule && $__angular2_47_src_47_core_47_compiler_47_css_95_processor__ || {default: $__angular2_47_src_47_core_47_compiler_47_css_95_processor__}).CssProcessor;
var $__17 = ($__angular2_47_src_47_reflection_47_reflection__ = require("angular2/src/reflection/reflection"), $__angular2_47_src_47_reflection_47_reflection__ && $__angular2_47_src_47_reflection_47_reflection__.__esModule && $__angular2_47_src_47_reflection_47_reflection__ || {default: $__angular2_47_src_47_reflection_47_reflection__}),
    Reflector = $__17.Reflector,
    reflector = $__17.reflector;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var isPresent = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).isPresent;
var $__20 = ($__angular2_47_src_47_facade_47_browser__ = require("angular2/src/facade/browser"), $__angular2_47_src_47_facade_47_browser__ && $__angular2_47_src_47_facade_47_browser__.__esModule && $__angular2_47_src_47_facade_47_browser__ || {default: $__angular2_47_src_47_facade_47_browser__}),
    window = $__20.window,
    document = $__20.document,
    gc = $__20.gc;
var $__21 = ($__angular2_47_src_47_test_95_lib_47_benchmark_95_util__ = require("angular2/src/test_lib/benchmark_util"), $__angular2_47_src_47_test_95_lib_47_benchmark_95_util__ && $__angular2_47_src_47_test_95_lib_47_benchmark_95_util__.__esModule && $__angular2_47_src_47_test_95_lib_47_benchmark_95_util__ || {default: $__angular2_47_src_47_test_95_lib_47_benchmark_95_util__}),
    getIntParameter = $__21.getIntParameter,
    bindAction = $__21.bindAction;
var XHR = ($__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr__ = require("angular2/src/core/compiler/xhr/xhr"), $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr__ && $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr__.__esModule && $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr__ || {default: $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr__}).XHR;
var XHRImpl = ($__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr_95_impl__ = require("angular2/src/core/compiler/xhr/xhr_impl"), $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr_95_impl__ && $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr_95_impl__.__esModule && $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr_95_impl__ || {default: $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr_95_impl__}).XHRImpl;
var If = ($__angular2_47_directives__ = require("angular2/directives"), $__angular2_47_directives__ && $__angular2_47_directives__.__esModule && $__angular2_47_directives__ || {default: $__angular2_47_directives__}).If;
var BrowserDomAdapter = ($__angular2_47_src_47_dom_47_browser_95_adapter__ = require("angular2/src/dom/browser_adapter"), $__angular2_47_src_47_dom_47_browser_95_adapter__ && $__angular2_47_src_47_dom_47_browser_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_browser_95_adapter__ || {default: $__angular2_47_src_47_dom_47_browser_95_adapter__}).BrowserDomAdapter;
function setupReflector() {
  reflector.registerType(AppComponent, {
    'factory': (function() {
      return new AppComponent();
    }),
    'parameters': [],
    'annotations': [new Component({selector: 'app'}), new Template({
      directives: [TreeComponent],
      inline: "<tree [data]='initData'></tree>"
    })]
  });
  reflector.registerType(TreeComponent, {
    'factory': (function() {
      return new TreeComponent();
    }),
    'parameters': [],
    'annotations': [new Component({
      selector: 'tree',
      bind: {'data': 'data'}
    }), new Template({
      directives: [TreeComponent, If],
      inline: "<span> {{data.value}} <span template='if data.right != null'><tree [data]='data.right'></tree></span><span template='if data.left != null'><tree [data]='data.left'></tree></span></span>"
    })]
  });
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
  reflector.registerType(Compiler, {
    'factory': (function(cd, templateLoader, reader, parser, compilerCache, strategy, tplResolver, cmpUrlMapper, urlResolver, cssProcessor) {
      return new Compiler(cd, templateLoader, reader, parser, compilerCache, strategy, tplResolver, cmpUrlMapper, urlResolver, cssProcessor);
    }),
    'parameters': [[ChangeDetection], [TemplateLoader], [DirectiveMetadataReader], [Parser], [CompilerCache], [ShadowDomStrategy], [TemplateResolver], [ComponentUrlMapper], [UrlResolver], [CssProcessor]],
    'annotations': []
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
    'factory': (function(xhr, urlResolver) {
      return new TemplateLoader(xhr, urlResolver);
    }),
    'parameters': [[XHR], [UrlResolver]],
    'annotations': []
  });
  reflector.registerType(TemplateResolver, {
    'factory': (function() {
      return new TemplateResolver();
    }),
    'parameters': [],
    'annotations': []
  });
  reflector.registerType(XHR, {
    'factory': (function() {
      return new XHRImpl();
    }),
    'parameters': [],
    'annotations': []
  });
  reflector.registerType(DirectiveMetadataReader, {
    'factory': (function() {
      return new DirectiveMetadataReader();
    }),
    'parameters': [],
    'annotations': []
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
  reflector.registerType(Content, {
    "factory": (function(lightDom, el) {
      return new Content(lightDom, el);
    }),
    "parameters": [[DestinationLightDom], [NgElement]],
    "annotations": [new Decorator({selector: '[content]'})]
  });
  reflector.registerType(UrlResolver, {
    "factory": (function() {
      return new UrlResolver();
    }),
    "parameters": [],
    "annotations": []
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
  reflector.registerType(ComponentUrlMapper, {
    "factory": (function() {
      return new ComponentUrlMapper();
    }),
    "parameters": [],
    "annotations": []
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
  reflector.registerGetters({
    'value': (function(a) {
      return a.value;
    }),
    'left': (function(a) {
      return a.left;
    }),
    'right': (function(a) {
      return a.right;
    }),
    'initData': (function(a) {
      return a.initData;
    }),
    'data': (function(a) {
      return a.data;
    }),
    'condition': (function(a) {
      return a.condition;
    })
  });
  reflector.registerSetters({
    'value': (function(a, v) {
      return a.value = v;
    }),
    'left': (function(a, v) {
      return a.left = v;
    }),
    'right': (function(a, v) {
      return a.right = v;
    }),
    'initData': (function(a, v) {
      return a.initData = v;
    }),
    'data': (function(a, v) {
      return a.data = v;
    }),
    'condition': (function(a, v) {
      return a.condition = v;
    })
  });
}
var BASELINE_TREE_TEMPLATE;
var BASELINE_IF_TEMPLATE;
function main() {
  BrowserDomAdapter.makeCurrent();
  var maxDepth = getIntParameter('depth');
  setupReflector();
  BASELINE_TREE_TEMPLATE = DOM.createTemplate('<span>_<template class="ng-binding"></template><template class="ng-binding"></template></span>');
  BASELINE_IF_TEMPLATE = DOM.createTemplate('<span template="if"><tree></tree></span>');
  var app;
  var lifeCycle;
  var baselineRootTreeComponent;
  var count = 0;
  function ng2DestroyDom() {
    app.initData = new TreeNode('', null, null);
    lifeCycle.tick();
  }
  function profile(create, destroy, name) {
    return function() {
      window.console.profile(name + ' w GC');
      var duration = 0;
      var count = 0;
      while (count++ < 150) {
        gc();
        var start = window.performance.now();
        create();
        duration += window.performance.now() - start;
        destroy();
      }
      window.console.profileEnd(name + ' w GC');
      window.console.log(("Iterations: " + count + "; time: " + duration / count + " ms / iteration"));
      window.console.profile(name + ' w/o GC');
      duration = 0;
      count = 0;
      while (count++ < 150) {
        var start = window.performance.now();
        create();
        duration += window.performance.now() - start;
        destroy();
      }
      window.console.profileEnd(name + ' w/o GC');
      window.console.log(("Iterations: " + count + "; time: " + duration / count + " ms / iteration"));
    };
  }
  function ng2CreateDom() {
    var values = count++ % 2 == 0 ? ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '*'] : ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', '-'];
    app.initData = buildTree(maxDepth, values, 0);
    lifeCycle.tick();
  }
  function noop() {}
  function initNg2() {
    bootstrap(AppComponent).then((function(injector) {
      lifeCycle = injector.get(LifeCycle);
      app = injector.get(AppComponent);
      bindAction('#ng2DestroyDom', ng2DestroyDom);
      bindAction('#ng2CreateDom', ng2CreateDom);
      bindAction('#ng2UpdateDomProfile', profile(ng2CreateDom, noop, 'ng2-update'));
      bindAction('#ng2CreateDomProfile', profile(ng2CreateDom, ng2DestroyDom, 'ng2-create'));
    }));
  }
  function baselineDestroyDom() {
    baselineRootTreeComponent.update(new TreeNode('', null, null));
  }
  function baselineCreateDom() {
    var values = count++ % 2 == 0 ? ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '*'] : ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', '-'];
    baselineRootTreeComponent.update(buildTree(maxDepth, values, 0));
  }
  function initBaseline() {
    var tree = DOM.createElement('tree');
    DOM.appendChild(DOM.querySelector(document, 'baseline'), tree);
    baselineRootTreeComponent = new BaseLineTreeComponent(tree);
    bindAction('#baselineDestroyDom', baselineDestroyDom);
    bindAction('#baselineCreateDom', baselineCreateDom);
    bindAction('#baselineUpdateDomProfile', profile(baselineCreateDom, noop, 'baseline-update'));
    bindAction('#baselineCreateDomProfile', profile(baselineCreateDom, baselineDestroyDom, 'baseline-create'));
  }
  initNg2();
  initBaseline();
}
var TreeNode = function TreeNode(value, left, right) {
  this.value = value;
  this.left = left;
  this.right = right;
};
($traceurRuntime.createClass)(TreeNode, {}, {});
function buildTree(maxDepth, values, curDepth) {
  if (maxDepth === curDepth)
    return new TreeNode('', null, null);
  return new TreeNode(values[curDepth], buildTree(maxDepth, values, curDepth + 1), buildTree(maxDepth, values, curDepth + 1));
}
var BaseLineTreeComponent = function BaseLineTreeComponent(element) {
  this.element = element;
  var clone = DOM.clone(BASELINE_TREE_TEMPLATE.content.firstChild);
  var shadowRoot = this.element.createShadowRoot();
  DOM.appendChild(shadowRoot, clone);
  var child = clone.firstChild;
  this.value = new BaseLineInterpolation(child);
  child = DOM.nextSibling(child);
  this.left = new BaseLineIf(child);
  child = DOM.nextSibling(child);
  this.right = new BaseLineIf(child);
};
($traceurRuntime.createClass)(BaseLineTreeComponent, {update: function(value) {
    assert.argumentTypes(value, TreeNode);
    this.value.update(value.value);
    this.left.update(value.left);
    this.right.update(value.right);
  }}, {});
Object.defineProperty(BaseLineTreeComponent.prototype.update, "parameters", {get: function() {
    return [[TreeNode]];
  }});
var BaseLineInterpolation = function BaseLineInterpolation(textNode) {
  this.value = null;
  this.textNode = textNode;
};
($traceurRuntime.createClass)(BaseLineInterpolation, {update: function(value) {
    assert.argumentTypes(value, assert.type.string);
    if (this.value !== value) {
      this.value = value;
      DOM.setText(this.textNode, value + ' ');
    }
  }}, {});
Object.defineProperty(BaseLineInterpolation.prototype.update, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
var BaseLineIf = function BaseLineIf(anchor) {
  this.anchor = anchor;
  this.condition = false;
  this.component = null;
};
($traceurRuntime.createClass)(BaseLineIf, {update: function(value) {
    assert.argumentTypes(value, TreeNode);
    var newCondition = isPresent(value);
    if (this.condition !== newCondition) {
      this.condition = newCondition;
      if (isPresent(this.component)) {
        DOM.remove(this.component.element);
        this.component = null;
      }
      if (this.condition) {
        var element = DOM.firstChild(DOM.clone(BASELINE_IF_TEMPLATE).content);
        this.anchor.parentNode.insertBefore(element, DOM.nextSibling(this.anchor));
        this.component = new BaseLineTreeComponent(DOM.firstChild(element));
      }
    }
    if (isPresent(this.component)) {
      this.component.update(value);
    }
  }}, {});
Object.defineProperty(BaseLineIf.prototype.update, "parameters", {get: function() {
    return [[TreeNode]];
  }});
var AppComponent = function AppComponent() {
  this.initData = new TreeNode('', null, null);
};
($traceurRuntime.createClass)(AppComponent, {}, {});
var TreeComponent = function TreeComponent() {};
($traceurRuntime.createClass)(TreeComponent, {}, {});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/benchmarks/src/tree/tree_benchmark.map

//# sourceMappingURL=./tree_benchmark.map