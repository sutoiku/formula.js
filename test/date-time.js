var moment = require('moment');
var error = require('../lib/error');
var dateTime = require('../lib/date-time');
var should = require('should');

suite('Date & Time', function() {
  test('DATE', function() {
    var date = dateTime.DATE(1900, 1, 1);
    date.getFullYear().should.equal(1900);
    date.getMonth().should.equal(1 - 1);
    date.getDay().should.equal(1);

    dateTime.DATE(1900, 1, -1).should.equal(error.num);
    dateTime.DATE('invalid').should.equal(error.value);
  });

  test('DATEVALUE', function() {
    dateTime.DATEVALUE('1/1/1900').should.equal(1);
    dateTime.DATEVALUE('12/31/9999').should.equal(2958465);
    dateTime.DATEVALUE(1).should.equal(error.value);
    dateTime.DATEVALUE('0/0/0').should.equal(error.value);
  });

  test('DAY', function() {
    dateTime.DAY(1).should.equal(1);
    dateTime.DAY(2958465).should.equal(31);
    dateTime.DAY('1').should.equal(1);
    dateTime.DAY('1/1/1900').should.equal(1);
    dateTime.DAY(new Date(1900, 0, 1)).should.equal(1);
    dateTime.DAY(-1).should.equal(error.num);
    dateTime.DAY('a').should.equal(error.value);
  });

  test('DAYS', function() {
    dateTime.DAYS(2, 1).should.equal(1);
    dateTime.DAYS('1/2/1900', '1/1/1900').should.equal(1);
    dateTime.DAYS(new Date(1900, 1, 2), new Date(1900, 1, 1)).should.equal(1);
    dateTime.DAYS('a', 1).should.equal(error.value);
    dateTime.DAYS(1, 'a').should.equal(error.value);
  });

  test('DAYS360', function() {
    dateTime.DAYS360('1/1/1901', '1/2/1901', true).should.equal(1);
    dateTime.DAYS360('1/1/1901', '12/31/1901', true).should.equal(359);
    dateTime.DAYS360('1/1/1901', '1/1/1902', true).should.equal(360);
    dateTime.DAYS360('1/1/1901', '2/1/1901', true).should.equal(30);
    dateTime.DAYS360('1/1/1901', '1/2/1901', false).should.equal(1);
    dateTime.DAYS360('1/1/1901', '12/31/1901', false).should.equal(360);
    dateTime.DAYS360('1/1/1901', '1/1/1902', false).should.equal(360);
    dateTime.DAYS360('1/1/1901', '2/1/1901', false).should.equal(30);
    dateTime.DAYS360('1/30/1901', '12/31/1901', false).should.equal(330);
    dateTime.DAYS360('1/1/1901', 'a').should.equal(error.value);
    dateTime.DAYS360('a', '1/2/1901').should.equal(error.value);
    dateTime.DAYS360('1/1/1901', '1/2/1901', 'a').should.equal(error.value);
  });

  test('EDATE', function() {
    dateTime.EDATE('1/1/1900', 0).should.equal(1);
    dateTime.EDATE('1/1/1900', 1).should.equal(32);
    dateTime.EDATE('1/1/1900', 12).should.equal(367);
    dateTime.EDATE('a', 0).should.equal(error.value);
    dateTime.EDATE('1/1/1900', 'a').should.equal(error.value);
  });

  test('EOMONTH', function() {
    dateTime.EOMONTH('1/1/1900', 0).should.equal(31);
    dateTime.EOMONTH('1/1/1900', 1).should.equal(59);
    dateTime.EOMONTH('1/1/1900', 12).should.equal(397);
    dateTime.EOMONTH('a', 0).should.equal(error.value);
    dateTime.EOMONTH('1/1/1900', 'a').should.equal(error.value);
  });

  test('FROMNOW', function() {
    dateTime.FROMNOW(moment().subtract('years', 50), true).should.equal("50 years");
    dateTime.FROMNOW(moment().subtract('years', 50), false).should.equal("50 years ago");
    dateTime.FROMNOW().should.equal("a few seconds ago");
  });

  test('HOUR', function() {
    dateTime.HOUR('1/1/1900').should.equal(0);
    dateTime.HOUR('1/1/1900 1:00').should.equal(1);
    // dateTime.HOUR('1:00').should.equal(1);
    // dateTime.HOUR('0.75').should.equal(18);
    dateTime.HOUR('a').should.equal(error.value);
  });

  test('ISOWEEKNUM', function() {
    dateTime.ISOWEEKNUM('1/1/1901').should.equal(1);
    dateTime.ISOWEEKNUM('1/8/1901').should.equal(2);
    dateTime.ISOWEEKNUM('12/29/1901').should.equal(52);
    dateTime.ISOWEEKNUM('6/6/1902').should.equal(23);
    dateTime.ISOWEEKNUM('a').should.equal(error.value);
  });

  test('MINUTE', function() {
    dateTime.MINUTE('1/1/1901').should.equal(0);
    dateTime.MINUTE('1/1/1901 1:01').should.equal(1);
    // dateTime.MINUTE('1:01').should.equal(1);
    dateTime.MINUTE('a').should.equal(error.value);
  });

  test('MONTH', function() {
    dateTime.MONTH('1/1/1900').should.equal(1);
    dateTime.MONTH('12/1/1900').should.equal(12);
    dateTime.MONTH('a').should.equal(error.value);
  });

  test('NETWORKDAYS', function() {
    dateTime.NETWORKDAYS('1/1/1900', '1/2/1900').should.equal(1);
    dateTime.NETWORKDAYS('1/1/1900', '2/1/1900').should.equal(23);
    dateTime.NETWORKDAYS('1/1/1900', '2/1/1900', '1/2/1900').should.equal(22);
    dateTime.NETWORKDAYS('1/1/1900', '2/1/1900', ['1/2/1900', '1/3/1900']).should.equal(21);
    dateTime.NETWORKDAYS('a', '1/2/1900').should.equal(error.value);
    dateTime.NETWORKDAYS('1/1/1900', 'a').should.equal(error.value);
    dateTime.NETWORKDAYS('1/1/1900', '2/1/1900', 'a').should.equal(error.value);
  });

  test('NETWORKDAYS.INTL', function() {
    dateTime.NETWORKDAYS.INTL('1/1/1900', '1/2/1900').should.equal(1);
    dateTime.NETWORKDAYS.INTL('1/1/1900', '1/2/1900', 2).should.equal(0);
    dateTime.NETWORKDAYS.INTL('1/1/1900', '1/2/1900', -1).should.equal(error.value);
  });

  test('NOW', function() {
    dateTime.NOW().should.instanceof(Date);
  });

  test('SECOND', function() {
    dateTime.SECOND('1/1/1900').should.equal(0);
    dateTime.SECOND('1/1/1900 1:00:01').should.equal(1);
    dateTime.SECOND('a').should.equal(error.value);
  });

  test('TIME', function() {
    dateTime.TIME(0, 0, 0).should.equal(0);
    dateTime.TIME(1, 1, 1).should.approximately(0.04237268518518519, 1e-9);
    dateTime.TIME(-1, -1, -1).should.equal(error.num);
    dateTime.TIME('invalid').should.equal(error.value);
  });

  test('TIMEVALUE', function() {
    dateTime.TIMEVALUE('1/1/1900 00:00:00').should.equal(0);
    dateTime.TIMEVALUE('1/1/1900 12:00:00').should.approximately(0.5, 1e-9);
    dateTime.TIMEVALUE('a').should.equal(error.value);
  });

  test('TODAY', function() {
    dateTime.TODAY().should.instanceof(Date);
  });

  test('WEEKDAY', function() {
    dateTime.WEEKDAY('1/1/1901').should.equal(3);
    dateTime.WEEKDAY('1/1/1901', 2).should.equal(2);
    dateTime.WEEKDAY('a').should.equal(error.value);
  });

  test('WEEKNUM', function() {
    dateTime.WEEKNUM('1/1/1900').should.equal(1);
    dateTime.WEEKNUM('2/1/1900').should.equal(5);
    dateTime.WEEKNUM('2/1/1909', 2).should.equal(6);
    dateTime.WEEKNUM('1/1/1901', 21).should.equal(1);
    dateTime.WEEKNUM('a').should.equal(error.value);
  });

  test('WORKDAY', function() {
    dateTime.WORKDAY('1/1/1900', 1).getDate().should.equal(2);
    dateTime.WORKDAY('1/1/1900', 7).getDate().should.equal(10);
    dateTime.WORKDAY('1/1/1900', 2, '1/2/1900').getDate().should.equal(4);
    dateTime.WORKDAY('a', 1, '1/2/1900').should.equal(error.value);
    dateTime.WORKDAY('1/1/1900', 'a').should.equal(error.value);
    dateTime.WORKDAY('1/1/1900', 1, 'a').should.equal(error.value);
    dateTime.WORKDAY('1/1/1900', -1).should.equal(error.num);
  });

  test('WORKDAY.INTL', function() {
    dateTime.WORKDAY.INTL('1/1/1900', 1).getDate().should.equal(2);
    dateTime.WORKDAY.INTL('1/1/1905', 1, 2).getDate().should.equal(3);
    dateTime.WORKDAY.INTL('1/1/1900', 1, 'a').should.equal(error.value);
  });

  test('YEAR', function() {
    dateTime.YEAR('1/1/1900').should.equal(1900);
    dateTime.YEAR('a').should.equal(error.value);
  });

  test('YEARFRAC', function() {
    dateTime.YEARFRAC('1/1/1900', '1/2/1900').should.approximately(0.002777777777777778, 1e-3);
    dateTime.YEARFRAC('1/31/1900', '3/31/1900', 0).should.approximately(0.16666666666666666, 1e-3);
    dateTime.YEARFRAC('1/31/1900', '2/1/1900', 0).should.approximately(0.002777777777777778, 1e-3);
    dateTime.YEARFRAC('1/30/1900', '3/31/1900', 0).should.approximately(0.16666666666666666, 1e-3);

    dateTime.YEARFRAC('1/1/1900', '1/2/1900', 1).should.approximately(0.0027397260273972603, 1e-3);
    dateTime.YEARFRAC('1/1/1904', '1/1/1905', 1).should.equal(1);
    dateTime.YEARFRAC('5/1/1903', '5/1/1904', 1).should.equal(1);
    dateTime.YEARFRAC('1/1/1903', '5/1/1904', 1).should.approximately(1.3295713634290924, 1e-3);
    dateTime.YEARFRAC('1/1/1904', '1/2/1904', 1).should.approximately(0.00273224043715847, 1e-3);

    dateTime.YEARFRAC('1/1/1900', '1/2/1900', 2).should.approximately(0.002777777777777778, 1e-3);
    dateTime.YEARFRAC('1/1/1900', '1/2/1900', 3).should.approximately(0.0027397260273972603, 1e-3);
    dateTime.YEARFRAC('1/1/1900', '1/2/1900', 4).should.approximately(0.002777777777777778, 1e-3);
    dateTime.YEARFRAC('a', '1/2/1900').should.equal(error.value);
    dateTime.YEARFRAC('1/1/1900', 'a').should.equal(error.value);
  });

  test('MOMENT', function() {
    dateTime.MOMENT([1963, 11, 20]).should.eql(moment([1963, 11, 20]).format());
    dateTime.MOMENT('1963-12-20', 'YYYY-MM-DD').should.eql(moment([1963, 11, 20]).format('YYYY-MM-DD'));
  });

  test('MOMENTADD', function() {
    dateTime.MOMENTADD(new Date(1963, 11, 20), 1, 'days').toDate().should.eql(moment([1963, 11, 21]).toDate());
    dateTime.MOMENTADD(new Date(1963, 11, 20), 1, 'weeks').toDate().should.eql(moment([1963, 11, 27]).toDate());
    dateTime.MOMENTADD(new Date(1963, 11, 20), 1, 'month').toDate().should.eql(moment([1964, 0, 20]).toDate());
  });

  test('MOMENTDIFF', function() {
    dateTime.MOMENTDIFF(new Date(1963, 11, 20), new Date(1963, 11, 27), 'days').should.equal(7);
    dateTime.MOMENTDIFF(new Date(1963, 11, 20), new Date(1963, 11, 27), 'weeks').should.equal(1);
  });

  test('MOMENTSUB', function() {
    dateTime.MOMENTSUB(new Date(1963, 11, 20), 1, 'days').toDate().should.eql(moment([1963, 11, 19]).toDate());
    dateTime.MOMENTSUB(new Date(1963, 11, 20), 1, 'weeks').toDate().should.eql(moment([1963, 11, 13]).toDate());
    dateTime.MOMENTSUB(new Date(1963, 11, 20), 1, 'month').toDate().should.eql(moment([1963, 10, 20]).toDate());
  });

  test('MOMENTUTC', function() {
    dateTime.MOMENTUTC([1963, 11, 20]).should.eql("1963-12-20T00:00:00+00:00");
  });

  test('MOMENTUNIX', function() {
    dateTime.MOMENTUNIX(1318781876406).should.eql(moment.unix(1318781876406).toDate());
    dateTime.MOMENTUNIX(0).should.eql(moment.unix(0).toDate());
  });

  test('MOMENTFORMAT', function() {
    dateTime.MOMENTFORMAT([2013, 11, 20], 'DD-MM-YYYY').should.eql('20-12-2013');
    dateTime.MOMENTFORMAT([2013, 11, 20], 'YYYY-DD-MM').should.eql('2013-20-12');
  });

  test('MOMENTISLEAPYEAR', function() {
    dateTime.MOMENTISLEAPYEAR([1964, 11, 20]).should.equal(true);
    dateTime.MOMENTISLEAPYEAR([1963, 11, 20]).should.equal(false);
  });

  test('MOMENTSTARTOF', function() {
    dateTime.MOMENTSTARTOF([1963, 11, 20], 'month').should.eql(new Date(1963, 11, 1));
    dateTime.MOMENTSTARTOF([1963, 11, 20], 'day').should.eql(new Date(1963, 11, 20));
    dateTime.MOMENTSTARTOF([1963, 11, 20], 'week').should.eql(new Date(1963, 11, 15));
    dateTime.MOMENTSTARTOF([1963, 11, 20], 'year').should.eql(new Date(1963, 0, 1));
  });

  test('MOMENTENDOF', function() {
    dateTime.MOMENTENDOF([1963, 11, 20], 'month').should.eql(new Date(1963, 11, 31, 23, 59, 59, 999));
    dateTime.MOMENTENDOF([1963, 11, 20], 'day').should.eql(new Date(1963, 11, 20, 23, 59, 59, 999));
    dateTime.MOMENTENDOF([1963, 11, 20], 'week').should.eql(new Date(1963, 11, 21, 23, 59, 59, 999));
    dateTime.MOMENTENDOF([1963, 11, 20], 'year').should.eql(new Date(1963, 11, 31, 23, 59, 59, 999));
  });

  test('MOMENTISBEFORE', function() {
    dateTime.MOMENTISBEFORE([1963, 11, 1], [1963, 11, 20]).should.eql(true);
    dateTime.MOMENTISBEFORE([1963, 11, 21], [1963, 11, 20]).should.eql(false);
  });

  test('MOMENTISAFTER', function() {
    dateTime.MOMENTISAFTER([1963, 11, 1], [1963, 11, 20]).should.eql(false);
    dateTime.MOMENTISAFTER([1963, 11, 21], [1963, 11, 20]).should.eql(true);
  });

  test('NETWORKDAYS', function() {
    dateTime.NETWORKDAYS('2013-12-04', '2013-12-04').should.equal(0);
    dateTime.NETWORKDAYS('2013-12-04', '2013-12-07').should.equal(3);
    dateTime.NETWORKDAYS('2013-12-04', '2013-12-07').should.equal(3);
    dateTime.NETWORKDAYS('2013-12-04', '2013-12-09').should.equal(3);
  });
});