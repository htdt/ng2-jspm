"use strict";
Object.defineProperties(module.exports, {
  AST: {get: function() {
      return AST;
    }},
  EmptyExpr: {get: function() {
      return EmptyExpr;
    }},
  ImplicitReceiver: {get: function() {
      return ImplicitReceiver;
    }},
  Chain: {get: function() {
      return Chain;
    }},
  Conditional: {get: function() {
      return Conditional;
    }},
  AccessMember: {get: function() {
      return AccessMember;
    }},
  KeyedAccess: {get: function() {
      return KeyedAccess;
    }},
  Pipe: {get: function() {
      return Pipe;
    }},
  LiteralPrimitive: {get: function() {
      return LiteralPrimitive;
    }},
  LiteralArray: {get: function() {
      return LiteralArray;
    }},
  LiteralMap: {get: function() {
      return LiteralMap;
    }},
  Interpolation: {get: function() {
      return Interpolation;
    }},
  Binary: {get: function() {
      return Binary;
    }},
  PrefixNot: {get: function() {
      return PrefixNot;
    }},
  Assignment: {get: function() {
      return Assignment;
    }},
  MethodCall: {get: function() {
      return MethodCall;
    }},
  FunctionCall: {get: function() {
      return FunctionCall;
    }},
  ASTWithSource: {get: function() {
      return ASTWithSource;
    }},
  TemplateBinding: {get: function() {
      return TemplateBinding;
    }},
  AstVisitor: {get: function() {
      return AstVisitor;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/src/change_detection/parser/ast";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_change_95_detection_47_parser_47_context_95_with_95_variable_95_bindings__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var $__1 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    FIELD = $__1.FIELD,
    autoConvertAdd = $__1.autoConvertAdd,
    isBlank = $__1.isBlank,
    isPresent = $__1.isPresent,
    FunctionWrapper = $__1.FunctionWrapper,
    BaseException = $__1.BaseException;
var $__2 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    List = $__2.List,
    Map = $__2.Map,
    ListWrapper = $__2.ListWrapper,
    StringMapWrapper = $__2.StringMapWrapper;
var ContextWithVariableBindings = ($__angular2_47_src_47_change_95_detection_47_parser_47_context_95_with_95_variable_95_bindings__ = require("./context_with_variable_bindings"), $__angular2_47_src_47_change_95_detection_47_parser_47_context_95_with_95_variable_95_bindings__ && $__angular2_47_src_47_change_95_detection_47_parser_47_context_95_with_95_variable_95_bindings__.__esModule && $__angular2_47_src_47_change_95_detection_47_parser_47_context_95_with_95_variable_95_bindings__ || {default: $__angular2_47_src_47_change_95_detection_47_parser_47_context_95_with_95_variable_95_bindings__}).ContextWithVariableBindings;
var AST = function AST() {};
($traceurRuntime.createClass)(AST, {
  eval: function(context) {
    throw new BaseException("Not supported");
  },
  get isAssignable() {
    return false;
  },
  assign: function(context, value) {
    throw new BaseException("Not supported");
  },
  visit: function(visitor) {},
  toString: function() {
    return assert.returnType(("AST"), assert.type.string);
  }
}, {});
var EmptyExpr = function EmptyExpr() {
  $traceurRuntime.superConstructor($EmptyExpr).apply(this, arguments);
};
var $EmptyExpr = EmptyExpr;
($traceurRuntime.createClass)(EmptyExpr, {
  eval: function(context) {
    return null;
  },
  visit: function(visitor) {}
}, {}, AST);
var ImplicitReceiver = function ImplicitReceiver() {
  $traceurRuntime.superConstructor($ImplicitReceiver).apply(this, arguments);
};
var $ImplicitReceiver = ImplicitReceiver;
($traceurRuntime.createClass)(ImplicitReceiver, {
  eval: function(context) {
    return context;
  },
  visit: function(visitor) {
    return visitor.visitImplicitReceiver(this);
  }
}, {}, AST);
var Chain = function Chain(expressions) {
  assert.argumentTypes(expressions, List);
  $traceurRuntime.superConstructor($Chain).call(this);
  this.expressions = expressions;
};
var $Chain = Chain;
($traceurRuntime.createClass)(Chain, {
  eval: function(context) {
    var result;
    for (var i = 0; i < this.expressions.length; i++) {
      var last = this.expressions[i].eval(context);
      if (isPresent(last))
        result = last;
    }
    return result;
  },
  visit: function(visitor) {
    return visitor.visitChain(this);
  }
}, {}, AST);
Object.defineProperty(Chain, "parameters", {get: function() {
    return [[List]];
  }});
var Conditional = function Conditional(condition, trueExp, falseExp) {
  assert.argumentTypes(condition, AST, trueExp, AST, falseExp, AST);
  $traceurRuntime.superConstructor($Conditional).call(this);
  this.condition = condition;
  this.trueExp = trueExp;
  this.falseExp = falseExp;
};
var $Conditional = Conditional;
($traceurRuntime.createClass)(Conditional, {
  eval: function(context) {
    if (this.condition.eval(context)) {
      return this.trueExp.eval(context);
    } else {
      return this.falseExp.eval(context);
    }
  },
  visit: function(visitor) {
    return visitor.visitConditional(this);
  }
}, {}, AST);
Object.defineProperty(Conditional, "parameters", {get: function() {
    return [[AST], [AST], [AST]];
  }});
var AccessMember = function AccessMember(receiver, name, getter, setter) {
  assert.argumentTypes(receiver, AST, name, assert.type.string, getter, Function, setter, Function);
  $traceurRuntime.superConstructor($AccessMember).call(this);
  this.receiver = receiver;
  this.name = name;
  this.getter = getter;
  this.setter = setter;
};
var $AccessMember = AccessMember;
($traceurRuntime.createClass)(AccessMember, {
  eval: function(context) {
    var evaluatedContext = this.receiver.eval(context);
    while (evaluatedContext instanceof ContextWithVariableBindings) {
      if (evaluatedContext.hasBinding(this.name)) {
        return evaluatedContext.get(this.name);
      }
      evaluatedContext = evaluatedContext.parent;
    }
    return this.getter(evaluatedContext);
  },
  get isAssignable() {
    return true;
  },
  assign: function(context, value) {
    var evaluatedContext = this.receiver.eval(context);
    while (evaluatedContext instanceof ContextWithVariableBindings) {
      if (evaluatedContext.hasBinding(this.name)) {
        throw new BaseException(("Cannot reassign a variable binding " + this.name));
      }
      evaluatedContext = evaluatedContext.parent;
    }
    return this.setter(evaluatedContext, value);
  },
  visit: function(visitor) {
    return visitor.visitAccessMember(this);
  }
}, {}, AST);
Object.defineProperty(AccessMember, "parameters", {get: function() {
    return [[AST], [assert.type.string], [Function], [Function]];
  }});
var KeyedAccess = function KeyedAccess(obj, key) {
  assert.argumentTypes(obj, AST, key, AST);
  $traceurRuntime.superConstructor($KeyedAccess).call(this);
  this.obj = obj;
  this.key = key;
};
var $KeyedAccess = KeyedAccess;
($traceurRuntime.createClass)(KeyedAccess, {
  eval: function(context) {
    var obj = this.obj.eval(context);
    var key = this.key.eval(context);
    return obj[key];
  },
  get isAssignable() {
    return true;
  },
  assign: function(context, value) {
    var obj = this.obj.eval(context);
    var key = this.key.eval(context);
    obj[key] = value;
    return value;
  },
  visit: function(visitor) {
    return visitor.visitKeyedAccess(this);
  }
}, {}, AST);
Object.defineProperty(KeyedAccess, "parameters", {get: function() {
    return [[AST], [AST]];
  }});
var Pipe = function Pipe(exp, name, args) {
  assert.argumentTypes(exp, AST, name, assert.type.string, args, List);
  $traceurRuntime.superConstructor($Pipe).call(this);
  this.exp = exp;
  this.name = name;
  this.args = args;
};
var $Pipe = Pipe;
($traceurRuntime.createClass)(Pipe, {visit: function(visitor) {
    return visitor.visitPipe(this);
  }}, {}, AST);
Object.defineProperty(Pipe, "parameters", {get: function() {
    return [[AST], [assert.type.string], [List]];
  }});
var LiteralPrimitive = function LiteralPrimitive(value) {
  $traceurRuntime.superConstructor($LiteralPrimitive).call(this);
  this.value = value;
};
var $LiteralPrimitive = LiteralPrimitive;
($traceurRuntime.createClass)(LiteralPrimitive, {
  eval: function(context) {
    return this.value;
  },
  visit: function(visitor) {
    return visitor.visitLiteralPrimitive(this);
  }
}, {}, AST);
var LiteralArray = function LiteralArray(expressions) {
  assert.argumentTypes(expressions, List);
  $traceurRuntime.superConstructor($LiteralArray).call(this);
  this.expressions = expressions;
};
var $LiteralArray = LiteralArray;
($traceurRuntime.createClass)(LiteralArray, {
  eval: function(context) {
    return ListWrapper.map(this.expressions, (function(e) {
      return e.eval(context);
    }));
  },
  visit: function(visitor) {
    return visitor.visitLiteralArray(this);
  }
}, {}, AST);
Object.defineProperty(LiteralArray, "parameters", {get: function() {
    return [[List]];
  }});
var LiteralMap = function LiteralMap(keys, values) {
  assert.argumentTypes(keys, List, values, List);
  $traceurRuntime.superConstructor($LiteralMap).call(this);
  this.keys = keys;
  this.values = values;
};
var $LiteralMap = LiteralMap;
($traceurRuntime.createClass)(LiteralMap, {
  eval: function(context) {
    var res = StringMapWrapper.create();
    for (var i = 0; i < this.keys.length; ++i) {
      StringMapWrapper.set(res, this.keys[i], this.values[i].eval(context));
    }
    return res;
  },
  visit: function(visitor) {
    return visitor.visitLiteralMap(this);
  }
}, {}, AST);
Object.defineProperty(LiteralMap, "parameters", {get: function() {
    return [[List], [List]];
  }});
var Interpolation = function Interpolation(strings, expressions) {
  assert.argumentTypes(strings, List, expressions, List);
  $traceurRuntime.superConstructor($Interpolation).call(this);
  this.strings = strings;
  this.expressions = expressions;
};
var $Interpolation = Interpolation;
($traceurRuntime.createClass)(Interpolation, {
  eval: function(context) {
    throw new BaseException("evaluating an Interpolation is not supported");
  },
  visit: function(visitor) {
    visitor.visitInterpolation(this);
  }
}, {}, AST);
Object.defineProperty(Interpolation, "parameters", {get: function() {
    return [[List], [List]];
  }});
var Binary = function Binary(operation, left, right) {
  assert.argumentTypes(operation, assert.type.string, left, AST, right, AST);
  $traceurRuntime.superConstructor($Binary).call(this);
  this.operation = operation;
  this.left = left;
  this.right = right;
};
var $Binary = Binary;
($traceurRuntime.createClass)(Binary, {
  eval: function(context) {
    var left = this.left.eval(context);
    switch (this.operation) {
      case '&&':
        return left && this.right.eval(context);
      case '||':
        return left || this.right.eval(context);
    }
    var right = this.right.eval(context);
    switch (this.operation) {
      case '+':
        return left + right;
      case '-':
        return left - right;
      case '*':
        return left * right;
      case '/':
        return left / right;
      case '%':
        return left % right;
      case '==':
        return left == right;
      case '!=':
        return left != right;
      case '<':
        return left < right;
      case '>':
        return left > right;
      case '<=':
        return left <= right;
      case '>=':
        return left >= right;
      case '^':
        return left ^ right;
      case '&':
        return left & right;
    }
    throw 'Internal error [$operation] not handled';
  },
  visit: function(visitor) {
    return visitor.visitBinary(this);
  }
}, {}, AST);
Object.defineProperty(Binary, "parameters", {get: function() {
    return [[assert.type.string], [AST], [AST]];
  }});
var PrefixNot = function PrefixNot(expression) {
  assert.argumentTypes(expression, AST);
  $traceurRuntime.superConstructor($PrefixNot).call(this);
  this.expression = expression;
};
var $PrefixNot = PrefixNot;
($traceurRuntime.createClass)(PrefixNot, {
  eval: function(context) {
    return !this.expression.eval(context);
  },
  visit: function(visitor) {
    return visitor.visitPrefixNot(this);
  }
}, {}, AST);
Object.defineProperty(PrefixNot, "parameters", {get: function() {
    return [[AST]];
  }});
var Assignment = function Assignment(target, value) {
  assert.argumentTypes(target, AST, value, AST);
  $traceurRuntime.superConstructor($Assignment).call(this);
  this.target = target;
  this.value = value;
};
var $Assignment = Assignment;
($traceurRuntime.createClass)(Assignment, {
  eval: function(context) {
    return this.target.assign(context, this.value.eval(context));
  },
  visit: function(visitor) {
    return visitor.visitAssignment(this);
  }
}, {}, AST);
Object.defineProperty(Assignment, "parameters", {get: function() {
    return [[AST], [AST]];
  }});
var MethodCall = function MethodCall(receiver, name, fn, args) {
  assert.argumentTypes(receiver, AST, name, assert.type.string, fn, Function, args, List);
  $traceurRuntime.superConstructor($MethodCall).call(this);
  this.receiver = receiver;
  this.fn = fn;
  this.args = args;
  this.name = name;
};
var $MethodCall = MethodCall;
($traceurRuntime.createClass)(MethodCall, {
  eval: function(context) {
    var evaluatedContext = this.receiver.eval(context);
    var evaluatedArgs = evalList(context, this.args);
    while (evaluatedContext instanceof ContextWithVariableBindings) {
      if (evaluatedContext.hasBinding(this.name)) {
        var fn = evaluatedContext.get(this.name);
        return FunctionWrapper.apply(fn, evaluatedArgs);
      }
      evaluatedContext = evaluatedContext.parent;
    }
    return this.fn(evaluatedContext, evaluatedArgs);
  },
  visit: function(visitor) {
    return visitor.visitMethodCall(this);
  }
}, {}, AST);
Object.defineProperty(MethodCall, "parameters", {get: function() {
    return [[AST], [assert.type.string], [Function], [List]];
  }});
var FunctionCall = function FunctionCall(target, args) {
  assert.argumentTypes(target, AST, args, List);
  $traceurRuntime.superConstructor($FunctionCall).call(this);
  this.target = target;
  this.args = args;
};
var $FunctionCall = FunctionCall;
($traceurRuntime.createClass)(FunctionCall, {
  eval: function(context) {
    var obj = this.target.eval(context);
    if (!(obj instanceof Function)) {
      throw new BaseException((obj + " is not a function"));
    }
    return FunctionWrapper.apply(obj, evalList(context, this.args));
  },
  visit: function(visitor) {
    return visitor.visitFunctionCall(this);
  }
}, {}, AST);
Object.defineProperty(FunctionCall, "parameters", {get: function() {
    return [[AST], [List]];
  }});
var ASTWithSource = function ASTWithSource(ast, source, location) {
  assert.argumentTypes(ast, AST, source, assert.type.string, location, assert.type.string);
  $traceurRuntime.superConstructor($ASTWithSource).call(this);
  this.source = source;
  this.location = location;
  this.ast = ast;
};
var $ASTWithSource = ASTWithSource;
($traceurRuntime.createClass)(ASTWithSource, {
  eval: function(context) {
    return this.ast.eval(context);
  },
  get isAssignable() {
    return this.ast.isAssignable;
  },
  assign: function(context, value) {
    return this.ast.assign(context, value);
  },
  visit: function(visitor) {
    return this.ast.visit(visitor);
  },
  toString: function() {
    return assert.returnType(((this.source + " in " + this.location)), assert.type.string);
  }
}, {}, AST);
Object.defineProperty(ASTWithSource, "parameters", {get: function() {
    return [[AST], [assert.type.string], [assert.type.string]];
  }});
var TemplateBinding = function TemplateBinding(key, keyIsVar, name, expression) {
  assert.argumentTypes(key, assert.type.string, keyIsVar, assert.type.boolean, name, assert.type.string, expression, ASTWithSource);
  $traceurRuntime.superConstructor($TemplateBinding).call(this);
  this.key = key;
  this.keyIsVar = keyIsVar;
  this.name = name;
  this.expression = expression;
};
var $TemplateBinding = TemplateBinding;
($traceurRuntime.createClass)(TemplateBinding, {}, {});
Object.defineProperty(TemplateBinding, "parameters", {get: function() {
    return [[assert.type.string], [assert.type.boolean], [assert.type.string], [ASTWithSource]];
  }});
var AstVisitor = function AstVisitor() {};
($traceurRuntime.createClass)(AstVisitor, {
  visitAccessMember: function(ast) {
    assert.argumentTypes(ast, AccessMember);
  },
  visitAssignment: function(ast) {
    assert.argumentTypes(ast, Assignment);
  },
  visitBinary: function(ast) {
    assert.argumentTypes(ast, Binary);
  },
  visitChain: function(ast) {
    assert.argumentTypes(ast, Chain);
  },
  visitConditional: function(ast) {
    assert.argumentTypes(ast, Conditional);
  },
  visitPipe: function(ast) {
    assert.argumentTypes(ast, Pipe);
  },
  visitFunctionCall: function(ast) {
    assert.argumentTypes(ast, FunctionCall);
  },
  visitImplicitReceiver: function(ast) {
    assert.argumentTypes(ast, ImplicitReceiver);
  },
  visitKeyedAccess: function(ast) {
    assert.argumentTypes(ast, KeyedAccess);
  },
  visitLiteralArray: function(ast) {
    assert.argumentTypes(ast, LiteralArray);
  },
  visitLiteralMap: function(ast) {
    assert.argumentTypes(ast, LiteralMap);
  },
  visitLiteralPrimitive: function(ast) {
    assert.argumentTypes(ast, LiteralPrimitive);
  },
  visitMethodCall: function(ast) {
    assert.argumentTypes(ast, MethodCall);
  },
  visitPrefixNot: function(ast) {
    assert.argumentTypes(ast, PrefixNot);
  }
}, {});
Object.defineProperty(AstVisitor.prototype.visitAccessMember, "parameters", {get: function() {
    return [[AccessMember]];
  }});
Object.defineProperty(AstVisitor.prototype.visitAssignment, "parameters", {get: function() {
    return [[Assignment]];
  }});
Object.defineProperty(AstVisitor.prototype.visitBinary, "parameters", {get: function() {
    return [[Binary]];
  }});
Object.defineProperty(AstVisitor.prototype.visitChain, "parameters", {get: function() {
    return [[Chain]];
  }});
Object.defineProperty(AstVisitor.prototype.visitConditional, "parameters", {get: function() {
    return [[Conditional]];
  }});
Object.defineProperty(AstVisitor.prototype.visitPipe, "parameters", {get: function() {
    return [[Pipe]];
  }});
Object.defineProperty(AstVisitor.prototype.visitFunctionCall, "parameters", {get: function() {
    return [[FunctionCall]];
  }});
Object.defineProperty(AstVisitor.prototype.visitImplicitReceiver, "parameters", {get: function() {
    return [[ImplicitReceiver]];
  }});
Object.defineProperty(AstVisitor.prototype.visitKeyedAccess, "parameters", {get: function() {
    return [[KeyedAccess]];
  }});
Object.defineProperty(AstVisitor.prototype.visitLiteralArray, "parameters", {get: function() {
    return [[LiteralArray]];
  }});
Object.defineProperty(AstVisitor.prototype.visitLiteralMap, "parameters", {get: function() {
    return [[LiteralMap]];
  }});
Object.defineProperty(AstVisitor.prototype.visitLiteralPrimitive, "parameters", {get: function() {
    return [[LiteralPrimitive]];
  }});
Object.defineProperty(AstVisitor.prototype.visitMethodCall, "parameters", {get: function() {
    return [[MethodCall]];
  }});
Object.defineProperty(AstVisitor.prototype.visitPrefixNot, "parameters", {get: function() {
    return [[PrefixNot]];
  }});
var _evalListCache = [[], [0], [0, 0], [0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0, 0]];
function evalList(context, exps) {
  assert.argumentTypes(context, assert.type.any, exps, List);
  var length = exps.length;
  var result = _evalListCache[length];
  for (var i = 0; i < length; i++) {
    result[i] = exps[i].eval(context);
  }
  return result;
}
Object.defineProperty(evalList, "parameters", {get: function() {
    return [[], [List]];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/change_detection/parser/ast.map

//# sourceMappingURL=./ast.map