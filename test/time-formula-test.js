/**
 * @author       Jim Alateras
 */

var should = require('should');
var libpath = process.env.IMPORTERJS_COV ? "../lib-cov" : "../lib";
var Formulae = require(libpath + "/formula");

describe("test moment formulae", function() {
    describe("test MOMENT", function() {
        it("should correctly evaluate 20-12-1963 when i use the format YYYYMMDD", function() {
            Formulae.MOMENT(new Date(1963, 11, 20), 'YYYYMMDD').should.equal('19631220');
        });

        it("should correctly evaluate 20-12-1963 when i use the format DD-MM-YYYY", function() {
            Formulae.MOMENT(new Date(1963, 11, 20), 'DD-MM-YYYY').should.equal('20-12-1963');
        });
    });

    describe("test MOMENTADD", function() {
        it("should correctly evaluate when i add 1 day to 20-12-1963", function() {
            Formulae.MOMENTADD(new Date(1963, 11, 20), 'days', 1).format('DD-MM-YYYY').should.equal('21-12-1963');
        });

        it("should correctly evaluate when i add 1 week to 20-12-1963", function() {
            Formulae.MOMENTADD(new Date(1963, 11, 20), 'weeks', 1).format('DD-MM-YYYY').should.equal('27-12-1963');
        });

        it("should correctly evaluate when i add 1 month to 20-12-1963", function() {
            Formulae.MOMENTADD(new Date(1963, 11, 20), 'month', 1).format('DD-MM-YYYY').should.equal('20-01-1964');
        });
    });

    describe("test MOMENTDIFF", function() {
        it("should correctly evaluate return 7 days for the different between 20-12-1963 and 27-12-1963", function() {
            Formulae.MOMENTDIFF(new Date(1963, 11, 20), new Date(1963, 11, 27), 'days').should.equal(7);
        });

        it("should correctly evaluate return 1 week for the different between 20-12-1963 and 27-12-1963", function() {
            Formulae.MOMENTDIFF(new Date(1963, 11, 20), new Date(1963, 11, 27), 'weeks').should.equal(1);
        });
    });

    describe("test MOMENTSUB", function() {
        it("should correctly evaluate when i subtract 1 day to 20-12-1963", function() {
            Formulae.MOMENTSUB(new Date(1963, 11, 20), 'days', 1).format('DD-MM-YYYY').should.equal('19-12-1963');
        });

        it("should correctly evaluate when i subtract 1 week to 20-12-1963", function() {
            Formulae.MOMENTSUB(new Date(1963, 11, 20), 'weeks', 1).format('DD-MM-YYYY').should.equal('13-12-1963');
        });

        it("should correctly evaluate when i subtract 1 month to 20-12-1963", function() {
            Formulae.MOMENTSUB(new Date(1963, 11, 20), 'month', 1).format('DD-MM-YYYY').should.equal('20-11-1963');
        });
    });

    describe("test MOMENTUTC", function() {
        it("should correctly evaluate evaluate 20", function() {
            Formulae.MOMENTUTC(new Date(Date.UTC(1963, 11, 20, 0, 0)),  'YYYYMMDDTHHmm').should.equal('19631220T0000');
        });
    });
});