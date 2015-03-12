"use strict";
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var __moduleName = "benchmarks/src/change_detection/change_detection_benchmark";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_reflection_47_reflection__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_test_95_lib_47_benchmark_95_util__,
    $__angular2_47_src_47_dom_47_browser_95_adapter__,
    $__angular2_47_change_95_detection__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var $__1 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    ListWrapper = $__1.ListWrapper,
    MapWrapper = $__1.MapWrapper;
var reflector = ($__angular2_47_src_47_reflection_47_reflection__ = require("angular2/src/reflection/reflection"), $__angular2_47_src_47_reflection_47_reflection__ && $__angular2_47_src_47_reflection_47_reflection__.__esModule && $__angular2_47_src_47_reflection_47_reflection__ || {default: $__angular2_47_src_47_reflection_47_reflection__}).reflector;
var $__3 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    isPresent = $__3.isPresent,
    isJsObject = $__3.isJsObject;
var $__4 = ($__angular2_47_src_47_test_95_lib_47_benchmark_95_util__ = require("angular2/src/test_lib/benchmark_util"), $__angular2_47_src_47_test_95_lib_47_benchmark_95_util__ && $__angular2_47_src_47_test_95_lib_47_benchmark_95_util__.__esModule && $__angular2_47_src_47_test_95_lib_47_benchmark_95_util__ || {default: $__angular2_47_src_47_test_95_lib_47_benchmark_95_util__}),
    getIntParameter = $__4.getIntParameter,
    bindAction = $__4.bindAction;
var BrowserDomAdapter = ($__angular2_47_src_47_dom_47_browser_95_adapter__ = require("angular2/src/dom/browser_adapter"), $__angular2_47_src_47_dom_47_browser_95_adapter__ && $__angular2_47_src_47_dom_47_browser_95_adapter__.__esModule && $__angular2_47_src_47_dom_47_browser_95_adapter__ || {default: $__angular2_47_src_47_dom_47_browser_95_adapter__}).BrowserDomAdapter;
var $__6 = ($__angular2_47_change_95_detection__ = require("angular2/change_detection"), $__angular2_47_change_95_detection__ && $__angular2_47_change_95_detection__.__esModule && $__angular2_47_change_95_detection__ || {default: $__angular2_47_change_95_detection__}),
    Lexer = $__6.Lexer,
    Parser = $__6.Parser,
    ChangeDispatcher = $__6.ChangeDispatcher,
    ChangeDetection = $__6.ChangeDetection,
    dynamicChangeDetection = $__6.dynamicChangeDetection,
    jitChangeDetection = $__6.jitChangeDetection;
var Obj = function Obj() {};
($traceurRuntime.createClass)(Obj, {setField: function(index, value) {
    switch (index) {
      case 0:
        this.field0 = value;
        break;
      case 1:
        this.field1 = value;
        break;
      case 2:
        this.field2 = value;
        break;
      case 3:
        this.field3 = value;
        break;
      case 4:
        this.field4 = value;
        break;
      case 5:
        this.field5 = value;
        break;
      case 6:
        this.field6 = value;
        break;
      case 7:
        this.field7 = value;
        break;
      case 8:
        this.field8 = value;
        break;
      case 9:
        this.field9 = value;
        break;
    }
  }}, {});
var Row = function Row() {};
($traceurRuntime.createClass)(Row, {}, {});
function setUpReflector() {
  reflector.registerGetters({
    'field0': function(obj) {
      return obj.field0;
    },
    'field1': function(obj) {
      return obj.field1;
    },
    'field2': function(obj) {
      return obj.field2;
    },
    'field3': function(obj) {
      return obj.field3;
    },
    'field4': function(obj) {
      return obj.field4;
    },
    'field5': function(obj) {
      return obj.field5;
    },
    'field6': function(obj) {
      return obj.field6;
    },
    'field7': function(obj) {
      return obj.field7;
    },
    'field8': function(obj) {
      return obj.field8;
    },
    'field9': function(obj) {
      return obj.field9;
    }
  });
  reflector.registerSetters({
    'field0': function(obj, v) {
      return obj.field0 = v;
    },
    'field1': function(obj, v) {
      return obj.field1 = v;
    },
    'field2': function(obj, v) {
      return obj.field2 = v;
    },
    'field3': function(obj, v) {
      return obj.field3 = v;
    },
    'field4': function(obj, v) {
      return obj.field4 = v;
    },
    'field5': function(obj, v) {
      return obj.field5 = v;
    },
    'field6': function(obj, v) {
      return obj.field6 = v;
    },
    'field7': function(obj, v) {
      return obj.field7 = v;
    },
    'field8': function(obj, v) {
      return obj.field8 = v;
    },
    'field9': function(obj, v) {
      return obj.field9 = v;
    }
  });
}
function setUpBaseline(iterations) {
  function createRow(i) {
    var obj = new Obj();
    for (var j = 0; j < 10; ++j) {
      obj.setField(j, i);
    }
    var r = new Row();
    r.currentValue = obj;
    r.previousValue = obj;
    return r;
  }
  var head = createRow(0);
  var current = head;
  for (var i = 1; i < iterations; i++) {
    var newRow = createRow(i);
    current.next = newRow;
    current = newRow;
  }
  return head;
}
function setUpChangeDetection(changeDetection, iterations) {
  assert.argumentTypes(changeDetection, ChangeDetection, iterations, assert.type.any);
  var dispatcher = new DummyDispatcher();
  var parser = new Parser(new Lexer());
  var parentProto = changeDetection.createProtoChangeDetector('parent');
  var parentCd = parentProto.instantiate(dispatcher);
  var proto = changeDetection.createProtoChangeDetector("proto");
  var astWithSource = [parser.parseBinding('field0', null), parser.parseBinding('field1', null), parser.parseBinding('field2', null), parser.parseBinding('field3', null), parser.parseBinding('field4', null), parser.parseBinding('field5', null), parser.parseBinding('field6', null), parser.parseBinding('field7', null), parser.parseBinding('field8', null), parser.parseBinding('field9', null)];
  for (var j = 0; j < 10; ++j) {
    proto.addAst(astWithSource[j].ast, "memo", j);
  }
  for (var i = 0; i < iterations; ++i) {
    var obj = new Obj();
    for (var j = 0; j < 10; ++j) {
      obj.setField(j, i);
    }
    var cd = proto.instantiate(dispatcher);
    cd.hydrate(obj);
    parentCd.addChild(cd);
  }
  return parentCd;
}
Object.defineProperty(setUpChangeDetection, "parameters", {get: function() {
    return [[ChangeDetection], []];
  }});
function main() {
  BrowserDomAdapter.makeCurrent();
  var numberOfChecks = getIntParameter('numberOfChecks');
  var numberOfRuns = getIntParameter('iterations');
  var numberOfChecksPerDetector = 10;
  var numberOfDetectors = numberOfChecks / numberOfChecksPerDetector / numberOfRuns;
  setUpReflector();
  function checkBaselineRow(r) {
    var curr = r.currentValue;
    var prev = r.previousValue;
    if (curr.field0 !== prev.field0)
      throw "should not happen";
    if (curr.field1 !== prev.field1)
      throw "should not happen";
    if (curr.field2 !== prev.field2)
      throw "should not happen";
    if (curr.field3 !== prev.field3)
      throw "should not happen";
    if (curr.field4 !== prev.field4)
      throw "should not happen";
    if (curr.field5 !== prev.field5)
      throw "should not happen";
    if (curr.field6 !== prev.field6)
      throw "should not happen";
    if (curr.field7 !== prev.field7)
      throw "should not happen";
    if (curr.field8 !== prev.field8)
      throw "should not happen";
    if (curr.field9 !== prev.field9)
      throw "should not happen";
  }
  var baselineHead = setUpBaseline(numberOfDetectors);
  function runBaselineChangeDetection() {
    var current = baselineHead;
    while (isPresent(current)) {
      checkBaselineRow(current);
      current = current.next;
    }
  }
  function baselineChangeDetection() {
    for (var i = 0; i < numberOfRuns; ++i) {
      runBaselineChangeDetection();
    }
  }
  runBaselineChangeDetection();
  bindAction('#baselineChangeDetection', baselineChangeDetection);
  var ng2DynamicChangeDetector = setUpChangeDetection(dynamicChangeDetection, numberOfDetectors);
  function ng2ChangeDetectionDynamic() {
    for (var i = 0; i < numberOfRuns; ++i) {
      ng2DynamicChangeDetector.detectChanges();
    }
  }
  ng2DynamicChangeDetector.detectChanges();
  bindAction('#ng2ChangeDetectionDynamic', ng2ChangeDetectionDynamic);
  if (isJsObject({})) {
    var ng2ChangeDetectionJit = function() {
      for (var i = 0; i < numberOfRuns; ++i) {
        ng2JitChangeDetector.detectChanges();
      }
    };
    var ng2JitChangeDetector = setUpChangeDetection(jitChangeDetection, numberOfDetectors);
    ng2JitChangeDetector.detectChanges();
    bindAction('#ng2ChangeDetectionJit', ng2ChangeDetectionJit);
  } else {
    bindAction('#ng2ChangeDetectionJit', (function() {}));
  }
}
var DummyDispatcher = function DummyDispatcher() {
  $traceurRuntime.superConstructor($DummyDispatcher).apply(this, arguments);
};
var $DummyDispatcher = DummyDispatcher;
($traceurRuntime.createClass)(DummyDispatcher, {onRecordChange: function(record, context) {}}, {}, ChangeDispatcher);

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/benchmarks/src/change_detection/change_detection_benchmark.map

//# sourceMappingURL=./change_detection_benchmark.map