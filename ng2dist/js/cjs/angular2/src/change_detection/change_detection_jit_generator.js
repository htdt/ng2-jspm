"use strict";
Object.defineProperties(module.exports, {
  ChangeDetectorJITGenerator: {get: function() {
      return ChangeDetectorJITGenerator;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/src/change_detection/change_detection_jit_generator";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_change_95_detection_47_parser_47_context_95_with_95_variable_95_bindings__,
    $__angular2_47_src_47_change_95_detection_47_abstract_95_change_95_detector__,
    $__angular2_47_src_47_change_95_detection_47_change_95_detection_95_util__,
    $__angular2_47_src_47_change_95_detection_47_proto_95_record__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var $__1 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    isPresent = $__1.isPresent,
    isBlank = $__1.isBlank,
    BaseException = $__1.BaseException,
    Type = $__1.Type;
var $__2 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    List = $__2.List,
    ListWrapper = $__2.ListWrapper,
    MapWrapper = $__2.MapWrapper,
    StringMapWrapper = $__2.StringMapWrapper;
var ContextWithVariableBindings = ($__angular2_47_src_47_change_95_detection_47_parser_47_context_95_with_95_variable_95_bindings__ = require("./parser/context_with_variable_bindings"), $__angular2_47_src_47_change_95_detection_47_parser_47_context_95_with_95_variable_95_bindings__ && $__angular2_47_src_47_change_95_detection_47_parser_47_context_95_with_95_variable_95_bindings__.__esModule && $__angular2_47_src_47_change_95_detection_47_parser_47_context_95_with_95_variable_95_bindings__ || {default: $__angular2_47_src_47_change_95_detection_47_parser_47_context_95_with_95_variable_95_bindings__}).ContextWithVariableBindings;
var AbstractChangeDetector = ($__angular2_47_src_47_change_95_detection_47_abstract_95_change_95_detector__ = require("./abstract_change_detector"), $__angular2_47_src_47_change_95_detection_47_abstract_95_change_95_detector__ && $__angular2_47_src_47_change_95_detection_47_abstract_95_change_95_detector__.__esModule && $__angular2_47_src_47_change_95_detection_47_abstract_95_change_95_detector__ || {default: $__angular2_47_src_47_change_95_detection_47_abstract_95_change_95_detector__}).AbstractChangeDetector;
var ChangeDetectionUtil = ($__angular2_47_src_47_change_95_detection_47_change_95_detection_95_util__ = require("./change_detection_util"), $__angular2_47_src_47_change_95_detection_47_change_95_detection_95_util__ && $__angular2_47_src_47_change_95_detection_47_change_95_detection_95_util__.__esModule && $__angular2_47_src_47_change_95_detection_47_change_95_detection_95_util__ || {default: $__angular2_47_src_47_change_95_detection_47_change_95_detection_95_util__}).ChangeDetectionUtil;
var $__6 = ($__angular2_47_src_47_change_95_detection_47_proto_95_record__ = require("./proto_record"), $__angular2_47_src_47_change_95_detection_47_proto_95_record__ && $__angular2_47_src_47_change_95_detection_47_proto_95_record__.__esModule && $__angular2_47_src_47_change_95_detection_47_proto_95_record__ || {default: $__angular2_47_src_47_change_95_detection_47_proto_95_record__}),
    ProtoRecord = $__6.ProtoRecord,
    RECORD_TYPE_SELF = $__6.RECORD_TYPE_SELF,
    RECORD_TYPE_PROPERTY = $__6.RECORD_TYPE_PROPERTY,
    RECORD_TYPE_INVOKE_METHOD = $__6.RECORD_TYPE_INVOKE_METHOD,
    RECORD_TYPE_CONST = $__6.RECORD_TYPE_CONST,
    RECORD_TYPE_INVOKE_CLOSURE = $__6.RECORD_TYPE_INVOKE_CLOSURE,
    RECORD_TYPE_PRIMITIVE_OP = $__6.RECORD_TYPE_PRIMITIVE_OP,
    RECORD_TYPE_KEYED_ACCESS = $__6.RECORD_TYPE_KEYED_ACCESS,
    RECORD_TYPE_PIPE = $__6.RECORD_TYPE_PIPE,
    RECORD_TYPE_INTERPOLATE = $__6.RECORD_TYPE_INTERPOLATE;
var ABSTRACT_CHANGE_DETECTOR = "AbstractChangeDetector";
var UTIL = "ChangeDetectionUtil";
var DISPATCHER_ACCESSOR = "this.dispatcher";
var PIPE_REGISTRY_ACCESSOR = "this.pipeRegistry";
var PROTOS_ACCESSOR = "this.protos";
var CHANGE_LOCAL = "change";
var CHANGES_LOCAL = "changes";
var TEMP_LOCAL = "temp";
function typeTemplate(type, cons, detectChanges, setContext) {
  assert.argumentTypes(type, assert.type.string, cons, assert.type.string, detectChanges, assert.type.string, setContext, assert.type.string);
  return assert.returnType((("\n" + cons + "\n" + detectChanges + "\n" + setContext + ";\n\nreturn function(dispatcher, pipeRegistry) {\n  return new " + type + "(dispatcher, pipeRegistry, protos);\n}\n")), assert.type.string);
}
Object.defineProperty(typeTemplate, "parameters", {get: function() {
    return [[assert.type.string], [assert.type.string], [assert.type.string], [assert.type.string]];
  }});
function constructorTemplate(type, fieldsDefinitions) {
  assert.argumentTypes(type, assert.type.string, fieldsDefinitions, assert.type.string);
  return assert.returnType((("\nvar " + type + " = function " + type + "(dispatcher, pipeRegistry, protos) {\n" + ABSTRACT_CHANGE_DETECTOR + ".call(this);\n" + DISPATCHER_ACCESSOR + " = dispatcher;\n" + PIPE_REGISTRY_ACCESSOR + " = pipeRegistry;\n" + PROTOS_ACCESSOR + " = protos;\n" + fieldsDefinitions + "\n}\n\n" + type + ".prototype = Object.create(" + ABSTRACT_CHANGE_DETECTOR + ".prototype);\n")), assert.type.string);
}
Object.defineProperty(constructorTemplate, "parameters", {get: function() {
    return [[assert.type.string], [assert.type.string]];
  }});
function pipeOnDestroyTemplate(pipeNames) {
  return pipeNames.map((function(p) {
    return (p + ".onDestroy()");
  })).join("\n");
}
Object.defineProperty(pipeOnDestroyTemplate, "parameters", {get: function() {
    return [[List]];
  }});
function hydrateTemplate(type, fieldsDefinitions, pipeOnDestroy) {
  assert.argumentTypes(type, assert.type.string, fieldsDefinitions, assert.type.string, pipeOnDestroy, assert.type.string);
  return assert.returnType((("\n" + type + ".prototype.hydrate = function(context) {\n  this.context = context;\n}\n" + type + ".prototype.dehydrate = function() {\n  " + pipeOnDestroy + "\n  " + fieldsDefinitions + "\n}\n" + type + ".prototype.hydrated = function() {\n  return this.context !== " + UTIL + ".unitialized();\n}\n")), assert.type.string);
}
Object.defineProperty(hydrateTemplate, "parameters", {get: function() {
    return [[assert.type.string], [assert.type.string], [assert.type.string]];
  }});
function detectChangesTemplate(type, body) {
  assert.argumentTypes(type, assert.type.string, body, assert.type.string);
  return assert.returnType((("\n" + type + ".prototype.detectChangesInRecords = function(throwOnChange) {\n  " + body + "\n}\n")), assert.type.string);
}
Object.defineProperty(detectChangesTemplate, "parameters", {get: function() {
    return [[assert.type.string], [assert.type.string]];
  }});
function bodyTemplate(localDefinitions, changeDefinitions, records) {
  assert.argumentTypes(localDefinitions, assert.type.string, changeDefinitions, assert.type.string, records, assert.type.string);
  return assert.returnType((("\n" + localDefinitions + "\n" + changeDefinitions + "\nvar " + TEMP_LOCAL + ";\nvar " + CHANGE_LOCAL + ";\nvar " + CHANGES_LOCAL + " = null;\n\ncontext = this.context;\n" + records + "\n")), assert.type.string);
}
Object.defineProperty(bodyTemplate, "parameters", {get: function() {
    return [[assert.type.string], [assert.type.string], [assert.type.string]];
  }});
function notifyTemplate(index) {
  assert.argumentTypes(index, assert.type.number);
  return assert.returnType((("\nif (" + CHANGES_LOCAL + " && " + CHANGES_LOCAL + ".length > 0) {\n  if(throwOnChange) " + UTIL + ".throwOnChange(" + PROTOS_ACCESSOR + "[" + index + "], " + CHANGES_LOCAL + "[0]);\n  " + DISPATCHER_ACCESSOR + ".onRecordChange(" + PROTOS_ACCESSOR + "[" + index + "].directiveMemento, " + CHANGES_LOCAL + ");\n  " + CHANGES_LOCAL + " = null;\n}\n")), assert.type.string);
}
Object.defineProperty(notifyTemplate, "parameters", {get: function() {
    return [[assert.type.number]];
  }});
function pipeCheckTemplate(context, pipe, pipeType, value, change, addRecord, notify) {
  assert.argumentTypes(context, assert.type.string, pipe, assert.type.string, pipeType, assert.type.string, value, assert.type.string, change, assert.type.string, addRecord, assert.type.string, notify, assert.type.string);
  return assert.returnType((("\nif (" + pipe + " === " + UTIL + ".unitialized()) {\n  " + pipe + " = " + PIPE_REGISTRY_ACCESSOR + ".get('" + pipeType + "', " + context + ");\n} else if (!" + pipe + ".supports(" + context + ")) {\n  " + pipe + ".onDestroy();\n  " + pipe + " = " + PIPE_REGISTRY_ACCESSOR + ".get('" + pipeType + "', " + context + ");\n}\n\n" + CHANGE_LOCAL + " = " + pipe + ".transform(" + context + ");\nif (! " + UTIL + ".noChangeMarker(" + CHANGE_LOCAL + ")) {\n  " + value + " = " + CHANGE_LOCAL + ";\n  " + change + " = true;\n  " + addRecord + "\n}\n" + notify + "\n")), assert.type.string);
}
Object.defineProperty(pipeCheckTemplate, "parameters", {get: function() {
    return [[assert.type.string], [assert.type.string], [assert.type.string], [assert.type.string], [assert.type.string], [assert.type.string], [assert.type.string]];
  }});
function referenceCheckTemplate(assignment, newValue, oldValue, change, addRecord, notify) {
  return ("\n" + assignment + "\nif (" + newValue + " !== " + oldValue + " || (" + newValue + " !== " + newValue + ") && (" + oldValue + " !== " + oldValue + ")) {\n  " + change + " = true;\n  " + addRecord + "\n  " + oldValue + " = " + newValue + ";\n}\n" + notify + "\n");
}
function assignmentTemplate(field, value) {
  assert.argumentTypes(field, assert.type.string, value, assert.type.string);
  return (field + " = " + value + ";");
}
Object.defineProperty(assignmentTemplate, "parameters", {get: function() {
    return [[assert.type.string], [assert.type.string]];
  }});
function propertyReadTemplate(name, context, newValue) {
  assert.argumentTypes(name, assert.type.string, context, assert.type.string, newValue, assert.type.string);
  return ("\n" + TEMP_LOCAL + " = " + UTIL + ".findContext(\"" + name + "\", " + context + ");\nif (" + TEMP_LOCAL + " instanceof ContextWithVariableBindings) {\n  " + newValue + " = " + TEMP_LOCAL + ".get('" + name + "');\n} else {\n  " + newValue + " = " + TEMP_LOCAL + "." + name + ";\n}\n");
}
Object.defineProperty(propertyReadTemplate, "parameters", {get: function() {
    return [[assert.type.string], [assert.type.string], [assert.type.string]];
  }});
function invokeMethodTemplate(name, args, context, newValue) {
  assert.argumentTypes(name, assert.type.string, args, assert.type.string, context, assert.type.string, newValue, assert.type.string);
  return ("\n" + TEMP_LOCAL + " = " + UTIL + ".findContext(\"" + name + "\", " + context + ");\nif (" + TEMP_LOCAL + " instanceof ContextWithVariableBindings) {\n  " + newValue + " = " + TEMP_LOCAL + ".get('" + name + "').apply(null, [" + args + "]);\n} else {\n  " + newValue + " = " + context + "." + name + "(" + args + ");\n}\n");
}
Object.defineProperty(invokeMethodTemplate, "parameters", {get: function() {
    return [[assert.type.string], [assert.type.string], [assert.type.string], [assert.type.string]];
  }});
function localDefinitionsTemplate(names) {
  return assert.returnType((names.map((function(n) {
    return ("var " + n + ";");
  })).join("\n")), assert.type.string);
}
Object.defineProperty(localDefinitionsTemplate, "parameters", {get: function() {
    return [[List]];
  }});
function changeDefinitionsTemplate(names) {
  return assert.returnType((names.map((function(n) {
    return ("var " + n + " = false;");
  })).join("\n")), assert.type.string);
}
Object.defineProperty(changeDefinitionsTemplate, "parameters", {get: function() {
    return [[List]];
  }});
function fieldDefinitionsTemplate(names) {
  return assert.returnType((names.map((function(n) {
    return (n + " = " + UTIL + ".unitialized();");
  })).join("\n")), assert.type.string);
}
Object.defineProperty(fieldDefinitionsTemplate, "parameters", {get: function() {
    return [[List]];
  }});
function ifChangedGuardTemplate(changeNames, body) {
  assert.argumentTypes(changeNames, List, body, assert.type.string);
  var cond = changeNames.join(" || ");
  return assert.returnType((("\nif (" + cond + ") {\n  " + body + "\n}\n")), assert.type.string);
}
Object.defineProperty(ifChangedGuardTemplate, "parameters", {get: function() {
    return [[List], [assert.type.string]];
  }});
function addSimpleChangeRecordTemplate(protoIndex, oldValue, newValue) {
  assert.argumentTypes(protoIndex, assert.type.number, oldValue, assert.type.string, newValue, assert.type.string);
  return (CHANGES_LOCAL + " = " + UTIL + ".addRecord(" + CHANGES_LOCAL + ",\n    " + UTIL + ".simpleChangeRecord(" + PROTOS_ACCESSOR + "[" + protoIndex + "].bindingMemento, " + oldValue + ", " + newValue + "));");
}
Object.defineProperty(addSimpleChangeRecordTemplate, "parameters", {get: function() {
    return [[assert.type.number], [assert.type.string], [assert.type.string]];
  }});
var ChangeDetectorJITGenerator = function ChangeDetectorJITGenerator(typeName, records) {
  assert.argumentTypes(typeName, assert.type.string, records, assert.genericType(List, ProtoRecord));
  this.typeName = typeName;
  this.records = records;
  this.localNames = this.getLocalNames(records);
  this.changeNames = this.getChangeNames(this.localNames);
  this.fieldNames = this.getFieldNames(this.localNames);
  this.pipeNames = this.getPipeNames(this.localNames);
};
($traceurRuntime.createClass)(ChangeDetectorJITGenerator, {
  getLocalNames: function(records) {
    assert.argumentTypes(records, assert.genericType(List, ProtoRecord));
    var index = 0;
    var names = records.map((function(r) {
      var sanitizedName = r.name.replace(new RegExp("\\W", "g"), '');
      return ("" + sanitizedName + index++);
    }));
    return assert.returnType((["context"].concat(names)), assert.genericType(List, String));
  },
  getChangeNames: function(localNames) {
    return assert.returnType((localNames.map((function(n) {
      return ("change_" + n);
    }))), assert.genericType(List, String));
  },
  getFieldNames: function(localNames) {
    return assert.returnType((localNames.map((function(n) {
      return ("this." + n);
    }))), assert.genericType(List, String));
  },
  getPipeNames: function(localNames) {
    return assert.returnType((localNames.map((function(n) {
      return ("this." + n + "_pipe");
    }))), assert.genericType(List, String));
  },
  generate: function() {
    var text = typeTemplate(this.typeName, this.genConstructor(), this.genDetectChanges(), this.genHydrate());
    return assert.returnType((new Function('AbstractChangeDetector', 'ChangeDetectionUtil', 'ContextWithVariableBindings', 'protos', text)(AbstractChangeDetector, ChangeDetectionUtil, ContextWithVariableBindings, this.records)), Function);
  },
  genConstructor: function() {
    return assert.returnType((constructorTemplate(this.typeName, this.genFieldDefinitions())), assert.type.string);
  },
  genHydrate: function() {
    return assert.returnType((hydrateTemplate(this.typeName, this.genFieldDefinitions(), pipeOnDestroyTemplate(this.getnonNullPipeNames()))), assert.type.string);
  },
  genFieldDefinitions: function() {
    var fields = [];
    fields = fields.concat(this.fieldNames);
    fields = fields.concat(this.getnonNullPipeNames());
    return fieldDefinitionsTemplate(fields);
  },
  getnonNullPipeNames: function() {
    var $__7 = this;
    var pipes = [];
    this.records.forEach((function(r) {
      if (r.mode === RECORD_TYPE_PIPE) {
        pipes.push($__7.pipeNames[r.selfIndex]);
      }
    }));
    return assert.returnType((pipes), assert.genericType(List, String));
  },
  genDetectChanges: function() {
    var body = this.genBody();
    return assert.returnType((detectChangesTemplate(this.typeName, body)), assert.type.string);
  },
  genBody: function() {
    var $__7 = this;
    var rec = this.records.map((function(r) {
      return $__7.genRecord(r);
    })).join("\n");
    return assert.returnType((bodyTemplate(this.genLocalDefinitions(), this.genChangeDefinitions(), rec)), assert.type.string);
  },
  genLocalDefinitions: function() {
    return assert.returnType((localDefinitionsTemplate(this.localNames)), assert.type.string);
  },
  genChangeDefinitions: function() {
    return assert.returnType((changeDefinitionsTemplate(this.changeNames)), assert.type.string);
  },
  genRecord: function(r) {
    assert.argumentTypes(r, ProtoRecord);
    if (r.mode === RECORD_TYPE_PIPE) {
      return assert.returnType((this.genPipeCheck(r)), assert.type.string);
    } else {
      return assert.returnType((this.genReferenceCheck(r)), assert.type.string);
    }
  },
  genPipeCheck: function(r) {
    assert.argumentTypes(r, ProtoRecord);
    var context = this.localNames[r.contextIndex];
    var pipe = this.pipeNames[r.selfIndex];
    var newValue = this.localNames[r.selfIndex];
    var oldValue = this.fieldNames[r.selfIndex];
    var change = this.changeNames[r.selfIndex];
    var addRecord = addSimpleChangeRecordTemplate(r.selfIndex - 1, oldValue, newValue);
    var notify = this.genNotify(r);
    return assert.returnType((pipeCheckTemplate(context, pipe, r.name, newValue, change, addRecord, notify)), assert.type.string);
  },
  genReferenceCheck: function(r) {
    assert.argumentTypes(r, ProtoRecord);
    var newValue = this.localNames[r.selfIndex];
    var oldValue = this.fieldNames[r.selfIndex];
    var change = this.changeNames[r.selfIndex];
    var assignment = this.genUpdateCurrentValue(r);
    var addRecord = addSimpleChangeRecordTemplate(r.selfIndex - 1, oldValue, newValue);
    var notify = this.genNotify(r);
    var check = referenceCheckTemplate(assignment, newValue, oldValue, change, r.lastInBinding ? addRecord : '', notify);
    ;
    if (r.isPureFunction()) {
      return assert.returnType((this.ifChangedGuard(r, check)), assert.type.string);
    } else {
      return assert.returnType((check), assert.type.string);
    }
  },
  genUpdateCurrentValue: function(r) {
    assert.argumentTypes(r, ProtoRecord);
    var context = this.localNames[r.contextIndex];
    var newValue = this.localNames[r.selfIndex];
    var args = this.genArgs(r);
    switch (r.mode) {
      case RECORD_TYPE_SELF:
        return assert.returnType((assignmentTemplate(newValue, context)), assert.type.string);
      case RECORD_TYPE_CONST:
        return assert.returnType(((newValue + " = " + this.genLiteral(r.funcOrValue))), assert.type.string);
      case RECORD_TYPE_PROPERTY:
        if (r.contextIndex == 0) {
          return assert.returnType((propertyReadTemplate(r.name, context, newValue)), assert.type.string);
        } else {
          return assert.returnType((assignmentTemplate(newValue, (context + "." + r.name))), assert.type.string);
        }
      case RECORD_TYPE_INVOKE_METHOD:
        if (r.contextIndex == 0) {
          return assert.returnType((invokeMethodTemplate(r.name, args, context, newValue)), assert.type.string);
        } else {
          return assert.returnType((assignmentTemplate(newValue, (context + "." + r.name + "(" + args + ")"))), assert.type.string);
        }
      case RECORD_TYPE_INVOKE_CLOSURE:
        return assert.returnType((assignmentTemplate(newValue, (context + "(" + args + ")"))), assert.type.string);
      case RECORD_TYPE_PRIMITIVE_OP:
        return assert.returnType((assignmentTemplate(newValue, (UTIL + "." + r.name + "(" + args + ")"))), assert.type.string);
      case RECORD_TYPE_INTERPOLATE:
        return assert.returnType((assignmentTemplate(newValue, this.genInterpolation(r))), assert.type.string);
      case RECORD_TYPE_KEYED_ACCESS:
        var key = this.localNames[r.args[0]];
        return assert.returnType((assignmentTemplate(newValue, (context + "[" + key + "]"))), assert.type.string);
      default:
        throw new BaseException(("Unknown operation " + r.mode));
    }
  },
  ifChangedGuard: function(r, body) {
    var $__7 = this;
    return assert.returnType((ifChangedGuardTemplate(r.args.map((function(a) {
      return $__7.changeNames[a];
    })), body)), assert.type.string);
  },
  genInterpolation: function(r) {
    assert.argumentTypes(r, ProtoRecord);
    var res = "";
    for (var i = 0; i < r.args.length; ++i) {
      res += this.genLiteral(r.fixedArgs[i]);
      res += " + ";
      res += this.localNames[r.args[i]];
      res += " + ";
    }
    res += this.genLiteral(r.fixedArgs[r.args.length]);
    return assert.returnType((res), assert.type.string);
  },
  genLiteral: function(value) {
    return assert.returnType((JSON.stringify(value)), assert.type.string);
  },
  genNotify: function(r) {
    return assert.returnType((r.lastInDirective ? notifyTemplate(r.selfIndex - 1) : ''), assert.type.string);
  },
  genArgs: function(r) {
    var $__7 = this;
    return assert.returnType((r.args.map((function(arg) {
      return $__7.localNames[arg];
    })).join(", ")), assert.type.string);
  }
}, {});
Object.defineProperty(ChangeDetectorJITGenerator, "parameters", {get: function() {
    return [[assert.type.string], [assert.genericType(List, ProtoRecord)]];
  }});
Object.defineProperty(ChangeDetectorJITGenerator.prototype.getLocalNames, "parameters", {get: function() {
    return [[assert.genericType(List, ProtoRecord)]];
  }});
Object.defineProperty(ChangeDetectorJITGenerator.prototype.getChangeNames, "parameters", {get: function() {
    return [[assert.genericType(List, String)]];
  }});
Object.defineProperty(ChangeDetectorJITGenerator.prototype.getFieldNames, "parameters", {get: function() {
    return [[assert.genericType(List, String)]];
  }});
Object.defineProperty(ChangeDetectorJITGenerator.prototype.getPipeNames, "parameters", {get: function() {
    return [[assert.genericType(List, String)]];
  }});
Object.defineProperty(ChangeDetectorJITGenerator.prototype.genRecord, "parameters", {get: function() {
    return [[ProtoRecord]];
  }});
Object.defineProperty(ChangeDetectorJITGenerator.prototype.genPipeCheck, "parameters", {get: function() {
    return [[ProtoRecord]];
  }});
Object.defineProperty(ChangeDetectorJITGenerator.prototype.genReferenceCheck, "parameters", {get: function() {
    return [[ProtoRecord]];
  }});
Object.defineProperty(ChangeDetectorJITGenerator.prototype.genUpdateCurrentValue, "parameters", {get: function() {
    return [[ProtoRecord]];
  }});
Object.defineProperty(ChangeDetectorJITGenerator.prototype.ifChangedGuard, "parameters", {get: function() {
    return [[ProtoRecord], [assert.type.string]];
  }});
Object.defineProperty(ChangeDetectorJITGenerator.prototype.genInterpolation, "parameters", {get: function() {
    return [[ProtoRecord]];
  }});
Object.defineProperty(ChangeDetectorJITGenerator.prototype.genArgs, "parameters", {get: function() {
    return [[ProtoRecord]];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/change_detection/change_detection_jit_generator.map

//# sourceMappingURL=./change_detection_jit_generator.map