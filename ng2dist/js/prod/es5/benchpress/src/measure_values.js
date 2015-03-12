System.register(["angular2/src/facade/lang", "angular2/src/facade/collection"], function($__export) {
  "use strict";
  var Date,
      DateWrapper,
      StringMap,
      MeasureValues;
  return {
    setters: [function($__m) {
      Date = $__m.Date;
      DateWrapper = $__m.DateWrapper;
    }, function($__m) {
      StringMap = $__m.StringMap;
    }],
    execute: function() {
      MeasureValues = $__export("MeasureValues", (function() {
        var MeasureValues = function MeasureValues(runIndex, timeStamp, values) {
          this.timeStamp = timeStamp;
          this.runIndex = runIndex;
          this.values = values;
        };
        return ($traceurRuntime.createClass)(MeasureValues, {toJson: function() {
            return {
              'timeStamp': DateWrapper.toJson(this.timeStamp),
              'runIndex': this.runIndex,
              'values': this.values
            };
          }}, {});
      }()));
      Object.defineProperty(MeasureValues, "parameters", {get: function() {
          return [[assert.type.number], [Date], [StringMap]];
        }});
    }
  };
});

//# sourceMappingURL=benchpress/src/measure_values.map

//# sourceMappingURL=../../benchpress/src/measure_values.js.map