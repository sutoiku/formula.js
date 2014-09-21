/* global suite, test */
var error = require('../lib/error');
var lookup = require('../lib/lookup-reference');

suite('Lookup Reference', function() {
  test('MATCH', function() {
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
});
