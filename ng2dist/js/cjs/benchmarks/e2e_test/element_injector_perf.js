"use strict";
var __moduleName = "benchmarks/e2e_test/element_injector_perf";
var perfUtil = require('angular2/src/test_lib/perf_util');
describe('ng2 element injector benchmark', function() {
  var URL = 'benchmarks/src/element_injector/element_injector_benchmark.html';
  afterEach(perfUtil.verifyNoBrowserErrors);
  it('should log the stats for instantiate', function(done) {
    perfUtil.runClickBenchmark({
      url: URL,
      buttons: ['#instantiate'],
      id: 'ng2.elementInjector.instantiate',
      microIterations: 20000
    }).then(done, done.fail);
  });
  it('should log the stats for instantiateDirectives', function(done) {
    perfUtil.runClickBenchmark({
      url: URL,
      buttons: ['#instantiateDirectives'],
      id: 'ng2.elementInjector.instantiateDirectives',
      microIterations: 20000
    }).then(done, done.fail);
  });
});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/benchmarks/e2e_test/element_injector_perf.map

//# sourceMappingURL=./element_injector_perf.map