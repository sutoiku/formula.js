/* global suite, test */
var error = require('../lib/error');
var logical = require('../lib/logical');
var should = require('should');

suite('Logical', function() {
  test('AND', function() {
    logical.AND(true, true).should.equal(true);
    logical.AND(true, false).should.equal(false);
  });

  test('CHOOSE', function() {
    logical.CHOOSE().should.equal(error.na);
    logical.CHOOSE(1).should.equal(error.na);
    logical.CHOOSE(1, 'jima').should.equal('jima');
    logical.CHOOSE(3, 'jima', 'jimb', 'jimc').should.equal('jimc');
    logical.CHOOSE(2, 'jima').should.equal(error.value);
    logical.CHOOSE(255, 'jima').should.equal(error.value);
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

  test('XOR', function() {
    logical.XOR(false, false).should.equal(false);
    logical.XOR(false, true).should.equal(true);
    logical.XOR(true, false).should.equal(true);
    logical.XOR(true, true).should.equal(false);
  });
  
  test('SWITCH', function() {
    should.not.exist(logical.SWITCH());
    should.not.exist(logical.SWITCH(7));
    logical.SWITCH(7, "Default Expression").should.equal("Default Expression");
    should.not.exist(logical.SWITCH(7, 9, "Nine"));
    logical.SWITCH(7, 9, "Nine", 7, "Seven").should.equal("Seven");
    logical.SWITCH(7, 9, "Nine", 7, "Seven").should.equal("Seven");
    logical.SWITCH(8, 9, "Nine", 7, "Seven", "Eight").should.equal("Eight");
    should.not.exist(logical.SWITCH(10, 9, "Nine", 7, "Seven", 8, "Eight"));
  });
});
