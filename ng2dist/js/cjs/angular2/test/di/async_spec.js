var parse5Adapter = require('angular2/src/dom/parse5_adapter');
parse5Adapter.Parse5DomAdapter.makeCurrent();
"use strict";
Object.defineProperties(module.exports, {
  main: {get: function() {
      return main;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/test/di/async_spec";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_test_95_lib__,
    $__angular2_47_di__,
    $__angular2_47_src_47_facade_47_async__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var $__1 = ($__angular2_47_test_95_lib__ = require("angular2/test_lib"), $__angular2_47_test_95_lib__ && $__angular2_47_test_95_lib__.__esModule && $__angular2_47_test_95_lib__ || {default: $__angular2_47_test_95_lib__}),
    ddescribe = $__1.ddescribe,
    describe = $__1.describe,
    it = $__1.it,
    iit = $__1.iit,
    xit = $__1.xit,
    expect = $__1.expect,
    beforeEach = $__1.beforeEach;
var $__2 = ($__angular2_47_di__ = require("angular2/di"), $__angular2_47_di__ && $__angular2_47_di__.__esModule && $__angular2_47_di__ || {default: $__angular2_47_di__}),
    Injector = $__2.Injector,
    Inject = $__2.Inject,
    InjectPromise = $__2.InjectPromise,
    bind = $__2.bind,
    Key = $__2.Key;
var $__3 = ($__angular2_47_src_47_facade_47_async__ = require("angular2/src/facade/async"), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}),
    Promise = $__3.Promise,
    PromiseWrapper = $__3.PromiseWrapper;
var UserList = function UserList() {};
($traceurRuntime.createClass)(UserList, {}, {});
function fetchUsers() {
  return PromiseWrapper.resolve(new UserList());
}
var SynchronousUserList = function SynchronousUserList() {};
($traceurRuntime.createClass)(SynchronousUserList, {}, {});
var UserController = function UserController(list) {
  assert.argumentTypes(list, UserList);
  this.list = list;
};
($traceurRuntime.createClass)(UserController, {}, {});
Object.defineProperty(UserController, "parameters", {get: function() {
    return [[UserList]];
  }});
var AsyncUserController = function AsyncUserController(userList) {
  this.userList = userList;
};
($traceurRuntime.createClass)(AsyncUserController, {}, {});
Object.defineProperty(AsyncUserController, "parameters", {get: function() {
    return [[new InjectPromise(UserList)]];
  }});
function main() {
  describe("async injection", function() {
    describe("asyncGet", function() {
      it('should return a promise', function() {
        var injector = new Injector([bind(UserList).toAsyncFactory(fetchUsers)]);
        var p = injector.asyncGet(UserList);
        expect(p).toBePromise();
      });
      it('should return a promise when the binding is sync', function() {
        var injector = new Injector([SynchronousUserList]);
        var p = injector.asyncGet(SynchronousUserList);
        expect(p).toBePromise();
      });
      it("should return a promise when the binding is sync (from cache)", function() {
        var injector = new Injector([UserList]);
        expect(injector.get(UserList)).toBeAnInstanceOf(UserList);
        expect(injector.asyncGet(UserList)).toBePromise();
      });
      it('should return the injector', function(done) {
        var injector = new Injector([]);
        var p = injector.asyncGet(Injector);
        p.then(function(injector) {
          expect(injector).toBe(injector);
          done();
        });
      });
      it('should return a promise when instantiating a sync binding ' + 'with an async dependency', function(done) {
        var injector = new Injector([bind(UserList).toAsyncFactory(fetchUsers), UserController]);
        injector.asyncGet(UserController).then(function(userController) {
          expect(userController).toBeAnInstanceOf(UserController);
          expect(userController.list).toBeAnInstanceOf(UserList);
          done();
        });
      });
      it("should create only one instance (async + async)", function(done) {
        var injector = new Injector([bind(UserList).toAsyncFactory(fetchUsers)]);
        var ul1 = injector.asyncGet(UserList);
        var ul2 = injector.asyncGet(UserList);
        PromiseWrapper.all([ul1, ul2]).then(function(uls) {
          expect(uls[0]).toBe(uls[1]);
          done();
        });
      });
      it("should create only one instance (sync + async)", function(done) {
        var injector = new Injector([UserList]);
        var promise = injector.asyncGet(UserList);
        var ul = injector.get(UserList);
        expect(promise).toBePromise();
        expect(ul).toBeAnInstanceOf(UserList);
        promise.then(function(ful) {
          expect(ful).toBe(ul);
          done();
        });
      });
      it('should show the full path when error happens in a constructor', function(done) {
        var injector = new Injector([UserController, bind(UserList).toAsyncFactory(function() {
          throw "Broken UserList";
        })]);
        var promise = injector.asyncGet(UserController);
        PromiseWrapper.then(promise, null, function(e) {
          expect(e.message).toContain("Error during instantiation of UserList! (UserController -> UserList)");
          done();
        });
      });
    });
    describe("get", function() {
      it('should throw when instantiating an async binding', function() {
        var injector = new Injector([bind(UserList).toAsyncFactory(fetchUsers)]);
        expect((function() {
          return injector.get(UserList);
        })).toThrowError('Cannot instantiate UserList synchronously. It is provided as a promise!');
      });
      it('should throw when instantiating a sync binding with an dependency', function() {
        var injector = new Injector([bind(UserList).toAsyncFactory(fetchUsers), UserController]);
        expect((function() {
          return injector.get(UserController);
        })).toThrowError('Cannot instantiate UserList synchronously. It is provided as a promise! (UserController -> UserList)');
      });
      it('should resolve synchronously when an async dependency requested as a promise', function() {
        var injector = new Injector([bind(UserList).toAsyncFactory(fetchUsers), AsyncUserController]);
        var controller = injector.get(AsyncUserController);
        expect(controller).toBeAnInstanceOf(AsyncUserController);
        expect(controller.userList).toBePromise();
      });
      it('should wrap sync dependencies into promises if required', function() {
        var injector = new Injector([bind(UserList).toFactory((function() {
          return new UserList();
        })), AsyncUserController]);
        var controller = injector.get(AsyncUserController);
        expect(controller).toBeAnInstanceOf(AsyncUserController);
        expect(controller.userList).toBePromise();
      });
    });
  });
}

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/test/di/async_spec.map

//# sourceMappingURL=./async_spec.map
 main();