var error = require('../lib/error');
var engineering = require('../lib/engineering');
var should = require('should');

suite('Engineering', function() {
  // TODO
  test('BESSELI', function() {
    should.equal(engineering.BESSELI(), undefined);
  });


  // TODO
  test('BESSELJ', function() {
    should.equal(engineering.BESSELJ(), undefined);
  });


  // TODO
  test('BESSELK', function() {
    should.equal(engineering.BESSELK(), undefined);
  });


  // TODO
  test('BESSELY', function() {
    should.equal(engineering.BESSELY(), undefined);
  });

  test('BIN2DEC', function() {
    engineering.BIN2DEC(1100100).should.equal(100);
    engineering.BIN2DEC(1111111111).should.equal(-1);
    engineering.BIN2DEC('a').should.equal(error.num);
  });
});
