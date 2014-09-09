var error = require('./error');

// TODO
exports.CELL = function() {
 throw new Error('CELL is not implemented');
};

exports.ERROR = {};
exports.ERROR.TYPE = function(error_val) {
  switch (error_val) {
    case error.nil: return 1;
    case error.div0: return 2;
    case error.value: return 3;
    case error.ref: return 4;
    case error.name: return 5;
    case error.num: return 6;
    case error.na: return 7;
    case error.data: return 8;
  }
  return error.na;
};

// TODO
exports.INFO = function() {
 throw new Error('INFO is not implemented');
};

exports.ISBLANK = function(value) {
  return value === null;
};

exports.ISBINARY = function (number) {
  return (/^[01]{1,10}$/).test(number);
};

exports.ISERR = function(value) {
  return ([error.value, error.ref, error.div0, error.num, error.name, error.nil]).indexOf(value) >= 0 ||
    (typeof value === 'number' && (isNaN(value) || !isFinite(value)));
};

exports.ISERROR = function(value) {
  return exports.ISERR(value) || value === error.na;
};

exports.ISEVEN = function(number) {
  return (Math.floor(Math.abs(number)) & 1) ? false : true;
};

// TODO
exports.ISFORMULA = function() {
  throw new Error('ISFORMULA is not implemented');
};

exports.ISLOGICAL = function(value) {
  return value === true || value === false;
};

exports.ISNA = function(value) {
  return value === error.na;
};

exports.ISNONTEXT = function(value) {
  return typeof(value) !== 'string';
};

exports.ISNUMBER = function(value) {
  return typeof(value) === 'number' && !isNaN(value) && isFinite(value);
};

exports.ISODD = function(number) {
  return (Math.floor(Math.abs(number)) & 1) ? true : false;
};

// TODO
exports.ISREF = function() {
  throw new Error('ISREF is not implemented');
};

exports.ISTEXT = function(value) {
  return typeof(value) === 'string';
};

exports.N = function(value) {
  if (this.ISNUMBER(value)) {
    return value;
  }
  if (value instanceof Date) {
    return value.getTime();
  }
  if (value === true) {
    return 1;
  }
  if (value === false) {
    return 0;
  }
  if (this.ISERROR(value)) {
    return value;
  }
  return 0;
};

exports.NA = function() {
  return error.na;
};


// TODO
exports.SHEET = function() {
  throw new Error('SHEET is not implemented');
};

// TODO
exports.SHEETS = function() {
  throw new Error('SHEETS is not implemented');
};

exports.TYPE = function(value) {
  if (this.ISNUMBER(value)) {
    return 1;
  }
  if (this.ISTEXT(value)) {
    return 2;
  }
  if (this.ISLOGICAL(value)) {
    return 4;
  }
  if (this.ISERROR(value)) {
    return 16;
  }
  if (Array.isArray(value)) {
    return 64;
  }
};
