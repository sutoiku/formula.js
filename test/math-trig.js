var mathTrig = require('../lib/math-trig');
var error = require('../lib/error');
var should = require('should');

suite('Math & Trig', function() {
  test('ABS', function() {
    mathTrig.ABS(-1).should.equal(1);
  });

  test('ACOS', function() {
    mathTrig.ACOS(1).should.equal(0);
  });

  test('ACOSH', function() {
    mathTrig.ACOSH(1).should.equal(0);
  });

  test('ACOT', function() {
    mathTrig.ACOT(1).should.equal(0.7853981633974483);
  });

  test('ACOTH', function() {
    mathTrig.ACOTH(1).should.equal(Infinity);
  });

  test('SUM', function() {
    mathTrig.SUM(1, 2, 3).should.equal(6);
  });

  //TODO: more edge cases, explore the second argument (options)
  test('AGGREGATE', function() {
    mathTrig.AGGREGATE(1, 4, [1, 2, 3]).should.equal(2);
    mathTrig.AGGREGATE(2, 4, [1, 2, 3, 'does not count']).should.equal(3);
    mathTrig.AGGREGATE(3, 4, [1, 2, 3, 'counts']).should.equal(4);
    mathTrig.AGGREGATE(4, 4, [1, 2, 3]).should.equal(3);
    mathTrig.AGGREGATE(5, 4, [1, 2, 3]).should.equal(1);
    mathTrig.AGGREGATE(6, 4, [1, 2, 3]).should.equal(6);
    mathTrig.AGGREGATE(7, 4, [1, 2, 3]).should.equal(1);
    mathTrig.AGGREGATE(8, 4, [1, 2, 3]).should.equal(0.816496580927726);
    mathTrig.AGGREGATE(9, 4, [1, 2, 3]).should.equal(6);
    mathTrig.AGGREGATE(10, 4, [1, 2, 3]).should.equal(1);
    mathTrig.AGGREGATE(11, 4, [1, 2, 3]).should.equal(0.6666666666666666);
    mathTrig.AGGREGATE(12, 4, [1, 2, 3]).should.equal(2);
    mathTrig.AGGREGATE(13, 4, [1, 2, 3]).should.equal(1);
    mathTrig.AGGREGATE(14, 4, [1, 2, 3], 2).should.equal(2);
    mathTrig.AGGREGATE(15, 4, [1, 2, 3], 2).should.equal(2);
    mathTrig.AGGREGATE(16, 4, [1, 2, 3], 0.4).should.equal(1.8);
    mathTrig.AGGREGATE(17, 4, [1, 2, 3], 2).should.equal(2);
    mathTrig.AGGREGATE(18, 4, [1, 2, 3], 0.4).should.equal(1.6);
    mathTrig.AGGREGATE(19, 4, [1, 2, 3], 2).should.equal(2);
  });

  test('ARABIC', function() {
    mathTrig.ARABIC('X').should.equal(10);
    should.deepEqual(mathTrig.ARABIC('ABC'), error.value);
  });

  test('ASIN', function() {
    mathTrig.ASIN(0.5).should.equal(0.5235987755982989);
  });

  test('ASINH', function() {
    mathTrig.ASINH(0.5).should.equal(0.48121182505960347);
  });

  test('ATAN', function() {
    mathTrig.ATAN(1).should.equal(0.7853981633974483);
  });

  test('ATAN2', function() {
    mathTrig.ATAN2(1, 1).should.equal(0.7853981633974483);
  });

  test('ATANH', function() {
    mathTrig.ATANH(1).should.equal(Infinity);
  });

  test('BASE', function() {
    mathTrig.BASE(7, 2).should.equal('111');
    mathTrig.BASE(400, 10, 10).should.equal('0000000400');
  });

  test('CEILING', function() {
    mathTrig.CEILING(4.1).should.equal(5);
    mathTrig.CEILING(4.9).should.equal(5);
    mathTrig.CEILING(-4.1).should.equal(-4);
    mathTrig.CEILING(-4.9).should.equal(-4);
    mathTrig.CEILING(4.1, 0).should.equal(0);
    mathTrig.CEILING(4.1, 1).should.equal(5);
    mathTrig.CEILING(4.1, 2).should.equal(6);
    mathTrig.CEILING(-4.1, 2).should.equal(-4);
    mathTrig.CEILING(-4.1, -2).should.equal(-4);
    mathTrig.CEILING(1.234, 0.1).should.equal(1.3);
    mathTrig.CEILING(-1.234, 0.1).should.equal(-1.2);
    mathTrig.CEILING(-1.234, -0.1).should.equal(-1.2);
    mathTrig.CEILING(-1.234, -0.01).should.equal(-1.23);
    mathTrig.CEILING(-1.234, -0.001).should.equal(-1.234);
    mathTrig.CEILING(-4.1, 2, 0).should.equal(-4);
    mathTrig.CEILING(-4.1, 2, -1).should.equal(-6);
    mathTrig.CEILING(-4.1, -2, 0).should.equal(-4);
    mathTrig.CEILING(-4.1, -2, -1).should.equal(-6);
  });

  test('CEILING.MATH', function() {
    mathTrig.CEILING.MATH(24.3, 5).should.equal(25);
    mathTrig.CEILING.MATH(6.7).should.equal(7);
    mathTrig.CEILING.MATH(-8.1, 2).should.equal(-8);
    mathTrig.CEILING.MATH(-5.5, 2, -1).should.equal(-6);
  });

  test('CEILING.PRECISE', function() {
    mathTrig.CEILING.PRECISE(4.3).should.equal(5);
    mathTrig.CEILING.PRECISE(-4.3).should.equal(-4);
    mathTrig.CEILING.PRECISE(4.3, 2).should.equal(6);
    mathTrig.CEILING.PRECISE(4.3, -2).should.equal(6);
    mathTrig.CEILING.PRECISE(-4.3, 2).should.equal(-4);
    mathTrig.CEILING.PRECISE(-4.3, -2).should.equal(-4);
  });

  test("COMBIN", function() {
    mathTrig.COMBIN(0, 0).should.equal(1);
    mathTrig.COMBIN(1, 0).should.equal(1);
    mathTrig.COMBIN(1, 1).should.equal(1);
    mathTrig.COMBIN(2, 1).should.equal(2);
    mathTrig.COMBIN(2, 2).should.equal(1);
    mathTrig.COMBIN(3, 1).should.equal(3);
    mathTrig.COMBIN(3, 2).should.equal(3);
    mathTrig.COMBIN(3, 3).should.equal(1);
    mathTrig.COMBIN(10, 3).should.equal(120);
  });

  test("COMBINA", function() {
    mathTrig.COMBINA(0, 0).should.equal(1);
    mathTrig.COMBINA(1, 0).should.equal(1);
    mathTrig.COMBINA(1, 1).should.equal(1);
    mathTrig.COMBINA(2, 1).should.equal(2);
    mathTrig.COMBINA(2, 2).should.equal(3);
    mathTrig.COMBINA(3, 1).should.equal(3);
    mathTrig.COMBINA(3, 2).should.equal(6);
    mathTrig.COMBINA(3, 3).should.equal(10);
    mathTrig.COMBINA(10, 3).should.equal(220);
  });

  test('COS', function() {
    mathTrig.COS(0).should.equal(1);
  });

  test('COSH', function() {
    mathTrig.COSH(0).should.equal(1);
  });

  test('COT', function() {
    mathTrig.COT(1).should.equal(0.6420926159343306);
  });

  test('COTH', function() {
    mathTrig.COTH(1).should.equal(1.3130352854993312);
  });

  test('CSC', function() {
    mathTrig.CSC(0).should.equal(Infinity);
  });

  test('CSCH', function() {
    mathTrig.CSCH(0).should.equal(Infinity);
  });

  test('DECIMAL', function() {
    mathTrig.DECIMAL(10.5).should.equal(10);
  });

  test('DEGREES', function() {
    mathTrig.DEGREES(Math.PI).should.equal(180);
  });

  test('EVEN', function() {
    mathTrig.EVEN(3).should.equal(4);
  });

  test('FACT', function() {
    mathTrig.FACT(6).should.equal(720);
  });

  test('FACTDOUBLE', function() {
    mathTrig.FACTDOUBLE(10).should.equal(3840);
  });

  test('FLOOR', function() {
    mathTrig.FLOOR(3.7, 2).should.equal(2);
    mathTrig.FLOOR(-2.5, -2).should.equal(-2);
    mathTrig.FLOOR(2.5, -2).should.equal(error.num);
    mathTrig.FLOOR(1.58, 0.1).should.equal(1.5);
    mathTrig.FLOOR(0.234, 0.01).should.equal(0.23);
    mathTrig.FLOOR(0.234, 0).should.equal(0);
  });

  test('FLOOR.MATH', function() {
    mathTrig.FLOOR.MATH(24.3, 5).should.equal(20);
    mathTrig.FLOOR.MATH(6.7).should.equal(6);
    mathTrig.FLOOR.MATH(-8.1, 2).should.equal(-10);
    mathTrig.FLOOR.MATH(-8.1, 0).should.equal(0);
    mathTrig.FLOOR.MATH(-5.5, 2, -1).should.equal(-4);
  });

  test('FLOOR.PRECISE', function() {
    mathTrig.FLOOR.PRECISE(-3.2, -1).should.equal(-4);
    mathTrig.FLOOR.PRECISE(3.2, 1).should.equal(3);
    mathTrig.FLOOR.PRECISE(-3.2, 1).should.equal(-4);
    mathTrig.FLOOR.PRECISE(3.2, -1).should.equal(3);
    mathTrig.FLOOR.PRECISE(3.2).should.equal(3);
    mathTrig.FLOOR.PRECISE(3.2, 0).should.equal(0);
  });


  test('GCD', function() {
    mathTrig.GCD(5, 2).should.equal(1);
    mathTrig.GCD(24, 36).should.equal(12);
    mathTrig.GCD(7, 1).should.equal(1);
    mathTrig.GCD(5, 0).should.equal(5);
  });

  test('INT', function() {
    mathTrig.INT(5.5).should.equal(5);
  });

  test('ISO.CEILING', function() {
    mathTrig.ISO.CEILING(4.3).should.equal(5);
    mathTrig.ISO.CEILING(-4.3).should.equal(-4);
    mathTrig.ISO.CEILING(4.3, 2).should.equal(6);
    mathTrig.ISO.CEILING(4.3, -2).should.equal(6);
    mathTrig.ISO.CEILING(-4.3, 2).should.equal(-4);
    mathTrig.ISO.CEILING(-4.3, -2).should.equal(-4);
  });

  test('LCM', function() {
    mathTrig.LCM(5, 2).should.equal(10);
    mathTrig.LCM(24, 36).should.equal(72);
  });


  test('LN', function() {
    mathTrig.LN(Math.E).should.equal(1);
  });

  test('LOG', function() {
    mathTrig.LOG(10, 10).should.equal(1);
  });

  test('LOG10', function() {
    mathTrig.LOG10(10).should.equal(1);
  });

  test('MDETERM', function() {
    mathTrig.MDETERM([
      [1, 2],
      [3, 4]
    ]).should.equal(-2);
  });

  test('MINVERSE', function() {
    should.deepEqual(mathTrig.MINVERSE([
      [1, 2],
      [3, 4]
    ]), [
      [-1.9999999999999996, 0.9999999999999998],
      [1.4999999999999998, -0.49999999999999994]
    ]);
  });

  test('MMULT', function() {
    should.deepEqual(mathTrig.MMULT([
      [1, 2],
      [3, 4]
    ], [
      [1, 2],
      [3, 4]
    ]), [
      [7, 10],
      [15, 22]
    ]);
  });

  test('MOD', function() {
    mathTrig.MOD(3, 2).should.equal(1);
    mathTrig.MOD(-3, 2).should.equal(1);
    mathTrig.MOD(3, -2).should.equal(-1);
    should.deepEqual(mathTrig.MOD(3, 0), error.div0);
  });

  test('MROUND', function() {
    mathTrig.MROUND(10, 3).should.equal(9);
    mathTrig.MROUND(-10, -3).should.equal(-9);
    mathTrig.MROUND(1.3, 0.2).should.equal(1.4000000000000001);
    should.deepEqual(mathTrig.MROUND(5, -2), error.num);
  });

  test('MULTINOMIAL', function() {
    mathTrig.MULTINOMIAL(2, 3, 4).should.equal(1260);
  });

  test('MUNIT', function() {
    should.deepEqual(mathTrig.MUNIT(3), [
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1]
    ]);
  });

  test('ODD', function() {
    mathTrig.ODD(3).should.equal(3);
    mathTrig.ODD(2).should.equal(3);
    mathTrig.ODD(-1).should.equal(-1);
    mathTrig.ODD(-2).should.equal(-3);
  });

  test('PI', function() {
    mathTrig.PI().should.equal(Math.PI);
  });

  test('POWER', function() {
    mathTrig.POWER(5, 2).should.equal(25);
    mathTrig.POWER(98.6, 3.2).should.equal(2401077.2220695773);
    mathTrig.POWER(4, 5 / 4).should.equal(5.656854249492381);
    should.deepEqual(mathTrig.POWER(-1, 0.5), error.num);
  });

  test('PRODUCT', function() {
    mathTrig.PRODUCT([5, 15, 30]).should.equal(2250);
  });

  test('QUOTIENT', function() {
    mathTrig.QUOTIENT(5, 2).should.equal(2);
    mathTrig.QUOTIENT(4.5, 3.1).should.equal(1);
    mathTrig.QUOTIENT(-10, 3).should.equal(-3);
  });

  test('RADIANS', function() {
    mathTrig.RADIANS(180).should.equal(Math.PI);
  });

  test('RAND', function() {
    var sum = 0;
    var n = 10;
    var i = n;
    while (i--) {
      sum += mathTrig.RAND();
    }

    var average = sum / n;
    Number(parseInt(average), 10).should.equal(0);
  });

  test('RANDBETWEEN', function() {
    var bottom = 5;
    var top = 10;
    var sum = 0;
    var n = 100;
    var i = n;
    while (i--) {
      sum += mathTrig.RANDBETWEEN(bottom, top);
    }

    var average = sum / n;
    Number(parseInt(average, 10)).should.equal(7);
  });

  test('ROMAN', function() {
    mathTrig.ROMAN(10).should.equal('X');
    mathTrig.ROMAN(103).should.equal('CIII');
  });

  test('ROUND', function() {
    mathTrig.ROUND(2.15, 1).should.equal(2.2);
    mathTrig.ROUND(2.149, 1).should.equal(2.1);
    mathTrig.ROUND(-1.475, 2).should.equal(-1.47); //TODO: check if -1.48 would be the correct result or a precision error
    mathTrig.ROUND(21.5, -1).should.equal(20);
    mathTrig.ROUND(626.3, -3).should.equal(1000);
    mathTrig.ROUND(1.98, -1).should.equal(0);
    mathTrig.ROUND(-50.55, -2).should.equal(-100);
  });

  test('ROUNDDOWN', function() {
    mathTrig.ROUNDDOWN(3.2, 0).should.equal(3);
    mathTrig.ROUNDDOWN(76.9, 0).should.equal(76);
    mathTrig.ROUNDDOWN(3.14159, 3).should.equal(3.141);
    mathTrig.ROUNDDOWN(-3.14159, 1).should.equal(-3.1);
    mathTrig.ROUNDDOWN(31415.92654, -2).should.equal(31400);
  });

  test('ROUNDUP', function() {
    mathTrig.ROUNDUP(3.2, 0).should.equal(4);
    mathTrig.ROUNDUP(76.9, 0).should.equal(77);
    mathTrig.ROUNDUP(3.14159, 3).should.equal(3.142);
    mathTrig.ROUNDUP(-3.14159, 1).should.equal(-3.2);
    mathTrig.ROUNDUP(31415.92654, -2).should.equal(31500);
  });

  test('SEC', function() {
    mathTrig.SEC(45).should.equal(1.9035944074044246);
    mathTrig.SEC(30).should.equal(6.482921234962678);
  });

  test('SECH', function() {
    mathTrig.SECH(45).should.equal(5.725037161098787e-20);
    mathTrig.SECH(30).should.equal(1.8715245937680347e-13);
  });

  test('SERIESSUM', function() {
    mathTrig.SERIESSUM(mathTrig.PI() / 4, 0, 2, [
      1, -1 / mathTrig.FACT(2),
      1 / mathTrig.FACT(4), -1 / mathTrig.FACT(6)
    ]).should.equal(0.7071032148228457);
  });

  test('SIGN', function() {
    mathTrig.SIGN(0).should.equal(0);
    mathTrig.SIGN(-5).should.equal(-1);
    mathTrig.SIGN(5).should.equal(1);
  });

  test('SIN', function() {
    mathTrig.SIN(Math.PI / 2).should.equal(1);
  });

  test('SINH', function() {
    mathTrig.SINH(1).should.equal(1.1752011936438014); // the golden ratio: http://mathworld.wolfram.com/HyperbolicSine.html
  });

  test('SQRT', function() {
    mathTrig.SQRT(4).should.equal(2);
  });

  test('SQRTPI', function() {
    mathTrig.SQRTPI(3).should.equal(3.0699801238394655);
  });

  test('SUBTOTAL', function() {
    mathTrig.SUBTOTAL(1, [1, 2, 3]).should.equal(2);
    mathTrig.SUBTOTAL(2, [1, 2, 3, 'does not count']).should.equal(3);
    mathTrig.SUBTOTAL(3, [1, 2, 3, 'counts']).should.equal(4);
    mathTrig.SUBTOTAL(4, [1, 2, 3]).should.equal(3);
    mathTrig.SUBTOTAL(5, [1, 2, 3]).should.equal(1);
    mathTrig.SUBTOTAL(6, [1, 2, 3]).should.equal(6);
    mathTrig.SUBTOTAL(7, [1, 2, 3]).should.equal(1);
    mathTrig.SUBTOTAL(8, [1, 2, 3]).should.equal(0.816496580927726);
    mathTrig.SUBTOTAL(9, [1, 2, 3]).should.equal(6);
    mathTrig.SUBTOTAL(10, [1, 2, 3]).should.equal(1);
    mathTrig.SUBTOTAL(11, [1, 2, 3]).should.equal(0.6666666666666666);
    mathTrig.SUBTOTAL(101, [1, 2, 3]).should.equal(2);
    mathTrig.SUBTOTAL(102, [1, 2, 3, 'does not count']).should.equal(3);
    mathTrig.SUBTOTAL(103, [1, 2, 3, 'counts']).should.equal(4);
    mathTrig.SUBTOTAL(104, [1, 2, 3]).should.equal(3);
    mathTrig.SUBTOTAL(105, [1, 2, 3]).should.equal(1);
    mathTrig.SUBTOTAL(106, [1, 2, 3]).should.equal(6);
    mathTrig.SUBTOTAL(107, [1, 2, 3]).should.equal(1);
    mathTrig.SUBTOTAL(108, [1, 2, 3]).should.equal(0.816496580927726);
    mathTrig.SUBTOTAL(109, [1, 2, 3]).should.equal(6);
    mathTrig.SUBTOTAL(110, [1, 2, 3]).should.equal(1);
    mathTrig.SUBTOTAL(111, [1, 2, 3]).should.equal(0.6666666666666666);
  });

  test("SUM", function() {
    mathTrig.SUM(1, 2, 3).should.equal(6);
    mathTrig.SUM([1, 2, 3]).should.equal(6);
    mathTrig.SUM([1, 2, 3], 1, 2).should.equal(9);
    mathTrig.SUM([1, 2, 3], [1, 2]).should.equal(9);
    mathTrig.SUM([
      [1, 1],
      [2, 2],
      [3, 3]
    ]).should.equal(12);
    mathTrig.SUM([
      [1, 1],
      [2, 2],
      [3, 3]
    ], 1, 2).should.equal(15);
    mathTrig.SUM([
      [1, 1],
      [2, 2],
      [3, 3]
    ], 1, 2).should.equal(15);
    mathTrig.SUM([
      [1, 1],
      [2, 2],
      [3, 3]
    ], [
      [1, 1],
      [2, 2],
      [3, 3]
    ]).should.equal(24);
  });

  test("SUMIF", function() {
    mathTrig.SUMIF([1, 2, 3], '>2').should.equal(3);
    mathTrig.SUMIF([
      [1, 1],
      [2, 2],
      [3, 3]
    ], '>2').should.equal(6);
  });

  test("SUMIFS", function() {
    mathTrig.SUMIFS([1, 2, 3], '>1', '<3').should.equal(2);
    mathTrig.SUMIFS([
      [1, 1],
      [2, 2],
      [3, 3]
    ], '>1', '<3').should.equal(4);
  });

  test('SUMPRODUCT', function() {
    mathTrig.SUMPRODUCT([
      [3, 4],
      [8, 6],
      [1, 9]
    ], [
      [2, 7],
      [6, 7],
      [5, 3]
    ]).should.equal(156);
  });

  test("SUMSQ", function() {
    mathTrig.SUMSQ(1, 2, 3).should.equal(14);
    mathTrig.SUMSQ([1, 2, 3]).should.equal(14);
    mathTrig.SUMSQ([
      [1, 1],
      [2, 2],
      [3, 3]
    ]).should.equal(28);
  });

  test("SUMX2MY2", function() {
    mathTrig.SUMX2MY2([1, 2, 3], [4, 5, 6]).should.equal(-63);
    mathTrig.SUMX2MY2([1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12, 13, 14, 15, 16]).should.equal(-468);
  });

  test("SUMX2PY2", function() {
    mathTrig.SUMX2PY2([1, 2, 3], [4, 5, 6]).should.equal(91);
    mathTrig.SUMX2PY2([1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12, 13, 14, 15, 16]).should.equal(650);
  });

  test("SUMXMY2", function() {
    mathTrig.SUMXMY2([1, 2, 3], [4, 5, 6]).should.equal(27);
    mathTrig.SUMXMY2([1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12, 13, 14, 15, 16]).should.equal(216);
  });

  test('TAN', function() {
    mathTrig.TAN(mathTrig.RADIANS(45)).should.equal(0.9999999999999999);
  });

  test('TANH', function() {
    mathTrig.TANH(0.5).should.equal(0.46211715726000974);
  });

  test('TRUNC', function() {
    mathTrig.TRUNC(8.9).should.equal(8);
    mathTrig.TRUNC(-8.9).should.equal(-8);
    mathTrig.TRUNC(0.45).should.equal(0);
  });
});