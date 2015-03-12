"use strict";
Object.defineProperties(module.exports, {
  FormBuilder: {get: function() {
      return FormBuilder;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/src/forms/form_builder";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_forms__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var $__1 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    StringMapWrapper = $__1.StringMapWrapper,
    ListWrapper = $__1.ListWrapper;
var isPresent = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).isPresent;
var $__3 = ($__angular2_47_forms__ = require("angular2/forms"), $__angular2_47_forms__ && $__angular2_47_forms__.__esModule && $__angular2_47_forms__ || {default: $__angular2_47_forms__}),
    ControlGroup = $__3.ControlGroup,
    Control = $__3.Control,
    OptionalControl = $__3.OptionalControl,
    OptionalControlGroup = $__3.OptionalControlGroup;
var FormBuilder = function FormBuilder() {};
($traceurRuntime.createClass)(FormBuilder, {
  group: function(controlsConfig) {
    var extra = arguments[1] !== (void 0) ? arguments[1] : null;
    var controls = this._reduceControls(controlsConfig);
    var optionals = isPresent(extra) ? StringMapWrapper.get(extra, "optionals") : null;
    var validator = isPresent(extra) ? StringMapWrapper.get(extra, "validator") : null;
    if (isPresent(validator)) {
      return assert.returnType((new ControlGroup(controls, optionals, validator)), ControlGroup);
    } else {
      return assert.returnType((new ControlGroup(controls, optionals)), ControlGroup);
    }
  },
  control: function(value) {
    var validator = arguments[1] !== (void 0) ? arguments[1] : null;
    assert.argumentTypes(value, assert.type.any, validator, Function);
    if (isPresent(validator)) {
      return assert.returnType((new Control(value, validator)), Control);
    } else {
      return assert.returnType((new Control(value)), Control);
    }
  },
  _reduceControls: function(controlsConfig) {
    var $__4 = this;
    var controls = {};
    StringMapWrapper.forEach(controlsConfig, (function(controlConfig, controlName) {
      controls[controlName] = $__4._createControl(controlConfig);
    }));
    return controls;
  },
  _createControl: function(controlConfig) {
    if (controlConfig instanceof Control || controlConfig instanceof ControlGroup) {
      return controlConfig;
    } else if (ListWrapper.isList(controlConfig)) {
      var value = ListWrapper.get(controlConfig, 0);
      var validator = controlConfig.length > 1 ? controlConfig[1] : null;
      return this.control(value, validator);
    } else {
      return this.control(controlConfig);
    }
  }
}, {});
Object.defineProperty(FormBuilder.prototype.control, "parameters", {get: function() {
    return [[], [Function]];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/forms/form_builder.map

//# sourceMappingURL=./form_builder.map