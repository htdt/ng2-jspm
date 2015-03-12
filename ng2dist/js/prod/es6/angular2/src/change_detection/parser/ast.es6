import {FIELD,
  autoConvertAdd,
  isBlank,
  isPresent,
  FunctionWrapper,
  BaseException} from "angular2/src/facade/lang";
import {List,
  Map,
  ListWrapper,
  StringMapWrapper} from "angular2/src/facade/collection";
import {ContextWithVariableBindings} from "./context_with_variable_bindings";
export class AST {
  eval(context) {
    throw new BaseException("Not supported");
  }
  get isAssignable() {
    return false;
  }
  assign(context, value) {
    throw new BaseException("Not supported");
  }
  visit(visitor) {}
  toString() {
    return "AST";
  }
}
export class EmptyExpr extends AST {
  eval(context) {
    return null;
  }
  visit(visitor) {}
}
export class ImplicitReceiver extends AST {
  eval(context) {
    return context;
  }
  visit(visitor) {
    return visitor.visitImplicitReceiver(this);
  }
}
export class Chain extends AST {
  constructor(expressions) {
    super();
    this.expressions = expressions;
  }
  eval(context) {
    var result;
    for (var i = 0; i < this.expressions.length; i++) {
      var last = this.expressions[i].eval(context);
      if (isPresent(last))
        result = last;
    }
    return result;
  }
  visit(visitor) {
    return visitor.visitChain(this);
  }
}
Object.defineProperty(Chain, "parameters", {get: function() {
    return [[List]];
  }});
export class Conditional extends AST {
  constructor(condition, trueExp, falseExp) {
    super();
    this.condition = condition;
    this.trueExp = trueExp;
    this.falseExp = falseExp;
  }
  eval(context) {
    if (this.condition.eval(context)) {
      return this.trueExp.eval(context);
    } else {
      return this.falseExp.eval(context);
    }
  }
  visit(visitor) {
    return visitor.visitConditional(this);
  }
}
Object.defineProperty(Conditional, "parameters", {get: function() {
    return [[AST], [AST], [AST]];
  }});
export class AccessMember extends AST {
  constructor(receiver, name, getter, setter) {
    super();
    this.receiver = receiver;
    this.name = name;
    this.getter = getter;
    this.setter = setter;
  }
  eval(context) {
    var evaluatedContext = this.receiver.eval(context);
    while (evaluatedContext instanceof ContextWithVariableBindings) {
      if (evaluatedContext.hasBinding(this.name)) {
        return evaluatedContext.get(this.name);
      }
      evaluatedContext = evaluatedContext.parent;
    }
    return this.getter(evaluatedContext);
  }
  get isAssignable() {
    return true;
  }
  assign(context, value) {
    var evaluatedContext = this.receiver.eval(context);
    while (evaluatedContext instanceof ContextWithVariableBindings) {
      if (evaluatedContext.hasBinding(this.name)) {
        throw new BaseException(`Cannot reassign a variable binding ${this.name}`);
      }
      evaluatedContext = evaluatedContext.parent;
    }
    return this.setter(evaluatedContext, value);
  }
  visit(visitor) {
    return visitor.visitAccessMember(this);
  }
}
Object.defineProperty(AccessMember, "parameters", {get: function() {
    return [[AST], [assert.type.string], [Function], [Function]];
  }});
export class KeyedAccess extends AST {
  constructor(obj, key) {
    super();
    this.obj = obj;
    this.key = key;
  }
  eval(context) {
    var obj = this.obj.eval(context);
    var key = this.key.eval(context);
    return obj[key];
  }
  get isAssignable() {
    return true;
  }
  assign(context, value) {
    var obj = this.obj.eval(context);
    var key = this.key.eval(context);
    obj[key] = value;
    return value;
  }
  visit(visitor) {
    return visitor.visitKeyedAccess(this);
  }
}
Object.defineProperty(KeyedAccess, "parameters", {get: function() {
    return [[AST], [AST]];
  }});
export class Pipe extends AST {
  constructor(exp, name, args) {
    super();
    this.exp = exp;
    this.name = name;
    this.args = args;
  }
  visit(visitor) {
    return visitor.visitPipe(this);
  }
}
Object.defineProperty(Pipe, "parameters", {get: function() {
    return [[AST], [assert.type.string], [List]];
  }});
export class LiteralPrimitive extends AST {
  constructor(value) {
    super();
    this.value = value;
  }
  eval(context) {
    return this.value;
  }
  visit(visitor) {
    return visitor.visitLiteralPrimitive(this);
  }
}
export class LiteralArray extends AST {
  constructor(expressions) {
    super();
    this.expressions = expressions;
  }
  eval(context) {
    return ListWrapper.map(this.expressions, (e) => e.eval(context));
  }
  visit(visitor) {
    return visitor.visitLiteralArray(this);
  }
}
Object.defineProperty(LiteralArray, "parameters", {get: function() {
    return [[List]];
  }});
export class LiteralMap extends AST {
  constructor(keys, values) {
    super();
    this.keys = keys;
    this.values = values;
  }
  eval(context) {
    var res = StringMapWrapper.create();
    for (var i = 0; i < this.keys.length; ++i) {
      StringMapWrapper.set(res, this.keys[i], this.values[i].eval(context));
    }
    return res;
  }
  visit(visitor) {
    return visitor.visitLiteralMap(this);
  }
}
Object.defineProperty(LiteralMap, "parameters", {get: function() {
    return [[List], [List]];
  }});
export class Interpolation extends AST {
  constructor(strings, expressions) {
    super();
    this.strings = strings;
    this.expressions = expressions;
  }
  eval(context) {
    throw new BaseException("evaluating an Interpolation is not supported");
  }
  visit(visitor) {
    visitor.visitInterpolation(this);
  }
}
Object.defineProperty(Interpolation, "parameters", {get: function() {
    return [[List], [List]];
  }});
export class Binary extends AST {
  constructor(operation, left, right) {
    super();
    this.operation = operation;
    this.left = left;
    this.right = right;
  }
  eval(context) {
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
  }
  visit(visitor) {
    return visitor.visitBinary(this);
  }
}
Object.defineProperty(Binary, "parameters", {get: function() {
    return [[assert.type.string], [AST], [AST]];
  }});
export class PrefixNot extends AST {
  constructor(expression) {
    super();
    this.expression = expression;
  }
  eval(context) {
    return !this.expression.eval(context);
  }
  visit(visitor) {
    return visitor.visitPrefixNot(this);
  }
}
Object.defineProperty(PrefixNot, "parameters", {get: function() {
    return [[AST]];
  }});
export class Assignment extends AST {
  constructor(target, value) {
    super();
    this.target = target;
    this.value = value;
  }
  eval(context) {
    return this.target.assign(context, this.value.eval(context));
  }
  visit(visitor) {
    return visitor.visitAssignment(this);
  }
}
Object.defineProperty(Assignment, "parameters", {get: function() {
    return [[AST], [AST]];
  }});
export class MethodCall extends AST {
  constructor(receiver, name, fn, args) {
    super();
    this.receiver = receiver;
    this.fn = fn;
    this.args = args;
    this.name = name;
  }
  eval(context) {
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
  }
  visit(visitor) {
    return visitor.visitMethodCall(this);
  }
}
Object.defineProperty(MethodCall, "parameters", {get: function() {
    return [[AST], [assert.type.string], [Function], [List]];
  }});
export class FunctionCall extends AST {
  constructor(target, args) {
    super();
    this.target = target;
    this.args = args;
  }
  eval(context) {
    var obj = this.target.eval(context);
    if (!(obj instanceof Function)) {
      throw new BaseException(`${obj} is not a function`);
    }
    return FunctionWrapper.apply(obj, evalList(context, this.args));
  }
  visit(visitor) {
    return visitor.visitFunctionCall(this);
  }
}
Object.defineProperty(FunctionCall, "parameters", {get: function() {
    return [[AST], [List]];
  }});
export class ASTWithSource extends AST {
  constructor(ast, source, location) {
    super();
    this.source = source;
    this.location = location;
    this.ast = ast;
  }
  eval(context) {
    return this.ast.eval(context);
  }
  get isAssignable() {
    return this.ast.isAssignable;
  }
  assign(context, value) {
    return this.ast.assign(context, value);
  }
  visit(visitor) {
    return this.ast.visit(visitor);
  }
  toString() {
    return `${this.source} in ${this.location}`;
  }
}
Object.defineProperty(ASTWithSource, "parameters", {get: function() {
    return [[AST], [assert.type.string], [assert.type.string]];
  }});
export class TemplateBinding {
  constructor(key, keyIsVar, name, expression) {
    super();
    this.key = key;
    this.keyIsVar = keyIsVar;
    this.name = name;
    this.expression = expression;
  }
}
Object.defineProperty(TemplateBinding, "parameters", {get: function() {
    return [[assert.type.string], [assert.type.boolean], [assert.type.string], [ASTWithSource]];
  }});
export class AstVisitor {
  visitAccessMember(ast) {}
  visitAssignment(ast) {}
  visitBinary(ast) {}
  visitChain(ast) {}
  visitConditional(ast) {}
  visitPipe(ast) {}
  visitFunctionCall(ast) {}
  visitImplicitReceiver(ast) {}
  visitKeyedAccess(ast) {}
  visitLiteralArray(ast) {}
  visitLiteralMap(ast) {}
  visitLiteralPrimitive(ast) {}
  visitMethodCall(ast) {}
  visitPrefixNot(ast) {}
}
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