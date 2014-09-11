/* global suite, test */
var statistical = require('../lib/statistical');
var mathTrig = require('../lib/math-trig');
var error = require('../lib/error');
var should = require('should');

suite('Statistical', function() {
  test("AVEDEV", function() {
    statistical.AVEDEV(2, 4, 8, 16).should.approximately(4.5, 1e-9);
    statistical.AVEDEV([2, 4, 8, 16]).should.approximately(4.5, 1e-9);
    statistical.AVEDEV([2, 4], [8, 16]).should.approximately(4.5, 1e-9);
    statistical.AVEDEV([
      [2, 4],
      [8, 16]
    ]).should.approximately(4.5, 1e-9);
    statistical.AVEDEV([2, 'invalid'], [8, 16]).should.equal(error.value);
  });

  test("AVERAGE", function() {
    statistical.AVERAGE(2, 4, 8, 16).should.approximately(7.5, 1e-9);
    statistical.AVERAGE([2, 4, 8, 16]).should.approximately(7.5, 1e-9);
    statistical.AVERAGE([2, 4], [8, 16]).should.approximately(7.5, 1e-9);
    statistical.AVERAGE([
      [2, 4],
      [8, 16]
    ]).should.approximately(7.5, 1e-9);
    statistical.AVERAGE([
      [2, 4],
      [8, 16],
      [true, false]
    ]).should.approximately(7.5, 1e-9);
  });

  test("AVERAGEA", function() {
    statistical.AVERAGEA(2, 4, 8, 16).should.approximately(7.5, 1e-9);
    statistical.AVERAGEA([2, 4, 8, 16]).should.approximately(7.5, 1e-9);
    statistical.AVERAGEA([2, 4], [8, 16]).should.approximately(7.5, 1e-9);
    statistical.AVERAGEA([2, 4], [6, 8], [true, false]).should.approximately(3.5, 1e-9);
    statistical.AVERAGEA([2, 4], [6, 8], [true, false], ['a', 'b']).should.approximately(2.625, 1e-9);
  });

  test("AVERAGEIF", function() {
    statistical.AVERAGEIF([2, 4, 8, 16], '>5').should.equal(12);
    statistical.AVERAGEIF([2, 4, 8, 16], '>5', [1, 2, 3, 4]).should.approximately(3.5, 1e-9);
    statistical.AVERAGEIF([
      [2, 4],
      [8, 16]
    ], '>5', [
      [1, 2],
      [3, 4]
    ]).should.approximately(3.5, 1e-9);
    statistical.AVERAGEIF([2, 4, 'invalid', 16], '>5').should.equal(error.value);
  });

  test("AVERAGEIFS", function() {
    statistical.AVERAGEIFS([2, 4, 8, 16], [1, 2, 3, 4], '>2').should.equal(12);
    statistical.AVERAGEIFS([2, 4, 8, 16], [1, 2, 3, 4], '>2', [1, 2, 3, 4], '>2').should.equal(12);
    statistical.AVERAGEIFS([2, 4, 8, 16], [1, 2, 3, 4], '>2', [1, 1, 1, 1], '>2').should.equal(0);
  });

  test('BETA.DIST', function() {
    statistical.BETA.DIST(2, 8, 10, 1, 3).should.approximately(0.6854705810117458, 1e-9);
    statistical.BETA.DIST(2, 8, 'invalid', 1, 3).should.equal(error.value);
  });

  test('BETA.INV', function() {
    statistical.BETA.INV(0.6854705810117458, 8, 10, 1, 3).should.approximately(1.9999999999999998, 1e-9);
    statistical.BETA.INV(0.6854705810117458, 'invalid', 10, 1, 3).should.equal(error.value);
  });

  test('BINOM.DIST', function() {
    statistical.BINOM.DIST(6, 10, 0.5, false).should.approximately(0.205078125, 1e-9);
    statistical.BINOM.DIST(6, 'invalid', 0.5, false).should.equal(error.value);
  });

  test('BINOM.DIST.RANGE', function() {
    statistical.BINOM.DIST.RANGE(60, 0.75, 48).should.approximately(0.08397496742904752, 1e-9);
    statistical.BINOM.DIST.RANGE(60, 0.75, 45, 50).should.approximately(0.5236297934718873, 1e-9);
    statistical.BINOM.DIST.RANGE(60, 0.75, 'invalid', 50).should.equal(error.value);
  });

  test('BINOM.INV', function() {
    statistical.BINOM.INV(6, 0.5, 0.75).should.equal(4);
    statistical.BINOM.INV(6, 'invalid', 0.75).should.equal(error.value);
  });

  test('CHISQ.DIST', function() {
    statistical.CHISQ.DIST(0.5, 1, true).should.approximately(0.5204998778130242, 1e-9);
    statistical.CHISQ.DIST(0.5, 'invalid', true).should.equal(error.value);
  });

  // TODO: implement
  test('CHISQ.DIST.RT', function() {
    statistical.CHISQ.DIST.RT.should.throw('CHISQ.DIST.RT is not implemented');
  });

  test('CHISQ.INV', function() {
    statistical.CHISQ.INV(0.93, 1).should.approximately(3.283020286473263, 1e-9);
    statistical.CHISQ.INV(0.6, 2).should.approximately(1.83258146374831, 1e-9);
    statistical.CHISQ.INV(0.6, 'invalid').should.equal(error.value);
  });

  // TODO: implement
  test('CHISQ.INV.RT', function() {
    statistical.CHISQ.INV.RT.should.throw('CHISQ.INV.RT is not implemented');
  });

  // TODO: implement
  test('CHISQ.TEST', function() {
    statistical.CHISQ.TEST.should.throw('CHISQ.TEST is not implemented');
  });

  test('CONFIDENCE.NORM', function() {
    statistical.CONFIDENCE.NORM(0.05, 2.5, 50).should.approximately(0.6929519121748391, 1e-9);
    statistical.CONFIDENCE.NORM(0.05, 'invalid', 50).should.equal(error.value);
  });

  test('CONFIDENCE.T', function() {
    statistical.CONFIDENCE.T(0.05, 1, 50).should.approximately(0.28419685015290463, 1e-9);
    statistical.CONFIDENCE.T(0.05, 1, 'invalid').should.equal(error.value);
  });

  test('CORREL', function() {
    statistical.CORREL([3, 2, 4, 5, 6], [9, 7, 12, 15, 17]).should.approximately(0.9970544855015815, 1e-9);
    statistical.CORREL([3, 2, 4, 5, 6], [9, 7, 12, 'invalid', 17]).should.equal(error.value);
  });

  test("COUNT", function() {
    statistical.COUNT().should.equal(0);
    statistical.COUNT(1, 2, 3, 4).should.equal(4);
    statistical.COUNT([1, 2, 3, 4]).should.equal(4);
    statistical.COUNT([1, 2], [3, 4]).should.equal(4);
    statistical.COUNT([
      [1, 2],
      [3, 4]
    ]).should.equal(4);
    statistical.COUNT([
      [1, 2],
      [3, 2],
      [null, null]
    ]).should.equal(4);
    statistical.COUNT([
      [1, 2],
      ['a', 'b'],
      [null, null]
    ]).should.equal(2);
  });

  test("COUNTA", function() {
    statistical.COUNTA().should.equal(0);
    statistical.COUNTA(1, null, 3, 'a', '', 'c').should.equal(4);
    statistical.COUNTA([1, null, 3, 'a', '', 'c']).should.equal(4);
    statistical.COUNTA([1, null, 3], ['a', '', 'c']).should.equal(4);
    statistical.COUNTA([
      [1, null, 3],
      ['a', '', 'c']
    ]).should.equal(4);
  });

  test("COUNTBLANK", function() {
    statistical.COUNTBLANK().should.equal(0);
    statistical.COUNTBLANK(1, null, 3, 'a', '', 'c').should.equal(2);
    statistical.COUNTBLANK([1, null, 3, 'a', '', 'c']).should.equal(2);
    statistical.COUNTBLANK([1, null, 3], ['a', '', 'c']).should.equal(2);
    statistical.COUNTBLANK([
      [1, null, 3],
      ['a', '', 'c']
    ]).should.equal(2);
  });

  test("COUNTIF", function() {
    statistical.COUNTIF([1, null, 3, 'a', ''], '>1').should.equal(1);
    statistical.COUNTIF([1, null, 'c', 'a', ''], '>1').should.equal(0);
    statistical.COUNTIF([
      [1, null, 3],
      ['a', 4, 'c']
    ], '>1').should.equal(2);
    statistical.COUNTIF([
      [1, null, 'a'],
      ['a', 4, 'c']
    ], 'a').should.equal(2);
  });

  test("COUNTIFS", function() {
    statistical.COUNTIFS([1, null, 3, 'a', ''], '>1').should.equal(1);
    statistical.COUNTIFS([1, null, 'c', 'a', ''], '>1').should.equal(0);
    statistical.COUNTIFS([
      [1, null, 3],
      ['a', 4, 'c']
    ], '>1').should.equal(2);
    statistical.COUNTIFS([
      [1, null, 'a'],
      ['a', 4, 'c']
    ], 'a').should.equal(2);
    statistical.COUNTIFS([1, null], '1', [2, null], '2').should.equal(1);
    statistical.COUNTIFS([1, null], '1', [null, 2], '2').should.equal(0);
    statistical.COUNTIFS([
      [1],
      [null]
    ], '1', [
      [2],
      [1]
    ], '2').should.equal(1);
  });

  test('COUNTUNIQUE', function() {
    statistical.COUNTUNIQUE().should.equal(0);
    statistical.COUNTUNIQUE(1, 1, 2, 2, 3, 3).should.equal(3);
    statistical.COUNTUNIQUE([1,1,2,2,3,3]).should.equal(3);
    statistical.COUNTUNIQUE([1,1,2], [2,3,3]).should.equal(3);
    statistical.COUNTUNIQUE([[1,1],[2,5]], [[2,3],[3,4]]).should.equal(5);
  });

  test('COVARIANCE.P', function() {
    statistical.COVARIANCE.P([3, 2, 4, 5, 6], [9, 7, 12, 15, 17]).should.approximately(5.2, 1e-9);
    statistical.COVARIANCE.P([3, 2, 4, 5, 6], [9, 'invalid', 12, 15, 17]).should.equal(error.value);
  });

  test('COVARIANCE.S', function() {
    statistical.COVARIANCE.S([2, 4, 8], [5, 11, 12]).should.approximately(9.666666666666668, 1e-9);
    statistical.COVARIANCE.S([2, 4, 8], [5, 'invalid', 12]).should.equal(error.value);
  });

  test('DEVSQ', function() {
    statistical.DEVSQ([4, 5, 8, 7, 11, 4, 3]).should.equal(48);
    statistical.DEVSQ([4, 5, 8, 7, 'invalid', 4, 3]).should.equal(error.value);
  });

  test('EXPON.DIST', function() {
    statistical.EXPON.DIST(0.2, 10, true).should.approximately(0.8646647167633873, 1e-9);
    statistical.EXPON.DIST(0.2, 10, false).should.approximately(1.353352832366127, 1e-9);
    statistical.EXPON.DIST(0.2, 'invalid', false).should.equal(error.value);
  });

  // TODO: verify if this is not the other way around
  test('F.DIST', function() {
    statistical.F.DIST(15.20686486, 6, 4, true).should.approximately(0.0012237995987608916, 1e-9);
    statistical.F.DIST(15.20686486, 6, 4, false).should.approximately(0.9899999999985833, 1e-9);
    statistical.F.DIST(15.20686486, 6, 'invalid', false).should.equal(error.value);
  });

  // TODO: implement
  test('F.DIST.RT', function() {
    statistical.F.DIST.RT.should.throw('F.DIST.RT is not implemented');
  });

  test('F.INV', function() {
    statistical.F.INV(0.01, 6, 4).should.approximately(0.10930991412457851, 1e-9);
    statistical.F.INV(0.0, 6, 4).should.equal(error.num);
    statistical.F.INV(0.0, 'invalid', 4).should.equal(error.value);
  });

  // TODO: implement
  test('F.INV.RT', function() {
    statistical.F.INV.RT.should.throw('F.INV.RT is not implemented');
  });

  // TODO: implement
  test('F.TEST', function() {
    statistical.F.TEST.should.throw('F.TEST is not implemented');
  });

  test('FISHER', function() {
    statistical.FISHER(0.75).should.approximately(0.9729550745276566, 1e-9);
    statistical.FISHER('invalid').should.equal(error.value);
  });

  test('FISHERINV', function() {
    statistical.FISHERINV(0.9729550745276566).should.approximately(0.75, 1e-9);
    statistical.FISHERINV('invalid').should.equal(error.value);
  });

  test('FORECAST', function() {
    statistical.FORECAST(30, [6, 7, 9, 15, 21], [20, 28, 31, 38, 40]).should.approximately(10.607253086419755, 1e-9);
    statistical.FORECAST(30, [6, 7, 'invalid', 15, 21], [20, 28, 31, 38, 40]).should.equal(error.value);
  });

  test('FREQUENCY', function() {
    should.deepEqual(statistical.FREQUENCY([
      79, 85, 78, 85,
      50, 81, 95, 88, 97
    ], [
      70, 79, 89
    ]), [1, 2, 4, 2]);
    statistical.FREQUENCY([
      79, 85, 78, 85,
      50, 81, 'invalid', 88, 97
    ], [
      70, 79, 89
    ]).should.equal(error.value);
  });

  test('GAMMA', function() {
    statistical.GAMMA(2.5).should.approximately(1.3293403919101043, 1e-9);
    statistical.GAMMA(-3.75).should.approximately(0.26786611734776916, 1e-9);
    statistical.GAMMA(0).should.equal(error.num);
    statistical.GAMMA(-2).should.equal(error.num);
    statistical.GAMMA('invalid').should.equal(error.value);
  });

  // TODO: implement
  test('GAMMA.DIST', function() {
    statistical.GAMMA.DIST.should.throw('GAMMA.DIST is not implemented');
  });

  // TODO: implement
  test('GAMMA.INV', function() {
    statistical.GAMMA.INV.should.throw('GAMMA.INV is not implemented');
  });

  test('GAMMALN', function() {
    statistical.GAMMALN(4).should.approximately(1.7917594692280547, 1e-9);
    statistical.GAMMALN('invalid').should.equal(error.value);
  });

  // TODO: implement
  test('GAMMALN.PRECISE', function() {
    statistical.GAMMALN.PRECISE.should.throw('GAMMALN.PRECISE is not implemented');
  });

  test('GAUSS', function() {
    statistical.GAUSS(2).should.approximately(0.4772498680518208, 1e-9);
    statistical.GAUSS('invalid').should.equal(error.value);
  });

  test('GEOMEAN', function() {
    statistical.GEOMEAN([4, 5, 8, 7, 11, 4, 3]).should.approximately(5.476986969656962, 1e-9);
    statistical.GEOMEAN([4, 5, 8, 7, 'invalid', 4, 3]).should.equal(error.value);
  });

  test('GROWTH', function() {
    var known_y = [33100, 47300, 69000, 102000, 150000, 220000];
    var known_x = [11, 12, 13, 14, 15, 16];
    var new_x = [11, 12, 13, 14, 15, 16, 17, 18, 19];

    mathTrig.SUM(statistical.GROWTH(known_y, known_x, new_x))
      .should.approximately(mathTrig.SUM([
        32618.203773538437,
        47729.42261474665,
        69841.30085621694,
        102197.07337883314,
        149542.4867400494,
        218821.87621460424,
        320196.7183634903,
        468536.05418408214,
        685597.3889812973
      ]), 1e-6);

    mathTrig.SUM(statistical.GROWTH(known_y))
      .should.approximately(mathTrig.SUM([
        32618.203773539713,
        47729.42261474775,
        69841.30085621744,
        102197.07337883241,
        149542.4867400457,
        218821.8762145953
      ]), 1e-6);

    mathTrig.SUM(statistical.GROWTH(known_y, known_x, new_x, false))
      .should.approximately(mathTrig.SUM([
        9546.01078362295,
        21959.574129266384,
        50515.645421859634,
        116205.8251842928,
        267319.0393588225,
        614938.7837519756,
        1414600.7282884493,
        3254137.2789414385,
        7485793.848705778
      ]), 1e-6);

    statistical.GROWTH(known_y, known_x, 'invalid', false).should.equal(error.value);
    statistical.GROWTH('invalid', known_x).should.equal(error.value);
  });

  test('HARMEAN', function() {
    statistical.HARMEAN([4, 5, 8, 7, 11, 4, 3]).should.approximately(5.028375962061728, 1e-9);
    statistical.HARMEAN([4, 5, 8, 7, 'invalid', 4, 3]).should.equal(error.value);
  });

  test('HYPGEOM.DIST', function() {
    statistical.HYPGEOM.DIST(1, 4, 8, 20, true).should.approximately(0.46542827657378744, 1e-9);
    statistical.HYPGEOM.DIST(1, 4, 8, 20, false).should.approximately(0.3632610939112487, 1e-9);
    statistical.HYPGEOM.DIST(1, 'invalid', 8, 20, false).should.equal(error.value);
  });

  test('INTERCEPT', function() {
    statistical.INTERCEPT([
      2, 3, 9, 1, 8
    ], [
      6, 5, 11, 7, 5
    ]).should.approximately(0.04838709677419217, 1e-9);

    statistical.INTERCEPT([1, 2, 3], [1, 2, 3, 4]).should.equal(error.na);
    statistical.INTERCEPT([1, 2, 3], [1, 'invalid', 3, 4]).should.equal(error.value);
  });

  test('KURT', function() {
    statistical.KURT([
      3, 4, 5, 2, 3, 4, 5, 6, 4, 7
    ]).should.approximately(-0.15179963720841627, 1e-9);
    statistical.KURT([
      3, 4, 5, 2, 'invalid', 4, 5, 6, 4, 7
    ]).should.equal(error.value);
  });

  test('LARGE', function() {
    statistical.LARGE([3, 5, 3, 5, 4], 3).should.equal(4);
    statistical.LARGE([3, 5, 3, 'invalid', 4], 3).should.equal(error.value);
  });

  test('LINEST', function() {
    var known_y = [1, 9, 5, 7];
    var known_x = [0, 4, 2, 3];
    should.deepEqual(statistical.LINEST(known_y, known_x), [
      2, 1
    ]);
    statistical.LINEST(known_y, 'invalid').should.equal(error.value);
  });

  // TODO: implement
  test('LOGEST', function() {
    statistical.LOGEST.should.throw('LOGEST is not implemented');
  });

  test('LOGNORM.DIST', function() {
    statistical.LOGNORM.DIST(4, 3.5, 1.2, true).should.approximately(0.0390835557068005, 1e-9);
    statistical.LOGNORM.DIST(4, 3.5, 1.2, false).should.approximately(0.01761759668181924, 1e-9);
    statistical.LOGNORM.DIST(4, 3.5, 'invalid', false).should.equal(error.value);
  });

  test('LOGNORM.INV', function() {
    statistical.LOGNORM.INV(0.0390835557068005, 3.5, 1.2).should.approximately(4.000000000000001, 1e-9);
    statistical.LOGNORM.INV(0.0390835557068005, 'invalid', 1.2).should.equal(error.value);
  });

  test("MAX", function() {
    statistical.MAX().should.equal(0);
    statistical.MAX([0.1, 0.2], [0.4, 0.8], [true, false]).should.approximately(0.8, 1e-9);
    statistical.MAX([
      [0, 0.1, 0.2],
      [0.4, 0.8, 1],
      [true, false]
    ]).should.equal(1);
  });

  test("MAXA", function() {
    statistical.MAXA().should.equal(0);
    statistical.MAXA([0.1, 0.2], [0.4, 0.8], [true, false]).should.equal(1);
    statistical.MAXA([
      [0.1, 0.2],
      [0.4, 0.8],
      [true, false]
    ]).should.equal(1);
  });

  test('MEDIAN', function() {
    statistical.MEDIAN(1, 2, 3, 4, 5).should.equal(3);
    statistical.MEDIAN(1, 2, 3, 4, 5, 6).should.approximately(3.5, 1e-9);
  });

  test("MIN", function() {
    statistical.MIN().should.equal(0);
    statistical.MIN([0.1, 0.2], [0.4, 0.8], [true, false]).should.approximately(0.1, 1e-9);
    statistical.MIN([0, 0.1, 0.2], [0.4, 0.8, 1], [true, false]).should.equal(0);
    statistical.MIN([
      [10, 0],
      [0.1, 0.2]
    ], [
      [10, 0.4],
      [0.8, 1]
    ], [
      [10, 10],
      [true, false]
    ]).should.equal(0);
  });

  test("MINA", function() {
    statistical.MINA().should.equal(0);
    statistical.MINA([0.1, 0.2], [0.4, 0.8], [true, false]).should.equal(0);
    statistical.MINA([
      [10, 0],
      [0.1, 0.2]
    ], [
      [10, 0.4],
      [0.8, 1]
    ], [
      [10, 10],
      [true, false]
    ]).should.equal(0);
  });

  test('MODE.MULT', function() {
    var data = [1, 2, 3, 4, 3, 2, 1, 2, 3, 5, 6, 1];
    var modes = statistical.MODE.MULT(data);
    modes.length.should.equal(3);
    modes.should.containEql(1);
    modes.should.containEql(2);
    modes.should.containEql(3);
    statistical.MODE.MULT([1, 2, 'invalid']).should.equal(error.value);
  });

  test('MODE.SNGL', function() {
    var data = [5.6, 4, 4, 3, 2, 4];
    statistical.MODE.SNGL(data).should.equal(4);
    statistical.MODE.SNGL([1, 2, 'invalid']).should.equal(error.value);
  });

  test('NEGBINOM.DIST', function() {
    statistical.NEGBINOM.DIST(10, 5, 0.25, false).should.approximately(0.05504866037517786, 1e-9);
    statistical.NEGBINOM.DIST(10, 5, 0.25, true).should.approximately(0.3135140584781766, 1e-9);
    statistical.NEGBINOM.DIST(10, 'invalid', 0.25, true).should.equal(error.value);
  });

  test("NORM.DIST", function() {
    statistical.NORM.DIST(1, 0, 1, false).should.approximately(0.24197072451914337, 1e-9);
    statistical.NORM.DIST(1, 0, 1, true).should.approximately(0.8413447460685429, 1e-9);
    statistical.NORM.DIST('Hello World!', 0, 1, false).should.equal(error.value);
    statistical.NORM.DIST(0, 'Hello World!', 1, false).should.equal(error.value);
    statistical.NORM.DIST(0, 0, 'Hello World!', false).should.equal(error.value);
    statistical.NORM.DIST(0, 0, -1, false).should.equal(error.num);
  });

  test('NORM.INV', function() {
    statistical.NORM.INV(0.908789, 40, 1.5).should.approximately(42.00000200956616, 1e-9);
    statistical.NORM.INV(0.908789, 'invalid', 1.5).should.equal(error.value);
  });

  test('NORM.S.DIST', function() {
    statistical.NORM.S.DIST(1, true).should.approximately(0.8413447460685429, 1e-9);
    statistical.NORM.S.DIST(1, false).should.approximately(0.24197072451914337, 1e-9);
    statistical.NORM.S.DIST('invalid', false).should.equal(error.value);
  });

  test('NORM.S.INV', function() {
    statistical.NORM.S.INV(0.908789).should.approximately(1.3333346730441074, 1e-9);
    statistical.NORM.S.INV('invalid').should.equal(error.value);
  });

  test('PEARSON', function() {
    var independentValues = [9, 7, 5, 3, 1];
    var depentendValues = [10, 6, 1, 5, 3];
    statistical.PEARSON(independentValues, depentendValues).should.approximately(0.6993786061802354, 1e-9);
    depentendValues.push('invalid');
    statistical.PEARSON(independentValues, depentendValues).should.equal(error.value);
  });

  test("PERCENTILE.EXC", function() {
    statistical.PERCENTILE.EXC([1, 2, 3, 4], 0).should.equal(error.num);
    statistical.PERCENTILE.EXC([1, 2, 3, 4], 0.1).should.equal(error.num);
    statistical.PERCENTILE.EXC([1, 2, 3, 4], 0.2).should.equal(1);
    statistical.PERCENTILE.EXC([1, 2, 3, 4], 0.25).should.approximately(1.25, 1e-9);
    statistical.PERCENTILE.EXC([1, 2, 3, 4], 0.3).should.approximately(1.5, 1e-9);
    statistical.PERCENTILE.EXC([1, 2, 3, 4], 0.4).should.equal(2);
    statistical.PERCENTILE.EXC([1, 2, 3, 4], 0.5).should.approximately(2.5, 1e-9);
    statistical.PERCENTILE.EXC([1, 2, 3, 4], 0.6).should.equal(3);
    statistical.PERCENTILE.EXC([1, 2, 3, 4], 0.7).should.approximately(3.5, 1e-9);
    statistical.PERCENTILE.EXC([1, 2, 3, 4], 0.75).should.approximately(3.75, 1e-9);
    statistical.PERCENTILE.EXC([1, 2, 3, 4], 0.8).should.equal(4);
    statistical.PERCENTILE.EXC([1, 2, 3, 4], 0.9).should.equal(error.num);
    statistical.PERCENTILE.EXC([1, 2, 3, 4], 1).should.equal(error.num);
    statistical.PERCENTILE.EXC([1, 'invalid', 3, 4], 1).should.equal(error.value);
  });

  test("PERCENTILE.INC", function() {
    statistical.PERCENTILE.INC([1, 2, 3, 4], 0).should.equal(1);
    statistical.PERCENTILE.INC([1, 2, 3, 4], 0.1).should.approximately(1.3, 1e-9);
    statistical.PERCENTILE.INC([1, 2, 3, 4], 0.2).should.approximately(1.6, 1e-9);
    statistical.PERCENTILE.INC([1, 2, 3, 4], 0.25).should.approximately(1.75, 1e-9);
    statistical.PERCENTILE.INC([1, 2, 3, 4], 0.3).should.approximately(1.9, 1e-9);
    statistical.PERCENTILE.INC([1, 2, 3, 4], 0.4).should.approximately(2.2, 1e-9);
    statistical.PERCENTILE.INC([1, 2, 3, 4], 0.5).should.approximately(2.5, 1e-9);
    statistical.PERCENTILE.INC([1, 2, 3, 4], 0.6).should.approximately(2.8, 1e-9);
    statistical.PERCENTILE.INC([1, 2, 3, 4], 0.7).should.approximately(3.1, 1e-9);
    statistical.PERCENTILE.INC([1, 2, 3, 4], 0.75).should.approximately(3.25, 1e-9);
    statistical.PERCENTILE.INC([1, 2, 3, 4], 0.8).should.approximately(3.4, 1e-9);
    statistical.PERCENTILE.INC([1, 2, 3, 4], 0.9).should.approximately(3.7, 1e-9);
    statistical.PERCENTILE.INC([1, 2, 3, 4], 1).should.equal(4);
    statistical.PERCENTILE.INC([1, 2, 'invalid', 4], 1).should.equal(error.value);
  });

  test("PERCENTRANK.EXC", function() {
    statistical.PERCENTRANK.EXC([1, 2, 3, 4], 1).should.approximately(0.2, 1e-9);
    statistical.PERCENTRANK.EXC([1, 2, 3, 4], 2).should.approximately(0.4, 1e-9);
    statistical.PERCENTRANK.EXC([1, 2, 3, 4], 3).should.approximately(0.6, 1e-9);
    statistical.PERCENTRANK.EXC([1, 2, 3, 4], 4).should.approximately(0.8, 1e-9);
    statistical.PERCENTRANK.EXC([1, 2, 3, 4], 1.25).should.approximately(0.25, 1e-9);
    statistical.PERCENTRANK.EXC([1, 2, 3, 4], 2.5).should.approximately(0.5, 1e-9);
    statistical.PERCENTRANK.EXC([1, 2, 3, 4], 3.75).should.approximately(0.75, 1e-9);
    statistical.PERCENTRANK.EXC([1, 2, 3, 4], 1, 2).should.approximately(0.2, 1e-9);
    statistical.PERCENTRANK.EXC([1, 2, 3, 4], 2, 2).should.approximately(0.4, 1e-9);
    statistical.PERCENTRANK.EXC([1, 2, 3, 4], 3, 2).should.approximately(0.6, 1e-9);
    statistical.PERCENTRANK.EXC([1, 2, 3, 4], 4, 2).should.approximately(0.8, 1e-9);
    statistical.PERCENTRANK.EXC([1, 2, 'invalid', 4], 4, 2).should.equal(error.value);
  });

  test("PERCENTRANK.INC", function() {
    statistical.PERCENTRANK.INC([1, 2, 3, 4], 1).should.equal(0);
    statistical.PERCENTRANK.INC([1, 2, 3, 4], 2).should.approximately(0.333, 1e-9);
    statistical.PERCENTRANK.INC([1, 2, 3, 4], 3).should.approximately(0.666, 1e-9);
    statistical.PERCENTRANK.INC([1, 2, 3, 4], 4).should.equal(1);
    statistical.PERCENTRANK.INC([1, 2, 3, 4], 1.25).should.approximately(0.083, 1e-9);
    statistical.PERCENTRANK.INC([1, 2, 3, 4], 2.5).should.approximately(0.5, 1e-9);
    statistical.PERCENTRANK.INC([1, 2, 3, 4], 3.75).should.approximately(0.916, 1e-9);
    statistical.PERCENTRANK.INC([1, 2, 3, 4], 1, 2).should.equal(0);
    statistical.PERCENTRANK.INC([1, 2, 3, 4], 2, 2).should.approximately(0.33, 1e-9);
    statistical.PERCENTRANK.INC([1, 2, 3, 4], 3, 2).should.approximately(0.66, 1e-9);
    statistical.PERCENTRANK.INC([1, 2, 3, 4], 4, 2).should.equal(1);
    statistical.PERCENTRANK.INC([1, 2, 3, 4], 'invalid', 2).should.equal(error.value);
  });

  test('PERMUT', function() {
    statistical.PERMUT(100, 3).should.equal(970200);
    statistical.PERMUT(100, 'invalid').should.equal(error.value);
  });

  test('PERMUTATIONA', function() {
    statistical.PERMUTATIONA(3, 2).should.equal(9);
    statistical.PERMUTATIONA('invalid', 2).should.equal(error.value);
  });

  test('PHI', function() {
    statistical.PHI(0.75).should.approximately(0.30113743215480443, 1e-9);
    statistical.PHI('invalid').should.equal(error.value);
  });

  test('POISSON.DIST', function() {
    statistical.POISSON.DIST(2, 5, true).should.approximately(0.12465201948308113, 1e-9);
    statistical.POISSON.DIST(2, 5, false).should.approximately(0.08422433748856833, 1e-9);
    statistical.POISSON.DIST(2, 'invalid', false).should.equal(error.value);
  });

  test('PROB', function() {
    var x = [0, 1, 2, 3];
    var prob = [0.2, 0.3, 0.1, 0.4];
    statistical.PROB(x, prob, 2).should.approximately(0.1, 1e-9);
    statistical.PROB(x, prob, 1, 3).should.approximately(0.8, 1e-9);
    statistical.PROB(x, prob).should.equal(0);
    x.push('invalid');
    statistical.PROB(x, prob, 1, 3).should.equal(error.value);
  });

  test('QUARTILE.EXC', function() {
    var data = [6, 7, 15, 36, 39, 40, 41, 42, 43, 47, 49];
    statistical.QUARTILE.EXC(data, 1).should.equal(15);
    statistical.QUARTILE.EXC(data, 2).should.equal(40);
    statistical.QUARTILE.EXC(data, 3).should.equal(43);
    statistical.QUARTILE.EXC(data, 4).should.equal(error.num);
    statistical.QUARTILE.EXC(data, 'invalid').should.equal(error.value);
  });

  test('QUARTILE.INC', function() {
    var data = [1, 2, 4, 7, 8, 9, 10, 12];
    statistical.QUARTILE.INC(data, 1).should.approximately(3.5, 1e-9);
    statistical.QUARTILE.INC(data, 2).should.approximately(7.5, 1e-9);
    statistical.QUARTILE.INC(data, 3).should.approximately(9.25, 1e-9);
    statistical.QUARTILE.INC(data, 4).should.equal(error.num);
    statistical.QUARTILE.INC(data, 'invalid').should.equal(error.value);
  });

  test('RANK.AVG', function() {
    var data = [89, 88, 92, 101, 94, 97, 95];
    statistical.RANK.AVG(94, data).should.equal(4);
    statistical.RANK.AVG(88, data, 1).should.equal(1);
    statistical.RANK.AVG('invalid', data, 1).should.equal(error.value);
  });

  test('RANK.EQ', function() {
    var data = [7, 3.5, 3.5, 1, 2];
    statistical.RANK.EQ(data[0], data, 1).should.equal(5);
    statistical.RANK.EQ(data[4], data).should.equal(4);
    statistical.RANK.EQ(data[1], data, 1).should.equal(3);
    statistical.RANK.EQ('invalid', data, true).should.equal(error.value);
  });

  test('RSQ', function() {
    var y = [2, 3, 9, 1, 8, 7, 5];
    var x = [6, 5, 11, 7, 5, 4, 4];
    statistical.RSQ(y, x).should.approximately(0.05795019157088122, 1e-9);
    x.push('invalid');
    statistical.RSQ(y, x).should.equal(error.value);
  });

  test('SKEW', function() {
    statistical.SKEW([3, 4, 5, 2, 3, 4, 5, 6, 4, 7]).should.approximately(0.3595430714067974, 1e-9);
    statistical.SKEW([3, 4, 5, 2, 3, 4, 5, 6, 'invalid', 7]).should.equal(error.value);
  });

  test('SKEW.P', function() {
    statistical.SKEW.P([3, 4, 5, 2, 3, 4, 5, 6, 4, 7]).should.approximately(0.303193339354144, 1e-9);
    statistical.SKEW.P([3, 4, 5, 'invalid', 3, 4, 5, 6, 4, 7]).should.equal(error.value);
  });

  test('SLOPE', function() {
    var data_y = [2, 3, 9, 1, 8, 7, 5];
    var data_x = [6, 5, 11, 7, 5, 4, 4];
    statistical.SLOPE(data_y, data_x).should.approximately(0.3055555555555556, 1e-9);
    data_x.push('invalid');
    statistical.SLOPE(data_y, data_x).should.equal(error.value);
  });

  test('SMALL', function() {
    statistical.SMALL([3, 4, 5, 2, 3, 4, 6, 4, 7], 4).should.equal(4);
    statistical.SMALL([3, 4, 5, 2, 'invalid', 4, 6, 4, 7], 4).should.equal(error.value);
  });

  test('STANDARDIZE', function() {
    statistical.STANDARDIZE(42, 40, 1.5).should.approximately(1.3333333333333333, 1e-9);
    statistical.STANDARDIZE(10, 10, 10).should.equal(0);
    statistical.STANDARDIZE(10, 10, 'invalid').should.equal(error.value);
  });

  test('STDEV.P', function() {
    var data = [1345, 1301, 1368, 1322, 1310, 1370, 1318, 1350, 1303, 1299];
    statistical.STDEV.P(data).should.approximately(26.054558142482477, 1e-9);
  });

  test('STDEV.S', function() {
    var data = [1345, 1301, 1368, 1322, 1310, 1370, 1318, 1350, 1303, 1299, true, false, 'nope'];
    statistical.STDEV.S(data).should.approximately(27.46391571984349, 1e-9);
  });

  test('STDEVA', function() {
    var data = [1345, 1301, 1368, 1322, 1310, 1370, 1318, 1350, 1303, 1299];
    statistical.STDEVA(data).should.approximately(27.46391571984349, 1e-9);
    var data2 = [2, 1, true, false, 'nope'];
    statistical.STDEVA(data2).should.approximately(0.8366600265340756, 1e-9);
  });

  test('STDEVPA', function() {
    var data = [1345, 1301, 1368, 1322, 1310, 1370, 1318, 1350, 1303, 1299];
    statistical.STDEVPA(data).should.approximately(26.054558142482477, 1e-9);
    var data2 = [2, 1, true, false, 'nope'];
    statistical.STDEVPA(data2).should.approximately(0.7483314773547883, 1e-9);
  });

  test('STEYX', function() {
    var data_y = [2, 3, 9, 1, 8, 7, 5];
    var data_x = [6, 5, 11, 7, 5, 4, 4];
    statistical.STEYX(data_y, data_x).should.approximately(3.305718950210041, 1e-9);
    data_x.push('invalid');
    statistical.STEYX(data_y, data_x).should.equal(error.value);
  });

  test('T.DIST', function() {
    statistical.T.DIST(60, 1, true).should.approximately(0.9946953263673741, 1e-9);
    statistical.T.DIST(8, 3, false).should.approximately(0.0007369065188787021, 1e-9);
    statistical.T.DIST(8, 'invalid', false).should.equal(error.value);
  });

  // TODO: implement
  test('T.DIST.2T', function() {
    statistical.T.DIST['2T'].should.throw('T.DIST.2T is not implemented');
  });

  // TODO: implement
  test('T.DIST.RT', function() {
    statistical.T.DIST.RT.should.throw('T.DIST.RT is not implemented');
  });

  test('T.INV', function() {
    statistical.T.INV(0.9, 60).should.approximately(1.2958210933417948, 1e-9);
    statistical.T.INV(0.9, 'invalid').should.equal(error.value);
  });

  // TODO: implement
  test('T.INV.2T', function() {
    statistical.T.INV['2T'].should.throw('T.INV.2T is not implemented');
  });

  // TODO: implement
  test('T.TEST', function() {
    statistical.T.TEST.should.throw('T.TEST is not implemented');
  });

  // TODO: implement
  test('TREND', function() {
    statistical.TREND.should.throw('TREND is not implemented');
  });

  test("TRIMMEAN", function() {
    statistical.TRIMMEAN([4, 5, 6, 7, 2, 3, 4, 5, 1, 2, 3], 0.2).should.approximately(3.7777777777777777, 1e-9);
    statistical.TRIMMEAN([4, 5, 6, 'invalid', 1, 2, 3], 0.2).should.equal(error.value);
  });

  test('VAR.P', function() {
    statistical.VAR.P(1, 2, 3, 4, 10, 10).should.approximately(13.333333333333334, 1e-9);
    statistical.VAR.P(1, 2, 3, 4, false, true).should.approximately(1.25, 1e-9);
    statistical.VAR.P(1, 2, 3, 4, 'count as zero', false, true).should.approximately(1.25, 1e-9);
  });

  test('VAR.S', function() {
    statistical.VAR.S(1, 2, 3, 4, 10, 10).should.equal(16);
    statistical.VAR.S(1, 2, 3, 4, false, true).should.approximately(1.6666666666666667, 1e-9);
    statistical.VAR.S(1, 2, 3, 4, 'count as zero', false, true).should.approximately(1.6666666666666667, 1e-9);
  });

  test('VARA', function() {
    statistical.VARA(1, 2, 3, 4, 10, 10).should.equal(16);
    statistical.VARA(1, 2, 3, 4, false, true).should.approximately(2.166666666666667, 1e-9);
    statistical.VARA(1, 2, 3, 4, 'count as zero', false, true).should.approximately(2.285714285714286, 1e-9);
  });

  test('VARPA', function() {
    statistical.VARPA(1, 2, 3, 4, 10, 10).should.approximately(13.333333333333334, 1e-9);
    statistical.VARPA(1, 2, 3, 4, false, true).should.approximately(1.8055555555555556, 1e-9);
    statistical.VARPA(1, 2, 3, 4, 'count as zero', false, true).should.approximately(1.959183673469388, 1e-9);
  });

  test('WEIBULL.DIST', function() {
    statistical.WEIBULL.DIST(105, 20, 100, true).should.approximately(0.9295813900692769, 1e-9);
    statistical.WEIBULL.DIST(105, 20, 100, false).should.approximately(0.03558886402450435, 1e-9);
    statistical.WEIBULL.DIST(105, 20, 'invalid', false).should.equal(error.value);
  });


  test('Z.TEST', function() {
    var data = [3, 6, 7, 8, 6, 5, 4, 2, 1, 9];
    statistical.Z.TEST(data, 4).should.approximately(0.09057419685136381, 1e-9);
    statistical.Z.TEST(data, 6).should.approximately(0.86304338912953, 1e-9);
    statistical.Z.TEST(data, 'invalid').should.equal(error.value);
  });
});