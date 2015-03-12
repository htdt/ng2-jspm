System.register(["angular2/src/dom/dom_adapter", "rtts_assert/rtts_assert"], function($__export) {
  "use strict";
  var DOM,
      _global,
      describe,
      xdescribe,
      ddescribe,
      it,
      xit,
      iit,
      beforeEach,
      afterEach,
      expect,
      IS_DARTIUM,
      IS_NODEJS,
      SpyObject;
  function elementText(n) {
    if (!IS_NODEJS) {
      var hasNodes = (function(n) {
        var children = DOM.childNodes(n);
        return children && children.length > 0;
      });
      if (n instanceof Comment)
        return '';
      if (n instanceof Array)
        return n.map((function(nn) {
          return elementText(nn);
        })).join("");
      if (n instanceof Element && DOM.tagName(n) == 'CONTENT')
        return elementText(Array.prototype.slice.apply(n.getDistributedNodes()));
      if (DOM.hasShadowRoot(n))
        return elementText(DOM.childNodesAsList(n.shadowRoot));
      if (hasNodes(n))
        return elementText(DOM.childNodesAsList(n));
      return n.textContent;
    } else {
      if (DOM.hasShadowRoot(n)) {
        return elementText(DOM.getShadowRoot(n).childNodes);
      } else if (n instanceof Array) {
        return n.map((function(nn) {
          return elementText(nn);
        })).join("");
      } else if (DOM.tagName(n) == 'content') {
        var host = null;
        var temp = n;
        while (temp.parent) {
          if (DOM.hasShadowRoot(temp)) {
            host = temp;
          }
          temp = temp.parent;
        }
        if (host) {
          var list = [];
          var select = DOM.getAttribute(n, "select");
          var selectClass = select ? select.substring(1) : null;
          DOM.childNodes(host).forEach((function(child) {
            var classList = DOM.classList(child);
            if (selectClass && classList.indexOf(selectClass) > -1 || selectClass == null && classList.length == 0) {
              list.push(child);
            }
          }));
          return list.length > 0 ? elementText(list) : "";
        }
        return "";
      } else {
        return DOM.getText(n);
      }
    }
  }
  return {
    setters: [function($__m) {
      DOM = $__m.DOM;
    }, function($__m) {
      $__export("proxy", $__m.proxy);
    }],
    execute: function() {
      _global = typeof window === 'undefined' ? global : window;
      describe = $__export("describe", _global.describe);
      xdescribe = $__export("xdescribe", _global.xdescribe);
      ddescribe = $__export("ddescribe", _global.ddescribe);
      it = $__export("it", _global.it);
      xit = $__export("xit", _global.xit);
      iit = $__export("iit", _global.iit);
      beforeEach = $__export("beforeEach", _global.beforeEach);
      afterEach = $__export("afterEach", _global.afterEach);
      expect = $__export("expect", _global.expect);
      IS_DARTIUM = $__export("IS_DARTIUM", false);
      IS_NODEJS = $__export("IS_NODEJS", typeof window === 'undefined');
      _global.print = function(msg) {
        if (_global.dump) {
          _global.dump(msg);
        } else {
          _global.console.log(msg);
        }
      };
      _global.Map.prototype.jasmineToString = function() {
        var m = this;
        if (!m) {
          return '' + m;
        }
        var res = [];
        m.forEach((function(v, k) {
          res.push((k + ":" + v));
        }));
        return ("{ " + res.join(',') + " }");
      };
      _global.beforeEach(function() {
        jasmine.addMatchers({
          toEqual: function(util, customEqualityTesters) {
            return {compare: function(actual, expected) {
                return {pass: util.equals(actual, expected, [compareMap])};
              }};
            function compareMap(actual, expected) {
              if (actual instanceof Map) {
                var pass = actual.size === expected.size;
                if (pass) {
                  actual.forEach((function(v, k) {
                    pass = pass && util.equals(v, expected.get(k));
                  }));
                }
                return pass;
              } else {
                return undefined;
              }
            }
          },
          toBePromise: function() {
            return {compare: function(actual, expectedClass) {
                var pass = typeof actual === 'object' && typeof actual.then === 'function';
                return {
                  pass: pass,
                  get message() {
                    return 'Expected ' + actual + ' to be a promise';
                  }
                };
              }};
          },
          toBeAnInstanceOf: function() {
            return {compare: function(actual, expectedClass) {
                var pass = typeof actual === 'object' && actual instanceof expectedClass;
                return {
                  pass: pass,
                  get message() {
                    return 'Expected ' + actual + ' to be an instance of ' + expectedClass;
                  }
                };
              }};
          },
          toHaveText: function() {
            return {compare: function(actual, expectedText) {
                var actualText = elementText(actual);
                return {
                  pass: actualText == expectedText,
                  get message() {
                    return 'Expected ' + actualText + ' to be equal to ' + expectedText;
                  }
                };
              }};
          },
          toImplement: function() {
            return {compare: function(actualObject, expectedInterface) {
                var objProps = Object.keys(actualObject.constructor.prototype);
                var intProps = Object.keys(expectedInterface.prototype);
                var missedMethods = [];
                intProps.forEach((function(k) {
                  if (!actualObject.constructor.prototype[k])
                    missedMethods.push(k);
                }));
                return {
                  pass: missedMethods.length == 0,
                  get message() {
                    return 'Expected ' + actualObject + ' to have the following methods: ' + missedMethods.join(", ");
                  }
                };
              }};
          }
        });
      });
      SpyObject = $__export("SpyObject", (function() {
        var SpyObject = function SpyObject() {};
        return ($traceurRuntime.createClass)(SpyObject, {
          spy: function(name) {
            if (!this[name]) {
              this[name] = this._createGuinnessCompatibleSpy();
            }
            return this[name];
          },
          rttsAssert: function(value) {
            return true;
          },
          _createGuinnessCompatibleSpy: function() {
            var newSpy = jasmine.createSpy();
            newSpy.andCallFake = newSpy.and.callFake;
            return newSpy;
          }
        }, {});
      }()));
    }
  };
});

//# sourceMappingURL=angular2/src/test_lib/test_lib.map

//# sourceMappingURL=../../../angular2/src/test_lib/test_lib.js.map