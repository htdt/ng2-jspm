"use strict";
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var __moduleName = "benchmarks_external/src/largetable/largetable_benchmark";
var $__angular2_47_src_47_test_95_lib_47_benchmark_95_util__;
var $__0 = ($__angular2_47_src_47_test_95_lib_47_benchmark_95_util__ = require("angular2/src/test_lib/benchmark_util"), $__angular2_47_src_47_test_95_lib_47_benchmark_95_util__ && $__angular2_47_src_47_test_95_lib_47_benchmark_95_util__.__esModule && $__angular2_47_src_47_test_95_lib_47_benchmark_95_util__ || {default: $__angular2_47_src_47_test_95_lib_47_benchmark_95_util__}),
    getIntParameter = $__0.getIntParameter,
    getStringParameter = $__0.getStringParameter,
    bindAction = $__0.bindAction;
var totalRows = getIntParameter('rows');
var totalColumns = getIntParameter('columns');
var benchmarkType = getStringParameter('benchmarkType');
function main() {
  angular.bootstrap(document.querySelector('largetable'), ['app']);
}
angular.module('app', []).config(function($compileProvider) {
  if ($compileProvider.debugInfoEnabled) {
    $compileProvider.debugInfoEnabled(false);
  }
}).filter('noop', function() {
  return function(input) {
    return input;
  };
}).directive('largetable', function() {
  return {
    restrict: 'E',
    templateUrl: 'largetable-js-template.html',
    controller: 'DataController'
  };
}).controller('DataController', function($scope) {
  bindAction('#destroyDom', destroyDom);
  bindAction('#createDom', createDom);
  function destroyDom() {
    $scope.$apply(function() {
      $scope.benchmarkType = 'none';
    });
  }
  function createDom() {
    $scope.$apply(function() {
      $scope.benchmarkType = benchmarkType;
    });
  }
  var data = $scope.data = [];
  function iGetter() {
    return this.i;
  }
  function jGetter() {
    return this.j;
  }
  for (var i = 0; i < totalRows; i++) {
    data[i] = [];
    for (var j = 0; j < totalColumns; j++) {
      data[i][j] = {
        i: i,
        j: j,
        iFn: iGetter,
        jFn: jGetter
      };
    }
  }
}).directive('baselineBindingTable', function() {
  return {
    restrict: 'E',
    link: function($scope, $element) {
      var i,
          j,
          row,
          cell,
          comment;
      var template = document.createElement('span');
      template.setAttribute('ng-repeat', 'foo in foos');
      template.classList.add('ng-scope');
      template.appendChild(document.createElement('span'));
      template.appendChild(document.createTextNode(':'));
      template.appendChild(document.createElement('span'));
      template.appendChild(document.createTextNode('|'));
      for (i = 0; i < totalRows; i++) {
        row = document.createElement('div');
        $element[0].appendChild(row);
        for (j = 0; j < totalColumns; j++) {
          cell = template.cloneNode(true);
          row.appendChild(cell);
          cell.childNodes[0].textContent = i;
          cell.childNodes[2].textContent = j;
          cell.ng3992 = 'xxx';
          comment = document.createComment('ngRepeat end: bar in foo');
          row.appendChild(comment);
        }
        comment = document.createComment('ngRepeat end: foo in foos');
        $element[0].appendChild(comment);
      }
    }
  };
}).directive('baselineInterpolationTable', function() {
  return {
    restrict: 'E',
    link: function($scope, $element) {
      var i,
          j,
          row,
          cell,
          comment;
      var template = document.createElement('span');
      template.setAttribute('ng-repeat', 'foo in foos');
      template.classList.add('ng-scope');
      for (i = 0; i < totalRows; i++) {
        row = document.createElement('div');
        $element[0].appendChild(row);
        for (j = 0; j < totalColumns; j++) {
          cell = template.cloneNode(true);
          row.appendChild(cell);
          cell.textContent = '' + i + ':' + j + '|';
          cell.ng3992 = 'xxx';
          comment = document.createComment('ngRepeat end: bar in foo');
          row.appendChild(comment);
        }
        comment = document.createComment('ngRepeat end: foo in foos');
        $element[0].appendChild(comment);
      }
    }
  };
});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/benchmarks_external/src/largetable/largetable_benchmark.map

//# sourceMappingURL=./largetable_benchmark.map