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
