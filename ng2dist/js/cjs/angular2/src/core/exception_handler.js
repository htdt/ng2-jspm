"use strict";
Object.defineProperties(module.exports, {
  ExceptionHandler: {get: function() {
      return ExceptionHandler;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/src/core/exception_handler";
var $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__;
var $__0 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    isPresent = $__0.isPresent,
    print = $__0.print;
var $__1 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    ListWrapper = $__1.ListWrapper,
    isListLikeIterable = $__1.isListLikeIterable;
var ExceptionHandler = function ExceptionHandler() {};
($traceurRuntime.createClass)(ExceptionHandler, {call: function(error) {
    var stackTrace = arguments[1] !== (void 0) ? arguments[1] : null;
    var reason = arguments[2] !== (void 0) ? arguments[2] : null;
    var longStackTrace = isListLikeIterable(stackTrace) ? ListWrapper.join(stackTrace, "\n\n") : stackTrace;
    var reasonStr = isPresent(reason) ? ("\n" + reason) : '';
    print(("" + error + reasonStr + "\nSTACKTRACE:\n" + longStackTrace));
  }}, {});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/core/exception_handler.map

//# sourceMappingURL=./exception_handler.map