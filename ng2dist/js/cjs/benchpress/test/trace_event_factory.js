"use strict";
Object.defineProperties(module.exports, {
  TraceEventFactory: {get: function() {
      return TraceEventFactory;
    }},
  __esModule: {value: true}
});
var __moduleName = "benchpress/test/trace_event_factory";
var $__angular2_47_src_47_facade_47_lang__;
var isPresent = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).isPresent;
var TraceEventFactory = function TraceEventFactory(cat, pid) {
  this._cat = cat;
  this._pid = pid;
};
($traceurRuntime.createClass)(TraceEventFactory, {
  create: function(ph, name, time) {
    var args = arguments[3] !== (void 0) ? arguments[3] : null;
    var res = {
      'name': name,
      'cat': this._cat,
      'ph': ph,
      'ts': time,
      'pid': this._pid
    };
    if (isPresent(args)) {
      res['args'] = args;
    }
    return res;
  },
  markStart: function(name, time) {
    return this.create('b', name, time);
  },
  markEnd: function(name, time) {
    return this.create('e', name, time);
  },
  start: function(name, time) {
    var args = arguments[2] !== (void 0) ? arguments[2] : null;
    return this.create('B', name, time, args);
  },
  end: function(name, time) {
    var args = arguments[2] !== (void 0) ? arguments[2] : null;
    return this.create('E', name, time, args);
  },
  complete: function(name, time, duration) {
    var args = arguments[3] !== (void 0) ? arguments[3] : null;
    var res = this.create('X', name, time, args);
    res['dur'] = duration;
    return res;
  }
}, {});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/benchpress/test/trace_event_factory.map

//# sourceMappingURL=./trace_event_factory.map