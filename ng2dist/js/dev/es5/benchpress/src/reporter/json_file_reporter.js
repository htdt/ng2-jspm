System.register(["rtts_assert/rtts_assert", "angular2/src/facade/lang", "angular2/src/facade/collection", "angular2/src/facade/async", "angular2/di", "../reporter", "../sample_description", "../measure_values"], function($__export) {
  "use strict";
  var assert,
      DateWrapper,
      isPresent,
      isBlank,
      Json,
      List,
      Promise,
      PromiseWrapper,
      bind,
      OpaqueToken,
      Reporter,
      SampleDescription,
      MeasureValues,
      JsonFileReporter,
      _WRITE_FILE,
      _PATH,
      _BINDINGS;
  return {
    setters: [function($__m) {
      assert = $__m.assert;
    }, function($__m) {
      DateWrapper = $__m.DateWrapper;
      isPresent = $__m.isPresent;
      isBlank = $__m.isBlank;
      Json = $__m.Json;
    }, function($__m) {
      List = $__m.List;
    }, function($__m) {
      Promise = $__m.Promise;
      PromiseWrapper = $__m.PromiseWrapper;
    }, function($__m) {
      bind = $__m.bind;
      OpaqueToken = $__m.OpaqueToken;
    }, function($__m) {
      Reporter = $__m.Reporter;
    }, function($__m) {
      SampleDescription = $__m.SampleDescription;
    }, function($__m) {
      MeasureValues = $__m.MeasureValues;
    }],
    execute: function() {
      JsonFileReporter = $__export("JsonFileReporter", (function($__super) {
        var JsonFileReporter = function JsonFileReporter(sampleDescription, path, writeFile) {
          $traceurRuntime.superConstructor(JsonFileReporter).call(this);
          this._description = sampleDescription;
          this._path = path;
          this._writeFile = writeFile;
        };
        return ($traceurRuntime.createClass)(JsonFileReporter, {
          reportMeasureValues: function(measureValues) {
            assert.argumentTypes(measureValues, MeasureValues);
            return assert.returnType((PromiseWrapper.resolve(null)), Promise);
          },
          reportSample: function(completeSample, validSample) {
            assert.argumentTypes(completeSample, assert.genericType(List, MeasureValues), validSample, assert.genericType(List, MeasureValues));
            var content = Json.stringify({
              'description': this._description,
              'completeSample': completeSample,
              'validSample': validSample
            });
            var filePath = (this._path + "/" + this._description.id + "_" + DateWrapper.toMillis(DateWrapper.now()) + ".json");
            return assert.returnType((this._writeFile(filePath, content)), Promise);
          }
        }, {
          get WRITE_FILE() {
            return _WRITE_FILE;
          },
          get PATH() {
            return _PATH;
          },
          get BINDINGS() {
            return _BINDINGS;
          }
        }, $__super);
      }(Reporter)));
      Object.defineProperty(JsonFileReporter.prototype.reportMeasureValues, "parameters", {get: function() {
          return [[MeasureValues]];
        }});
      Object.defineProperty(JsonFileReporter.prototype.reportSample, "parameters", {get: function() {
          return [[assert.genericType(List, MeasureValues)], [assert.genericType(List, MeasureValues)]];
        }});
      _WRITE_FILE = new OpaqueToken('JsonFileReporter.writeFile');
      _PATH = new OpaqueToken('JsonFileReporter.path');
      _BINDINGS = [bind(JsonFileReporter).toFactory((function(sampleDescription, path, writeFile) {
        return new JsonFileReporter(sampleDescription, path, writeFile);
      }), [SampleDescription, _PATH, _WRITE_FILE]), bind(_PATH).toValue('.')];
    }
  };
});

//# sourceMappingURL=benchpress/src/reporter/json_file_reporter.map

//# sourceMappingURL=../../../benchpress/src/reporter/json_file_reporter.js.map