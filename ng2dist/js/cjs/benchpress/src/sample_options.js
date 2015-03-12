"use strict";
Object.defineProperties(module.exports, {
  Options: {get: function() {
      return Options;
    }},
  __esModule: {value: true}
});
var __moduleName = "benchpress/src/sample_options";
var $__angular2_47_di__;
var $__0 = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}),
    bind = $__0.bind,
    OpaqueToken = $__0.OpaqueToken;
var Options = function Options() {};
($traceurRuntime.createClass)(Options, {}, {
  get SAMPLE_ID() {
    return _SAMPLE_ID;
  },
  get DEFAULT_DESCRIPTION() {
    return _DEFAULT_DESCRIPTION;
  },
  get SAMPLE_DESCRIPTION() {
    return _SAMPLE_DESCRIPTION;
  },
  get FORCE_GC() {
    return _FORCE_GC;
  },
  get PREPARE() {
    return _PREPARE;
  },
  get EXECUTE() {
    return _EXECUTE;
  },
  get CAPABILITIES() {
    return _CAPABILITIES;
  },
  get USER_AGENT() {
    return _USER_AGENT;
  },
  get MICRO_ITERATIONS() {
    return _MICRO_ITERATIONS;
  }
});
var _SAMPLE_ID = new OpaqueToken('Options.sampleId');
var _DEFAULT_DESCRIPTION = new OpaqueToken('Options.defaultDescription');
var _SAMPLE_DESCRIPTION = new OpaqueToken('Options.sampleDescription');
var _FORCE_GC = new OpaqueToken('Options.forceGc');
var _PREPARE = new OpaqueToken('Options.prepare');
var _EXECUTE = new OpaqueToken('Options.execute');
var _CAPABILITIES = new OpaqueToken('Options.capabilities');
var _USER_AGENT = new OpaqueToken('Options.userAgent');
var _MICRO_ITERATIONS = new OpaqueToken('Options.microIterations');

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/benchpress/src/sample_options.map

//# sourceMappingURL=./sample_options.map