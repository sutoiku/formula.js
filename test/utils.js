var utils = require('../lib/utils');
var should = require('should');
var error = require('../lib/error');

suite('Utils', function() {
  test('flatten', function() {
    should.deepEqual(utils.flatten([
      [1, 2],
      [3, 4]
    ]), [1, 2, 3, 4]);
  });

  test('argsToArray', function() {
    (function() {
      should.deepEqual(utils.argsToArray(arguments), [1, 2, 3]);
    })(1, 2, 3);
  });

  test('cleanFloat', function() {
    utils.cleanFloat(3.0999999999999996).should.equal(3.1);
  });

  test('parseBool', function() {
    utils.parseBool(true).should.equal(true);
    utils.parseBool(0).should.equal(false);
    utils.parseBool(1).should.equal(true);
    utils.parseBool('TRUE').should.equal(true);
    utils.parseBool('FALSE').should.equal(false);
    utils.parseBool(new Date()).should.equal(true);
    utils.parseBool(NaN).should.equal(true);
    var err = new Error();
    utils.parseBool(err).should.equal(err);
  });

  test('parseDateArray', function() {
    utils.parseDateArray(['01/jan/2009', 'invalid']).should.equal(error.value);
  });

  test('arrayValuesToNumbers', function() {
    should.deepEqual(utils.arrayValuesToNumbers(['1.4']), [1.4]);
    should.deepEqual(utils.arrayValuesToNumbers(['not convertible']), [0]);
  });
});