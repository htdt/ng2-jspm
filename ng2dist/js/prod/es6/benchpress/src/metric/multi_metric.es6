import {bind,
  Injector,
  OpaqueToken} from 'angular2/di';
import {List,
  ListWrapper,
  StringMapWrapper,
  StringMap} from 'angular2/src/facade/collection';
import {Promise,
  PromiseWrapper} from 'angular2/src/facade/async';
import {Metric} from '../metric';
export class MultiMetric extends Metric {
  static createBindings(childTokens) {
    return [bind(_CHILDREN).toAsyncFactory((injector) => PromiseWrapper.all(ListWrapper.map(childTokens, (token) => injector.asyncGet(token))), [Injector]), bind(MultiMetric).toFactory((children) => new MultiMetric(children), [_CHILDREN])];
  }
  constructor(metrics) {
    super();
    this._metrics = metrics;
  }
  beginMeasure() {
    return PromiseWrapper.all(ListWrapper.map(this._metrics, (metric) => metric.beginMeasure()));
  }
  endMeasure(restart) {
    return PromiseWrapper.all(ListWrapper.map(this._metrics, (metric) => metric.endMeasure(restart))).then((values) => {
      return mergeStringMaps(values);
    });
  }
  describe() {
    return mergeStringMaps(this._metrics.map((metric) => metric.describe()));
  }
}
Object.defineProperty(MultiMetric.prototype.endMeasure, "parameters", {get: function() {
    return [[assert.type.boolean]];
  }});
function mergeStringMaps(maps) {
  var result = {};
  ListWrapper.forEach(maps, (map) => {
    StringMapWrapper.forEach(map, (value, prop) => {
      result[prop] = value;
    });
  });
  return result;
}
var _CHILDREN = new OpaqueToken('MultiMetric.children');

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/benchpress/src/metric/multi_metric.map

//# sourceMappingURL=./multi_metric.map