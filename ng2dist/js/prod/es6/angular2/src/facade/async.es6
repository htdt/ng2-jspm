import {int,
  global} from 'angular2/src/facade/lang';
import {List} from 'angular2/src/facade/collection';
export var Promise = global.Promise;
export class PromiseWrapper {
  static resolve(obj) {
    return Promise.resolve(obj);
  }
  static reject(obj) {
    return Promise.reject(obj);
  }
  static catchError(promise, onError) {
    return promise.catch(onError);
  }
  static all(promises) {
    if (promises.length == 0)
      return Promise.resolve([]);
    return Promise.all(promises);
  }
  static then(promise, success, rejection) {
    return promise.then(success, rejection);
  }
  static completer() {
    var resolve;
    var reject;
    var p = new Promise(function(res, rej) {
      resolve = res;
      reject = rej;
    });
    return {
      promise: p,
      resolve: resolve,
      reject: reject
    };
  }
  static setTimeout(fn, millis) {
    global.setTimeout(fn, millis);
  }
  static isPromise(maybePromise) {
    return maybePromise instanceof Promise;
  }
}
Object.defineProperty(PromiseWrapper.catchError, "parameters", {get: function() {
    return [[Promise], [Function]];
  }});
Object.defineProperty(PromiseWrapper.all, "parameters", {get: function() {
    return [[List]];
  }});
Object.defineProperty(PromiseWrapper.then, "parameters", {get: function() {
    return [[Promise], [Function], [Function]];
  }});
Object.defineProperty(PromiseWrapper.setTimeout, "parameters", {get: function() {
    return [[Function], [int]];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/facade/async.map

//# sourceMappingURL=./async.map