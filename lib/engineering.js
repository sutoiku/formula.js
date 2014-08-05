var error = require('./error');

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
  if (!isValidBinaryNumber(number)) {
    return error.num;
  }

  var result = parseInt(number, 2);

  // Handle negative numbers
  var stringified = number.toString();
  if (stringified.length === 10 && stringified.substring(0, 1) === '1') {
    return parseInt(stringified.substring(1), 2) - 512;
  } else {
    return result;
  }
};
