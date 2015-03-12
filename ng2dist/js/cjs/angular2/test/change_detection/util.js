"use strict";
Object.defineProperties(module.exports, {
  arrayChangesAsString: {get: function() {
      return arrayChangesAsString;
    }},
  kvChangesAsString: {get: function() {
      return kvChangesAsString;
    }},
  __esModule: {value: true}
});
var __moduleName = "angular2/test/change_detection/util";
var $__angular2_47_src_47_facade_47_lang__;
var isBlank = ($__angular2_47_src_47_facade_47_lang__ = require("angular2/src/facade/lang"), $__angular2_47_src_47_facade_47_lang__ && $__angular2_47_src_47_facade_47_lang__.__esModule && $__angular2_47_src_47_facade_47_lang__ || {default: $__angular2_47_src_47_facade_47_lang__}).isBlank;
function arrayChangesAsString($__1) {
  var $__2 = $__1,
      collection = $__2.collection,
      previous = $__2.previous,
      additions = $__2.additions,
      moves = $__2.moves,
      removals = $__2.removals;
  if (isBlank(collection))
    collection = [];
  if (isBlank(previous))
    previous = [];
  if (isBlank(additions))
    additions = [];
  if (isBlank(moves))
    moves = [];
  if (isBlank(removals))
    removals = [];
  return "collection: " + collection.join(', ') + "\n" + "previous: " + previous.join(', ') + "\n" + "additions: " + additions.join(', ') + "\n" + "moves: " + moves.join(', ') + "\n" + "removals: " + removals.join(', ') + "\n";
}
function kvChangesAsString($__1) {
  var $__2 = $__1,
      map = $__2.map,
      previous = $__2.previous,
      additions = $__2.additions,
      changes = $__2.changes,
      removals = $__2.removals;
  if (isBlank(map))
    map = [];
  if (isBlank(previous))
    previous = [];
  if (isBlank(additions))
    additions = [];
  if (isBlank(changes))
    changes = [];
  if (isBlank(removals))
    removals = [];
  return "map: " + map.join(', ') + "\n" + "previous: " + previous.join(', ') + "\n" + "additions: " + additions.join(', ') + "\n" + "changes: " + changes.join(', ') + "\n" + "removals: " + removals.join(', ') + "\n";
}

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/angular2/test/change_detection/util.map

//# sourceMappingURL=./util.map