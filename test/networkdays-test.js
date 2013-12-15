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

describe("test the networkdays formula", function () {
  it("should return 1 day when calling with 2013-12-04, 2013-12-04", function() {
    Formulae.NETWORKDAYS('2013-12-04', '2013-12-04').should.equal(1);
  });

  it("should return 3 day when calling with 2013-12-04, 2013-12-07", function() {
    Formulae.NETWORKDAYS('2013-12-04', '2013-12-07').should.equal(3);
  });

  it("should return 3 day when calling with 2013-12-04, 2013-12-08", function() {
    Formulae.NETWORKDAYS('2013-12-04', '2013-12-07').should.equal(3);
  });

  it("should return 4 day when calling with 2013-12-04, 2013-12-09", function() {
    Formulae.NETWORKDAYS('2013-12-04', '2013-12-09').should.equal(4);
  });
});
