import {DOM} from 'angular2/src/dom/dom_adapter';
export class Title {
  getTitle() {
    return DOM.getTitle();
  }
  setTitle(newTitle) {
    DOM.setTitle(newTitle);
  }
}
Object.defineProperty(Title.prototype.setTitle, "parameters", {get: function() {
    return [[assert.type.string]];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/services/title.map

//# sourceMappingURL=./title.map