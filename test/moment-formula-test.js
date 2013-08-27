/**
 * @author       Jim Alateras
 */
/**
 * @author       Jim Alateras
 */

var should = require('should');
var moment = require('moment');
var libpath = process.env.IMPORTERJS_COV ? "../lib-cov" : "../lib";
var Formulae = require(libpath + "/formula");

describe("test formula integration with momentjs", function () {
  describe("test MOMENT", function () {
    it("should correctly evaluate the array [1963, 11, 20] as a valid date", function () {
      Formulae.MOMENT([1963, 11, 20]).should.eql(moment([1963, 11, 20]).format());
    });

    it("should correctly evaluate 20-12-1963 when i use the format DD-MM-YYYY", function () {
      Formulae.MOMENT('1963-12-20', 'YYYY-MM-DD').should.eql(moment([1963, 11, 20]).format('YYYY-MM-DD'));
    });
  });

  describe("test MOMENTADD", function () {
    it("should correctly evaluate when i add 1 day to 20-12-1963", function () {
      Formulae.MOMENTADD(new Date(1963, 11, 20), 1, 'days').toDate().should.eql(moment([1963, 11, 21]).toDate());
    });

    it("should correctly evaluate when i add 1 week to 20-12-1963", function () {
      Formulae.MOMENTADD(new Date(1963, 11, 20), 1, 'weeks').toDate().should.eql(moment([1963, 11, 27]).toDate());
    });

    it("should correctly evaluate when i add 1 month to 20-12-1963", function () {
      Formulae.MOMENTADD(new Date(1963, 11, 20), 1, 'month').toDate().should.eql(moment([1964, 0, 20]).toDate());
    });
  });

  describe("test MOMENTDIFF", function () {
    it("should correctly evaluate return 7 days for the difference between 20-12-1963 and 27-12-1963", function () {
      Formulae.MOMENTDIFF(new Date(1963, 11, 20), new Date(1963, 11, 27), 'days').should.equal(7);
    });

    it("should correctly evaluate return 1 week for the difference between 20-12-1963 and 27-12-1963", function () {
      Formulae.MOMENTDIFF(new Date(1963, 11, 20), new Date(1963, 11, 27), 'weeks').should.equal(1);
    });
  });

  describe("test MOMENTSUB", function () {
    it("should correctly evaluate when i subtract 1 day from 20-12-1963", function () {
      Formulae.MOMENTSUB(new Date(1963, 11, 20), 1, 'days').toDate().should.eql(moment([1963, 11, 19]).toDate());
    });

    it("should correctly evaluate when i subtract 1 week from 20-12-1963", function () {
      Formulae.MOMENTSUB(new Date(1963, 11, 20), 1, 'weeks').toDate().should.eql(moment([1963, 11, 13]).toDate());
    });

    it("should correctly evaluate when i subtract 1 month to 20-12-1963", function () {
      Formulae.MOMENTSUB(new Date(1963, 11, 20), 1, 'month').toDate().should.eql(moment([1963, 10, 20]).toDate());
    });
  });

  describe("test MOMENTUTC", function () {
    it("should correctly evaluate UTC from [1963, 11, 20]", function () {
      Formulae.MOMENTUTC([1963, 11, 20]).should.eql("1963-12-20T00:00:00+00:00");
    });
  });

  describe("test MOMENTUNIX", function () {
    it("should correctly evaluate 1318781876406 as a valid time ", function () {
      Formulae.MOMENTUNIX(1318781876406).should.eql(moment.unix(1318781876406).toDate());
    });

    it("should correctly evaluate 0 as a valid time ", function () {
      Formulae.MOMENTUNIX(0).should.eql(moment.unix(0).toDate());
    });
  });

  describe("test MOMENTFORMAT", function () {
    it("should correctly evaluate the date [2013, 11, 20] using DD-MM-YYYY as 20-12-2013", function () {
      Formulae.MOMENTFORMAT([2013, 11, 20], 'DD-MM-YYYY').should.eql('20-12-2013');
    });

    it("should correctly evaluate the date [2013, 11, 20] using YYYY-DD-MM as 2013-20-12", function () {
      Formulae.MOMENTFORMAT([2013, 11, 20], 'YYYY-DD-MM').should.eql('2013-20-12');
    });
  });

  describe("test MOMENTISLEAPYEAR", function () {
    it("should correctly return true to indicate that 20-12-1964 is a leap year", function () {
      Formulae.MOMENTISLEAPYEAR([1964, 11, 20]).should.equal(true);
    });

    it("should correctly return false to indicate that 20-12-1963 is not leap year", function () {
      Formulae.MOMENTISLEAPYEAR([1963, 11, 20]).should.equal(false);
    });

  });

  describe("test MOMENTSTARTOF", function () {
    it("should return 1-12-1963 for start of month when presented with 20-12-1963", function () {
      Formulae.MOMENTSTARTOF([1963, 11, 20], 'month').should.eql(new Date(1963, 11, 1));
    });

    it("should return 20-12-1963 for start of day when presented with 20-12-1963", function () {
      Formulae.MOMENTSTARTOF([1963, 11, 20], 'day').should.eql(new Date(1963, 11, 20));
    });


    it("should return 13-12-1963 for start of week when presented with 20-12-1963", function () {
      Formulae.MOMENTSTARTOF([1963, 11, 20], 'week').should.eql(new Date(1963, 11, 15));
    });

    it("should return 1-1-1963 for start of year when presented with 20-12-1963", function () {
      Formulae.MOMENTSTARTOF([1963, 11, 20], 'year').should.eql(new Date(1963, 0, 1));
    });
  });

  describe("test MOMENTENDOF", function () {
    it("should return 31-12-1963 23:59:59:999 for end of month when presented with 20-12-1963", function () {
      Formulae.MOMENTENDOF([1963, 11, 20], 'month').should.eql(new Date(1963, 11, 31, 23, 59, 59, 999));
    });

    it("should return 31-12-1963 23:59:59:999 for end of day when presented with 20-12-1963", function () {
      Formulae.MOMENTENDOF([1963, 11, 20], 'day').should.eql(new Date(1963, 11, 20, 23, 59, 59, 999));
    });

    it("should return 22-12-1963 23:59:59:999 for end of week when presented with 20-12-1963", function () {
      Formulae.MOMENTENDOF([1963, 11, 20], 'week').should.eql(new Date(1963, 11, 21, 23, 59, 59, 999));
    });

    it("should return 31-12-1963 23:59:59:999 for end of year when presented with 20-12-1963", function () {
      Formulae.MOMENTENDOF([1963, 11, 20], 'year').should.eql(new Date(1963, 11, 31, 23, 59, 59, 999));
    });
  });

  describe("test MOMENTISBEFORE", function () {
    it("should return true when determining whether 1-12-1963 is before 20-12-1963", function () {
      Formulae.MOMENTISBEFORE([1963, 11, 1], [1963, 11, 20]).should.eql(true);
    });

    it("should return false when determining whether 21-12-1963 is before 20-12-1963", function () {
      Formulae.MOMENTISBEFORE([1963, 11, 21], [1963, 11, 20]).should.eql(false);
    });
  });

  describe("test MOMENTISAFTER", function () {
    it("should return false when determining whether 1-12-1963 is after 20-12-1963", function () {
      Formulae.MOMENTISAFTER([1963, 11, 1], [1963, 11, 20]).should.eql(false);
    });

    it("should return true when determining whether 21-20-1963 is after 20-20-1963", function () {
      Formulae.MOMENTISAFTER([1963, 11, 21], [1963, 11, 20]).should.eql(true);
    });
  });
});
