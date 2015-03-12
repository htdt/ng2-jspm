"use strict";
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var __moduleName = "benchmarks/src/compiler/compiler_benchmark";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_src_47_dom_47_dom_95_adapter__,
    $__angular2_47_src_47_dom_47_browser_95_adapter__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_browser__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__,
    $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__,
    $__angular2_47_change_95_detection__,
    $__angular2_47_src_47_core_47_compiler_47_compiler__,
    $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__,
    $__angular2_47_src_47_core_47_annotations_47_annotations__,
    $__angular2_47_src_47_core_47_annotations_47_annotations__,
    $__angular2_47_src_47_core_47_annotations_47_template__,
    $__angular2_47_src_47_core_47_compiler_47_template_95_loader__,
    $__angular2_47_src_47_core_47_compiler_47_template_95_resolver__,
    $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__,
    $__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__,
    $__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__,
    $__angular2_47_src_47_core_47_compiler_47_css_95_processor__,
    $__angular2_47_src_47_reflection_47_reflection__,
    $__angular2_47_src_47_test_95_lib_47_benchmark_95_util__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var BrowserDomAdapter = ($__angular2_47_src_47_dom_47_browser_95_adapter__ = require("angular2/src/dom/browser_adapter"), $__angular2_47_src_47_dom_47_browser_95_adapter__ && $__angular2_47_src_47_dom_47_browser_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_browser_95_adapter__ || {default: $__angular2_47_src_47_dom_47_browser_95_adapter__}).BrowserDomAdapter;
var $__3 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    isBlank = $__3.isBlank,
    Type = $__3.Type;
var document = ($__angular2_47_src_47_facade_47_browser__ = require("angular2/src/facade/browser"), $__angular2_47_src_47_facade_47_browser__ && $__angular2_47_src_47_facade_47_browser__.__esModule && $__angular2_47_src_47_facade_47_browser__ || {default: $__angular2_47_src_47_facade_47_browser__}).document;
var MapWrapper = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}).MapWrapper;
var DirectiveMetadata = ($__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__ = require("angular2/src/core/compiler/directive_metadata"), $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__ && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__.__esModule && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__ || {default: $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata__}).DirectiveMetadata;
var NativeShadowDomStrategy = ($__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__ = require("angular2/src/core/compiler/shadow_dom_strategy"), $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__ && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__.__esModule && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__ || {default: $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__}).NativeShadowDomStrategy;
var $__8 = ($__angular2_47_change_95_detection__ = require("angular2/change_detection"), $__angular2_47_change_95_detection__ && $__angular2_47_change_95_detection__.__esModule && $__angular2_47_change_95_detection__ || {default: $__angular2_47_change_95_detection__}),
    Parser = $__8.Parser,
    Lexer = $__8.Lexer,
    ProtoRecordRange = $__8.ProtoRecordRange,
    dynamicChangeDetection = $__8.dynamicChangeDetection;
var $__9 = ($__angular2_47_src_47_core_47_compiler_47_compiler__ = require("angular2/src/core/compiler/compiler"), $__angular2_47_src_47_core_47_compiler_47_compiler__ && $__angular2_47_src_47_core_47_compiler_47_compiler__.__esModule && $__angular2_47_src_47_core_47_compiler_47_compiler__ || {default: $__angular2_47_src_47_core_47_compiler_47_compiler__}),
    Compiler = $__9.Compiler,
    CompilerCache = $__9.CompilerCache;
var DirectiveMetadataReader = ($__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__ = require("angular2/src/core/compiler/directive_metadata_reader"), $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__ && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__.__esModule && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__ || {default: $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__}).DirectiveMetadataReader;
var Component = ($__angular2_47_src_47_core_47_annotations_47_annotations__ = require("angular2/src/core/annotations/annotations"), $__angular2_47_src_47_core_47_annotations_47_annotations__ && $__angular2_47_src_47_core_47_annotations_47_annotations__.__esModule && $__angular2_47_src_47_core_47_annotations_47_annotations__ || {default: $__angular2_47_src_47_core_47_annotations_47_annotations__}).Component;
var Decorator = ($__angular2_47_src_47_core_47_annotations_47_annotations__ = require("angular2/src/core/annotations/annotations"), $__angular2_47_src_47_core_47_annotations_47_annotations__ && $__angular2_47_src_47_core_47_annotations_47_annotations__.__esModule && $__angular2_47_src_47_core_47_annotations_47_annotations__ || {default: $__angular2_47_src_47_core_47_annotations_47_annotations__}).Decorator;
var Template = ($__angular2_47_src_47_core_47_annotations_47_template__ = require("angular2/src/core/annotations/template"), $__angular2_47_src_47_core_47_annotations_47_template__ && $__angular2_47_src_47_core_47_annotations_47_template__.__esModule && $__angular2_47_src_47_core_47_annotations_47_template__ || {default: $__angular2_47_src_47_core_47_annotations_47_template__}).Template;
var TemplateLoader = ($__angular2_47_src_47_core_47_compiler_47_template_95_loader__ = require("angular2/src/core/compiler/template_loader"), $__angular2_47_src_47_core_47_compiler_47_template_95_loader__ && $__angular2_47_src_47_core_47_compiler_47_template_95_loader__.__esModule && $__angular2_47_src_47_core_47_compiler_47_template_95_loader__ || {default: $__angular2_47_src_47_core_47_compiler_47_template_95_loader__}).TemplateLoader;
var TemplateResolver = ($__angular2_47_src_47_core_47_compiler_47_template_95_resolver__ = require("angular2/src/core/compiler/template_resolver"), $__angular2_47_src_47_core_47_compiler_47_template_95_resolver__ && $__angular2_47_src_47_core_47_compiler_47_template_95_resolver__.__esModule && $__angular2_47_src_47_core_47_compiler_47_template_95_resolver__ || {default: $__angular2_47_src_47_core_47_compiler_47_template_95_resolver__}).TemplateResolver;
var UrlResolver = ($__angular2_47_src_47_core_47_compiler_47_url_95_resolver__ = require("angular2/src/core/compiler/url_resolver"), $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__ && $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__.__esModule && $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__ || {default: $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__}).UrlResolver;
var StyleUrlResolver = ($__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__ = require("angular2/src/core/compiler/style_url_resolver"), $__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__ && $__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__.__esModule && $__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__ || {default: $__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__}).StyleUrlResolver;
var ComponentUrlMapper = ($__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__ = require("angular2/src/core/compiler/component_url_mapper"), $__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__ && $__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__.__esModule && $__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__ || {default: $__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__}).ComponentUrlMapper;
var CssProcessor = ($__angular2_47_src_47_core_47_compiler_47_css_95_processor__ = require("angular2/src/core/compiler/css_processor"), $__angular2_47_src_47_core_47_compiler_47_css_95_processor__ && $__angular2_47_src_47_core_47_compiler_47_css_95_processor__.__esModule && $__angular2_47_src_47_core_47_compiler_47_css_95_processor__ || {default: $__angular2_47_src_47_core_47_compiler_47_css_95_processor__}).CssProcessor;
var reflector = ($__angular2_47_src_47_reflection_47_reflection__ = require("angular2/src/reflection/reflection"), $__angular2_47_src_47_reflection_47_reflection__ && $__angular2_47_src_47_reflection_47_reflection__.__esModule && $__angular2_47_src_47_reflection_47_reflection__ || {default: $__angular2_47_src_47_reflection_47_reflection__}).reflector;
var $__21 = ($__angular2_47_src_47_test_95_lib_47_benchmark_95_util__ = require("angular2/src/test_lib/benchmark_util"), $__angular2_47_src_47_test_95_lib_47_benchmark_95_util__ && $__angular2_47_src_47_test_95_lib_47_benchmark_95_util__.__esModule && $__angular2_47_src_47_test_95_lib_47_benchmark_95_util__ || {default: $__angular2_47_src_47_test_95_lib_47_benchmark_95_util__}),
    getIntParameter = $__21.getIntParameter,
    bindAction = $__21.bindAction;
function setupReflector() {
  reflector.registerType(BenchmarkComponent, {
    "factory": (function() {
      return new BenchmarkComponent();
    }),
    "parameters": [],
    "annotations": [new Component()]
  });
  reflector.registerType(Dir0, {
    "factory": (function() {
      return new Dir0();
    }),
    "parameters": [],
    "annotations": [new Decorator({
      selector: '[dir0]',
      bind: {'prop': 'attr0'}
    })]
  });
  reflector.registerType(Dir1, {
    "factory": (function(dir0) {
      return new Dir1(dir0);
    }),
    "parameters": [[Dir0]],
    "annotations": [new Decorator({
      selector: '[dir1]',
      bind: {'prop': 'attr1'}
    })]
  });
  reflector.registerType(Dir2, {
    "factory": (function(dir1) {
      return new Dir2(dir1);
    }),
    "parameters": [[Dir1]],
    "annotations": [new Decorator({
      selector: '[dir2]',
      bind: {'prop': 'attr2'}
    })]
  });
  reflector.registerType(Dir3, {
    "factory": (function(dir2) {
      return new Dir3(dir2);
    }),
    "parameters": [[Dir2]],
    "annotations": [new Decorator({
      selector: '[dir3]',
      bind: {'prop': 'attr3'}
    })]
  });
  reflector.registerType(Dir4, {
    "factory": (function(dir3) {
      return new Dir4(dir3);
    }),
    "parameters": [[Dir3]],
    "annotations": [new Decorator({
      selector: '[dir4]',
      bind: {'prop': 'attr4'}
    })]
  });
  reflector.registerGetters({
    "inter0": (function(a) {
      return a.inter0;
    }),
    "inter1": (function(a) {
      return a.inter1;
    }),
    "inter2": (function(a) {
      return a.inter2;
    }),
    "inter3": (function(a) {
      return a.inter3;
    }),
    "inter4": (function(a) {
      return a.inter4;
    }),
    "value0": (function(a) {
      return a.value0;
    }),
    "value1": (function(a) {
      return a.value1;
    }),
    "value2": (function(a) {
      return a.value2;
    }),
    "value3": (function(a) {
      return a.value3;
    }),
    "value4": (function(a) {
      return a.value4;
    }),
    "prop": (function(a) {
      return a.prop;
    })
  });
  reflector.registerSetters({
    "inter0": (function(a, v) {
      return a.inter0 = v;
    }),
    "inter1": (function(a, v) {
      return a.inter1 = v;
    }),
    "inter2": (function(a, v) {
      return a.inter2 = v;
    }),
    "inter3": (function(a, v) {
      return a.inter3 = v;
    }),
    "inter4": (function(a, v) {
      return a.inter4 = v;
    }),
    "value0": (function(a, v) {
      return a.value0 = v;
    }),
    "value1": (function(a, v) {
      return a.value1 = v;
    }),
    "value2": (function(a, v) {
      return a.value2 = v;
    }),
    "value3": (function(a, v) {
      return a.value3 = v;
    }),
    "value4": (function(a, v) {
      return a.value4 = v;
    }),
    "prop": (function(a, v) {
      return a.prop = v;
    })
  });
}
function main() {
  BrowserDomAdapter.makeCurrent();
  var count = getIntParameter('elements');
  setupReflector();
  var reader = new DirectiveMetadataReader();
  var cache = new CompilerCache();
  var templateResolver = new FakeTemplateResolver();
  var urlResolver = new UrlResolver();
  var styleUrlResolver = new StyleUrlResolver(urlResolver);
  var compiler = new Compiler(dynamicChangeDetection, new TemplateLoader(null, urlResolver), reader, new Parser(new Lexer()), cache, new NativeShadowDomStrategy(styleUrlResolver), templateResolver, new ComponentUrlMapper(), urlResolver, new CssProcessor(null));
  var templateNoBindings = createTemplateHtml('templateNoBindings', count);
  var templateWithBindings = createTemplateHtml('templateWithBindings', count);
  function compileNoBindings() {
    templateResolver.setTemplateHtml(templateNoBindings);
    cache.clear();
    compiler.compile(BenchmarkComponent);
  }
  function compileWithBindings() {
    templateResolver.setTemplateHtml(templateWithBindings);
    cache.clear();
    compiler.compile(BenchmarkComponent);
  }
  bindAction('#compileNoBindings', compileNoBindings);
  bindAction('#compileWithBindings', compileWithBindings);
}
function createTemplateHtml(templateId, repeatCount) {
  var template = DOM.querySelectorAll(document, ("#" + templateId))[0];
  var content = DOM.getInnerHTML(template);
  var result = '';
  for (var i = 0; i < repeatCount; i++) {
    result += content;
  }
  return result;
}
var Dir0 = function Dir0() {};
($traceurRuntime.createClass)(Dir0, {}, {});
Object.defineProperty(Dir0, "annotations", {get: function() {
    return [new Decorator({
      selector: '[dir0]',
      bind: {'prop': 'attr0'}
    })];
  }});
var Dir1 = function Dir1(dir0) {
  assert.argumentTypes(dir0, Dir0);
};
($traceurRuntime.createClass)(Dir1, {}, {});
Object.defineProperty(Dir1, "annotations", {get: function() {
    return [new Decorator({
      selector: '[dir1]',
      bind: {'prop': 'attr1'}
    })];
  }});
Object.defineProperty(Dir1, "parameters", {get: function() {
    return [[Dir0]];
  }});
var Dir2 = function Dir2(dir1) {
  assert.argumentTypes(dir1, Dir1);
};
($traceurRuntime.createClass)(Dir2, {}, {});
Object.defineProperty(Dir2, "annotations", {get: function() {
    return [new Decorator({
      selector: '[dir2]',
      bind: {'prop': 'attr2'}
    })];
  }});
Object.defineProperty(Dir2, "parameters", {get: function() {
    return [[Dir1]];
  }});
var Dir3 = function Dir3(dir2) {
  assert.argumentTypes(dir2, Dir2);
};
($traceurRuntime.createClass)(Dir3, {}, {});
Object.defineProperty(Dir3, "annotations", {get: function() {
    return [new Decorator({
      selector: '[dir3]',
      bind: {'prop': 'attr3'}
    })];
  }});
Object.defineProperty(Dir3, "parameters", {get: function() {
    return [[Dir2]];
  }});
var Dir4 = function Dir4(dir3) {
  assert.argumentTypes(dir3, Dir3);
};
($traceurRuntime.createClass)(Dir4, {}, {});
Object.defineProperty(Dir4, "annotations", {get: function() {
    return [new Decorator({
      selector: '[dir4]',
      bind: {'prop': 'attr4'}
    })];
  }});
Object.defineProperty(Dir4, "parameters", {get: function() {
    return [[Dir3]];
  }});
var BenchmarkComponent = function BenchmarkComponent() {};
($traceurRuntime.createClass)(BenchmarkComponent, {}, {});
Object.defineProperty(BenchmarkComponent, "annotations", {get: function() {
    return [new Component()];
  }});
var FakeTemplateResolver = function FakeTemplateResolver() {
  $traceurRuntime.superConstructor($FakeTemplateResolver).call(this);
};
var $FakeTemplateResolver = FakeTemplateResolver;
($traceurRuntime.createClass)(FakeTemplateResolver, {
  setTemplateHtml: function(html) {
    assert.argumentTypes(html, assert.type.string);
    this._template = new Template({
      inline: html,
      directives: [Dir0, Dir1, Dir2, Dir3, Dir4]
    });
  },
  resolve: function(component) {
    assert.argumentTypes(component, Type);
    return assert.returnType((this._template), Template);
  }
}, {}, TemplateResolver);
Object.defineProperty(FakeTemplateResolver.prototype.setTemplateHtml, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
Object.defineProperty(FakeTemplateResolver.prototype.resolve, "parameters", {get: function() {
    return [[Type]];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/benchmarks/src/compiler/compiler_benchmark.map

//# sourceMappingURL=./compiler_benchmark.map