"use strict";
Object.defineProperties(module.exports, {
  global: {get: function() {
      return _global;
    }},
  Type: {get: function() {
      return Type;
    }},
  Math: {get: function() {
      return Math;
    }},
  Date: {get: function() {
      return Date;
    }},
  int: {get: function() {
      return int;
    }},
  FIELD: {get: function() {
      return FIELD;
    }},
  CONST: {get: function() {
      return CONST;
    }},
  ABSTRACT: {get: function() {
      return ABSTRACT;
    }},
  IMPLEMENTS: {get: function() {
      return IMPLEMENTS;
    }},
  isPresent: {get: function() {
      return isPresent;
    }},
  isBlank: {get: function() {
      return isBlank;
    }},
  isString: {get: function() {
      return isString;
    }},
  stringify: {get: function() {
      return stringify;
    }},
  StringWrapper: {get: function() {
      return StringWrapper;
    }},
  StringJoiner: {get: function() {
      return StringJoiner;
    }},
  NumberParseError: {get: function() {
      return NumberParseError;
    }},
  NumberWrapper: {get: function() {
      return NumberWrapper;
    }},
  RegExp: {get: function() {
      return RegExp;
    }},
  RegExpWrapper: {get: function() {
      return RegExpWrapper;
    }},
  RegExpMatcherWrapper: {get: function() {
      return RegExpMatcherWrapper;
    }},
  FunctionWrapper: {get: function() {
      return FunctionWrapper;
    }},
  BaseException: {get: function() {
      return BaseException;
    }},
  looseIdentical: {get: function() {
      return looseIdentical;
    }},
  getMapKey: {get: function() {
      return getMapKey;
    }},
  normalizeBlank: {get: function() {
      return normalizeBlank;
    }},
  isJsObject: {get: function() {
      return isJsObject;
    }},
  assertionsEnabled: {get: function() {
      return assertionsEnabled;
    }},
  print: {get: function() {
      return print;
    }},
  Json: {get: function() {
      return Json;
    }},
  DateWrapper: {get: function() {
      return DateWrapper;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/src/facade/lang";
var $__rtts_95_assert_47_rtts_95_assert__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var _global = typeof window === 'undefined' ? global : window;
;
var Type = Function;
var Math = _global.Math;
var Date = _global.Date;
var assertionsEnabled_ = typeof assert !== 'undefined';
var int;
if (assertionsEnabled_) {
  _global.assert = assert;
  int = assert.define('int', function(value) {
    return typeof value === 'number' && value % 1 === 0;
  });
} else {
  int = {};
  _global.assert = function() {};
}
;
var FIELD = function FIELD(definition) {
  this.definition = definition;
};
($traceurRuntime.createClass)(FIELD, {}, {});
var CONST = function CONST() {};
($traceurRuntime.createClass)(CONST, {}, {});
var ABSTRACT = function ABSTRACT() {};
($traceurRuntime.createClass)(ABSTRACT, {}, {});
var IMPLEMENTS = function IMPLEMENTS() {};
($traceurRuntime.createClass)(IMPLEMENTS, {}, {});
function isPresent(obj) {
  return assert.returnType((obj !== undefined && obj !== null), assert.type.boolean);
}
function isBlank(obj) {
  return assert.returnType((obj === undefined || obj === null), assert.type.boolean);
}
function isString(obj) {
  return assert.returnType((typeof obj === "string"), assert.type.boolean);
}
function stringify(token) {
  if (typeof token === 'string') {
    return assert.returnType((token), assert.type.string);
  }
  if (token === undefined || token === null) {
    return assert.returnType(('' + token), assert.type.string);
  }
  if (token.name) {
    return assert.returnType((token.name), assert.type.string);
  }
  return assert.returnType((token.toString()), assert.type.string);
}
var StringWrapper = function StringWrapper() {};
($traceurRuntime.createClass)(StringWrapper, {}, {
  fromCharCode: function(code) {
    assert.argumentTypes(code, int);
    return assert.returnType((String.fromCharCode(code)), assert.type.string);
  },
  charCodeAt: function(s, index) {
    assert.argumentTypes(s, assert.type.string, index, int);
    return s.charCodeAt(index);
  },
  split: function(s, regExp) {
    assert.argumentTypes(s, assert.type.string, regExp, RegExp);
    return s.split(regExp.multiple);
  },
  equals: function(s, s2) {
    assert.argumentTypes(s, assert.type.string, s2, assert.type.string);
    return assert.returnType((s === s2), assert.type.boolean);
  },
  replace: function(s, from, replace) {
    assert.argumentTypes(s, assert.type.string, from, assert.type.any, replace, assert.type.string);
    if (typeof(from) === "string") {
      return assert.returnType((s.replace(from, replace)), assert.type.string);
    } else {
      return assert.returnType((s.replace(from.single, replace)), assert.type.string);
    }
  },
  replaceAll: function(s, from, replace) {
    assert.argumentTypes(s, assert.type.string, from, RegExp, replace, assert.type.string);
    return assert.returnType((s.replace(from.multiple, replace)), assert.type.string);
  },
  startsWith: function(s, start) {
    assert.argumentTypes(s, assert.type.string, start, assert.type.string);
    return s.startsWith(start);
  },
  substring: function(s, start) {
    var end = arguments[2] !== (void 0) ? arguments[2] : null;
    assert.argumentTypes(s, assert.type.string, start, int, end, int);
    return s.substring(start, end === null ? undefined : end);
  },
  replaceAllMapped: function(s, from, cb) {
    assert.argumentTypes(s, assert.type.string, from, RegExp, cb, Function);
    return assert.returnType((s.replace(from.multiple, function() {
      for (var matches = [],
          $__2 = 0; $__2 < arguments.length; $__2++)
        matches[$__2] = arguments[$__2];
      matches.splice(-2, 2);
      return cb(matches);
    })), assert.type.string);
  },
  contains: function(s, substr) {
    assert.argumentTypes(s, assert.type.string, substr, assert.type.string);
    return assert.returnType((s.indexOf(substr) != -1), assert.type.boolean);
  }
});
Object.defineProperty(StringWrapper.fromCharCode, "parameters", {get: function() {
    return [[int]];
  }});
Object.defineProperty(StringWrapper.charCodeAt, "parameters", {get: function() {
    return [[assert.type.string], [int]];
  }});
Object.defineProperty(StringWrapper.split, "parameters", {get: function() {
    return [[assert.type.string], [RegExp]];
  }});
Object.defineProperty(StringWrapper.equals, "parameters", {get: function() {
    return [[assert.type.string], [assert.type.string]];
  }});
Object.defineProperty(StringWrapper.replace, "parameters", {get: function() {
    return [[assert.type.string], [], [assert.type.string]];
  }});
Object.defineProperty(StringWrapper.replaceAll, "parameters", {get: function() {
    return [[assert.type.string], [RegExp], [assert.type.string]];
  }});
Object.defineProperty(StringWrapper.startsWith, "parameters", {get: function() {
    return [[assert.type.string], [assert.type.string]];
  }});
Object.defineProperty(StringWrapper.substring, "parameters", {get: function() {
    return [[assert.type.string], [int], [int]];
  }});
Object.defineProperty(StringWrapper.replaceAllMapped, "parameters", {get: function() {
    return [[assert.type.string], [RegExp], [Function]];
  }});
Object.defineProperty(StringWrapper.contains, "parameters", {get: function() {
    return [[assert.type.string], [assert.type.string]];
  }});
var StringJoiner = function StringJoiner() {
  this.parts = [];
};
($traceurRuntime.createClass)(StringJoiner, {
  add: function(part) {
    assert.argumentTypes(part, assert.type.string);
    this.parts.push(part);
  },
  toString: function() {
    return assert.returnType((this.parts.join("")), assert.type.string);
  }
}, {});
Object.defineProperty(StringJoiner.prototype.add, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
var NumberParseError = function NumberParseError(message) {
  $traceurRuntime.superConstructor($NumberParseError).call(this);
  this.message = message;
};
var $NumberParseError = NumberParseError;
($traceurRuntime.createClass)(NumberParseError, {toString: function() {
    return this.message;
  }}, {}, Error);
var NumberWrapper = function NumberWrapper() {};
($traceurRuntime.createClass)(NumberWrapper, {}, {
  toFixed: function(n, fractionDigits) {
    assert.argumentTypes(n, assert.type.number, fractionDigits, int);
    return assert.returnType((n.toFixed(fractionDigits)), assert.type.string);
  },
  equal: function(a, b) {
    return assert.returnType((a === b), assert.type.boolean);
  },
  parseIntAutoRadix: function(text) {
    assert.argumentTypes(text, assert.type.string);
    var result = assert.type(parseInt(text), int);
    if (isNaN(result)) {
      throw new NumberParseError("Invalid integer literal when parsing " + text);
    }
    return assert.returnType((result), int);
  },
  parseInt: function(text, radix) {
    assert.argumentTypes(text, assert.type.string, radix, int);
    if (radix == 10) {
      if (/^(\-|\+)?[0-9]+$/.test(text)) {
        return assert.returnType((parseInt(text, radix)), int);
      }
    } else if (radix == 16) {
      if (/^(\-|\+)?[0-9ABCDEFabcdef]+$/.test(text)) {
        return assert.returnType((parseInt(text, radix)), int);
      }
    } else {
      var result = assert.type(parseInt(text, radix), int);
      if (!isNaN(result)) {
        return assert.returnType((result), int);
      }
    }
    throw new NumberParseError("Invalid integer literal when parsing " + text + " in base " + radix);
  },
  parseFloat: function(text) {
    assert.argumentTypes(text, assert.type.string);
    return assert.returnType((parseFloat(text)), assert.type.number);
  },
  get NaN() {
    return assert.returnType((NaN), assert.type.number);
  },
  isNaN: function(value) {
    return assert.returnType((isNaN(value)), assert.type.boolean);
  },
  isInteger: function(value) {
    return assert.returnType((Number.isInteger(value)), assert.type.boolean);
  }
});
Object.defineProperty(NumberWrapper.toFixed, "parameters", {get: function() {
    return [[assert.type.number], [int]];
  }});
Object.defineProperty(NumberWrapper.parseIntAutoRadix, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
Object.defineProperty(NumberWrapper.parseInt, "parameters", {get: function() {
    return [[assert.type.string], [int]];
  }});
Object.defineProperty(NumberWrapper.parseFloat, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
var RegExp;
if (assertionsEnabled_) {
  RegExp = assert.define('RegExp', function(obj) {
    assert(obj).is(assert.structure({
      single: _global.RegExp,
      multiple: _global.RegExp
    }));
  });
} else {
  RegExp = {};
}
var RegExpWrapper = function RegExpWrapper() {};
($traceurRuntime.createClass)(RegExpWrapper, {}, {
  create: function(regExpStr) {
    var flags = arguments[1] !== (void 0) ? arguments[1] : '';
    assert.argumentTypes(regExpStr, assert.type.any, flags, assert.type.string);
    flags = flags.replace(/g/g, '');
    return assert.returnType(({
      multiple: new _global.RegExp(regExpStr, flags + 'g'),
      single: new _global.RegExp(regExpStr, flags)
    }), RegExp);
  },
  firstMatch: function(regExp, input) {
    return input.match(regExp.single);
  },
  matcher: function(regExp, input) {
    return {
      re: regExp.multiple,
      input: input
    };
  }
});
Object.defineProperty(RegExpWrapper.create, "parameters", {get: function() {
    return [[], [assert.type.string]];
  }});
var RegExpMatcherWrapper = function RegExpMatcherWrapper() {};
($traceurRuntime.createClass)(RegExpMatcherWrapper, {}, {next: function(matcher) {
    return matcher.re.exec(matcher.input);
  }});
var FunctionWrapper = function FunctionWrapper() {};
($traceurRuntime.createClass)(FunctionWrapper, {}, {apply: function(fn, posArgs) {
    assert.argumentTypes(fn, Function, posArgs, assert.type.any);
    return fn.apply(null, posArgs);
  }});
Object.defineProperty(FunctionWrapper.apply, "parameters", {get: function() {
    return [[Function], []];
  }});
var BaseException = Error;
function looseIdentical(a, b) {
  return assert.returnType((a === b || typeof a === "number" && typeof b === "number" && isNaN(a) && isNaN(b)), assert.type.boolean);
}
function getMapKey(value) {
  return value;
}
function normalizeBlank(obj) {
  return isBlank(obj) ? null : obj;
}
function isJsObject(o) {
  return assert.returnType((o !== null && (typeof o === "function" || typeof o === "object")), assert.type.boolean);
}
function assertionsEnabled() {
  return assert.returnType((assertionsEnabled_), assert.type.boolean);
}
function print(obj) {
  if (obj instanceof Error) {
    console.log(obj.stack);
  } else {
    console.log(obj);
  }
}
var Json = _global.JSON;
var DateWrapper = function DateWrapper() {};
($traceurRuntime.createClass)(DateWrapper, {}, {
  fromMillis: function(ms) {
    return new Date(ms);
  },
  toMillis: function(date) {
    assert.argumentTypes(date, Date);
    return date.getTime();
  },
  now: function() {
    return new Date();
  },
  toJson: function(date) {
    return date.toJSON();
  }
});
Object.defineProperty(DateWrapper.toMillis, "parameters", {get: function() {
    return [[Date]];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/facade/lang.map

//# sourceMappingURL=./lang.map