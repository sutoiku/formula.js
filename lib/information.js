var error = require('./error');

// TODO
exports.CELL = function() {
  return;
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
  return;
};

exports.ISNUMBER = function(number) {
  return (!isNaN(parseFloat(number)) && isFinite(number)) ? true : false;
};
