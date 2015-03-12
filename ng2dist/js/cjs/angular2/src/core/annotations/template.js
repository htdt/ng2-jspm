"use strict";
Object.defineProperties(module.exports, {
  Template: {get: function() {
      return Template;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/src/core/annotations/template";
var $__angular2_47_src_47_facade_47_lang__;
var $__0 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    ABSTRACT = $__0.ABSTRACT,
    CONST = $__0.CONST,
    Type = $__0.Type;
var Template = function Template($__2) {
  var $__3 = $__2,
      url = $__3.url,
      inline = $__3.inline,
      directives = $__3.directives,
      formatters = $__3.formatters,
      source = $__3.source,
      locale = $__3.locale,
      device = $__3.device;
  this.url = url;
  this.inline = inline;
  this.directives = directives;
  this.formatters = formatters;
  this.source = source;
  this.locale = locale;
  this.device = device;
};
($traceurRuntime.createClass)(Template, {}, {});
Object.defineProperty(Template, "annotations", {get: function() {
    return [new CONST()];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/core/annotations/template.map

//# sourceMappingURL=./template.map