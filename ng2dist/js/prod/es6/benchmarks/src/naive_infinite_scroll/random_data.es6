import {int,
  StringWrapper} from 'angular2/src/facade/lang';
import {List,
  ListWrapper} from 'angular2/src/facade/collection';
import {CustomDate,
  Offering,
  Company,
  Opportunity,
  Account,
  STATUS_LIST,
  AAT_STATUS_LIST} from './common';
export function generateOfferings(count) {
  var res = [];
  for (var i = 0; i < count; i++) {
    ListWrapper.push(res, generateOffering(i));
  }
  return res;
}
Object.defineProperty(generateOfferings, "parameters", {get: function() {
    return [[int]];
  }});
export function generateOffering(seed) {
  var res = new Offering();
  res.name = generateName(seed++);
  res.company = generateCompany(seed++);
  res.opportunity = generateOpportunity(seed++);
  res.account = generateAccount(seed++);
  res.basePoints = seed % 10;
  res.kickerPoints = seed % 4;
  res.status = STATUS_LIST[seed % STATUS_LIST.length];
  res.bundles = randomString(seed++);
  res.dueDate = randomDate(seed++);
  res.endDate = randomDate(seed++, res.dueDate);
  res.aatStatus = AAT_STATUS_LIST[seed % AAT_STATUS_LIST.length];
  return res;
}
Object.defineProperty(generateOffering, "parameters", {get: function() {
    return [[int]];
  }});
export function generateCompany(seed) {
  var res = new Company();
  res.name = generateName(seed);
  return res;
}
Object.defineProperty(generateCompany, "parameters", {get: function() {
    return [[int]];
  }});
export function generateOpportunity(seed) {
  var res = new Opportunity();
  res.name = generateName(seed);
  return res;
}
Object.defineProperty(generateOpportunity, "parameters", {get: function() {
    return [[int]];
  }});
export function generateAccount(seed) {
  var res = new Account();
  res.accountId = seed;
  return res;
}
Object.defineProperty(generateAccount, "parameters", {get: function() {
    return [[int]];
  }});
var names = ['Foo', 'Bar', 'Baz', 'Qux', 'Quux', 'Garply', 'Waldo', 'Fred', 'Plugh', 'Xyzzy', 'Thud', 'Cruft', 'Stuff'];
function generateName(seed) {
  return names[seed % names.length];
}
Object.defineProperty(generateName, "parameters", {get: function() {
    return [[int]];
  }});
var offsets = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
function randomDate(seed, minDate = null) {
  if (minDate == null) {
    minDate = CustomDate.now();
  }
  return minDate.addDays(offsets[seed % offsets.length]);
}
Object.defineProperty(randomDate, "parameters", {get: function() {
    return [[int], [CustomDate]];
  }});
var stringLengths = [5, 7, 9, 11, 13];
var charCodeOffsets = [0, 1, 2, 3, 4, 5, 6, 7, 8];
function randomString(seed) {
  var len = stringLengths[seed % 5];
  var str = '';
  for (var i = 0; i < len; i++) {
    str += StringWrapper.fromCharCode(97 + charCodeOffsets[seed % 9] + i);
  }
  return str;
}
Object.defineProperty(randomString, "parameters", {get: function() {
    return [[int]];
  }});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/benchmarks/src/naive_infinite_scroll/random_data.map

//# sourceMappingURL=./random_data.map