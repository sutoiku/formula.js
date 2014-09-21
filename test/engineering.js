/* global suite, test */
var error = require('../lib/error');
var engineering = require('../lib/engineering');

suite('Engineering', function() {
  test('BESSELI', function() {
    engineering.BESSELI(1.5, 1).should.approximately(0.981666, 10e-6);
    engineering.BESSELI(1.5, 2).should.approximately(0.337835, 10e-6);
    engineering.BESSELI('invalid').should.equal(error.value);
  });

  test('BESSELJ', function() {
    engineering.BESSELJ(1.9, 2).should.approximately(0.329926, 10e-6);
    engineering.BESSELJ('invalid').should.equal(error.value);
  });

  test('BESSELK', function() {
    engineering.BESSELK(1.5, 1).should.approximately(0.277388, 10e-6);
    engineering.BESSELK('invalid').should.equal(error.value);
  });

  test('BESSELY', function() {
    engineering.BESSELY(2.5, 1).should.approximately(0.145918, 10e-6);
    engineering.BESSELY('invalid').should.equal(error.value);
  });

  test('BIN2DEC', function() {
    engineering.BIN2DEC(1100100).should.equal(100);
    engineering.BIN2DEC(1111111111).should.equal(-1);
    engineering.BIN2DEC('101010').should.equal(42);
    engineering.BIN2DEC(1000000000).should.equal(-512);
    engineering.BIN2DEC(1234567890).should.equal(error.num);
    engineering.BIN2DEC('a').should.equal(error.num);
  });

  test('BIN2HEX', function() {
    engineering.BIN2HEX(11111011, 4).should.equal('00fb');
    engineering.BIN2HEX(1110).should.equal('e');
    engineering.BIN2HEX(1111111111).should.equal('ffffffffff');
    engineering.BIN2HEX('a').should.equal(error.num);
    engineering.BIN2HEX(1, 'a').should.equal(error.value);
    engineering.BIN2HEX(1, -1).should.equal(error.num);
    engineering.BIN2HEX('101010').should.equal("2a");
    engineering.BIN2HEX(111111111).should.equal("1ff");
    engineering.BIN2HEX(1000000000).should.equal("fffffffe00");
    engineering.BIN2HEX('Hello World!').should.equal(error.num);
    engineering.BIN2HEX(1234567890).should.equal(error.num);
    engineering.BIN2HEX(101010101010).should.equal(error.num);
    engineering.BIN2HEX(101010, 1).should.equal(error.num);
    engineering.BIN2HEX(101010, -4).should.equal(error.num);
    engineering.BIN2HEX(101010, 'Hello World!').should.equal(error.value);
  });

  test('BIN2OCT', function() {
    engineering.BIN2OCT(1001, 3).should.equal('011');
    engineering.BIN2OCT(1100100).should.equal('144');
    engineering.BIN2OCT(1111111111).should.equal('7777777777');
    engineering.BIN2OCT('a').should.equal(error.num);
    engineering.BIN2OCT(1, 'a').should.equal(error.value);
    engineering.BIN2OCT(1, -1).should.equal(error.num);
    engineering.BIN2OCT('101010').should.equal("52");
    engineering.BIN2OCT(101010, 4.5).should.equal("0052");
    engineering.BIN2OCT('Hello World!').should.equal(error.num);
    engineering.BIN2OCT(1234567890).should.equal(error.num);
    engineering.BIN2OCT(101010101010).should.equal(error.num);
    engineering.BIN2OCT(101010, 1).should.equal(error.num);
    engineering.BIN2OCT(101010, -4).should.equal(error.num);
    engineering.BIN2OCT(101010, 'Hello World!').should.equal(error.value);
  });

  test('BITAND', function() {
    engineering.BITAND(1, 5).should.equal(1);
    engineering.BITAND(13, 25).should.equal(9);
    engineering.BITAND('a', 1).should.equal(error.value);
    engineering.BITAND(-1, 1).should.equal(error.num);
    engineering.BITAND(1.1, 1).should.equal(error.num);
    engineering.BITAND(281474976710656, 1).should.equal(error.num);
    engineering.BITAND('Hello World!', 1).should.equal(error.value);
  });

  test('BITLSHIFT', function() {
    engineering.BITLSHIFT(4, 2).should.equal(16);
    engineering.BITLSHIFT('a', 1).should.equal(error.value);
    engineering.BITLSHIFT(-1, 1).should.equal(error.num);
    engineering.BITLSHIFT(1.1, 1).should.equal(error.num);
    engineering.BITLSHIFT(281474976710656, 1).should.equal(error.num);
    engineering.BITLSHIFT(1, 54).should.equal(error.num);
    engineering.BITLSHIFT('Hello World!', 1).should.equal(error.value);
  });

  test('BITOR', function() {
    engineering.BITOR(23, 10).should.equal(31);
    engineering.BITOR('a', 1).should.equal(error.value);
    engineering.BITOR(-1, 1).should.equal(error.num);
    engineering.BITOR(1.1, 1).should.equal(error.num);
    engineering.BITOR(281474976710656, 1).should.equal(error.num);
    engineering.BITOR('Hello World!', 1).should.equal(error.value);
  });

  test('BITRSHIFT', function() {
    engineering.BITRSHIFT(13, 2).should.equal(3);
    engineering.BITRSHIFT('a', 1).should.equal(error.value);
    engineering.BITRSHIFT(-1, 1).should.equal(error.num);
    engineering.BITRSHIFT(1.1, 1).should.equal(error.num);
    engineering.BITRSHIFT(281474976710656, 1).should.equal(error.num);
    engineering.BITRSHIFT(1, 54).should.equal(error.num);
    engineering.BITLSHIFT(0, 0).should.equal(0);
    engineering.BITLSHIFT(1.5, 1).should.equal(error.num);
    engineering.BITLSHIFT('Hello World!', 1).should.equal(error.value);
  });

  test('BITXOR', function() {
    engineering.BITXOR(5, 3).should.equal(6);
    engineering.BITXOR('a', 1).should.equal(error.value);
    engineering.BITXOR(-1, 1).should.equal(error.num);
    engineering.BITXOR(1.1, 1).should.equal(error.num);
    engineering.BITXOR(281474976710656, 1).should.equal(error.num);
    engineering.BITXOR('Hello World!', 1).should.equal(error.value);
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
    engineering.CONVERT(1, 'lbm', 'kg').should.approximately(0.45359237, 1e-9);
    // engineering.CONVERT(68, 'F', 'C').should.equal(20);
    engineering.CONVERT(2.5, 'ft', 'sec').should.equal(error.na);
    engineering.CONVERT(engineering.CONVERT(100, 'ft', 'm'), 'ft', 'm').should.approximately(9.290304, 1e-9);
    engineering.CONVERT('a', 1).should.equal(error.value);
    engineering.CONVERT(1, 'invalid', 'invalid').should.equal(error.na);
    engineering.CONVERT(1, 'da', 'invalid').should.equal(error.na);
    engineering.CONVERT(1, 'ki', 'invalid').should.equal(error.na);
    engineering.CONVERT(1, 'invalid', 'da').should.equal(error.na);
    engineering.CONVERT(1, 'invalid', 'ki').should.equal(error.na);

    engineering.CONVERT(2, 'mi', 'yd').should.equal(3520);
    engineering.CONVERT(2, 'nm', 'mm').should.approximately(0.000002, 1e-9);
    engineering.CONVERT(2, 'kg', 'lbm').should.approximately(4.409245243697551, 1e-9);
    engineering.CONVERT(2, 'g', 'lbm').should.approximately(0.004409245243697552, 1e-9);
    engineering.CONVERT(2, 'mg', 'lbm').should.approximately(0.000004409245243697551, 1e-9);
    engineering.CONVERT(3583, 'byte', 'kbyte').should.approximately(3.583, 1e-9);
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

  // TODO: find cases where upper_bound is used
  test('ERF', function() {
    engineering.ERF(0.745).should.approximately(0.7079289200957377, 1e-9);
    engineering.ERF(1).should.approximately(0.8427007929497149, 1e-9);
    engineering.ERF('a').should.equal(error.value);
  });

  // TODO
  test('ERF.PRECISE', function() {
    engineering.ERF.PRECISE.should.throw('ERF.PRECISE is not implemented');
  });

  test('ERFC', function() {
    engineering.ERFC(1).should.approximately(0.1572992070502851, 1e-9);
    engineering.ERFC('a').should.equal(error.value);
  });

  // TODO
  test('ERFC.PRECISE', function() {
    engineering.ERFC.PRECISE.should.throw('ERFC.PRECISE is not implemented');
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
    engineering.IMABS('a').should.equal(error.value);
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
    engineering.IMARGUMENT('3+4i').should.approximately(0.9272952180016122, 1e-9);
    engineering.IMARGUMENT('a').should.equal(error.value);
    engineering.IMARGUMENT(0).should.equal(error.div0);
    engineering.IMARGUMENT('2i').should.equal(Math.PI / 2);
    engineering.IMARGUMENT('-2i').should.equal(-Math.PI / 2);
    engineering.IMARGUMENT('2').should.equal(0);
    engineering.IMARGUMENT('-2').should.equal(-Math.PI);
    engineering.IMARGUMENT('-1+2i').should.approximately(2.0344439357957027, 1e-9);
    engineering.IMARGUMENT('-1-2i').should.approximately(-2.0344439357957027, 1e-9);
  });

  test('IMCONJUGATE', function() {
    engineering.IMCONJUGATE('3+4i').should.equal('3-4i');
    engineering.IMCONJUGATE('a').should.equal(error.value);
  });

  test('IMCOS', function() {
    var im = engineering.IMCOS('1+i');
    engineering.IMREAL(im).should.approximately(0.8337300251311491, 1e-9);
    engineering.IMAGINARY(im).should.approximately(-0.9888977057628651, 1e-9);
    engineering.IMCOS('a').should.equal(error.value);
    engineering.IMCOS(true).should.equal(error.value);
  });

  test('IMCOSH', function() {
    var im = engineering.IMCOSH('4+3i');
    engineering.IMREAL(im).should.approximately(-27.034945603074224, 1e-9);
    engineering.IMAGINARY(im).should.approximately(3.851153334811777, 1e-9);
    engineering.IMCOSH('a').should.equal(error.value);
    engineering.IMCOSH(true).should.equal(error.value);
  });

  test('IMCOT', function() {
    var im = engineering.IMCOT('4+3i');
    engineering.IMREAL(im).should.approximately(0.0049011823943044056, 1e-9);
    engineering.IMAGINARY(im).should.approximately(-0.9992669278059017, 1e-9);
    engineering.IMCOT('a').should.equal(error.value);
    engineering.IMCOT(true).should.equal(error.value);
  });

  test('IMCSC', function() {
    engineering.IMCSC('1+i').should.equal("0.6215180171704283-0.3039310016284264i");
    engineering.IMCSC(true).should.equal(error.value);
    engineering.IMCSC(false).should.equal(error.value);
    engineering.IMCSC('Hello World!').should.equal(error.num);
  });

  test('IMCSC', function() {
    engineering.IMCSCH('1+i').should.equal("0.3039310016284264-0.6215180171704283i");
    engineering.IMCSCH(true).should.equal(error.value);
    engineering.IMCSCH(false).should.equal(error.value);
    engineering.IMCSCH('Hello World!').should.equal(error.num);
  });

  test('IMDIV', function() {
    engineering.IMDIV('-238+240i', '10+24i').should.equal('5+12i');
    engineering.IMDIV('a', 'i').should.equal(error.value);
    engineering.IMDIV('i', '0').should.equal(error.num);
    engineering.IMDIV('j', '1').should.equal('j');
    engineering.IMDIV('1', 'j').should.equal('-1j');
  });

  test('IMEXP', function() {
    var im = engineering.IMEXP('1+i');
    engineering.IMREAL(im).should.approximately(1.4686939399158851, 1e-9);
    engineering.IMAGINARY(im).should.approximately(2.2873552871788423, 1e-9);
    engineering.IMEXP('a').should.equal(error.value);
  });

  test('IMLN', function() {
    var im = engineering.IMLN('3+4i');
    engineering.IMREAL(im).should.approximately(1.6094379124341003, 1e-9);
    engineering.IMAGINARY(im).should.approximately(0.9272952180016122, 1e-9);
    engineering.IMLN('a').should.equal(error.value);
  });

  test('IMLOG10', function() {
    var im = engineering.IMLOG10('3+4i');
    engineering.IMREAL(im).should.approximately(0.6989700043360187, 1e-9);
    engineering.IMAGINARY(im).should.approximately(0.4027191962733731, 1e-9);
    engineering.IMLOG10('a').should.equal(error.value);
  });

  test('IMLOG2', function() {
    var im = engineering.IMLOG2('3+4i');
    engineering.IMREAL(im).should.approximately(2.321928094887362, 1e-9);
    engineering.IMAGINARY(im).should.approximately(1.3378042124509761, 1e-9);
    engineering.IMLOG2('a').should.equal(error.value);
  });

  test('IMPOWER', function() {
    var im = engineering.IMPOWER('2+3i', 3);
    engineering.IMREAL(im).should.approximately(-45.99999999999999, 1e-9);
    engineering.IMAGINARY(im).should.approximately(9.000000000000007, 1e-9);
    engineering.IMPOWER('2+3i', 'a').should.equal(error.value);
    engineering.IMPOWER('a', 1).should.equal(error.value);
  });

  test('IMPRODUCT', function() {
    engineering.IMPRODUCT('3+4i', '5-3i').should.equal('27+11i');
    engineering.IMPRODUCT('1+2i', '30+0i').should.equal('30+60i');
    engineering.IMPRODUCT('a', '1').should.equal(error.value);
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
    var im = engineering.IMSEC('4+3i');
    engineering.IMREAL(im).should.approximately(-0.06529402785794704, 1e-9);
    engineering.IMAGINARY(im).should.approximately(-0.07522496030277322, 1e-9);
    engineering.IMSEC(true).should.equal(error.value);
    engineering.IMSEC('a').should.equal(error.value);
  });

  test('IMSECH', function() {
    var im = engineering.IMSECH('4+3i');
    engineering.IMREAL(im).should.approximately(-0.03625349691586887, 1e-9);
    engineering.IMAGINARY(im).should.approximately(-0.005164344607753179, 1e-9);
    engineering.IMSECH(true).should.equal(error.value);
    engineering.IMSECH('a').should.equal(error.value);
  });

  test('IMSIN', function() {
    var im = engineering.IMSIN('4+3i');
    engineering.IMREAL(im).should.approximately(-7.61923172032141, 1e-9);
    engineering.IMAGINARY(im).should.approximately(-6.5481200409110025, 1e-9);
    engineering.IMSIN('a').should.equal(error.value);
    engineering.IMSIN(true).should.equal(error.value);
  });

  test('IMSINH', function() {
    var im = engineering.IMSINH('4+3i');
    engineering.IMREAL(im).should.approximately(-27.016813258003932, 1e-9);
    engineering.IMAGINARY(im).should.approximately(3.853738037919377, 1e-9);
    engineering.IMSINH('a').should.equal(error.value);
    engineering.IMSINH(true).should.equal(error.value);
  });

  test('IMSQRT', function() {
    var im = engineering.IMSQRT('1+i');
    engineering.IMREAL(im).should.approximately(1.0986841134678098, 1e-9);
    engineering.IMAGINARY(im).should.approximately(0.45508986056222733, 1e-9);
    engineering.IMSQRT('a').should.equal(error.value);
  });

  test('IMSUB', function() {
    engineering.IMSUB('13+4j', '5+3j').should.equal('8+j');
    engineering.IMSUB('13', '5+3j').should.equal('8-3j');
    engineering.IMSUB('a', '5+3i').should.equal(error.value);
  });

  test('IMSUM', function() {
    engineering.IMSUM('3+4i', '5-3i').should.equal('8+i');
    engineering.IMSUM('a', '5+3i').should.equal(error.value);
  });

  test('IMTAN', function() {
    var im = engineering.IMTAN('4+3i');
    engineering.IMREAL(im).should.approximately(0.004908258067495992, 1e-9);
    engineering.IMAGINARY(im).should.approximately(1.000709536067233, 1e-9);
    engineering.IMTAN('a').should.equal(error.value);
    engineering.IMTAN(true).should.equal(error.value);
  });

  test('OCT2BIN', function() {
    engineering.OCT2BIN('3').should.equal('11');
    engineering.OCT2BIN('3', 3).should.equal('011');
    engineering.OCT2BIN('7777777000').should.equal('1000000000');
    engineering.OCT2BIN('a').should.equal(error.num);
    engineering.OCT2BIN('1000').should.equal(error.num);
    engineering.OCT2BIN('1', 'a').should.equal(error.value);
    engineering.OCT2BIN('1', -1).should.equal(error.num);
  });

  test('OCT2DEC', function() {
    engineering.OCT2DEC('54').should.equal(44);
    engineering.OCT2DEC('7777777533').should.equal(-165);
    engineering.OCT2DEC('a').should.equal(error.num);
  });

  test('OCT2HEX', function() {
    engineering.OCT2HEX('100').should.equal('40');
    engineering.OCT2HEX('100', 4).should.equal('0040');
    engineering.OCT2HEX('7777777533', 3).should.equal('ffffffff5b');
    engineering.OCT2HEX('a').should.equal(error.num);
    engineering.OCT2HEX('4000000000').should.equal('ffe0000000');
    engineering.OCT2HEX('1', 'a').should.equal(error.value);
    engineering.OCT2HEX('1', -1).should.equal(error.num);
  });
});