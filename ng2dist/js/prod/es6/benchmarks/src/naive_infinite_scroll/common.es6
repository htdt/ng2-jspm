import {int} from 'angular2/src/facade/lang';
import {Math} from 'angular2/src/facade/math';
import {PromiseWrapper} from 'angular2/src/facade/async';
import {ListWrapper,
  MapWrapper} from 'angular2/src/facade/collection';
export var ITEMS = 1000;
export var ITEM_HEIGHT = 40;
export var VISIBLE_ITEMS = 17;
export var HEIGHT = ITEMS * ITEM_HEIGHT;
export var VIEW_PORT_HEIGHT = ITEM_HEIGHT * VISIBLE_ITEMS;
export var COMPANY_NAME_WIDTH = 100;
export var OPPORTUNITY_NAME_WIDTH = 100;
export var OFFERING_NAME_WIDTH = 100;
export var ACCOUNT_CELL_WIDTH = 50;
export var BASE_POINTS_WIDTH = 50;
export var KICKER_POINTS_WIDTH = 50;
export var STAGE_BUTTONS_WIDTH = 220;
export var BUNDLES_WIDTH = 120;
export var DUE_DATE_WIDTH = 100;
export var END_DATE_WIDTH = 100;
export var AAT_STATUS_WIDTH = 100;
export var ROW_WIDTH = COMPANY_NAME_WIDTH + OPPORTUNITY_NAME_WIDTH + OFFERING_NAME_WIDTH + ACCOUNT_CELL_WIDTH + BASE_POINTS_WIDTH + KICKER_POINTS_WIDTH + STAGE_BUTTONS_WIDTH + BUNDLES_WIDTH + DUE_DATE_WIDTH + END_DATE_WIDTH + AAT_STATUS_WIDTH;
export var STATUS_LIST = ['Planned', 'Pitched', 'Won', 'Lost'];
export var AAT_STATUS_LIST = ['Active', 'Passive', 'Abandoned'];
export class CustomDate {
  constructor(y, m, d) {
    this.year = y;
    this.month = m;
    this.day = d;
  }
  addDays(days) {
    var newDay = this.day + days;
    var newMonth = this.month + Math.floor(newDay / 30);
    newDay = newDay % 30;
    var newYear = this.year + Math.floor(newMonth / 12);
    return new CustomDate(newYear, newMonth, newDay);
  }
  static now() {
    return new CustomDate(2014, 1, 28);
  }
}
Object.defineProperty(CustomDate, "parameters", {get: function() {
    return [[int], [int], [int]];
  }});
Object.defineProperty(CustomDate.prototype.addDays, "parameters", {get: function() {
    return [[int]];
  }});
export class RawEntity {
  constructor() {
    this._data = MapWrapper.create();
  }
  get(key) {
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
  }
  set(key, value) {
    if (key.indexOf('.') == -1) {
      this._data[key] = value;
      return ;
    }
    var pieces = key.split('.');
    var last = ListWrapper.last(pieces);
    pieces.length = pieces.length - 1;
    var target = _resolve(pieces, this);
    target[last] = value;
  }
  remove(key) {
    if (!key.contains('.')) {
      return MapWrapper.delete(this._data, key);
    }
    var pieces = key.split('.');
    var last = ListWrapper.last(pieces);
    pieces.length = pieces.length - 1;
    var target = _resolve(pieces, this);
    return target.remove(last);
  }
  _resolve(pieces, start) {
    var cur = start;
    for (var i = 0; i < pieces.length; i++) {
      cur = cur[pieces[i]];
      if (cur == null) {
        return null;
      }
    }
    return cur;
  }
}
Object.defineProperty(RawEntity.prototype.get, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
Object.defineProperty(RawEntity.prototype.set, "parameters", {get: function() {
    return [[assert.type.string], []];
  }});
Object.defineProperty(RawEntity.prototype.remove, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
export class Company extends RawEntity {
  get name() {
    return this.get('name');
  }
  set name(val) {
    this.set('name', val);
  }
}
Object.defineProperty(Object.getOwnPropertyDescriptor(Company.prototype, "name").set, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
export class Offering extends RawEntity {
  get name() {
    return this.get('name');
  }
  set name(val) {
    this.set('name', val);
  }
  get company() {
    return this.get('company');
  }
  set company(val) {
    this.set('company', val);
  }
  get opportunity() {
    return this.get('opportunity');
  }
  set opportunity(val) {
    this.set('opportunity', val);
  }
  get account() {
    return this.get('account');
  }
  set account(val) {
    this.set('account', val);
  }
  get basePoints() {
    return this.get('basePoints');
  }
  set basePoints(val) {
    this.set('basePoints', val);
  }
  get kickerPoints() {
    return this.get('kickerPoints');
  }
  set kickerPoints(val) {
    this.set('kickerPoints', val);
  }
  get status() {
    return this.get('status');
  }
  set status(val) {
    this.set('status', val);
  }
  get bundles() {
    return this.get('bundles');
  }
  set bundles(val) {
    this.set('bundles', val);
  }
  get dueDate() {
    return this.get('dueDate');
  }
  set dueDate(val) {
    this.set('dueDate', val);
  }
  get endDate() {
    return this.get('endDate');
  }
  set endDate(val) {
    this.set('endDate', val);
  }
  get aatStatus() {
    return this.get('aatStatus');
  }
  set aatStatus(val) {
    this.set('aatStatus', val);
  }
}
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
export class Opportunity extends RawEntity {
  get name() {
    return this.get('name');
  }
  set name(val) {
    this.set('name', val);
  }
}
Object.defineProperty(Object.getOwnPropertyDescriptor(Opportunity.prototype, "name").set, "parameters", {get: function() {
    return [[assert.type.string]];
  }});
export class Account extends RawEntity {
  get accountId() {
    return this.get('accountId');
  }
  set accountId(val) {
    this.set('accountId', val);
  }
}
Object.defineProperty(Object.getOwnPropertyDescriptor(Account.prototype, "accountId").set, "parameters", {get: function() {
    return [[int]];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/benchmarks/src/naive_infinite_scroll/common.map

//# sourceMappingURL=./common.map