var error = require('./error');
var _s = require('underscore.string');

function isValidBinaryNumber(number) {
  return (/^[01]{1,10}$/).test(number);
}

// TODO
exports.BESSELI = function() {
  return;
};

// TODO
exports.BESSELJ = function() {
  return;
};

// TODO
exports.BESSELK = function() {
  return;
};

// TODO
exports.BESSELY = function() {
  return;
};

exports.BIN2DEC = function(number) {
  // Return error if number is not binary or contains more than 10 characters (10 digits)
  if (!isValidBinaryNumber(number)) {
    return error.num;
  }

  // Convert binary number to decimal
  var result = parseInt(number, 2);

  // Handle negative numbers
  var stringified = number.toString();
  if (stringified.length === 10 && stringified.substring(0, 1) === '1') {
    return parseInt(stringified.substring(1), 2) - 512;
  } else {
    return result;
  }
};


exports.BIN2HEX = function(number, places) {
  // Return error if number is not binary or contains more than 10 characters (10 digits)
  if (!isValidBinaryNumber(number)) {
    return error.num;
  }

  // Ignore places and return a 10-character hexadecimal number if number is negative
  var stringified = number.toString();
  if (stringified.length === 10 && stringified.substring(0, 1) === '1') {
    return (1099511627264 + parseInt(stringified.substring(1), 2)).toString(16);
  }

  // Convert binary number to hexadecimal
  var result = parseInt(number, 2).toString(16);

  // Return hexadecimal number using the minimum number of characters necessary if places is undefined
  if (typeof places === 'undefined') {
    return result;
  } else {
    // Return error if places is nonnumeric
    if (isNaN(places)) {
      return error.value;
    }

    // Return error if places is negative
    if (places < 0) {
      return error.num;
    }

    // Truncate places in case it is not an integer
    places = Math.floor(places);

    // Pad return value with leading 0s (zeros) if necessary (using Underscore.string)
    return (places >= result.length) ? _s.repeat('0', places - result.length) + result : error.num;
  }
};

exports.BIN2OCT = function(number, places) {
  // Return error if number is not binary or contains more than 10 characters (10 digits)
  if (!isValidBinaryNumber(number)) {
    return error.num;
  }

  // Ignore places and return a 10-character octal number if number is negative
  var stringified = number.toString();
  if (stringified.length === 10 && stringified.substring(0, 1) === '1') {
    return (1073741312 + parseInt(stringified.substring(1), 2)).toString(8);
  }

  // Convert binary number to octal
  var result = parseInt(number, 2).toString(8);

  // Return octal number using the minimum number of characters necessary if places is undefined
  if (typeof places === 'undefined') {
    return result;
  } else {
    // Return error if places is nonnumeric
    if (isNaN(places)) {
      return error.value;
    }

    // Return error if places is negative
    if (places < 0) {
      return error.num;
    }

    // Truncate places in case it is not an integer
    places = Math.floor(places);

    // Pad return value with leading 0s (zeros) if necessary (using Underscore.string)
    return (places >= result.length) ? _s.repeat('0', places - result.length) + result : error.num;
  }
};

exports.BITAND = function(number1, number2) {
  // Return error if either number is a non-numeric value
  if (isNaN(number1) || isNaN(number2)) {
    return error.value;
  }

  // Return error if either number is less than 0
  if (number1 < 0 || number2 < 0) {
    return error.num;
  }

  // Return error if either number is a non-integer
  if (Math.floor(number1) !== number1 || Math.floor(number2) !== number2) {
    return error.num;
  }

  // Return error if either number is greater than (2^48)-1
  if (number1 > 281474976710655 || number2 > 281474976710655) {
    return error.num;
  }

  // Return bitwise AND of two numbers
  return number1 & number2;
};

exports.BITLSHIFT = function(number, shift) {
  // Return error if either number is a non-numeric value
  if (isNaN(number) || isNaN(shift)) {
    return error.value;
  }

  // Return error if number is less than 0
  if (number < 0) {
    return error.num;
  }

  // Return error if number is a non-integer
  if (Math.floor(number) !== number) {
    return error.num;
  }

  // Return error if number is greater than (2^48)-1
  if (number > 281474976710655) {
    return error.num;
  }

  // Return error if the absolute value of shift is greater than 53
  if (Math.abs(shift) > 53) {
    return error.num;
  }

  // Return number shifted by shift bits to the left or to the right if shift is negative
  return (shift >= 0 ) ? number << shift : number >> -shift;
};

exports.BITOR = function(number1, number2) {
  // Return error if either number is a non-numeric value
  if (isNaN(number1) || isNaN(number2)) {
    return error.value;
  }

  // Return error if either number is less than 0
  if (number1 < 0 || number2 < 0) {
    return error.num;
  }

  // Return error if either number is a non-integer
  if (Math.floor(number1) !== number1 || Math.floor(number2) !== number2) {
    return error.num;
  }

  // Return error if either number is greater than (2^48)-1
  if (number1 > 281474976710655 || number2 > 281474976710655) {
    return error.num;
  }

  // Return bitwise OR of two numbers
  return number1 | number2;
};

exports.BITRSHIFT = function(number, shift) {
  // Return error if either number is a non-numeric value
  if (isNaN(number) || isNaN(shift)) {
    return error.value;
  }

  // Return error if number is less than 0
  if (number < 0) {
    return error.num;
  }

  // Return error if number is a non-integer
  if (Math.floor(number) !== number) {
    return error.num;
  }

  // Return error if number is greater than (2^48)-1
  if (number > 281474976710655) {
    return error.num;
  }

  // Return error if the absolute value of shift is greater than 53
  if (Math.abs(shift) > 53) {
    return error.num;
  }

  // Return number shifted by shift bits to the right or to the left if shift is negative
  return (shift >= 0 ) ? number >> shift : number << -shift;
};
