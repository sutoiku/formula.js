/**
 * @author       Jim Alateras
 */
var fs = require('fs');
var util = require('util');
var testCases = require('../public/tests.js').FORMULA_TESTS;

var stream = fs.createWriteStream(__dirname + "/../test/generated/formula-tests.js");
generateRequire(stream);
testCases.forEach(function(category) {
    generateStartCategory(stream, category);
    category.tests.forEach(function(test) {
        generateTestCase(stream, test);
    });
    generateEndCategory(stream, category);
});
stream.end();

function generateRequire(stream) {
    stream.write('var should = require("should");\n');
    stream.write('var libpath = process.env.IMPORTERJS_COV ? "../../lib-cov" : "../../lib";\n');
    stream.write('var Formulae = require(libpath + "/formula");\n');
    stream.write('\n\n');
}

function generateStartCategory(stream, category) {
    stream.write(util.format('describe("test %s", function() {\n', category.function));
}

function generateTestCase(stream, testCase) {
    stream.write(util.format('\tit("should correctly calculate %s", function() {\n', testCase.call));
    stream.write(util.format('\t\tFormulae.%s;\n', testCase.call));
    stream.write('\t});\n\n')
}

function generateEndCategory(stream, category) {
    stream.write('});\n\n');
}

