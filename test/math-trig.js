/* global suite, test */
var mathTrig = require('../lib/math-trig');
var error = require('../lib/error');
var should = require('should');

suite('Math & Trig', function() {
  test('ABS', function() {
    mathTrig.ABS(-1).should.equal(1);
    mathTrig.ABS('invalid').should.equal(error.value);
  });

  test('ACOS', function() {
    mathTrig.ACOS(1).should.equal(0);
    mathTrig.ACOS('invalid').should.equal(error.value);
  });

  test('ACOSH', function() {
    mathTrig.ACOSH(1).should.equal(0);
    mathTrig.ACOSH('invalid').should.equal(error.value);
  });

  test('ACOT', function() {
    mathTrig.ACOT(1).should.approximately(0.7853981633974483, 1e-9);
    mathTrig.ACOT('invalid').should.equal(error.value);
  });

  test('ACOTH', function() {
    mathTrig.ACOTH(1).should.equal(Infinity);
    mathTrig.ACOTH('invalid').should.equal(error.value);
  });

  test('ADD', function() {
    mathTrig.ADD(10, 4).should.equal(14);
    mathTrig.ADD(1.2, 4).should.equal(5.2);
    mathTrig.ADD().should.equal(error.na);
    mathTrig.ADD(1).should.equal(error.na);
    mathTrig.ADD(1, 'string').should.equal(error.value);
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
    mathTrig.AGGREGATE(8, 4, [1, 2, 3]).should.approximately(0.816496580927726, 1e-9);
    mathTrig.AGGREGATE(9, 4, [1, 2, 3]).should.equal(6);
    mathTrig.AGGREGATE(10, 4, [1, 2, 3]).should.equal(1);
    mathTrig.AGGREGATE(11, 4, [1, 2, 3]).should.approximately(0.6666666666666666, 1e-9);
    mathTrig.AGGREGATE(12, 4, [1, 2, 3]).should.equal(2);
    mathTrig.AGGREGATE(13, 4, [1, 2, 3]).should.equal(1);
    mathTrig.AGGREGATE(14, 4, [1, 2, 3], 2).should.equal(2);
    mathTrig.AGGREGATE(15, 4, [1, 2, 3], 2).should.equal(2);
    mathTrig.AGGREGATE(16, 4, [1, 2, 3], 0.4).should.approximately(1.8, 1e-9);
    mathTrig.AGGREGATE(17, 4, [1, 2, 3], 2).should.equal(2);
    mathTrig.AGGREGATE(18, 4, [1, 2, 3], 0.4).should.approximately(1.6, 1e-9);
    mathTrig.AGGREGATE(19, 4, [1, 2, 3], 2).should.equal(2);
    mathTrig.AGGREGATE('invalid', 4, [1, 2, 3], 2).should.equal(error.value);
  });

  test('ARABIC', function() {
    mathTrig.ARABIC('X').should.equal(10);
    mathTrig.ARABIC('ABC').should.equal(error.value);
  });

  test('ASIN', function() {
    mathTrig.ASIN(0.5).should.approximately(0.5235987755982989, 1e-9);
    mathTrig.ASIN('invalid').should.equal(error.value);
  });

  test('ASINH', function() {
    mathTrig.ASINH(0.5).should.approximately(0.48121182505960347, 1e-9);
    mathTrig.ASINH('invalid').should.equal(error.value);
  });

  test('ATAN', function() {
    mathTrig.ATAN(1).should.approximately(0.7853981633974483, 1e-9);
    mathTrig.ATAN('invalid').should.equal(error.value);
  });

  test('ATAN2', function() {
    mathTrig.ATAN2(1, 1).should.approximately(0.7853981633974483, 1e-9);
    mathTrig.ATAN2(1, 'invalid').should.equal(error.value);
  });

  test('ATANH', function() {
    mathTrig.ATANH(1).should.equal(Infinity);
    mathTrig.ATANH('invalid').should.equal(error.value);
  });

  test('BASE', function() {
    mathTrig.BASE(7, 2).should.equal('111');
    mathTrig.BASE(400, 10, 10).should.equal('0000000400');
    mathTrig.BASE('invalid', 10, 10).should.equal(error.value);
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
    mathTrig.CEILING(1.234, 0.1).should.approximately(1.3, 1e-9);
    mathTrig.CEILING(-1.234, 0.1).should.approximately(-1.2, 1e-9);
    mathTrig.CEILING(-1.234, -0.1).should.approximately(-1.2, 1e-9);
    mathTrig.CEILING(-1.234, -0.01).should.approximately(-1.23, 1e-9);
    mathTrig.CEILING(-1.234, -0.001).should.approximately(-1.234, 1e-9);
    mathTrig.CEILING(-4.1, 2, 0).should.equal(-4);
    mathTrig.CEILING(-4.1, 2, -1).should.equal(-6);
    mathTrig.CEILING(-4.1, -2, 0).should.equal(-4);
    mathTrig.CEILING(-4.1, -2, -1).should.equal(-6);
    mathTrig.CEILING(0.19, 0.25, 0).should.equal(0.25);
    mathTrig.CEILING(0.39, 0.25, 0).should.equal(0.5);
    mathTrig.CEILING(0.69, 0.25, 0).should.equal(0.75);
    mathTrig.CEILING(0.89, 0.25, 0).should.equal(1);
    mathTrig.CEILING(-4.1, -2, 'invalid').should.equal(error.value);
  });

  test('CEILING.MATH', function() {
    mathTrig.CEILING.MATH(24.3, 5).should.equal(25);
    mathTrig.CEILING.MATH(6.7).should.equal(7);
    mathTrig.CEILING.MATH(-8.1, 2).should.equal(-8);
    mathTrig.CEILING.MATH(-5.5, 2, -1).should.equal(-6);
    mathTrig.CEILING.MATH(-5.5, 2, 'invalid').should.equal(error.value);
  });

  test('CEILING.PRECISE', function() {
    mathTrig.CEILING.PRECISE(4.3).should.equal(5);
    mathTrig.CEILING.PRECISE(-4.3).should.equal(-4);
    mathTrig.CEILING.PRECISE(4.3, 2).should.equal(6);
    mathTrig.CEILING.PRECISE(4.3, -2).should.equal(6);
    mathTrig.CEILING.PRECISE(-4.3, 2).should.equal(-4);
    mathTrig.CEILING.PRECISE(-4.3, -2).should.equal(-4);
    mathTrig.CEILING.PRECISE(-4.3, 'invalid').should.equal(error.value);
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
    mathTrig.COMBIN(10, 'invalid').should.equal(error.value);
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
    mathTrig.COMBINA(10, 'invalid').should.equal(error.value);
  });

  test('COS', function() {
    mathTrig.COS(0).should.equal(1);
    mathTrig.COS('invalid').should.equal(error.value);
  });

  test('COSH', function() {
    mathTrig.COSH(0).should.equal(1);
    mathTrig.COSH('invalid').should.equal(error.value);
  });

  test('COT', function() {
    mathTrig.COT(1).should.approximately(0.6420926159343306, 1e-9);
    mathTrig.COT('invalid').should.equal(error.value);
  });

  test('COTH', function() {
    mathTrig.COTH(1).should.approximately(1.3130352854993312, 1e-9);
    mathTrig.COTH('invalid').should.equal(error.value);
  });

  test('CSC', function() {
    mathTrig.CSC(0).should.equal(Infinity);
    mathTrig.CSC('invalid').should.equal(error.value);
  });

  test('CSCH', function() {
    mathTrig.CSCH(0).should.equal(Infinity);
    mathTrig.CSCH('invalid').should.equal(error.value);
  });

  test('DECIMAL', function() {
    mathTrig.DECIMAL().should.equal(error.value);
    mathTrig.DECIMAL(10.5).should.equal(10);
    mathTrig.DECIMAL('0', 2).should.equal(0);
    mathTrig.DECIMAL('1', 2).should.equal(1);
    mathTrig.DECIMAL('10', 2).should.equal(2);
    mathTrig.DECIMAL('10', 10).should.equal(10);
    mathTrig.DECIMAL('FF', 16).should.equal(255);
    mathTrig.DECIMAL('ZZ', 36).should.equal(1295);
    mathTrig.DECIMAL('invalid').should.equal.NaN;
  });

  test('DEGREES', function() {
    mathTrig.DEGREES(Math.PI).should.equal(180);
    mathTrig.DEGREES('invalid').should.equal(error.value);
  });

  test('DIVIDE', function() {
    mathTrig.DIVIDE(10, 4).should.equal(2.5);
    mathTrig.DIVIDE(12, -6).should.equal(-2);
    mathTrig.DIVIDE(0, 0).should.equal(error.div0);
    mathTrig.DIVIDE(1, 0).should.equal(error.div0);
    mathTrig.DIVIDE(0, 1).should.equal(0);
    mathTrig.DIVIDE().should.equal(error.na);
    mathTrig.DIVIDE(1).should.equal(error.na);
    mathTrig.DIVIDE(1, 'string').should.equal(error.value);
  });

  test('EVEN', function() {
    mathTrig.EVEN(3).should.equal(4);
    mathTrig.EVEN('invalid').should.equal(error.value);
  });

  test('EQ', function() {
    mathTrig.EQ(10, 10).should.equal(true);
    mathTrig.EQ(1.2, 1.2).should.equal(true);
    mathTrig.EQ('hello', 'jim').should.equal(false);
    mathTrig.EQ('hello', 'hello').should.equal(true);
    mathTrig.EQ(123, 'hello').should.equal(false);
    mathTrig.EQ(true, true).should.equal(true);
    mathTrig.EQ(false, false).should.equal(true);
    mathTrig.EQ(false, 0).should.equal(false);
    mathTrig.EQ().should.equal(error.na);
    mathTrig.EQ(1).should.equal(error.na);
    mathTrig.EQ(1, 'string').should.equal(false);
  });

  test('FACT', function() {
    mathTrig.FACT(6).should.equal(720);
    mathTrig.FACT('invalid').should.equal(error.value);
  });

  test('FACTDOUBLE', function() {
    mathTrig.FACTDOUBLE(10).should.equal(3840);
    mathTrig.FACTDOUBLE('invalid').should.equal(error.value);
  });

  test('FLOOR', function() {
    mathTrig.FLOOR(4.1).should.equal(4);
    mathTrig.FLOOR(4.9).should.equal(4);
    mathTrig.FLOOR(-4.1).should.equal(-5);
    mathTrig.FLOOR(-4.9).should.equal(-5);
    mathTrig.FLOOR(4.1, 0).should.equal(0);
    mathTrig.FLOOR(4.1, 1).should.equal(4);
    mathTrig.FLOOR(4.1, 2).should.equal(4);
    mathTrig.FLOOR(-4.1, 2).should.equal(-6);
    mathTrig.FLOOR(-4.1, -2).should.equal(-6);
    mathTrig.FLOOR(1.234, 0.1).should.approximately(1.2, 1e-9);
    mathTrig.FLOOR(-1.234, 0.1).should.approximately(-1.3, 1e-9);
    mathTrig.FLOOR(-1.234, -0.1).should.approximately(-1.3, 1e-9);
    mathTrig.FLOOR(-1.234, -0.01).should.approximately(-1.24, 1e-9);
    mathTrig.FLOOR(-1.234, -0.001).should.approximately(-1.234, 1e-9);
    mathTrig.FLOOR(-4.1, 2, 0).should.equal(-6);
    mathTrig.FLOOR(-4.1, 2, -1).should.equal(-4);
    mathTrig.FLOOR(-4.1, -2, 0).should.equal(-6);
    mathTrig.FLOOR(-4.1, -2, -1).should.equal(-4);
    mathTrig.FLOOR(0.19, 0.25, 0).should.equal(0);
    mathTrig.FLOOR(0.39, 0.25, 0).should.equal(0.25);
    mathTrig.FLOOR(0.69, 0.25, 0).should.equal(0.5);
    mathTrig.FLOOR(0.89, 0.25, 0).should.equal(0.75);
    mathTrig.FLOOR(-4.1, -2, 'invalid').should.equal(error.value);
  });

  test('FLOOR.MATH', function() {
    mathTrig.FLOOR.MATH(24.3, 5).should.equal(20);
    mathTrig.FLOOR.MATH(6.7).should.equal(6);
    mathTrig.FLOOR.MATH(-8.1, 2).should.equal(-10);
    mathTrig.FLOOR.MATH(-5.5, 2, -1).should.equal(-4);
    mathTrig.FLOOR.MATH(-5.5, 2, 'invalid').should.equal(error.value);
  });

  test('FLOOR.PRECISE', function() {
    mathTrig.FLOOR.PRECISE(4.3).should.equal(4);
    mathTrig.FLOOR.PRECISE(-4.3).should.equal(-5);
    mathTrig.FLOOR.PRECISE(4.3, 2).should.equal(4);
    mathTrig.FLOOR.PRECISE(4.3, -2).should.equal(4);
    mathTrig.FLOOR.PRECISE(-4.3, 2).should.equal(-6);
    mathTrig.FLOOR.PRECISE(-4.3, -2).should.equal(-6);
    mathTrig.FLOOR.PRECISE(-4.3, 'invalid').should.equal(error.value);
  });

  test('GCD', function() {
    mathTrig.GCD(5, 2).should.equal(1);
    mathTrig.GCD(24, 36).should.equal(12);
    mathTrig.GCD(7, 1).should.equal(1);
    mathTrig.GCD(5, 0).should.equal(5);
    mathTrig.GCD(5, 'invalid').should.equal(error.value);
  });

  test('GTE', function() {
    mathTrig.GTE(10, 4).should.equal(true);
    mathTrig.GTE(10, 10).should.equal(true);
    mathTrig.GTE(10, 12).should.equal(false);
    mathTrig.GTE().should.equal(error.na);
    mathTrig.GTE(1).should.equal(error.na);
    mathTrig.GTE(1, 'string').should.equal(error.error);
    mathTrig.GTE('string', 2).should.equal(error.error);
  });

  test('INT', function() {
    mathTrig.INT(5.5).should.equal(5);
    mathTrig.INT('invalid').should.equal(error.value);
  });

  test('ISO.CEILING', function() {
    mathTrig.ISO.CEILING(4.3).should.equal(5);
    mathTrig.ISO.CEILING(-4.3).should.equal(-4);
    mathTrig.ISO.CEILING(4.3, 2).should.equal(6);
    mathTrig.ISO.CEILING(4.3, -2).should.equal(6);
    mathTrig.ISO.CEILING(-4.3, 2).should.equal(-4);
    mathTrig.ISO.CEILING(-4.3, -2).should.equal(-4);
    mathTrig.ISO.CEILING(-4.3, 'invalid').should.equal(error.value);
  });

  test('LCM', function() {
    mathTrig.LCM(5, 2).should.equal(10);
    mathTrig.LCM(24, 36).should.equal(72);
    mathTrig.LCM(24, 'invalid').should.equal(error.value);
  });


  test('LN', function() {
    mathTrig.LN(Math.E).should.equal(1);
    mathTrig.LN('invalid').should.equal(error.value);
  });

  test('LOG', function() {
    mathTrig.LOG(10).should.equal(1);
    mathTrig.LOG(10, 10).should.equal(1);
    mathTrig.LOG(10, 'invalid').should.equal(error.value);
  });

  test('LOG10', function() {
    mathTrig.LOG10(10).should.equal(1);
    mathTrig.LOG10('invalid').should.equal(error.value);
  });

  test('LT', function() {
    mathTrig.LT(10, 4).should.equal(false);
    mathTrig.LT(10, 10).should.equal(false);
    mathTrig.LT(10, 12).should.equal(true);
    mathTrig.LT().should.equal(error.na);
    mathTrig.LT(1).should.equal(error.na);
    mathTrig.LT(1, 'string').should.equal(error.error);
    mathTrig.LT('string', 2).should.equal(error.error);
  });

  test('LTE', function() {
    mathTrig.LTE(10, 4).should.equal(false);
    mathTrig.LTE(10, 10).should.equal(true);
    mathTrig.LTE(10, 12).should.equal(true);
    mathTrig.LTE().should.equal(error.na);
    mathTrig.LTE(1).should.equal(error.na);
    mathTrig.LTE(1, 'string').should.equal(error.error);
    mathTrig.LTE('string', 2).should.equal(error.error);
  });

  test('MDETERM', function() {
    mathTrig.MDETERM([
      [1, 2],
      [3, 4]
    ]).should.equal(-2);
    mathTrig.MDETERM([
      [1, 'invalid'],
      [3, 4]
    ]).should.equal(error.value);
  });

  test('MINUS', function() {
    mathTrig.MINUS(10, 4).should.equal(6);
    mathTrig.MINUS(1.2, 4).should.equal(-2.8);
    mathTrig.MINUS().should.equal(error.na);
    mathTrig.MINUS(1).should.equal(error.na);
    mathTrig.MINUS(1, 'string').should.equal(error.value);
  });

  test('MINVERSE', function() {
    should.deepEqual(mathTrig.MINVERSE([
      [1, 2],
      [3, 4]
    ]), [
      [-1.9999999999999996, 0.9999999999999998],
      [1.4999999999999998, -0.49999999999999994]
    ]);
    mathTrig.MINVERSE([
      [1, 'invalid'],
      [3, 4]
    ]).should.equal(error.value);
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
    mathTrig.MMULT([
      [1, 2],
      [3, 'invalid']
    ], [
      [1, 2],
      [3, 4]
    ]).should.equal(error.value);
  });

  test('MOD', function() {
    mathTrig.MOD(3, 2).should.equal(1);
    mathTrig.MOD(-3, 2).should.equal(1);
    mathTrig.MOD(3, -2).should.equal(-1);
    mathTrig.MOD(3, 0).should.equal(error.div0);
    mathTrig.MOD(3, 'invalid').should.equal(error.value);
  });

  test('MROUND', function() {
    mathTrig.MROUND(10, 3).should.equal(9);
    mathTrig.MROUND(-10, -3).should.equal(-9);
    mathTrig.MROUND(1.3, 0.2).should.approximately(1.4000000000000001, 1e-9);
    mathTrig.MROUND(5, -2).should.equal(error.num);
    mathTrig.MROUND(5, 'invalid').should.equal(error.value);
  });

  test('MULTINOMIAL', function() {
    mathTrig.MULTINOMIAL(2, 3, 4).should.equal(1260);
    mathTrig.MULTINOMIAL([2, 3, 4]).should.equal(1260);
    mathTrig.MULTINOMIAL([2, 'invalid', 4]).should.equal(error.value);
  });

  test('MULTIPLY', function() {
    mathTrig.MULTIPLY(10, 4).should.equal(40);
    mathTrig.MULTIPLY(12, -6).should.equal(-72);
    mathTrig.MULTIPLY(0, 0).should.equal(0);
    mathTrig.MULTIPLY(1, 0).should.equal(0);
    mathTrig.MULTIPLY(0, 1).should.equal(0);
    mathTrig.MULTIPLY().should.equal(error.na);
    mathTrig.MULTIPLY(1).should.equal(error.na);
    mathTrig.MULTIPLY(1, 'string').should.equal(error.value);
  });

  test('MUNIT', function() {
    should.deepEqual(mathTrig.MUNIT(3), [
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1]
    ]);
    mathTrig.MUNIT('invalid').should.equal(error.value);
  });

  test('NE', function() {
    mathTrig.NE(10, 10).should.equal(false);
    mathTrig.NE(1.2, 1.2).should.equal(false);
    mathTrig.NE('hello', 'jim').should.equal(true);
    mathTrig.NE('hello', 'hello').should.equal(false);
    mathTrig.NE(123, 'hello').should.equal(true);
    mathTrig.NE(true, true).should.equal(false);
    mathTrig.NE(false, false).should.equal(false);
    mathTrig.NE(false, 0).should.equal(true);
    mathTrig.NE().should.equal(error.na);
    mathTrig.NE(1).should.equal(error.na);
    mathTrig.NE(1, 'string').should.equal(true);
  });

  test('ODD', function() {
    mathTrig.ODD(3).should.equal(3);
    mathTrig.ODD(2).should.equal(3);
    mathTrig.ODD(-1).should.equal(-1);
    mathTrig.ODD(-2).should.equal(-3);
    mathTrig.ODD('invalid').should.equal(error.value);
  });

  test('PI', function() {
    mathTrig.PI().should.equal(Math.PI);
  });

  test('POWER', function() {
    mathTrig.POWER(5, 2).should.equal(25);
    mathTrig.POWER(98.6, 3.2).should.approximately(2401077.2220695773, 1e-9);
    mathTrig.POWER(4, 5 / 4).should.approximately(5.656854249492381, 1e-9);
    mathTrig.POWER(-1, 0.5).should.equal(error.num);
    mathTrig.POWER(-1, 'invalid').should.equal(error.value);
  });

  test('POW', function() {
    mathTrig.POW(5).should.equal(error.na);
    mathTrig.POW(5, 2).should.equal(25);
    mathTrig.POW(98.6, 3.2).should.approximately(2401077.2220695773, 1e-9);
    mathTrig.POW(4, 5 / 4).should.approximately(5.656854249492381, 1e-9);
    mathTrig.POW(-1, 0.5).should.equal(error.num);
    mathTrig.POW(-1, 'invalid').should.equal(error.error);
  });

  test('PRODUCT', function() {
    mathTrig.PRODUCT([5, 15, 30]).should.equal(2250);
    mathTrig.PRODUCT([5, 'invalid', 30]).should.equal(error.value);
  });

  test('QUOTIENT', function() {
    mathTrig.QUOTIENT(5, 2).should.equal(2);
    mathTrig.QUOTIENT(4.5, 3.1).should.equal(1);
    mathTrig.QUOTIENT(-10, 3).should.equal(-3);
    mathTrig.QUOTIENT(-10, 'invalid').should.equal(error.value);
  });

  test('RADIANS', function() {
    mathTrig.RADIANS(180).should.equal(Math.PI);
    mathTrig.RADIANS('invalid').should.equal(error.value);
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
    mathTrig.RANDBETWEEN(bottom, 'invalid').should.equal(error.value);
  });

  test('ROMAN', function() {
    mathTrig.ROMAN(10).should.equal('X');
    mathTrig.ROMAN(103).should.equal('CIII');
    mathTrig.ROMAN('invalid').should.equal(error.value);
  });

  test('ROUND', function() {
    mathTrig.ROUND(2.15, 1).should.approximately(2.2, 1e-9);
    mathTrig.ROUND(2.149, 1).should.approximately(2.1, 1e-9);
    mathTrig.ROUND(-1.475, 2).should.approximately(-1.47, 1e-9); //TODO: check if -1.48 would be the correct result or a precision error
    mathTrig.ROUND(21.5, -1).should.equal(20);
    mathTrig.ROUND(626.3, -3).should.equal(1000);
    mathTrig.ROUND(1.98, -1).should.equal(0);
    mathTrig.ROUND(-50.55, -2).should.equal(-100);
    mathTrig.ROUND(-50.55, 'invalid').should.equal(error.value);
  });

  test('ROUNDDOWN', function() {
    mathTrig.ROUNDDOWN(3.2, 0).should.equal(3);
    mathTrig.ROUNDDOWN(76.9, 0).should.equal(76);
    mathTrig.ROUNDDOWN(3.14159, 3).should.approximately(3.141, 1e-9);
    mathTrig.ROUNDDOWN(-3.14159, 1).should.approximately(-3.1, 1e-9);
    mathTrig.ROUNDDOWN(31415.92654, -2).should.equal(31400);
    mathTrig.ROUNDDOWN(31415.92654, 'invalid').should.equal(error.value);
  });

  test('ROUNDUP', function() {
    mathTrig.ROUNDUP(3.2, 0).should.equal(4);
    mathTrig.ROUNDUP(76.9, 0).should.equal(77);
    mathTrig.ROUNDUP(3.14159, 3).should.approximately(3.142, 1e-9);
    mathTrig.ROUNDUP(-3.14159, 1).should.approximately(-3.2, 1e-9);
    mathTrig.ROUNDUP(31415.92654, -2).should.equal(31500);
    mathTrig.ROUNDUP(31415.92654, 'invalid').should.equal(error.value);
  });

  test('SEC', function() {
    mathTrig.SEC(45).should.approximately(1.9035944074044246, 1e-9);
    mathTrig.SEC(30).should.approximately(6.482921234962678, 1e-9);
    mathTrig.SEC('invalid').should.equal(error.value);
  });

  test('SECH', function() {
    mathTrig.SECH(45).should.approximately(5.725037161098787e-20, 1e-9);
    mathTrig.SECH(30).should.approximately(1.8715245937680347e-13, 1e-9);
    mathTrig.SECH('invalid').should.equal(error.value);
  });

  test('SERIESSUM', function() {
    mathTrig.SERIESSUM(mathTrig.PI() / 4, 0, 2, [
      1, -1 / mathTrig.FACT(2),
      1 / mathTrig.FACT(4), -1 / mathTrig.FACT(6)
    ]).should.approximately(0.7071032148228457, 1e-9);
    mathTrig.SERIESSUM(1, 2, 3, 'invalid').should.equal(error.value);
  });

  test('SIGN', function() {
    mathTrig.SIGN(0).should.equal(0);
    mathTrig.SIGN(-5).should.equal(-1);
    mathTrig.SIGN(5).should.equal(1);
    mathTrig.SIGN('invalid').should.equal(error.value);
  });

  test('SIN', function() {
    mathTrig.SIN(Math.PI / 2).should.equal(1);
    mathTrig.SIN('invalid').should.equal(error.value);
  });

  test('SINH', function() {
    mathTrig.SINH(1).should.approximately(1.1752011936438014, 1e-9); // the golden ratio: http://mathworld.wolfram.com/HyperbolicSine.html
    mathTrig.SINH('invalid').should.equal(error.value);
  });

  test('SQRT', function() {
    mathTrig.SQRT(4).should.equal(2);
    mathTrig.SQRT(-1).should.equal(error.num);
    mathTrig.SQRT('invalid').should.equal(error.value);
  });

  test('SQRTPI', function() {
    mathTrig.SQRTPI(3).should.approximately(3.0699801238394655, 1e-9);
    mathTrig.SQRTPI('invalid').should.equal(error.value);
  });

  test('SUBTOTAL', function() {
    mathTrig.SUBTOTAL(1, [1, 2, 3]).should.equal(2);
    mathTrig.SUBTOTAL(2, [1, 2, 3, 'does not count']).should.equal(3);
    mathTrig.SUBTOTAL(3, [1, 2, 3, 'counts']).should.equal(4);
    mathTrig.SUBTOTAL(4, [1, 2, 3]).should.equal(3);
    mathTrig.SUBTOTAL(5, [1, 2, 3]).should.equal(1);
    mathTrig.SUBTOTAL(6, [1, 2, 3]).should.equal(6);
    mathTrig.SUBTOTAL(7, [1, 2, 3]).should.equal(1);
    mathTrig.SUBTOTAL(8, [1, 2, 3]).should.approximately(0.816496580927726, 1e-9);
    mathTrig.SUBTOTAL(9, [1, 2, 3]).should.equal(6);
    mathTrig.SUBTOTAL(10, [1, 2, 3]).should.equal(1);
    mathTrig.SUBTOTAL(11, [1, 2, 3]).should.approximately(0.6666666666666666, 1e-9);
    mathTrig.SUBTOTAL(101, [1, 2, 3]).should.equal(2);
    mathTrig.SUBTOTAL(102, [1, 2, 3, 'does not count']).should.equal(3);
    mathTrig.SUBTOTAL(103, [1, 2, 3, 'counts']).should.equal(4);
    mathTrig.SUBTOTAL(104, [1, 2, 3]).should.equal(3);
    mathTrig.SUBTOTAL(105, [1, 2, 3]).should.equal(1);
    mathTrig.SUBTOTAL(106, [1, 2, 3]).should.equal(6);
    mathTrig.SUBTOTAL(107, [1, 2, 3]).should.equal(1);
    mathTrig.SUBTOTAL(108, [1, 2, 3]).should.approximately(0.816496580927726, 1e-9);
    mathTrig.SUBTOTAL(109, [1, 2, 3]).should.equal(6);
    mathTrig.SUBTOTAL(110, [1, 2, 3]).should.equal(1);
    mathTrig.SUBTOTAL(111, [1, 2, 3]).should.approximately(0.6666666666666666, 1e-9);
    mathTrig.SUBTOTAL('invalid', [1, 2, 3]).should.equal(error.value);
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
    mathTrig.SUM(1, 'invalid').should.equal(1);
  });

  test("SUMIF", function() {
    mathTrig.SUMIF([1, 2, 3], '>2').should.equal(3);
    mathTrig.SUMIF([
      [1, 1],
      [2, 2],
      [3, 3]
    ], '>2').should.equal(6);
    mathTrig.SUMIF([1, 2, 3], '<>2').should.equal(4);
    mathTrig.SUMIF([1, 2, 3, 3, 4, 5], '=3').should.equal(6);
    mathTrig.SUMIF(['a','b','c','b','d'], 'b', [1,2,3,4,5]).should.equal(6);
    mathTrig.SUMIF(['a','b','c','d','d'], '=d', [1,2,3,4,5]).should.equal(9);
    mathTrig.SUMIF([1, 'invalid', 3], '>2').should.equal(error.value);
  });

  test("SUMIFS", function() {
    mathTrig.SUMIFS([1, 2, 3], '>1', '<3').should.equal(2);
    mathTrig.SUMIFS([
      [1, 1],
      [2, 2],
      [3, 3]
    ], '>1', '<3').should.equal(4);
    mathTrig.SUMIFS([1, 'invalid', 3], '>1', '<3').should.equal(error.value);
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

    mathTrig.SUMPRODUCT([
      [1],
      [4],
      [10]
    ], [
      [0.55],
      [0.3],
      [0.1]
    ]).should.approximately(2.75, 1e-9);

    mathTrig.SUMPRODUCT([
      1,
      4,
      10
    ], [
      0.55,
      0.3,
      0.1
    ]).should.approximately(2.75, 1e-9);

    mathTrig.SUMPRODUCT([
      [3, 4],
      [8, 6],
      [1, 9]
    ], [
      [2, 'invalid'],
      [6, 7],
      [5, 3]
    ]).should.equal(error.value);

    mathTrig.SUMPRODUCT([8, 'invalid'], [5, 3]).should.equal(error.value);
    mathTrig.SUMPRODUCT().should.equal(error.value);
  });

  test("SUMSQ", function() {
    mathTrig.SUMSQ(1, 2, 3).should.equal(14);
    mathTrig.SUMSQ([1, 2, 3]).should.equal(14);
    mathTrig.SUMSQ([
      [1, 1],
      [2, 2],
      [3, 3]
    ]).should.equal(28);
    mathTrig.SUMSQ(1, 'invalid', 3).should.equal(error.value);
  });

  test("SUMX2MY2", function() {
    mathTrig.SUMX2MY2([1, 2, 3], [4, 5, 6]).should.equal(-63);
    mathTrig.SUMX2MY2([1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12, 13, 14, 15, 16]).should.equal(-468);
    mathTrig.SUMX2MY2([1, 2, 3], [4, 'invalid', 6]).should.equal(error.value);
  });

  test("SUMX2PY2", function() {
    mathTrig.SUMX2PY2([1, 2, 3], [4, 5, 6]).should.equal(91);
    mathTrig.SUMX2PY2([1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12, 13, 14, 15, 16]).should.equal(650);
    mathTrig.SUMX2PY2([1, 2, 'invalid'], [4, 5, 6]).should.equal(error.value);
  });

  test("SUMXMY2", function() {
    mathTrig.SUMXMY2([1, 2, 3], [4, 5, 6]).should.equal(27);
    mathTrig.SUMXMY2([1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12, 13, 14, 15, 16]).should.equal(216);
    mathTrig.SUMXMY2([1, 2, 'invalid'], [4, 5, 6]).should.equal(error.value);
  });

  test('TAN', function() {
    mathTrig.TAN(mathTrig.RADIANS(45)).should.approximately(1, 1e-9);
    mathTrig.TAN('invalid').should.equal(error.value);
  });

  test('TANH', function() {
    mathTrig.TANH(0.5).should.approximately(0.46211715726000974, 1e-9);
    mathTrig.TANH('invalid').should.equal(error.value);
  });

  test('TRUNC', function() {
    mathTrig.TRUNC(8.9).should.equal(8);
    mathTrig.TRUNC(-8.9).should.equal(-8);
    mathTrig.TRUNC(0.45).should.equal(0);
    mathTrig.TRUNC('invalid').should.equal(error.value);
  });
});
