import {isPresent,
  isBlank,
  BaseException,
  Type} from 'angular2/src/facade/lang';
import {List,
  ListWrapper,
  MapWrapper,
  StringMapWrapper} from 'angular2/src/facade/collection';
import {ContextWithVariableBindings} from './parser/context_with_variable_bindings';
import {AbstractChangeDetector} from './abstract_change_detector';
import {ChangeDetectionUtil} from './change_detection_util';
import {ProtoRecord,
  RECORD_TYPE_SELF,
  RECORD_TYPE_PROPERTY,
  RECORD_TYPE_INVOKE_METHOD,
  RECORD_TYPE_CONST,
  RECORD_TYPE_INVOKE_CLOSURE,
  RECORD_TYPE_PRIMITIVE_OP,
  RECORD_TYPE_KEYED_ACCESS,
  RECORD_TYPE_PIPE,
  RECORD_TYPE_INTERPOLATE} from './proto_record';
var ABSTRACT_CHANGE_DETECTOR = "AbstractChangeDetector";
var UTIL = "ChangeDetectionUtil";
var DISPATCHER_ACCESSOR = "this.dispatcher";
var PIPE_REGISTRY_ACCESSOR = "this.pipeRegistry";
var PROTOS_ACCESSOR = "this.protos";
var CHANGE_LOCAL = "change";
var CHANGES_LOCAL = "changes";
var TEMP_LOCAL = "temp";
function typeTemplate(type, cons, detectChanges, setContext) {
  return `
${cons}
${detectChanges}
${setContext};

return function(dispatcher, pipeRegistry) {
  return new ${type}(dispatcher, pipeRegistry, protos);
}
`;
}
Object.defineProperty(typeTemplate, "parameters", {get: function() {
    return [[assert.type.string], [assert.type.string], [assert.type.string], [assert.type.string]];
  }});
function constructorTemplate(type, fieldsDefinitions) {
  return `
var ${type} = function ${type}(dispatcher, pipeRegistry, protos) {
${ABSTRACT_CHANGE_DETECTOR}.call(this);
${DISPATCHER_ACCESSOR} = dispatcher;
${PIPE_REGISTRY_ACCESSOR} = pipeRegistry;
${PROTOS_ACCESSOR} = protos;
${fieldsDefinitions}
}

${type}.prototype = Object.create(${ABSTRACT_CHANGE_DETECTOR}.prototype);
`;
}
Object.defineProperty(constructorTemplate, "parameters", {get: function() {
    return [[assert.type.string], [assert.type.string]];
  }});
function pipeOnDestroyTemplate(pipeNames) {
  return pipeNames.map((p) => `${p}.onDestroy()`).join("\n");
}
Object.defineProperty(pipeOnDestroyTemplate, "parameters", {get: function() {
    return [[List]];
  }});
function hydrateTemplate(type, fieldsDefinitions, pipeOnDestroy) {
  return `
${type}.prototype.hydrate = function(context) {
  this.context = context;
}
${type}.prototype.dehydrate = function() {
  ${pipeOnDestroy}
  ${fieldsDefinitions}
}
${type}.prototype.hydrated = function() {
  return this.context !== ${UTIL}.unitialized();
}
`;
}
Object.defineProperty(hydrateTemplate, "parameters", {get: function() {
    return [[assert.type.string], [assert.type.string], [assert.type.string]];
  }});
function detectChangesTemplate(type, body) {
  return `
${type}.prototype.detectChangesInRecords = function(throwOnChange) {
  ${body}
}
`;
}
Object.defineProperty(detectChangesTemplate, "parameters", {get: function() {
    return [[assert.type.string], [assert.type.string]];
  }});
function bodyTemplate(localDefinitions, changeDefinitions, records) {
  return `
${localDefinitions}
${changeDefinitions}
var ${TEMP_LOCAL};
var ${CHANGE_LOCAL};
var ${CHANGES_LOCAL} = null;

context = this.context;
${records}
`;
}
Object.defineProperty(bodyTemplate, "parameters", {get: function() {
    return [[assert.type.string], [assert.type.string], [assert.type.string]];
  }});
function notifyTemplate(index) {
  return `
if (${CHANGES_LOCAL} && ${CHANGES_LOCAL}.length > 0) {
  if(throwOnChange) ${UTIL}.throwOnChange(${PROTOS_ACCESSOR}[${index}], ${CHANGES_LOCAL}[0]);
  ${DISPATCHER_ACCESSOR}.onRecordChange(${PROTOS_ACCESSOR}[${index}].directiveMemento, ${CHANGES_LOCAL});
  ${CHANGES_LOCAL} = null;
}
`;
}
Object.defineProperty(notifyTemplate, "parameters", {get: function() {
    return [[assert.type.number]];
  }});
function pipeCheckTemplate(context, pipe, pipeType, value, change, addRecord, notify) {
  return `
if (${pipe} === ${UTIL}.unitialized()) {
  ${pipe} = ${PIPE_REGISTRY_ACCESSOR}.get('${pipeType}', ${context});
} else if (!${pipe}.supports(${context})) {
  ${pipe}.onDestroy();
  ${pipe} = ${PIPE_REGISTRY_ACCESSOR}.get('${pipeType}', ${context});
}

${CHANGE_LOCAL} = ${pipe}.transform(${context});
if (! ${UTIL}.noChangeMarker(${CHANGE_LOCAL})) {
  ${value} = ${CHANGE_LOCAL};
  ${change} = true;
  ${addRecord}
}
${notify}
`;
}
Object.defineProperty(pipeCheckTemplate, "parameters", {get: function() {
    return [[assert.type.string], [assert.type.string], [assert.type.string], [assert.type.string], [assert.type.string], [assert.type.string], [assert.type.string]];
  }});
function referenceCheckTemplate(assignment, newValue, oldValue, change, addRecord, notify) {
  return `
${assignment}
if (${newValue} !== ${oldValue} || (${newValue} !== ${newValue}) && (${oldValue} !== ${oldValue})) {
  ${change} = true;
  ${addRecord}
  ${oldValue} = ${newValue};
}
${notify}
`;
}
function assignmentTemplate(field, value) {
  return `${field} = ${value};`;
}
Object.defineProperty(assignmentTemplate, "parameters", {get: function() {
    return [[assert.type.string], [assert.type.string]];
  }});
function propertyReadTemplate(name, context, newValue) {
  return `
${TEMP_LOCAL} = ${UTIL}.findContext("${name}", ${context});
if (${TEMP_LOCAL} instanceof ContextWithVariableBindings) {
  ${newValue} = ${TEMP_LOCAL}.get('${name}');
} else {
  ${newValue} = ${TEMP_LOCAL}.${name};
}
`;
}
Object.defineProperty(propertyReadTemplate, "parameters", {get: function() {
    return [[assert.type.string], [assert.type.string], [assert.type.string]];
  }});
function invokeMethodTemplate(name, args, context, newValue) {
  return `
${TEMP_LOCAL} = ${UTIL}.findContext("${name}", ${context});
if (${TEMP_LOCAL} instanceof ContextWithVariableBindings) {
  ${newValue} = ${TEMP_LOCAL}.get('${name}').apply(null, [${args}]);
} else {
  ${newValue} = ${context}.${name}(${args});
}
`;
}
Object.defineProperty(invokeMethodTemplate, "parameters", {get: function() {
    return [[assert.type.string], [assert.type.string], [assert.type.string], [assert.type.string]];
  }});
function localDefinitionsTemplate(names) {
  return names.map((n) => `var ${n};`).join("\n");
}
Object.defineProperty(localDefinitionsTemplate, "parameters", {get: function() {
    return [[List]];
  }});
function changeDefinitionsTemplate(names) {
  return names.map((n) => `var ${n} = false;`).join("\n");
}
Object.defineProperty(changeDefinitionsTemplate, "parameters", {get: function() {
    return [[List]];
  }});
function fieldDefinitionsTemplate(names) {
  return names.map((n) => `${n} = ${UTIL}.unitialized();`).join("\n");
}
Object.defineProperty(fieldDefinitionsTemplate, "parameters", {get: function() {
    return [[List]];
  }});
function ifChangedGuardTemplate(changeNames, body) {
  var cond = changeNames.join(" || ");
  return `
if (${cond}) {
  ${body}
}
`;
}
Object.defineProperty(ifChangedGuardTemplate, "parameters", {get: function() {
    return [[List], [assert.type.string]];
  }});
function addSimpleChangeRecordTemplate(protoIndex, oldValue, newValue) {
  return `${CHANGES_LOCAL} = ${UTIL}.addRecord(${CHANGES_LOCAL},
    ${UTIL}.simpleChangeRecord(${PROTOS_ACCESSOR}[${protoIndex}].bindingMemento, ${oldValue}, ${newValue}));`;
}
Object.defineProperty(addSimpleChangeRecordTemplate, "parameters", {get: function() {
    return [[assert.type.number], [assert.type.string], [assert.type.string]];
  }});
export class ChangeDetectorJITGenerator {
  constructor(typeName, records) {
    this.typeName = typeName;
    this.records = records;
    this.localNames = this.getLocalNames(records);
    this.changeNames = this.getChangeNames(this.localNames);
    this.fieldNames = this.getFieldNames(this.localNames);
    this.pipeNames = this.getPipeNames(this.localNames);
  }
  getLocalNames(records) {
    var index = 0;
    var names = records.map((r) => {
      var sanitizedName = r.name.replace(new RegExp("\\W", "g"), '');
      return `${sanitizedName}${index++}`;
    });
    return ["context"].concat(names);
  }
  getChangeNames(localNames) {
    return localNames.map((n) => `change_${n}`);
  }
  getFieldNames(localNames) {
    return localNames.map((n) => `this.${n}`);
  }
  getPipeNames(localNames) {
    return localNames.map((n) => `this.${n}_pipe`);
  }
  generate() {
    var text = typeTemplate(this.typeName, this.genConstructor(), this.genDetectChanges(), this.genHydrate());
    return new Function('AbstractChangeDetector', 'ChangeDetectionUtil', 'ContextWithVariableBindings', 'protos', text)(AbstractChangeDetector, ChangeDetectionUtil, ContextWithVariableBindings, this.records);
  }
  genConstructor() {
    return constructorTemplate(this.typeName, this.genFieldDefinitions());
  }
  genHydrate() {
    return hydrateTemplate(this.typeName, this.genFieldDefinitions(), pipeOnDestroyTemplate(this.getnonNullPipeNames()));
  }
  genFieldDefinitions() {
    var fields = [];
    fields = fields.concat(this.fieldNames);
    fields = fields.concat(this.getnonNullPipeNames());
    return fieldDefinitionsTemplate(fields);
  }
  getnonNullPipeNames() {
    var pipes = [];
    this.records.forEach((r) => {
      if (r.mode === RECORD_TYPE_PIPE) {
        pipes.push(this.pipeNames[r.selfIndex]);
      }
    });
    return pipes;
  }
  genDetectChanges() {
    var body = this.genBody();
    return detectChangesTemplate(this.typeName, body);
  }
  genBody() {
    var rec = this.records.map((r) => this.genRecord(r)).join("\n");
    return bodyTemplate(this.genLocalDefinitions(), this.genChangeDefinitions(), rec);
  }
  genLocalDefinitions() {
    return localDefinitionsTemplate(this.localNames);
  }
  genChangeDefinitions() {
    return changeDefinitionsTemplate(this.changeNames);
  }
  genRecord(r) {
    if (r.mode === RECORD_TYPE_PIPE) {
      return this.genPipeCheck(r);
    } else {
      return this.genReferenceCheck(r);
    }
  }
  genPipeCheck(r) {
    var context = this.localNames[r.contextIndex];
    var pipe = this.pipeNames[r.selfIndex];
    var newValue = this.localNames[r.selfIndex];
    var oldValue = this.fieldNames[r.selfIndex];
    var change = this.changeNames[r.selfIndex];
    var addRecord = addSimpleChangeRecordTemplate(r.selfIndex - 1, oldValue, newValue);
    var notify = this.genNotify(r);
    return pipeCheckTemplate(context, pipe, r.name, newValue, change, addRecord, notify);
  }
  genReferenceCheck(r) {
    var newValue = this.localNames[r.selfIndex];
    var oldValue = this.fieldNames[r.selfIndex];
    var change = this.changeNames[r.selfIndex];
    var assignment = this.genUpdateCurrentValue(r);
    var addRecord = addSimpleChangeRecordTemplate(r.selfIndex - 1, oldValue, newValue);
    var notify = this.genNotify(r);
    var check = referenceCheckTemplate(assignment, newValue, oldValue, change, r.lastInBinding ? addRecord : '', notify);
    ;
    if (r.isPureFunction()) {
      return this.ifChangedGuard(r, check);
    } else {
      return check;
    }
  }
  genUpdateCurrentValue(r) {
    var context = this.localNames[r.contextIndex];
    var newValue = this.localNames[r.selfIndex];
    var args = this.genArgs(r);
    switch (r.mode) {
      case RECORD_TYPE_SELF:
        return assignmentTemplate(newValue, context);
      case RECORD_TYPE_CONST:
        return `${newValue} = ${this.genLiteral(r.funcOrValue)}`;
      case RECORD_TYPE_PROPERTY:
        if (r.contextIndex == 0) {
          return propertyReadTemplate(r.name, context, newValue);
        } else {
          return assignmentTemplate(newValue, `${context}.${r.name}`);
        }
      case RECORD_TYPE_INVOKE_METHOD:
        if (r.contextIndex == 0) {
          return invokeMethodTemplate(r.name, args, context, newValue);
        } else {
          return assignmentTemplate(newValue, `${context}.${r.name}(${args})`);
        }
      case RECORD_TYPE_INVOKE_CLOSURE:
        return assignmentTemplate(newValue, `${context}(${args})`);
      case RECORD_TYPE_PRIMITIVE_OP:
        return assignmentTemplate(newValue, `${UTIL}.${r.name}(${args})`);
      case RECORD_TYPE_INTERPOLATE:
        return assignmentTemplate(newValue, this.genInterpolation(r));
      case RECORD_TYPE_KEYED_ACCESS:
        var key = this.localNames[r.args[0]];
        return assignmentTemplate(newValue, `${context}[${key}]`);
      default:
        throw new BaseException(`Unknown operation ${r.mode}`);
    }
  }
  ifChangedGuard(r, body) {
    return ifChangedGuardTemplate(r.args.map((a) => this.changeNames[a]), body);
  }
  genInterpolation(r) {
    var res = "";
    for (var i = 0; i < r.args.length; ++i) {
      res += this.genLiteral(r.fixedArgs[i]);
      res += " + ";
      res += this.localNames[r.args[i]];
      res += " + ";
    }
    res += this.genLiteral(r.fixedArgs[r.args.length]);
    return res;
  }
  genLiteral(value) {
    return JSON.stringify(value);
  }
  genNotify(r) {
    return r.lastInDirective ? notifyTemplate(r.selfIndex - 1) : '';
  }
  genArgs(r) {
    return r.args.map((arg) => this.localNames[arg]).join(", ");
  }
}
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