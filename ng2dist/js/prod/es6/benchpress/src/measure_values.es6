import {Date,
  DateWrapper} from 'angular2/src/facade/lang';
import {StringMap} from 'angular2/src/facade/collection';
export class MeasureValues {
  constructor(runIndex, timeStamp, values) {
    this.timeStamp = timeStamp;
    this.runIndex = runIndex;
    this.values = values;
  }
  toJson() {
    return {
      'timeStamp': DateWrapper.toJson(this.timeStamp),
      'runIndex': this.runIndex,
      'values': this.values
    };
  }
}
Object.defineProperty(MeasureValues, "parameters", {get: function() {
    return [[assert.type.number], [Date], [StringMap]];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/benchpress/src/measure_values.map

//# sourceMappingURL=./measure_values.map