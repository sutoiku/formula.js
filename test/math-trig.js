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

  test('CSC', function() {
    mathTrig.CSC(0).should.equal(Infinity);
  });

  test('CSCH', function() {
    mathTrig.COSH(0).should.equal(1);
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
  });

  test('FLOOR.MATH', function() {
    mathTrig.FLOOR.MATH(24.3, 5).should.equal(20);
    mathTrig.FLOOR.MATH(6.7).should.equal(6);
    mathTrig.FLOOR.MATH(-8.1, 2).should.equal(-10);
  });

  test('FLOOR.PRECISE', function() {
    mathTrig.FLOOR.PRECISE(-3.2, -1).should.equal(-4);
    mathTrig.FLOOR.PRECISE(3.2, 1).should.equal(3);
    mathTrig.FLOOR.PRECISE(-3.2, 1).should.equal(-4);
    mathTrig.FLOOR.PRECISE(3.2, -1).should.equal(3);
    mathTrig.FLOOR.PRECISE(3.2).should.equal(3);
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
    mathTrig.LOG(10).should.equal(1);
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
});