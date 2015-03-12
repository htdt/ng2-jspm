System.register(["rtts_assert/rtts_assert", "angular2/test_lib", "angular2/src/dom/dom_adapter", "angular2/src/core/compiler/template_loader", "angular2/src/core/compiler/url_resolver", "angular2/src/core/annotations/template", "angular2/src/facade/async", "angular2/src/mock/xhr_mock"], function($__export) {
  "use strict";
  var assert,
      describe,
      it,
      expect,
      beforeEach,
      ddescribe,
      iit,
      xit,
      el,
      DOM,
      TemplateLoader,
      UrlResolver,
      Template,
      PromiseWrapper,
      XHRMock,
      SomeComponent,
      FakeUrlResolver;
  function main() {
    describe('TemplateLoader', (function() {
      var loader,
          xhr;
      beforeEach((function() {
        xhr = new XHRMock();
        loader = new TemplateLoader(xhr, new FakeUrlResolver());
      }));
      it('should load inline templates synchronously', (function() {
        var template = new Template({inline: 'inline template'});
        expect(DOM.content(loader.load(template))).toHaveText('inline template');
      }));
      it('should load templates through XHR', (function(done) {
        xhr.expect('base/foo', 'xhr template');
        var template = new Template({url: '/foo'});
        loader.setBaseUrl(template, 'base');
        loader.load(template).then((function(el) {
          expect(DOM.content(el)).toHaveText('xhr template');
          done();
        }));
        xhr.flush();
      }));
      it('should cache template loaded through XHR', (function(done) {
        var firstEl;
        xhr.expect('base/foo', 'xhr template');
        var template = new Template({url: '/foo'});
        loader.setBaseUrl(template, 'base');
        loader.load(template).then((function(el) {
          firstEl = el;
          return loader.load(template);
        })).then((function(el) {
          expect(el).toBe(firstEl);
          expect(DOM.content(el)).toHaveText('xhr template');
          done();
        }));
        xhr.flush();
      }));
      it('should throw when no template is defined', (function() {
        var template = new Template({
          inline: null,
          url: null
        });
        expect((function() {
          return loader.load(template);
        })).toThrowError('Templates should have either their url or inline property set');
      }));
      it('should return a rejected Promise when xhr loading fails', (function(done) {
        xhr.expect('base/foo', null);
        var template = new Template({url: '/foo'});
        loader.setBaseUrl(template, 'base');
        PromiseWrapper.then(loader.load(template), function(_) {
          throw 'Unexpected response';
        }, function(error) {
          expect(error).toEqual('Failed to load base/foo');
          done();
        });
        xhr.flush();
      }));
    }));
  }
  $__export("main", main);
  return {
    setters: [function($__m) {
      assert = $__m.assert;
    }, function($__m) {
      describe = $__m.describe;
      it = $__m.it;
      expect = $__m.expect;
      beforeEach = $__m.beforeEach;
      ddescribe = $__m.ddescribe;
      iit = $__m.iit;
      xit = $__m.xit;
      el = $__m.el;
    }, function($__m) {
      DOM = $__m.DOM;
    }, function($__m) {
      TemplateLoader = $__m.TemplateLoader;
    }, function($__m) {
      UrlResolver = $__m.UrlResolver;
    }, function($__m) {
      Template = $__m.Template;
    }, function($__m) {
      PromiseWrapper = $__m.PromiseWrapper;
    }, function($__m) {
      XHRMock = $__m.XHRMock;
    }],
    execute: function() {
      SomeComponent = (function() {
        var SomeComponent = function SomeComponent() {};
        return ($traceurRuntime.createClass)(SomeComponent, {}, {});
      }());
      FakeUrlResolver = (function($__super) {
        var FakeUrlResolver = function FakeUrlResolver() {
          $traceurRuntime.superConstructor(FakeUrlResolver).call(this);
        };
        return ($traceurRuntime.createClass)(FakeUrlResolver, {resolve: function(baseUrl, url) {
            assert.argumentTypes(baseUrl, assert.type.string, url, assert.type.string);
            return assert.returnType((baseUrl + url), assert.type.string);
          }}, {}, $__super);
      }(UrlResolver));
      Object.defineProperty(FakeUrlResolver.prototype.resolve, "parameters", {get: function() {
          return [[assert.type.string], [assert.type.string]];
        }});
    }
  };
});

//# sourceMappingURL=angular2/test/core/compiler/template_loader_spec.map

//# sourceMappingURL=../../../../angular2/test/core/compiler/template_loader_spec.js.map