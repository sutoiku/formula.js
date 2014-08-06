var error = require('../lib/error');
var information = require('../lib/information');
var should = require('should');

suite('Information', function() {
  // TODO
  test('CELL', function() {
    should.equal(information.CELL(), undefined);
  });

  test('ERROR.TYPE', function() {
    information.ERROR.TYPE(error.nil).should.equal(1);
    information.ERROR.TYPE(error.div0).should.equal(2);
    information.ERROR.TYPE(error.value).should.equal(3);
    information.ERROR.TYPE(error.ref).should.equal(4);
    information.ERROR.TYPE(error.name).should.equal(5);
    information.ERROR.TYPE(error.num).should.equal(6);
    information.ERROR.TYPE(error.na).should.equal(7);
    information.ERROR.TYPE(error.data).should.equal(8);
    information.ERROR.TYPE(1).should.equal(error.na);
  });

  // TODO
  test('INFO', function() {
    should.equal(information.INFO(), undefined);
  });

  test('ISBLANK', function() {
    information.ISBLANK(null).should.equal(true);
    information.ISBLANK(1).should.equal(false);
  });
});
