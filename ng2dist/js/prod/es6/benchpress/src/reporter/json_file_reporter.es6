import {DateWrapper,
  isPresent,
  isBlank,
  Json} from 'angular2/src/facade/lang';
import {List} from 'angular2/src/facade/collection';
import {Promise,
  PromiseWrapper} from 'angular2/src/facade/async';
import {bind,
  OpaqueToken} from 'angular2/di';
import {Reporter} from '../reporter';
import {SampleDescription} from '../sample_description';
import {MeasureValues} from '../measure_values';
export class JsonFileReporter extends Reporter {
  static get WRITE_FILE() {
    return _WRITE_FILE;
  }
  static get PATH() {
    return _PATH;
  }
  static get BINDINGS() {
    return _BINDINGS;
  }
  constructor(sampleDescription, path, writeFile) {
    super();
    this._description = sampleDescription;
    this._path = path;
    this._writeFile = writeFile;
  }
  reportMeasureValues(measureValues) {
    return PromiseWrapper.resolve(null);
  }
  reportSample(completeSample, validSample) {
    var content = Json.stringify({
      'description': this._description,
      'completeSample': completeSample,
      'validSample': validSample
    });
    var filePath = `${this._path}/${this._description.id}_${DateWrapper.toMillis(DateWrapper.now())}.json`;
    return this._writeFile(filePath, content);
  }
}
Object.defineProperty(JsonFileReporter.prototype.reportMeasureValues, "parameters", {get: function() {
    return [[MeasureValues]];
  }});
Object.defineProperty(JsonFileReporter.prototype.reportSample, "parameters", {get: function() {
    return [[assert.genericType(List, MeasureValues)], [assert.genericType(List, MeasureValues)]];
  }});
var _WRITE_FILE = new OpaqueToken('JsonFileReporter.writeFile');
var _PATH = new OpaqueToken('JsonFileReporter.path');
var _BINDINGS = [bind(JsonFileReporter).toFactory((sampleDescription, path, writeFile) => new JsonFileReporter(sampleDescription, path, writeFile), [SampleDescription, _PATH, _WRITE_FILE]), bind(_PATH).toValue('.')];

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/benchpress/src/reporter/json_file_reporter.map

//# sourceMappingURL=./json_file_reporter.map