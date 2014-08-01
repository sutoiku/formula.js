var error = require('./error');

exports.DATE = function(year, month, day) {
  // TODO: handle string arguments
  if (year < 0 || month < 0 || day < 0) {
    return error.num;
  }
  var date = new Date(year, month - 1, day);
  if (isNaN(date.getTime())) {
    return error.value;
  }
  return date;
};
