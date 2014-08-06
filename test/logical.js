var error = require('../lib/error');
var logical = require('../lib/logical');
var should = require('should');

suite('Logical', function() {
  test('AND', function() {
    logical.AND(true, true).should.equal(true);
    logical.AND(true, false).should.equal(false);
  });

  test('FALSE', function() {
    logical.FALSE().should.equal(false);
  });

  test('IF', function() {
    logical.IF(true, 1, 2).should.equal(1);
    logical.IF(false, 1, 2).should.equal(2);
  });

  test('IFERROR', function() {
    logical.IFERROR(1, 2).should.equal(1);
    logical.IFERROR(error.value, 2).should.equal(2);
  });

  test('IFNA', function() {
    logical.IFNA(1, 2).should.equal(1);
    logical.IFNA(error.na, 2).should.equal(2);
  });

  test('NOT', function() {
    logical.NOT(true).should.equal(false);
    logical.NOT(false).should.equal(true);
  });

  test('OR', function() {
    logical.OR(true).should.equal(true);
    logical.OR(false).should.equal(false);
    logical.OR(true, false).should.equal(true);
  });

  test('TRUE', function() {
    logical.TRUE().should.equal(true);
  });
});
