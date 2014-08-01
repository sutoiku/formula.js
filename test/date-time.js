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

    date = dateTime.DATE("invalid");
    date.should.equal(error.value);
  });
});
