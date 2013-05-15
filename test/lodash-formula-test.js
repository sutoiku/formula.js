/**
 * @author       Jim Alateras
 */
/**
 * @author       Jim Alateras
 */

var should = require('should');
var libpath = process.env.IMPORTERJS_COV ? "../lib-cov" : "../lib";
var Formulae = require(libpath + "/formula");

describe("test formula integration with lodash", function() {
    describe("test ISARRAY", function() {
        it("should correctly return true when i pass in an array [1, 2, 3]", function() {
            Formulae.ISARRAY([1, 2, 3]).should.eql(true);
        });

        it("should correctly return false when i pass in an object", function() {
            Formulae.ISARRAY({}).should.eql(false);
        });
    });

    describe("test FUNCTION", function() {
        it("should return [2,4] when asked for the difference between  [1,2,3,4,5] and [1,3,5])", function() {
            (Formulae.FUNCTION("x", "y", "DIFFERENCE(x, y)"))(Formulae, [1,2,3,4,5], [1,3,5]).should.eql([2,4]);
        });

        it("should return [] when asked for the difference between  [1,3,5] and [1,2,3,4,5]", function() {
            (Formulae.FUNCTION("x", "y", "DIFFERENCE(x, y)"))(Formulae, [1,3,5], [1,2,3,4,5]).should.eql([]);
        });

        it("should fail to execute a function that requires parameters but specifies none", function() {
            (function() {
                (Formulae.FUNCTION("DIFFERENCE(x, y)"))(Formulae, [1,3,5], [1,2,3,4,5]).should.eql([]);
            }).should.throwError(/not defined/);

        });
    });
});