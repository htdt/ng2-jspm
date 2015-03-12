System.register(["angular2/src/dom/dom_adapter", "angular2/src/dom/browser_adapter", "angular2/src/facade/lang", "angular2/src/facade/browser", "angular2/src/facade/collection", "angular2/src/core/compiler/directive_metadata", "angular2/src/core/compiler/shadow_dom_strategy", "angular2/change_detection", "angular2/src/core/compiler/compiler", "angular2/src/core/compiler/directive_metadata_reader", "angular2/src/core/annotations/annotations", "angular2/src/core/annotations/template", "angular2/src/core/compiler/template_loader", "angular2/src/core/compiler/template_resolver", "angular2/src/core/compiler/url_resolver", "angular2/src/core/compiler/style_url_resolver", "angular2/src/core/compiler/component_url_mapper", "angular2/src/core/compiler/css_processor", "angular2/src/reflection/reflection", "angular2/src/test_lib/benchmark_util"], function($__export) {
  "use strict";
  var DOM,
      BrowserDomAdapter,
      isBlank,
      Type,
      document,
      MapWrapper,
      DirectiveMetadata,
      NativeShadowDomStrategy,
      Parser,
      Lexer,
      ProtoRecordRange,
      dynamicChangeDetection,
      Compiler,
      CompilerCache,
      DirectiveMetadataReader,
      Component,
      Decorator,
      Template,
      TemplateLoader,
      TemplateResolver,
      UrlResolver,
      StyleUrlResolver,
      ComponentUrlMapper,
      CssProcessor,
      reflector,
      getIntParameter,
      bindAction,
      Dir0,
      Dir1,
      Dir2,
      Dir3,
      Dir4,
      BenchmarkComponent,
      FakeTemplateResolver;
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
  $__export("main", main);
  return {
    setters: [function($__m) {
      DOM = $__m.DOM;
    }, function($__m) {
      BrowserDomAdapter = $__m.BrowserDomAdapter;
    }, function($__m) {
      isBlank = $__m.isBlank;
      Type = $__m.Type;
    }, function($__m) {
      document = $__m.document;
    }, function($__m) {
      MapWrapper = $__m.MapWrapper;
    }, function($__m) {
      DirectiveMetadata = $__m.DirectiveMetadata;
    }, function($__m) {
      NativeShadowDomStrategy = $__m.NativeShadowDomStrategy;
    }, function($__m) {
      Parser = $__m.Parser;
      Lexer = $__m.Lexer;
      ProtoRecordRange = $__m.ProtoRecordRange;
      dynamicChangeDetection = $__m.dynamicChangeDetection;
    }, function($__m) {
      Compiler = $__m.Compiler;
      CompilerCache = $__m.CompilerCache;
    }, function($__m) {
      DirectiveMetadataReader = $__m.DirectiveMetadataReader;
    }, function($__m) {
      Component = $__m.Component;
      Decorator = $__m.Decorator;
    }, function($__m) {
      Template = $__m.Template;
    }, function($__m) {
      TemplateLoader = $__m.TemplateLoader;
    }, function($__m) {
      TemplateResolver = $__m.TemplateResolver;
    }, function($__m) {
      UrlResolver = $__m.UrlResolver;
    }, function($__m) {
      StyleUrlResolver = $__m.StyleUrlResolver;
    }, function($__m) {
      ComponentUrlMapper = $__m.ComponentUrlMapper;
    }, function($__m) {
      CssProcessor = $__m.CssProcessor;
    }, function($__m) {
      reflector = $__m.reflector;
    }, function($__m) {
      getIntParameter = $__m.getIntParameter;
      bindAction = $__m.bindAction;
    }],
    execute: function() {
      Dir0 = (function() {
        var Dir0 = function Dir0() {};
        return ($traceurRuntime.createClass)(Dir0, {}, {});
      }());
      Object.defineProperty(Dir0, "annotations", {get: function() {
          return [new Decorator({
            selector: '[dir0]',
            bind: {'prop': 'attr0'}
          })];
        }});
      Dir1 = (function() {
        var Dir1 = function Dir1(dir0) {};
        return ($traceurRuntime.createClass)(Dir1, {}, {});
      }());
      Object.defineProperty(Dir1, "annotations", {get: function() {
          return [new Decorator({
            selector: '[dir1]',
            bind: {'prop': 'attr1'}
          })];
        }});
      Object.defineProperty(Dir1, "parameters", {get: function() {
          return [[Dir0]];
        }});
      Dir2 = (function() {
        var Dir2 = function Dir2(dir1) {};
        return ($traceurRuntime.createClass)(Dir2, {}, {});
      }());
      Object.defineProperty(Dir2, "annotations", {get: function() {
          return [new Decorator({
            selector: '[dir2]',
            bind: {'prop': 'attr2'}
          })];
        }});
      Object.defineProperty(Dir2, "parameters", {get: function() {
          return [[Dir1]];
        }});
      Dir3 = (function() {
        var Dir3 = function Dir3(dir2) {};
        return ($traceurRuntime.createClass)(Dir3, {}, {});
      }());
      Object.defineProperty(Dir3, "annotations", {get: function() {
          return [new Decorator({
            selector: '[dir3]',
            bind: {'prop': 'attr3'}
          })];
        }});
      Object.defineProperty(Dir3, "parameters", {get: function() {
          return [[Dir2]];
        }});
      Dir4 = (function() {
        var Dir4 = function Dir4(dir3) {};
        return ($traceurRuntime.createClass)(Dir4, {}, {});
      }());
      Object.defineProperty(Dir4, "annotations", {get: function() {
          return [new Decorator({
            selector: '[dir4]',
            bind: {'prop': 'attr4'}
          })];
        }});
      Object.defineProperty(Dir4, "parameters", {get: function() {
          return [[Dir3]];
        }});
      BenchmarkComponent = (function() {
        var BenchmarkComponent = function BenchmarkComponent() {};
        return ($traceurRuntime.createClass)(BenchmarkComponent, {}, {});
      }());
      Object.defineProperty(BenchmarkComponent, "annotations", {get: function() {
          return [new Component()];
        }});
      FakeTemplateResolver = (function($__super) {
        var FakeTemplateResolver = function FakeTemplateResolver() {
          $traceurRuntime.superConstructor(FakeTemplateResolver).call(this);
        };
        return ($traceurRuntime.createClass)(FakeTemplateResolver, {
          setTemplateHtml: function(html) {
            this._template = new Template({
              inline: html,
              directives: [Dir0, Dir1, Dir2, Dir3, Dir4]
            });
          },
          resolve: function(component) {
            return this._template;
          }
        }, {}, $__super);
      }(TemplateResolver));
      Object.defineProperty(FakeTemplateResolver.prototype.setTemplateHtml, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
      Object.defineProperty(FakeTemplateResolver.prototype.resolve, "parameters", {get: function() {
          return [[Type]];
        }});
    }
  };
});

//# sourceMappingURL=benchmarks/src/compiler/compiler_benchmark.map

//# sourceMappingURL=../../../benchmarks/src/compiler/compiler_benchmark.js.map