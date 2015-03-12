System.register(["angular2/test_lib", "angular2/src/facade/lang", "angular2/src/facade/async", "benchpress/common", "benchpress/src/reporter/json_file_reporter"], function($__export) {
  "use strict";
  var describe,
      ddescribe,
      it,
      iit,
      xit,
      expect,
      beforeEach,
      afterEach,
      DateWrapper,
      Json,
      RegExpWrapper,
      isPresent,
      PromiseWrapper,
      bind,
      Injector,
      SampleDescription,
      MeasureValues,
      JsonFileReporter;
  function main() {
    describe('file reporter', (function() {
      var loggedFile;
      function createReporter($__0) {
        var $__1 = $__0,
            sampleId = $__1.sampleId,
            descriptions = $__1.descriptions,
            metrics = $__1.metrics,
            path = $__1.path;
        var bindings = [JsonFileReporter.BINDINGS, bind(SampleDescription).toValue(new SampleDescription(sampleId, descriptions, metrics)), bind(JsonFileReporter.PATH).toValue(path), bind(JsonFileReporter.WRITE_FILE).toValue((function(filename, content) {
          loggedFile = {
            'filename': filename,
            'content': content
          };
          return PromiseWrapper.resolve(null);
        }))];
        return new Injector(bindings).get(JsonFileReporter);
      }
      it('should write all data into a file', (function(done) {
        createReporter({
          sampleId: 'someId',
          descriptions: [{'a': 2}],
          path: 'somePath',
          metrics: {'script': 'script time'}
        }).reportSample([mv(0, 0, {
          'a': 3,
          'b': 6
        })], [mv(0, 0, {
          'a': 3,
          'b': 6
        }), mv(1, 1, {
          'a': 5,
          'b': 9
        })]);
        var regExp = RegExpWrapper.create('somePath/someId_\\d+\\.json');
        expect(isPresent(RegExpWrapper.firstMatch(regExp, loggedFile['filename']))).toBe(true);
        var parsedContent = Json.parse(loggedFile['content']);
        expect(parsedContent).toEqual({
          "description": {
            "id": "someId",
            "description": {"a": 2},
            "metrics": {"script": "script time"}
          },
          "completeSample": [{
            "timeStamp": "1970-01-01T00:00:00.000Z",
            "runIndex": 0,
            "values": {
              "a": 3,
              "b": 6
            }
          }],
          "validSample": [{
            "timeStamp": "1970-01-01T00:00:00.000Z",
            "runIndex": 0,
            "values": {
              "a": 3,
              "b": 6
            }
          }, {
            "timeStamp": "1970-01-01T00:00:00.001Z",
            "runIndex": 1,
            "values": {
              "a": 5,
              "b": 9
            }
          }]
        });
        done();
      }));
    }));
  }
  function mv(runIndex, time, values) {
    return new MeasureValues(runIndex, DateWrapper.fromMillis(time), values);
  }
  $__export("main", main);
  return {
    setters: [function($__m) {
      describe = $__m.describe;
      ddescribe = $__m.ddescribe;
      it = $__m.it;
      iit = $__m.iit;
      xit = $__m.xit;
      expect = $__m.expect;
      beforeEach = $__m.beforeEach;
      afterEach = $__m.afterEach;
    }, function($__m) {
      DateWrapper = $__m.DateWrapper;
      Json = $__m.Json;
      RegExpWrapper = $__m.RegExpWrapper;
      isPresent = $__m.isPresent;
    }, function($__m) {
      PromiseWrapper = $__m.PromiseWrapper;
    }, function($__m) {
      bind = $__m.bind;
      Injector = $__m.Injector;
      SampleDescription = $__m.SampleDescription;
      MeasureValues = $__m.MeasureValues;
    }, function($__m) {
      JsonFileReporter = $__m.JsonFileReporter;
    }],
    execute: function() {
    }
  };
});

//# sourceMappingURL=benchpress/test/reporter/json_file_reporter_spec.map

//# sourceMappingURL=../../../benchpress/test/reporter/json_file_reporter_spec.js.map