/* global suite, test */
var error = require('../lib/error');
var lookup = require('../lib/lookup-reference');

suite('Lookup Reference', function () {
  test('MATCH', function () {
    lookup.MATCH().should.equal(error.na);
    lookup.MATCH(1).should.equal(error.na);
    lookup.MATCH(1, [0, 1, 2, 3, 4, 100, 7]).should.equal(2);
    lookup.MATCH(4, [0, 1, 2, 3, 4, 100, 7], 1).should.equal(5);
    lookup.MATCH(4, [0, 1, 2, 3, 4, 100, 7], 0).should.equal(5);
    lookup.MATCH(4, [0, 1, 2, 3, 4, 100, 7], -1).should.equal(5);
    lookup.MATCH(5, [0, 1, 2, 3, 4, 100, 7], 1).should.equal(5);
    lookup.MATCH(5, [0, 1, 2, 3, 4, 100, 7], 0).should.equal(error.na);
    lookup.MATCH(5, [0, 1, 2, 3, 4, 100, 7], -1).should.equal(7);
    lookup.MATCH(4, [0, 1, 2, 3, 4, 100, 7], 2).should.equal(error.na);
    lookup.MATCH(4, [0, 1, 2, 3, 4, 100, 7], -2).should.equal(error.na);
    lookup.MATCH('jima', ['jima', 'jimb', 'jimc', 'bernie'], 0).should.equal(1);
    lookup.MATCH('j*b', ['jima', 'jimb', 'jimc', 'bernie'], 0).should.equal(2);
    lookup.MATCH('j?b', ['jima', 'jimb', 'jimc', 'bernie'], 0).should.equal(error.na);
    lookup.MATCH('j??b', ['jima', 'jimb', 'jimc', 'bernie'], 0).should.equal(2);
    lookup.MATCH('j???b', ['jima', 'jimb', 'jimc', 'bernie'], 0).should.equal(error.na);
    lookup.MATCH('j???', ['jima', 'jimb', 'jimc', 'bernie'], 0).should.equal(1);
    lookup.MATCH('jimc', ['jima', 'jimb', 'jimc', 'bernie'], 0).should.equal(3);
    lookup.MATCH('jimc', ['jima', 'jimb', 'jimd', 'bernie'], -1).should.equal(3);
    lookup.MATCH('jimc', ['jima', 'jimb', 'jimd', 'bernie'], 1).should.equal(2);
  });

  test('VLOOKUP', function () {
    lookup.VLOOKUP().should.equal(error.na);
    lookup.VLOOKUP(1).should.equal(error.na);
    lookup.VLOOKUP(1, [[1, 2]]).should.equal(error.na);
    lookup.VLOOKUP(1, [[1, 2]], 2).should.equal(2);
    lookup.VLOOKUP(1, [[1, 2]], 2, false).should.equal(2);
    lookup.VLOOKUP(1, [[1, 2]], 2, true).should.equal(2);
    lookup.VLOOKUP(3, [[1, 2],[3, 4]], 2, true).should.equal(4);
    lookup.VLOOKUP(5, [[1, 2],[3, 4]], 2, false).should.equal(error.na);
    lookup.VLOOKUP(5, [[1, 2],[3, 4]], 2, true).should.equal(error.na);
    lookup.VLOOKUP('ji', [['jim', 2],['jam', 4]], 2, false).should.equal(error.na);
    lookup.VLOOKUP('ji', [['jim', 2],['jam', 4]], 2, true).should.equal(2);
    lookup.VLOOKUP('li', [['jim', 2],['jam', 4]], 2, true).should.equal(error.na);
    lookup.VLOOKUP('ji', [['jim', 2],['jam', 4]], 3, true).should.equal(error.ref);
    lookup.VLOOKUP('ji', [['jim', 2],['jam', 4]], 3, false).should.equal(error.na);
  });

  test('HLOOKUP', function() {
    lookup.HLOOKUP().should.equal(error.na);
    lookup.HLOOKUP(1).should.equal(error.na);
    lookup.HLOOKUP(1, [[1, 2]]).should.equal(error.na);
    lookup.HLOOKUP(1, [[1],[2]], 2).should.equal(2);
    lookup.HLOOKUP(1, [[1],[2]], 3).should.equal(error.ref);
    lookup.HLOOKUP(1, [[1,2],[3,4]], 2).should.equal(3);
    lookup.HLOOKUP(2, [[1,2],[3,4]], 2).should.equal(4);
    lookup.HLOOKUP(1, [[1],[2]], 2, true).should.equal(2);
    lookup.HLOOKUP(1, [[1],[2]], 3, true).should.equal(error.ref);
    lookup.HLOOKUP(1, [[1,2],[3,4]], 2, true).should.equal(3);
    lookup.HLOOKUP(2, [[1,2],[3,4]], 2, true).should.equal(4);
    lookup.HLOOKUP('ji', [['jim', 'jam'],[1, 4]], 2, false).should.equal(error.na);
    lookup.HLOOKUP('ji', [['jim', 'jam'],[1, 4]], 2, true).should.equal(1);
    lookup.HLOOKUP('li', [['jim', 'jam'],[1, 4]], 2, true).should.equal(error.na);
    lookup.HLOOKUP('ji', [['jim', 'jam'],[1, 4]], 3, true).should.equal(error.ref);
    lookup.HLOOKUP('ji', [['jim', 'jam'],[1, 4]], 3, false).should.equal(error.na);
  });
});
