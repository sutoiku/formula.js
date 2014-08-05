var finantial = require('../lib/finantial');
var dateTime = require('../lib/date-time');
var error = require('../lib/error');
var should = require('should');

suite('Finantial', function() {
  test("ACCRINT", function() {
    finantial.ACCRINT(39508, 39691, 39569, 0.1, 1000, 2, 0).should.equal(16.666666666666664);
    finantial.ACCRINT(dateTime.DATE(2008, 3, 5), 39691, 39569, 0.1, 1000, 2, 0, false).should.equal(15.555555555555555);
    finantial.ACCRINT(dateTime.DATE(2008, 4, 5), 39691, 39569, 0.1, 1000, 2, 0, true).should.equal(7.222222222222221);
  });

  // TODO: implement
  test('ACCRINTM', function() {
    should.equal(finantial.ACCRINTM(), undefined);
  });

  // TODO: implement
  test('AMORDEGRC', function() {
    should.equal(finantial.AMORDEGRC(), undefined);
  });

  // TODO: implement
  test('AMORLINC', function() {
    should.equal(finantial.AMORLINC(), undefined);
  });

  // TODO: implement
  test('COUPDAYBS', function() {
    should.equal(finantial.COUPDAYBS(), undefined);
  });

  // TODO: implement
  test('COUPDAYS', function() {
    should.equal(finantial.COUPDAYS(), undefined);
  });

  // TODO: implement
  test('COUPDAYSNC', function() {
    should.equal(finantial.COUPDAYSNC(), undefined);
  });

  // TODO: implement
  test('COUPNCD', function() {
    should.equal(finantial.COUPNCD(), undefined);
  });

  // TODO: implement
  test('COUPNUM', function() {
    should.equal(finantial.COUPNUM(), undefined);
  });

  // TODO: implement
  test('COUPPCD', function() {
    should.equal(finantial.COUPPCD(), undefined);
  });

  test("CUMIPMT", function() {
    finantial.CUMIPMT('0.1/12', '30*12', 100000, 13, 24, 0).should.equal(-9916.77251395708);
    finantial.CUMIPMT('0.1/12', '30*12', 100000, 13, 24, 1).should.equal(-9834.815716321069);
    finantial.CUMIPMT('-0.1/12', '30*12', 100000, 13, 24, 0).should.equal(error.num);
    finantial.CUMIPMT('0.1/12', '-30*12', 100000, 13, 24, 0).should.equal(error.num);
    finantial.CUMIPMT('0.1/12', '30*12', -100000, 13, 24, 0).should.equal(error.num);
    finantial.CUMIPMT('0.1/12', '30*12', 100000, 0, 24, 0).should.equal(error.num);
    finantial.CUMIPMT('0.1/12', '30*12', 100000, 13, 0, 0).should.equal(error.num);
    finantial.CUMIPMT('0.1/12', '30*12', 100000, 24, 13, 0).should.equal(error.num);
    finantial.CUMIPMT('0.1/12', '30*12', 100000, 13, 24, 2).should.equal(error.num);
  });

  test("CUMPRINC", function() {
    finantial.CUMPRINC('0.1/12', '30*12', 100000, 13, 24, 0).should.equal(-614.0863271085149);
    finantial.CUMPRINC('0.1/12', '30*12', 100000, 13, 24, 1).should.equal(-609.0112334960476);
    finantial.CUMPRINC('-0.1/12', '30*12', 100000, 13, 24, 0).should.equal(error.num);
    finantial.CUMPRINC('0.1/12', '-30*12', 100000, 13, 24, 0).should.equal(error.num);
    finantial.CUMPRINC('0.1/12', '30*12', -100000, 13, 24, 0).should.equal(error.num);
    finantial.CUMPRINC('0.1/12', '30*12', 100000, 0, 24, 0).should.equal(error.num);
    finantial.CUMPRINC('0.1/12', '30*12', 100000, 13, 0, 0).should.equal(error.num);
    finantial.CUMPRINC('0.1/12', '30*12', 100000, 24, 13, 0).should.equal(error.num);
    finantial.CUMPRINC('0.1/12', '30*12', 100000, 13, 24, 2).should.equal(error.num);
  });

  test("DB", function() {
    finantial.DB(1000000, 100000, 6, 1).should.equal(319000);
    finantial.DB(1000000, 100000, 6, 2).should.equal(217239);
    finantial.DB(1000000, 100000, 6, 3).should.equal(147939.759);
    finantial.DB(1000000, 100000, 6, 4).should.equal(100746.97587900002);
    finantial.DB(1000000, 100000, 6, 5).should.equal(68608.690573599);
    finantial.DB(1000000, 100000, 6, 6).should.equal(46722.518280620934);
    finantial.DB(1000000, 100000, 6, 1, 6).should.equal(159500);
    finantial.DB(1000000, 100000, 6, 2, 6).should.equal(268119.5);
    finantial.DB(1000000, 100000, 6, 3, 6).should.equal(182589.3795);
    finantial.DB(1000000, 100000, 6, 4, 6).should.equal(124343.36743949998);
    finantial.DB(1000000, 100000, 6, 5, 6).should.equal(84677.83322629951);
    finantial.DB(1000000, 100000, 6, 6, 6).should.equal(57665.60442710997);
    finantial.DB(1000000, 100000, 6, 1, 9).should.equal(239250);
    finantial.DB(1000000, 100000, 6, 2, 9).should.equal(242679.25);
    finantial.DB(1000000, 100000, 6, 3, 9).should.equal(165264.56925);
    finantial.DB(1000000, 100000, 6, 4, 9).should.equal(112545.17165925002);
    finantial.DB(1000000, 100000, 6, 5, 9).should.equal(76643.26189994926);
    finantial.DB(1000000, 100000, 6, 6, 9).should.equal(52194.061353865436);
    finantial.DB('Hello World!', 100000, 6, 1, 6).should.equal(error.value);
    finantial.DB(1000000, 'Hello World!', 6, 1, 6).should.equal(error.value);
    finantial.DB(1000000, 100000, 'Hello World!', 1, 6).should.equal(error.value);
    finantial.DB(1000000, 100000, 6, 'Hello World!', 6).should.equal(error.value);
    finantial.DB(1000000, 100000, 6, 1, 'Hello World!').should.equal(error.value);
    finantial.DB(-1000000, 100000, 6, 1, 6).should.equal(error.num);
    finantial.DB(1000000, -100000, 6, 1, 6).should.equal(error.num);
    finantial.DB(1000000, 100000, -6, 1, 6).should.equal(error.num);
    finantial.DB(1000000, 100000, 6, -1, 6).should.equal(error.num);
    finantial.DB(1000000, 100000, 6, 1, -1).should.equal(error.num);
    finantial.DB(1000000, 100000, 6, 1, 13).should.equal(error.num);
    finantial.DB(1000000, 100000, 6, 7, 6).should.equal(error.num);
    finantial.DB(1000000, 1000000, 6, 1, 6).should.equal(0);
    finantial.DB(100000, 1000000, 6, 1, 6).should.equal(0);
  });

  test("DDB", function() {
    finantial.DDB(1000000, 100000, 6, 1).should.equal(333333.3333333333);
    finantial.DDB(1000000, 100000, 6, 2).should.equal(222222.22222222225);
    finantial.DDB(1000000, 100000, 6, 3).should.equal(148148.14814814815);
    finantial.DDB(1000000, 100000, 6, 4).should.equal(98765.43209876546);
    finantial.DDB(1000000, 100000, 6, 5).should.equal(65843.62139917696);
    finantial.DDB(1000000, 100000, 6, 6).should.equal(31687.242798353895);
    finantial.DDB(1000000, 100000, 6, 1, 1.5).should.equal(250000);
    finantial.DDB(1000000, 100000, 6, 2, 1.5).should.equal(187500);
    finantial.DDB(1000000, 100000, 6, 3, 1.5).should.equal(140625);
    finantial.DDB(1000000, 100000, 6, 4, 1.5).should.equal(105468.75);
    finantial.DDB(1000000, 100000, 6, 5, 1.5).should.equal(79101.5625);
    finantial.DDB(1000000, 100000, 6, 6, 1.5).should.equal(59326.171875);
    finantial.DDB('Hello World!', 100000, 6, 6, 1.5).should.equal(error.value);
    finantial.DDB(1000000, 'Hello World!', 6, 6, 1.5).should.equal(error.value);
    finantial.DDB(1000000, 100000, 'Hello World!', 6, 1.5).should.equal(error.value);
    finantial.DDB(1000000, 100000, 6, 'Hello World!', 1.5).should.equal(error.value);
    finantial.DDB(1000000, 100000, 6, 6, 'Hello World!').should.equal(error.value);
    finantial.DDB(-1000000, 100000, 6, 1, 1.5).should.equal(error.num);
    finantial.DDB(1000000, -100000, 6, 1, 1.5).should.equal(error.num);
    finantial.DDB(1000000, 100000, -6, 1, 1.5).should.equal(error.num);
    finantial.DDB(1000000, 100000, 6, -1, 1.5).should.equal(error.num);
    finantial.DDB(1000000, 100000, 6, 1, -1.5).should.equal(error.num);
    finantial.DDB(1000000, 100000, 6, 1, 0).should.equal(error.num);
    finantial.DDB(1000000, 100000, 6, 7, 1.5).should.equal(error.num);
    finantial.DDB(1000000, 1000000, 6, 1, 1.5).should.equal(0);
    finantial.DDB(100000, 1000000, 6, 1, 1.5).should.equal(0);
  });

  //TODO: implement
  test('DISC', function() {
    should.equal(finantial.DISC(), undefined);
  });

  test("DOLLARDE", function() {
    finantial.DOLLARDE(1.1, 1).should.equal(1.1);
    finantial.DOLLARDE(1.1, 2).should.equal(1.5);
    finantial.DOLLARDE(1.1, 4).should.equal(1.25);
    finantial.DOLLARDE(1.1, 8).should.equal(1.125);
    finantial.DOLLARDE(1.1, 16).should.equal(1.625);
    finantial.DOLLARDE(1.1, 32).should.equal(1.3125);
    finantial.DOLLARDE(-1.1, 1).should.equal(-1.1);
    finantial.DOLLARDE(-1.1, 2).should.equal(-1.5);
    finantial.DOLLARDE(-1.1, 4).should.equal(-1.25);
    finantial.DOLLARDE(-1.1, 8).should.equal(-1.125);
    finantial.DOLLARDE(-1.1, 16).should.equal(-1.625);
    finantial.DOLLARDE(-1.1, 32).should.equal(-1.3125);
    finantial.DOLLARDE(1.1, 1.5).should.equal(1.1);
    finantial.DOLLARDE('Hello World!', 1).should.equal(error.value);
    finantial.DOLLARDE(1.1, 'Hello World!').should.equal(error.value);
    finantial.DOLLARDE(1.1, -1).should.equal(error.num);
    finantial.DOLLARDE(1.1, 0.5).should.equal(error.div0);
  });

  test("DOLLARFR", function() {
    finantial.DOLLARFR(1.1, 1).should.equal(1.1);
    finantial.DOLLARFR(1.5, 2).should.equal(1.1);
    finantial.DOLLARFR(1.25, 4).should.equal(1.1);
    finantial.DOLLARFR(1.125, 8).should.equal(1.1);
    finantial.DOLLARFR(1.625, 16).should.equal(1.1);
    finantial.DOLLARFR(1.3125, 32).should.equal(1.1);
    finantial.DOLLARFR(-1.1, 1).should.equal(-1.1);
    finantial.DOLLARFR(-1.5, 2).should.equal(-1.1);
    finantial.DOLLARFR(-1.25, 4).should.equal(-1.1);
    finantial.DOLLARFR(-1.125, 8).should.equal(-1.1);
    finantial.DOLLARFR(-1.625, 16).should.equal(-1.1);
    finantial.DOLLARFR(-1.3125, 32).should.equal(-1.1);
    finantial.DOLLARFR(-1.1, 1.5).should.equal(-1.1);
    finantial.DOLLARFR('Hello World!', 1).should.equal(error.value);
    finantial.DOLLARFR(1.5, 'Hello World!').should.equal(error.value);
    finantial.DOLLARFR(1.5, -1).should.equal(error.num);
    finantial.DOLLARFR(1.5, 0.5).should.equal(error.div0);
  });

  //TODO: implement
  test('DURATION', function() {
    should.equal(finantial.DURATION(), undefined);
  });

  test("EFFECT", function() {
    finantial.EFFECT(0.1, 4).should.equal(0.10381289062499977);
    finantial.EFFECT(0.1, 4.5).should.equal(0.10381289062499977);
    finantial.EFFECT('Hello', 4).should.equal(error.value);
    finantial.EFFECT(0.1, 'World').should.equal(error.value);
    finantial.EFFECT(-0.1, 4).should.equal(error.num);
    finantial.EFFECT(0.1, 0.5).should.equal(error.num);
  });

  test("FV", function() {
    finantial.FV('0.1/12', 10, -100, -1000, 0).should.equal(2124.874409194097);
    finantial.FV('0.1/12', 10, -100, -1000, 1).should.equal(2133.527289264821);
    finantial.FV('0.1/12', 10, -100, -1000).should.equal(2124.874409194097);
    finantial.FV('0.1/12', 10, null, -1000).should.equal(1086.5288007072381);
    finantial.FV('0.1/12', 10, -100, null).should.equal(1038.3456084868587);
  });

  test("FVSCHEDULE", function() {
    finantial.FVSCHEDULE(100, [0.09, 0.1, 0.11]).should.equal(133.08900000000003);
    finantial.FVSCHEDULE(100, ['Hello World!', 0.1, 0.11]).should.equal(error.value);
  });

  //TODO: implement
  test('INTRATE', function() {
    should.equal(finantial.INTRATE(), undefined);
  });

  test("IPMT", function() {
    finantial.IPMT('0.1/12', 6, '2*12', 100000, 1000000, 0).should.equal(928.8235718400465);
    finantial.IPMT('0.1/12', 6, '2*12', 100000, 1000000, 1).should.equal(921.1473439736042);
  });

  test("IRR", function() {
    finantial.IRR([-75000, 12000, 15000, 18000, 21000, 24000]).should.equal(0.05715142887178467);
    finantial.IRR([
      [-75000, 12000],
      [15000, 18000],
      [21000, 24000]
    ]).should.equal(0.05715142887178467);
    finantial.IRR([-75000, 12000, 15000, 18000, 21000, 24000], 0.1).should.equal(0.05715142887178467);
    finantial.IRR([-75000, 12000, 15000, 18000, 21000, 24000], 0.075).should.equal(0.05715142887178447);
    finantial.IRR([-75000, 12000, 15000, 18000, 21000, 24000], 0.05).should.equal(0.05715142887178453);
    finantial.IRR([12000, 15000, 18000, 21000, 24000]).should.equal(error.num);
    finantial.IRR([-12000, -15000, -18000, -21000, -24000]).should.equal(error.num);
  });

  test("ISPMT", function() {
    finantial.ISPMT('0.1/12', 6, '2*12', 100000).should.equal(-625);
  });

  //TODO: implement
  test('MDURATION', function() {
    should.equal(finantial.MDURATION(), undefined);
  });

  test("MIRR", function() {
    finantial.MIRR([-75000, 12000, 15000, 18000, 21000, 24000], 0.1, 0.12).should.equal(0.07971710360838036);
  });

  test("NOMINAL", function() {
    finantial.NOMINAL(0.1, 4).should.equal(0.09645475633778045);
    finantial.NOMINAL(0.1, 4.5).should.equal(0.09645475633778045);
    finantial.NOMINAL('Hello', 4).should.equal(error.value);
    finantial.NOMINAL(0.1, 'World').should.equal(error.value);
    finantial.NOMINAL(-0.1, 4).should.equal(error.num);
    finantial.NOMINAL(0.1, 0.5).should.equal(error.num);
  });

  test("NPER", function() {
    finantial.NPER('0.1/12', -100, -1000, 10000, 0).should.equal(63.39385422740764);
    finantial.NPER('0.1/12', -100, -1000, 10000, 1).should.equal(63.016966422019685);
    finantial.NPER('0.1/12', -100, -1000, 10000).should.equal(63.39385422740764);
    finantial.NPER('0.1/12', -100, -1000).should.equal(-9.645090919837394);
  });

  test("NPV", function() {
    finantial.NPV(0.1, -10000, 2000, 4000, 8000).should.equal(1031.3503176012546);
    finantial.NPV(0.1, [-10000, 2000, 4000, 8000]).should.equal(1031.3503176012546);
    finantial.NPV(0.1, [-75000]).should.equal(-68181.81818181818);
    finantial.NPV(0.12, [12000, 15000, 18000, 21000, 24000]).should.equal(62448.362521940246);
  });

  //TODO: implement
  test('ODDFPRICE', function() {
    should.equal(finantial.ODDFPRICE(), undefined);
  });

  //TODO: implement
  test('ODDFYIELD', function() {
    should.equal(finantial.ODDFYIELD(), undefined);
  });

  //TODO: implement
  test('ODDLPRICE', function() {
    should.equal(finantial.ODDLPRICE(), undefined);
  });

  //TODO: implement
  test('ODDLYIELD', function() {
    should.equal(finantial.ODDLYIELD(), undefined);
  });

  test("PDURATION", function() {
    finantial.PDURATION(0.1, 1000, 2000).should.equal(7.272540897341714);
    finantial.PDURATION('Hello World!', 1000, 2000).should.equal(error.value);
    finantial.PDURATION(0.1, 'Hello World!', 2000).should.equal(error.value);
    finantial.PDURATION(0.1, 1000, 'Hello World!').should.equal(error.value);
    finantial.PDURATION(0, 1000, 2000).should.equal(error.num);
    finantial.PDURATION(-0.1, 1000, 2000).should.equal(error.num);
  });

  test("PMT", function() {
    finantial.PMT('0.1/12', '2*12', 100000, 1000000, 0).should.equal(-42426.08563793503);
    finantial.PMT('0.1/12', '2*12', 100000, 1000000, 1).should.equal(-42075.45683100995);
    finantial.PMT('0.1/12', '2*12', 100000, 1000000).should.equal(-42426.08563793503);
    finantial.PMT('0.1/12', '2*12', null, 1000000).should.equal(-37811.59300418336);
    finantial.PMT('0.1/12', '2*12', 100000, null).should.equal(-4614.49263375167);
  });

  test("PPMT", function() {
    finantial.PPMT('0.1/12', 6, '2*12', 100000, 1000000, 0).should.equal(-43354.909209775076);
    finantial.PPMT('0.1/12', 6, '2*12', 100000, 1000000, 1).should.equal(-42996.60417498356);
    finantial.PPMT('0.1/12', 6, '2*12', 100000, 1000000).should.equal(-43354.909209775076);
    finantial.PPMT('0.1/12', 6, '2*12', null, 1000000).should.equal(-39413.55382706825);
    finantial.PPMT('0.1/12', 6, '2*12', 100000, null).should.equal(-3941.355382706826);
  });

  //TODO: implement
  test('PRICE', function() {
    should.equal(finantial.PRICE(), undefined);
  });

  //TODO: implement
  test('PRICEDISC', function() {
    should.equal(finantial.PRICEDISC(), undefined);
  });

  //TODO: implement
  test('PRICEMAT', function() {
    should.equal(finantial.PRICEMAT(), undefined);
  });

  test("PV", function() {
    finantial.PV('0.1/12', '2*12', 1000, 10000, 0).should.equal(-29864.950264779152);
    finantial.PV('0.1/12', '2*12', 1000, 10000, 1).should.equal(-30045.54072173169);
  });

  test("RATE", function() {
    finantial.RATE('2*12', -1000, -10000, 100000).should.equal(0.06517891177181546);
    finantial.RATE('2*12', -1000, -10000, 100000, 0, 0.1).should.equal(0.06517891177181533);
    finantial.RATE('2*12', -1000, -10000, 100000, 0, 0.75).should.equal(0.0651789117718154);
    finantial.RATE('2*12', -1000, -10000, 100000, 0, 0.065).should.equal(0.06517891177181524);
    finantial.RATE('2*12', -1000, -10000, 100000, 1, 0.1).should.equal(0.0632395800018064);
  });

  //TODO: implement
  test('RECEIVED', function() {
    should.equal(finantial.RECEIVED(), undefined);
  });

  test('RRI', function() {
    finantial.RRI(8, 10000, 11000).should.equal(0.011985024140399592);
  });

  test('SLN', function() {
    finantial.SLN(30000, 7500, 10).should.equal(2250);
  });

  test('SYD', function() {
    finantial.SYD(30, 7, 10, 1).should.equal(4.181818181818182);
  });

  test('TBILLEQ', function() {
    finantial.TBILLEQ('03/31/2008', '06/01/2008', 4).should.equal(0.0914);
  });

  test('TBILLPRICE', function() {
    finantial.TBILLPRICE('03/31/2008', '06/01/2008', 0.0914).should.equal(98.45127777777778);
  });

  test('TBILLYIELD', function() {
    // TODO TEST
  });

  //TODO: implement
  test('VDB', function() {
    should.equal(finantial.VDB(), undefined);
  });

  test('XIRR', function() {
    // TODO TEST
  });

  test('XNPV', function() {
    // TODO TEST
  });

  //TODO: implement
  test('YIELD', function() {
    should.equal(finantial.YIELD(), undefined);
  });

  //TODO: implement
  test('YIELDDISC', function() {
    should.equal(finantial.YIELDDISC(), undefined);
  });

  //TODO: implement
  test('YIELDMAT', function() {
    should.equal(finantial.YIELDMAT(), undefined);
  });
});