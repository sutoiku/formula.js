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

  test('DEC2BIN', function() {
    engineering.DEC2BIN(9).should.equal('1001');
    engineering.DEC2BIN(9, 4).should.equal('1001');
    engineering.DEC2BIN(-100).should.equal('1110011100');
    engineering.DEC2BIN('a').should.equal(error.value);
    engineering.DEC2BIN(512).should.equal(error.num);
    engineering.DEC2BIN(1, 'a').should.equal(error.value);
    engineering.DEC2BIN(1, -1).should.equal(error.num);
  });

  test('DEC2HEX', function() {
    engineering.DEC2HEX(100, 4).should.equal('0064');
    engineering.DEC2HEX(-54).should.equal('ffffffffca');
    engineering.DEC2HEX(28).should.equal('1c');
    engineering.DEC2HEX(549755813888).should.equal(error.num);
    engineering.DEC2HEX(64, 1).should.equal(error.num);
    engineering.DEC2HEX('a').should.equal(error.value);
    engineering.DEC2HEX(1, 'a').should.equal(error.value);
    engineering.DEC2HEX(1, -1).should.equal(error.num);
  });

  test('DEC2OCT', function() {
    engineering.DEC2OCT(58).should.equal('72');
    engineering.DEC2OCT(58, 3).should.equal('072');
    engineering.DEC2OCT(-100).should.equal('7777777634');
    engineering.DEC2OCT('a').should.equal(error.value);
    engineering.DEC2OCT(549755813888).should.equal(error.num);
    engineering.DEC2OCT(1, 'a').should.equal(error.value);
    engineering.DEC2OCT(1, -1).should.equal(error.num);
  });

  test('DELTA', function() {
    engineering.DELTA(5, 4).should.equal(0);
    engineering.DELTA(5, 5).should.equal(1);
    engineering.DELTA(0.5, 0).should.equal(0);
    engineering.DELTA('a').should.equal(error.value);
  });

  test('ERF', function() {
    engineering.ERF(0.745).should.equal(0.7079289200957377);
    engineering.ERF(1).should.equal(0.8427007929497149);
    engineering.ERF('a').should.equal(error.value);
  });

  // TODO
  test('ERF.PRECISE', function() {
    should.equal(engineering.ERF.PRECISE(), undefined);
  });

  test('ERFC', function() {
    engineering.ERFC(1).should.equal(0.1572992070502851);
    engineering.ERFC('a').should.equal(error.value);
  });

  // TODO
  test('ERFC.PRECISE', function() {
    should.equal(engineering.ERFC.PRECISE(), undefined);
  });

  test('GESTEP', function() {
    engineering.GESTEP(5, 4).should.equal(1);
    engineering.GESTEP(5, 5).should.equal(1);
    engineering.GESTEP(-4, -5).should.equal(1);
    engineering.GESTEP(-1).should.equal(0);
    engineering.GESTEP('a').should.equal(error.value);
  });

  test('HEX2BIN', function() {
    engineering.HEX2BIN('F', 8).should.equal('00001111');
    engineering.HEX2BIN('B7').should.equal('10110111');
    engineering.HEX2BIN('FFFFFFFFFF').should.equal('1111111111');
    engineering.HEX2BIN('z').should.equal(error.num);
    engineering.HEX2BIN('200').should.equal(error.num);
    engineering.HEX2BIN(1, 'a').should.equal(error.value);
    engineering.HEX2BIN(1, -1).should.equal(error.num);
  });

  test('HEX2DEC', function() {
    engineering.HEX2DEC('A5').should.equal(165);
    engineering.HEX2DEC('FFFFFFFF5B').should.equal(-165);
    engineering.HEX2DEC('3DA408B9').should.equal(1034160313);
    engineering.HEX2DEC('z').should.equal(error.num);
  });

  test('HEX2OCT', function() {
    engineering.HEX2OCT('F', 3).should.equal('017');
    engineering.HEX2OCT('3B4E').should.equal('35516');
    engineering.HEX2OCT('FFFFFFFF00').should.equal('7777777400');
    engineering.HEX2OCT('z').should.equal(error.num);
    engineering.HEX2OCT('FFDFFFFFFF').should.equal(error.num);
    engineering.HEX2OCT(1, 'a').should.equal(error.value);
    engineering.HEX2OCT(1, -1).should.equal(error.num);
  });

  test('IMABS', function() {
    engineering.IMABS('5+12i').should.equal(13);
    engineering.IMABS('a').should.equal(error.num);
  });

  test('IMAGINARY', function() {
    engineering.IMAGINARY('3+4i').should.equal(4);
    engineering.IMAGINARY('i').should.equal(1);
    engineering.IMAGINARY('+i').should.equal('+1');
    engineering.IMAGINARY('-j').should.equal('-1');
    engineering.IMAGINARY('0-j').should.equal(-1);
    engineering.IMAGINARY('4').should.equal(0);
    engineering.IMAGINARY(0).should.equal(0);
    engineering.IMAGINARY('1+k').should.equal(error.num);
  });

  test('IMARGUMENT', function() {
    engineering.IMARGUMENT('3+4i').should.equal(0.9272952180016122);
    engineering.IMARGUMENT('a').should.equal(error.num);
    engineering.IMARGUMENT(0).should.equal(error.div0);
    engineering.IMARGUMENT('2i').should.equal(Math.PI / 2);
    engineering.IMARGUMENT('-2i').should.equal(-Math.PI / 2);
    engineering.IMARGUMENT('2').should.equal(0);
    engineering.IMARGUMENT('-2').should.equal(-Math.PI);
    engineering.IMARGUMENT('-1+2i').should.equal(2.0344439357957027);
    engineering.IMARGUMENT('-1-2i').should.equal(-2.0344439357957027);
  });

  test('IMCONJUGATE', function() {
    engineering.IMCONJUGATE('3+4i').should.equal('3-4i');
    engineering.IMCONJUGATE('a').should.equal(error.num);
  });

  test('IMCOS', function() {
    engineering.IMCOS('1+i').should.equal('0.8337300251311491-0.9888977057628651i');
    engineering.IMCOS('a').should.equal(error.num);
    engineering.IMCOS(true).should.equal(error.value);
  });

  test('IMCOSH', function() {
    engineering.IMCOSH('4+3i').should.equal('-27.034945603074224+3.851153334811777i');
    engineering.IMCOSH('a').should.equal(error.num);
    engineering.IMCOSH(true).should.equal(error.value);
  });

  test('IMCOT', function() {
    engineering.IMCOT('4+3i').should.equal('0.0049011823943044056-0.9992669278059017i');
    engineering.IMCOT('a').should.equal(error.num);
    engineering.IMCOT(true).should.equal(error.value);
  });

  test('IMDIV', function() {
    engineering.IMDIV('-238+240i', '10+24i').should.equal('5+12i');
    engineering.IMDIV('a', 'i').should.equal(error.num);
    engineering.IMDIV('i', '0').should.equal(error.num);
    engineering.IMDIV('j', '1').should.equal('j');
    engineering.IMDIV('1', 'j').should.equal('-1j');
  });

  test('IMEXP', function() {
    engineering.IMEXP('1+i').should.equal('1.4686939399158851+2.2873552871788423i');
    engineering.IMEXP('a').should.equal(error.num);
  });

  test('IMLN', function() {
    engineering.IMLN('3+4i').should.equal('1.6094379124341003+0.9272952180016122i');
    engineering.IMLN('a').should.equal(error.num);
  });

  test('IMLOG10', function() {
    engineering.IMLOG10('3+4i').should.equal('0.6989700043360187+0.4027191962733731i');
    engineering.IMLOG10('a').should.equal(error.num);
  });

  test('IMLOG2', function() {
    engineering.IMLOG2('3+4i').should.equal('2.321928094887362+1.3378042124509761i');
    engineering.IMLOG2('a').should.equal(error.num);
  });

  test('IMPOWER', function() {
    engineering.IMPOWER('2+3i', 3).should.equal('-45.99999999999999+9.000000000000007i');
    engineering.IMPOWER('2+3i', 'a').should.equal(error.value);
    engineering.IMPOWER('a', 1).should.equal(error.num);
  });

  test('IMPRODUCT', function() {
    engineering.IMPRODUCT('3+4i', '5-3i').should.equal('27+11i');
    engineering.IMPRODUCT('1+2i', '30+0i').should.equal('30+60i');
    engineering.IMPRODUCT('a', '1').should.equal(error.num);
  });

  test('IMREAL', function() {
    engineering.IMREAL('6-9i').should.equal(6);
    engineering.IMREAL('i').should.equal(0);
    engineering.IMREAL('+i').should.equal(0);
    engineering.IMREAL('-j').should.equal(0);
    engineering.IMREAL('0-j').should.equal(0);
    engineering.IMREAL('4').should.equal('4');
    engineering.IMREAL(0).should.equal(0);
    engineering.IMREAL('1+k').should.equal(error.num);
    engineering.IMREAL('+1+j').should.equal(1);
    engineering.IMREAL('-1+j').should.equal(-1);
    engineering.IMREAL('4j').should.equal(0);
  });

  test('IMSEC', function() {
    engineering.IMSEC('4+3i').should.equal('-0.06529402785794704-0.07522496030277322i');
    engineering.IMSEC(true).should.equal(error.value);
    engineering.IMSEC('a').should.equal(error.num);
  });

  test('IMSIN', function() {
    engineering.IMSIN('4+3i').should.equal('-7.61923172032141-6.5481200409110025i');
    engineering.IMSIN('a').should.equal(error.num);
    engineering.IMSIN(true).should.equal(error.value);
  });
});
