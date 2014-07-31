var mathTrig = require('../lib/math-trig');
var should = require('should');

suite('Math & Trig', function () {
  test("SUM", function() {
    mathTrig.SUM(1, 2, 3).should.equal(6);
  });
});