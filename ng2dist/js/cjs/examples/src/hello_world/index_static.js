"use strict";
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var __moduleName = "examples/src/hello_world/index_static";
var $__examples_47_src_47_hello_95_world_47_index_95_common__,
    $__angular2_47_angular2__,
    $__angular2_47_change_95_detection__,
    $__angular2_47_src_47_core_47_exception_95_handler__,
    $__angular2_47_src_47_core_47_life_95_cycle_47_life_95_cycle__,
    $__angular2_47_src_47_core_47_compiler_47_compiler__,
    $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__,
    $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__,
    $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_content_95_tag__,
    $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_light_95_dom__,
    $__angular2_47_src_47_core_47_compiler_47_template_95_loader__,
    $__angular2_47_src_47_core_47_compiler_47_template_95_resolver__,
    $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr__,
    $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr_95_impl__,
    $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__,
    $__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__,
    $__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__,
    $__angular2_47_src_47_core_47_compiler_47_style_95_inliner__,
    $__angular2_47_src_47_core_47_compiler_47_css_95_processor__,
    $__angular2_47_src_47_reflection_47_reflection__;
var app = ($__examples_47_src_47_hello_95_world_47_index_95_common__ = require("./index_common"), $__examples_47_src_47_hello_95_world_47_index_95_common__ && $__examples_47_src_47_hello_95_world_47_index_95_common__.__esModule && $__examples_47_src_47_hello_95_world_47_index_95_common__ || {default: $__examples_47_src_47_hello_95_world_47_index_95_common__});
var $__0 = ($__angular2_47_angular2__ = require("angular2/angular2"), $__angular2_47_angular2__ && $__angular2_47_angular2__.__esModule && $__angular2_47_angular2__ || {default: $__angular2_47_angular2__}),
    Component = $__0.Component,
    Decorator = $__0.Decorator,
    Template = $__0.Template,
    NgElement = $__0.NgElement;
var $__1 = ($__angular2_47_change_95_detection__ = require("angular2/change_detection"), $__angular2_47_change_95_detection__ && $__angular2_47_change_95_detection__.__esModule && $__angular2_47_change_95_detection__ || {default: $__angular2_47_change_95_detection__}),
    Lexer = $__1.Lexer,
    Parser = $__1.Parser,
    ChangeDetection = $__1.ChangeDetection,
    ChangeDetector = $__1.ChangeDetector;
var ExceptionHandler = ($__angular2_47_src_47_core_47_exception_95_handler__ = require("angular2/src/core/exception_handler"), $__angular2_47_src_47_core_47_exception_95_handler__ && $__angular2_47_src_47_core_47_exception_95_handler__.__esModule && $__angular2_47_src_47_core_47_exception_95_handler__ || {default: $__angular2_47_src_47_core_47_exception_95_handler__}).ExceptionHandler;
var LifeCycle = ($__angular2_47_src_47_core_47_life_95_cycle_47_life_95_cycle__ = require("angular2/src/core/life_cycle/life_cycle"), $__angular2_47_src_47_core_47_life_95_cycle_47_life_95_cycle__ && $__angular2_47_src_47_core_47_life_95_cycle_47_life_95_cycle__.__esModule && $__angular2_47_src_47_core_47_life_95_cycle_47_life_95_cycle__ || {default: $__angular2_47_src_47_core_47_life_95_cycle_47_life_95_cycle__}).LifeCycle;
var $__4 = ($__angular2_47_src_47_core_47_compiler_47_compiler__ = require("angular2/src/core/compiler/compiler"), $__angular2_47_src_47_core_47_compiler_47_compiler__ && $__angular2_47_src_47_core_47_compiler_47_compiler__.__esModule && $__angular2_47_src_47_core_47_compiler_47_compiler__ || {default: $__angular2_47_src_47_core_47_compiler_47_compiler__}),
    Compiler = $__4.Compiler,
    CompilerCache = $__4.CompilerCache;
var DirectiveMetadataReader = ($__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__ = require("angular2/src/core/compiler/directive_metadata_reader"), $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__ && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__.__esModule && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__ || {default: $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__}).DirectiveMetadataReader;
var $__6 = ($__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__ = require("angular2/src/core/compiler/shadow_dom_strategy"), $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__ && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__.__esModule && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__ || {default: $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__}),
    ShadowDomStrategy = $__6.ShadowDomStrategy,
    NativeShadowDomStrategy = $__6.NativeShadowDomStrategy,
    EmulatedUnscopedShadowDomStrategy = $__6.EmulatedUnscopedShadowDomStrategy;
var Content = ($__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_content_95_tag__ = require("angular2/src/core/compiler/shadow_dom_emulation/content_tag"), $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_content_95_tag__ && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_content_95_tag__.__esModule && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_content_95_tag__ || {default: $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_content_95_tag__}).Content;
var DestinationLightDom = ($__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_light_95_dom__ = require("angular2/src/core/compiler/shadow_dom_emulation/light_dom"), $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_light_95_dom__ && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_light_95_dom__.__esModule && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_light_95_dom__ || {default: $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_emulation_47_light_95_dom__}).DestinationLightDom;
var TemplateLoader = ($__angular2_47_src_47_core_47_compiler_47_template_95_loader__ = require("angular2/src/core/compiler/template_loader"), $__angular2_47_src_47_core_47_compiler_47_template_95_loader__ && $__angular2_47_src_47_core_47_compiler_47_template_95_loader__.__esModule && $__angular2_47_src_47_core_47_compiler_47_template_95_loader__ || {default: $__angular2_47_src_47_core_47_compiler_47_template_95_loader__}).TemplateLoader;
var TemplateResolver = ($__angular2_47_src_47_core_47_compiler_47_template_95_resolver__ = require("angular2/src/core/compiler/template_resolver"), $__angular2_47_src_47_core_47_compiler_47_template_95_resolver__ && $__angular2_47_src_47_core_47_compiler_47_template_95_resolver__.__esModule && $__angular2_47_src_47_core_47_compiler_47_template_95_resolver__ || {default: $__angular2_47_src_47_core_47_compiler_47_template_95_resolver__}).TemplateResolver;
var XHR = ($__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr__ = require("angular2/src/core/compiler/xhr/xhr"), $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr__ && $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr__.__esModule && $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr__ || {default: $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr__}).XHR;
var XHRImpl = ($__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr_95_impl__ = require("angular2/src/core/compiler/xhr/xhr_impl"), $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr_95_impl__ && $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr_95_impl__.__esModule && $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr_95_impl__ || {default: $__angular2_47_src_47_core_47_compiler_47_xhr_47_xhr_95_impl__}).XHRImpl;
var UrlResolver = ($__angular2_47_src_47_core_47_compiler_47_url_95_resolver__ = require("angular2/src/core/compiler/url_resolver"), $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__ && $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__.__esModule && $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__ || {default: $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__}).UrlResolver;
var StyleUrlResolver = ($__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__ = require("angular2/src/core/compiler/style_url_resolver"), $__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__ && $__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__.__esModule && $__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__ || {default: $__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__}).StyleUrlResolver;
var ComponentUrlMapper = ($__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__ = require("angular2/src/core/compiler/component_url_mapper"), $__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__ && $__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__.__esModule && $__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__ || {default: $__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__}).ComponentUrlMapper;
var StyleInliner = ($__angular2_47_src_47_core_47_compiler_47_style_95_inliner__ = require("angular2/src/core/compiler/style_inliner"), $__angular2_47_src_47_core_47_compiler_47_style_95_inliner__ && $__angular2_47_src_47_core_47_compiler_47_style_95_inliner__.__esModule && $__angular2_47_src_47_core_47_compiler_47_style_95_inliner__ || {default: $__angular2_47_src_47_core_47_compiler_47_style_95_inliner__}).StyleInliner;
var CssProcessor = ($__angular2_47_src_47_core_47_compiler_47_css_95_processor__ = require("angular2/src/core/compiler/css_processor"), $__angular2_47_src_47_core_47_compiler_47_css_95_processor__ && $__angular2_47_src_47_core_47_compiler_47_css_95_processor__.__esModule && $__angular2_47_src_47_core_47_compiler_47_css_95_processor__ || {default: $__angular2_47_src_47_core_47_compiler_47_css_95_processor__}).CssProcessor;
var $__18 = ($__angular2_47_src_47_reflection_47_reflection__ = require("angular2/src/reflection/reflection"), $__angular2_47_src_47_reflection_47_reflection__ && $__angular2_47_src_47_reflection_47_reflection__.__esModule && $__angular2_47_src_47_reflection_47_reflection__ || {default: $__angular2_47_src_47_reflection_47_reflection__}),
    Reflector = $__18.Reflector,
    reflector = $__18.reflector;
function setup() {
  reflector.registerType(app.HelloCmp, {
    "factory": (function(service) {
      return new app.HelloCmp(service);
    }),
    "parameters": [[app.GreetingService]],
    "annotations": [new Component({
      selector: 'hello-app',
      componentServices: [app.GreetingService]
    }), new Template({
      directives: [app.RedDec],
      inline: "<div class=\"greeting\">{{greeting}} <span red>world</span>!</div>\n                 <button class=\"changeButton\" (click)=\"changeGreeting()\">change greeting</button>"
    })]
  });
  reflector.registerType(app.RedDec, {
    "factory": (function(el) {
      return new app.RedDec(el);
    }),
    "parameters": [[NgElement]],
    "annotations": [new Decorator({selector: '[red]'})]
  });
  reflector.registerType(app.GreetingService, {
    "factory": (function() {
      return new app.GreetingService();
    }),
    "parameters": [],
    "annotations": []
  });
  reflector.registerType(Compiler, {
    "factory": (function(changeDetection, templateLoader, reader, parser, compilerCache, shadowDomStrategy, tplResolver, cmpUrlMapper, urlResolver, cssProcessor) {
      return new Compiler(changeDetection, templateLoader, reader, parser, compilerCache, shadowDomStrategy, tplResolver, cmpUrlMapper, urlResolver, cssProcessor);
    }),
    "parameters": [[ChangeDetection], [TemplateLoader], [DirectiveMetadataReader], [Parser], [CompilerCache], [ShadowDomStrategy], [TemplateResolver], [ComponentUrlMapper], [UrlResolver], [CssProcessor]],
    "annotations": []
  });
  reflector.registerType(CompilerCache, {
    "factory": (function() {
      return new CompilerCache();
    }),
    "parameters": [],
    "annotations": []
  });
  reflector.registerType(Parser, {
    "factory": (function(lexer) {
      return new Parser(lexer);
    }),
    "parameters": [[Lexer]],
    "annotations": []
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
    "factory": (function() {
      return new DirectiveMetadataReader();
    }),
    "parameters": [],
    "annotations": []
  });
  reflector.registerType(Lexer, {
    "factory": (function() {
      return new Lexer();
    }),
    "parameters": [],
    "annotations": []
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
  reflector.registerGetters({"greeting": (function(a) {
      return a.greeting;
    })});
  reflector.registerSetters({"greeting": (function(a, v) {
      return a.greeting = v;
    })});
  reflector.registerMethods({"changeGreeting": (function(obj, args) {
      return obj.changeGreeting();
    })});
}
function main() {
  setup();
  app.main();
}

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/examples/src/hello_world/index_static.map

//# sourceMappingURL=./index_static.map