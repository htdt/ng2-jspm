"use strict";
Object.defineProperties(module.exports, {
  ITEMS: {get: function() {
      return ITEMS;
    }},
  ITEM_HEIGHT: {get: function() {
      return ITEM_HEIGHT;
    }},
  VISIBLE_ITEMS: {get: function() {
      return VISIBLE_ITEMS;
    }},
  HEIGHT: {get: function() {
      return HEIGHT;
    }},
  VIEW_PORT_HEIGHT: {get: function() {
      return VIEW_PORT_HEIGHT;
    }},
  COMPANY_NAME_WIDTH: {get: function() {
      return COMPANY_NAME_WIDTH;
    }},
  OPPORTUNITY_NAME_WIDTH: {get: function() {
      return OPPORTUNITY_NAME_WIDTH;
    }},
  OFFERING_NAME_WIDTH: {get: function() {
      return OFFERING_NAME_WIDTH;
    }},
  ACCOUNT_CELL_WIDTH: {get: function() {
      return ACCOUNT_CELL_WIDTH;
    }},
  BASE_POINTS_WIDTH: {get: function() {
      return BASE_POINTS_WIDTH;
    }},
  KICKER_POINTS_WIDTH: {get: function() {
      return KICKER_POINTS_WIDTH;
    }},
  STAGE_BUTTONS_WIDTH: {get: function() {
      return STAGE_BUTTONS_WIDTH;
    }},
  BUNDLES_WIDTH: {get: function() {
      return BUNDLES_WIDTH;
    }},
  DUE_DATE_WIDTH: {get: function() {
      return DUE_DATE_WIDTH;
    }},
  END_DATE_WIDTH: {get: function() {
      return END_DATE_WIDTH;
    }},
  AAT_STATUS_WIDTH: {get: function() {
      return AAT_STATUS_WIDTH;
    }},
  ROW_WIDTH: {get: function() {
      return ROW_WIDTH;
    }},
  STATUS_LIST: {get: function() {
      return STATUS_LIST;
    }},
  AAT_STATUS_LIST: {get: function() {
      return AAT_STATUS_LIST;
    }},
  CustomDate: {get: function() {
      return CustomDate;
    }},
  RawEntity: {get: function() {
      return RawEntity;
    }},
  Company: {get: function() {
      return Company;
    }},
  Offering: {get: function() {
      return Offering;
    }},
  Opportunity: {get: function() {
      return Opportunity;
    }},
  Account: {get: function() {
      return Account;
    }},
  __esModule: {value: true}
});
var __moduleName = "benchmarks/src/naive_infinite_scroll/common";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_facade_47_math__,
    $__angular2_47_src_47_facade_47_async__,
    $__angular2_47_src_47_facade_47_collection__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var int = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).int;
var Math = ($__angular2_47_src_47_facade_47_math__ = require("angular2/src/facade/math"), $__angular2_47_src_47_facade_47_math__ && $__angular2_47_src_47_facade_47_math__.__esModule && $__angular2_47_src_47_facade_47_math__ || {default: $__angular2_47_src_47_facade_47_math__}).Math;
var PromiseWrapper = ($__angular2_47_src_47_facade_47_async__ = require("angular2/src/facade/async"), $__angular2_47_src_47_facade_47_async__ && $__angular2_47_src_47_facade_47_async__.__esModule && $__angular2_47_src_47_facade_47_async__ || {default: $__angular2_47_src_47_facade_47_async__}).PromiseWrapper;
var $__4 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    ListWrapper = $__4.ListWrapper,
    MapWrapper = $__4.MapWrapper;
var ITEMS = 1000;
var ITEM_HEIGHT = 40;
var VISIBLE_ITEMS = 17;
var HEIGHT = ITEMS * ITEM_HEIGHT;
var VIEW_PORT_HEIGHT = ITEM_HEIGHT * VISIBLE_ITEMS;
var COMPANY_NAME_WIDTH = 100;
var OPPORTUNITY_NAME_WIDTH = 100;
var OFFERING_NAME_WIDTH = 100;
var ACCOUNT_CELL_WIDTH = 50;
var BASE_POINTS_WIDTH = 50;
var KICKER_POINTS_WIDTH = 50;
var STAGE_BUTTONS_WIDTH = 220;
var BUNDLES_WIDTH = 120;
var DUE_DATE_WIDTH = 100;
var END_DATE_WIDTH = 100;
var AAT_STATUS_WIDTH = 100;
var ROW_WIDTH = COMPANY_NAME_WIDTH + OPPORTUNITY_NAME_WIDTH + OFFERING_NAME_WIDTH + ACCOUNT_CELL_WIDTH + BASE_POINTS_WIDTH + KICKER_POINTS_WIDTH + STAGE_BUTTONS_WIDTH + BUNDLES_WIDTH + DUE_DATE_WIDTH + END_DATE_WIDTH + AAT_STATUS_WIDTH;
var STATUS_LIST = ['Planned', 'Pitched', 'Won', 'Lost'];
var AAT_STATUS_LIST = ['Active', 'Passive', 'Abandoned'];
var CustomDate = function CustomDate(y, m, d) {
  assert.argumentTypes(y, int, m, int, d, int);
  this.year = y;
  this.month = m;
  this.day = d;
};
var $CustomDate = CustomDate;
($traceurRuntime.createClass)(CustomDate, {addDays: function(days) {
    assert.argumentTypes(days, int);
    var newDay = this.day + days;
    var newMonth = this.month + Math.floor(newDay / 30);
    newDay = newDay % 30;
    var newYear = this.year + Math.floor(newMonth / 12);
    return assert.returnType((new $CustomDate(newYear, newMonth, newDay)), $CustomDate);
  }}, {now: function() {
    return assert.returnType((new $CustomDate(2014, 1, 28)), $CustomDate);
  }});
Object.defineProperty(CustomDate, "parameters", {get: function() {
    return [[int], [int], [int]];
  }});
Object.defineProperty(CustomDate.prototype.addDays, "parameters", {get: function() {
    return [[int]];
  }});
var RawEntity = function RawEntity() {
  this._data = MapWrapper.create();
};
($traceurRuntime.createClass)(RawEntity, {
  get: function(key) {
    assert.argumentTypes(key, assert.type.string);
    if (key.indexOf('.') == -1) {
      return this._data[key];
    }
    var pieces = key.split('.');
    var last = ListWrapper.last(pieces);
    pieces.length = pieces.length - 1;
    var target = _resolve(pieces, this);
    if (target == null) {
      return null;
    }
    return target[last];
  },
  set: function(key, value) {
    assert.argumentTypes(key, assert.type.string, value, assert.type.any);
    if (key.indexOf('.') == -1) {
      this._data[key] = value;
      return ;
    }
    var pieces = key.split('.');
    var last = ListWrapper.last(pieces);
    pieces.length = pieces.length - 1;
    var target = _resolve(pieces, this);
    target[last] = value;
  },
  remove: function(key) {
    assert.argumentTypes(key, assert.type.string);
    if (!key.contains('.')) {
      return MapWrapper.delete(this._data, key);
    }
    var pieces = key.split('.');
    var last = ListWrapper.last(pieces);
    pieces.length = pieces.length - 1;
    var target = _resolve(pieces, this);
    return target.remove(last);
  },
  _resolve: function(pieces, start) {
    var cur = start;
    for (var i = 0; i < pieces.length; i++) {
      cur = cur[pieces[i]];
      if (cur == null) {
        return null;
      }
    }
    return cur;
  }
}, {});
Object.defineProperty(RawEntity.prototype.get, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
Object.defineProperty(RawEntity.prototype.set, "parameters", {get: function() {
    return [[assert.type.string], []];
  }});
Object.defineProperty(RawEntity.prototype.remove, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
var Company = function Company() {
  $traceurRuntime.superConstructor($Company).apply(this, arguments);
};
var $Company = Company;
($traceurRuntime.createClass)(Company, {
  get name() {
    return assert.returnType((this.get('name')), assert.type.string);
  },
  set name(val) {
    assert.argumentTypes(val, assert.type.string);
    this.set('name', val);
  }
}, {}, RawEntity);
Object.defineProperty(Object.getOwnPropertyDescriptor(Company.prototype, "name").set, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
var Offering = function Offering() {
  $traceurRuntime.superConstructor($Offering).apply(this, arguments);
};
var $Offering = Offering;
($traceurRuntime.createClass)(Offering, {
  get name() {
    return assert.returnType((this.get('name')), assert.type.string);
  },
  set name(val) {
    assert.argumentTypes(val, assert.type.string);
    this.set('name', val);
  },
  get company() {
    return assert.returnType((this.get('company')), Company);
  },
  set company(val) {
    assert.argumentTypes(val, Company);
    this.set('company', val);
  },
  get opportunity() {
    return assert.returnType((this.get('opportunity')), Opportunity);
  },
  set opportunity(val) {
    assert.argumentTypes(val, Opportunity);
    this.set('opportunity', val);
  },
  get account() {
    return assert.returnType((this.get('account')), Account);
  },
  set account(val) {
    assert.argumentTypes(val, Account);
    this.set('account', val);
  },
  get basePoints() {
    return assert.returnType((this.get('basePoints')), int);
  },
  set basePoints(val) {
    assert.argumentTypes(val, int);
    this.set('basePoints', val);
  },
  get kickerPoints() {
    return assert.returnType((this.get('kickerPoints')), int);
  },
  set kickerPoints(val) {
    assert.argumentTypes(val, int);
    this.set('kickerPoints', val);
  },
  get status() {
    return assert.returnType((this.get('status')), assert.type.string);
  },
  set status(val) {
    assert.argumentTypes(val, assert.type.string);
    this.set('status', val);
  },
  get bundles() {
    return assert.returnType((this.get('bundles')), assert.type.string);
  },
  set bundles(val) {
    assert.argumentTypes(val, assert.type.string);
    this.set('bundles', val);
  },
  get dueDate() {
    return assert.returnType((this.get('dueDate')), CustomDate);
  },
  set dueDate(val) {
    assert.argumentTypes(val, CustomDate);
    this.set('dueDate', val);
  },
  get endDate() {
    return assert.returnType((this.get('endDate')), CustomDate);
  },
  set endDate(val) {
    assert.argumentTypes(val, CustomDate);
    this.set('endDate', val);
  },
  get aatStatus() {
    return assert.returnType((this.get('aatStatus')), assert.type.string);
  },
  set aatStatus(val) {
    assert.argumentTypes(val, assert.type.string);
    this.set('aatStatus', val);
  }
}, {}, RawEntity);
Object.defineProperty(Object.getOwnPropertyDescriptor(Offering.prototype, "name").set, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
Object.defineProperty(Object.getOwnPropertyDescriptor(Offering.prototype, "company").set, "parameters", {get: function() {
    return [[Company]];
  }});
Object.defineProperty(Object.getOwnPropertyDescriptor(Offering.prototype, "opportunity").set, "parameters", {get: function() {
    return [[Opportunity]];
  }});
Object.defineProperty(Object.getOwnPropertyDescriptor(Offering.prototype, "account").set, "parameters", {get: function() {
    return [[Account]];
  }});
Object.defineProperty(Object.getOwnPropertyDescriptor(Offering.prototype, "basePoints").set, "parameters", {get: function() {
    return [[int]];
  }});
Object.defineProperty(Object.getOwnPropertyDescriptor(Offering.prototype, "kickerPoints").set, "parameters", {get: function() {
    return [[int]];
  }});
Object.defineProperty(Object.getOwnPropertyDescriptor(Offering.prototype, "status").set, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
Object.defineProperty(Object.getOwnPropertyDescriptor(Offering.prototype, "bundles").set, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
Object.defineProperty(Object.getOwnPropertyDescriptor(Offering.prototype, "dueDate").set, "parameters", {get: function() {
    return [[CustomDate]];
  }});
Object.defineProperty(Object.getOwnPropertyDescriptor(Offering.prototype, "endDate").set, "parameters", {get: function() {
    return [[CustomDate]];
  }});
Object.defineProperty(Object.getOwnPropertyDescriptor(Offering.prototype, "aatStatus").set, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
var Opportunity = function Opportunity() {
  $traceurRuntime.superConstructor($Opportunity).apply(this, arguments);
};
var $Opportunity = Opportunity;
($traceurRuntime.createClass)(Opportunity, {
  get name() {
    return assert.returnType((this.get('name')), assert.type.string);
  },
  set name(val) {
    assert.argumentTypes(val, assert.type.string);
    this.set('name', val);
  }
}, {}, RawEntity);
Object.defineProperty(Object.getOwnPropertyDescriptor(Opportunity.prototype, "name").set, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
var Account = function Account() {
  $traceurRuntime.superConstructor($Account).apply(this, arguments);
};
var $Account = Account;
($traceurRuntime.createClass)(Account, {
  get accountId() {
    return assert.returnType((this.get('accountId')), int);
  },
  set accountId(val) {
    assert.argumentTypes(val, int);
    this.set('accountId', val);
  }
}, {}, RawEntity);
Object.defineProperty(Object.getOwnPropertyDescriptor(Account.prototype, "accountId").set, "parameters", {get: function() {
    return [[int]];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/benchmarks/src/naive_infinite_scroll/common.map

//# sourceMappingURL=./common.map