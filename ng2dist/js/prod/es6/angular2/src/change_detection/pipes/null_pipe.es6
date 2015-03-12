import {isBlank} from 'angular2/src/facade/lang';
import {Pipe,
  NO_CHANGE} from './pipe';
export class NullPipeFactory {
  supports(obj) {
    return NullPipe.supportsObj(obj);
  }
  create() {
    return new NullPipe();
  }
}
export class NullPipe extends Pipe {
  constructor() {
    super();
    this.called = false;
  }
  static supportsObj(obj) {
    return isBlank(obj);
  }
  supports(obj) {
    return NullPipe.supportsObj(obj);
  }
  transform(value) {
    if (!this.called) {
      this.called = true;
      return null;
    } else {
      return NO_CHANGE;
    }
  }
}

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/change_detection/pipes/null_pipe.map

//# sourceMappingURL=./null_pipe.map