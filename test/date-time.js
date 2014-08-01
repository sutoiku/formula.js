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
});
