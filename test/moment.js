/* global suite, test */
var moment; // Optional
try {
 moment = require('moment');
} catch (e) {
  console.log('Unable to locate moment : those formulas wont be tested.');
  return;
}

var momentFormulas = require('../lib/moment');
require('should');

suite('moment formulas', function() {
  test('FROMNOW', function() {
    momentFormulas.FROMNOW(moment().subtract('years', 50), true).should.equal("50 years");
    momentFormulas.FROMNOW(moment().subtract('years', 50), false).should.equal("50 years ago");
    momentFormulas.FROMNOW().should.equal("a few seconds ago");
  });

  test('MOMENT', function() {
    momentFormulas.MOMENT([1963, 11, 20]).should.eql(moment([1963, 11, 20]).format());
    momentFormulas.MOMENT('1963-12-20', 'YYYY-MM-DD').should.eql(moment([1963, 11, 20]).format('YYYY-MM-DD'));
  });

  test('MOMENTADD', function() {
    momentFormulas.MOMENTADD(new Date(1963, 11, 20), 1, 'days').toDate().should.eql(moment([1963, 11, 21]).toDate());
    momentFormulas.MOMENTADD(new Date(1963, 11, 20), 1, 'weeks').toDate().should.eql(moment([1963, 11, 27]).toDate());
    momentFormulas.MOMENTADD(new Date(1963, 11, 20), 1, 'month').toDate().should.eql(moment([1964, 0, 20]).toDate());
  });

  test('MOMENTDIFF', function() {
    momentFormulas.MOMENTDIFF(new Date(1963, 11, 20), new Date(1963, 11, 27), 'days').should.equal(7);
    momentFormulas.MOMENTDIFF(new Date(1963, 11, 20), new Date(1963, 11, 27), 'weeks').should.equal(1);
  });

  test('MOMENTSUB', function() {
    momentFormulas.MOMENTSUB(new Date(1963, 11, 20), 1, 'days').toDate().should.eql(moment([1963, 11, 19]).toDate());
    momentFormulas.MOMENTSUB(new Date(1963, 11, 20), 1, 'weeks').toDate().should.eql(moment([1963, 11, 13]).toDate());
    momentFormulas.MOMENTSUB(new Date(1963, 11, 20), 1, 'month').toDate().should.eql(moment([1963, 10, 20]).toDate());
  });

  test('MOMENTUTC', function() {
    momentFormulas.MOMENTUTC([1963, 11, 20]).should.eql("1963-12-20T00:00:00+00:00");
  });

  test('MOMENTUNIX', function() {
    momentFormulas.MOMENTUNIX(1318781876406).should.eql(moment.unix(1318781876406).toDate());
    momentFormulas.MOMENTUNIX(0).should.eql(moment.unix(0).toDate());
  });

  test('MOMENTFORMAT', function() {
    momentFormulas.MOMENTFORMAT([2013, 11, 20], 'DD-MM-YYYY').should.eql('20-12-2013');
    momentFormulas.MOMENTFORMAT([2013, 11, 20], 'YYYY-DD-MM').should.eql('2013-20-12');
  });

  test('MOMENTISLEAPYEAR', function() {
    momentFormulas.MOMENTISLEAPYEAR([1964, 11, 20]).should.equal(true);
    momentFormulas.MOMENTISLEAPYEAR([1963, 11, 20]).should.equal(false);
  });

  test('MOMENTSTARTOF', function() {
    momentFormulas.MOMENTSTARTOF([1963, 11, 20], 'month').should.eql(new Date(1963, 11, 1));
    momentFormulas.MOMENTSTARTOF([1963, 11, 20], 'day').should.eql(new Date(1963, 11, 20));
    momentFormulas.MOMENTSTARTOF([1963, 11, 20], 'week').should.eql(new Date(1963, 11, 15));
    momentFormulas.MOMENTSTARTOF([1963, 11, 20], 'year').should.eql(new Date(1963, 0, 1));
  });

  test('MOMENTENDOF', function() {
    momentFormulas.MOMENTENDOF([1963, 11, 20], 'month').should.eql(new Date(1963, 11, 31, 23, 59, 59, 999));
    momentFormulas.MOMENTENDOF([1963, 11, 20], 'day').should.eql(new Date(1963, 11, 20, 23, 59, 59, 999));
    momentFormulas.MOMENTENDOF([1963, 11, 20], 'week').should.eql(new Date(1963, 11, 21, 23, 59, 59, 999));
    momentFormulas.MOMENTENDOF([1963, 11, 20], 'year').should.eql(new Date(1963, 11, 31, 23, 59, 59, 999));
  });

  test('MOMENTISBEFORE', function() {
    momentFormulas.MOMENTISBEFORE([1963, 11, 1], [1963, 11, 20]).should.eql(true);
    momentFormulas.MOMENTISBEFORE([1963, 11, 21], [1963, 11, 20]).should.eql(false);
  });

  test('MOMENTISAFTER', function() {
    momentFormulas.MOMENTISAFTER([1963, 11, 1], [1963, 11, 20]).should.eql(false);
    momentFormulas.MOMENTISAFTER([1963, 11, 21], [1963, 11, 20]).should.eql(true);
  });


  test('HUMANIZE', function() {
    momentFormulas.HUMANIZE('').should.equal("");
    momentFormulas.HUMANIZE(new Date(2012, 11, 20, 7, 7, 7)).should.equal("Thursday, December 20th 2012, 7:07:07");
    momentFormulas.HUMANIZE(new Date(2012, 11, 20, 7, 7)).should.equal("Thursday, December 20th 2012, 7:07:00");
    momentFormulas.HUMANIZE(new Date(2012, 11, 20)).should.equal("Thursday, December 20th 2012");
    momentFormulas.HUMANIZE('A RANDOM STRING').should.equal("A RANDOM STRING");
    momentFormulas.HUMANIZE(1 + 2).should.equal(3);
  });
});