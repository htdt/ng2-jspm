import {assert} from "rtts_assert/rtts_assert";
export var NO_CHANGE = new Object();
export class Pipe {
  supports(obj) {
    return assert.returnType((false), assert.type.boolean);
  }
  onDestroy() {}
  transform(value) {
    assert.argumentTypes(value, assert.type.any);
    return assert.returnType((null), assert.type.any);
  }
}
Object.defineProperty(Pipe.prototype.transform, "parameters", {get: function() {
    return [[assert.type.any]];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/change_detection/pipes/pipe.map

//# sourceMappingURL=./pipe.map