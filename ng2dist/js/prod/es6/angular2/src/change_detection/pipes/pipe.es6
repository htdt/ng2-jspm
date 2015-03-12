export var NO_CHANGE = new Object();
export class Pipe {
  supports(obj) {
    return false;
  }
  onDestroy() {}
  transform(value) {
    return null;
  }
}
Object.defineProperty(Pipe.prototype.transform, "parameters", {get: function() {
    return [[assert.type.any]];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/change_detection/pipes/pipe.map

//# sourceMappingURL=./pipe.map