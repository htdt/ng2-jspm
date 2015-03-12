"use strict";
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var __moduleName = "benchpress/test/reporter/console_reporter_spec";
var $__angular2_47_test_95_lib__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__,
    $__benchpress_47_common__;
var $__0 = ($__angular2_47_test_95_lib__ = require("angular2/test_lib"), $__angular2_47_test_95_lib__ && $__angular2_47_test_95_lib__.__esModule && $__angular2_47_test_95_lib__ || {default: $__angular2_47_test_95_lib__}),
    describe = $__0.describe,
    ddescribe = $__0.ddescribe,
    it = $__0.it,
    iit = $__0.iit,
    xit = $__0.xit,
    expect = $__0.expect,
    beforeEach = $__0.beforeEach,
    afterEach = $__0.afterEach;
var $__1 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    isBlank = $__1.isBlank,
    isPresent = $__1.isPresent,
    Date = $__1.Date,
    DateWrapper = $__1.DateWrapper;
var $__2 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    List = $__2.List,
    ListWrapper = $__2.ListWrapper;
var $__3 = ($__benchpress_47_common__ = require("benchpress/common"), $__benchpress_47_common__ && $__benchpress_47_common__.__esModule && $__benchpress_47_common__ || {default: $__benchpress_47_common__}),
    SampleState = $__3.SampleState,
    Reporter = $__3.Reporter,
    bind = $__3.bind,
    Injector = $__3.Injector,
    ConsoleReporter = $__3.ConsoleReporter,
    SampleDescription = $__3.SampleDescription,
    MeasureValues = $__3.MeasureValues;
function main() {
  describe('console reporter', (function() {
    var reporter;
    var log;
    function createReporter($__4) {
      var $__5 = $__4,
          columnWidth = $__5.columnWidth,
          sampleId = $__5.sampleId,
          descriptions = $__5.descriptions,
          metrics = $__5.metrics;
      log = [];
      if (isBlank(descriptions)) {
        descriptions = [];
      }
      if (isBlank(sampleId)) {
        sampleId = 'null';
      }
      var bindings = [ConsoleReporter.BINDINGS, bind(SampleDescription).toValue(new SampleDescription(sampleId, descriptions, metrics)), bind(ConsoleReporter.PRINT).toValue((function(line) {
        return ListWrapper.push(log, line);
      }))];
      if (isPresent(columnWidth)) {
        ListWrapper.push(bindings, bind(ConsoleReporter.COLUMN_WIDTH).toValue(columnWidth));
      }
      reporter = new Injector(bindings).get(ConsoleReporter);
    }
    it('should print the sample id, description and table header', (function() {
      createReporter({
        columnWidth: 8,
        sampleId: 'someSample',
        descriptions: [{
          'a': 1,
          'b': 2
        }],
        metrics: {
          'm1': 'some desc',
          'm2': 'some other desc'
        }
      });
      expect(log).toEqual(['BENCHMARK someSample', 'Description:', '- a: 1', '- b: 2', 'Metrics:', '- m1: some desc', '- m2: some other desc', '', '      m1 |       m2', '-------- | --------']);
    }));
    it('should print a table row', (function() {
      createReporter({
        columnWidth: 8,
        metrics: {
          'a': '',
          'b': ''
        }
      });
      log = [];
      reporter.reportMeasureValues(mv(0, 0, {
        'a': 1.23,
        'b': 2
      }));
      expect(log).toEqual(['    1.23 |     2.00']);
    }));
    it('should print the table footer and stats when there is a valid sample', (function() {
      createReporter({
        columnWidth: 8,
        metrics: {
          'a': '',
          'b': ''
        }
      });
      log = [];
      reporter.reportSample([], [mv(0, 0, {
        'a': 3,
        'b': 6
      }), mv(1, 1, {
        'a': 5,
        'b': 9
      })]);
      expect(log).toEqual(['======== | ========', '4.00+-25% | 7.50+-20%']);
    }));
  }));
}
function mv(runIndex, time, values) {
  return new MeasureValues(runIndex, DateWrapper.fromMillis(time), values);
}

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/benchpress/test/reporter/console_reporter_spec.map

//# sourceMappingURL=./console_reporter_spec.map