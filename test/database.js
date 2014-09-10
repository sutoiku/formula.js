var error = require('../lib/error');
var should = require('should');
var database = require('../lib/database');

suite('Database', function() {
  test('DAVERAGE', function() {
    database.DAVERAGE([['Tree','Apple','Pear','Cherry','Apple','Pear','Apple'],['Height',18,12,13,14,9,8],['Age',20,12,14,15,8,9],['Yield',14,10,9,10,8,6]],'Yield', [['Height','>10'],['Age','>14']]).should.equal(12);
    database.DAVERAGE([['Tree','Apple','Pear','Cherry','Apple','Pear','Apple'],['Height',18,12,13,14,9,8],['Age',20,12,14,15,8,9],['Yield',14,10,9,10,8,6]],'Yield', [['Height','>10','>9'],['Age','>14']]).should.equal(10.75);
  });

  test('DCOUNT', function() {
    database.DCOUNT([['Tree','Apple','Pear','Cherry','Apple','Pear','Apple'],['Height',18,12,13,14,9,12],['Age',20,12,14,16,8,11],['Yield',14,10,9,10,8,6]],'Yield', [['Height','>10'],['Age','>14']]).should.equal(2);
  });

  test('DCOUNTA', function() {
    database.DCOUNTA([['Tree','Apple','Pear','Cherry','Apple','Pear','Apple'],['Height',18,12,13,14,9,12],['Age',20,12,14,16,8,11],['Yield',null,10,9,10,8,6]],'Yield', [['Height','>10'],['Age','>14']]).should.equal(1);
  });

  test('DGET', function() {
    database.DGET([['Tree','Apple','Pear','Cherry','Apple','Pear','Apple'],['Height',18,12,13,14,9,12],['Age',20,12,14,16,8,11],['Yield',14,10,9,10,8,6]],'Yield', [['Height','>10'],['Age','>16']]).should.equal(14);
    database.DGET([['Tree','Apple','Pear','Cherry','Apple','Pear','Apple'],['Height',18,12,13,14,9,12],['Age',20,12,14,16,8,11],['Yield',14,10,9,10,8,6]],'Yield', [['Height','>10'],['Age','>14']]).should.equal(error.num);
    database.DGET([['Tree','Apple','Pear','Cherry','Apple','Pear','Apple'],['Height',18,12,13,14,9,12],['Age',20,12,14,16,8,11],['Yield',14,10,9,10,8,6]],'Yield', [['Height','>10'],['Age','>20']]).should.equal(error.value);
  });

  test('DMAX', function() {
    database.DMAX([['Tree','Apple','Pear','Cherry','Apple','Pear','Apple'],['Height',18,12,13,14,9,12],['Age',20,12,14,16,8,11],['Yield',14,10,9,10,8,6]],'Yield', [['Height','>10'],['Age','>14']]).should.equal(14);
  });

  test('DMIN', function() {
    database.DMIN([['Tree','Apple','Pear','Cherry','Apple','Pear','Apple'],['Height',18,12,13,14,9,12],['Age',20,12,14,16,8,11],['Yield',14,10,9,10,8,6]],'Yield', [['Height','>10'],['Age','>14']]).should.equal(10);
  });

  test('DPRODUCT', function() {
    database.DPRODUCT([['Tree','Apple','Pear','Cherry','Apple','Pear','Apple'],['Height',18,12,13,14,9,12],['Age',20,12,14,16,8,11],['Yield',14,10,9,10,8,6]],'Yield', [['Height','>10'],['Age','>14']]).should.equal(140);
  });

  test('DSTDEV', function() {
    database.DSTDEV([['Tree','Apple','Pear','Cherry','Apple','Pear','Apple'],['Height',18,12,13,14,9,12],['Age',20,12,14,16,8,11],['Yield',14,10,9,10,8,6]],'Yield', [['Height','>10']]).should.equal(2.8635642126552705);
  });

  test('DSTDEVP', function() {
    database.DSTDEVP([['Tree','Apple','Pear','Cherry','Apple','Pear','Apple'],['Height',18,12,13,14,9,12],['Age',20,12,14,16,8,11],['Yield',14,10,9,10,8,6]],'Yield', [['Height','>10']]).should.equal(2.5612496949731396);
  });

  test('DSUM', function() {
    database.DSUM([['Tree','Apple','Pear','Cherry','Apple','Pear','Apple'],['Height',18,12,13,14,9,12],['Age',20,12,14,16,8,11],['Yield',14,10,9,10,8,6]],'Yield', [['Height','>10'],['Age','>14']]).should.equal(24);
  });

  test('DVAR', function() {
    database.DVAR([['Tree','Apple','Pear','Cherry','Apple','Pear','Apple'],['Height',18,12,13,14,9,12],['Age',20,12,14,16,8,11],['Yield',14,10,9,10,8,6]],'Yield', [['Height','>10'],['Age','>14']]).should.equal(8);
  });

  test('DVARP', function() {
    database.DVARP([['Tree','Apple','Pear','Cherry','Apple','Pear','Apple'],['Height',18,12,13,14,9,12],['Age',20,12,14,16,8,11],['Yield',14,10,9,10,8,6]],'Yield', [['Height','>10'],['Age','>14']]).should.equal(4);
  });
});