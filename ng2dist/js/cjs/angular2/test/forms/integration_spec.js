var parse5Adapter = require('angular2/src/dom/parse5_adapter');
parse5Adapter.Parse5DomAdapter.makeCurrent();
"use strict";
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/test/forms/integration_spec";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_test_95_lib__,
    $__angular2_47_change_95_detection__,
    $__angular2_47_src_47_core_47_compiler_47_compiler__,
    $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__,
    $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__,
    $__angular2_47_src_47_core_47_compiler_47_template_95_loader__,
    $__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__,
    $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__,
    $__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__,
    $__angular2_47_src_47_core_47_compiler_47_css_95_processor__,
    $__angular2_47_src_47_mock_47_template_95_resolver_95_mock__,
    $__angular2_47_di__,
    $__angular2_47_core__,
    $__angular2_47_forms__,
    $__angular2_47_src_47_forms_47_validators__,
    $__angular2_47_src_47_reflection_47_reflection__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var $__1 = ($__angular2_47_test_95_lib__ = require("angular2/test_lib"), $__angular2_47_test_95_lib__ && $__angular2_47_test_95_lib__.__esModule && $__angular2_47_test_95_lib__ || {default: $__angular2_47_test_95_lib__}),
    ddescribe = $__1.ddescribe,
    describe = $__1.describe,
    it = $__1.it,
    iit = $__1.iit,
    xit = $__1.xit,
    expect = $__1.expect,
    beforeEach = $__1.beforeEach,
    afterEach = $__1.afterEach,
    el = $__1.el,
    queryView = $__1.queryView,
    dispatchEvent = $__1.dispatchEvent;
var $__2 = ($__angular2_47_change_95_detection__ = require("angular2/change_detection"), $__angular2_47_change_95_detection__ && $__angular2_47_change_95_detection__.__esModule && $__angular2_47_change_95_detection__ || {default: $__angular2_47_change_95_detection__}),
    Lexer = $__2.Lexer,
    Parser = $__2.Parser,
    ChangeDetector = $__2.ChangeDetector,
    dynamicChangeDetection = $__2.dynamicChangeDetection;
var $__3 = ($__angular2_47_src_47_core_47_compiler_47_compiler__ = require("angular2/src/core/compiler/compiler"), $__angular2_47_src_47_core_47_compiler_47_compiler__ && $__angular2_47_src_47_core_47_compiler_47_compiler__.__esModule && $__angular2_47_src_47_core_47_compiler_47_compiler__ || {default: $__angular2_47_src_47_core_47_compiler_47_compiler__}),
    Compiler = $__3.Compiler,
    CompilerCache = $__3.CompilerCache;
var DirectiveMetadataReader = ($__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__ = require("angular2/src/core/compiler/directive_metadata_reader"), $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__ && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__.__esModule && $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__ || {default: $__angular2_47_src_47_core_47_compiler_47_directive_95_metadata_95_reader__}).DirectiveMetadataReader;
var NativeShadowDomStrategy = ($__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__ = require("angular2/src/core/compiler/shadow_dom_strategy"), $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__ && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__.__esModule && $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__ || {default: $__angular2_47_src_47_core_47_compiler_47_shadow_95_dom_95_strategy__}).NativeShadowDomStrategy;
var TemplateLoader = ($__angular2_47_src_47_core_47_compiler_47_template_95_loader__ = require("angular2/src/core/compiler/template_loader"), $__angular2_47_src_47_core_47_compiler_47_template_95_loader__ && $__angular2_47_src_47_core_47_compiler_47_template_95_loader__.__esModule && $__angular2_47_src_47_core_47_compiler_47_template_95_loader__ || {default: $__angular2_47_src_47_core_47_compiler_47_template_95_loader__}).TemplateLoader;
var ComponentUrlMapper = ($__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__ = require("angular2/src/core/compiler/component_url_mapper"), $__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__ && $__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__.__esModule && $__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__ || {default: $__angular2_47_src_47_core_47_compiler_47_component_95_url_95_mapper__}).ComponentUrlMapper;
var UrlResolver = ($__angular2_47_src_47_core_47_compiler_47_url_95_resolver__ = require("angular2/src/core/compiler/url_resolver"), $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__ && $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__.__esModule && $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__ || {default: $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__}).UrlResolver;
var StyleUrlResolver = ($__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__ = require("angular2/src/core/compiler/style_url_resolver"), $__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__ && $__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__.__esModule && $__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__ || {default: $__angular2_47_src_47_core_47_compiler_47_style_95_url_95_resolver__}).StyleUrlResolver;
var CssProcessor = ($__angular2_47_src_47_core_47_compiler_47_css_95_processor__ = require("angular2/src/core/compiler/css_processor"), $__angular2_47_src_47_core_47_compiler_47_css_95_processor__ && $__angular2_47_src_47_core_47_compiler_47_css_95_processor__.__esModule && $__angular2_47_src_47_core_47_compiler_47_css_95_processor__ || {default: $__angular2_47_src_47_core_47_compiler_47_css_95_processor__}).CssProcessor;
var MockTemplateResolver = ($__angular2_47_src_47_mock_47_template_95_resolver_95_mock__ = require("angular2/src/mock/template_resolver_mock"), $__angular2_47_src_47_mock_47_template_95_resolver_95_mock__ && $__angular2_47_src_47_mock_47_template_95_resolver_95_mock__.__esModule && $__angular2_47_src_47_mock_47_template_95_resolver_95_mock__ || {default: $__angular2_47_src_47_mock_47_template_95_resolver_95_mock__}).MockTemplateResolver;
var Injector = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}).Injector;
var $__13 = ($__angular2_47_core__ = require("angular2/core"), $__angular2_47_core__ && $__angular2_47_core__.__esModule && $__angular2_47_core__ || {default: $__angular2_47_core__}),
    Component = $__13.Component,
    Decorator = $__13.Decorator,
    Template = $__13.Template;
var $__14 = ($__angular2_47_forms__ = require("angular2/forms"), $__angular2_47_forms__ && $__angular2_47_forms__.__esModule && $__angular2_47_forms__ || {default: $__angular2_47_forms__}),
    ControlGroupDirective = $__14.ControlGroupDirective,
    ControlDirective = $__14.ControlDirective,
    Control = $__14.Control,
    ControlGroup = $__14.ControlGroup,
    OptionalControl = $__14.OptionalControl,
    ControlValueAccessor = $__14.ControlValueAccessor,
    RequiredValidatorDirective = $__14.RequiredValidatorDirective;
var validators = ($__angular2_47_src_47_forms_47_validators__ = require("angular2/src/forms/validators"), $__angular2_47_src_47_forms_47_validators__ && $__angular2_47_src_47_forms_47_validators__.__esModule && $__angular2_47_src_47_forms_47_validators__ || {default: $__angular2_47_src_47_forms_47_validators__});
var reflector = ($__angular2_47_src_47_reflection_47_reflection__ = require("angular2/src/reflection/reflection"), $__angular2_47_src_47_reflection_47_reflection__ && $__angular2_47_src_47_reflection_47_reflection__.__esModule && $__angular2_47_src_47_reflection_47_reflection__ || {default: $__angular2_47_src_47_reflection_47_reflection__}).reflector;
function main() {
  function detectChanges(view) {
    view.changeDetector.detectChanges();
  }
  function compile(componentType, template, context, callback) {
    var tplResolver = new MockTemplateResolver();
    var urlResolver = new UrlResolver();
    var compiler = new Compiler(dynamicChangeDetection, new TemplateLoader(null, null), new DirectiveMetadataReader(), new Parser(new Lexer()), new CompilerCache(), new NativeShadowDomStrategy(new StyleUrlResolver(urlResolver)), tplResolver, new ComponentUrlMapper(), urlResolver, new CssProcessor(null));
    tplResolver.setTemplate(componentType, new Template({
      inline: template,
      directives: [ControlGroupDirective, ControlDirective, WrappedValue, RequiredValidatorDirective]
    }));
    compiler.compile(componentType).then((function(pv) {
      var view = pv.instantiate(null, null, reflector);
      view.hydrate(new Injector([]), null, context);
      detectChanges(view);
      callback(view);
    }));
  }
  describe("integration tests", (function() {
    it("should initialize DOM elements with the given form object", (function(done) {
      var ctx = new MyComp(new ControlGroup({"login": new Control("loginValue")}));
      var t = "<div [control-group]=\"form\">\n                <input type=\"text\" control=\"login\">\n              </div>";
      compile(MyComp, t, ctx, (function(view) {
        var input = queryView(view, "input");
        expect(input.value).toEqual("loginValue");
        done();
      }));
    }));
    it("should update the control group values on DOM change", (function(done) {
      var form = new ControlGroup({"login": new Control("oldValue")});
      var ctx = new MyComp(form);
      var t = "<div [control-group]=\"form\">\n                <input type=\"text\" control=\"login\">\n              </div>";
      compile(MyComp, t, ctx, (function(view) {
        var input = queryView(view, "input");
        input.value = "updatedValue";
        dispatchEvent(input, "change");
        expect(form.value).toEqual({"login": "updatedValue"});
        done();
      }));
    }));
    it("should update DOM elements when rebinding the control group", (function(done) {
      var form = new ControlGroup({"login": new Control("oldValue")});
      var ctx = new MyComp(form);
      var t = "<div [control-group]=\"form\">\n                <input type=\"text\" control=\"login\">\n              </div>";
      compile(MyComp, t, ctx, (function(view) {
        ctx.form = new ControlGroup({"login": new Control("newValue")});
        detectChanges(view);
        var input = queryView(view, "input");
        expect(input.value).toEqual("newValue");
        done();
      }));
    }));
    it("should update DOM element when rebinding the control name", (function(done) {
      var ctx = new MyComp(new ControlGroup({
        "one": new Control("one"),
        "two": new Control("two")
      }), "one");
      var t = "<div [control-group]=\"form\">\n                <input type=\"text\" [control]=\"name\">\n              </div>";
      compile(MyComp, t, ctx, (function(view) {
        var input = queryView(view, "input");
        expect(input.value).toEqual("one");
        ctx.name = "two";
        detectChanges(view);
        expect(input.value).toEqual("two");
        done();
      }));
    }));
    describe("different control types", (function() {
      it("should support type=checkbox", (function(done) {
        var ctx = new MyComp(new ControlGroup({"checkbox": new Control(true)}));
        var t = "<div [control-group]=\"form\">\n                  <input type=\"checkbox\" control=\"checkbox\">\n                </div>";
        compile(MyComp, t, ctx, (function(view) {
          var input = queryView(view, "input");
          expect(input.checked).toBe(true);
          input.checked = false;
          dispatchEvent(input, "change");
          expect(ctx.form.value).toEqual({"checkbox": false});
          done();
        }));
      }));
      it("should support custom value accessors", (function(done) {
        var ctx = new MyComp(new ControlGroup({"name": new Control("aa")}));
        var t = "<div [control-group]=\"form\">\n                  <input type=\"text\" control=\"name\" wrapped-value>\n                </div>";
        compile(MyComp, t, ctx, (function(view) {
          var input = queryView(view, "input");
          expect(input.value).toEqual("!aa!");
          input.value = "!bb!";
          dispatchEvent(input, "change");
          expect(ctx.form.value).toEqual({"name": "bb"});
          done();
        }));
      }));
    }));
    describe("validations", (function() {
      it("should use validators defined in html", (function(done) {
        var form = new ControlGroup({"login": new Control("aa")});
        var ctx = new MyComp(form);
        var t = "<div [control-group]=\"form\">\n                  <input type=\"text\" control=\"login\" required>\n                 </div>";
        compile(MyComp, t, ctx, (function(view) {
          expect(form.valid).toEqual(true);
          var input = queryView(view, "input");
          input.value = "";
          dispatchEvent(input, "change");
          expect(form.valid).toEqual(false);
          done();
        }));
      }));
      it("should use validators defined in the model", (function(done) {
        var form = new ControlGroup({"login": new Control("aa", validators.required)});
        var ctx = new MyComp(form);
        var t = "<div [control-group]=\"form\">\n                  <input type=\"text\" control=\"login\">\n                 </div>";
        compile(MyComp, t, ctx, (function(view) {
          expect(form.valid).toEqual(true);
          var input = queryView(view, "input");
          input.value = "";
          dispatchEvent(input, "change");
          expect(form.valid).toEqual(false);
          done();
        }));
      }));
    }));
    describe("nested forms", (function() {
      it("should init DOM with the given form object", (function(done) {
        var form = new ControlGroup({"nested": new ControlGroup({"login": new Control("value")})});
        var ctx = new MyComp(form);
        var t = "<div [control-group]=\"form\">\n                    <div control-group=\"nested\">\n                      <input type=\"text\" control=\"login\">\n                    </div>\n                </div>";
        compile(MyComp, t, ctx, (function(view) {
          var input = queryView(view, "input");
          expect(input.value).toEqual("value");
          done();
        }));
      }));
      it("should update the control group values on DOM change", (function(done) {
        var form = new ControlGroup({"nested": new ControlGroup({"login": new Control("value")})});
        var ctx = new MyComp(form);
        var t = "<div [control-group]=\"form\">\n                    <div control-group=\"nested\">\n                      <input type=\"text\" control=\"login\">\n                    </div>\n                </div>";
        compile(MyComp, t, ctx, (function(view) {
          var input = queryView(view, "input");
          input.value = "updatedValue";
          dispatchEvent(input, "change");
          expect(form.value).toEqual({"nested": {"login": "updatedValue"}});
          done();
        }));
      }));
    }));
  }));
}
var MyComp = function MyComp() {
  var form = arguments[0] !== (void 0) ? arguments[0] : null;
  var name = arguments[1] !== (void 0) ? arguments[1] : null;
  this.form = form;
  this.name = name;
};
($traceurRuntime.createClass)(MyComp, {}, {});
Object.defineProperty(MyComp, "annotations", {get: function() {
    return [new Component({selector: "my-comp"})];
  }});
var WrappedValueAccessor = function WrappedValueAccessor() {
  $traceurRuntime.superConstructor($WrappedValueAccessor).apply(this, arguments);
};
var $WrappedValueAccessor = WrappedValueAccessor;
($traceurRuntime.createClass)(WrappedValueAccessor, {
  readValue: function(el) {
    return el.value.substring(1, el.value.length - 1);
  },
  writeValue: function(el, value) {
    el.value = ("!" + value + "!");
  }
}, {}, ControlValueAccessor);
var WrappedValue = function WrappedValue(cd) {
  assert.argumentTypes(cd, ControlDirective);
  cd.valueAccessor = new WrappedValueAccessor();
};
($traceurRuntime.createClass)(WrappedValue, {}, {});
Object.defineProperty(WrappedValue, "annotations", {get: function() {
    return [new Decorator({selector: '[wrapped-value]'})];
  }});
Object.defineProperty(WrappedValue, "parameters", {get: function() {
    return [[ControlDirective]];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/test/forms/integration_spec.map

//# sourceMappingURL=./integration_spec.map
 main();