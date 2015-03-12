import {isPresent} from 'angular2/src/facade/lang';
import {List,
  ListWrapper} from 'angular2/src/facade/collection';
import {ChangeDetector,
  CHECK_ALWAYS,
  CHECK_ONCE,
  CHECKED,
  DETACHED} from './interfaces';
export class AbstractChangeDetector extends ChangeDetector {
  constructor() {
    super();
    this.children = [];
    this.mode = CHECK_ALWAYS;
  }
  addChild(cd) {
    ListWrapper.push(this.children, cd);
    cd.parent = this;
  }
  removeChild(cd) {
    ListWrapper.remove(this.children, cd);
  }
  remove() {
    this.parent.removeChild(this);
  }
  detectChanges() {
    this._detectChanges(false);
  }
  checkNoChanges() {
    this._detectChanges(true);
  }
  _detectChanges(throwOnChange) {
    if (this.mode === DETACHED || this.mode === CHECKED)
      return ;
    this.detectChangesInRecords(throwOnChange);
    this._detectChangesInChildren(throwOnChange);
    if (this.mode === CHECK_ONCE)
      this.mode = CHECKED;
  }
  detectChangesInRecords(throwOnChange) {}
  _detectChangesInChildren(throwOnChange) {
    var children = this.children;
    for (var i = 0; i < children.length; ++i) {
      children[i]._detectChanges(throwOnChange);
    }
  }
  markPathToRootAsCheckOnce() {
    var c = this;
    while (isPresent(c) && c.mode != DETACHED) {
      if (c.mode === CHECKED)
        c.mode = CHECK_ONCE;
      c = c.parent;
    }
  }
}
Object.defineProperty(AbstractChangeDetector.prototype.addChild, "parameters", {get: function() {
    return [[ChangeDetector]];
  }});
Object.defineProperty(AbstractChangeDetector.prototype.removeChild, "parameters", {get: function() {
    return [[ChangeDetector]];
  }});
Object.defineProperty(AbstractChangeDetector.prototype._detectChanges, "parameters", {get: function() {
    return [[assert.type.boolean]];
  }});
Object.defineProperty(AbstractChangeDetector.prototype.detectChangesInRecords, "parameters", {get: function() {
    return [[assert.type.boolean]];
  }});
Object.defineProperty(AbstractChangeDetector.prototype._detectChangesInChildren, "parameters", {get: function() {
    return [[assert.type.boolean]];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/change_detection/abstract_change_detector.map

//# sourceMappingURL=./abstract_change_detector.map