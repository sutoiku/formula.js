/**
 * @author       Jim Alateras
 */
var should = require('should');
var libpath = process.env.IMPORTERJS_COV ? '../lib-cov' : '../lib';
var Formulae = require(libpath + '/formula');


describe("test average deviation formulae", function() {
    it('should correctly calculate AVEDEV(2, 4, 8, 16) === 4.5', function() {
        Formulae.AVEDEV(2, 4, 8, 16).should.equal(4.5);
    });
});


