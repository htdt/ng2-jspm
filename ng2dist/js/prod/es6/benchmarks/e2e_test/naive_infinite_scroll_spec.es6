var testUtil = require('angular2/src/test_lib/e2e_util');
describe('ng2 naive infinite scroll benchmark', function() {
  var URL = 'benchmarks/src/naive_infinite_scroll/index.html?appSize=3';
  afterEach(testUtil.verifyNoBrowserErrors);
  it('should not throw errors', function() {
    browser.get(URL);
    var expectedRowCount = 18;
    var expectedCellsPerRow = 28;
    var allScrollItems = 'scroll-app #testArea scroll-item';
    var cells = `${allScrollItems} .row *`;
    var stageButtons = `${allScrollItems} .row stage-buttons button`;
    var count = function(selector) {
      return browser.executeScript(`return document.querySelectorAll("${selector}").length;`);
    };
    var clickFirstOf = function(selector) {
      return browser.executeScript(`document.querySelector("${selector}").click();`);
    };
    var firstTextOf = function(selector) {
      return browser.executeScript(`return document.querySelector("${selector}").innerText;`);
    };
    count(allScrollItems).then(function(c) {
      expect(c).toBe(expectedRowCount);
    });
    count(cells).then(function(c) {
      expect(c).toBe(expectedRowCount * expectedCellsPerRow);
    });
    firstTextOf(`${stageButtons}:enabled`).then(function(text) {
      expect(text).toBe('Pitched');
      clickFirstOf(`${stageButtons}:enabled`).then(function() {
        firstTextOf(`${stageButtons}:enabled`).then(function(text) {
          expect(text).toBe('Won');
        });
      });
    });
    $("#reset-btn").click();
    $("#run-btn").click();
    browser.wait(() => {
      return $('#done').getText().then(function() {
        return true;
      }, function() {
        return false;
      });
    }, 10000);
  });
});

//# sourceMappingURL=/Users/crush/Documents/learning_js/angular/modules/benchmarks/e2e_test/naive_infinite_scroll_spec.map

//# sourceMappingURL=./naive_infinite_scroll_spec.map