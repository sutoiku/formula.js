var misc = require('../lib/miscellaneous');
var should = require('should');

suite('Miscellaneous', function() {
  test('MD5', function() {
    misc.MD5('jim@sutoiku.com').should.equal("3d508d960d5f63a9d9384baf6b4f67c3");
    misc.MD5('ismael@sutoiku.com').should.equal("a33dab7034e1fced4adb648f46eabe5d");
  });

  test('NUMERAL', function() {
    misc.NUMERAL(10000, '0,0.0000').should.equal("10,000.0000");
    misc.NUMERAL(10000.23, '0,0').should.equal("10,000");
    misc.NUMERAL(1000.234, '$0,0.00').should.equal("$1,000.23");
    misc.NUMERAL(100, '0b').should.equal("100B");
    misc.NUMERAL(0.974878234, '0.000%').should.equal("97.488%");
  });

  test('UNIQUE', function() {
    misc.UNIQUE(1, 2, 3, 4, 5, 6, 6, 3).should.containDeep([1, 2, 3, 4, 5, 6])
    misc.UNIQUE('jima', 'jimb', 'jima', 'jimc').should.containDeep(['jima', 'jimb', 'jimc'])
  });
});
