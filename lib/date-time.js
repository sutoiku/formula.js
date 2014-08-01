var error = require('./error');

var d1900 = new Date(1900, 0, 1);

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

exports.DATEVALUE = function(date_text) {
  if (typeof date_text !== 'string') {
    return error.value;
  }
  var date = Date.parse(date_text);
  if (isNaN(date)) {
    return error.value;
  }
  if (date <= -2203891200000) {
    return (date - d1900) / 86400000 + 1;
  }
  return (date - d1900) / 86400000 + 2;
};
