var error = require('../lib/error');
var dateTime = require('../lib/date-time');
var should = require('should');

suite('Date & Time', function() {
  test('DATE', function() {
    var date = dateTime.DATE(1900, 1, 1);
    date.getFullYear().should.equal(1900);
    date.getMonth().should.equal(1 - 1);
    date.getDay().should.equal(1);

    date = dateTime.DATE(1900, 1, -1);
    date.should.equal(error.num);

    date = dateTime.DATE('invalid');
    date.should.equal(error.value);
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

  test('HOUR', function() {
    dateTime.HOUR('1/1/1900').should.equal(0);
    dateTime.HOUR('1/1/1900 1:00').should.equal(1);
    // dateTime.HOUR('1:00').should.equal(1);
    // dateTime.HOUR('0.75').should.equal(18);
    dateTime.HOUR('a').should.equal(error.value);
  });
});
