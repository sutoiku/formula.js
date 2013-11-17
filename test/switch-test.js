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

describe("test the switch expression", function () {
  it("should correctly evaluate a SWITCH with only zero arguments", function() {
    should.not.exist(Formulae.SWITCH());
  });

  it("should correctly evaluate a SWITCH with only one argument", function() {
    should.not.exist(Formulae.SWITCH(7));
  });

  it("should correctly evaluate a SWITCH with only two arguments", function() {
    Formulae.SWITCH(7, "Default Expression").should.equal("Default Expression");
  });

  it("should correctly evaluate a SWITCH with only three arguments", function() {
    should.not.exist(Formulae.SWITCH(7, 9, "Nine"));
  });

  it("should correctly evaluate a SWITCH with only four arguments", function() {
    Formulae.SWITCH(7, 9, "Nine", 7, "Seven").should.equal("Seven");
  });

  it("should correctly evaluate a SWITCH with only five arguments", function() {
    Formulae.SWITCH(7, 9, "Nine", 7, "Seven").should.equal("Seven");
  });

  it("should correctly evaluate a SWITCH with only six arguments", function() {
    Formulae.SWITCH(8, 9, "Nine", 7, "Seven", "Eight").should.equal("Eight");
  });

  it("should correctly evaluate a SWITCH with only seven arguments but not matching case", function() {
    should.not.exist(Formulae.SWITCH(10, 9, "Nine", 7, "Seven", 8, "Eight"));
  });
});
