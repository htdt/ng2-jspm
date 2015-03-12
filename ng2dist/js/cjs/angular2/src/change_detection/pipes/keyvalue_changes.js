"use strict";
Object.defineProperties(module.exports, {
  KeyValueChangesFactory: {get: function() {
      return KeyValueChangesFactory;
    }},
  KeyValueChanges: {get: function() {
      return KeyValueChanges;
    }},
  KVChangeRecord: {get: function() {
      return KVChangeRecord;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/src/change_detection/pipes/keyvalue_changes";
var $__rtts_95_assert_47_rtts_95_assert__,
    $__angular2_47_src_47_facade_47_collection__,
    $__angular2_47_src_47_facade_47_lang__,
    $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe__;
var assert = ($__rtts_95_assert_47_rtts_95_assert__ = require("rtts_assert/rtts_assert"), $__rtts_95_assert_47_rtts_95_assert__ && $__rtts_95_assert_47_rtts_95_assert__.__esModule && $__rtts_95_assert_47_rtts_95_assert__ || {default: $__rtts_95_assert_47_rtts_95_assert__}).assert;
var $__1 = ($__angular2_47_src_47_facade_47_collection__ = require("angular2/src/facade/collection"), $__angular2_47_src_47_facade_47_collection__ && $__angular2_47_src_47_facade_47_collection__.__esModule && $__angular2_47_src_47_facade_47_collection__ || {default: $__angular2_47_src_47_facade_47_collection__}),
    ListWrapper = $__1.ListWrapper,
    MapWrapper = $__1.MapWrapper,
    StringMapWrapper = $__1.StringMapWrapper;
var $__2 = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}),
    stringify = $__2.stringify,
    looseIdentical = $__2.looseIdentical,
    isJsObject = $__2.isJsObject;
var $__3 = ($__angular2_47_src_47_change_95_detection_47_pipes_47_pipe__ = require("./pipe"), $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe__ && $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe__.__esModule && $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe__ || {default: $__angular2_47_src_47_change_95_detection_47_pipes_47_pipe__}),
    NO_CHANGE = $__3.NO_CHANGE,
    Pipe = $__3.Pipe;
var KeyValueChangesFactory = function KeyValueChangesFactory() {};
($traceurRuntime.createClass)(KeyValueChangesFactory, {
  supports: function(obj) {
    return assert.returnType((KeyValueChanges.supportsObj(obj)), assert.type.boolean);
  },
  create: function() {
    return assert.returnType((new KeyValueChanges()), Pipe);
  }
}, {});
var KeyValueChanges = function KeyValueChanges() {
  $traceurRuntime.superConstructor($KeyValueChanges).call(this);
  this._records = MapWrapper.create();
  this._mapHead = null;
  this._previousMapHead = null;
  this._changesHead = null;
  this._changesTail = null;
  this._additionsHead = null;
  this._additionsTail = null;
  this._removalsHead = null;
  this._removalsTail = null;
};
var $KeyValueChanges = KeyValueChanges;
($traceurRuntime.createClass)(KeyValueChanges, {
  supports: function(obj) {
    return assert.returnType(($KeyValueChanges.supportsObj(obj)), assert.type.boolean);
  },
  transform: function(map) {
    if (this.check(map)) {
      return this;
    } else {
      return NO_CHANGE;
    }
  },
  get isDirty() {
    return assert.returnType((this._additionsHead !== null || this._changesHead !== null || this._removalsHead !== null), assert.type.boolean);
  },
  forEachItem: function(fn) {
    assert.argumentTypes(fn, Function);
    var record;
    for (record = this._mapHead; record !== null; record = record._next) {
      fn(record);
    }
  },
  forEachPreviousItem: function(fn) {
    assert.argumentTypes(fn, Function);
    var record;
    for (record = this._previousMapHead; record !== null; record = record._nextPrevious) {
      fn(record);
    }
  },
  forEachChangedItem: function(fn) {
    assert.argumentTypes(fn, Function);
    var record;
    for (record = this._changesHead; record !== null; record = record._nextChanged) {
      fn(record);
    }
  },
  forEachAddedItem: function(fn) {
    assert.argumentTypes(fn, Function);
    var record;
    for (record = this._additionsHead; record !== null; record = record._nextAdded) {
      fn(record);
    }
  },
  forEachRemovedItem: function(fn) {
    assert.argumentTypes(fn, Function);
    var record;
    for (record = this._removalsHead; record !== null; record = record._nextRemoved) {
      fn(record);
    }
  },
  check: function(map) {
    var $__4 = this;
    this._reset();
    var records = this._records;
    var oldSeqRecord = assert.type(this._mapHead, KVChangeRecord);
    var lastOldSeqRecord = assert.type(null, KVChangeRecord);
    var lastNewSeqRecord = assert.type(null, KVChangeRecord);
    var seqChanged = assert.type(false, assert.type.boolean);
    this._forEach(map, (function(value, key) {
      var newSeqRecord;
      if (oldSeqRecord !== null && key === oldSeqRecord.key) {
        newSeqRecord = oldSeqRecord;
        if (!looseIdentical(value, oldSeqRecord._currentValue)) {
          oldSeqRecord._previousValue = oldSeqRecord._currentValue;
          oldSeqRecord._currentValue = value;
          $__4._addToChanges(oldSeqRecord);
        }
      } else {
        seqChanged = true;
        if (oldSeqRecord !== null) {
          oldSeqRecord._next = null;
          $__4._removeFromSeq(lastOldSeqRecord, oldSeqRecord);
          $__4._addToRemovals(oldSeqRecord);
        }
        if (MapWrapper.contains(records, key)) {
          newSeqRecord = MapWrapper.get(records, key);
        } else {
          newSeqRecord = new KVChangeRecord(key);
          MapWrapper.set(records, key, newSeqRecord);
          newSeqRecord._currentValue = value;
          $__4._addToAdditions(newSeqRecord);
        }
      }
      if (seqChanged) {
        if ($__4._isInRemovals(newSeqRecord)) {
          $__4._removeFromRemovals(newSeqRecord);
        }
        if (lastNewSeqRecord == null) {
          $__4._mapHead = newSeqRecord;
        } else {
          lastNewSeqRecord._next = newSeqRecord;
        }
      }
      lastOldSeqRecord = oldSeqRecord;
      lastNewSeqRecord = newSeqRecord;
      oldSeqRecord = oldSeqRecord === null ? null : oldSeqRecord._next;
    }));
    this._truncate(lastOldSeqRecord, oldSeqRecord);
    return assert.returnType((this.isDirty), assert.type.boolean);
  },
  _reset: function() {
    if (this.isDirty) {
      var record;
      for (record = this._previousMapHead = this._mapHead; record !== null; record = record._next) {
        record._nextPrevious = record._next;
      }
      for (record = this._changesHead; record !== null; record = record._nextChanged) {
        record._previousValue = record._currentValue;
      }
      for (record = this._additionsHead; record != null; record = record._nextAdded) {
        record._previousValue = record._currentValue;
      }
      this._changesHead = this._changesTail = null;
      this._additionsHead = this._additionsTail = null;
      this._removalsHead = this._removalsTail = null;
    }
  },
  _truncate: function(lastRecord, record) {
    assert.argumentTypes(lastRecord, KVChangeRecord, record, KVChangeRecord);
    while (record !== null) {
      if (lastRecord === null) {
        this._mapHead = null;
      } else {
        lastRecord._next = null;
      }
      var nextRecord = record._next;
      this._addToRemovals(record);
      lastRecord = record;
      record = nextRecord;
    }
    for (var rec = assert.type(this._removalsHead, KVChangeRecord); rec !== null; rec = rec._nextRemoved) {
      rec._previousValue = rec._currentValue;
      rec._currentValue = null;
      MapWrapper.delete(this._records, rec.key);
    }
  },
  _isInRemovals: function(record) {
    assert.argumentTypes(record, KVChangeRecord);
    return record === this._removalsHead || record._nextRemoved !== null || record._prevRemoved !== null;
  },
  _addToRemovals: function(record) {
    assert.argumentTypes(record, KVChangeRecord);
    if (this._removalsHead === null) {
      this._removalsHead = this._removalsTail = record;
    } else {
      this._removalsTail._nextRemoved = record;
      record._prevRemoved = this._removalsTail;
      this._removalsTail = record;
    }
  },
  _removeFromSeq: function(prev, record) {
    assert.argumentTypes(prev, KVChangeRecord, record, KVChangeRecord);
    var next = record._next;
    if (prev === null) {
      this._mapHead = next;
    } else {
      prev._next = next;
    }
  },
  _removeFromRemovals: function(record) {
    assert.argumentTypes(record, KVChangeRecord);
    var prev = record._prevRemoved;
    var next = record._nextRemoved;
    if (prev === null) {
      this._removalsHead = next;
    } else {
      prev._nextRemoved = next;
    }
    if (next === null) {
      this._removalsTail = prev;
    } else {
      next._prevRemoved = prev;
    }
    record._prevRemoved = record._nextRemoved = null;
  },
  _addToAdditions: function(record) {
    assert.argumentTypes(record, KVChangeRecord);
    if (this._additionsHead === null) {
      this._additionsHead = this._additionsTail = record;
    } else {
      this._additionsTail._nextAdded = record;
      this._additionsTail = record;
    }
  },
  _addToChanges: function(record) {
    assert.argumentTypes(record, KVChangeRecord);
    if (this._changesHead === null) {
      this._changesHead = this._changesTail = record;
    } else {
      this._changesTail._nextChanged = record;
      this._changesTail = record;
    }
  },
  toString: function() {
    var items = [];
    var previous = [];
    var changes = [];
    var additions = [];
    var removals = [];
    var record;
    for (record = this._mapHead; record !== null; record = record._next) {
      ListWrapper.push(items, stringify(record));
    }
    for (record = this._previousMapHead; record !== null; record = record._nextPrevious) {
      ListWrapper.push(previous, stringify(record));
    }
    for (record = this._changesHead; record !== null; record = record._nextChanged) {
      ListWrapper.push(changes, stringify(record));
    }
    for (record = this._additionsHead; record !== null; record = record._nextAdded) {
      ListWrapper.push(additions, stringify(record));
    }
    for (record = this._removalsHead; record !== null; record = record._nextRemoved) {
      ListWrapper.push(removals, stringify(record));
    }
    return assert.returnType(("map: " + items.join(', ') + "\n" + "previous: " + previous.join(', ') + "\n" + "additions: " + additions.join(', ') + "\n" + "changes: " + changes.join(', ') + "\n" + "removals: " + removals.join(', ') + "\n"), assert.type.string);
  },
  _forEach: function(obj, fn) {
    assert.argumentTypes(obj, assert.type.any, fn, Function);
    if (obj instanceof Map) {
      MapWrapper.forEach(obj, fn);
    } else {
      StringMapWrapper.forEach(obj, fn);
    }
  }
}, {supportsObj: function(obj) {
    return assert.returnType((obj instanceof Map || isJsObject(obj)), assert.type.boolean);
  }}, Pipe);
Object.defineProperty(KeyValueChanges.prototype.forEachItem, "parameters", {get: function() {
    return [[Function]];
  }});
Object.defineProperty(KeyValueChanges.prototype.forEachPreviousItem, "parameters", {get: function() {
    return [[Function]];
  }});
Object.defineProperty(KeyValueChanges.prototype.forEachChangedItem, "parameters", {get: function() {
    return [[Function]];
  }});
Object.defineProperty(KeyValueChanges.prototype.forEachAddedItem, "parameters", {get: function() {
    return [[Function]];
  }});
Object.defineProperty(KeyValueChanges.prototype.forEachRemovedItem, "parameters", {get: function() {
    return [[Function]];
  }});
Object.defineProperty(KeyValueChanges.prototype._truncate, "parameters", {get: function() {
    return [[KVChangeRecord], [KVChangeRecord]];
  }});
Object.defineProperty(KeyValueChanges.prototype._isInRemovals, "parameters", {get: function() {
    return [[KVChangeRecord]];
  }});
Object.defineProperty(KeyValueChanges.prototype._addToRemovals, "parameters", {get: function() {
    return [[KVChangeRecord]];
  }});
Object.defineProperty(KeyValueChanges.prototype._removeFromSeq, "parameters", {get: function() {
    return [[KVChangeRecord], [KVChangeRecord]];
  }});
Object.defineProperty(KeyValueChanges.prototype._removeFromRemovals, "parameters", {get: function() {
    return [[KVChangeRecord]];
  }});
Object.defineProperty(KeyValueChanges.prototype._addToAdditions, "parameters", {get: function() {
    return [[KVChangeRecord]];
  }});
Object.defineProperty(KeyValueChanges.prototype._addToChanges, "parameters", {get: function() {
    return [[KVChangeRecord]];
  }});
Object.defineProperty(KeyValueChanges.prototype._forEach, "parameters", {get: function() {
    return [[], [Function]];
  }});
var KVChangeRecord = function KVChangeRecord(key) {
  this.key = key;
  this._previousValue = null;
  this._currentValue = null;
  this._nextPrevious = null;
  this._next = null;
  this._nextAdded = null;
  this._nextRemoved = null;
  this._prevRemoved = null;
  this._nextChanged = null;
};
($traceurRuntime.createClass)(KVChangeRecord, {toString: function() {
    return assert.returnType((looseIdentical(this._previousValue, this._currentValue) ? stringify(this.key) : (stringify(this.key) + '[' + stringify(this._previousValue) + '->' + stringify(this._currentValue) + ']')), assert.type.string);
  }}, {});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/src/change_detection/pipes/keyvalue_changes.map

//# sourceMappingURL=./keyvalue_changes.map