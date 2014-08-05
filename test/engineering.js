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

  test('BIN2HEX', function() {
    engineering.BIN2HEX(11111011, 4).should.equal('00fb');
    engineering.BIN2HEX(1110).should.equal('e');
    engineering.BIN2HEX(1111111111).should.equal('ffffffffff');
    engineering.BIN2HEX('a').should.equal(error.num);
    engineering.BIN2HEX(1, 'a').should.equal(error.value);
    engineering.BIN2HEX(1, -1).should.equal(error.num);
  });

  test('BIN2OCT', function() {
    engineering.BIN2OCT(1001, 3).should.equal('011');
    engineering.BIN2OCT(1100100).should.equal('144');
    engineering.BIN2OCT(1111111111).should.equal('7777777777');
    engineering.BIN2OCT('a').should.equal(error.num);
    engineering.BIN2OCT(1, 'a').should.equal(error.value);
    engineering.BIN2OCT(1, -1).should.equal(error.num);
  });

  test('BITAND', function() {
    engineering.BITAND(1, 5).should.equal(1);
    engineering.BITAND(13,25).should.equal(9);
    engineering.BITAND('a', 1).should.equal(error.value);
    engineering.BITAND(-1, 1).should.equal(error.num);
    engineering.BITAND(1.1, 1).should.equal(error.num);
    engineering.BITAND(281474976710656, 1).should.equal(error.num);
  });

  test('BITLSHIFT', function() {
    engineering.BITLSHIFT(4, 2).should.equal(16);
    engineering.BITLSHIFT('a', 1).should.equal(error.value);
    engineering.BITLSHIFT(-1, 1).should.equal(error.num);
    engineering.BITLSHIFT(1.1, 1).should.equal(error.num);
    engineering.BITLSHIFT(281474976710656, 1).should.equal(error.num);
    engineering.BITLSHIFT(1, 54).should.equal(error.num);
  });

  test('BITOR', function() {
    engineering.BITOR(23, 10).should.equal(31);
    engineering.BITOR('a', 1).should.equal(error.value);
    engineering.BITOR(-1, 1).should.equal(error.num);
    engineering.BITOR(1.1, 1).should.equal(error.num);
    engineering.BITOR(281474976710656, 1).should.equal(error.num);
  });

  test('BITRSHIFT', function() {
    engineering.BITRSHIFT(13, 2).should.equal(3);
    engineering.BITRSHIFT('a', 1).should.equal(error.value);
    engineering.BITRSHIFT(-1, 1).should.equal(error.num);
    engineering.BITRSHIFT(1.1, 1).should.equal(error.num);
    engineering.BITRSHIFT(281474976710656, 1).should.equal(error.num);
    engineering.BITRSHIFT(1, 54).should.equal(error.num);
  });

  test('BITXOR', function() {
    engineering.BITXOR(5, 3).should.equal(6);
    engineering.BITXOR('a', 1).should.equal(error.value);
    engineering.BITXOR(-1, 1).should.equal(error.num);
    engineering.BITXOR(1.1, 1).should.equal(error.num);
    engineering.BITXOR(281474976710656, 1).should.equal(error.num);
  });

  test('COMPLEX', function() {
    engineering.COMPLEX(3, 4).should.equal('3+4i');
    engineering.COMPLEX(3, 4, 'j').should.equal('3+4j');
    engineering.COMPLEX(0, 1).should.equal('i');
    engineering.COMPLEX(1, 0).should.equal('1');
    engineering.COMPLEX(0, 0).should.equal(0);
    engineering.COMPLEX('a', 1).should.equal(error.value);
    engineering.COMPLEX(1, 1, 'k').should.equal(error.value);
  });

  test('CONVERT', function() {
    engineering.CONVERT(1, 'lbm', 'kg').should.equal(0.45359237);
    // engineering.CONVERT(68, 'F', 'C').should.equal(20);
    engineering.CONVERT(2.5, 'ft', 'sec').should.equal(error.na);
    engineering.CONVERT(engineering.CONVERT(100, 'ft', 'm'), 'ft', 'm').should.equal(9.290304);
    engineering.CONVERT('a', 1).should.equal(error.value);
    engineering.CONVERT(1, 'invalid', 'invalid').should.equal(error.na);
    engineering.CONVERT(1, 'da', 'invalid').should.equal(error.na);
    engineering.CONVERT(1, 'ki', 'invalid').should.equal(error.na);
    engineering.CONVERT(1, 'invalid', 'da').should.equal(error.na);
    engineering.CONVERT(1, 'invalid', 'ki').should.equal(error.na);

    engineering.CONVERT(2, 'mi', 'yd').should.equal(3520);
    engineering.CONVERT(2, 'nm', 'mm').should.equal(0.000002);
    engineering.CONVERT(2, 'kg', 'lbm').should.equal(4.409245243697551);
    engineering.CONVERT(2, 'g', 'lbm').should.equal(0.004409245243697552);
    engineering.CONVERT(2, 'mg', 'lbm').should.equal(0.000004409245243697551);
    engineering.CONVERT(3583, 'byte', 'kbyte').should.equal(3.583);
    engineering.CONVERT(3583, 'byte', 'bit').should.equal(28664);
    engineering.CONVERT(64, 'kibyte', 'bit').should.equal(524288);
    engineering.CONVERT('Lots of', 'mi', 'yard').should.equal(error.value);
    engineering.CONVERT(1, 'mi', 'yard').should.equal(error.na);

  });
});
