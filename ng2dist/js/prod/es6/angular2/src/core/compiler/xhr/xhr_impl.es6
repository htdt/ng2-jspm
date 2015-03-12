import {Promise,
  PromiseWrapper} from 'angular2/src/facade/async';
import {XHR} from './xhr';
export class XHRImpl extends XHR {
  get(url) {
    var completer = PromiseWrapper.completer();
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'text';
    xhr.onload = function() {
      var status = xhr.status;
      if (200 <= status && status <= 300) {
        completer.resolve(xhr.responseText);
      } else {
        completer.reject(`Failed to load ${url}`);
      }
    };
    xhr.onerror = function() {
      completer.reject(`Failed to load ${url}`);
    };
    xhr.send();
    return completer.promise;
  }
}
Object.defineProperty(XHRImpl.prototype.get, "parameters", {get: function() {
    return [[assert.type.string]];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/core/compiler/xhr/xhr_impl.map

//# sourceMappingURL=./xhr_impl.map