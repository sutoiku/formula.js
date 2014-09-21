/* global suite, test */
var error    = require('../lib/error');
var database = require('../lib/database');
require('should');

suite('Database', function() {
  test('FINDFIELD', function() {
    database.FINDFIELD([['Tree','Apple','Pear','Cherry','Apple','Pear','Apple'],['Height',18,12,13,14,9,8],['Age',20,12,14,15,8,9],['Yield',14,10,9,10,8,6]],'Yield').should.equal(3);
    database.FINDFIELD([['Tree','Apple','Pear','Cherry','Apple','Pear','Apple'],['Height',18,12,13,14,9,8],['Age',20,12,14,15,8,9],['Yield',14,10,9,10,8,6]],'invalid').should.equal(error.value);
  });

  test('DAVERAGE', function() {
    database.DAVERAGE([['Tree','Apple','Pear','Cherry','Apple','Pear','Apple'],['Height',18,12,13,14,9,8],['Age',20,12,14,15,8,9],['Yield',14,10,9,10,8,6]],'Yield', [['Height','>10'],['Age','>14']]).should.equal(12);
    database.DAVERAGE([['Tree','Apple','Pear','Cherry','Apple','Pear','Apple'],['Height',18,12,13,14,9,8],['Age',20,12,14,15,8,9],['Yield',14,10,9,10,8,6]],'Yield', [['Height','>10','>9'],['Age','>14']]).should.equal(10.75);
    database.DAVERAGE([['Tree','Apple','Pear','Cherry','Apple','Pear','Apple'],['Height',18,12,13,14,9,8],['Age',20,12,14,15,8,9],['Yield',14,10,9,10,8,6]], undefined, [['Height','>10','>9'],['Age','>14']]).should.equal(error.value);
    database.DAVERAGE([['Tree','Apple','Pear','Cherry','Apple','Pear','Apple'],['Height',18,12,13,14,9,8],['Age',20,12,14,15,8,9],['Yield',14,10,9,10,8,6]], 3, [['Height','>10','>9'],['Age','>14']]).should.equal(10.75);
  });

  test('DCOUNT', function() {
    database.DCOUNT([['Tree','Apple','Pear','Cherry','Apple','Pear','Apple'],['Height',18,12,13,14,9,12],['Age',20,12,14,16,8,11],['Yield',14,10,9,10,8,6]],'Yield', [['Height','>10'],['Age','>14']]).should.equal(2);
    database.DCOUNT([['Tree','Apple','Pear','Cherry','Apple','Pear','Apple'],['Height',18,12,13,14,9,12],['Age',20,12,14,16,8,11],['Yield',14,10,9,10,8,6]], undefined, [['Height','>10'],['Age','>14']]).should.equal(error.value);
    database.DCOUNT([['Tree','Apple','Pear','Cherry','Apple','Pear','Apple'],['Height',18,12,13,14,9,12],['Age',20,12,14,16,8,11],['Yield',14,10,9,10,8,6]], 3, [['Height','>10'],['Age','>14']]).should.equal(2);
  });

  test('DCOUNTA', function() {
    database.DCOUNTA([['Tree','Apple','Pear','Cherry','Apple','Pear','Apple'],['Height',18,12,13,14,9,12],['Age',20,12,14,16,8,11],['Yield',null,10,9,10,8,6]],'Yield', [['Height','>10'],['Age','>14']]).should.equal(1);
    database.DCOUNTA([['Tree','Apple','Pear','Cherry','Apple','Pear','Apple'],['Height',18,12,13,14,9,12],['Age',20,12,14,16,8,11],['Yield',null,10,9,10,8,6]], undefined, [['Height','>10'],['Age','>14']]).should.equal(error.value);
    database.DCOUNTA([['Tree','Apple','Pear','Cherry','Apple','Pear','Apple'],['Height',18,12,13,14,9,12],['Age',20,12,14,16,8,11],['Yield',null,10,9,10,8,6]], 3, [['Height','>10'],['Age','>14']]).should.equal(1);
  });

  test('DGET', function() {
    database.DGET([['Tree','Apple','Pear','Cherry','Apple','Pear','Apple'],['Height',18,12,13,14,9,12],['Age',20,12,14,16,8,11],['Yield',14,10,9,10,8,6]],'Yield', [['Height','>10'],['Age','>16']]).should.equal(14);
    database.DGET([['Tree','Apple','Pear','Cherry','Apple','Pear','Apple'],['Height',18,12,13,14,9,12],['Age',20,12,14,16,8,11],['Yield',14,10,9,10,8,6]],'Yield', [['Height','>10'],['Age','>14']]).should.equal(error.num);
    database.DGET([['Tree','Apple','Pear','Cherry','Apple','Pear','Apple'],['Height',18,12,13,14,9,12],['Age',20,12,14,16,8,11],['Yield',14,10,9,10,8,6]],'Yield', [['Height','>10'],['Age','>20']]).should.equal(error.value);
    database.DGET([['Tree','Apple','Pear','Cherry','Apple','Pear','Apple'],['Height',18,12,13,14,9,12],['Age',20,12,14,16,8,11],['Yield',14,10,9,10,8,6]], undefined, [['Height','>10'],['Age','>16']]).should.equal(error.value);
    database.DGET([['Tree','Apple','Pear','Cherry','Apple','Pear','Apple'],['Height',18,12,13,14,9,12],['Age',20,12,14,16,8,11],['Yield',14,10,9,10,8,6]], 3, [['Height','>10'],['Age','>16']]).should.equal(14);
  });

  test('DMAX', function() {
    database.DMAX([['Tree','Apple','Pear','Cherry','Apple','Pear','Apple'],['Height',18,12,13,14,9,12],['Age',20,12,14,16,8,11],['Yield',14,10,9,10,8,6]],'Yield', [['Height','>10'],['Age','>14']]).should.equal(14);
    database.DMAX([['Tree','Apple','Pear','Cherry','Apple','Pear','Apple'],['Height',18,12,13,14,9,12],['Age',20,12,14,16,8,11],['Yield',10,10,9,14,8,6]],'Yield', [['Height','>10'],['Age','>14']]).should.equal(14);
    database.DMAX([['Tree','Apple','Pear','Cherry','Apple','Pear','Apple'],['Height',18,12,13,14,9,12],['Age',20,12,14,16,8,11],['Yield',14,10,9,10,8,6]],'Yield', [['Height'],['Age','>14']]).should.equal(14);
    database.DMAX([['Tree','Apple','Pear','Cherry','Apple','Pear','Apple'],['Height',18,12,13,14,9,12],['Age',20,12,14,16,8,11],['Yield',14,10,9,10,8,6]], undefined, [['Height','>10'],['Age','>14']]).should.equal(error.value);
    database.DMAX([['Tree','Apple','Pear','Cherry','Apple','Pear','Apple'],['Height',18,12,13,14,9,12],['Age',20,12,14,16,8,11],['Yield',14,10,9,10,8,6]], 3, [['Height','>10'],['Age','>14']]).should.equal(14);
  });

  test('DMIN', function() {
    database.DMIN([['Tree','Apple','Pear','Cherry','Apple','Pear','Apple'],['Height',18,12,13,14,9,12],['Age',20,12,14,16,8,11],['Yield',14,10,9,10,8,6]],'Yield', [['Height','>10'],['Age','>14']]).should.equal(10);
    database.DMIN([['Tree','Apple','Pear','Cherry','Apple','Pear','Apple'],['Height',18,12,13,14,9,12],['Age',20,12,14,16,8,11],['Yield',14,10,9,10,8,6]], undefined, [['Height','>10'],['Age','>14']]).should.equal(error.value);
    database.DMIN([['Tree','Apple','Pear','Cherry','Apple','Pear','Apple'],['Height',18,12,13,14,9,12],['Age',20,12,14,16,8,11],['Yield',14,10,9,10,8,6]], 3, [['Height','>10'],['Age','>14']]).should.equal(10);
  });

  test('DPRODUCT', function() {
    database.DPRODUCT([['Tree','Apple','Pear','Cherry','Apple','Pear','Apple'],['Height',18,12,13,14,9,12],['Age',20,12,14,16,8,11],['Yield',14,10,9,10,8,6]],'Yield', [['Height','>10'],['Age','>14']]).should.equal(140);
    database.DPRODUCT([['Tree','Apple','Pear','Cherry','Apple','Pear','Apple'],['Height',18,12,13,14,9,12],['Age',20,12,14,16,8,11],['Yield',14,10,9,10,8,6]], undefined, [['Height','>10'],['Age','>14']]).should.equal(error.value);
    database.DPRODUCT([['Tree','Apple','Pear','Cherry','Apple','Pear','Apple'],['Height',18,12,13,14,9,12],['Age',20,12,14,16,8,11],['Yield',14,10,9,10,8,6]], 3, [['Height','>10'],['Age','>14']]).should.equal(140);
  });

  test('DSTDEV', function() {
    database.DSTDEV([['Tree','Apple','Pear','Cherry','Apple','Pear','Apple'],['Height',18,12,13,14,9,12],['Age',20,12,14,16,8,11],['Yield',14,10,9,10,8,6]],'Yield', [['Height','>10']]).should.equal(2.8635642126552705);
    database.DSTDEV([['Tree','Apple','Pear','Cherry','Apple','Pear','Apple'],['Height',18,12,13,14,9,12],['Age',20,12,14,16,8,11],['Yield',14,10,9,10,8,6]], undefined, [['Height','>10']]).should.equal(error.value);
    database.DSTDEV([['Tree','Apple','Pear','Cherry','Apple','Pear','Apple'],['Height',18,12,13,14,9,12],['Age',20,12,14,16,8,11],['Yield',14,10,9,10,8,6]], 3, [['Height','>10']]).should.equal(2.8635642126552705);
  });

  test('DSTDEVP', function() {
    database.DSTDEVP([['Tree','Apple','Pear','Cherry','Apple','Pear','Apple'],['Height',18,12,13,14,9,12],['Age',20,12,14,16,8,11],['Yield',14,10,9,10,8,6]],'Yield', [['Height','>10']]).should.equal(2.5612496949731396);
    database.DSTDEVP([['Tree','Apple','Pear','Cherry','Apple','Pear','Apple'],['Height',18,12,13,14,9,12],['Age',20,12,14,16,8,11],['Yield',14,10,9,10,8,6]], undefined, [['Height','>10']]).should.equal(error.value);
    database.DSTDEVP([['Tree','Apple','Pear','Cherry','Apple','Pear','Apple'],['Height',18,12,13,14,9,12],['Age',20,12,14,16,8,11],['Yield',14,10,9,10,8,6]], 3, [['Height','>10']]).should.equal(2.5612496949731396);
  });

  test('DSUM', function() {
    database.DSUM([['Tree','Apple','Pear','Cherry','Apple','Pear','Apple'],['Height',18,12,13,14,9,12],['Age',20,12,14,16,8,11],['Yield',14,10,9,10,8,6]],'Yield', [['Height','>10'],['Age','>14']]).should.equal(24);
    database.DSUM([['Tree','Apple','Pear','Cherry','Apple','Pear','Apple'],['Height',18,12,13,14,9,12],['Age',20,12,14,16,8,11],['Yield',14,10,9,10,8,6]], undefined, [['Height','>10'],['Age','>14']]).should.equal(error.value);
    database.DSUM([['Tree','Apple','Pear','Cherry','Apple','Pear','Apple'],['Height',18,12,13,14,9,12],['Age',20,12,14,16,8,11],['Yield',14,10,9,10,8,6]], 3, [['Height','>10'],['Age','>14']]).should.equal(24);
  });

  test('DVAR', function() {
    database.DVAR([['Tree','Apple','Pear','Cherry','Apple','Pear','Apple'],['Height',18,12,13,14,9,12],['Age',20,12,14,16,8,11],['Yield',14,10,9,10,8,6]],'Yield', [['Height','>10'],['Age','>14']]).should.equal(8);
    database.DVAR([['Tree','Apple','Pear','Cherry','Apple','Pear','Apple'],['Height',18,12,13,14,9,12],['Age',20,12,14,16,8,11],['Yield',14,10,9,10,8,6]], undefined, [['Height','>10'],['Age','>14']]).should.equal(error.value);
    database.DVAR([['Tree','Apple','Pear','Cherry','Apple','Pear','Apple'],['Height',18,12,13,14,9,12],['Age',20,12,14,16,8,11],['Yield',14,10,9,10,8,6]], 3, [['Height','>10'],['Age','>14']]).should.equal(8);
  });

  test('DVARP', function() {
    database.DVARP([['Tree','Apple','Pear','Cherry','Apple','Pear','Apple'],['Height',18,12,13,14,9,12],['Age',20,12,14,16,8,11],['Yield',14,10,9,10,8,6]],'Yield', [['Height','>10'],['Age','>14']]).should.equal(4);
    database.DVARP([['Tree','Apple','Pear','Cherry','Apple','Pear','Apple'],['Height',18,12,13,14,9,12],['Age',20,12,14,16,8,11],['Yield',14,10,9,10,8,6]], undefined, [['Height','>10'],['Age','>14']]).should.equal(error.value);
    database.DVARP([['Tree','Apple','Pear','Cherry','Apple','Pear','Apple'],['Height',18,12,13,14,9,12],['Age',20,12,14,16,8,11],['Yield',14,10,9,10,8,6]], 3, [['Height','>10'],['Age','>14']]).should.equal(4);
  });
});