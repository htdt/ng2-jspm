var parse5Adapter = require('angular2/src/dom/parse5_adapter');
parse5Adapter.Parse5DomAdapter.makeCurrent();
"use strict";
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/test/core/compiler/url_resolver_spec";
var $__angular2_47_test_95_lib__,
    $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__;
var $__0 = ($__angular2_47_test_95_lib__ = require("angular2/test_lib"), $__angular2_47_test_95_lib__ && $__angular2_47_test_95_lib__.__esModule && $__angular2_47_test_95_lib__ || {default: $__angular2_47_test_95_lib__}),
    describe = $__0.describe,
    it = $__0.it,
    expect = $__0.expect,
    beforeEach = $__0.beforeEach,
    ddescribe = $__0.ddescribe,
    iit = $__0.iit,
    xit = $__0.xit,
    el = $__0.el;
var UrlResolver = ($__angular2_47_src_47_core_47_compiler_47_url_95_resolver__ = require("angular2/src/core/compiler/url_resolver"), $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__ && $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__.__esModule && $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__ || {default: $__angular2_47_src_47_core_47_compiler_47_url_95_resolver__}).UrlResolver;
function main() {
  describe('UrlResolver', (function() {
    var resolver = new UrlResolver();
    it('should add a relative path to the base url', (function() {
      expect(resolver.resolve('http://www.foo.com', 'bar')).toEqual('http://www.foo.com/bar');
      expect(resolver.resolve('http://www.foo.com/', 'bar')).toEqual('http://www.foo.com/bar');
      expect(resolver.resolve('http://www.foo.com', './bar')).toEqual('http://www.foo.com/bar');
      expect(resolver.resolve('http://www.foo.com/', './bar')).toEqual('http://www.foo.com/bar');
    }));
    it('should replace the base path', (function() {
      expect(resolver.resolve('http://www.foo.com/baz', 'bar')).toEqual('http://www.foo.com/bar');
      expect(resolver.resolve('http://www.foo.com/baz', './bar')).toEqual('http://www.foo.com/bar');
    }));
    it('should append to the base path', (function() {
      expect(resolver.resolve('http://www.foo.com/baz/', 'bar')).toEqual('http://www.foo.com/baz/bar');
      expect(resolver.resolve('http://www.foo.com/baz/', './bar')).toEqual('http://www.foo.com/baz/bar');
    }));
    it('should support ".." in the path', (function() {
      expect(resolver.resolve('http://www.foo.com/baz/', '../bar')).toEqual('http://www.foo.com/bar');
      expect(resolver.resolve('http://www.foo.com/1/2/3/', '../../bar')).toEqual('http://www.foo.com/1/bar');
      expect(resolver.resolve('http://www.foo.com/1/2/3/', '../biz/bar')).toEqual('http://www.foo.com/1/2/biz/bar');
      expect(resolver.resolve('http://www.foo.com/1/2/baz', '../../bar')).toEqual('http://www.foo.com/bar');
    }));
    it('should ignore the base path when the url has a scheme', (function() {
      expect(resolver.resolve('http://www.foo.com', 'http://www.bar.com')).toEqual('http://www.bar.com');
    }));
    it('should throw when the url start with "/"', (function() {
      expect((function() {
        resolver.resolve('http://www.foo.com/1/2', '/test');
      })).toThrowError();
    }));
  }));
}

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/test/core/compiler/url_resolver_spec.map

//# sourceMappingURL=./url_resolver_spec.map
 main();