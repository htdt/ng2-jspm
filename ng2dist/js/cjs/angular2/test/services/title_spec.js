var parse5Adapter = require('angular2/src/dom/parse5_adapter');
parse5Adapter.Parse5DomAdapter.makeCurrent();
"use strict";
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/test/services/title_spec";
var $__angular2_47_test_95_lib__,
    $__angular2_47_src_47_dom_47_dom_95_adapter__,
    $__angular2_47_src_47_services_47_title__;
var $__0 = ($__angular2_47_test_95_lib__ = require("angular2/test_lib"), $__angular2_47_test_95_lib__ && $__angular2_47_test_95_lib__.__esModule && $__angular2_47_test_95_lib__ || {default: $__angular2_47_test_95_lib__}),
    ddescribe = $__0.ddescribe,
    describe = $__0.describe,
    it = $__0.it,
    iit = $__0.iit,
    xit = $__0.xit,
    expect = $__0.expect,
    afterEach = $__0.afterEach;
var DOM = ($__angular2_47_src_47_dom_47_dom_95_adapter__ = require("angular2/src/dom/dom_adapter"), $__angular2_47_src_47_dom_47_dom_95_adapter__ && $__angular2_47_src_47_dom_47_dom_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_dom_95_adapter__ || {default: $__angular2_47_src_47_dom_47_dom_95_adapter__}).DOM;
var Title = ($__angular2_47_src_47_services_47_title__ = require("angular2/src/services/title"), $__angular2_47_src_47_services_47_title__ && $__angular2_47_src_47_services_47_title__.__esModule && $__angular2_47_src_47_services_47_title__ || {default: $__angular2_47_src_47_services_47_title__}).Title;
function main() {
  describe('title service', (function() {
    var initialTitle = DOM.getTitle();
    var titleService = new Title();
    afterEach((function() {
      DOM.setTitle(initialTitle);
    }));
    it('should allow reading initial title', (function() {
      expect(titleService.getTitle()).toEqual(initialTitle);
    }));
    it('should set a title on the injected document', (function() {
      titleService.setTitle('test title');
      expect(DOM.getTitle()).toEqual('test title');
      expect(titleService.getTitle()).toEqual('test title');
    }));
    it('should reset title to empty string if title not provided', (function() {
      titleService.setTitle(null);
      expect(DOM.getTitle()).toEqual('');
    }));
  }));
}

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/test/services/title_spec.map

//# sourceMappingURL=./title_spec.map
 main();