var financial = require('../lib/financial');
var dateTime = require('../lib/date-time');
var error = require('../lib/error');
var should = require('should');

suite('Financial', function() {
  test("ACCRINT", function() {
    financial.ACCRINT.should.throw('ACCRINT is not implemented');
  });

  // TODO: implement
  test('ACCRINTM', function() {
    financial.ACCRINTM.should.throw('ACCRINTM is not implemented');
  });

  // TODO: implement
  test('AMORDEGRC', function() {
    financial.AMORDEGRC.should.throw('AMORDEGRC is not implemented');
  });

  // TODO: implement
  test('AMORLINC', function() {
    financial.AMORLINC.should.throw('AMORLINC is not implemented');
  });

  // TODO: implement
  test('COUPDAYBS', function() {
    financial.COUPDAYBS.should.throw('COUPDAYBS is not implemented');
  });

  // TODO: implement
  test('COUPDAYS', function() {
    financial.COUPDAYS.should.throw('COUPDAYS is not implemented');
  });

  // TODO: implement
  test('COUPDAYSNC', function() {
    financial.COUPDAYSNC.should.throw('COUPDAYSNC is not implemented');
  });

  // TODO: implement
  test('COUPNCD', function() {
    financial.COUPNCD.should.throw('COUPNCD is not implemented');
  });

  // TODO: implement
  test('COUPNUM', function() {
    financial.COUPNUM.should.throw('COUPNUM is not implemented');
  });

  // TODO: implement
  test('COUPPCD', function() {
    financial.COUPPCD.should.throw('COUPPCD is not implemented');
  });

  test("CUMIPMT", function() {
    financial.CUMIPMT(0.1 / 12, 30 * 12, 100000, 13, 24, 0).should.approximately(-9916.77251395708, 1e-9);
    financial.CUMIPMT(0.1 / 12, 30 * 12, 100000, 13, 24, 1).should.approximately(-9834.815716321069, 1e-9);
    financial.CUMIPMT(-0.1 / 12, 30 * 12, 100000, 13, 24, 0).should.equal(error.num);
    financial.CUMIPMT(0.1 / 12, -30 * 12, 100000, 13, 24, 0).should.equal(error.num);
    financial.CUMIPMT(0.1 / 12, 30 * 12, -100000, 13, 24, 0).should.equal(error.num);
    financial.CUMIPMT(0.1 / 12, 30 * 12, 100000, 0, 24, 0).should.equal(error.num);
    financial.CUMIPMT(0.1 / 12, 30 * 12, 100000, 13, 0, 0).should.equal(error.num);
    financial.CUMIPMT(0.1 / 12, 30 * 12, 100000, 24, 13, 0).should.equal(error.num);
    financial.CUMIPMT(0.1 / 12, 30 * 12, 100000, 13, 24, 2).should.equal(error.num);
    financial.CUMIPMT(0.1 / 12, 30 * 12, 100000, 1, 24, 0).should.approximately(-19891.752778759568, 1e-9);
    financial.CUMIPMT('invalid', 30 * 12, 100000, 13, 24, 0).should.equal(error.value);
  });

  test("CUMPRINC", function() {
    financial.CUMPRINC(0.1 / 12, 30 * 12, 100000, 13, 24, 0).should.approximately(-614.0863271085149, 1e-9);
    financial.CUMPRINC(0.1 / 12, 30 * 12, 100000, 13, 24, 1).should.approximately(-609.0112334960476, 1e-9);
    financial.CUMPRINC(-0.1 / 12, 30 * 12, 100000, 13, 24, 0).should.equal(error.num);
    financial.CUMPRINC(0.1 / 12, -30 * 12, 100000, 13, 24, 0).should.equal(error.num);
    financial.CUMPRINC(0.1 / 12, 30 * 12, -100000, 13, 24, 0).should.equal(error.num);
    financial.CUMPRINC(0.1 / 12, 30 * 12, 100000, 0, 24, 0).should.equal(error.num);
    financial.CUMPRINC(0.1 / 12, 30 * 12, 100000, 13, 0, 0).should.equal(error.num);
    financial.CUMPRINC(0.1 / 12, 30 * 12, 100000, 24, 13, 0).should.equal(error.num);
    financial.CUMPRINC(0.1 / 12, 30 * 12, 100000, 13, 24, 2).should.equal(error.num);
    financial.CUMPRINC(0.1 / 12, 30 * 12, 100000, 1, 24, 0).should.approximately(-1169.9649033716187, 1e-9);
    financial.CUMPRINC(0.1 / 12, 30 * 12, 100000, 1, 24, 1).should.approximately(-1986.7420529305305, 1e-9);
    financial.CUMPRINC('invalid', 30 * 12, 100000, 1, 24, 1).should.equal(error.value);
  });

  test("DB", function() {
    financial.DB(1000000, 100000, 6, 1).should.equal(319000);
    financial.DB(1000000, 100000, 6, 2).should.equal(217239);
    financial.DB(1000000, 100000, 6, 3).should.approximately(147939.759, 1e-9);
    financial.DB(1000000, 100000, 6, 4).should.approximately(100746.97587900002, 1e-9);
    financial.DB(1000000, 100000, 6, 5).should.approximately(68608.690573599, 1e-9);
    financial.DB(1000000, 100000, 6, 6).should.approximately(46722.518280620934, 1e-9);
    financial.DB(1000000, 100000, 6, 1, 6).should.equal(159500);
    financial.DB(1000000, 100000, 6, 2, 6).should.approximately(268119.5, 1e-9);
    financial.DB(1000000, 100000, 6, 3, 6).should.approximately(182589.3795, 1e-9);
    financial.DB(1000000, 100000, 6, 4, 6).should.approximately(124343.36743949998, 1e-9);
    financial.DB(1000000, 100000, 6, 5, 6).should.approximately(84677.83322629951, 1e-9);
    financial.DB(1000000, 100000, 6, 6, 6).should.approximately(57665.60442710997, 1e-9);
    financial.DB(1000000, 100000, 6, 1, 9).should.equal(239250);
    financial.DB(1000000, 100000, 6, 2, 9).should.approximately(242679.25, 1e-9);
    financial.DB(1000000, 100000, 6, 3, 9).should.approximately(165264.56925, 1e-9);
    financial.DB(1000000, 100000, 6, 4, 9).should.approximately(112545.17165925002, 1e-9);
    financial.DB(1000000, 100000, 6, 5, 9).should.approximately(76643.26189994926, 1e-9);
    financial.DB(1000000, 100000, 6, 6, 9).should.approximately(52194.061353865436, 1e-9);
    financial.DB('Hello World!', 100000, 6, 1, 6).should.equal(error.value);
    financial.DB(1000000, 'Hello World!', 6, 1, 6).should.equal(error.value);
    financial.DB(1000000, 100000, 'Hello World!', 1, 6).should.equal(error.value);
    financial.DB(1000000, 100000, 6, 'Hello World!', 6).should.equal(error.value);
    financial.DB(1000000, 100000, 6, 1, 'Hello World!').should.equal(error.value);
    financial.DB(-1000000, 100000, 6, 1, 6).should.equal(error.num);
    financial.DB(1000000, -100000, 6, 1, 6).should.equal(error.num);
    financial.DB(1000000, 100000, -6, 1, 6).should.equal(error.num);
    financial.DB(1000000, 100000, 6, -1, 6).should.equal(error.num);
    financial.DB(1000000, 100000, 6, 1, -1).should.equal(error.num);
    financial.DB(1000000, 100000, 6, 1, 13).should.equal(error.num);
    financial.DB(1000000, 100000, 6, 7, 6).should.equal(error.num);
    financial.DB(1000000, 1000000, 6, 1, 6).should.equal(0);
    financial.DB(100000, 1000000, 6, 1, 6).should.equal(0);
  });

  test("DDB", function() {
    financial.DDB(1000000, 100000, 6, 1).should.approximately(333333.3333333333, 1e-9);
    financial.DDB(1000000, 100000, 6, 2).should.approximately(222222.22222222225, 1e-9);
    financial.DDB(1000000, 100000, 6, 3).should.approximately(148148.14814814815, 1e-9);
    financial.DDB(1000000, 100000, 6, 4).should.approximately(98765.43209876546, 1e-9);
    financial.DDB(1000000, 100000, 6, 5).should.approximately(65843.62139917696, 1e-9);
    financial.DDB(1000000, 100000, 6, 6).should.approximately(31687.242798353895, 1e-9);
    financial.DDB(1000000, 100000, 6, 1, 1.5).should.equal(250000);
    financial.DDB(1000000, 100000, 6, 2, 1.5).should.equal(187500);
    financial.DDB(1000000, 100000, 6, 3, 1.5).should.equal(140625);
    financial.DDB(1000000, 100000, 6, 4, 1.5).should.approximately(105468.75, 1e-9);
    financial.DDB(1000000, 100000, 6, 5, 1.5).should.approximately(79101.5625, 1e-9);
    financial.DDB(1000000, 100000, 6, 6, 1.5).should.approximately(59326.171875, 1e-9);
    financial.DDB('Hello World!', 100000, 6, 6, 1.5).should.equal(error.value);
    financial.DDB(1000000, 'Hello World!', 6, 6, 1.5).should.equal(error.value);
    financial.DDB(1000000, 100000, 'Hello World!', 6, 1.5).should.equal(error.value);
    financial.DDB(1000000, 100000, 6, 'Hello World!', 1.5).should.equal(error.value);
    financial.DDB(1000000, 100000, 6, 6, 'Hello World!').should.equal(error.value);
    financial.DDB(-1000000, 100000, 6, 1, 1.5).should.equal(error.num);
    financial.DDB(1000000, -100000, 6, 1, 1.5).should.equal(error.num);
    financial.DDB(1000000, 100000, -6, 1, 1.5).should.equal(error.num);
    financial.DDB(1000000, 100000, 6, -1, 1.5).should.equal(error.num);
    financial.DDB(1000000, 100000, 6, 1, -1.5).should.equal(error.num);
    financial.DDB(1000000, 100000, 6, 1, 0).should.equal(error.num);
    financial.DDB(1000000, 100000, 6, 7, 1.5).should.equal(error.num);
    financial.DDB(1000000, 1000000, 6, 1, 1.5).should.equal(0);
    financial.DDB(100000, 1000000, 6, 1, 1.5).should.equal(0);
  });

  //TODO: implement
  test('DISC', function() {
    financial.DISC.should.throw('DISC is not implemented');
  });

  test("DOLLARDE", function() {
    financial.DOLLARDE(1.1, 1).should.approximately(1.1, 1e-9);
    financial.DOLLARDE(1.1, 2).should.approximately(1.5, 1e-9);
    financial.DOLLARDE(1.1, 4).should.approximately(1.25, 1e-9);
    financial.DOLLARDE(1.1, 8).should.approximately(1.125, 1e-9);
    financial.DOLLARDE(1.1, 16).should.approximately(1.625, 1e-9);
    financial.DOLLARDE(1.1, 32).should.approximately(1.3125, 1e-9);
    financial.DOLLARDE(-1.1, 1).should.approximately(-1.1, 1e-9);
    financial.DOLLARDE(-1.1, 2).should.approximately(-1.5, 1e-9);
    financial.DOLLARDE(-1.1, 4).should.approximately(-1.25, 1e-9);
    financial.DOLLARDE(-1.1, 8).should.approximately(-1.125, 1e-9);
    financial.DOLLARDE(-1.1, 16).should.approximately(-1.625, 1e-9);
    financial.DOLLARDE(-1.1, 32).should.approximately(-1.3125, 1e-9);
    financial.DOLLARDE(1.1, 1.5).should.approximately(1.1, 1e-9);
    financial.DOLLARDE('Hello World!', 1).should.equal(error.value);
    financial.DOLLARDE(1.1, 'Hello World!').should.equal(error.value);
    financial.DOLLARDE(1.1, -1).should.equal(error.num);
    financial.DOLLARDE(1.1, 0.5).should.equal(error.div0);
  });

  test("DOLLARFR", function() {
    financial.DOLLARFR(1.1, 1).should.approximately(1.1, 1e-9);
    financial.DOLLARFR(1.5, 2).should.approximately(1.1, 1e-9);
    financial.DOLLARFR(1.25, 4).should.approximately(1.1, 1e-9);
    financial.DOLLARFR(1.125, 8).should.approximately(1.1, 1e-9);
    financial.DOLLARFR(1.625, 16).should.approximately(1.1, 1e-9);
    financial.DOLLARFR(1.3125, 32).should.approximately(1.1, 1e-9);
    financial.DOLLARFR(-1.1, 1).should.approximately(-1.1, 1e-9);
    financial.DOLLARFR(-1.5, 2).should.approximately(-1.1, 1e-9);
    financial.DOLLARFR(-1.25, 4).should.approximately(-1.1, 1e-9);
    financial.DOLLARFR(-1.125, 8).should.approximately(-1.1, 1e-9);
    financial.DOLLARFR(-1.625, 16).should.approximately(-1.1, 1e-9);
    financial.DOLLARFR(-1.3125, 32).should.approximately(-1.1, 1e-9);
    financial.DOLLARFR(-1.1, 1.5).should.approximately(-1.1, 1e-9);
    financial.DOLLARFR('Hello World!', 1).should.equal(error.value);
    financial.DOLLARFR(1.5, 'Hello World!').should.equal(error.value);
    financial.DOLLARFR(1.5, -1).should.equal(error.num);
    financial.DOLLARFR(1.5, 0.5).should.equal(error.div0);
  });

  //TODO: implement
  test('DURATION', function() {
    financial.DURATION.should.throw('DURATION is not implemented');
  });

  test("EFFECT", function() {
    financial.EFFECT(0.1, 4).should.approximately(0.10381289062499977, 1e-9);
    financial.EFFECT(0.1, 4.5).should.approximately(0.10381289062499977, 1e-9);
    financial.EFFECT('Hello', 4).should.equal(error.value);
    financial.EFFECT(0.1, 'World').should.equal(error.value);
    financial.EFFECT(-0.1, 4).should.equal(error.num);
    financial.EFFECT(0.1, 0.5).should.equal(error.num);
  });

  test("FV", function() {
    financial.FV(0.06 / 12, 10, -200, -500, 1).should.approximately(2581.4033740601185, 1e-9);
    financial.FV(0.12 / 12, 12, -1000).should.approximately(12682.503013196976, 1e-9);
    financial.FV(0.11 / 12, 35, -2000, undefined, 1).should.approximately(82846.24637190053, 1e-9);
    financial.FV(0.06 / 12, 12, -100, -1000, 1).should.approximately(2301.4018303408993, 1e-9);
    financial.FV(0, 12, -100, -1000, 1).should.equal(2200);
    financial.FV('invalid', 12, -100, -1000, 1).should.equal(error.value);
  });

  test("FVSCHEDULE", function() {
    financial.FVSCHEDULE(100, [0.09, 0.1, 0.11]).should.approximately(133.08900000000003, 1e-9);
    financial.FVSCHEDULE(100, ['Hello World!', 0.1, 0.11]).should.equal(error.value);
  });

  //TODO: implement
  test('INTRATE', function() {
    financial.INTRATE.should.throw('INTRATE is not implemented');
  });

  test("IPMT", function() {
    financial.IPMT(0.1 / 12, 6, 2 * 12, 100000, 1000000, 0).should.approximately(928.8235718400465, 1e-9);
    financial.IPMT(0.1 / 12, 6, 2 * 12, 100000, 1000000, 1).should.approximately(921.1473439736042, 1e-9);
    financial.IPMT(0.1 / 12, 1, 2 * 12, 100000, 1000000, 1).should.equal(0);
    financial.IPMT(0.1 / 12, 1, 2 * 12, 100000, 1000000, 0).should.approximately(-833.3333333333334, 1e-9);
    financial.IPMT('invalid', 1, 2 * 12, 100000, 1000000, 1).should.equal(error.value);
  });

  test("IRR", function() {
    financial.IRR([-75000, 12000, 15000, 18000, 21000, 24000]).should.approximately(0.05715142887178467, 1e-9);
    financial.IRR([
      [-75000, 12000],
      [15000, 18000],
      [21000, 24000]
    ]).should.approximately(0.05715142887178467, 1e-9);
    financial.IRR([-75000, 12000, 15000, 18000, 21000, 24000], 0.1).should.approximately(0.05715142887178467, 1e-9);
    financial.IRR([-75000, 12000, 15000, 18000, 21000, 24000], 0.075).should.approximately(0.05715142887178447, 1e-9);
    financial.IRR([-75000, 12000, 15000, 18000, 21000, 24000], 0.05).should.approximately(0.05715142887178453, 1e-9);
    financial.IRR([12000, 15000, 18000, 21000, 24000]).should.equal(error.num);
    financial.IRR([-12000, -15000, -18000, -21000, -24000]).should.equal(error.num);
    financial.IRR([-12000, -15000, -18000, -21000, -24000], 'invalid').should.equal(error.value);
  });

  test("ISPMT", function() {
    financial.ISPMT(0.1 / 12, 6, 2 * 12, 100000).should.equal(-625);
    financial.ISPMT('invalid', 6, 2 * 12, 100000).should.equal(error.value);
  });

  //TODO: implement
  test('MDURATION', function() {
    financial.MDURATION.should.throw('MDURATION is not implemented');
  });

  test("MIRR", function() {
    financial.MIRR([-75000, 12000, 15000, 18000, 21000, 24000], 0.1, 0.12).should.approximately(0.07971710360838036, 1e-9);
    financial.MIRR([-75000, 12000, 15000, 18000, 21000, 24000], 'invalid', 0.12).should.equal(error.value);
  });

  test("NOMINAL", function() {
    financial.NOMINAL(0.1, 4).should.approximately(0.09645475633778045, 1e-9);
    financial.NOMINAL(0.1, 4.5).should.approximately(0.09645475633778045, 1e-9);
    financial.NOMINAL('Hello', 4).should.equal(error.value);
    financial.NOMINAL(0.1, 'World').should.equal(error.value);
    financial.NOMINAL(-0.1, 4).should.equal(error.num);
    financial.NOMINAL(0.1, 0.5).should.equal(error.num);
  });

  test("NPER", function() {
    financial.NPER(0.1 / 12, -100, -1000, 10000, 0).should.approximately(63.39385422740764, 1e-9);
    financial.NPER(0.1 / 12, -100, -1000, 10000, 1).should.approximately(63.016966422019685, 1e-9);
    financial.NPER(0.1 / 12, -100, -1000, 10000).should.approximately(63.39385422740764, 1e-9);
    financial.NPER(0.1 / 12, -100, -1000).should.approximately(-9.645090919837394, 1e-9);
    financial.NPER('invalid', -100, -1000).should.equal(error.value);
  });

  test("NPV", function() {
    financial.NPV(0.1, -10000, 2000, 4000, 8000).should.approximately(1031.3503176012546, 1e-9);
    financial.NPV(0.1, [-10000, 2000, 4000, 8000]).should.approximately(1031.3503176012546, 1e-9);
    financial.NPV(0.1, [-75000]).should.approximately(-68181.81818181818, 1e-9);
    financial.NPV(0.12, [12000, 15000, 18000, 21000, 24000]).should.approximately(62448.362521940246, 1e-9);
    financial.NPV('invalid', [12000, 15000, 18000, 21000, 24000]).should.equal(error.value);
  });

  //TODO: implement
  test('ODDFPRICE', function() {
    financial.ODDFPRICE.should.throw('ODDFPRICE is not implemented');
  });

  //TODO: implement
  test('ODDFYIELD', function() {
    financial.ODDFYIELD.should.throw('ODDFYIELD is not implemented');
  });

  //TODO: implement
  test('ODDLPRICE', function() {
    financial.ODDLPRICE.should.throw('ODDLPRICE is not implemented');
  });

  //TODO: implement
  test('ODDLYIELD', function() {
    financial.ODDLYIELD.should.throw('ODDLYIELD is not implemented');
  });

  test("PDURATION", function() {
    financial.PDURATION(0.1, 1000, 2000).should.approximately(7.272540897341714, 1e-9);
    financial.PDURATION('Hello World!', 1000, 2000).should.equal(error.value);
    financial.PDURATION(0.1, 'Hello World!', 2000).should.equal(error.value);
    financial.PDURATION(0.1, 1000, 'Hello World!').should.equal(error.value);
    financial.PDURATION(0, 1000, 2000).should.equal(error.num);
    financial.PDURATION(-0.1, 1000, 2000).should.equal(error.num);
  });

  test("PMT", function() {
    financial.PMT(0.06 / 12, 18 * 12, 0, 50000).should.approximately(-129.0811608679973, 1e-9);
    financial.PMT(0.1 / 12, 2 * 12, 100000, 1000000, 1).should.approximately(-42075.45683100995, 1e-9);
    financial.PMT(0.1 / 12, 2 * 12, 100000, 1000000).should.approximately(-42426.08563793503, 1e-9);
    financial.PMT(0.1 / 12, 2 * 12, 0, 1000000).should.approximately(-37811.59300418336, 1e-9);
    financial.PMT(0.1 / 12, 2 * 12, 100000).should.approximately(-4614.49263375167, 1e-9);
    financial.PMT(0, 2 * 12, 100000).should.approximately(-4166.666666666667, 1e-9);
    financial.PMT('invalid', 2 * 12, 100000).should.equal(error.value);
  });

  test("PPMT", function() {
    financial.PPMT(0.1 / 12, 1, 2 * 12, 2000).should.approximately(-75.62318600836673, 10e-9);
    financial.PPMT(0.08, 10, 10, 200000).should.approximately(-27598.05346242135, 10e-9);
    financial.PPMT(0.1 / 12, 6, 2 * 12, 100000, 1000000, 0).should.approximately(-43354.909209775076, 1e-9);
    financial.PPMT(0.1 / 12, 6, 2 * 12, 100000, 1000000, 1).should.approximately(-42996.60417498356, 1e-9);
    financial.PPMT(0.1 / 12, 6, 2 * 12, 100000, 1000000).should.approximately(-43354.909209775076, 1e-9);
    financial.PPMT(0.1 / 12, 6, 2 * 12, 0, 1000000).should.approximately(-39413.55382706825, 1e-9);
    financial.PPMT(0.1 / 12, 6, 2 * 12, 100000).should.approximately(-3941.355382706826, 1e-9);
    financial.PPMT('invalid', 6, 2 * 12, 100000).should.equal(error.value);
  });

  //TODO: implement
  test('PRICE', function() {
    financial.PRICE.should.throw('PRICE is not implemented');
  });

  //TODO: implement
  test('PRICEDISC', function() {
    financial.PRICEDISC.should.throw('PRICEDISC is not implemented');
  });

  //TODO: implement
  test('PRICEMAT', function() {
    financial.PRICEMAT.should.throw('PRICEMAT is not implemented');
  });

  test("PV", function() {
    financial.PV(0.1 / 12, 2 * 12, 1000, 10000, 0).should.approximately(-29864.950264779152, 1e-9);
    financial.PV(0.1 / 12, 2 * 12, 1000, 10000, 1).should.approximately(-30045.54072173169, 1e-9);
    financial.PV(0, 2 * 12, 1000, 10000, 1).should.equal(-34000);
    financial.PV('invalid', 2 * 12, 1000, 10000, 1).should.equal(error.value);
  });

  test("RATE", function() {
    financial.RATE(2 * 12, -1000, -10000, 100000).should.approximately(0.06517891177181546, 1e-9);
    financial.RATE(2 * 12, -1000, -10000, 100000, 0, 0.1).should.approximately(0.06517891177181533, 1e-9);
    financial.RATE(2 * 12, -1000, -10000, 100000, 0, 0.75).should.approximately(0.0651789117718154, 1e-9);
    financial.RATE(2 * 12, -1000, -10000, 100000, 0, 0.065).should.approximately(0.06517891177181524, 1e-9);
    financial.RATE(2 * 12, -1000, -10000, 100000, 1, 0.1).should.approximately(0.0632395800018064, 1e-9);
    financial.RATE(2 * 12, -1000, -10000, 100000, 1, 1e-11).should.approximately(-1.3199999999735999e-20, 1e-9);
    financial.RATE('invalid', -1000, -10000, 100000, 1, 1e-11).should.equal(error.value);
  });

  //TODO: implement
  test('RECEIVED', function() {
    financial.RECEIVED.should.throw('RECEIVED is not implemented');
  });

  test('RRI', function() {
    financial.RRI(8, 10000, 11000).should.approximately(0.011985024140399592, 1e-9);
    financial.RRI(NaN, 10000, 11000).should.equal(error.value);
    financial.RRI(0, 10000, 11000).should.equal(error.num);
  });

  test('SLN', function() {
    financial.SLN(30000, 7500, 10).should.equal(2250);
    financial.SLN(NaN, 7500, 10).should.equal(error.value);
    financial.SLN(30000, 7500, 0).should.equal(error.num);
  });

  test('SYD', function() {
    financial.SYD(30, 7, 10, 1).should.approximately(4.181818181818182, 1e-9);
    financial.SYD(NaN, 7, 10, 1).should.equal(error.value);
    financial.SYD(30, 7, 0, 1).should.equal(error.num);
    financial.SYD(30, 7, 10, 11).should.equal(error.num);
  });

  test('TBILLEQ', function() {
    financial.TBILLEQ('03/31/2008', '06/01/2008', 0.0914).should.approximately(0.09412721351734614, 1e-9);
    financial.TBILLEQ('invalid date', '06/01/2008', 0.0914).should.equal(error.value);
    financial.TBILLEQ('03/31/2008', '06/01/2008', 0).should.equal(error.num);
    financial.TBILLEQ('09/31/2008', '06/01/2008', 0.0914).should.equal(error.num);
    financial.TBILLEQ('03/31/2008', '06/01/2009', 0.0914).should.equal(error.num);
  });

  test('TBILLPRICE', function() {
    financial.TBILLPRICE('03/31/2008', '06/01/2008', 0.0914).should.approximately(98.45127777777778, 1e-9);
    financial.TBILLPRICE('invalid date', '06/01/2008', 0.0914).should.equal(error.value);
    financial.TBILLPRICE('03/31/2008', '06/01/2008', 0).should.equal(error.num);
    financial.TBILLPRICE('09/31/2008', '06/01/2008', 0.0914).should.equal(error.num);
    financial.TBILLPRICE('03/31/2008', '06/01/2009', 0.0914).should.equal(error.num);
  });

  test('TBILLYIELD', function() {
    financial.TBILLYIELD('03/31/2008', '06/01/2008', 98.45127777777778).should.approximately(0.09283779963354702, 1e-9);
    financial.TBILLYIELD('invalid date', '06/01/2008', 0.0914).should.equal(error.value);
    financial.TBILLYIELD('03/31/2008', '06/01/2008', 0).should.equal(error.num);
    financial.TBILLYIELD('09/31/2008', '06/01/2008', 0.0914).should.equal(error.num);
    financial.TBILLYIELD('03/31/2008', '06/01/2009', 0.0914).should.equal(error.num);
  });

  //TODO: implement
  test('VDB', function() {
    financial.VDB.should.throw('VDB is not implemented');
  });

  test('XIRR', function() {
    var values = [-10000,
      2750,
      4250,
      3250,
      2750
    ];
    var dates = [
      '01/jan/08',
      '01/mar/08',
      '30/oct/08',
      '15/feb/09',
      '01/apr/09'
    ];
    financial.XIRR(values, dates, 0.1).should.approximately(0.373374019797564, 1e-4);

    // all positive
    values[0] = -values[0];
    financial.XIRR(values, dates, 0.1).should.equal(error.num);
    financial.XIRR(values, dates, 'invalid').should.equal(error.value);
  });

  test('XNPV', function() {
    var values = [-10000,
      2750,
      4250,
      3250,
      2750
    ];
    var dates = [
      '01/01/2008',
      '03/01/2008',
      '10/30/2008',
      '02/15/2009',
      '04/01/2009'
    ];
    financial.XNPV(0.09, values, dates).should.approximately(2086.6718943024616, 1e-1);
    financial.XNPV('invalid', values, dates).should.equal(error.value);
  });

  //TODO: implement
  test('YIELD', function() {
    financial.YIELD.should.throw('YIELD is not implemented');
  });

  //TODO: implement
  test('YIELDDISC', function() {
    financial.YIELDDISC.should.throw('YIELDDISC is not implemented');
  });

  //TODO: implement
  test('YIELDMAT', function() {
    financial.YIELDMAT.should.throw('YIELDMAT is not implemented');
  });
});