System.register(["angular2/change_detection", "angular2/src/core/exception_handler", "angular2/angular2", "angular2/src/core/compiler/compiler", "angular2/src/core/compiler/directive_metadata_reader", "angular2/src/core/compiler/template_loader", "angular2/src/core/compiler/template_resolver", "angular2/src/core/compiler/shadow_dom_strategy", "angular2/src/core/compiler/shadow_dom_emulation/content_tag", "angular2/src/core/compiler/shadow_dom_emulation/light_dom", "angular2/src/core/life_cycle/life_cycle", "angular2/src/core/compiler/url_resolver", "angular2/src/core/compiler/style_url_resolver", "angular2/src/core/compiler/component_url_mapper", "angular2/src/core/compiler/style_inliner", "angular2/src/core/compiler/css_processor", "angular2/src/reflection/reflection", "angular2/src/dom/dom_adapter", "angular2/src/facade/lang", "angular2/src/facade/browser", "angular2/src/test_lib/benchmark_util", "angular2/src/core/compiler/xhr/xhr", "angular2/src/core/compiler/xhr/xhr_impl", "angular2/directives", "angular2/src/dom/browser_adapter"], function($__export) {
  "use strict";
  var Parser,
      Lexer,
      ChangeDetector,
      ChangeDetection,
      jitChangeDetection,
      ExceptionHandler,
      bootstrap,
      Component,
      Viewport,
      Template,
      ViewContainer,
      Compiler,
      NgElement,
      Decorator,
      CompilerCache,
      DirectiveMetadataReader,
      TemplateLoader,
      TemplateResolver,
      ShadowDomStrategy,
      NativeShadowDomStrategy,
      EmulatedUnscopedShadowDomStrategy,
      Content,
      DestinationLightDom,
      LifeCycle,
      UrlResolver,
      StyleUrlResolver,
      ComponentUrlMapper,
      StyleInliner,
      CssProcessor,
      Reflector,
      reflector,
      DOM,
      isPresent,
      window,
      document,
      gc,
      getIntParameter,
      bindAction,
      XHR,
      XHRImpl,
      If,
      BrowserDomAdapter,
      BASELINE_TREE_TEMPLATE,
      BASELINE_IF_TEMPLATE,
      TreeNode,
      BaseLineTreeComponent,
      BaseLineInterpolation,
      BaseLineIf,
      AppComponent,
      TreeComponent;
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
  function buildTree(maxDepth, values, curDepth) {
    if (maxDepth === curDepth)
      return new TreeNode('', null, null);
    return new TreeNode(values[curDepth], buildTree(maxDepth, values, curDepth + 1), buildTree(maxDepth, values, curDepth + 1));
  }
  $__export("main", main);
  return {
    setters: [function($__m) {
      Parser = $__m.Parser;
      Lexer = $__m.Lexer;
      ChangeDetector = $__m.ChangeDetector;
      ChangeDetection = $__m.ChangeDetection;
      jitChangeDetection = $__m.jitChangeDetection;
    }, function($__m) {
      ExceptionHandler = $__m.ExceptionHandler;
    }, function($__m) {
      bootstrap = $__m.bootstrap;
      Component = $__m.Component;
      Viewport = $__m.Viewport;
      Template = $__m.Template;
      ViewContainer = $__m.ViewContainer;
      Compiler = $__m.Compiler;
      NgElement = $__m.NgElement;
      Decorator = $__m.Decorator;
    }, function($__m) {
      CompilerCache = $__m.CompilerCache;
    }, function($__m) {
      DirectiveMetadataReader = $__m.DirectiveMetadataReader;
    }, function($__m) {
      TemplateLoader = $__m.TemplateLoader;
    }, function($__m) {
      TemplateResolver = $__m.TemplateResolver;
    }, function($__m) {
      ShadowDomStrategy = $__m.ShadowDomStrategy;
      NativeShadowDomStrategy = $__m.NativeShadowDomStrategy;
      EmulatedUnscopedShadowDomStrategy = $__m.EmulatedUnscopedShadowDomStrategy;
    }, function($__m) {
      Content = $__m.Content;
    }, function($__m) {
      DestinationLightDom = $__m.DestinationLightDom;
    }, function($__m) {
      LifeCycle = $__m.LifeCycle;
    }, function($__m) {
      UrlResolver = $__m.UrlResolver;
    }, function($__m) {
      StyleUrlResolver = $__m.StyleUrlResolver;
    }, function($__m) {
      ComponentUrlMapper = $__m.ComponentUrlMapper;
    }, function($__m) {
      StyleInliner = $__m.StyleInliner;
    }, function($__m) {
      CssProcessor = $__m.CssProcessor;
    }, function($__m) {
      Reflector = $__m.Reflector;
      reflector = $__m.reflector;
    }, function($__m) {
      DOM = $__m.DOM;
    }, function($__m) {
      isPresent = $__m.isPresent;
    }, function($__m) {
      window = $__m.window;
      document = $__m.document;
      gc = $__m.gc;
    }, function($__m) {
      getIntParameter = $__m.getIntParameter;
      bindAction = $__m.bindAction;
    }, function($__m) {
      XHR = $__m.XHR;
    }, function($__m) {
      XHRImpl = $__m.XHRImpl;
    }, function($__m) {
      If = $__m.If;
    }, function($__m) {
      BrowserDomAdapter = $__m.BrowserDomAdapter;
    }],
    execute: function() {
      TreeNode = (function() {
        var TreeNode = function TreeNode(value, left, right) {
          this.value = value;
          this.left = left;
          this.right = right;
        };
        return ($traceurRuntime.createClass)(TreeNode, {}, {});
      }());
      BaseLineTreeComponent = (function() {
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
        return ($traceurRuntime.createClass)(BaseLineTreeComponent, {update: function(value) {
            this.value.update(value.value);
            this.left.update(value.left);
            this.right.update(value.right);
          }}, {});
      }());
      Object.defineProperty(BaseLineTreeComponent.prototype.update, "parameters", {get: function() {
          return [[TreeNode]];
        }});
      BaseLineInterpolation = (function() {
        var BaseLineInterpolation = function BaseLineInterpolation(textNode) {
          this.value = null;
          this.textNode = textNode;
        };
        return ($traceurRuntime.createClass)(BaseLineInterpolation, {update: function(value) {
            if (this.value !== value) {
              this.value = value;
              DOM.setText(this.textNode, value + ' ');
            }
          }}, {});
      }());
      Object.defineProperty(BaseLineInterpolation.prototype.update, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
      BaseLineIf = (function() {
        var BaseLineIf = function BaseLineIf(anchor) {
          this.anchor = anchor;
          this.condition = false;
          this.component = null;
        };
        return ($traceurRuntime.createClass)(BaseLineIf, {update: function(value) {
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
      }());
      Object.defineProperty(BaseLineIf.prototype.update, "parameters", {get: function() {
          return [[TreeNode]];
        }});
      AppComponent = (function() {
        var AppComponent = function AppComponent() {
          this.initData = new TreeNode('', null, null);
        };
        return ($traceurRuntime.createClass)(AppComponent, {}, {});
      }());
      TreeComponent = (function() {
        var TreeComponent = function TreeComponent() {};
        return ($traceurRuntime.createClass)(TreeComponent, {}, {});
      }());
    }
  };
});

//# sourceMappingURL=benchmarks/src/tree/tree_benchmark.map

//# sourceMappingURL=../../../benchmarks/src/tree/tree_benchmark.js.map