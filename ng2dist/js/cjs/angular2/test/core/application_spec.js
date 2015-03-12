var parse5Adapter = require('angular2/src/dom/parse5_adapter');
parse5Adapter.Parse5DomAdapter.makeCurrent();
"use strict";
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/test/core/application_spec";
var $__angular2_47_test_95_lib__,
    $__angular2_47_src_47_core_47_application__,
    $__angular2_47_src_47_core_47_annotations_47_annotations__,
    $__angular2_47_src_47_dom_47_dom_95_adapter__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_facade_47_async__,
    $__angular2_47_di__,
    $__angular2_47_src_47_core_47_annotations_47_template__,
    $__angular2_47_src_47_core_47_life_95_cycle_47_life_95_cycle__;
var $__0 = ($__angular2_47_test_95_lib__ = require("angular2/test_lib"), $__angular2_47_test_95_lib__ && $__angular2_47_test_95_lib__.__esModule && $__angular2_47_test_95_lib__ || {default: $__angular2_47_test_95_lib__}),
    describe = $__0.describe,
    ddescribe = $__0.ddescribe,
    it = $__0.it,
    iit = $__0.iit,
    xit = $__0.xit,
    xdescribe = $__0.xdescribe,
    expect = $__0.expect,
    beforeEach = $__0.beforeEach;
var $__1 = ($__angular2_47_src_47_core_47_application__ = require("angular2/src/core/application"), $__angular2_47_src_47_core_47_application__ && $__angular2_47_src_47_core_47_application__.__esModule && $__angular2_47_src_47_core_47_application__ || {default: $__angular2_47_src_47_core_47_application__}),
    bootstrap = $__1.bootstrap,
    appDocumentToken = $__1.appDocumentToken,
    appElementToken = $__1.appElementToken;
var Component = ($__angular2_47_src_47_core_47_annotations_47_annotations__ = require("angular2/src/core/annotations/annotations"), $__angular2_47_src_47_core_47_annotations_47_annotations__ && $__angular2_47_src_47_core_47_annotations_47_annotations__.__esModule && $__angular2_47_src_47_core_47_annotations_47_annotations__ || {default: $__angular2_47_src_47_core_47_annotations_47_annotations__}).Component;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var ListWrapper = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}).ListWrapper;
var PromiseWrapper = ($__angular2_47_src_47_facade_47_async__ = require("angular2/src/facade/async"), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}).PromiseWrapper;
var $__6 = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}),
    bind = $__6.bind,
    Inject = $__6.Inject;
var Template = ($__angular2_47_src_47_core_47_annotations_47_template__ = require("angular2/src/core/annotations/template"), $__angular2_47_src_47_core_47_annotations_47_template__ && $__angular2_47_src_47_core_47_annotations_47_template__.__esModule && $__angular2_47_src_47_core_47_annotations_47_template__ || {default: $__angular2_47_src_47_core_47_annotations_47_template__}).Template;
var LifeCycle = ($__angular2_47_src_47_core_47_life_95_cycle_47_life_95_cycle__ = require("angular2/src/core/life_cycle/life_cycle"), $__angular2_47_src_47_core_47_life_95_cycle_47_life_95_cycle__ && $__angular2_47_src_47_core_47_life_95_cycle_47_life_95_cycle__.__esModule && $__angular2_47_src_47_core_47_life_95_cycle_47_life_95_cycle__ || {default: $__angular2_47_src_47_core_47_life_95_cycle_47_life_95_cycle__}).LifeCycle;
var HelloRootCmp = function HelloRootCmp() {
  this.greeting = 'hello';
};
($traceurRuntime.createClass)(HelloRootCmp, {}, {});
Object.defineProperty(HelloRootCmp, "annotations", {get: function() {
    return [new Component({selector: 'hello-app'}), new Template({inline: '{{greeting}} world!'})];
  }});
var HelloRootCmpContent = function HelloRootCmpContent() {};
($traceurRuntime.createClass)(HelloRootCmpContent, {}, {});
Object.defineProperty(HelloRootCmpContent, "annotations", {get: function() {
    return [new Component({selector: 'hello-app'}), new Template({inline: 'before: <content></content> after: done'})];
  }});
var HelloRootCmp2 = function HelloRootCmp2() {
  this.greeting = 'hello';
};
($traceurRuntime.createClass)(HelloRootCmp2, {}, {});
Object.defineProperty(HelloRootCmp2, "annotations", {get: function() {
    return [new Component({selector: 'hello-app-2'}), new Template({inline: '{{greeting}} world, again!'})];
  }});
var HelloRootCmp3 = function HelloRootCmp3(appBinding) {
  this.appBinding = appBinding;
};
($traceurRuntime.createClass)(HelloRootCmp3, {}, {});
Object.defineProperty(HelloRootCmp3, "annotations", {get: function() {
    return [new Component({selector: 'hello-app'}), new Template({inline: ''})];
  }});
Object.defineProperty(HelloRootCmp3, "parameters", {get: function() {
    return [[new Inject("appBinding")]];
  }});
var HelloRootCmp4 = function HelloRootCmp4(lc) {
  this.lc = lc;
};
($traceurRuntime.createClass)(HelloRootCmp4, {}, {});
Object.defineProperty(HelloRootCmp4, "annotations", {get: function() {
    return [new Component({selector: 'hello-app'}), new Template({inline: ''})];
  }});
Object.defineProperty(HelloRootCmp4, "parameters", {get: function() {
    return [[new Inject(LifeCycle)]];
  }});
function main() {
  var fakeDoc,
      el,
      el2,
      testBindings,
      lightDom;
  beforeEach((function() {
    fakeDoc = DOM.createHtmlDocument();
    el = DOM.createElement('hello-app', fakeDoc);
    el2 = DOM.createElement('hello-app-2', fakeDoc);
    lightDom = DOM.createElement('light-dom-el', fakeDoc);
    DOM.appendChild(fakeDoc.body, el);
    DOM.appendChild(fakeDoc.body, el2);
    DOM.appendChild(el, lightDom);
    DOM.setText(lightDom, 'loading');
    testBindings = [bind(appDocumentToken).toValue(fakeDoc)];
  }));
  describe('bootstrap factory method', (function() {
    it('should throw if no element is found', (function(done) {
      var injectorPromise = bootstrap(HelloRootCmp, [], (function(e, t) {
        throw e;
      }));
      PromiseWrapper.then(injectorPromise, null, (function(reason) {
        expect(reason.message).toContain('The app selector "hello-app" did not match any elements');
        done();
      }));
    }));
    it('should create an injector promise', (function() {
      var injectorPromise = bootstrap(HelloRootCmp, testBindings);
      expect(injectorPromise).not.toBe(null);
    }));
    it('should resolve an injector promise and contain bindings', (function(done) {
      var injectorPromise = bootstrap(HelloRootCmp, testBindings);
      injectorPromise.then((function(injector) {
        expect(injector.get(appElementToken)).toBe(el);
        done();
      }));
    }));
    it('should provide the application component in the injector', (function(done) {
      var injectorPromise = bootstrap(HelloRootCmp, testBindings);
      injectorPromise.then((function(injector) {
        expect(injector.get(HelloRootCmp)).toBeAnInstanceOf(HelloRootCmp);
        done();
      }));
    }));
    it('should display hello world', (function(done) {
      var injectorPromise = bootstrap(HelloRootCmp, testBindings);
      injectorPromise.then((function(injector) {
        expect(injector.get(appElementToken)).toHaveText('hello world!');
        done();
      }));
    }));
    it('should support multiple calls to bootstrap', (function(done) {
      var injectorPromise1 = bootstrap(HelloRootCmp, testBindings);
      var injectorPromise2 = bootstrap(HelloRootCmp2, testBindings);
      PromiseWrapper.all([injectorPromise1, injectorPromise2]).then((function(injectors) {
        expect(injectors[0].get(appElementToken)).toHaveText('hello world!');
        expect(injectors[1].get(appElementToken)).toHaveText('hello world, again!');
        done();
      }));
    }));
    it("should make the provided bindings available to the application component", (function(done) {
      var injectorPromise = bootstrap(HelloRootCmp3, [testBindings, bind("appBinding").toValue("BoundValue")]);
      injectorPromise.then((function(injector) {
        expect(injector.get(HelloRootCmp3).appBinding).toEqual("BoundValue");
        done();
      }));
    }));
    it("should avoid cyclic dependencies when root component requires Lifecycle through DI", (function(done) {
      var injectorPromise = bootstrap(HelloRootCmp4, testBindings);
      injectorPromise.then((function(injector) {
        expect(injector.get(HelloRootCmp4).lc).toBe(injector.get(LifeCycle));
        done();
      }));
    }));
    it("should support shadow dom content tag", (function(done) {
      var injectorPromise = bootstrap(HelloRootCmpContent, testBindings);
      injectorPromise.then((function(injector) {
        expect(injector.get(appElementToken)).toHaveText('before: loading after: done');
        done();
      }));
    }));
  }));
}

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/test/core/application_spec.map

//# sourceMappingURL=./application_spec.map
 main();